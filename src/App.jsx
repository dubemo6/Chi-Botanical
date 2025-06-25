import React, { useRef, useEffect, useState, useCallback, useLayoutEffect } from 'react';
// Removed ReactDOM import from here as it's now handled in main.jsx
// Firebase imports have been removed as per your request for client-side booking.

// Particle Intro Animation Component (remains at the top as it's used by App)
const IntroAnimation = ({ onAnimationComplete, animationPhase, setAnimationPhase }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]); // Ref to store particles
    const animationFrameIdRef = useRef(null); // Ref to store requestAnimationFrame ID
    const initialScatteringSetupDoneRef = useRef(false); // Track if initial scatter setup has run

    // Constants for the animation
    const PARTICLE_COUNT = 4000;
    const TEXT_SIZE = 60;
    const TEXT_FONT = 'Inter, sans-serif';
    const RADIANCE_WORD = 'CHI BOTANICAL';
    const PARTICLE_COLOR = '#90EE90'; // Original lighter green
    const FLOWER_COLORS = [
        '#98FB98', '#ADFF2F', '#00FA9A', '#3CB371', '#66CDAA', '#7CFC00', '#32CD32'
    ];
    // Slightly increased PARTICLE_RADIUS as requested
    const PARTICLE_RADIUS = 1.5;

    // Particle class definition
    class Particle {
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.targetX = x;
            this.targetY = y;
            this.initialX = x;
            this.initialY = y;
            this.radius = radius;
            this.color = color;
            this.alpha = 1;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.life = 0;
            this.maxLife = 100 + Math.random() * 50;
            this.gravity = 0;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = 0;
        }

        draw(ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            ctx.beginPath();
            const halfWidth = this.radius * 1.5;
            const height = this.radius * 4;
            ctx.moveTo(0, -height / 2);
            ctx.bezierCurveTo(halfWidth, -height * 0.3, halfWidth, height * 0.3, 0, height / 2);
            ctx.bezierCurveTo(-halfWidth, height * 0.3, -halfWidth, -height * 0.3, 0, -height / 2);
            ctx.closePath();

            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.restore();
        }

        updateForForming(progress) {
            this.x += (this.targetX - this.x) * progress;
            this.y += (this.targetY - this.y) * progress;
        }

        updateForScattering() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += this.gravity;
            this.rotation += this.rotationSpeed;
            this.life++;
            this.alpha = 1 - (this.life / this.maxLife);
            if (this.alpha <= 0.05) this.alpha = 0;
        }
    }

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (canvas.width === 0 || canvas.height === 0) {
            console.warn("Canvas dimensions are zero. Skipping initial particle setup.");
            return;
        }

        const getTextPixels = (text, fontSize, font, ctx) => {
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = ctx.canvas.width;
            tempCanvas.height = ctx.canvas.height;
            tempCtx.font = `${fontSize}px ${font}`;
            tempCtx.textAlign = 'center';
            tempCtx.textBaseline = 'middle';
            tempCtx.fillStyle = '#000';
            tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2);
            
            if (tempCanvas.width === 0 || tempCanvas.height === 0) {
                console.error("Temporary canvas dimensions are zero. Cannot get image data.");
                return [];
            }

            const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
            const pixels = imageData.data;
            const textPixels = [];
            for (let y = 0; y < tempCanvas.height; y += 2) {
                for (let x = 0; x < tempCanvas.width; x += 2) {
                    const index = (y * tempCanvas.width + x) * 4;
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                        textPixels.push({ x: x, y: y });
                    }
                }
            }
            return textPixels;
        };

        const textPixels = getTextPixels(RADIANCE_WORD, TEXT_SIZE, TEXT_FONT, ctx);

        particlesRef.current = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = PARTICLE_RADIUS + Math.random() * 0.5;
            const targetPixel = textPixels[i % textPixels.length];
            const particle = new Particle(x, y, radius, PARTICLE_COLOR);
            particle.initialX = x;
            particle.initialY = y;
            if (targetPixel) {
                particle.targetX = targetPixel.x;
                particle.targetY = targetPixel.y;
            } else {
                particle.targetX = Math.random() * canvas.width;
                particle.targetY = Math.random() * canvas.height;
            }
            particlesRef.current.push(particle);
        }

        let cubeAngleX = 0;
        let cubeAngleY = 0;
        const CUBE_OFFSET_Y = 100;

        const drawCube = (ctx, centerX, centerY) => {
            const CUBE_SIZE = 80;
            const vertices = [
                [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
                [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
            ].map(v => v.map(coord => coord * CUBE_SIZE / 2));

            const edges = [
                [0, 1], [1, 2], [2, 3], [3, 0],
                [4, 5], [5, 6], [6, 7], [7, 4],
                [0, 4], [1, 5], [2, 6], [3, 7]
            ];

            const rotateX = (x, y, z, angle) => {
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                return { x: x, y: y * cos - z * sin, z: y * sin + z * cos };
            };

            const rotateY = (x, y, z, angle) => {
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                return { x: z * sin + x * cos, y: y, z: z * cos - x * sin };
            };

            const fov = 250;
            const viewDistance = 200;

            const perspectiveProjection = (x, y, z, fov, viewDistance) => {
                const scale = fov / (viewDistance + z);
                return { x: x * scale, y: y * scale };
            };

            const transformedVertices = vertices.map(v => {
                let p = { x: v[0], y: v[1], z: v[2] };
                p = rotateX(p.x, p.y, p.z, cubeAngleX);
                p = rotateY(p.x, p.y, p.z, cubeAngleY);
                const projected = perspectiveProjection(p.x, p.y, p.z, fov, viewDistance);
                return {
                    x: projected.x + centerX,
                    y: projected.y + centerY
                };
            });

            ctx.strokeStyle = 'rgba(152, 251, 152, 0.3)';
            ctx.lineWidth = 2;

            edges.forEach(edge => {
                const p1 = transformedVertices[edge[0]];
                const p2 = transformedVertices[edge[1]];
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            });
        };

        let animationProgress = 0;
        let phaseStartTime = null;

        const animate = (currentTime) => {
            if (!phaseStartTime) phaseStartTime = currentTime;
            const elapsedTime = currentTime - phaseStartTime;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (animationPhase === 'forming' || animationPhase === 'formedAndIdle') {
                drawCube(ctx, canvas.width / 2, canvas.height / 2 + CUBE_OFFSET_Y);
                cubeAngleX += 0.005;
                cubeAngleY += 0.007;
            }

            particlesRef.current.forEach(p => p.draw(ctx));

            if (animationPhase === 'forming') {
                const formingDuration = 6000; // 6 seconds for forming
                animationProgress = Math.min(1, elapsedTime / formingDuration);
                particlesRef.current.forEach(p => {
                    p.updateForForming(animationProgress * 0.05);
                });

                if (animationProgress >= 1) {
                    particlesRef.current.forEach(p => {
                        p.x = p.targetX;
                        p.y = p.targetY;
                    });
                    setAnimationPhase('formedAndIdle');
                    phaseStartTime = currentTime;
                }
            } else if (animationPhase === 'formedAndIdle') {
                const idleDuration = 15000; // 15 seconds for formed text to stay
                if (elapsedTime >= idleDuration) {
                    setAnimationPhase('scattering');
                    phaseStartTime = currentTime;
                    if (!initialScatteringSetupDoneRef.current) {
                        particlesRef.current.forEach(p => {
                            p.vx = (Math.random() - 0.5) * 40;
                            p.vy = (Math.random() - 1) * 30;
                            p.gravity = 0.05 + Math.random() * 0.05;
                            p.rotation = Math.random() * Math.PI * 2;
                            p.rotationSpeed = (Math.random() - 0.5) * 0.08;
                            p.color = FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)];
                            // Increased radius for scattered petals relative to new PARTICLE_RADIUS
                            p.radius = PARTICLE_RADIUS * 3 + Math.random() * 2;
                        });
                        initialScatteringSetupDoneRef.current = true;
                    }
                }
            } else if (animationPhase === 'scattering') {
                const scatteringDuration = 4000; // 4 seconds for scattering
                let allFaded = true;
                particlesRef.current.forEach(p => {
                    p.updateForScattering();
                    if (p.alpha > 0) allFaded = false;
                });

                if (allFaded || elapsedTime >= scatteringDuration) {
                    setAnimationPhase('done');
                    onAnimationComplete();
                    return;
                }
            }

            animationFrameIdRef.current = requestAnimationFrame(animate);
        };

        animationFrameIdRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [animationPhase, onAnimationComplete, setAnimationPhase]);

    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className={`intro-animation-container ${animationPhase === 'done' ? 'done' : 'active'}`}
        >
            <canvas ref={canvasRef} className="intro-canvas"></canvas>
            {/* Removed the loading text here */}
        </div>
    );
};

