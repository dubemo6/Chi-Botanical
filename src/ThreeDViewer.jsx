import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeDViewer = ({ modelPath }) => {
    const mountRef = useRef(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [modelError, setModelError] = useState(null);

    useEffect(() => {
        let scene, camera, renderer, brick, controls, animationFrameId;

        const currentMount = mountRef.current;
        if (!currentMount) {
            console.error("Three.js mount container not found.");
            return;
        }

        // --- Scene Setup ---
        scene = new THREE.Scene();

        // Set up camera
        camera = new THREE.PerspectiveCamera(75, currentMount.offsetWidth / currentMount.offsetHeight, 0.1, 1000);
        camera.position.set(0, 0.2, 0.5);
        camera.lookAt(scene.position);

        // Set up renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.offsetWidth, currentMount.offsetHeight);
        renderer.setClearColor(0xf2f2f2, 0); // Set alpha to 0 for transparency
        currentMount.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(1, 1, 2);
        scene.add(directionalLight);

        // --- Load 3D model ---
        const gltfloader = new GLTFLoader();
        const fullModelPath = `${import.meta.env.BASE_URL || ''}${modelPath}`;

        gltfloader.load(
            fullModelPath,
            (gltf) => {
                brick = gltf.scene;
                // Center the model
                const boundingBox = new THREE.Box3().setFromObject(brick);
                const center = new THREE.Vector3();
                boundingBox.getCenter(center);
                brick.position.x = -center.x;
                brick.position.y = -center.y;
                brick.position.z = -center.z;

                // Adjust scale if needed
                brick.scale.set(0.7, 0.7, 0.7);

                scene.add(brick);

                // --- OrbitControls Setup ---
                controls = new OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.1;
                controls.enableZoom = false;
                controls.enablePan = false;
                controls.enableRotate = true;
                controls.target.set(0, 0, 0);
                controls.minDistance = 0.3;
                controls.maxDistance = 1.0;
                controls.update();

                // Start animation loop after model is loaded
                animate();
                updateRendererSize();
                setLoadingProgress(100);
            },
            (xhr) => {
                setLoadingProgress(Math.round(xhr.loaded / xhr.total * 100));
            },
            (error) => {
                console.error('Failed to load model:', error);
                setModelError('Failed to load 3D model. Check console for details.');
            }
        );

        // --- Animation Loop ---
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (brick) {
                brick.rotation.y += 0.005;
                brick.rotation.x += 0.003;
            }
            if (controls) controls.update();
            renderer.render(scene, camera);
        };

        // --- Handle Resizing ---
        const updateRendererSize = () => {
            const containerWidth = currentMount.offsetWidth;
            const containerHeight = currentMount.offsetHeight;
            camera.aspect = containerWidth / containerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerWidth, containerHeight);
        };
        window.addEventListener('resize', updateRendererSize, false);

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', updateRendererSize, false);
            if (controls) controls.dispose();
            if (renderer) renderer.dispose();
            if (scene) {
                scene.traverse((object) => {
                    if (object.isMesh) {
                        object.geometry.dispose();
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });
            }
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, [modelPath]);

    return (
        <div
            ref={mountRef}
            style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
        >
            {loadingProgress < 100 && !modelError && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#000', zIndex: 10 }}>
                    Loading: {loadingProgress}%
                </div>
            )}
            {modelError && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'red', color: 'white', padding: '20px', zIndex: 10 }}>
                    {modelError}
                </div>
            )}
        </div>
    );
};

export default ThreeDViewer;