// Main App component
const App = () => {
    // State to manage the visibility of the intro animation and main content
    const [showIntro, setShowIntro] = useState(true);
    const [animationPhase, setAnimationPhase] = useState('forming'); // 'forming', 'formedAndIdle', 'scattering', 'done'

    // State for the booking section
    const [selectedServiceForBooking, setSelectedServiceForBooking] = useState(null); // Stores service details for booking
    const bookingSectionRef = useRef(null); // Ref for the booking section to scroll into view
    const offeringsSectionRef = useRef(null); // Ref for "The Offerings" section

    // Function to handle the completion of the intro animation
    const handleIntroComplete = useCallback(() => {
        setShowIntro(false); // Hide the intro animation
        setAnimationPhase('done'); // Mark animation as done
    }, []);

    // Function to handle service selection and update booking section
    const handleServiceSelect = (serviceName, servicePrice) => {
        setSelectedServiceForBooking({ name: serviceName, price: servicePrice });
        // Use a timeout to allow React to update the DOM (change display from none to flex)
        // before attempting to scroll. This improves reliability.
        setTimeout(() => {
            if (bookingSectionRef.current) {
                bookingSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100); // Small delay
    };

    // Handler for "BOOK YOUR EXPERIENCE" button to scroll to offerings
    const handleBookExperienceClick = () => {
        if (offeringsSectionRef.current) {
            offeringsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <div className="app-container">
            {/* Conditional rendering of the IntroAnimation component */}
            {showIntro && (
                <IntroAnimation
                    onAnimationComplete={handleIntroComplete}
                    animationPhase={animationPhase}
                    setAnimationPhase={setAnimationPhase}
                />
            )}

            {/* Main website content (Hero Section), hidden until intro is complete */}
            <main
                className={`main-content ${showIntro ? 'main-content-hidden' : 'main-content-visible'}`}
                style={{ display: showIntro ? 'none' : 'flex' }} // Completely hide until ready for fade-in
            >
                {/* Background Video */}
                <video
                    className="background-video"
                    src="https://videos.pexels.com/video-files/855907/855907-sd_640_360_25fps.mp4" // Placeholder video URL, REPLACE THIS!
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={(e) => console.error("Video loading error:", e)}
                >
                    Your browser does not support the video tag.
                </video>

                {/* Video Overlay for readability */}
                <div className="video-overlay"></div>

                {/* Content over video */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        Chi Botanical
                    </h1>
                    <p className="hero-subtitle">
                        Your Moment of Radiance.
                    </p>
                    <button className="hero-button" onClick={handleBookExperienceClick}>
                        BOOK YOUR EXPERIENCE
                    </button>
                    {/* Down arrow icon removed as requested */}
                </div>
            </main>

            {/* Other sections, fade in after intro */}
            <section
                className={`section-common ${showIntro ? 'section-hidden' : 'section-visible'}`}
            >
                {/* Crafted For You Section */}
                <div className="section-crafted-for-you">
                    <h2 className="section-title">
                        Crafted For You
                    </h2>
                    <p className="section-description">
                        Welcome. This is more than makeup, more than nails — it's a space crafted for you. A haven to pause, indulge, and reveal your unique radiance.
                        I believe in enhancing beauty with artistry and care, creating an experience that leaves you feeling refreshed, confident, and truly valued.
                    </p>
                </div>

                {/* The Offerings Section */}
                <div className="section-offerings" ref={offeringsSectionRef}> {/* Added ref here */}
                    <h2 className="section-title">
                        The Offerings
                    </h2>
                    <div className="offerings-grid">
                        {/* Offering Card 1: Signature Facial Makeup */}
                        <div className="offering-card">
                            <div className="offering-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paintbrush">
                                    <path d="M18.37 2.63c-2.44-.94-5.3-.2-7.22 1.72L3 13.5V19h5.5l9.55-9.55c1.92-1.92 2.66-4.78 1.72-7.22l-.45-.45Z"/>
                                    <path d="M15 5l4 4"/>
                                    <path d="M10.5 9.5L1.5 18.5"/>
                                </svg>
                            </div>
                            <h3 className="offering-title">Signature Facial Makeup</h3>
                            <p className="offering-description">
                                A tailored application using premium products for flawless, photo-ready skin that enhances your natural beauty.
                            </p>
                            <p className="offering-price">
                                Approx. 60 minutes | $120
                            </p>
                            <button
                                className="offering-button"
                                onClick={() => handleServiceSelect("Signature Facial Makeup", 120)}
                            >
                                SELECT SERVICE
                            </button>
                        </div>

                        {/* Offering Card 2: Gel Manicure Artistry */}
                        <div className="offering-card">
                            <div className="offering-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucude-hand">
                                    <path d="M18 11.4V22h-4V12.4L7.5 6H4c0-1.5 1.5-3 3-3h5.4L18 11.4z"/>
                                </svg>
                            </div>
                            <h3 className="offering-title">Gel Manicure Artistry</h3>
                            <p className="offering-description">
                                Impeccable colour application, lasting shine, and detailed cuticle care for elegant, polished hands.
                            </p>
                            <p className="offering-price">
                                Approx. 75 minutes | $95
                            </p>
                            <button
                                className="offering-button"
                                onClick={() => handleServiceSelect("Gel Manicure Artistry", 95)}
                            >
                                SELECT SERVICE
                            </button>
                        </div>

                        {/* Offering Card 3: Bridal Radiance Makeup */}
                        <div className="offering-card">
                            <div className="offering-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-feather">
                                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                                    <path d="M16 8L2 22"/>
                                    <path d="M17.5 15H9"/>
                                </svg>
                            </div>
                            <h3 className="offering-title">Bridal Radiance Makeup</h3>
                            <p className="offering-description">
                                A comprehensive, long-lasting look designed to make you feel breathtaking on your special day. Consultation included.
                            </p>
                            <p className="offering-price">
                                Approx. 120 minutes | $250
                            </p>
                            <button
                                className="offering-button"
                                onClick={() => handleServiceSelect("Bridal Radiance Makeup", 250)}
                            >
                                SELECT SERVICE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Gallery Section */}
                <div className="section-gallery">
                    <h2 className="section-title">
                        Our Gallery
                    </h2>
                    <div className="gallery-grid">
                        {/* Image Card 1 */}
                        <div
                            className="gallery-card"
                        >
                            <img
                                src="https://placehold.co/600x400/32CD32/FFFFFF?text=Image+1" // Replace with your image URL
                                alt="Gallery Image 1"
                                className="gallery-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/90EE90/000000?text=Image+Error"; }}
                            />
                        </div>
                        {/* Image Card 2 */}
                        <div
                            className="gallery-card"
                        >
                            <img
                                src="https://placehold.co/600x400/3CB371/FFFFFF?text=Image+2" // Replace with your image URL
                                alt="Gallery Image 2"
                                className="gallery-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/90EE90/000000?text=Image+Error"; }}
                            />
                        </div>
                        {/* Image Card 3 */}
                        <div
                            className="gallery-card"
                        >
                            <img
                                src="https://placehold.co/600x400/00FA9A/FFFFFF?text=Image+3" // Replace with your image URL
                                alt="Gallery Image 3"
                                className="gallery-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/90EE90/000000?text=Image+Error"; }}
                            />
                        </div>
                        {/* Image Card 4 */}
                        <div
                            className="gallery-card"
                        >
                            <img
                                src="https://placehold.co/600x400/66CDAA/FFFFFF?text=Image+4" // Replace with your image URL
                                alt="Gallery Image 4"
                                className="gallery-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/90EE90/000000?text=Image+Error"; }}
                            />
                        </div>
                        {/* Image Card 5 */}
                        <div
                            className="gallery-card"
                        >
                            <img
                                src="https://placehold.co/600x400/ADFF2F/000000?text=Image+5" // Replace with your image URL
                                alt="Gallery Image 5"
                                className="gallery-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/90EE90/000000?text=Image+Error"; }}
                            />
                        </div>
                        {/* Image Card 6 */}
                        <div
                            className="gallery-card"
                        >
                            <img
                                src="https://placehold.co/600x400/7CFC00/000000?text=Image+6" // Replace with your image URL
                                alt="Gallery Image 6"
                                className="gallery-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/90EE90/000000?text=Image+Error"; }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            {/* Removed conditional visibility as it should always be present now */}
            <BookingSection service={selectedServiceForBooking} ref={bookingSectionRef} />

            {/* Meet The Artist Section */}
            <MeetTheArtistSection show={!showIntro} />

            {/* Footer */}
            <Footer show={!showIntro} />

            <style>
                {`
                /* General Styles */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

                .app-container {
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    font-family: 'Inter', sans-serif;
                    overflow: hidden;
                    background-color: #1a202c; /* bg-gray-900 */
                }

                /* Main Content & Hero Section */
                .main-content {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100vh;
                    color: #fff;
                    transition: opacity 1000ms ease-in-out;
                }

                .main-content-hidden {
                    opacity: 0;
                }

                .main-content-visible {
                    opacity: 1;
                }

                .background-video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }

                .video-overlay {
                    position: absolute;
                    inset: 0;
                    background-color: #000;
                    opacity: 0.5;
                    z-index: 10;
                }

                .hero-content {
                    position: relative;
                    text-align: center;
                    padding: 2rem; /* p-8 */
                    z-index: 20;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .hero-title {
                    font-size: 3.75rem; /* text-6xl */
                    font-weight: 700; /* font-bold */
                    color: #98FB98; /* text-green-300 */
                    margin-bottom: 1rem; /* mb-4 */
                    letter-spacing: 0.05em; /* tracking-wide */
                }

                @media (min-width: 768px) { /* md */
                    .hero-title {
                        font-size: 5rem; /* md:text-8xl */
                    }
                }

                .hero-subtitle {
                    font-size: 1.25rem; /* text-xl */
                    color: #e2e8f0; /* text-gray-200 */
                    margin-bottom: 2rem; /* mb-8 */
                    font-weight: 300; /* font-light */
                }

                @media (min-width: 768px) { /* md */
                    .hero-subtitle {
                        font-size: 1.5rem; /* md:text-2xl */
                    }
                }

                .hero-button {
                    padding: 1rem 2rem; /* px-8 py-4 */
                    background: linear-gradient(to right, #16a34a, #15803d); /* bg-gradient-to-r from-green-600 to-green-800 */
                    color: #fff;
                    font-weight: 700; /* font-bold */
                    border-radius: 9999px; /* rounded-full */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
                    transition: all 300ms ease-in-out; /* transition-all duration-300 ease-in-out */
                    border: none;
                    cursor: pointer;
                }

                .hero-button:hover {
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05); /* hover:shadow-xl */
                    transform: scale(1.05); /* hover:scale-105 */
                }

                .down-arrow {
                    position: absolute;
                    bottom: 2rem; /* bottom-8 */
                    color: #fff;
                    font-size: 2.5rem; /* text-4xl */
                    animation: bounce 1s infinite;
                }

                @media (min-width: 768px) { /* md */
                    .down-arrow {
                        bottom: 3rem; /* md:bottom-12 */
                    }
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                /* Common Section Styles */
                .section-common {
                    width: 100%;
                    min-height: 100vh;
                    background-color: #047857; /* bg-emerald-900 */
                    color: #fff;
                    padding: 4rem 1rem; /* py-16 px-4 */
                    transition: opacity 1000ms ease-in-out;
                }

                @media (min-width: 768px) { /* md */
                    .section-common {
                        padding-left: 2rem; /* md:px-8 */
                        padding-right: 2rem; /* md:px-8 */
                    }
                }

                .section-hidden {
                    opacity: 0;
                    display: none;
                }

                .section-visible {
                    opacity: 1;
                    display: block;
                }

                .section-crafted-for-you {
                    max-width: 56rem; /* max-w-4xl */
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                    margin-bottom: 5rem; /* mb-20 */
                }

                .section-title {
                    font-size: 2.25rem; /* text-4xl */
                    font-weight: 700; /* font-bold */
                    color: #98FB98; /* text-green-300 */
                    margin-bottom: 1.5rem; /* mb-6 */
                    border-bottom: 2px solid #10b981; /* border-b-2 border-green-500 */
                    padding-bottom: 0.5rem; /* pb-2 */
                    display: inline-block;
                }

                @media (min-width: 768px) { /* md */
                    .section-title {
                        font-size: 3rem; /* md:text-5xl */
                    }
                }

                .section-description {
                    font-size: 1.125rem; /* text-lg */
                    color: #e2e8f0; /* text-gray-200 */
                    line-height: 1.75; /* leading-relaxed */
                    padding: 0 1rem; /* px-4 */
                }

                @media (min-width: 768px) { /* md */
                    .section-description {
                        font-size: 1.25rem; /* md:text-xl */
                    }
                }

                /* Offerings Section */
                .section-offerings {
                    max-width: 72rem; /* max-w-6xl */
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                    margin-bottom: 5rem; /* mb-20 */
                }

                .offerings-grid {
                    display: grid;
                    grid-template-columns: 1fr; /* grid-cols-1 */
                    gap: 2rem; /* gap-8 */
                }

                @media (min-width: 768px) { /* md */
                    .offerings-grid {
                        grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
                    }
                }

                .offering-card {
                    background-color: #2d3748; /* bg-gray-800 */
                    padding: 2rem; /* p-8 */
                    border-radius: 1rem; /* rounded-2xl */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: transform 300ms; /* transition-transform duration-300 */
                }

                .offering-card:hover {
                    transform: scale(1.05); /* hover:scale-105 */
                }

                .offering-icon {
                    color: #4ade80; /* text-green-400 */
                    font-size: 3.75rem; /* text-6xl */
                    margin-bottom: 1rem; /* mb-4 */
                }

                .offering-title {
                    font-size: 1.5rem; /* text-2xl */
                    font-weight: 600; /* font-semibold */
                    color: #bbf7d0; /* text-green-200 */
                    margin-bottom: 0.5rem; /* mb-2 */
                }

                .offering-description {
                    color: #d1d5db; /* text-gray-300 */
                    text-align: center;
                    font-size: 0.875rem; /* text-sm */
                    margin-bottom: 1rem; /* mb-4 */
                }

                .offering-price {
                    color: #98FB98; /* text-green-300 */
                    font-size: 1.125rem; /* text-lg */
                    font-weight: 500; /* font-medium */
                    margin-bottom: 1.5rem; /* mb-6 */
                }

                .offering-button {
                    padding: 0.5rem 1.5rem; /* px-6 py-2 */
                    background-color: #064e3b; /* bg-green-950 */
                    color: #fff;
                    font-weight: 600; /* font-semibold */
                    border-radius: 9999px; /* rounded-full */
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06); /* shadow-md */
                    transition: background-color 300ms; /* transition-colors duration-300 */
                    border: none;
                    cursor: pointer;
                }

                .offering-button:hover {
                    background-color: #15803d; /* hover:bg-green-700 */
                }

                /* Image Gallery Section */
                .section-gallery {
                    max-width: 80rem; /* max-w-7xl */
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                    margin-bottom: 5rem; /* mb-20 */
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: 1fr; /* grid-cols-1 */
                    gap: 1.5rem; /* gap-6 */
                }

                @media (min-width: 640px) { /* sm */
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr); /* sm:grid-cols-2 */
                    }
                }

                @media (min-width: 1024px) { /* lg */
                    .gallery-grid {
                        grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
                    }
                }

                .gallery-card {
                    width: 100%;
                    height: auto;
                    border-radius: 0.75rem; /* rounded-xl */
                    overflow: hidden;
                    box-shadow: 0px 15px 40px -5px rgba(0, 80, 0, 0.9), 0px 8px 20px -3px rgba(0, 80, 0, 0.6);
                    transition: transform 300ms; /* transition-transform duration-300 */
                }

                .gallery-card:hover {
                    transform: scale(1.05); /* hover:scale-105 */
                }

                .gallery-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                /* Intro Animation Component */
                .intro-animation-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #d7d7d7; /* Milktea-like color */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: opacity 1000ms ease-in-out;
                }

                .intro-animation-container.done {
                    opacity: 0;
                    pointer-events: none;
                }

                .intro-animation-container.active {
                    opacity: 1;
                }

                .intro-canvas {
                    display: block;
                }

                .loading-text {
                    position: absolute;
                    color: #374151; /* text-gray-800 */
                    font-size: 1.875rem; /* text-3xl */
                    opacity: 0.75;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.75;
                    }
                    50% {
                        opacity: 0.4;
                    }
                }

                /* Booking Section */
                .booking-section {
                    width: 100%;
                    height: auto; /* Changed to auto to fit content */
                    background-color: #1a202c; /* bg-gray-900 */
                    color: #fff;
                    padding: 4rem 1rem; /* py-16 px-4 */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    opacity: 1;
                    overflow: visible;
                    pointer-events: auto;
                }

                @media (min-width: 768px) { /* md */
                    .booking-section {
                        padding-left: 2rem; /* md:px-8 */
                        padding-right: 2rem; /* md:px-8 */
                    }
                }

                /* Booking Section Content Wrapper - Controls dynamic width and style */
                .booking-content-wrapper {
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    transition: max-width 700ms ease-in-out, padding 700ms ease-in-out, background-color 700ms ease-in-out, box-shadow 700ms ease-in-out, border-radius 700ms ease-in-out;
                }

                .collapsed-booking-content {
                    max-width: 32rem; /* A smaller width for the "no service selected" state */
                    padding: 2rem; /* Padding for the collapsed card */
                    background-color: #2d3748; /* bg-gray-800 for card look */
                    border-radius: 0.75rem; /* rounded-xl for card look */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg for card look */
                }

                .expanded-booking-content {
                    max-width: 80rem; /* max-w-7xl when service is selected */
                    padding: 0; /* Remove padding from wrapper when expanded */
                    background-color: transparent; /* No background when expanded */
                    box-shadow: none; /* No shadow when expanded */
                    border-radius: 0; /* No border-radius when expanded */
                }


                .message-box {
                    padding: 1rem; /* p-4 */
                    margin-bottom: 2rem; /* mb-8 */
                    border-radius: 0.5rem; /* rounded-lg */
                    text-align: center;
                    color: #fff;
                    font-weight: 600; /* font-semibold */
                }

                .message-box.error {
                    background-color: #dc2626; /* bg-red-600 */
                }

                .message-box.success {
                    background-color: #16a34a; /* bg-green-600 */
                }

                .no-service-selected-message {
                    text-align: center;
                    color: #d1d5db; /* text-gray-300 */
                }

                .no-service-selected-message p {
                    font-size: 1.25rem; /* text-xl */
                    margin-bottom: 1rem; /* mb-4 */
                }

                .no-service-selected-message .user-id {
                    font-size: 1.125rem; /* text-lg */
                    display: none; /* Hide user ID as Firebase auth is removed */
                }

                .no-service-selected-message .user-id span {
                    font-weight: 700; /* font-bold */
                    color: #98FB98; /* text-green-300 */
                    word-break: break-all; /* break-words */
                }

                /* Calendar and Time Slots Layout */
                .calendar-time-layout {
                    display: flex;
                    flex-direction: column; /* flex-col */
                    justify-content: center;
                    align-items: flex-start; /* items-start */
                    width: 100%;
                }

                @media (min-width: 1024px) { /* lg */
                    .calendar-time-layout {
                        flex-direction: row; /* lg:flex-row */
                        space-x: 2rem; /* lg:space-x-8 */
                    }
                }

                /* Calendar Card */
                .calendar-card {
                    background-color: #2d3748; /* bg-gray-800 */
                    padding: 1.5rem; /* p-6 */
                    border-radius: 0.75rem; /* rounded-xl */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
                    width: 100%;
                    margin-bottom: 2rem; /* mb-8 */
                }

                @media (min-width: 1024px) { /* lg */
                    .calendar-card {
                        width: 50%; /* lg:w-1/2 */
                        margin-bottom: 0; /* lg:mb-0 */
                    }
                }

                .calendar-title {
                    font-size: 1.875rem; /* text-3xl */
                    font-weight: 700; /* font-bold */
                    color: #98FB98; /* text-green-300 */
                    margin-bottom: 1.5rem; /* mb-6 */
                    text-align: center;
                }

                .calendar-navigation {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem; /* mb-6 */
                }

                .calendar-navigation-button {
                    padding: 0.5rem; /* p-2 */
                    border-radius: 9999px; /* rounded-full */
                    background-color: #047857; /* bg-green-700 */
                    transition: background-color 300ms; /* transition-colors */
                    border: none;
                    cursor: pointer;
                }

                .calendar-navigation-button:hover {
                    background-color: #059669; /* hover:bg-green-600 */
                }

                .calendar-navigation-title {
                    font-size: 1.25rem; /* text-xl */
                    font-weight: 600; /* font-semibold */
                    color: #fff;
                }

                .week-days-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 0.5rem; /* gap-2 */
                    text-align: center;
                    font-size: 0.875rem; /* text-sm */
                    font-weight: 500; /* font-medium */
                    color: #9ca3af; /* text-gray-400 */
                    margin-bottom: 1rem; /* mb-4 */
                }

                .days-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 0.5rem; /* gap-2 */
                }

                .day-cell {
                    padding: 0.5rem; /* p-2 */
                    border-radius: 9999px; /* rounded-full */
                    font-weight: 600; /* font-semibold */
                    transition: all 200ms; /* transition-colors duration-200 */
                    border: none;
                    cursor: pointer;
                }

                .day-cell.selected {
                    background-color: #10b981; /* bg-green-500 */
                    color: #fff;
                }

                .day-cell.default {
                    background-color: #4b5563; /* bg-gray-700 */
                    color: #e2e8f0; /* text-gray-200 */
                }

                .day-cell.past-date {
                    opacity: 0.5;
                    cursor: not-allowed;
                    background-color: #1a202c; /* bg-gray-900 */
                }

                .day-cell:not(.past-date):hover {
                    background-color: #059669; /* hover:bg-green-600 */
                }

                /* Time Slots Card */
                .time-slots-card {
                    background-color: #2d3748; /* bg-gray-800 */
                    padding: 1.5rem; /* p-6 */
                    border-radius: 0.75rem; /* rounded-xl */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
                    width: 100%;
                }

                @media (min-width: 1024px) { /* lg */
                    .time-slots-card {
                        width: 50%; /* lg:w-1/2 */
                    }
                }

                .time-slots-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr); /* grid-cols-2 */
                    gap: 0.75rem; /* gap-3 */
                }

                @media (min-width: 640px) { /* sm */
                    .time-slots-grid {
                        grid-template-columns: repeat(3, 1fr); /* sm:grid-cols-3 */
                    }
                }

                .time-slot-button {
                    padding: 0.75rem; /* p-3 */
                    border-radius: 0.75rem; /* rounded-xl */
                    font-weight: 500; /* font-medium */
                    transition: all 200ms; /* transition-colors duration-200 */
                    font-size: 0.875rem; /* text-sm */
                    border: none;
                    cursor: pointer;
                }

                .time-slot-button.selected {
                    background-color: #10b981; /* bg-green-500 */
                    color: #fff;
                }

                .time-slot-button.default {
                    background-color: #4b5563; /* bg-gray-700 */
                    color: #e2e8f0; /* text-gray-200 */
                }

                .time-slot-button.booked, .time-slot-button.past-time {
                    opacity: 0.5;
                    cursor: not-allowed;
                    background-color: #7f1d1d; /* bg-red-900 */
                    text-decoration: line-through;
                }

                .time-slot-button:not(.booked):not(.past-time):hover {
                    background-color: #059669; /* hover:bg-green-600 */
                }

                .no-times-message {
                    color: #9ca3af; /* text-gray-400 */
                    text-align: center;
                }

                .proceed-button {
                    margin-top: 2rem; /* mt-8 */
                    width: 100%;
                    padding: 0.75rem; /* py-3 */
                    background: linear-gradient(to right, #16a34a, #15803d); /* bg-gradient-to-r from-green-600 to-green-800 */
                    color: #fff;
                    font-weight: 700; /* font-bold */
                    border-radius: 9999px; /* rounded-full */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
                    transition: all 300ms ease-in-out; /* transition-all duration-300 ease-in-out */
                    border: none;
                    cursor: pointer;
                }

                .proceed-button:hover:not(:disabled) {
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05); /* hover:shadow-xl */
                    transform: scale(1.05); /* hover:scale-105 */
                }

                .proceed-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                /* Confirm Details Step */
                .confirm-details-card {
                    background-color: #2d3748; /* bg-gray-800 */
                    padding: 2rem; /* p-8 */
                    border-radius: 0.75rem; /* rounded-xl */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
                    width: 100%;
                    max-width: 32rem; /* max-w-lg */
                    margin-left: auto;
                    margin-right: auto;
                }

                .details-summary {
                    margin-bottom: 1.5rem; /* mb-6 */
                    line-height: 1.5; /* space-y-3 */
                    font-size: 1.125rem; /* text-lg */
                    color: #e2e8f0; /* text-gray-200 */
                }

                .details-summary strong {
                    font-weight: 700; /* font-bold */
                }

                .details-summary .user-id {
                    font-size: 0.875rem; /* text-sm */
                    color: #9ca3af; /* text-gray-400 */
                    display: none; /* Hide user ID as Firebase auth is removed */
                }

                .details-summary .user-id span {
                    font-weight: 700; /* font-bold */
                    color: #98FB98; /* text-green-300 */
                    word-break: break-all; /* break-words */
                }

                .form-group {
                    margin-bottom: 1rem; /* space-y-4 */
                }

                .form-label {
                    display: block;
                    color: #d1d5db; /* text-gray-300 */
                    font-size: 0.875rem; /* text-sm */
                    font-weight: 700; /* font-bold */
                    margin-bottom: 0.5rem; /* mb-2 */
                }

                .form-input, .form-textarea {
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow appearance-none */
                    border: 1px solid transparent; /* border */
                    border-radius: 0.5rem; /* rounded-xl */
                    width: 100%;
                    padding: 0.75rem 1rem; /* py-3 px-4 */
                    color: #1a202c; /* text-gray-900 */
                    line-height: 1.25; /* leading-tight */
                    outline: none; /* focus:outline-none */
                    background-color: #e2e8f0; /* bg-gray-200 */
                }

                .form-input:focus, .form-textarea:focus {
                    ring-width: 2px; /* focus:ring-2 */
                    ring-color: #10b981; /* focus:ring-green-500 */
                }

                .form-textarea {
                    resize: vertical;
                }

                .form-actions {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem; /* space-x-4 */
                }

                .form-button {
                    flex: 1; /* flex-1 */
                    padding: 0.75rem; /* py-3 */
                    font-weight: 700; /* font-bold */
                    border-radius: 9999px; /* rounded-full */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
                    transition: all 300ms ease-in-out; /* transition-all duration-300 ease-in-out */
                    border: none;
                    cursor: pointer;
                }

                .form-button.back {
                    background-color: #4b5563; /* bg-gray-700 */
                    color: #fff;
                }

                .form-button.back:hover {
                    background-color: #374151; /* hover:bg-gray-600 */
                }

                .form-button.confirm {
                    background: linear-gradient(to right, #16a34a, #15803d); /* bg-gradient-to-r from-green-600 to-green-800 */
                    color: #fff;
                }

                .form-button.confirm:hover {
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05); /* hover:shadow-xl */
                    transform: scale(1.05); /* hover:scale-105 */
                }

                /* Booking Success/Failure */
                .booking-status-card {
                    padding: 2rem; /* p-8 */
                    border-radius: 0.75rem; /* rounded-xl */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
                    width: 100%;
                    max-width: 28rem; /* max-w-md */
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                }

                .booking-status-card.success {
                    background-color: #065f46; /* bg-green-800 */
                }

                .booking-status-card.failure {
                    background-color: #991b1b; /* bg-red-800 */
                }

                .status-title {
                    font-size: 1.875rem; /* text-3xl */
                    font-weight: 700; /* font-bold */
                    color: #fff;
                    margin-bottom: 1rem; /* mb-4 */
                }

                .status-message {
                    font-size: 1.125rem; /* text-lg */
                    margin-bottom: 1.5rem; /* mb-6 */
                }

                .status-message.success {
                    color: #d1fae5; /* text-green-100 */
                }

                .status-message.failure {
                    color: #fca5a5; /* text-red-100 */
                }

                .status-sub-message {
                    font-size: 0.875rem; /* text-sm */
                    margin-bottom: 2rem; /* mb-8 */
                }

                .status-sub-message.success {
                    color: #a7f3d0; /* text-green-200 */
                }

                .status-sub-message.failure {
                    color: #f87171; /* text-red-200 */
                }

                .status-message span {
                    font-weight: 700; /* font-bold */
                }

                .status-button {
                    padding: 0.75rem 2rem; /* px-8 py-3 */
                    background-color: #fff;
                    font-weight: 700; /* font-bold */
                    border-radius: 9999px; /* rounded-full */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
                    transition: background-color 300ms; /* transition-colors duration-300 */
                    border: none;
                    cursor: pointer;
                }

                .status-button.success {
                    color: #064e3b; /* text-green-900 */
                }

                .status-button.success:hover {
                    background-color: #e2e8f0; /* hover:bg-gray-200 */
                }

                .status-button.failure {
                    color: #7f1d1d; /* text-red-900 */
                }

                .status-button.failure:hover {
                    background-color: #e2e8f0; /* hover:bg-gray-200 */
                }

                .status-button + .status-button {
                    margin-top: 1rem; /* mt-4 */
                }

                /* Meet The Artist Section */
                .meet-artist-section {
                    width: 100%;
                    background-color: #047857; /* bg-emerald-900 */
                    color: #fff;
                    padding: 4rem 1rem; /* py-16 px-4 */
                    text-align: center;
                    transition: opacity 1000ms ease-in-out;
                }

                .meet-artist-section-hidden {
                    opacity: 0;
                    display: none;
                }

                .meet-artist-section-visible {
                    opacity: 1;
                    display: block;
                }

                .meet-artist-section .section-title {
                    margin-bottom: 2rem; /* mb-8 */
                }

                .artist-photo-placeholder {
                    width: 150px;
                    height: 150px;
                    background-color: #a7f3d0; /* green-200 */
                    border-radius: 50%;
                    margin: 0 auto 2rem auto; /* mx-auto mb-8 */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #064e3b; /* green-900 */
                    font-weight: 600; /* font-semibold */
                    font-size: 0.875rem; /* text-sm */
                    text-align: center;
                }

                .artist-description {
                    max-width: 56rem; /* max-w-4xl */
                    margin: 0 auto 2.5rem auto; /* mx-auto mb-10 */
                    font-size: 1.125rem; /* text-lg */
                    line-height: 1.75; /* leading-relaxed */
                    color: #e2e8f0; /* text-gray-200 */
                }

                .artist-contact-info {
                    font-size: 1rem; /* text-base */
                    color: #d1d5db; /* text-gray-300 */
                    margin-bottom: 2rem; /* mb-8 */
                    line-height: 1.5;
                }

                .artist-contact-info a {
                    color: #98FB98; /* text-green-300 */
                    text-decoration: none;
                    transition: color 300ms;
                }

                .artist-contact-info a:hover {
                    color: #4ade80; /* green-400 */
                }

                .social-icons {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem; /* space-x-6 */
                    margin-bottom: 3rem; /* mb-12 */
                }

                .social-icon svg {
                    width: 2.5rem; /* w-10 */
                    height: 2.5rem; /* h-10 */
                    color: #98FB98; /* text-green-300 */
                    transition: color 300ms;
                }

                .social-icon:hover svg {
                    color: #4ade80; /* green-400 */
                }

                /* Footer */
                .footer {
                    width: 100%;
                    background-color: #1a202c; /* bg-gray-900 */
                    color: #cbd5e0; /* text-gray-400 */
                    padding: 1.5rem 1rem; /* py-6 px-4 */
                    text-align: center;
                    font-size: 0.875rem; /* text-sm */
                    border-top: 1px solid #2d3748; /* border-t border-gray-800 */
                    transition: opacity 1000ms ease-in-out;
                }

                .footer-hidden {
                    opacity: 0;
                    display: none;
                }

                .footer-visible {
                    opacity: 1;
                    display: block;
                }

                .footer-links a {
                    color: #98FB98; /* text-green-300 */
                    text-decoration: none;
                    margin: 0 0.5rem; /* mx-2 */
                    transition: color 300ms;
                }

                .footer-links a:hover {
                    color: #4ade80; /* green-400 */
                }
                `}
            </style>
        </div>
    );
};


// Booking Section Component (formerly BookingModal)
const BookingSection = React.forwardRef(({ service }, ref) => { // Use React.forwardRef here
    // Reset states when service changes (e.g., a new "SELECT SERVICE" button is clicked)
    useEffect(() => {
        setBookingStep('selectDateTime');
        setSelectedDate(null);
        setSelectedTime(null);
        setUserName('');
        setUserEmail('');
        setUserPhone('');
        setUserNotes('');
        setCurrentMonth(new Date().getMonth());
        setCurrentYear(new Date().getFullYear());
        setMessage(''); // Clear any previous messages
        setMessageType(''); // Clear message type
    }, [service]);

    // Local state to simulate booked slots for the current session (no persistence without Firebase)
    const [bookedSlots, setBookedSlots] = useState([]); // Stores { date: 'YYYY-MM-DD', time: 'HH:MM AM/PM' }

    // State for the calendar and form
    const [bookingStep, setBookingStep] = useState('selectDateTime'); // 'selectDateTime', 'confirmDetails', 'bookingSuccess', 'bookingFailure'
    const [selectedDate, setSelectedDate] = useState(null); // Format: 'YYYY-MM-DD'
    const [selectedTime, setSelectedTime] = useState(null); // Format: 'HH:MM AM/PM'
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userNotes, setUserNotes] = useState('');
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    // Helper functions for calendar
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getMonthName = (monthIndex) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[monthIndex];
    };

    const generateTimeSlots = () => {
        const slots = [];
        for (let i = 9; i < 17; i++) { // 9 AM to 4 PM
            slots.push(`${i}:00 AM`);
            // Add half-hour slots for more flexibility
            if (i < 16) { // Don't add 4:30 PM
                slots.push(`${i}:30 AM`);
            }
        }
        // Adjust for PM if necessary (only for times >= 12)
        return slots.map(slot => {
            const [hourStr, minuteStr, ampm] = slot.split(/:|\s/);
            let hour = parseInt(hourStr);
            if (ampm === 'PM' && hour !== 12) {
                hour += 12;
            } else if (ampm === 'AM' && hour === 12) {
                hour = 0; // Midnight
            }
            return `${hour}:${minuteStr} ${ampm || ''}`.trim();
        });
    };

    const allTimeSlots = generateTimeSlots();

    // Handlers for calendar navigation and selection
    const goToPreviousMonth = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 0) {
                setCurrentYear(prevYear => prevYear - 1);
                return 11;
            }
            return prevMonth - 1;
        });
        setSelectedDate(null); // Reset selected date when changing month
        setSelectedTime(null);
    };

    const goToNextMonth = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 11) {
                setCurrentYear(prevYear => prevYear + 1);
                return 0;
            }
            return prevMonth + 1;
        });
        setSelectedDate(null); // Reset selected date when changing month
        setSelectedTime(null);
    };

    const handleDateSelect = (day) => {
        const newDate = new Date(currentYear, currentMonth, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today to start of day

        if (newDate < today) {
            showMessage("Cannot select a past date.", "error");
            return;
        }

        // Corrected line: Formats the date string in local time to avoid timezone issues
        const formattedDate = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')}`;
        setSelectedDate(formattedDate);
        setSelectedTime(null); // Reset time when a new date is selected
        setMessage(''); // Clear message
        setMessageType('');
    };

    const handleTimeSelect = (time) => {
        if (!selectedDate) {
            showMessage("Please select a date first.", "error");
            return;
        }

        // Check if the selected slot is already booked locally for this session
        const isBooked = bookedSlots.some(slot =>
            slot.date === selectedDate && slot.time === time
        );

        if (isBooked) {
            showMessage("This slot is already booked. Please choose another time.", "error");
        } else {
            setSelectedTime(time);
            setMessage(''); // Clear message
            setMessageType('');
        }
    };

    const handleProceedToDetails = () => {
        if (!service) {
            showMessage("Please select a service first.", "error");
            return;
        }
        if (!selectedDate || !selectedTime) {
            showMessage("Please select both a date and a time.", "error");
            return;
        }
        setBookingStep('confirmDetails');
        setMessage(''); // Clear message
        setMessageType('');
    };

    const handleConfirmBooking = () => {
        if (!userName || !userEmail || !userPhone) {
            showMessage("Please fill in all required contact details.", "error");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }
        if (!/^\+?[0-9\s-()]{7,20}$/.test(userPhone)) {
            showMessage("Please enter a valid phone number.", "error");
            return;
        }

        try {
            // Simulate booking by adding to local state (no persistence)
            setBookedSlots(prevBookedSlots => [
                ...prevBookedSlots,
                { date: selectedDate, time: selectedTime }
            ]);

            setBookingStep('bookingSuccess');
            showMessage("Booking confirmed successfully!", "success");
            // Clear form fields after successful booking
            setSelectedDate(null);
            setSelectedTime(null);
            setUserName('');
            setUserEmail('');
            setUserPhone('');
            setUserNotes('');
        } catch (error) {
            console.error("Error confirming booking:", error);
            setBookingStep('bookingFailure');
            showMessage("Failed to confirm booking. Please try again.", "error");
        }
    };

    const showMessage = (msg, type) => {
        setMessage(msg);
        setMessageType(type);
        // Automatically hide message after some time (e.g., 5 seconds)
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 5000);
    };

    const hasServiceSelected = service !== null;

    // Render content based on booking step
    const renderBookingContent = () => {
        if (!hasServiceSelected) {
            return (
                <div className="no-service-selected-message">
                    <p>Please select a service from "The Offerings" section to book your experience.</p>
                    {/* User ID is not applicable without Firebase Auth, so it's hidden via CSS */}
                    <p className="user-id">Your User ID: <span></span></p>
                </div>
            );
        }

        switch (bookingStep) {
            case 'selectDateTime':
                const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
                const daysInMonth = getDaysInMonth(currentMonth, currentYear);
                const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

                return (
                    <div className="calendar-time-layout">
                        {/* Calendar */}
                        <div className="calendar-card">
                            <h3 className="calendar-title">
                                Select Date & Time for {service.name}
                            </h3>
                            <div className="calendar-navigation">
                                <button
                                    onClick={goToPreviousMonth}
                                    className="calendar-navigation-button"
                                    aria-label="Previous Month"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                                </button>
                                <h4 className="calendar-navigation-title">
                                    {getMonthName(currentMonth)} {currentYear}
                                </h4>
                                <button
                                    onClick={goToNextMonth}
                                    className="calendar-navigation-button"
                                    aria-label="Next Month"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </button>
                            </div>

                            <div className="week-days-grid">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                    <div key={day}>{day}</div>
                                ))}
                            </div>
                            <div className="days-grid">
                                {/* Empty cells for days before the 1st */}
                                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                                    <div key={`empty-${i}`} className="day-cell-empty"></div>
                                ))}
                                {/* Days of the month */}
                                {days.map(day => {
                                    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                                    const isSelected = selectedDate === dateString;
                                    const today = new Date();
                                    today.setHours(0,0,0,0);
                                    const currentDate = new Date(currentYear, currentMonth, day);
                                    const isPastDate = currentDate < today;

                                    return (
                                        <button
                                            key={day}
                                            onClick={() => handleDateSelect(day)}
                                            className={`day-cell ${isSelected ? 'selected' : 'default'} ${isPastDate ? 'past-date' : ''}`}
                                            disabled={isPastDate}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Time Slots */}
                        <div className="time-slots-card">
                            <h3 className="calendar-title">Available Times</h3>
                            {selectedDate ? (
                                <div className="time-slots-grid">
                                    {allTimeSlots.map(time => {
                                        const isSelected = selectedTime === time;
                                        // Check against locally booked slots
                                        const isBooked = bookedSlots.some(slot =>
                                            slot.date === selectedDate && slot.time === time
                                        );

                                        // Determine if the slot is in the past for the selected date
                                        const now = new Date();
                                        const [timePart, ampmPart] = time.split(' ');
                                        let [hour, minute] = timePart.split(':').map(Number);

                                        // Convert to 24-hour format for correct Date object creation
                                        if (ampmPart === 'PM' && hour !== 12) {
                                            hour += 12;
                                        } else if (ampmPart === 'AM' && hour === 12) {
                                            hour = 0; // Midnight case (12 AM)
                                        }

                                        // Parse selectedDate string (YYYY-MM-DD) to get year, month, day locally
                                        const dateParts = selectedDate.split('-').map(Number);
                                        // Month in Date constructor is 0-indexed, so subtract 1
                                        const selectedDateTime = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], hour, minute);

                                        const isPastTime = selectedDateTime < now;


                                        return (
                                            <button
                                                key={time}
                                                onClick={() => handleTimeSelect(time)}
                                                className={`time-slot-button ${isSelected ? 'selected' : 'default'} ${isBooked || isPastTime ? 'booked' : ''}`}
                                                disabled={isBooked || isPastTime}
                                            >
                                                {time} {isBooked ? '(Booked)' : isPastTime ? '(Past)' : ''}
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <p className="no-times-message">Please select a date to see available times.</p>
                            )}
                            <button
                                onClick={handleProceedToDetails}
                                disabled={!selectedDate || !selectedTime}
                                className="proceed-button"
                            >
                                PROCEED TO DETAILS
                            </button>
                        </div>
                    </div>
                );

            case 'confirmDetails':
                return (
                    <div className="confirm-details-card">
                        <h3 className="calendar-title">Confirm Your Booking</h3>
                        <div className="details-summary">
                            <p><strong>Service:</strong> {service.name} (${service.price})</p>
                            <p><strong>Date:</strong> {selectedDate}</p>
                            <p><strong>Time:</strong> {selectedTime}</p>
                            {/* User ID is not applicable without Firebase Auth, so it's hidden via CSS */}
                            <p className="user-id">Your User ID: <span></span></p>
                        </div>

                        <form className="form-group">
                            <div>
                                <label htmlFor="userName" className="form-label">Your Name:</label>
                                <input
                                    type="text"
                                    id="userName"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="form-input"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="userEmail" className="form-label">Your Email:</label>
                                <input
                                    type="email"
                                    id="userEmail"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    className="form-input"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="userPhone" className="form-label">Your Phone:</label>
                                <input
                                    type="tel"
                                    id="userPhone"
                                    value={userPhone}
                                    onChange={(e) => setUserPhone(e.target.value)}
                                    className="form-input"
                                    placeholder="+1234567890"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="userNotes" className="form-label">Additional Notes (Optional):</label>
                                <textarea
                                    id="userNotes"
                                    value={userNotes}
                                    onChange={(e) => setUserNotes(e.target.value)}
                                    rows="3"
                                    className="form-textarea"
                                    placeholder="Any special requests or details..."
                                ></textarea>
                            </div>
                            <div className="form-actions">
                                <button
                                    type="button"
                                    onClick={() => setBookingStep('selectDateTime')}
                                    className="form-button back"
                                >
                                    BACK
                                </button>
                                <button
                                    type="button"
                                    onClick={handleConfirmBooking}
                                    className="form-button confirm"
                                >
                                    CONFIRM BOOKING
                                </button>
                            </div>
                        </form>
                    </div>
                );
            case 'bookingSuccess':
                return (
                    <div className="booking-status-card success">
                        <h3 className="status-title">Booking Successful!</h3>
                        <p className="status-message success">
                            Your appointment for <span>{service.name}</span> on <span>{selectedDate}</span> at <span>{selectedTime}</span> has been confirmed.
                        </p>
                        <p className="status-sub-message success">
                            A confirmation email has been sent to {userEmail}.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedServiceForBooking(null); // Clear service to show initial message
                                setBookingStep('selectDateTime'); // Go back to calendar view (resets via useEffect on service change)
                            }}
                            className="status-button success"
                        >
                            BOOK ANOTHER APPOINTMENT
                        </button>
                    </div>
                );
            case 'bookingFailure':
                return (
                    <div className="booking-status-card failure">
                        <h3 className="status-title">Booking Failed!</h3>
                        <p className="status-message failure">
                            We encountered an issue confirming your booking.
                            {message && <p className="mt-2">{message}</p>}
                        </p>
                        <button
                            onClick={() => setBookingStep('confirmDetails')}
                            className="status-button failure"
                        >
                            TRY AGAIN
                        </button>
                        <button
                            onClick={() => {
                                setSelectedServiceForBooking(null);
                                setBookingStep('selectDateTime');
                            }}
                            className="status-button failure"
                        >
                            SELECT NEW SERVICE
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section
            className={`booking-section`}
            ref={ref}
        >
            <div className={`booking-content-wrapper ${hasServiceSelected ? 'expanded-booking-content' : 'collapsed-booking-content'}`}>
                {/* Message display area */}
                {message && (
                    <div className={`message-box ${messageType}`}>
                        {message}
                    </div>
                )}
                {renderBookingContent()}
            </div>
        </section>
    );
});

// New MeetTheArtistSection Component
const MeetTheArtistSection = React.forwardRef(({ show }, ref) => {
    return (
        <section className={`meet-artist-section ${show ? 'meet-artist-section-visible' : 'meet-artist-section-hidden'}`} ref={ref}>
            <h2 className="section-title">
                Meet the Artist
            </h2>
            <div className="artist-photo-placeholder">
                (Artist photo placeholder)
            </div>
            <p className="artist-description">
                Driven by a passion for revealing individual beauty, [Artist Name] brings years of experience and a delicate touch to every client interaction. Dedicated
                to creating a calming and luxurious experience where you feel heard, pampered, and beautiful.
            </p>
            <div className="artist-contact-info">
                <p>Email: <a href="mailto:hello@ChiBotanical.com">hello@ChiBotanical.com</a></p>
                <p>Location: Downtown Serenity Plaza (By Appointment Only)</p>
            </div>
            <div className="social-icons">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Pinterest">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pinterest"><path d="M8 2v8h4M8 10v4c0 1.6-1.4 2-2 2s-2-.4-2-2v-4c0-2.2 1.5-4 3.5-4h5.5c2 0 3.5 2.2 3.5 4v6c0 1.6-1.4 2-2 2s-2-.4-2-2V14M17 12h-5"/></svg>
                </a>
            </div>
        </section>
    );
});

// New Footer Component
const Footer = React.forwardRef(({ show }, ref) => {
    return (
        <footer className={`footer ${show ? 'footer-visible' : 'footer-hidden'}`} ref={ref}>
            <p>&copy; 2025 Chi Botanical. All Rights Reserved. | <span className="footer-links"><a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></span></p>
        </footer>
    );
});


export default App;

// The ReactDOM.render call was moved from here to src/main.jsx (or index.js) to follow standard React project structure.
