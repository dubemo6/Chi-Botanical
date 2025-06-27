(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function Bv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ah={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function RS(){if(t_)return Zo;t_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var h in r)h!=="key"&&(c[h]=r[h])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return Zo.Fragment=e,Zo.jsx=n,Zo.jsxs=n,Zo}var n_;function wS(){return n_||(n_=1,Ah.exports=RS()),Ah.exports}var $=wS(),Rh={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function CS(){if(i_)return ut;i_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function S(L,Y,pe){this.props=L,this.context=Y,this.refs=E,this.updater=pe||y}S.prototype.isReactComponent={},S.prototype.setState=function(L,Y){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Y,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function x(){}x.prototype=S.prototype;function U(L,Y,pe){this.props=L,this.context=Y,this.refs=E,this.updater=pe||y}var D=U.prototype=new x;D.constructor=U,b(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function P(L,Y,pe,Me,W,ce){return pe=ce.ref,{$$typeof:o,type:L,key:Y,ref:pe!==void 0?pe:null,props:ce}}function X(L,Y){return P(L.type,Y,void 0,void 0,void 0,L.props)}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function R(L){var Y={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pe){return Y[pe]})}var z=/\/+/g;function le(L,Y){return typeof L=="object"&&L!==null&&L.key!=null?R(""+L.key):Y.toString(36)}function ae(){}function _e(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ae,ae):(L.status="pending",L.then(function(Y){L.status==="pending"&&(L.status="fulfilled",L.value=Y)},function(Y){L.status==="pending"&&(L.status="rejected",L.reason=Y)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function he(L,Y,pe,Me,W){var ce=typeof L;(ce==="undefined"||ce==="boolean")&&(L=null);var Se=!1;if(L===null)Se=!0;else switch(ce){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(L.$$typeof){case o:case e:Se=!0;break;case g:return Se=L._init,he(Se(L._payload),Y,pe,Me,W)}}if(Se)return W=W(L),Se=Me===""?"."+le(L,0):Me,C(W)?(pe="",Se!=null&&(pe=Se.replace(z,"$&/")+"/"),he(W,Y,pe,"",function(Je){return Je})):W!=null&&(N(W)&&(W=X(W,pe+(W.key==null||L&&L.key===W.key?"":(""+W.key).replace(z,"$&/")+"/")+Se)),Y.push(W)),1;Se=0;var ve=Me===""?".":Me+":";if(C(L))for(var we=0;we<L.length;we++)Me=L[we],ce=ve+le(Me,we),Se+=he(Me,Y,pe,ce,W);else if(we=v(L),typeof we=="function")for(L=we.call(L),we=0;!(Me=L.next()).done;)Me=Me.value,ce=ve+le(Me,we++),Se+=he(Me,Y,pe,ce,W);else if(ce==="object"){if(typeof L.then=="function")return he(_e(L),Y,pe,Me,W);throw Y=String(L),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Se}function B(L,Y,pe){if(L==null)return L;var Me=[],W=0;return he(L,Me,"","",function(ce){return Y.call(pe,ce,W++)}),Me}function J(L){if(L._status===-1){var Y=L._result;Y=Y(),Y.then(function(pe){(L._status===0||L._status===-1)&&(L._status=1,L._result=pe)},function(pe){(L._status===0||L._status===-1)&&(L._status=2,L._result=pe)}),L._status===-1&&(L._status=0,L._result=Y)}if(L._status===1)return L._result.default;throw L._result}var K=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function be(){}return ut.Children={map:B,forEach:function(L,Y,pe){B(L,function(){Y.apply(this,arguments)},pe)},count:function(L){var Y=0;return B(L,function(){Y++}),Y},toArray:function(L){return B(L,function(Y){return Y})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ut.Component=S,ut.Fragment=n,ut.Profiler=r,ut.PureComponent=U,ut.StrictMode=a,ut.Suspense=d,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ut.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},ut.cache=function(L){return function(){return L.apply(null,arguments)}},ut.cloneElement=function(L,Y,pe){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Me=b({},L.props),W=L.key,ce=void 0;if(Y!=null)for(Se in Y.ref!==void 0&&(ce=void 0),Y.key!==void 0&&(W=""+Y.key),Y)!G.call(Y,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&Y.ref===void 0||(Me[Se]=Y[Se]);var Se=arguments.length-2;if(Se===1)Me.children=pe;else if(1<Se){for(var ve=Array(Se),we=0;we<Se;we++)ve[we]=arguments[we+2];Me.children=ve}return P(L.type,W,void 0,void 0,ce,Me)},ut.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ut.createElement=function(L,Y,pe){var Me,W={},ce=null;if(Y!=null)for(Me in Y.key!==void 0&&(ce=""+Y.key),Y)G.call(Y,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(W[Me]=Y[Me]);var Se=arguments.length-2;if(Se===1)W.children=pe;else if(1<Se){for(var ve=Array(Se),we=0;we<Se;we++)ve[we]=arguments[we+2];W.children=ve}if(L&&L.defaultProps)for(Me in Se=L.defaultProps,Se)W[Me]===void 0&&(W[Me]=Se[Me]);return P(L,ce,void 0,void 0,null,W)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(L){return{$$typeof:h,render:L}},ut.isValidElement=N,ut.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:J}},ut.memo=function(L,Y){return{$$typeof:p,type:L,compare:Y===void 0?null:Y}},ut.startTransition=function(L){var Y=F.T,pe={};F.T=pe;try{var Me=L(),W=F.S;W!==null&&W(pe,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(be,K)}catch(ce){K(ce)}finally{F.T=Y}},ut.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ut.use=function(L){return F.H.use(L)},ut.useActionState=function(L,Y,pe){return F.H.useActionState(L,Y,pe)},ut.useCallback=function(L,Y){return F.H.useCallback(L,Y)},ut.useContext=function(L){return F.H.useContext(L)},ut.useDebugValue=function(){},ut.useDeferredValue=function(L,Y){return F.H.useDeferredValue(L,Y)},ut.useEffect=function(L,Y,pe){var Me=F.H;if(typeof pe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(L,Y)},ut.useId=function(){return F.H.useId()},ut.useImperativeHandle=function(L,Y,pe){return F.H.useImperativeHandle(L,Y,pe)},ut.useInsertionEffect=function(L,Y){return F.H.useInsertionEffect(L,Y)},ut.useLayoutEffect=function(L,Y){return F.H.useLayoutEffect(L,Y)},ut.useMemo=function(L,Y){return F.H.useMemo(L,Y)},ut.useOptimistic=function(L,Y){return F.H.useOptimistic(L,Y)},ut.useReducer=function(L,Y,pe){return F.H.useReducer(L,Y,pe)},ut.useRef=function(L){return F.H.useRef(L)},ut.useState=function(L){return F.H.useState(L)},ut.useSyncExternalStore=function(L,Y,pe){return F.H.useSyncExternalStore(L,Y,pe)},ut.useTransition=function(){return F.H.useTransition()},ut.version="19.1.0",ut}var a_;function op(){return a_||(a_=1,Rh.exports=CS()),Rh.exports}var Pt=op();const xu=Bv(Pt);var wh={exports:{}},Qo={},Ch={exports:{}},Dh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function DS(){return s_||(s_=1,function(o){function e(B,J){var K=B.length;B.push(J);e:for(;0<K;){var be=K-1>>>1,L=B[be];if(0<r(L,J))B[be]=J,B[K]=L,K=be;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var J=B[0],K=B.pop();if(K!==J){B[0]=K;e:for(var be=0,L=B.length,Y=L>>>1;be<Y;){var pe=2*(be+1)-1,Me=B[pe],W=pe+1,ce=B[W];if(0>r(Me,K))W<L&&0>r(ce,Me)?(B[be]=ce,B[W]=K,be=W):(B[be]=Me,B[pe]=K,be=pe);else if(W<L&&0>r(ce,K))B[be]=ce,B[W]=K,be=W;else break e}}return J}function r(B,J){var K=B.sortIndex-J.sortIndex;return K!==0?K:B.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,_=null,v=3,y=!1,b=!1,E=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var J=n(p);J!==null;){if(J.callback===null)a(p);else if(J.startTime<=B)a(p),J.sortIndex=J.expirationTime,e(d,J);else break;J=n(p)}}function F(B){if(E=!1,C(B),!b)if(n(d)!==null)b=!0,G||(G=!0,le());else{var J=n(p);J!==null&&he(F,J.startTime-B)}}var G=!1,P=-1,X=5,N=-1;function R(){return S?!0:!(o.unstable_now()-N<X)}function z(){if(S=!1,G){var B=o.unstable_now();N=B;var J=!0;try{e:{b=!1,E&&(E=!1,U(P),P=-1),y=!0;var K=v;try{t:{for(C(B),_=n(d);_!==null&&!(_.expirationTime>B&&R());){var be=_.callback;if(typeof be=="function"){_.callback=null,v=_.priorityLevel;var L=be(_.expirationTime<=B);if(B=o.unstable_now(),typeof L=="function"){_.callback=L,C(B),J=!0;break t}_===n(d)&&a(d),C(B)}else a(d);_=n(d)}if(_!==null)J=!0;else{var Y=n(p);Y!==null&&he(F,Y.startTime-B),J=!1}}break e}finally{_=null,v=K,y=!1}J=void 0}}finally{J?le():G=!1}}}var le;if(typeof D=="function")le=function(){D(z)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,_e=ae.port2;ae.port1.onmessage=z,le=function(){_e.postMessage(null)}}else le=function(){x(z,0)};function he(B,J){P=x(function(){B(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var K=v;v=J;try{return B()}finally{v=K}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=v;v=B;try{return J()}finally{v=K}},o.unstable_scheduleCallback=function(B,J,K){var be=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?be+K:be):K=be,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=K+L,B={id:g++,callback:J,priorityLevel:B,startTime:K,expirationTime:L,sortIndex:-1},K>be?(B.sortIndex=K,e(p,B),n(d)===null&&B===n(p)&&(E?(U(P),P=-1):E=!0,he(F,K-be))):(B.sortIndex=L,e(d,B),b||y||(b=!0,G||(G=!0,le()))),B},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(B){var J=v;return function(){var K=v;v=J;try{return B.apply(this,arguments)}finally{v=K}}}}(Dh)),Dh}var r_;function NS(){return r_||(r_=1,Ch.exports=DS()),Ch.exports}var Nh={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function LS(){if(o_)return Pn;o_=1;var o=op();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Pn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(d,p,null,g)},Pn.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},Pn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Pn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Pn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Pn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Pn.requestFormReset=function(d){a.d.r(d)},Pn.unstable_batchedUpdates=function(d,p){return d(p)},Pn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Pn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Pn.version="19.1.0",Pn}var l_;function US(){if(l_)return Nh.exports;l_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nh.exports=LS(),Nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function OS(){if(c_)return Qo;c_=1;var o=NS(),e=op(),n=US();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return h(f),t;if(m===l)return h(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,A=f.child;A;){if(A===s){M=!0,s=f,l=m;break}if(A===l){M=!0,l=f,s=m;break}A=A.sibling}if(!M){for(A=m.child;A;){if(A===s){M=!0,s=m,l=f;break}if(A===l){M=!0,l=m,s=f;break}A=A.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case D:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case X:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}var he=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},be=[],L=-1;function Y(t){return{current:t}}function pe(t){0>L||(t.current=be[L],be[L]=null,L--)}function Me(t,i){L++,be[L]=t.current,t.current=i}var W=Y(null),ce=Y(null),Se=Y(null),ve=Y(null);function we(t,i){switch(Me(Se,i),Me(ce,t),Me(W,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?C0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=C0(i),t=D0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}pe(W),Me(W,t)}function Je(){pe(W),pe(ce),pe(Se)}function je(t){t.memoizedState!==null&&Me(ve,t);var i=W.current,s=D0(i,t.type);i!==s&&(Me(ce,t),Me(W,s))}function Nt(t){ce.current===t&&(pe(W),pe(ce)),ve.current===t&&(pe(ve),Wo._currentValue=K)}var Rt=Object.prototype.hasOwnProperty,lt=o.unstable_scheduleCallback,H=o.unstable_cancelCallback,an=o.unstable_shouldYield,Et=o.unstable_requestPaint,ct=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,St=o.unstable_ImmediatePriority,Ke=o.unstable_UserBlockingPriority,st=o.unstable_NormalPriority,sn=o.unstable_LowPriority,O=o.unstable_IdlePriority,T=o.log,ne=o.unstable_setDisableYieldValue,de=null,ge=null;function ue(t){if(typeof T=="function"&&ne(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(de,t)}catch{}}var Pe=Math.clz32?Math.clz32:ke,Ne=Math.log,Ve=Math.LN2;function ke(t){return t>>>=0,t===0?32:31-(Ne(t)/Ve|0)|0}var Ee=256,Ie=4194304;function Ye(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=Ye(l):(M&=A,M!==0?f=Ye(M):s||(s=A&~t,s!==0&&(f=Ye(s))))):(A=l&~m,A!==0?f=Ye(A):M!==0?f=Ye(M):s||(s=l&~t,s!==0&&(f=Ye(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ce(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function at(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function Le(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Te(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Be(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Re(t,i,s,l,f,m){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,te=t.hiddenUpdates;for(s=M&~s;0<s;){var fe=31-Pe(s),xe=1<<fe;A[fe]=0,I[fe]=-1;var ie=te[fe];if(ie!==null)for(te[fe]=null,fe=0;fe<ie.length;fe++){var se=ie[fe];se!==null&&(se.lane&=-536870913)}s&=~xe}l!==0&&ye(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(M&~i))}function ye(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Pe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function ze(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Pe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function It(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ct(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:K0(t.type))}function Jn(t,i){var s=J.p;try{return J.p=t,i()}finally{J.p=s}}var xn=Math.random().toString(36).slice(2),hn="__reactFiber$"+xn,An="__reactProps$"+xn,Wn="__reactContainer$"+xn,fs="__reactEvents$"+xn,bl="__reactListeners$"+xn,El="__reactHandles$"+xn,hs="__reactResources$"+xn,Ta="__reactMarker$"+xn;function Aa(t){delete t[hn],delete t[An],delete t[fs],delete t[bl],delete t[El]}function Yi(t){var i=t[hn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Wn]||s[hn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=O0(t);t!==null;){if(s=t[hn])return s;t=O0(t)}return i}t=s,s=t.parentNode}return null}function qi(t){if(t=t[hn]||t[Wn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ds(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Ra(t){var i=t[hs];return i||(i=t[hs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ln(t){t[Ta]=!0}var Tl=new Set,Al={};function Ki(t,i){w(t,i),w(t+"Capture",i)}function w(t,i){for(Al[t]=i,t=0;t<i.length;t++)Tl.add(i[t])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},oe={};function Q(t){return Rt.call(oe,t)?!0:Rt.call(re,t)?!1:Z.test(t)?oe[t]=!0:(re[t]=!0,!1)}function Ae(t,i,s){if(Q(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function De(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Oe(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var Fe,et;function Ze(t){if(Fe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Fe=i&&i[1]||"",et=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+t+et}var Xe=!1;function pt(t,i){if(!t||Xe)return"";Xe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(se){var ie=se}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(se){ie=se}t.call(xe.prototype)}}else{try{throw Error()}catch(se){ie=se}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(se){if(se&&ie&&typeof se.stack=="string")return[se.stack,ie.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],A=m[1];if(M&&A){var I=M.split(`
`),te=A.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<te.length&&!te[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===te.length)for(l=I.length-1,f=te.length-1;1<=l&&0<=f&&I[l]!==te[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==te[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==te[f]){var fe=`
`+I[l].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=l&&0<=f);break}}}finally{Xe=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ze(s):""}function Lt(t){switch(t.tag){case 26:case 27:case 5:return Ze(t.type);case 16:return Ze("Lazy");case 13:return Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return Ze("Activity");default:return""}}function qt(t){try{var i="";do i+=Lt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Mt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=bt(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function en(t){t._valueTracker||(t._valueTracker=Qe(t))}function wt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=bt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Ln(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wa=/[\n"\\]/g;function Kt(t){return t.replace(wa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Zi(t,i,s,l,f,m,M,A){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Mt(i)):t.value!==""+Mt(i)&&(t.value=""+Mt(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Un(t,M,Mt(i)):s!=null?Un(t,M,Mt(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Mt(A):t.removeAttribute("name")}function jt(t,i,s,l,f,m,M,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+Mt(s):"",i=i!=null?""+Mt(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Un(t,i,s){i==="number"&&Ln(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function dn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Mt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function yn(t,i,s){if(i!=null&&(i=""+Mt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Mt(s):""}function Rn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(he(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Mt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Ni(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cp(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Qi.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Dp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Cp(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Cp(t,m,i[m])}function Eu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(t){return Ax.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Tu=null;function Au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ws=null,js=null;function Np(t){var i=qi(t);if(i&&(t=i.stateNode)){var s=t[An]||null;e:switch(t=i.stateNode,i.type){case"input":if(Zi(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Kt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[An]||null;if(!f)throw Error(a(90));Zi(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&wt(l)}break e;case"textarea":yn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&dn(t,!!s.multiple,i,!1)}}}var Ru=!1;function Lp(t,i,s){if(Ru)return t(i,s);Ru=!0;try{var l=t(i);return l}finally{if(Ru=!1,(Ws!==null||js!==null)&&(hc(),Ws&&(i=Ws,t=js,js=Ws=null,Np(i),t)))for(i=0;i<t.length;i++)Np(t[i])}}function io(t,i){var s=t.stateNode;if(s===null)return null;var l=s[An]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(Ji)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){wu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{wu=!1}var Ca=null,Cu=null,wl=null;function Up(){if(wl)return wl;var t,i=Cu,s=i.length,l,f="value"in Ca?Ca.value:Ca.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===f[m-l];l++);return wl=f.slice(t,1<l?1-l:void 0)}function Cl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function Op(){return!1}function jn(t){function i(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Dl:Op,this.isPropagationStopped=Op,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=jn(ps),so=g({},ps,{view:0,detail:0}),Rx=jn(so),Du,Nu,ro,Ll=g({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Du=t.screenX-ro.screenX,Nu=t.screenY-ro.screenY):Nu=Du=0,ro=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),Pp=jn(Ll),wx=g({},Ll,{dataTransfer:0}),Cx=jn(wx),Dx=g({},so,{relatedTarget:0}),Lu=jn(Dx),Nx=g({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=jn(Nx),Ux=g({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=jn(Ux),Px=g({},ps,{data:0}),Ip=jn(Px),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Fx[t])?!!i[t]:!1}function Uu(){return zx}var Hx=g({},so,{key:function(t){if(t.key){var i=Ix[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gx=jn(Hx),Vx=g({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=jn(Vx),kx=g({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Xx=jn(kx),Wx=g({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=jn(Wx),Yx=g({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qx=jn(Yx),Kx=g({},ps,{newState:0,oldState:0}),Zx=jn(Kx),Qx=[9,13,27,32],Ou=Ji&&"CompositionEvent"in window,oo=null;Ji&&"documentMode"in document&&(oo=document.documentMode);var Jx=Ji&&"TextEvent"in window&&!oo,Fp=Ji&&(!Ou||oo&&8<oo&&11>=oo),zp=" ",Hp=!1;function Gp(t,i){switch(t){case"keyup":return Qx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function $x(t,i){switch(t){case"compositionend":return Vp(i);case"keypress":return i.which!==32?null:(Hp=!0,zp);case"textInput":return t=i.data,t===zp&&Hp?null:t;default:return null}}function ey(t,i){if(Ys)return t==="compositionend"||!Ou&&Gp(t,i)?(t=Up(),wl=Cu=Ca=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fp&&i.locale!=="ko"?null:i.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ty[t.type]:i==="textarea"}function Xp(t,i,s,l){Ws?js?js.push(l):js=[l]:Ws=l,i=vc(i,"onChange"),0<i.length&&(s=new Nl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var lo=null,co=null;function ny(t){E0(t,0)}function Ul(t){var i=ds(t);if(wt(i))return t}function Wp(t,i){if(t==="change")return i}var jp=!1;if(Ji){var Pu;if(Ji){var Iu="oninput"in document;if(!Iu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Iu=typeof Yp.oninput=="function"}Pu=Iu}else Pu=!1;jp=Pu&&(!document.documentMode||9<document.documentMode)}function qp(){lo&&(lo.detachEvent("onpropertychange",Kp),co=lo=null)}function Kp(t){if(t.propertyName==="value"&&Ul(co)){var i=[];Xp(i,co,t,Au(t)),Lp(ny,i)}}function iy(t,i,s){t==="focusin"?(qp(),lo=i,co=s,lo.attachEvent("onpropertychange",Kp)):t==="focusout"&&qp()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(co)}function sy(t,i){if(t==="click")return Ul(i)}function ry(t,i){if(t==="input"||t==="change")return Ul(i)}function oy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:oy;function uo(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Rt.call(i,f)||!$n(t[f],i[f]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,i){var s=Zp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Zp(s)}}function Jp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Jp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function $p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Ln(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Ln(t.document)}return i}function Bu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var ly=Ji&&"documentMode"in document&&11>=document.documentMode,qs=null,Fu=null,fo=null,zu=!1;function em(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;zu||qs==null||qs!==Ln(l)||(l=qs,"selectionStart"in l&&Bu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&uo(fo,l)||(fo=l,l=vc(Fu,"onSelect"),0<l.length&&(i=new Nl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=qs)))}function ms(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Ks={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Hu={},tm={};Ji&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function gs(t){if(Hu[t])return Hu[t];if(!Ks[t])return t;var i=Ks[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in tm)return Hu[t]=i[s];return t}var nm=gs("animationend"),im=gs("animationiteration"),am=gs("animationstart"),cy=gs("transitionrun"),uy=gs("transitionstart"),fy=gs("transitioncancel"),sm=gs("transitionend"),rm=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function yi(t,i){rm.set(t,i),Ki(i,[t])}var om=new WeakMap;function ui(t,i){if(typeof t=="object"&&t!==null){var s=om.get(t);return s!==void 0?s:(i={value:t,source:i,stack:qt(i)},om.set(t,i),i)}return{value:t,source:i,stack:qt(i)}}var fi=[],Zs=0,Vu=0;function Ol(){for(var t=Zs,i=Vu=Zs=0;i<t;){var s=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var f=fi[i];fi[i++]=null;var m=fi[i];if(fi[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&lm(s,f,m)}}function Pl(t,i,s,l){fi[Zs++]=t,fi[Zs++]=i,fi[Zs++]=s,fi[Zs++]=l,Vu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ku(t,i,s,l){return Pl(t,i,s,l),Il(t)}function Qs(t,i){return Pl(t,null,null,i),Il(t)}function lm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Pe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Il(t){if(50<Bo)throw Bo=0,Zf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Js={};function hy(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,i,s,l){return new hy(t,i,s,l)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,i){var s=t.alternate;return s===null?(s=ei(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function cm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Bl(t,i,s,l,f,m){var M=0;if(l=t,typeof t=="function")Xu(t)&&(M=1);else if(typeof t=="string")M=pS(t,s,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ei(31,s,i,f),t.elementType=N,t.lanes=m,t;case b:return _s(s.children,f,m,i);case E:M=8,f|=24;break;case S:return t=ei(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case F:return t=ei(13,s,i,f),t.elementType=F,t.lanes=m,t;case G:return t=ei(19,s,i,f),t.elementType=G,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case D:M=10;break e;case U:M=9;break e;case C:M=11;break e;case P:M=14;break e;case X:M=16,l=null;break e}M=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ei(M,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function _s(t,i,s,l){return t=ei(7,t,l,i),t.lanes=s,t}function Wu(t,i,s){return t=ei(6,t,null,i),t.lanes=s,t}function ju(t,i,s){return i=ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var $s=[],er=0,Fl=null,zl=0,hi=[],di=0,vs=null,ea=1,ta="";function xs(t,i){$s[er++]=zl,$s[er++]=Fl,Fl=t,zl=i}function um(t,i,s){hi[di++]=ea,hi[di++]=ta,hi[di++]=vs,vs=t;var l=ea;t=ta;var f=32-Pe(l)-1;l&=~(1<<f),s+=1;var m=32-Pe(i)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ea=1<<32-Pe(i)+f|s<<f|l,ta=m+t}else ea=1<<m|s<<f|l,ta=t}function Yu(t){t.return!==null&&(xs(t,1),um(t,1,0))}function qu(t){for(;t===Fl;)Fl=$s[--er],$s[er]=null,zl=$s[--er],$s[er]=null;for(;t===vs;)vs=hi[--di],hi[di]=null,ta=hi[--di],hi[di]=null,ea=hi[--di],hi[di]=null}var Fn=null,tn=null,Ut=!1,ys=null,Li=!1,Ku=Error(a(519));function Ss(t){var i=Error(a(418,""));throw mo(ui(i,t)),Ku}function fm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[hn]=t,i[An]=l,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<zo.length;s++)xt(zo[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),jt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),en(i);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),Rn(i,l.value,l.defaultValue,l.children),en(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||w0(i.textContent,s)?(l.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),l.onScroll!=null&&xt("scroll",i),l.onScrollEnd!=null&&xt("scrollend",i),l.onClick!=null&&(i.onclick=xc),i=!0):i=!1,i||Ss(t)}function hm(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Fn=Fn.return}}function ho(t){if(t!==Fn)return!1;if(!Ut)return hm(t),Ut=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||hh(t.type,t.memoizedProps)),s=!s),s&&tn&&Ss(t),hm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){tn=Mi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}tn=null}}else i===27?(i=tn,Wa(t.type)?(t=gh,gh=null,tn=t):tn=i):tn=Fn?Mi(t.stateNode.nextSibling):null;return!0}function po(){tn=Fn=null,Ut=!1}function dm(){var t=ys;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),ys=null),t}function mo(t){ys===null?ys=[t]:ys.push(t)}var Zu=Y(null),Ms=null,na=null;function Da(t,i,s){Me(Zu,i._currentValue),i._currentValue=s}function ia(t){t._currentValue=Zu.current,pe(Zu)}function Qu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Ju(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var I=0;I<i.length;I++)if(A.context===i[I]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),Qu(m.return,s,t),l||(M=null);break e}m=A.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),Qu(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function go(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var A=f.type;$n(f.pendingProps.value,M.value)||(t!==null?t.push(A):t=[A])}}else if(f===ve.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}f=f.return}t!==null&&Ju(i,t,s,l),i.flags|=262144}function Hl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){Ms=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function On(t){return pm(Ms,t)}function Gl(t,i){return Ms===null&&bs(t),pm(t,i)}function pm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},na===null){if(t===null)throw Error(a(308));na=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else na=na.next=i;return s}var dy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},py=o.unstable_scheduleCallback,my=o.unstable_NormalPriority,pn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new dy,data:new Map,refCount:0}}function _o(t){t.refCount--,t.refCount===0&&py(my,function(){t.controller.abort()})}var vo=null,ef=0,tr=0,nr=null;function gy(t,i){if(vo===null){var s=vo=[];ef=0,tr=ih(),nr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ef++,i.then(mm,mm),i}function mm(){if(--ef===0&&vo!==null){nr!==null&&(nr.status="fulfilled");var t=vo;vo=null,tr=0,nr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function _y(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var gm=B.S;B.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&gy(t,i),gm!==null&&gm(t,i)};var Es=Y(null);function tf(){var t=Es.current;return t!==null?t:Zt.pooledCache}function Vl(t,i){i===null?Me(Es,Es.current):Me(Es,i.pool)}function _m(){var t=tf();return t===null?null:{parent:pn._currentValue,pool:t}}var xo=Error(a(460)),vm=Error(a(474)),kl=Error(a(542)),nf={then:function(){}};function xm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xl(){}function ym(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Xl,Xl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Mm(t),t;default:if(typeof i.status=="string")i.then(Xl,Xl);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Mm(t),t}throw yo=i,xo}}var yo=null;function Sm(){if(yo===null)throw Error(a(459));var t=yo;return yo=null,t}function Mm(t){if(t===xo||t===kl)throw Error(a(483))}var Na=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Bt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Il(t),lm(t,null,s),i}return Pl(t,l,i,s),Il(t)}function So(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ze(t,s)}}function rf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var of=!1;function Mo(){if(of){var t=nr;if(t!==null)throw t}}function bo(t,i,s,l){of=!1;var f=t.updateQueue;Na=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,te=I.next;I.next=null,M===null?m=te:M.next=te,M=I;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,A=fe.lastBaseUpdate,A!==M&&(A===null?fe.firstBaseUpdate=te:A.next=te,fe.lastBaseUpdate=I))}if(m!==null){var xe=f.baseState;M=0,fe=te=I=null,A=m;do{var ie=A.lane&-536870913,se=ie!==A.lane;if(se?(Tt&ie)===ie:(l&ie)===ie){ie!==0&&ie===tr&&(of=!0),fe!==null&&(fe=fe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var nt=t,$e=A;ie=i;var kt=s;switch($e.tag){case 1:if(nt=$e.payload,typeof nt=="function"){xe=nt.call(kt,xe,ie);break e}xe=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=$e.payload,ie=typeof nt=="function"?nt.call(kt,xe,ie):nt,ie==null)break e;xe=g({},xe,ie);break e;case 2:Na=!0}}ie=A.callback,ie!==null&&(t.flags|=64,se&&(t.flags|=8192),se=f.callbacks,se===null?f.callbacks=[ie]:se.push(ie))}else se={lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},fe===null?(te=fe=se,I=xe):fe=fe.next=se,M|=ie;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;se=A,A=se.next,se.next=null,f.lastBaseUpdate=se,f.shared.pending=null}}while(!0);fe===null&&(I=xe),f.baseState=I,f.firstBaseUpdate=te,f.lastBaseUpdate=fe,m===null&&(f.shared.lanes=0),Ga|=M,t.lanes=M,t.memoizedState=xe}}function bm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Em(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)bm(s[t],i)}var ir=Y(null),Wl=Y(0);function Tm(t,i){t=ua,Me(Wl,t),Me(ir,i),ua=t|i.baseLanes}function lf(){Me(Wl,ua),Me(ir,ir.current)}function cf(){ua=Wl.current,pe(ir),pe(Wl)}var Oa=0,mt=null,Gt=null,cn=null,jl=!1,ar=!1,Ts=!1,Yl=0,Eo=0,sr=null,vy=0;function rn(){throw Error(a(321))}function uf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!$n(t[s],i[s]))return!1;return!0}function ff(t,i,s,l,f,m){return Oa=m,mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?lg:cg,Ts=!1,m=s(l,f),Ts=!1,ar&&(m=Rm(i,s,l,f)),Am(t),m}function Am(t){B.H=$l;var i=Gt!==null&&Gt.next!==null;if(Oa=0,cn=Gt=mt=null,jl=!1,Eo=0,sr=null,i)throw Error(a(300));t===null||Sn||(t=t.dependencies,t!==null&&Hl(t)&&(Sn=!0))}function Rm(t,i,s,l){mt=t;var f=0;do{if(ar&&(sr=null),Eo=0,ar=!1,25<=f)throw Error(a(301));if(f+=1,cn=Gt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=Ty,m=i(s,l)}while(ar);return m}function xy(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?To(i):i,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(mt.flags|=1024),i}function hf(){var t=Yl!==0;return Yl=0,t}function df(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function pf(t){if(jl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}jl=!1}Oa=0,cn=Gt=mt=null,ar=!1,Eo=Yl=0,sr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?mt.memoizedState=cn=t:cn=cn.next=t,cn}function un(){if(Gt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=cn===null?mt.memoizedState:cn.next;if(i!==null)cn=i,Gt=t;else{if(t===null)throw mt.alternate===null?Error(a(467)):Error(a(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?mt.memoizedState=cn=t:cn=cn.next=t}return cn}function mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(t){var i=Eo;return Eo+=1,sr===null&&(sr=[]),t=ym(sr,t,i),i=mt,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?lg:cg),t}function ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return To(t);if(t.$$typeof===D)return On(t)}throw Error(a(438,String(t)))}function gf(t){var i=null,s=mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=mf(),mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=R;return i.index++,s}function aa(t,i){return typeof i=="function"?i(t):i}function Kl(t){var i=un();return _f(i,Gt,t)}function _f(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var A=M=null,I=null,te=i,fe=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(Tt&xe)===xe:(Oa&xe)===xe){var ie=te.revertLane;if(ie===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===tr&&(fe=!0);else if((Oa&ie)===ie){te=te.next,ie===tr&&(fe=!0);continue}else xe={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(A=I=xe,M=m):I=I.next=xe,mt.lanes|=ie,Ga|=ie;xe=te.action,Ts&&s(m,xe),m=te.hasEagerState?te.eagerState:s(m,xe)}else ie={lane:xe,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(A=I=ie,M=m):I=I.next=ie,mt.lanes|=xe,Ga|=xe;te=te.next}while(te!==null&&te!==i);if(I===null?M=m:I.next=A,!$n(m,t.memoizedState)&&(Sn=!0,fe&&(s=nr,s!==null)))throw s;t.memoizedState=m,t.baseState=M,t.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function vf(t){var i=un(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=t(m,M.action),M=M.next;while(M!==f);$n(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function wm(t,i,s){var l=mt,f=un(),m=Ut;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!$n((Gt||f).memoizedState,s);M&&(f.memoizedState=s,Sn=!0),f=f.queue;var A=Nm.bind(null,l,f,t);if(Ao(2048,8,A,[t]),f.getSnapshot!==i||M||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,rr(9,Zl(),Dm.bind(null,l,f,s,i),null),Zt===null)throw Error(a(349));m||(Oa&124)!==0||Cm(l,i,s)}return s}function Cm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=mt.updateQueue,i===null?(i=mf(),mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Dm(t,i,s,l){i.value=s,i.getSnapshot=l,Lm(i)&&Um(t)}function Nm(t,i,s){return s(function(){Lm(i)&&Um(t)})}function Lm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!$n(t,s)}catch{return!0}}function Um(t){var i=Qs(t,2);i!==null&&si(i,t,2)}function xf(t){var i=Yn();if(typeof t=="function"){var s=t;if(t=s(),Ts){ue(!0);try{s()}finally{ue(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},i}function Om(t,i,s,l){return t.baseState=s,_f(t,Gt,typeof l=="function"?l:aa)}function yy(t,i,s,l,f){if(Jl(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};B.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Pm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Pm(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=B.T,M={};B.T=M;try{var A=s(f,l),I=B.S;I!==null&&I(M,A),Im(t,i,A)}catch(te){yf(t,i,te)}finally{B.T=m}}else try{m=s(f,l),Im(t,i,m)}catch(te){yf(t,i,te)}}function Im(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Bm(t,i,l)},function(l){return yf(t,i,l)}):Bm(t,i,s)}function Bm(t,i,s){i.status="fulfilled",i.value=s,Fm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Pm(t,s)))}function yf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Fm(i),i=i.next;while(i!==l)}t.action=null}function Fm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function zm(t,i){return i}function Hm(t,i){if(Ut){var s=Zt.formState;if(s!==null){e:{var l=mt;if(Ut){if(tn){t:{for(var f=tn,m=Li;f.nodeType!==8;){if(!m){f=null;break t}if(f=Mi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){tn=Mi(f.nextSibling),l=f.data==="F!";break e}}Ss(l)}l=!1}l&&(i=s[0])}}return s=Yn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:i},s.queue=l,s=sg.bind(null,mt,l),l.dispatch=s,l=xf(!1),m=Tf.bind(null,mt,!1,l.queue),l=Yn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=yy.bind(null,mt,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Gm(t){var i=un();return Vm(i,Gt,t)}function Vm(t,i,s){if(i=_f(t,i,zm)[0],t=Kl(aa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=To(i)}catch(M){throw M===xo?kl:M}else l=i;i=un();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(mt.flags|=2048,rr(9,Zl(),Sy.bind(null,f,s),null)),[l,m,t]}function Sy(t,i){t.action=i}function km(t){var i=un(),s=Gt;if(s!==null)return Vm(i,s,t);un(),i=i.memoizedState,s=un();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function rr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=mt.updateQueue,i===null&&(i=mf(),mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Zl(){return{destroy:void 0,resource:void 0}}function Xm(){return un().memoizedState}function Ql(t,i,s,l){var f=Yn();l=l===void 0?null:l,mt.flags|=t,f.memoizedState=rr(1|i,Zl(),s,l)}function Ao(t,i,s,l){var f=un();l=l===void 0?null:l;var m=f.memoizedState.inst;Gt!==null&&l!==null&&uf(l,Gt.memoizedState.deps)?f.memoizedState=rr(i,m,s,l):(mt.flags|=t,f.memoizedState=rr(1|i,m,s,l))}function Wm(t,i){Ql(8390656,8,t,i)}function jm(t,i){Ao(2048,8,t,i)}function Ym(t,i){return Ao(4,2,t,i)}function qm(t,i){return Ao(4,4,t,i)}function Km(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Zm(t,i,s){s=s!=null?s.concat([t]):null,Ao(4,4,Km.bind(null,i,t),s)}function Sf(){}function Qm(t,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&uf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Jm(t,i){var s=un();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&uf(i,l[1]))return l[0];if(l=t(),Ts){ue(!0);try{t()}finally{ue(!1)}}return s.memoizedState=[l,i],l}function Mf(t,i,s){return s===void 0||(Oa&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=t0(),mt.lanes|=t,Ga|=t,s)}function $m(t,i,s,l){return $n(s,i)?s:ir.current!==null?(t=Mf(t,s,l),$n(t,i)||(Sn=!0),t):(Oa&42)===0?(Sn=!0,t.memoizedState=s):(t=t0(),mt.lanes|=t,Ga|=t,i)}function eg(t,i,s,l,f){var m=J.p;J.p=m!==0&&8>m?m:8;var M=B.T,A={};B.T=A,Tf(t,!1,i,s);try{var I=f(),te=B.S;if(te!==null&&te(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var fe=_y(I,l);Ro(t,i,fe,ai(t))}else Ro(t,i,l,ai(t))}catch(xe){Ro(t,i,{then:function(){},status:"rejected",reason:xe},ai())}finally{J.p=m,B.T=M}}function My(){}function bf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=tg(t).queue;eg(t,f,i,K,s===null?My:function(){return ng(t),s(l)})}function tg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:K},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function ng(t){var i=tg(t).next.queue;Ro(t,i,{},ai())}function Ef(){return On(Wo)}function ig(){return un().memoizedState}function ag(){return un().memoizedState}function by(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ai();t=La(s);var l=Ua(i,t,s);l!==null&&(si(l,i,s),So(l,i,s)),i={cache:$u()},t.payload=i;return}i=i.return}}function Ey(t,i,s){var l=ai();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Jl(t)?rg(i,s):(s=ku(t,i,s,l),s!==null&&(si(s,t,l),og(s,i,l)))}function sg(t,i,s){var l=ai();Ro(t,i,s,l)}function Ro(t,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Jl(t))rg(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,A=m(M,s);if(f.hasEagerState=!0,f.eagerState=A,$n(A,M))return Pl(t,i,f,0),Zt===null&&Ol(),!1}catch{}finally{}if(s=ku(t,i,f,l),s!==null)return si(s,t,l),og(s,i,l),!0}return!1}function Tf(t,i,s,l){if(l={lane:2,revertLane:ih(),action:l,hasEagerState:!1,eagerState:null,next:null},Jl(t)){if(i)throw Error(a(479))}else i=ku(t,s,l,2),i!==null&&si(i,t,2)}function Jl(t){var i=t.alternate;return t===mt||i!==null&&i===mt}function rg(t,i){ar=jl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function og(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ze(t,s)}}var $l={readContext:On,use:ql,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},lg={readContext:On,use:ql,useCallback:function(t,i){return Yn().memoizedState=[t,i===void 0?null:i],t},useContext:On,useEffect:Wm,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Ql(4194308,4,Km.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ql(4194308,4,t,i)},useInsertionEffect:function(t,i){Ql(4,2,t,i)},useMemo:function(t,i){var s=Yn();i=i===void 0?null:i;var l=t();if(Ts){ue(!0);try{t()}finally{ue(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Yn();if(s!==void 0){var f=s(i);if(Ts){ue(!0);try{s(i)}finally{ue(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Ey.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var i=Yn();return t={current:t},i.memoizedState=t},useState:function(t){t=xf(t);var i=t.queue,s=sg.bind(null,mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Sf,useDeferredValue:function(t,i){var s=Yn();return Mf(s,t,i)},useTransition:function(){var t=xf(!1);return t=eg.bind(null,mt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=mt,f=Yn();if(Ut){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Zt===null)throw Error(a(349));(Tt&124)!==0||Cm(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Wm(Nm.bind(null,l,m,t),[t]),l.flags|=2048,rr(9,Zl(),Dm.bind(null,l,m,s,i),null),s},useId:function(){var t=Yn(),i=Zt.identifierPrefix;if(Ut){var s=ta,l=ea;s=(l&~(1<<32-Pe(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Yl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=vy++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Ef,useFormState:Hm,useActionState:Hm,useOptimistic:function(t){var i=Yn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Tf.bind(null,mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:gf,useCacheRefresh:function(){return Yn().memoizedState=by.bind(null,mt)}},cg={readContext:On,use:ql,useCallback:Qm,useContext:On,useEffect:jm,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Jm,useReducer:Kl,useRef:Xm,useState:function(){return Kl(aa)},useDebugValue:Sf,useDeferredValue:function(t,i){var s=un();return $m(s,Gt.memoizedState,t,i)},useTransition:function(){var t=Kl(aa)[0],i=un().memoizedState;return[typeof t=="boolean"?t:To(t),i]},useSyncExternalStore:wm,useId:ig,useHostTransitionStatus:Ef,useFormState:Gm,useActionState:Gm,useOptimistic:function(t,i){var s=un();return Om(s,Gt,t,i)},useMemoCache:gf,useCacheRefresh:ag},Ty={readContext:On,use:ql,useCallback:Qm,useContext:On,useEffect:jm,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Jm,useReducer:vf,useRef:Xm,useState:function(){return vf(aa)},useDebugValue:Sf,useDeferredValue:function(t,i){var s=un();return Gt===null?Mf(s,t,i):$m(s,Gt.memoizedState,t,i)},useTransition:function(){var t=vf(aa)[0],i=un().memoizedState;return[typeof t=="boolean"?t:To(t),i]},useSyncExternalStore:wm,useId:ig,useHostTransitionStatus:Ef,useFormState:km,useActionState:km,useOptimistic:function(t,i){var s=un();return Gt!==null?Om(s,Gt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:gf,useCacheRefresh:ag},or=null,wo=0;function ec(t){var i=wo;return wo+=1,or===null&&(or=[]),ym(or,t,i)}function Co(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function tc(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function ug(t){var i=t._init;return i(t._payload)}function fg(t){function i(q,V){if(t){var ee=q.deletions;ee===null?(q.deletions=[V],q.flags|=16):ee.push(V)}}function s(q,V){if(!t)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function l(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function f(q,V){return q=$i(q,V),q.index=0,q.sibling=null,q}function m(q,V,ee){return q.index=ee,t?(ee=q.alternate,ee!==null?(ee=ee.index,ee<V?(q.flags|=67108866,V):ee):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function M(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,V,ee,me){return V===null||V.tag!==6?(V=Wu(ee,q.mode,me),V.return=q,V):(V=f(V,ee),V.return=q,V)}function I(q,V,ee,me){var He=ee.type;return He===b?fe(q,V,ee.props.children,me,ee.key):V!==null&&(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&ug(He)===V.type)?(V=f(V,ee.props),Co(V,ee),V.return=q,V):(V=Bl(ee.type,ee.key,ee.props,null,q.mode,me),Co(V,ee),V.return=q,V)}function te(q,V,ee,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=ju(ee,q.mode,me),V.return=q,V):(V=f(V,ee.children||[]),V.return=q,V)}function fe(q,V,ee,me,He){return V===null||V.tag!==7?(V=_s(ee,q.mode,me,He),V.return=q,V):(V=f(V,ee),V.return=q,V)}function xe(q,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Wu(""+V,q.mode,ee),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return ee=Bl(V.type,V.key,V.props,null,q.mode,ee),Co(ee,V),ee.return=q,ee;case y:return V=ju(V,q.mode,ee),V.return=q,V;case X:var me=V._init;return V=me(V._payload),xe(q,V,ee)}if(he(V)||le(V))return V=_s(V,q.mode,ee,null),V.return=q,V;if(typeof V.then=="function")return xe(q,ec(V),ee);if(V.$$typeof===D)return xe(q,Gl(q,V),ee);tc(q,V)}return null}function ie(q,V,ee,me){var He=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return He!==null?null:A(q,V,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case v:return ee.key===He?I(q,V,ee,me):null;case y:return ee.key===He?te(q,V,ee,me):null;case X:return He=ee._init,ee=He(ee._payload),ie(q,V,ee,me)}if(he(ee)||le(ee))return He!==null?null:fe(q,V,ee,me,null);if(typeof ee.then=="function")return ie(q,V,ec(ee),me);if(ee.$$typeof===D)return ie(q,V,Gl(q,ee),me);tc(q,ee)}return null}function se(q,V,ee,me,He){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return q=q.get(ee)||null,A(V,q,""+me,He);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case v:return q=q.get(me.key===null?ee:me.key)||null,I(V,q,me,He);case y:return q=q.get(me.key===null?ee:me.key)||null,te(V,q,me,He);case X:var _t=me._init;return me=_t(me._payload),se(q,V,ee,me,He)}if(he(me)||le(me))return q=q.get(ee)||null,fe(V,q,me,He,null);if(typeof me.then=="function")return se(q,V,ee,ec(me),He);if(me.$$typeof===D)return se(q,V,ee,Gl(V,me),He);tc(V,me)}return null}function nt(q,V,ee,me){for(var He=null,_t=null,We=V,tt=V=0,bn=null;We!==null&&tt<ee.length;tt++){We.index>tt?(bn=We,We=null):bn=We.sibling;var Dt=ie(q,We,ee[tt],me);if(Dt===null){We===null&&(We=bn);break}t&&We&&Dt.alternate===null&&i(q,We),V=m(Dt,V,tt),_t===null?He=Dt:_t.sibling=Dt,_t=Dt,We=bn}if(tt===ee.length)return s(q,We),Ut&&xs(q,tt),He;if(We===null){for(;tt<ee.length;tt++)We=xe(q,ee[tt],me),We!==null&&(V=m(We,V,tt),_t===null?He=We:_t.sibling=We,_t=We);return Ut&&xs(q,tt),He}for(We=l(We);tt<ee.length;tt++)bn=se(We,q,tt,ee[tt],me),bn!==null&&(t&&bn.alternate!==null&&We.delete(bn.key===null?tt:bn.key),V=m(bn,V,tt),_t===null?He=bn:_t.sibling=bn,_t=bn);return t&&We.forEach(function(Za){return i(q,Za)}),Ut&&xs(q,tt),He}function $e(q,V,ee,me){if(ee==null)throw Error(a(151));for(var He=null,_t=null,We=V,tt=V=0,bn=null,Dt=ee.next();We!==null&&!Dt.done;tt++,Dt=ee.next()){We.index>tt?(bn=We,We=null):bn=We.sibling;var Za=ie(q,We,Dt.value,me);if(Za===null){We===null&&(We=bn);break}t&&We&&Za.alternate===null&&i(q,We),V=m(Za,V,tt),_t===null?He=Za:_t.sibling=Za,_t=Za,We=bn}if(Dt.done)return s(q,We),Ut&&xs(q,tt),He;if(We===null){for(;!Dt.done;tt++,Dt=ee.next())Dt=xe(q,Dt.value,me),Dt!==null&&(V=m(Dt,V,tt),_t===null?He=Dt:_t.sibling=Dt,_t=Dt);return Ut&&xs(q,tt),He}for(We=l(We);!Dt.done;tt++,Dt=ee.next())Dt=se(We,q,tt,Dt.value,me),Dt!==null&&(t&&Dt.alternate!==null&&We.delete(Dt.key===null?tt:Dt.key),V=m(Dt,V,tt),_t===null?He=Dt:_t.sibling=Dt,_t=Dt);return t&&We.forEach(function(AS){return i(q,AS)}),Ut&&xs(q,tt),He}function kt(q,V,ee,me){if(typeof ee=="object"&&ee!==null&&ee.type===b&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case v:e:{for(var He=ee.key;V!==null;){if(V.key===He){if(He=ee.type,He===b){if(V.tag===7){s(q,V.sibling),me=f(V,ee.props.children),me.return=q,q=me;break e}}else if(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&ug(He)===V.type){s(q,V.sibling),me=f(V,ee.props),Co(me,ee),me.return=q,q=me;break e}s(q,V);break}else i(q,V);V=V.sibling}ee.type===b?(me=_s(ee.props.children,q.mode,me,ee.key),me.return=q,q=me):(me=Bl(ee.type,ee.key,ee.props,null,q.mode,me),Co(me,ee),me.return=q,q=me)}return M(q);case y:e:{for(He=ee.key;V!==null;){if(V.key===He)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){s(q,V.sibling),me=f(V,ee.children||[]),me.return=q,q=me;break e}else{s(q,V);break}else i(q,V);V=V.sibling}me=ju(ee,q.mode,me),me.return=q,q=me}return M(q);case X:return He=ee._init,ee=He(ee._payload),kt(q,V,ee,me)}if(he(ee))return nt(q,V,ee,me);if(le(ee)){if(He=le(ee),typeof He!="function")throw Error(a(150));return ee=He.call(ee),$e(q,V,ee,me)}if(typeof ee.then=="function")return kt(q,V,ec(ee),me);if(ee.$$typeof===D)return kt(q,V,Gl(q,ee),me);tc(q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,V!==null&&V.tag===6?(s(q,V.sibling),me=f(V,ee),me.return=q,q=me):(s(q,V),me=Wu(ee,q.mode,me),me.return=q,q=me),M(q)):s(q,V)}return function(q,V,ee,me){try{wo=0;var He=kt(q,V,ee,me);return or=null,He}catch(We){if(We===xo||We===kl)throw We;var _t=ei(29,We,null,q.mode);return _t.lanes=me,_t.return=q,_t}finally{}}}var lr=fg(!0),hg=fg(!1),pi=Y(null),Ui=null;function Pa(t){var i=t.alternate;Me(mn,mn.current&1),Me(pi,t),Ui===null&&(i===null||ir.current!==null||i.memoizedState!==null)&&(Ui=t)}function dg(t){if(t.tag===22){if(Me(mn,mn.current),Me(pi,t),Ui===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ui=t)}}else Ia()}function Ia(){Me(mn,mn.current),Me(pi,pi.current)}function sa(t){pe(pi),Ui===t&&(Ui=null),pe(mn)}var mn=Y(0);function nc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||mh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Af(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Rf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ai(),f=La(l);f.payload=i,s!=null&&(f.callback=s),i=Ua(t,f,l),i!==null&&(si(i,t,l),So(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ai(),f=La(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ua(t,f,l),i!==null&&(si(i,t,l),So(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ai(),l=La(s);l.tag=2,i!=null&&(l.callback=i),i=Ua(t,l,s),i!==null&&(si(i,t,s),So(i,t,s))}};function pg(t,i,s,l,f,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!uo(s,l)||!uo(f,m):!0}function mg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Rf.enqueueReplaceState(i,i.state,null)}function As(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var ic=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function gg(t){ic(t)}function _g(t){console.error(t)}function vg(t){ic(t)}function ac(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function xg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function wf(t,i,s){return s=La(s),s.tag=3,s.payload={element:null},s.callback=function(){ac(t,i)},s}function yg(t){return t=La(t),t.tag=3,t}function Sg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){xg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){xg(i,s,l),typeof f!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function Ay(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&go(i,s,f,!0),s=pi.current,s!==null){switch(s.tag){case 13:return Ui===null?Jf():s.alternate===null&&nn===0&&(nn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===nf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),eh(t,l,f)),!1;case 22:return s.flags|=65536,l===nf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),eh(t,l,f)),!1}throw Error(a(435,s.tag))}return eh(t,l,f),Jf(),!1}if(Ut)return i=pi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Ku&&(t=Error(a(422),{cause:l}),mo(ui(t,s)))):(l!==Ku&&(i=Error(a(423),{cause:l}),mo(ui(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=ui(l,s),f=wf(t.stateNode,l,f),rf(t,f),nn!==4&&(nn=2)),!1;var m=Error(a(520),{cause:l});if(m=ui(m,s),Io===null?Io=[m]:Io.push(m),nn!==4&&(nn=2),i===null)return!0;l=ui(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=wf(s.stateNode,l,t),rf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Va===null||!Va.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=yg(f),Sg(f,t,s,l),rf(s,f),!1}s=s.return}while(s!==null);return!1}var Mg=Error(a(461)),Sn=!1;function wn(t,i,s,l){i.child=t===null?hg(i,null,s,l):lr(i,t.child,s,l)}function bg(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return bs(i),l=ff(t,i,s,M,m,f),A=hf(),t!==null&&!Sn?(df(t,i,f),ra(t,i,f)):(Ut&&A&&Yu(i),i.flags|=1,wn(t,i,l,f),i.child)}function Eg(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!Xu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Tg(t,i,m,l,f)):(t=Bl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!If(t,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:uo,s(M,l)&&t.ref===i.ref)return ra(t,i,f)}return i.flags|=1,t=$i(m,l),t.ref=i.ref,t.return=i,i.child=t}function Tg(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(uo(m,l)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=l=m,If(t,f))(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,ra(t,i,f)}return Cf(t,i,s,l,f)}function Ag(t,i,s){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Rg(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vl(i,m!==null?m.cachePool:null),m!==null?Tm(i,m):lf(),dg(i);else return i.lanes=i.childLanes=536870912,Rg(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Vl(i,m.cachePool),Tm(i,m),Ia(),i.memoizedState=null):(t!==null&&Vl(i,null),lf(),Ia());return wn(t,i,f,s),i.child}function Rg(t,i,s,l){var f=tf();return f=f===null?null:{parent:pn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&Vl(i,null),lf(),dg(i),t!==null&&go(t,i,l,!0),null}function sc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Cf(t,i,s,l,f){return bs(i),s=ff(t,i,s,l,void 0,f),l=hf(),t!==null&&!Sn?(df(t,i,f),ra(t,i,f)):(Ut&&l&&Yu(i),i.flags|=1,wn(t,i,s,f),i.child)}function wg(t,i,s,l,f,m){return bs(i),i.updateQueue=null,s=Rm(i,l,s,f),Am(t),l=hf(),t!==null&&!Sn?(df(t,i,m),ra(t,i,m)):(Ut&&l&&Yu(i),i.flags|=1,wn(t,i,s,m),i.child)}function Cg(t,i,s,l,f){if(bs(i),i.stateNode===null){var m=Js,M=s.contextType;typeof M=="object"&&M!==null&&(m=On(M)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Rf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},af(i),M=s.contextType,m.context=typeof M=="object"&&M!==null?On(M):Js,m.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Af(i,s,M,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Rf.enqueueReplaceState(m,m.state,null),bo(i,l,m,f),Mo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var A=i.memoizedProps,I=As(s,A);m.props=I;var te=m.context,fe=s.contextType;M=Js,typeof fe=="object"&&fe!==null&&(M=On(fe));var xe=s.getDerivedStateFromProps;fe=typeof xe=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,fe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||te!==M)&&mg(i,m,l,M),Na=!1;var ie=i.memoizedState;m.state=ie,bo(i,l,m,f),Mo(),te=i.memoizedState,A||ie!==te||Na?(typeof xe=="function"&&(Af(i,s,xe,l),te=i.memoizedState),(I=Na||pg(i,s,I,l,ie,te,M))?(fe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),m.props=l,m.state=te,m.context=M,l=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,sf(t,i),M=i.memoizedProps,fe=As(s,M),m.props=fe,xe=i.pendingProps,ie=m.context,te=s.contextType,I=Js,typeof te=="object"&&te!==null&&(I=On(te)),A=s.getDerivedStateFromProps,(te=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==xe||ie!==I)&&mg(i,m,l,I),Na=!1,ie=i.memoizedState,m.state=ie,bo(i,l,m,f),Mo();var se=i.memoizedState;M!==xe||ie!==se||Na||t!==null&&t.dependencies!==null&&Hl(t.dependencies)?(typeof A=="function"&&(Af(i,s,A,l),se=i.memoizedState),(fe=Na||pg(i,s,fe,l,ie,se,I)||t!==null&&t.dependencies!==null&&Hl(t.dependencies))?(te||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,se,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,se,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=se),m.props=l,m.state=se,m.context=I,l=fe):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,sc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=lr(i,t.child,null,f),i.child=lr(i,null,s,f)):wn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=ra(t,i,f),t}function Dg(t,i,s,l){return po(),i.flags|=256,wn(t,i,s,l),i.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(t){return{baseLanes:t,cachePool:_m()}}function Lf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=mi),t}function Ng(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ut){if(f?Pa(i):Ia(),Ut){var A=tn,I;if(I=A){e:{for(I=A,A=Li;I.nodeType!==8;){if(!A){A=null;break e}if(I=Mi(I.nextSibling),I===null){A=null;break e}}A=I}A!==null?(i.memoizedState={dehydrated:A,treeContext:vs!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},I=ei(18,null,null,0),I.stateNode=A,I.return=i,i.child=I,Fn=i,tn=null,I=!0):I=!1}I||Ss(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return mh(A)?i.lanes=32:i.lanes=536870912,null;sa(i)}return A=l.children,l=l.fallback,f?(Ia(),f=i.mode,A=rc({mode:"hidden",children:A},f),l=_s(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,f=i.child,f.memoizedState=Nf(s),f.childLanes=Lf(t,M,s),i.memoizedState=Df,l):(Pa(i),Uf(i,A))}if(I=t.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(m)i.flags&256?(Pa(i),i.flags&=-257,i=Of(t,i,s)):i.memoizedState!==null?(Ia(),i.child=t.child,i.flags|=128,i=null):(Ia(),f=l.fallback,A=i.mode,l=rc({mode:"visible",children:l.children},A),f=_s(f,A,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,lr(i,t.child,null,s),l=i.child,l.memoizedState=Nf(s),l.childLanes=Lf(t,M,s),i.memoizedState=Df,i=f);else if(Pa(i),mh(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var te=M.dgst;M=te,l=Error(a(419)),l.stack="",l.digest=M,mo({value:l,source:null,stack:null}),i=Of(t,i,s)}else if(Sn||go(t,i,s,!1),M=(s&t.childLanes)!==0,Sn||M){if(M=Zt,M!==null&&(l=s&-s,l=(l&42)!==0?1:it(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Qs(t,l),si(M,t,l),Mg;A.data==="$?"||Jf(),i=Of(t,i,s)}else A.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,tn=Mi(A.nextSibling),Fn=i,Ut=!0,ys=null,Li=!1,t!==null&&(hi[di++]=ea,hi[di++]=ta,hi[di++]=vs,ea=t.id,ta=t.overflow,vs=i),i=Uf(i,l.children),i.flags|=4096);return i}return f?(Ia(),f=l.fallback,A=i.mode,I=t.child,te=I.sibling,l=$i(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,te!==null?f=$i(te,f):(f=_s(f,A,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,A=t.child.memoizedState,A===null?A=Nf(s):(I=A.cachePool,I!==null?(te=pn._currentValue,I=I.parent!==te?{parent:te,pool:te}:I):I=_m(),A={baseLanes:A.baseLanes|s,cachePool:I}),f.memoizedState=A,f.childLanes=Lf(t,M,s),i.memoizedState=Df,l):(Pa(i),s=t.child,t=s.sibling,s=$i(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Uf(t,i){return i=rc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function rc(t,i){return t=ei(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Of(t,i,s){return lr(i,t.child,null,s),t=Uf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Lg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Qu(t.return,i,s)}function Pf(t,i,s,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function Ug(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(wn(t,i,l.children,s),l=mn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,s,i);else if(t.tag===19)Lg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Me(mn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&nc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Pf(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&nc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Pf(i,!0,s,null,m);break;case"together":Pf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ra(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ga|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(go(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=$i(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=$i(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function If(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Hl(t)))}function Ry(t,i,s){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),Da(i,pn,t.memoizedState.cache),po();break;case 27:case 5:je(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:Da(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Pa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Ng(t,i,s):(Pa(i),t=ra(t,i,s),t!==null?t.sibling:null);Pa(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(go(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Ug(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Me(mn,mn.current),l)break;return null;case 22:case 23:return i.lanes=0,Ag(t,i,s);case 24:Da(i,pn,t.memoizedState.cache)}return ra(t,i,s)}function Og(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Sn=!0;else{if(!If(t,s)&&(i.flags&128)===0)return Sn=!1,Ry(t,i,s);Sn=(t.flags&131072)!==0}else Sn=!1,Ut&&(i.flags&1048576)!==0&&um(i,zl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Xu(l)?(t=As(l,t),i.tag=1,i=Cg(null,i,l,t,s)):(i.tag=0,i=Cf(null,i,l,t,s));else{if(l!=null){if(f=l.$$typeof,f===C){i.tag=11,i=bg(null,i,l,t,s);break e}else if(f===P){i.tag=14,i=Eg(null,i,l,t,s);break e}}throw i=_e(l)||l,Error(a(306,i,""))}}return i;case 0:return Cf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=As(l,i.pendingProps),Cg(t,i,l,f,s);case 3:e:{if(we(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,sf(t,i),bo(i,l,null,s);var M=i.memoizedState;if(l=M.cache,Da(i,pn,l),l!==m.cache&&Ju(i,[pn],s,!0),Mo(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Dg(t,i,l,s);break e}else if(l!==f){f=ui(Error(a(424)),i),mo(f),i=Dg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=Mi(t.firstChild),Fn=i,Ut=!0,ys=null,Li=!0,s=hg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(po(),l===f){i=ra(t,i,s);break e}wn(t,i,l,s)}i=i.child}return i;case 26:return sc(t,i),t===null?(s=F0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ut||(s=i.type,t=i.pendingProps,l=yc(Se.current).createElement(s),l[hn]=i,l[An]=t,Dn(l,s,t),ln(l),i.stateNode=l):i.memoizedState=F0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return je(i),t===null&&Ut&&(l=i.stateNode=P0(i.type,i.pendingProps,Se.current),Fn=i,Li=!0,f=tn,Wa(i.type)?(gh=f,tn=Mi(l.firstChild)):tn=f),wn(t,i,i.pendingProps.children,s),sc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ut&&((f=l=tn)&&(l=tS(l,i.type,i.pendingProps,Li),l!==null?(i.stateNode=l,Fn=i,tn=Mi(l.firstChild),Li=!1,f=!0):f=!1),f||Ss(i)),je(i),f=i.type,m=i.pendingProps,M=t!==null?t.memoizedProps:null,l=m.children,hh(f,m)?l=null:M!==null&&hh(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=ff(t,i,xy,null,null,s),Wo._currentValue=f),sc(t,i),wn(t,i,l,s),i.child;case 6:return t===null&&Ut&&((t=s=tn)&&(s=nS(s,i.pendingProps,Li),s!==null?(i.stateNode=s,Fn=i,tn=null,t=!0):t=!1),t||Ss(i)),null;case 13:return Ng(t,i,s);case 4:return we(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=lr(i,null,l,s):wn(t,i,l,s),i.child;case 11:return bg(t,i,i.type,i.pendingProps,s);case 7:return wn(t,i,i.pendingProps,s),i.child;case 8:return wn(t,i,i.pendingProps.children,s),i.child;case 12:return wn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Da(i,i.type,l.value),wn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,bs(i),f=On(f),l=l(f),i.flags|=1,wn(t,i,l,s),i.child;case 14:return Eg(t,i,i.type,i.pendingProps,s);case 15:return Tg(t,i,i.type,i.pendingProps,s);case 19:return Ug(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=rc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=$i(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Ag(t,i,s);case 24:return bs(i),l=On(pn),t===null?(f=tf(),f===null&&(f=Zt,m=$u(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},af(i),Da(i,pn,f)):((t.lanes&s)!==0&&(sf(t,i),bo(i,null,null,s),Mo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Da(i,pn,l)):(l=m.cache,Da(i,pn,l),l!==f.cache&&Ju(i,[pn],s,!0))),wn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function oa(t){t.flags|=4}function Pg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!k0(i)){if(i=pi.current,i!==null&&((Tt&4194048)===Tt?Ui!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||i!==Ui))throw yo=nf,vm;t.flags|=8192}}function oc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Le():536870912,t.lanes|=i,hr|=i)}function Do(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function wy(t,i,s){var l=i.pendingProps;switch(qu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(i),null;case 1:return Jt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ia(pn),Je(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ho(i)?oa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,dm())),Jt(i),null;case 26:return s=i.memoizedState,t===null?(oa(i),s!==null?(Jt(i),Pg(i,s)):(Jt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(oa(i),Jt(i),Pg(i,s)):(Jt(i),i.flags&=-16777217):(t.memoizedProps!==l&&oa(i),Jt(i),i.flags&=-16777217),null;case 27:Nt(i),s=Se.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}t=W.current,ho(i)?fm(i):(t=P0(f,l,s),i.stateNode=t,oa(i))}return Jt(i),null;case 5:if(Nt(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}if(t=W.current,ho(i))fm(i);else{switch(f=yc(Se.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}t[hn]=i,t[An]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(Dn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&oa(i)}}return Jt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=Se.current,ho(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Fn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[hn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||w0(t.nodeValue,s)),t||Ss(i)}else t=yc(t).createTextNode(l),t[hn]=i,i.stateNode=t}return Jt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=ho(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[hn]=i}else po(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),f=!1}else f=dm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(sa(i),i):(sa(i),null)}if(sa(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),oc(i,i.updateQueue),Jt(i),null;case 4:return Je(),t===null&&oh(i.stateNode.containerInfo),Jt(i),null;case 10:return ia(i.type),Jt(i),null;case 19:if(pe(mn),f=i.memoizedState,f===null)return Jt(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Do(f,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=nc(t),m!==null){for(i.flags|=128,Do(f,!1),t=m.updateQueue,i.updateQueue=t,oc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)cm(s,t),s=s.sibling;return Me(mn,mn.current&1|2),i.child}t=t.sibling}f.tail!==null&&ct()>uc&&(i.flags|=128,l=!0,Do(f,!1),i.lanes=4194304)}else{if(!l)if(t=nc(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,oc(i,t),Do(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ut)return Jt(i),null}else 2*ct()-f.renderingStartTime>uc&&s!==536870912&&(i.flags|=128,l=!0,Do(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=ct(),i.sibling=null,t=mn.current,Me(mn,l?t&1|2:t&1),i):(Jt(i),null);case 22:case 23:return sa(i),cf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Jt(i),i.subtreeFlags&6&&(i.flags|=8192)):Jt(i),s=i.updateQueue,s!==null&&oc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&pe(Es),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ia(pn),Jt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Cy(t,i){switch(qu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ia(pn),Je(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Nt(i),null;case 13:if(sa(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));po()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return pe(mn),null;case 4:return Je(),null;case 10:return ia(i.type),null;case 22:case 23:return sa(i),cf(),t!==null&&pe(Es),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ia(pn),null;case 25:return null;default:return null}}function Ig(t,i){switch(qu(i),i.tag){case 3:ia(pn),Je();break;case 26:case 27:case 5:Nt(i);break;case 4:Je();break;case 13:sa(i);break;case 19:pe(mn);break;case 10:ia(i.type);break;case 22:case 23:sa(i),cf(),t!==null&&pe(Es);break;case 24:ia(pn)}}function No(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(A){Yt(i,i.return,A)}}function Ba(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,f=i;var I=s,te=A;try{te()}catch(fe){Yt(f,I,fe)}}}l=l.next}while(l!==m)}}catch(fe){Yt(i,i.return,fe)}}function Bg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Em(i,s)}catch(l){Yt(t,t.return,l)}}}function Fg(t,i,s){s.props=As(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Yt(t,i,l)}}function Lo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Yt(t,i,f)}}function Oi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Yt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Yt(t,i,f)}else s.current=null}function zg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Yt(t,t.return,f)}}function Bf(t,i,s){try{var l=t.stateNode;Zy(l,t.type,s,i),l[An]=i}catch(f){Yt(t,t.return,f)}}function Hg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=xc));else if(l!==4&&(l===27&&Wa(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(zf(t,i,s),t=t.sibling;t!==null;)zf(t,i,s),t=t.sibling}function lc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Wa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(lc(t,i,s),t=t.sibling;t!==null;)lc(t,i,s),t=t.sibling}function Gg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Dn(i,l,s),i[hn]=t,i[An]=s}catch(m){Yt(t,t.return,m)}}var la=!1,on=!1,Hf=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Dy(t,i){if(t=t.containerInfo,uh=Ac,t=$p(t),Bu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var M=0,A=-1,I=-1,te=0,fe=0,xe=t,ie=null;t:for(;;){for(var se;xe!==s||f!==0&&xe.nodeType!==3||(A=M+f),xe!==m||l!==0&&xe.nodeType!==3||(I=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(se=xe.firstChild)!==null;)ie=xe,xe=se;for(;;){if(xe===t)break t;if(ie===s&&++te===f&&(A=M),ie===m&&++fe===l&&(I=M),(se=xe.nextSibling)!==null)break;xe=ie,ie=xe.parentNode}xe=se}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(fh={focusedElem:t,selectionRange:s},Ac=!1,Mn=i;Mn!==null;)if(i=Mn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Mn=t;else for(;Mn!==null;){switch(i=Mn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var nt=As(s.type,f,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(nt,m),l.__reactInternalSnapshotBeforeUpdate=t}catch($e){Yt(s,s.return,$e)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)ph(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ph(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Mn=t;break}Mn=i.return}}function kg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Fa(t,s),l&4&&No(5,s);break;case 1:if(Fa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){Yt(s,s.return,M)}else{var f=As(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Yt(s,s.return,M)}}l&64&&Bg(s),l&512&&Lo(s,s.return);break;case 3:if(Fa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Em(t,i)}catch(M){Yt(s,s.return,M)}}break;case 27:i===null&&l&4&&Gg(s);case 26:case 5:Fa(t,s),i===null&&l&4&&zg(s),l&512&&Lo(s,s.return);break;case 12:Fa(t,s);break;case 13:Fa(t,s),l&4&&jg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=zy.bind(null,s),iS(t,s))));break;case 22:if(l=s.memoizedState!==null||la,!l){i=i!==null&&i.memoizedState!==null||on,f=la;var m=on;la=l,(on=i)&&!m?za(t,s,(s.subtreeFlags&8772)!==0):Fa(t,s),la=f,on=m}break;case 30:break;default:Fa(t,s)}}function Xg(t){var i=t.alternate;i!==null&&(t.alternate=null,Xg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Aa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,qn=!1;function ca(t,i,s){for(s=s.child;s!==null;)Wg(t,i,s),s=s.sibling}function Wg(t,i,s){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(de,s)}catch{}switch(s.tag){case 26:on||Oi(s,i),ca(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:on||Oi(s,i);var l=Qt,f=qn;Wa(s.type)&&(Qt=s.stateNode,qn=!1),ca(t,i,s),Go(s.stateNode),Qt=l,qn=f;break;case 5:on||Oi(s,i);case 6:if(l=Qt,f=qn,Qt=null,ca(t,i,s),Qt=l,qn=f,Qt!==null)if(qn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(s.stateNode)}catch(m){Yt(s,i,m)}else try{Qt.removeChild(s.stateNode)}catch(m){Yt(s,i,m)}break;case 18:Qt!==null&&(qn?(t=Qt,U0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Ko(t)):U0(Qt,s.stateNode));break;case 4:l=Qt,f=qn,Qt=s.stateNode.containerInfo,qn=!0,ca(t,i,s),Qt=l,qn=f;break;case 0:case 11:case 14:case 15:on||Ba(2,s,i),on||Ba(4,s,i),ca(t,i,s);break;case 1:on||(Oi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Fg(s,i,l)),ca(t,i,s);break;case 21:ca(t,i,s);break;case 22:on=(l=on)||s.memoizedState!==null,ca(t,i,s),on=l;break;default:ca(t,i,s)}}function jg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ko(t)}catch(s){Yt(i,i.return,s)}}function Ny(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Vg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Vg),i;default:throw Error(a(435,t.tag))}}function Gf(t,i){var s=Ny(t);i.forEach(function(l){var f=Hy.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}function ti(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,M=i,A=M;e:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){Qt=A.stateNode,qn=!1;break e}break;case 5:Qt=A.stateNode,qn=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,qn=!0;break e}A=A.return}if(Qt===null)throw Error(a(160));Wg(m,M,f),Qt=null,qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Yg(i,t),i=i.sibling}var Si=null;function Yg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ti(i,t),ni(t),l&4&&(Ba(3,t,t.return),No(3,t),Ba(5,t,t.return));break;case 1:ti(i,t),ni(t),l&512&&(on||s===null||Oi(s,s.return)),l&64&&la&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Si;if(ti(i,t),ni(t),l&512&&(on||s===null||Oi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ta]||m[hn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Dn(m,l,s),m[hn]=t,ln(m),l=m;break e;case"link":var M=G0("link","href",f).get(l+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(m=M[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break t}}m=f.createElement(l),Dn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=G0("meta","content",f).get(l+(s.content||""))){for(A=0;A<M.length;A++)if(m=M[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break t}}m=f.createElement(l),Dn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[hn]=t,ln(m),l=m}t.stateNode=l}else V0(f,t.type,t.stateNode);else t.stateNode=H0(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?V0(f,t.type,t.stateNode):H0(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Bf(t,t.memoizedProps,s.memoizedProps)}break;case 27:ti(i,t),ni(t),l&512&&(on||s===null||Oi(s,s.return)),s!==null&&l&4&&Bf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ti(i,t),ni(t),l&512&&(on||s===null||Oi(s,s.return)),t.flags&32){f=t.stateNode;try{Ni(f,"")}catch(se){Yt(t,t.return,se)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Bf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Hf=!0);break;case 6:if(ti(i,t),ni(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(se){Yt(t,t.return,se)}}break;case 3:if(bc=null,f=Si,Si=Sc(i.containerInfo),ti(i,t),Si=f,ni(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ko(i.containerInfo)}catch(se){Yt(t,t.return,se)}Hf&&(Hf=!1,qg(t));break;case 4:l=Si,Si=Sc(t.stateNode.containerInfo),ti(i,t),ni(t),Si=l;break;case 12:ti(i,t),ni(t);break;case 13:ti(i,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Yf=ct()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Gf(t,l)));break;case 22:f=t.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,te=la,fe=on;if(la=te||f,on=fe||I,ti(i,t),on=fe,la=te,ni(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||I||la||on||Rs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(m=I.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=I.stateNode;var xe=I.memoizedProps.style,ie=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(se){Yt(I,I.return,se)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(se){Yt(I,I.return,se)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Gf(t,s))));break;case 19:ti(i,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Gf(t,l)));break;case 30:break;case 21:break;default:ti(i,t),ni(t)}}function ni(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Hg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=Ff(t);lc(t,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Ni(M,""),s.flags&=-33);var A=Ff(t);lc(t,A,M);break;case 3:case 4:var I=s.stateNode.containerInfo,te=Ff(t);zf(t,te,I);break;default:throw Error(a(161))}}catch(fe){Yt(t,t.return,fe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;qg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Fa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)kg(t,i.alternate,i),i=i.sibling}function Rs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ba(4,i,i.return),Rs(i);break;case 1:Oi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Fg(i,i.return,s),Rs(i);break;case 27:Go(i.stateNode);case 26:case 5:Oi(i,i.return),Rs(i);break;case 22:i.memoizedState===null&&Rs(i);break;case 30:Rs(i);break;default:Rs(i)}t=t.sibling}}function za(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:za(f,m,s),No(4,m);break;case 1:if(za(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(te){Yt(l,l.return,te)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)bm(I[f],A)}catch(te){Yt(l,l.return,te)}}s&&M&64&&Bg(m),Lo(m,m.return);break;case 27:Gg(m);case 26:case 5:za(f,m,s),s&&l===null&&M&4&&zg(m),Lo(m,m.return);break;case 12:za(f,m,s);break;case 13:za(f,m,s),s&&M&4&&jg(f,m);break;case 22:m.memoizedState===null&&za(f,m,s),Lo(m,m.return);break;case 30:break;default:za(f,m,s)}i=i.sibling}}function Vf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&_o(s))}function kf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&_o(t))}function Pi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Kg(t,i,s,l),i=i.sibling}function Kg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,l),f&2048&&No(9,i);break;case 1:Pi(t,i,s,l);break;case 3:Pi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&_o(t)));break;case 12:if(f&2048){Pi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,M=m.id,A=m.onPostCommit;typeof A=="function"&&A(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Yt(i,i.return,I)}}else Pi(t,i,s,l);break;case 13:Pi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?Pi(t,i,s,l):Uo(t,i):m._visibility&2?Pi(t,i,s,l):(m._visibility|=2,cr(t,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&Vf(M,i);break;case 24:Pi(t,i,s,l),f&2048&&kf(i.alternate,i);break;default:Pi(t,i,s,l)}}function cr(t,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,M=i,A=s,I=l,te=M.flags;switch(M.tag){case 0:case 11:case 15:cr(m,M,A,I,f),No(8,M);break;case 23:break;case 22:var fe=M.stateNode;M.memoizedState!==null?fe._visibility&2?cr(m,M,A,I,f):Uo(m,M):(fe._visibility|=2,cr(m,M,A,I,f)),f&&te&2048&&Vf(M.alternate,M);break;case 24:cr(m,M,A,I,f),f&&te&2048&&kf(M.alternate,M);break;default:cr(m,M,A,I,f)}i=i.sibling}}function Uo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Uo(s,l),f&2048&&Vf(l.alternate,l);break;case 24:Uo(s,l),f&2048&&kf(l.alternate,l);break;default:Uo(s,l)}i=i.sibling}}var Oo=8192;function ur(t){if(t.subtreeFlags&Oo)for(t=t.child;t!==null;)Zg(t),t=t.sibling}function Zg(t){switch(t.tag){case 26:ur(t),t.flags&Oo&&t.memoizedState!==null&&gS(Si,t.memoizedState,t.memoizedProps);break;case 5:ur(t);break;case 3:case 4:var i=Si;Si=Sc(t.stateNode.containerInfo),ur(t),Si=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Oo,Oo=16777216,ur(t),Oo=i):ur(t));break;default:ur(t)}}function Qg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Po(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,$g(l,t)}Qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jg(t),t=t.sibling}function Jg(t){switch(t.tag){case 0:case 11:case 15:Po(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Po(t);break;case 12:Po(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,cc(t)):Po(t);break;default:Po(t)}}function cc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,$g(l,t)}Qg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ba(8,i,i.return),cc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,cc(i));break;default:cc(i)}t=t.sibling}}function $g(t,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Ba(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_o(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else e:for(s=t;Mn!==null;){l=Mn;var f=l.sibling,m=l.return;if(Xg(l),l===s){Mn=null;break e}if(f!==null){f.return=m,Mn=f;break e}Mn=m}}}var Ly={getCacheForType:function(t){var i=On(pn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},Uy=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Zt=null,vt=null,Tt=0,Ft=0,ii=null,Ha=!1,fr=!1,Xf=!1,ua=0,nn=0,Ga=0,ws=0,Wf=0,mi=0,hr=0,Io=null,Kn=null,jf=!1,Yf=0,uc=1/0,fc=null,Va=null,Cn=0,ka=null,dr=null,pr=0,qf=0,Kf=null,e0=null,Bo=0,Zf=null;function ai(){if((Bt&2)!==0&&Tt!==0)return Tt&-Tt;if(B.T!==null){var t=tr;return t!==0?t:ih()}return Ct()}function t0(){mi===0&&(mi=(Tt&536870912)===0||Ut?k():536870912);var t=pi.current;return t!==null&&(t.flags|=32),mi}function si(t,i,s){(t===Zt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(mr(t,0),Xa(t,Tt,mi,!1)),Be(t,s),((Bt&2)===0||t!==Zt)&&(t===Zt&&((Bt&2)===0&&(ws|=s),nn===4&&Xa(t,Tt,mi,!1)),Ii(t))}function n0(t,i,s){if((Bt&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Ce(t,i),f=l?Iy(t,i):$f(t,i,!0),m=l;do{if(f===0){fr&&!l&&Xa(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!Oy(s)){f=$f(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var A=t;f=Io;var I=A.current.memoizedState.isDehydrated;if(I&&(mr(A,M).flags|=256),M=$f(A,M,!1),M!==2){if(Xf&&!I){A.errorRecoveryDisabledLanes|=m,ws|=m,f=4;break e}m=Kn,Kn=f,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){mr(t,0),Xa(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Xa(l,i,mi,!Ha);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Yf+300-ct(),10<f)){if(Xa(l,i,mi,!Ha),qe(l,0,!0)!==0)break e;l.timeoutHandle=N0(i0.bind(null,l,s,Kn,fc,jf,i,mi,ws,hr,Ha,m,2,-0,0),f);break e}i0(l,s,Kn,fc,jf,i,mi,ws,hr,Ha,m,0,-0,0)}}break}while(!0);Ii(t)}function i0(t,i,s,l,f,m,M,A,I,te,fe,xe,ie,se){if(t.timeoutHandle=-1,xe=i.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(Xo={stylesheets:null,count:0,unsuspend:mS},Zg(i),xe=_S(),xe!==null)){t.cancelPendingCommit=xe(u0.bind(null,t,i,m,s,l,f,M,A,I,fe,1,ie,se)),Xa(t,m,M,!te);return}u0(t,i,m,s,l,f,M,A,I)}function Oy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!$n(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xa(t,i,s,l){i&=~Wf,i&=~ws,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Pe(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&ye(t,s,i)}function hc(){return(Bt&6)===0?(Fo(0),!1):!0}function Qf(){if(vt!==null){if(Ft===0)var t=vt.return;else t=vt,na=Ms=null,pf(t),or=null,wo=0,t=vt;for(;t!==null;)Ig(t.alternate,t),t=t.return;vt=null}}function mr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Jy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Qf(),Zt=t,vt=s=$i(t.current,null),Tt=i,Ft=0,ii=null,Ha=!1,fr=Ce(t,i),Xf=!1,hr=mi=Wf=ws=Ga=nn=0,Kn=Io=null,jf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Pe(l),m=1<<f;i|=t[f],l&=~m}return ua=i,Ol(),s}function a0(t,i){mt=null,B.H=$l,i===xo||i===kl?(i=Sm(),Ft=3):i===vm?(i=Sm(),Ft=4):Ft=i===Mg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ii=i,vt===null&&(nn=1,ac(t,ui(i,t.current)))}function s0(){var t=B.H;return B.H=$l,t===null?$l:t}function r0(){var t=B.A;return B.A=Ly,t}function Jf(){nn=4,Ha||(Tt&4194048)!==Tt&&pi.current!==null||(fr=!0),(Ga&134217727)===0&&(ws&134217727)===0||Zt===null||Xa(Zt,Tt,mi,!1)}function $f(t,i,s){var l=Bt;Bt|=2;var f=s0(),m=r0();(Zt!==t||Tt!==i)&&(fc=null,mr(t,i)),i=!1;var M=nn;e:do try{if(Ft!==0&&vt!==null){var A=vt,I=ii;switch(Ft){case 8:Qf(),M=6;break e;case 3:case 2:case 9:case 6:pi.current===null&&(i=!0);var te=Ft;if(Ft=0,ii=null,gr(t,A,I,te),s&&fr){M=0;break e}break;default:te=Ft,Ft=0,ii=null,gr(t,A,I,te)}}Py(),M=nn;break}catch(fe){a0(t,fe)}while(!0);return i&&t.shellSuspendCounter++,na=Ms=null,Bt=l,B.H=f,B.A=m,vt===null&&(Zt=null,Tt=0,Ol()),M}function Py(){for(;vt!==null;)o0(vt)}function Iy(t,i){var s=Bt;Bt|=2;var l=s0(),f=r0();Zt!==t||Tt!==i?(fc=null,uc=ct()+500,mr(t,i)):fr=Ce(t,i);e:do try{if(Ft!==0&&vt!==null){i=vt;var m=ii;t:switch(Ft){case 1:Ft=0,ii=null,gr(t,i,m,1);break;case 2:case 9:if(xm(m)){Ft=0,ii=null,l0(i);break}i=function(){Ft!==2&&Ft!==9||Zt!==t||(Ft=7),Ii(t)},m.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:xm(m)?(Ft=0,ii=null,l0(i)):(Ft=0,ii=null,gr(t,i,m,7));break;case 5:var M=null;switch(vt.tag){case 26:M=vt.memoizedState;case 5:case 27:var A=vt;if(!M||k0(M)){Ft=0,ii=null;var I=A.sibling;if(I!==null)vt=I;else{var te=A.return;te!==null?(vt=te,dc(te)):vt=null}break t}}Ft=0,ii=null,gr(t,i,m,5);break;case 6:Ft=0,ii=null,gr(t,i,m,6);break;case 8:Qf(),nn=6;break e;default:throw Error(a(462))}}By();break}catch(fe){a0(t,fe)}while(!0);return na=Ms=null,B.H=l,B.A=f,Bt=s,vt!==null?0:(Zt=null,Tt=0,Ol(),nn)}function By(){for(;vt!==null&&!an();)o0(vt)}function o0(t){var i=Og(t.alternate,t,ua);t.memoizedProps=t.pendingProps,i===null?dc(t):vt=i}function l0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=wg(s,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=wg(s,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:pf(i);default:Ig(s,i),i=vt=cm(i,ua),i=Og(s,i,ua)}t.memoizedProps=t.pendingProps,i===null?dc(t):vt=i}function gr(t,i,s,l){na=Ms=null,pf(i),or=null,wo=0;var f=i.return;try{if(Ay(t,f,i,s,Tt)){nn=1,ac(t,ui(s,t.current)),vt=null;return}}catch(m){if(f!==null)throw vt=f,m;nn=1,ac(t,ui(s,t.current)),vt=null;return}i.flags&32768?(Ut||l===1?t=!0:fr||(Tt&536870912)!==0?t=!1:(Ha=t=!0,(l===2||l===9||l===3||l===6)&&(l=pi.current,l!==null&&l.tag===13&&(l.flags|=16384))),c0(i,t)):dc(i)}function dc(t){var i=t;do{if((i.flags&32768)!==0){c0(i,Ha);return}t=i.return;var s=wy(i.alternate,i,ua);if(s!==null){vt=s;return}if(i=i.sibling,i!==null){vt=i;return}vt=i=t}while(i!==null);nn===0&&(nn=5)}function c0(t,i){do{var s=Cy(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);nn=6,vt=null}function u0(t,i,s,l,f,m,M,A,I){t.cancelPendingCommit=null;do pc();while(Cn!==0);if((Bt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Vu,Re(t,s,m,M,A,I),t===Zt&&(vt=Zt=null,Tt=0),dr=i,ka=t,pr=s,qf=m,Kf=f,e0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gy(st,function(){return m0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=J.p,J.p=2,M=Bt,Bt|=4;try{Dy(t,i,s)}finally{Bt=M,J.p=f,B.T=l}}Cn=1,f0(),h0(),d0()}}function f0(){if(Cn===1){Cn=0;var t=ka,i=dr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=J.p;J.p=2;var f=Bt;Bt|=4;try{Yg(i,t);var m=fh,M=$p(t.containerInfo),A=m.focusedElem,I=m.selectionRange;if(M!==A&&A&&A.ownerDocument&&Jp(A.ownerDocument.documentElement,A)){if(I!==null&&Bu(A)){var te=I.start,fe=I.end;if(fe===void 0&&(fe=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(fe,A.value.length);else{var xe=A.ownerDocument||document,ie=xe&&xe.defaultView||window;if(ie.getSelection){var se=ie.getSelection(),nt=A.textContent.length,$e=Math.min(I.start,nt),kt=I.end===void 0?$e:Math.min(I.end,nt);!se.extend&&$e>kt&&(M=kt,kt=$e,$e=M);var q=Qp(A,$e),V=Qp(A,kt);if(q&&V&&(se.rangeCount!==1||se.anchorNode!==q.node||se.anchorOffset!==q.offset||se.focusNode!==V.node||se.focusOffset!==V.offset)){var ee=xe.createRange();ee.setStart(q.node,q.offset),se.removeAllRanges(),$e>kt?(se.addRange(ee),se.extend(V.node,V.offset)):(ee.setEnd(V.node,V.offset),se.addRange(ee))}}}}for(xe=[],se=A;se=se.parentNode;)se.nodeType===1&&xe.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var me=xe[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Ac=!!uh,fh=uh=null}finally{Bt=f,J.p=l,B.T=s}}t.current=i,Cn=2}}function h0(){if(Cn===2){Cn=0;var t=ka,i=dr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=J.p;J.p=2;var f=Bt;Bt|=4;try{kg(t,i.alternate,i)}finally{Bt=f,J.p=l,B.T=s}}Cn=3}}function d0(){if(Cn===4||Cn===3){Cn=0,Et();var t=ka,i=dr,s=pr,l=e0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,dr=ka=null,p0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Va=null),It(s),i=i.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(de,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=J.p,J.p=2,B.T=null;try{for(var m=t.onRecoverableError,M=0;M<l.length;M++){var A=l[M];m(A.value,{componentStack:A.stack})}}finally{B.T=i,J.p=f}}(pr&3)!==0&&pc(),Ii(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===Zf?Bo++:(Bo=0,Zf=t):Bo=0,Fo(0)}}function p0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,_o(i)))}function pc(t){return f0(),h0(),d0(),m0()}function m0(){if(Cn!==5)return!1;var t=ka,i=qf;qf=0;var s=It(pr),l=B.T,f=J.p;try{J.p=32>s?32:s,B.T=null,s=Kf,Kf=null;var m=ka,M=pr;if(Cn=0,dr=ka=null,pr=0,(Bt&6)!==0)throw Error(a(331));var A=Bt;if(Bt|=4,Jg(m.current),Kg(m,m.current,M,s),Bt=A,Fo(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(de,m)}catch{}return!0}finally{J.p=f,B.T=l,p0(t,i)}}function g0(t,i,s){i=ui(s,i),i=wf(t.stateNode,i,2),t=Ua(t,i,2),t!==null&&(Be(t,2),Ii(t))}function Yt(t,i,s){if(t.tag===3)g0(t,t,s);else for(;i!==null;){if(i.tag===3){g0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Va===null||!Va.has(l))){t=ui(s,t),s=yg(2),l=Ua(i,s,2),l!==null&&(Sg(s,l,i,t),Be(l,2),Ii(l));break}}i=i.return}}function eh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Uy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Xf=!0,f.add(s),t=Fy.bind(null,t,i,s),i.then(t,t))}function Fy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Zt===t&&(Tt&s)===s&&(nn===4||nn===3&&(Tt&62914560)===Tt&&300>ct()-Yf?(Bt&2)===0&&mr(t,0):Wf|=s,hr===Tt&&(hr=0)),Ii(t)}function _0(t,i){i===0&&(i=Le()),t=Qs(t,i),t!==null&&(Be(t,i),Ii(t))}function zy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),_0(t,s)}function Hy(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),_0(t,s)}function Gy(t,i){return lt(t,i)}var mc=null,_r=null,th=!1,gc=!1,nh=!1,Cs=0;function Ii(t){t!==_r&&t.next===null&&(_r===null?mc=_r=t:_r=_r.next=t),gc=!0,th||(th=!0,ky())}function Fo(t,i){if(!nh&&gc){nh=!0;do for(var s=!1,l=mc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Pe(42|t)+1)-1,m&=f&~(M&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,S0(l,m))}else m=Tt,m=qe(l,l===Zt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ce(l,m)||(s=!0,S0(l,m));l=l.next}while(s);nh=!1}}function Vy(){v0()}function v0(){gc=th=!1;var t=0;Cs!==0&&(Qy()&&(t=Cs),Cs=0);for(var i=ct(),s=null,l=mc;l!==null;){var f=l.next,m=x0(l,i);m===0?(l.next=null,s===null?mc=f:s.next=f,f===null&&(_r=s)):(s=l,(t!==0||(m&3)!==0)&&(gc=!0)),l=f}Fo(t)}function x0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var M=31-Pe(m),A=1<<M,I=f[M];I===-1?((A&s)===0||(A&l)!==0)&&(f[M]=at(A,i)):I<=i&&(t.expiredLanes|=A),m&=~A}if(i=Zt,s=Tt,s=qe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&H(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ce(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&H(l),It(s)){case 2:case 8:s=Ke;break;case 32:s=st;break;case 268435456:s=O;break;default:s=st}return l=y0.bind(null,t),s=lt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&H(l),t.callbackPriority=2,t.callbackNode=null,2}function y0(t,i){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(pc()&&t.callbackNode!==s)return null;var l=Tt;return l=qe(t,t===Zt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(n0(t,l,i),x0(t,ct()),t.callbackNode!=null&&t.callbackNode===s?y0.bind(null,t):null)}function S0(t,i){if(pc())return null;n0(t,i,!0)}function ky(){$y(function(){(Bt&6)!==0?lt(St,Vy):v0()})}function ih(){return Cs===0&&(Cs=k()),Cs}function M0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rl(""+t)}function b0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Xy(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=M0((f[An]||null).action),M=l.submitter;M&&(i=(i=M[An]||null)?M0(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var A=new Nl("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Cs!==0){var I=M?b0(f,M):new FormData(f);bf(s,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(A.preventDefault(),I=M?b0(f,M):new FormData(f),bf(s,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var ah=0;ah<Gu.length;ah++){var sh=Gu[ah],Wy=sh.toLowerCase(),jy=sh[0].toUpperCase()+sh.slice(1);yi(Wy,"on"+jy)}yi(nm,"onAnimationEnd"),yi(im,"onAnimationIteration"),yi(am,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(cy,"onTransitionRun"),yi(uy,"onTransitionStart"),yi(fy,"onTransitionCancel"),yi(sm,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function E0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var A=l[M],I=A.instance,te=A.currentTarget;if(A=A.listener,I!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=te;try{m(f)}catch(fe){ic(fe)}f.currentTarget=null,m=I}else for(M=0;M<l.length;M++){if(A=l[M],I=A.instance,te=A.currentTarget,A=A.listener,I!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=te;try{m(f)}catch(fe){ic(fe)}f.currentTarget=null,m=I}}}}function xt(t,i){var s=i[fs];s===void 0&&(s=i[fs]=new Set);var l=t+"__bubble";s.has(l)||(T0(i,t,2,!1),s.add(l))}function rh(t,i,s){var l=0;i&&(l|=4),T0(s,t,l,i)}var _c="_reactListening"+Math.random().toString(36).slice(2);function oh(t){if(!t[_c]){t[_c]=!0,Tl.forEach(function(s){s!=="selectionchange"&&(Yy.has(s)||rh(s,!1,t),rh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[_c]||(i[_c]=!0,rh("selectionchange",!1,i))}}function T0(t,i,s,l){switch(K0(i)){case 2:var f=yS;break;case 8:f=SS;break;default:f=Sh}s=f.bind(null,i,s,t),f=void 0,!wu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function lh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===f)break;if(M===4)for(M=l.return;M!==null;){var I=M.tag;if((I===3||I===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;A!==null;){if(M=Yi(A),M===null)return;if(I=M.tag,I===5||I===6||I===26||I===27){l=m=M;continue e}A=A.parentNode}}l=l.return}Lp(function(){var te=m,fe=Au(s),xe=[];e:{var ie=rm.get(t);if(ie!==void 0){var se=Nl,nt=t;switch(t){case"keypress":if(Cl(s)===0)break e;case"keydown":case"keyup":se=Gx;break;case"focusin":nt="focus",se=Lu;break;case"focusout":nt="blur",se=Lu;break;case"beforeblur":case"afterblur":se=Lu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Xx;break;case nm:case im:case am:se=Lx;break;case sm:se=jx;break;case"scroll":case"scrollend":se=Rx;break;case"wheel":se=qx;break;case"copy":case"cut":case"paste":se=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Bp;break;case"toggle":case"beforetoggle":se=Zx}var $e=(i&4)!==0,kt=!$e&&(t==="scroll"||t==="scrollend"),q=$e?ie!==null?ie+"Capture":null:ie;$e=[];for(var V=te,ee;V!==null;){var me=V;if(ee=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||ee===null||q===null||(me=io(V,q),me!=null&&$e.push(Ho(V,me,ee))),kt)break;V=V.return}0<$e.length&&(ie=new se(ie,nt,null,s,fe),xe.push({event:ie,listeners:$e}))}}if((i&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",ie&&s!==Tu&&(nt=s.relatedTarget||s.fromElement)&&(Yi(nt)||nt[Wn]))break e;if((se||ie)&&(ie=fe.window===fe?fe:(ie=fe.ownerDocument)?ie.defaultView||ie.parentWindow:window,se?(nt=s.relatedTarget||s.toElement,se=te,nt=nt?Yi(nt):null,nt!==null&&(kt=c(nt),$e=nt.tag,nt!==kt||$e!==5&&$e!==27&&$e!==6)&&(nt=null)):(se=null,nt=te),se!==nt)){if($e=Pp,me="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($e=Bp,me="onPointerLeave",q="onPointerEnter",V="pointer"),kt=se==null?ie:ds(se),ee=nt==null?ie:ds(nt),ie=new $e(me,V+"leave",se,s,fe),ie.target=kt,ie.relatedTarget=ee,me=null,Yi(fe)===te&&($e=new $e(q,V+"enter",nt,s,fe),$e.target=ee,$e.relatedTarget=kt,me=$e),kt=me,se&&nt)t:{for($e=se,q=nt,V=0,ee=$e;ee;ee=vr(ee))V++;for(ee=0,me=q;me;me=vr(me))ee++;for(;0<V-ee;)$e=vr($e),V--;for(;0<ee-V;)q=vr(q),ee--;for(;V--;){if($e===q||q!==null&&$e===q.alternate)break t;$e=vr($e),q=vr(q)}$e=null}else $e=null;se!==null&&A0(xe,ie,se,$e,!1),nt!==null&&kt!==null&&A0(xe,kt,nt,$e,!0)}}e:{if(ie=te?ds(te):window,se=ie.nodeName&&ie.nodeName.toLowerCase(),se==="select"||se==="input"&&ie.type==="file")var He=Wp;else if(kp(ie))if(jp)He=ry;else{He=ay;var _t=iy}else se=ie.nodeName,!se||se.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?te&&Eu(te.elementType)&&(He=Wp):He=sy;if(He&&(He=He(t,te))){Xp(xe,He,s,fe);break e}_t&&_t(t,ie,te),t==="focusout"&&te&&ie.type==="number"&&te.memoizedProps.value!=null&&Un(ie,"number",ie.value)}switch(_t=te?ds(te):window,t){case"focusin":(kp(_t)||_t.contentEditable==="true")&&(qs=_t,Fu=te,fo=null);break;case"focusout":fo=Fu=qs=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,em(xe,s,fe);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":em(xe,s,fe)}var We;if(Ou)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Ys?Gp(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(Fp&&s.locale!=="ko"&&(Ys||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Ys&&(We=Up()):(Ca=fe,Cu="value"in Ca?Ca.value:Ca.textContent,Ys=!0)),_t=vc(te,tt),0<_t.length&&(tt=new Ip(tt,t,null,s,fe),xe.push({event:tt,listeners:_t}),We?tt.data=We:(We=Vp(s),We!==null&&(tt.data=We)))),(We=Jx?$x(t,s):ey(t,s))&&(tt=vc(te,"onBeforeInput"),0<tt.length&&(_t=new Ip("onBeforeInput","beforeinput",null,s,fe),xe.push({event:_t,listeners:tt}),_t.data=We)),Xy(xe,t,te,s,fe)}E0(xe,i)})}function Ho(t,i,s){return{instance:t,listener:i,currentTarget:s}}function vc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=io(t,s),f!=null&&l.unshift(Ho(t,f,m)),f=io(t,i),f!=null&&l.push(Ho(t,f,m))),t.tag===3)return l;t=t.return}return[]}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function A0(t,i,s,l,f){for(var m=i._reactName,M=[];s!==null&&s!==l;){var A=s,I=A.alternate,te=A.stateNode;if(A=A.tag,I!==null&&I===l)break;A!==5&&A!==26&&A!==27||te===null||(I=te,f?(te=io(s,m),te!=null&&M.unshift(Ho(s,te,I))):f||(te=io(s,m),te!=null&&M.push(Ho(s,te,I)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var qy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function R0(t){return(typeof t=="string"?t:""+t).replace(qy,`
`).replace(Ky,"")}function w0(t,i){return i=R0(i),R0(t)===i}function xc(){}function Vt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ni(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ni(t,""+l);break;case"className":De(t,"class",l);break;case"tabIndex":De(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":De(t,s,l);break;case"style":Dp(t,l,m);break;case"data":if(i!=="object"){De(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Rl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Vt(t,i,"name",f.name,f,null),Vt(t,i,"formEncType",f.formEncType,f,null),Vt(t,i,"formMethod",f.formMethod,f,null),Vt(t,i,"formTarget",f.formTarget,f,null)):(Vt(t,i,"encType",f.encType,f,null),Vt(t,i,"method",f.method,f,null),Vt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Rl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=xc);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Rl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Ae(t,"popover",l);break;case"xlinkActuate":Oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Oe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Oe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Oe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Oe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ae(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Tx.get(s)||s,Ae(t,s,l))}}function ch(t,i,s,l,f,m){switch(s){case"style":Dp(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Ni(t,l):(typeof l=="number"||typeof l=="bigint")&&Ni(t,""+l);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=xc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Al.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[An]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ae(t,s,l)}}}function Dn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Vt(t,i,m,M,s,null)}}f&&Vt(t,i,"srcSet",s.srcSet,s,null),l&&Vt(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var A=m=M=f=null,I=null,te=null;for(l in s)if(s.hasOwnProperty(l)){var fe=s[l];if(fe!=null)switch(l){case"name":f=fe;break;case"type":M=fe;break;case"checked":I=fe;break;case"defaultChecked":te=fe;break;case"value":m=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:Vt(t,i,l,fe,s,null)}}jt(t,m,A,I,te,M,f,!1),en(t);return;case"select":xt("invalid",t),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Vt(t,i,f,A,s,null)}i=m,s=M,t.multiple=!!l,i!=null?dn(t,!!l,i,!1):s!=null&&dn(t,!!l,s,!0);return;case"textarea":xt("invalid",t),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Vt(t,i,M,A,s,null)}Rn(t,l,f,m),en(t);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Vt(t,i,I,l,s,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(l=0;l<zo.length;l++)xt(zo[l],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(l=s[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Vt(t,i,te,l,s,null)}return;default:if(Eu(i)){for(fe in s)s.hasOwnProperty(fe)&&(l=s[fe],l!==void 0&&ch(t,i,fe,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Vt(t,i,A,l,s,null))}function Zy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,A=null,I=null,te=null,fe=null;for(se in s){var xe=s[se];if(s.hasOwnProperty(se)&&xe!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=xe;default:l.hasOwnProperty(se)||Vt(t,i,se,null,l,xe)}}for(var ie in l){var se=l[ie];if(xe=s[ie],l.hasOwnProperty(ie)&&(se!=null||xe!=null))switch(ie){case"type":m=se;break;case"name":f=se;break;case"checked":te=se;break;case"defaultChecked":fe=se;break;case"value":M=se;break;case"defaultValue":A=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(a(137,i));break;default:se!==xe&&Vt(t,i,ie,se,l,xe)}}Zi(t,M,A,I,te,fe,m,f);return;case"select":se=M=A=ie=null;for(m in s)if(I=s[m],s.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":se=I;default:l.hasOwnProperty(m)||Vt(t,i,m,null,l,I)}for(f in l)if(m=l[f],I=s[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":ie=m;break;case"defaultValue":A=m;break;case"multiple":M=m;default:m!==I&&Vt(t,i,f,m,l,I)}i=A,s=M,l=se,ie!=null?dn(t,!!s,ie,!1):!!l!=!!s&&(i!=null?dn(t,!!s,i,!0):dn(t,!!s,s?[]:"",!1));return;case"textarea":se=ie=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(t,i,A,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":ie=f;break;case"defaultValue":se=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Vt(t,i,M,f,l,m)}yn(t,ie,se);return;case"option":for(var nt in s)if(ie=s[nt],s.hasOwnProperty(nt)&&ie!=null&&!l.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:Vt(t,i,nt,null,l,ie)}for(I in l)if(ie=l[I],se=s[I],l.hasOwnProperty(I)&&ie!==se&&(ie!=null||se!=null))switch(I){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Vt(t,i,I,ie,l,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in s)ie=s[$e],s.hasOwnProperty($e)&&ie!=null&&!l.hasOwnProperty($e)&&Vt(t,i,$e,null,l,ie);for(te in l)if(ie=l[te],se=s[te],l.hasOwnProperty(te)&&ie!==se&&(ie!=null||se!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,i));break;default:Vt(t,i,te,ie,l,se)}return;default:if(Eu(i)){for(var kt in s)ie=s[kt],s.hasOwnProperty(kt)&&ie!==void 0&&!l.hasOwnProperty(kt)&&ch(t,i,kt,void 0,l,ie);for(fe in l)ie=l[fe],se=s[fe],!l.hasOwnProperty(fe)||ie===se||ie===void 0&&se===void 0||ch(t,i,fe,ie,l,se);return}}for(var q in s)ie=s[q],s.hasOwnProperty(q)&&ie!=null&&!l.hasOwnProperty(q)&&Vt(t,i,q,null,l,ie);for(xe in l)ie=l[xe],se=s[xe],!l.hasOwnProperty(xe)||ie===se||ie==null&&se==null||Vt(t,i,xe,ie,l,se)}var uh=null,fh=null;function yc(t){return t.nodeType===9?t:t.ownerDocument}function C0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function hh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dh=null;function Qy(){var t=window.event;return t&&t.type==="popstate"?t===dh?!1:(dh=t,!0):(dh=null,!1)}var N0=typeof setTimeout=="function"?setTimeout:void 0,Jy=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(eS)}:N0;function eS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function U0(t,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var M=t.ownerDocument;if(s&1&&Go(M.documentElement),s&2&&Go(M.body),s&4)for(s=M.head,Go(s),M=s.firstChild;M;){var A=M.nextSibling,I=M.nodeName;M[Ta]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(f===0){t.removeChild(m),Ko(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);Ko(i)}function ph(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ph(s),Aa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function tS(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ta])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function nS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Mi(t.nextSibling),t===null))return null;return t}function mh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function iS(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Mi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var gh=null;function O0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function P0(t,i,s){switch(i=yc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Go(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Aa(t)}var gi=new Map,I0=new Set;function Sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=J.d;J.d={f:aS,r:sS,D:rS,C:oS,L:lS,m:cS,X:fS,S:uS,M:hS};function aS(){var t=fa.f(),i=hc();return t||i}function sS(t){var i=qi(t);i!==null&&i.tag===5&&i.type==="form"?ng(i):fa.r(t)}var xr=typeof document>"u"?null:document;function B0(t,i,s){var l=xr;if(l&&typeof i=="string"&&i){var f=Kt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),I0.has(f)||(I0.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Dn(i,"link",t),ln(i),l.head.appendChild(i)))}}function rS(t){fa.D(t),B0("dns-prefetch",t,null)}function oS(t,i){fa.C(t,i),B0("preconnect",t,i)}function lS(t,i,s){fa.L(t,i,s);var l=xr;if(l&&t&&i){var f='link[rel="preload"][as="'+Kt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Kt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Kt(s.imageSizes)+'"]')):f+='[href="'+Kt(t)+'"]';var m=f;switch(i){case"style":m=yr(t);break;case"script":m=Sr(t)}gi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),gi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Vo(m))||i==="script"&&l.querySelector(ko(m))||(i=l.createElement("link"),Dn(i,"link",t),ln(i),l.head.appendChild(i)))}}function cS(t,i){fa.m(t,i);var s=xr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Kt(l)+'"][href="'+Kt(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Sr(t)}if(!gi.has(m)&&(t=g({rel:"modulepreload",href:t},i),gi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ko(m)))return}l=s.createElement("link"),Dn(l,"link",t),ln(l),s.head.appendChild(l)}}}function uS(t,i,s){fa.S(t,i,s);var l=xr;if(l&&t){var f=Ra(l).hoistableStyles,m=yr(t);i=i||"default";var M=f.get(m);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(Vo(m)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=gi.get(m))&&_h(t,s);var I=M=l.createElement("link");ln(I),Dn(I,"link",t),I._p=new Promise(function(te,fe){I.onload=te,I.onerror=fe}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Mc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:A},f.set(m,M)}}}function fS(t,i){fa.X(t,i);var s=xr;if(s&&t){var l=Ra(s).hoistableScripts,f=Sr(t),m=l.get(f);m||(m=s.querySelector(ko(f)),m||(t=g({src:t,async:!0},i),(i=gi.get(f))&&vh(t,i),m=s.createElement("script"),ln(m),Dn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function hS(t,i){fa.M(t,i);var s=xr;if(s&&t){var l=Ra(s).hoistableScripts,f=Sr(t),m=l.get(f);m||(m=s.querySelector(ko(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=gi.get(f))&&vh(t,i),m=s.createElement("script"),ln(m),Dn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function F0(t,i,s,l){var f=(f=Se.current)?Sc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=yr(s.href),s=Ra(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=yr(s.href);var m=Ra(f).hoistableStyles,M=m.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,M),(m=f.querySelector(Vo(t)))&&!m._p&&(M.instance=m,M.state.loading=5),gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},gi.set(t,s),m||dS(f,t,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Sr(s),s=Ra(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function yr(t){return'href="'+Kt(t)+'"'}function Vo(t){return'link[rel="stylesheet"]['+t+"]"}function z0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function dS(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Dn(i,"link",s),ln(i),t.head.appendChild(i))}function Sr(t){return'[src="'+Kt(t)+'"]'}function ko(t){return"script[async]"+t}function H0(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Kt(s.href)+'"]');if(l)return i.instance=l,ln(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ln(l),Dn(l,"style",f),Mc(l,s.precedence,t),i.instance=l;case"stylesheet":f=yr(s.href);var m=t.querySelector(Vo(f));if(m)return i.state.loading|=4,i.instance=m,ln(m),m;l=z0(s),(f=gi.get(f))&&_h(l,f),m=(t.ownerDocument||t).createElement("link"),ln(m);var M=m;return M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),Dn(m,"link",l),i.state.loading|=4,Mc(m,s.precedence,t),i.instance=m;case"script":return m=Sr(s.src),(f=t.querySelector(ko(m)))?(i.instance=f,ln(f),f):(l=s,(f=gi.get(m))&&(l=g({},s),vh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),ln(f),Dn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Mc(l,s.precedence,t));return i.instance}function Mc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===i)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function _h(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function vh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var bc=null;function G0(t,i,s){if(bc===null){var l=new Map,f=bc=new Map;f.set(s,l)}else f=bc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Ta]||m[hn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=t+M;var A=l.get(M);A?A.push(m):l.set(M,[m])}}return l}function V0(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function pS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function k0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Xo=null;function mS(){}function gS(t,i,s){if(Xo===null)throw Error(a(475));var l=Xo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=yr(s.href),m=t.querySelector(Vo(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Ec.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,ln(m);return}m=t.ownerDocument||t,s=z0(s),(f=gi.get(f))&&_h(s,f),m=m.createElement("link"),ln(m);var M=m;M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),Dn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Ec.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function _S(){if(Xo===null)throw Error(a(475));var t=Xo;return t.stylesheets&&t.count===0&&xh(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&xh(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Ec(){if(this.count--,this.count===0){if(this.stylesheets)xh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Tc=null;function xh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Tc=new Map,i.forEach(vS,t),Tc=null,Ec.call(t))}function vS(t,i){if(!(i.state.loading&4)){var s=Tc.get(t);if(s)var l=s.get(null);else{s=new Map,Tc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=Ec.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Wo={$$typeof:D,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function xS(t,i,s,l,f,m,M,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function X0(t,i,s,l,f,m,M,A,I,te,fe,xe){return t=new xS(t,i,s,M,A,I,te,xe),i=1,m===!0&&(i|=24),m=ei(3,null,null,i),t.current=m,m.stateNode=t,i=$u(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},af(m),t}function W0(t){return t?(t=Js,t):Js}function j0(t,i,s,l,f,m){f=W0(f),l.context===null?l.context=f:l.pendingContext=f,l=La(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ua(t,l,i),s!==null&&(si(s,t,i),So(s,t,i))}function Y0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function yh(t,i){Y0(t,i),(t=t.alternate)&&Y0(t,i)}function q0(t){if(t.tag===13){var i=Qs(t,67108864);i!==null&&si(i,t,67108864),yh(t,67108864)}}var Ac=!0;function yS(t,i,s,l){var f=B.T;B.T=null;var m=J.p;try{J.p=2,Sh(t,i,s,l)}finally{J.p=m,B.T=f}}function SS(t,i,s,l){var f=B.T;B.T=null;var m=J.p;try{J.p=8,Sh(t,i,s,l)}finally{J.p=m,B.T=f}}function Sh(t,i,s,l){if(Ac){var f=Mh(l);if(f===null)lh(t,i,l,Rc,s),Z0(t,l);else if(bS(f,t,i,s,l))l.stopPropagation();else if(Z0(t,l),i&4&&-1<MS.indexOf(t)){for(;f!==null;){var m=qi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Ye(m.pendingLanes);if(M!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var I=1<<31-Pe(M);A.entanglements[1]|=I,M&=~I}Ii(m),(Bt&6)===0&&(uc=ct()+500,Fo(0))}}break;case 13:A=Qs(m,2),A!==null&&si(A,m,2),hc(),yh(m,2)}if(m=Mh(l),m===null&&lh(t,i,l,Rc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else lh(t,i,l,null,s)}}function Mh(t){return t=Au(t),bh(t)}var Rc=null;function bh(t){if(Rc=null,t=Yi(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Rc=t,null}function K0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case St:return 2;case Ke:return 8;case st:case sn:return 32;case O:return 268435456;default:return 32}default:return 32}}var Eh=!1,ja=null,Ya=null,qa=null,jo=new Map,Yo=new Map,Ka=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(t,i){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(i.pointerId)}}function qo(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=qi(i),i!==null&&q0(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function bS(t,i,s,l,f){switch(i){case"focusin":return ja=qo(ja,t,i,s,l,f),!0;case"dragenter":return Ya=qo(Ya,t,i,s,l,f),!0;case"mouseover":return qa=qo(qa,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return jo.set(m,qo(jo.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Yo.set(m,qo(Yo.get(m)||null,t,i,s,l,f)),!0}return!1}function Q0(t){var i=Yi(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Jn(t.priority,function(){if(s.tag===13){var l=ai();l=it(l);var f=Qs(s,l);f!==null&&si(f,s,l),yh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Mh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Tu=l,s.target.dispatchEvent(l),Tu=null}else return i=qi(s),i!==null&&q0(i),t.blockedOn=s,!1;i.shift()}return!0}function J0(t,i,s){wc(t)&&s.delete(i)}function ES(){Eh=!1,ja!==null&&wc(ja)&&(ja=null),Ya!==null&&wc(Ya)&&(Ya=null),qa!==null&&wc(qa)&&(qa=null),jo.forEach(J0),Yo.forEach(J0)}function Cc(t,i){t.blockedOn===i&&(t.blockedOn=null,Eh||(Eh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ES)))}var Dc=null;function $0(t){Dc!==t&&(Dc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Dc===t&&(Dc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(bh(l||s)===null)continue;break}var m=qi(s);m!==null&&(t.splice(i,3),i-=3,bf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Ko(t){function i(I){return Cc(I,t)}ja!==null&&Cc(ja,t),Ya!==null&&Cc(Ya,t),qa!==null&&Cc(qa,t),jo.forEach(i),Yo.forEach(i);for(var s=0;s<Ka.length;s++){var l=Ka[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ka.length&&(s=Ka[0],s.blockedOn===null);)Q0(s),s.blockedOn===null&&Ka.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[An]||null;if(typeof m=="function")M||$0(s);else if(M){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[An]||null)A=M.formAction;else if(bh(f)!==null)continue}else A=M.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),$0(s)}}}function Th(t){this._internalRoot=t}Nc.prototype.render=Th.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ai();j0(s,l,t,i,null,null)},Nc.prototype.unmount=Th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;j0(t.current,2,null,t,null,null),hc(),i[Wn]=null}};function Nc(t){this._internalRoot=t}Nc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ct();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Ka.length&&i!==0&&i<Ka[s].priority;s++);Ka.splice(s,0,t),s===0&&Q0(t)}};var e_=e.version;if(e_!=="19.1.0")throw Error(a(527,e_,"19.1.0"));J.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var TS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{de=Lc.inject(TS),ge=Lc}catch{}}return Qo.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,l="",f=gg,m=_g,M=vg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=X0(t,1,!1,null,null,s,l,f,m,M,A,null),t[Wn]=i.current,oh(t),new Th(i)},Qo.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var l=!1,f="",m=gg,M=_g,A=vg,I=null,te=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&(te=s.formState)),i=X0(t,1,!0,i,s??null,l,f,m,M,A,I,te),i.context=W0(null),s=i.current,l=ai(),l=it(l),f=La(l),f.callback=null,Ua(s,f,l),s=l,i.current.lanes=s,Be(i,s),Ii(i),t[Wn]=i.current,oh(t),new Nc(i)},Qo.version="19.1.0",Qo}var u_;function PS(){if(u_)return wh.exports;u_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),wh.exports=OS(),wh.exports}var IS=PS();const BS=Bv(IS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="177",zr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FS=0,f_=1,zS=2,Fv=1,HS=2,va=3,Ea=0,Qn=1,Fi=2,ls=0,Hr=1,h_=2,d_=3,p_=4,GS=5,Fs=100,VS=101,kS=102,XS=103,WS=104,jS=200,YS=201,qS=202,KS=203,_d=204,vd=205,ZS=206,QS=207,JS=208,$S=209,eM=210,tM=211,nM=212,iM=213,aM=214,xd=0,yd=1,Sd=2,Xr=3,Md=4,bd=5,Ed=6,Td=7,zv=0,sM=1,rM=2,cs=0,oM=1,lM=2,cM=3,uM=4,fM=5,hM=6,dM=7,m_="attached",pM="detached",Hv=300,Wr=301,jr=302,Ad=303,Rd=304,yu=306,Yr=1e3,rs=1001,pu=1002,Vn=1003,Gv=1004,ol=1005,li=1006,ou=1007,ya=1008,Hi=1009,Vv=1010,kv=1011,hl=1012,cp=1013,Vs=1014,wi=1015,xl=1016,up=1017,fp=1018,dl=1020,Xv=35902,Wv=1021,jv=1022,xi=1023,pl=1026,ml=1027,hp=1028,dp=1029,Yv=1030,pp=1031,mp=1033,lu=33776,cu=33777,uu=33778,fu=33779,wd=35840,Cd=35841,Dd=35842,Nd=35843,Ld=36196,Ud=37492,Od=37496,Pd=37808,Id=37809,Bd=37810,Fd=37811,zd=37812,Hd=37813,Gd=37814,Vd=37815,kd=37816,Xd=37817,Wd=37818,jd=37819,Yd=37820,qd=37821,hu=36492,Kd=36494,Zd=36495,qv=36283,Qd=36284,Jd=36285,$d=36286,gl=2300,_l=2301,Lh=2302,g_=2400,__=2401,v_=2402,mM=2500,gM=0,Kv=1,ep=2,_M=3200,vM=3201,Zv=0,xM=1,ss="",Nn="srgb",Xn="srgb-linear",mu="linear",Xt="srgb",Mr=7680,x_=519,yM=512,SM=513,MM=514,Qv=515,bM=516,EM=517,TM=518,AM=519,tp=35044,y_="300 es",Sa=2e3,gu=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let S_=1234567;const cl=Math.PI/180,qr=180/Math.PI;function Ci(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function gp(o,e){return(o%e+e)%e}function RM(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function wM(o,e,n){return o!==e?(n-o)/(e-o):0}function ul(o,e,n){return(1-n)*o+n*e}function CM(o,e,n,a){return ul(o,e,1-Math.exp(-n*a))}function DM(o,e=1){return e-Math.abs(gp(o,e*2)-e)}function NM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function LM(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function UM(o,e){return o+Math.floor(Math.random()*(e-o+1))}function OM(o,e){return o+Math.random()*(e-o)}function PM(o){return o*(.5-Math.random())}function IM(o){o!==void 0&&(S_=o);let e=S_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BM(o){return o*cl}function FM(o){return o*qr}function zM(o){return(o&o-1)===0&&o!==0}function HM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function GM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function VM(o,e,n,a,r){const c=Math.cos,u=Math.sin,h=c(n/2),d=u(n/2),p=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),y=c((a-e)/2),b=u((a-e)/2);switch(r){case"XYX":o.set(h*g,d*_,d*v,h*p);break;case"YZY":o.set(d*v,h*g,d*_,h*p);break;case"ZXZ":o.set(d*_,d*v,h*g,h*p);break;case"XZX":o.set(h*g,d*b,d*y,h*p);break;case"YXY":o.set(d*y,h*g,d*b,h*p);break;case"ZYZ":o.set(d*b,d*y,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ai(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Jv={DEG2RAD:cl,RAD2DEG:qr,generateUUID:Ci,clamp:gt,euclideanModulo:gp,mapLinear:RM,inverseLerp:wM,lerp:ul,damp:CM,pingpong:DM,smoothstep:NM,smootherstep:LM,randInt:UM,randFloat:OM,randFloatSpread:PM,seededRandom:IM,degToRad:BM,radToDeg:FM,isPowerOfTwo:zM,ceilPowerOfTwo:HM,floorPowerOfTwo:GM,setQuaternionFromProperEuler:VM,normalize:zt,denormalize:Ai};class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*r+e.x,this.y=c*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gi{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,c,u,h){let d=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];const v=c[u+0],y=c[u+1],b=c[u+2],E=c[u+3];if(h===0){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h===1){e[n+0]=v,e[n+1]=y,e[n+2]=b,e[n+3]=E;return}if(_!==E||d!==v||p!==y||g!==b){let S=1-h;const x=d*v+p*y+g*b+_*E,U=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const F=Math.sqrt(D),G=Math.atan2(F,x*U);S=Math.sin(S*G)/F,h=Math.sin(h*G)/F}const C=h*U;if(d=d*S+v*C,p=p*S+y*C,g=g*S+b*C,_=_*S+E*C,S===1-h){const F=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=F,p*=F,g*=F,_*=F}}e[n]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,r,c,u){const h=a[r],d=a[r+1],p=a[r+2],g=a[r+3],_=c[u],v=c[u+1],y=c[u+2],b=c[u+3];return e[n]=h*b+g*_+d*y-p*v,e[n+1]=d*b+g*v+p*_-h*y,e[n+2]=p*b+g*y+h*v-d*_,e[n+3]=g*b-h*_-d*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,c=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(a/2),g=h(r/2),_=h(c/2),v=d(a/2),y=d(r/2),b=d(c/2);switch(u){case"XYZ":this._x=v*g*_+p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_-v*y*b;break;case"YXZ":this._x=v*g*_+p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_+v*y*b;break;case"ZXY":this._x=v*g*_-p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_-v*y*b;break;case"ZYX":this._x=v*g*_-p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_+v*y*b;break;case"YZX":this._x=v*g*_+p*y*b,this._y=p*y*_+v*g*b,this._z=p*g*b-v*y*_,this._w=p*g*_-v*y*b;break;case"XZY":this._x=v*g*_-p*y*b,this._y=p*y*_-v*g*b,this._z=p*g*b+v*y*_,this._w=p*g*_+v*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],c=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-d)*y,this._y=(c-p)*y,this._z=(u-r)*y}else if(a>h&&a>_){const y=2*Math.sqrt(1+a-h-_);this._w=(g-d)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-a-_);this._w=(c-p)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+_-a-h);this._w=(u-r)/y,this._x=(c+p)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,c=e._z,u=e._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+r*p-c*d,this._y=r*g+u*d+c*h-a*p,this._z=c*g+u*p+a*d-r*h,this._w=u*g-a*h-r*d-c*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,r=this._y,c=this._z,u=this._w;let h=u*e._w+a*e._x+r*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=a,this._y=r,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const y=1-n;return this._w=y*u+n*this._w,this._x=y*a+n*this._x,this._y=y*r+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=r*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,a=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(M_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(M_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,c=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*r-h*a),g=2*(h*n-c*r),_=2*(c*a-u*n);return this.x=n+d*p+u*_-h*g,this.y=a+d*g+h*p-c*_,this.z=r+d*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,c=e.z,u=n.x,h=n.y,d=n.z;return this.x=r*d-c*h,this.y=c*u-a*d,this.z=a*h-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new j,M_=new Gi;class ft{constructor(e,n,a,r,c,u,h,d,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,d,p)}set(e,n,a,r,c,u,h,d,p){const g=this.elements;return g[0]=e,g[1]=r,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[3],d=a[6],p=a[1],g=a[4],_=a[7],v=a[2],y=a[5],b=a[8],E=r[0],S=r[3],x=r[6],U=r[1],D=r[4],C=r[7],F=r[2],G=r[5],P=r[8];return c[0]=u*E+h*U+d*F,c[3]=u*S+h*D+d*G,c[6]=u*x+h*C+d*P,c[1]=p*E+g*U+_*F,c[4]=p*S+g*D+_*G,c[7]=p*x+g*C+_*P,c[2]=v*E+y*U+b*F,c[5]=v*S+y*D+b*G,c[8]=v*x+y*C+b*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return n*u*g-n*h*p-a*c*g+a*h*d+r*c*p-r*u*d}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=g*u-h*p,v=h*d-g*c,y=p*c-u*d,b=n*_+a*v+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=_*E,e[1]=(r*p-g*a)*E,e[2]=(h*a-r*u)*E,e[3]=v*E,e[4]=(g*n-r*d)*E,e[5]=(r*c-h*n)*E,e[6]=y*E,e[7]=(a*d-p*n)*E,e[8]=(u*n-a*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(a*d,a*p,-a*(d*u+p*h)+u+e,-r*p,r*d,-r*(-p*u+d*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Oh.makeScale(e,n)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new ft;function $v(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function vl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function kM(){const o=vl("canvas");return o.style.display="block",o}const b_={};function Gr(o){o in b_||(b_[o]=!0,console.warn(o))}function XM(o,e,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function WM(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jM(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const E_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YM(){const o={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xt&&(r.r=Ma(r.r),r.g=Ma(r.g),r.b=Ma(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xt&&(r.r=Vr(r.r),r.g=Vr(r.g),r.b=Vr(r.b))),r},workingToColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},colorSpaceToWorking:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ss?mu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,c){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,c)},toWorkingColorSpace:function(r,c){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Xn]:{primaries:e,whitePoint:a,transfer:mu,toXYZ:E_,fromXYZ:T_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:a,transfer:Xt,toXYZ:E_,fromXYZ:T_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),o}const At=YM();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Vr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let br;class qM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{br===void 0&&(br=vl("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=br}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=Ma(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ma(n[a]/255)*255):n[a]=Ma(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KM=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?c.push(Ph(r[u].image)):c.push(Ph(r[u]))}else c=Ph(r);a.url=c}return n||(e.images[this.uuid]=a),a}}function Ph(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?qM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZM=0;const Ih=new j;class Tn extends Xs{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,a=rs,r=rs,c=li,u=ya,h=xi,d=Hi,p=Tn.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Ci(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case pu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case pu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Hv;Tn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,a=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,c;const d=e.elements,p=d[0],g=d[4],_=d[8],v=d[1],y=d[5],b=d[9],E=d[2],S=d[6],x=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-E)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+E)<.1&&Math.abs(b+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,C=(y+1)/2,F=(x+1)/2,G=(g+v)/4,P=(_+E)/4,X=(b+S)/4;return D>C&&D>F?D<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(D),r=G/a,c=P/a):C>F?C<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(C),a=G/r,c=X/r):F<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(F),a=P/c,r=X/c),this.set(a,r,c,n),this}let U=Math.sqrt((S-b)*(S-b)+(_-E)*(_-E)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(S-b)/U,this.y=(_-E)/U,this.z=(v-g)/U,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QM extends Xs{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:a.depth},c=new Tn(r);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _p(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ks extends QM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class ex extends Tn{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JM extends Tn{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,bi):bi.fromBufferAttribute(c,u),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Uc.copy(a.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const r=e.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Oc.subVectors(this.max,Jo),Er.subVectors(e.a,Jo),Tr.subVectors(e.b,Jo),Ar.subVectors(e.c,Jo),Qa.subVectors(Tr,Er),Ja.subVectors(Ar,Tr),Ds.subVectors(Er,Ar);let n=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Ds.z,Ds.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Ds.z,0,-Ds.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Ds.y,Ds.x,0];return!Bh(n,Er,Tr,Ar,Oc)||(n=[1,0,0,0,1,0,0,0,1],!Bh(n,Er,Tr,Ar,Oc))?!1:(Pc.crossVectors(Qa,Ja),n=[Pc.x,Pc.y,Pc.z],Bh(n,Er,Tr,Ar,Oc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new j,new j,new j,new j,new j,new j,new j,new j],bi=new j,Uc=new ki,Er=new j,Tr=new j,Ar=new j,Qa=new j,Ja=new j,Ds=new j,Jo=new j,Oc=new j,Pc=new j,Ns=new j;function Bh(o,e,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){Ns.fromArray(o,c);const h=r.x*Math.abs(Ns.x)+r.y*Math.abs(Ns.y)+r.z*Math.abs(Ns.z),d=e.dot(Ns),p=n.dot(Ns),g=a.dot(Ns);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const $M=new ki,$o=new j,Fh=new j;class Xi{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):$M.setFromPoints(e).getCenter(a);let r=0;for(let c=0,u=e.length;c<u;c++)r=Math.max(r,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const n=$o.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector($o,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(Fh)),this.expandByPoint($o.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const da=new j,zh=new j,Ic=new j,$a=new j,Hh=new j,Bc=new j,Gh=new j;class yl{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,n),da.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){zh.copy(e).add(n).multiplyScalar(.5),Ic.copy(n).sub(e).normalize(),$a.copy(this.origin).sub(zh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Ic),h=$a.dot(this.direction),d=-$a.dot(Ic),p=$a.lengthSq(),g=Math.abs(1-u*u);let _,v,y,b;if(g>0)if(_=u*d-h,v=u*h-d,b=c*g,_>=0)if(v>=-b)if(v<=b){const E=1/g;_*=E,v*=E,y=_*(_+u*v+2*h)+v*(u*_+v+2*d)+p}else v=c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*d)+p;else v=-c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*d)+p;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-d),c),y=-_*_+v*(v+2*d)+p):v<=b?(_=0,v=Math.min(Math.max(-c,-d),c),y=v*(v+2*d)+p):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-d),c),y=-_*_+v*(v+2*d)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(zh).addScaledVector(Ic,v),y}intersectSphere(e,n){da.subVectors(e.center,this.origin);const a=da.dot(this.direction),r=da.dot(da)-a*a,c=e.radius*e.radius;if(r>c)return null;const u=Math.sqrt(c-r),h=a-u,d=a+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(e.min.x-v.x)*p,r=(e.max.x-v.x)*p):(a=(e.max.x-v.x)*p,r=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),_>=0?(h=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),a>d||h>r)||((h>a||a!==a)&&(a=h),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,n,a,r,c){Hh.subVectors(n,e),Bc.subVectors(a,e),Gh.crossVectors(Hh,Bc);let u=this.direction.dot(Gh),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;$a.subVectors(this.origin,e);const d=h*this.direction.dot(Bc.crossVectors($a,Bc));if(d<0)return null;const p=h*this.direction.dot(Hh.cross($a));if(p<0||d+p>u)return null;const g=-h*$a.dot(Gh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,a,r,c,u,h,d,p,g,_,v,y,b,E,S){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,d,p,g,_,v,y,b,E,S)}set(e,n,a,r,c,u,h,d,p,g,_,v,y,b,E,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=r,x[1]=c,x[5]=u,x[9]=h,x[13]=d,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=b,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),c=1/Rr.setFromMatrixColumn(e,1).length(),u=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),d=Math.cos(r),p=Math.sin(r),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,y=u*_,b=h*g,E=h*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=y+b*p,n[5]=v-E*p,n[9]=-h*d,n[2]=E-v*p,n[6]=b+y*p,n[10]=u*d}else if(e.order==="YXZ"){const v=d*g,y=d*_,b=p*g,E=p*_;n[0]=v+E*h,n[4]=b*h-y,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=y*h-b,n[6]=E+v*h,n[10]=u*d}else if(e.order==="ZXY"){const v=d*g,y=d*_,b=p*g,E=p*_;n[0]=v-E*h,n[4]=-u*_,n[8]=b+y*h,n[1]=y+b*h,n[5]=u*g,n[9]=E-v*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(e.order==="ZYX"){const v=u*g,y=u*_,b=h*g,E=h*_;n[0]=d*g,n[4]=b*p-y,n[8]=v*p+E,n[1]=d*_,n[5]=E*p+v,n[9]=y*p-b,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(e.order==="YZX"){const v=u*d,y=u*p,b=h*d,E=h*p;n[0]=d*g,n[4]=E-v*_,n[8]=b*_+y,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=y*_+b,n[10]=v-E*_}else if(e.order==="XZY"){const v=u*d,y=u*p,b=h*d,E=h*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+E,n[5]=u*g,n[9]=y*_-b,n[2]=b*_-y,n[6]=h*g,n[10]=E*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eb,e,tb)}lookAt(e,n,a){const r=this.elements;return ri.subVectors(e,n),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(a,ri),es.lengthSq()===0&&(Math.abs(a.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(a,ri)),es.normalize(),Fc.crossVectors(ri,es),r[0]=es.x,r[4]=Fc.x,r[8]=ri.x,r[1]=es.y,r[5]=Fc.y,r[9]=ri.y,r[2]=es.z,r[6]=Fc.z,r[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[4],d=a[8],p=a[12],g=a[1],_=a[5],v=a[9],y=a[13],b=a[2],E=a[6],S=a[10],x=a[14],U=a[3],D=a[7],C=a[11],F=a[15],G=r[0],P=r[4],X=r[8],N=r[12],R=r[1],z=r[5],le=r[9],ae=r[13],_e=r[2],he=r[6],B=r[10],J=r[14],K=r[3],be=r[7],L=r[11],Y=r[15];return c[0]=u*G+h*R+d*_e+p*K,c[4]=u*P+h*z+d*he+p*be,c[8]=u*X+h*le+d*B+p*L,c[12]=u*N+h*ae+d*J+p*Y,c[1]=g*G+_*R+v*_e+y*K,c[5]=g*P+_*z+v*he+y*be,c[9]=g*X+_*le+v*B+y*L,c[13]=g*N+_*ae+v*J+y*Y,c[2]=b*G+E*R+S*_e+x*K,c[6]=b*P+E*z+S*he+x*be,c[10]=b*X+E*le+S*B+x*L,c[14]=b*N+E*ae+S*J+x*Y,c[3]=U*G+D*R+C*_e+F*K,c[7]=U*P+D*z+C*he+F*be,c[11]=U*X+D*le+C*B+F*L,c[15]=U*N+D*ae+C*J+F*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],c=e[12],u=e[1],h=e[5],d=e[9],p=e[13],g=e[2],_=e[6],v=e[10],y=e[14],b=e[3],E=e[7],S=e[11],x=e[15];return b*(+c*d*_-r*p*_-c*h*v+a*p*v+r*h*y-a*d*y)+E*(+n*d*y-n*p*v+c*u*v-r*u*y+r*p*g-c*d*g)+S*(+n*p*_-n*h*y-c*u*_+a*u*y+c*h*g-a*p*g)+x*(-r*h*g-n*d*_+n*h*v+r*u*_-a*u*v+a*d*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=e[9],v=e[10],y=e[11],b=e[12],E=e[13],S=e[14],x=e[15],U=_*S*p-E*v*p+E*d*y-h*S*y-_*d*x+h*v*x,D=b*v*p-g*S*p-b*d*y+u*S*y+g*d*x-u*v*x,C=g*E*p-b*_*p+b*h*y-u*E*y-g*h*x+u*_*x,F=b*_*d-g*E*d-b*h*v+u*E*v+g*h*S-u*_*S,G=n*U+a*D+r*C+c*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return e[0]=U*P,e[1]=(E*v*c-_*S*c-E*r*y+a*S*y+_*r*x-a*v*x)*P,e[2]=(h*S*c-E*d*c+E*r*p-a*S*p-h*r*x+a*d*x)*P,e[3]=(_*d*c-h*v*c-_*r*p+a*v*p+h*r*y-a*d*y)*P,e[4]=D*P,e[5]=(g*S*c-b*v*c+b*r*y-n*S*y-g*r*x+n*v*x)*P,e[6]=(b*d*c-u*S*c-b*r*p+n*S*p+u*r*x-n*d*x)*P,e[7]=(u*v*c-g*d*c+g*r*p-n*v*p-u*r*y+n*d*y)*P,e[8]=C*P,e[9]=(b*_*c-g*E*c-b*a*y+n*E*y+g*a*x-n*_*x)*P,e[10]=(u*E*c-b*h*c+b*a*p-n*E*p-u*a*x+n*h*x)*P,e[11]=(g*h*c-u*_*c-g*a*p+n*_*p+u*a*y-n*h*y)*P,e[12]=F*P,e[13]=(g*E*r-b*_*r+b*a*v-n*E*v-g*a*S+n*_*S)*P,e[14]=(b*h*r-u*E*r-b*a*d+n*E*d+u*a*S-n*h*S)*P,e[15]=(u*_*r-g*h*r+g*a*d-n*_*d-u*a*v+n*h*v)*P,this}scale(e){const n=this.elements,a=e.x,r=e.y,c=e.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=e.x,h=e.y,d=e.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-r*d,p*d+r*h,0,p*h+r*d,g*h+a,g*d-r*u,0,p*d-r*h,g*d+r*u,c*d*d+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,c,u){return this.set(1,a,c,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,c=n._x,u=n._y,h=n._z,d=n._w,p=c+c,g=u+u,_=h+h,v=c*p,y=c*g,b=c*_,E=u*g,S=u*_,x=h*_,U=d*p,D=d*g,C=d*_,F=a.x,G=a.y,P=a.z;return r[0]=(1-(E+x))*F,r[1]=(y+C)*F,r[2]=(b-D)*F,r[3]=0,r[4]=(y-C)*G,r[5]=(1-(v+x))*G,r[6]=(S+U)*G,r[7]=0,r[8]=(b+D)*P,r[9]=(S-U)*P,r[10]=(1-(v+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;let c=Rr.set(r[0],r[1],r[2]).length();const u=Rr.set(r[4],r[5],r[6]).length(),h=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),e.x=r[12],e.y=r[13],e.z=r[14],Ei.copy(this);const p=1/c,g=1/u,_=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,n.setFromRotationMatrix(Ei),a.x=c,a.y=u,a.z=h,this}makePerspective(e,n,a,r,c,u,h=Sa){const d=this.elements,p=2*c/(n-e),g=2*c/(a-r),_=(n+e)/(n-e),v=(a+r)/(a-r);let y,b;if(h===Sa)y=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(h===gu)y=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,c,u,h=Sa){const d=this.elements,p=1/(n-e),g=1/(a-r),_=1/(u-c),v=(n+e)*p,y=(a+r)*g;let b,E;if(h===Sa)b=(u+c)*_,E=-2*_;else if(h===gu)b=c*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=E,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Rr=new j,Ei=new ht,eb=new j(0,0,0),tb=new j(1,1,1),es=new j,Fc=new j,ri=new j,A_=new ht,R_=new Gi;class Vi{constructor(e=0,n=0,a=0,r=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,c=r[0],u=r[4],h=r[8],d=r[1],p=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return A_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return R_.setFromEuler(this),this.setFromQuaternion(R_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nb=0;const w_=new j,wr=new Gi,pa=new ht,zc=new j,el=new j,ib=new j,ab=new Gi,C_=new j(1,0,0),D_=new j(0,1,0),N_=new j(0,0,1),L_={type:"added"},sb={type:"removed"},Cr={type:"childadded",child:null},Vh={type:"childremoved",child:null};class $t extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new j,n=new Vi,a=new Gi,r=new j(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new ft}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(C_,e)}rotateY(e){return this.rotateOnAxis(D_,e)}rotateZ(e){return this.rotateOnAxis(N_,e)}translateOnAxis(e,n){return w_.copy(e).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(C_,e)}translateY(e){return this.translateOnAxis(D_,e)}translateZ(e){return this.translateOnAxis(N_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?zc.copy(e):zc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(el,zc,this.up):pa.lookAt(zc,el,this.up),this.quaternion.setFromRotationMatrix(pa),r&&(pa.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(pa),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L_),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sb),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L_),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,e,ib),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];c(e.shapes,_)}else c(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(e.materials,this.material[d]));r.material=h}else r.material=c(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];r.animations.push(c(e.animations,d))}}if(n){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),y=u(e.animations),b=u(e.nodes);h.length>0&&(a.geometries=h),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),b.length>0&&(a.nodes=b)}return a.object=r,a;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}$t.DEFAULT_UP=new j(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new j,ma=new j,kh=new j,ga=new j,Dr=new j,Nr=new j,U_=new j,Xh=new j,Wh=new j,jh=new j,Yh=new Ot,qh=new Ot,Kh=new Ot;class Ri{constructor(e=new j,n=new j,a=new j){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Ti.subVectors(e,n),r.cross(Ti);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(e,n,a,r,c){Ti.subVectors(r,n),ma.subVectors(a,n),kh.subVectors(e,n);const u=Ti.dot(Ti),h=Ti.dot(ma),d=Ti.dot(kh),p=ma.dot(ma),g=ma.dot(kh),_=u*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*d-h*g)*v,b=(u*g-h*d)*v;return c.set(1-y-b,b,y)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,n,a,r,c,u,h,d){return this.getBarycoord(e,n,a,r,ga)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,ga.x),d.addScaledVector(u,ga.y),d.addScaledVector(h,ga.z),d)}static getInterpolatedAttribute(e,n,a,r,c,u){return Yh.setScalar(0),qh.setScalar(0),Kh.setScalar(0),Yh.fromBufferAttribute(e,n),qh.fromBufferAttribute(e,a),Kh.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(Yh,c.x),u.addScaledVector(qh,c.y),u.addScaledVector(Kh,c.z),u}static isFrontFacing(e,n,a,r){return Ti.subVectors(a,n),ma.subVectors(e,n),Ti.cross(ma).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ti.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,c){return Ri.getInterpolation(e,this.a,this.b,this.c,n,a,r,c)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,c=this.c;let u,h;Dr.subVectors(r,a),Nr.subVectors(c,a),Xh.subVectors(e,a);const d=Dr.dot(Xh),p=Nr.dot(Xh);if(d<=0&&p<=0)return n.copy(a);Wh.subVectors(e,r);const g=Dr.dot(Wh),_=Nr.dot(Wh);if(g>=0&&_<=g)return n.copy(r);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(Dr,u);jh.subVectors(e,c);const y=Dr.dot(jh),b=Nr.dot(jh);if(b>=0&&y<=b)return n.copy(c);const E=y*p-d*b;if(E<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(a).addScaledVector(Nr,h);const S=g*b-y*_;if(S<=0&&_-g>=0&&y-b>=0)return U_.subVectors(c,r),h=(_-g)/(_-g+(y-b)),n.copy(r).addScaledVector(U_,h);const x=1/(S+E+v);return u=E*x,h=v*x,n.copy(a).addScaledVector(Dr,u).addScaledVector(Nr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function Zh(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class ot{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=At.workingColorSpace){return this.r=e,this.g=n,this.b=a,At.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=At.workingColorSpace){if(e=gp(e,1),n=gt(n,0,1),a=gt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Zh(u,c,e+1/3),this.g=Zh(u,c,e),this.b=Zh(u,c,e-1/3)}return At.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const a=nx[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return At.workingToColorSpace(Bn.copy(this),e),Math.round(gt(Bn.r*255,0,255))*65536+Math.round(gt(Bn.g*255,0,255))*256+Math.round(gt(Bn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Bn.copy(this),n);const a=Bn.r,r=Bn.g,c=Bn.b,u=Math.max(a,r,c),h=Math.min(a,r,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case a:d=(r-c)/_+(r<c?6:0);break;case r:d=(c-a)/_+2;break;case c:d=(a-r)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Bn.copy(this),n),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Nn){At.workingToColorSpace(Bn.copy(this),e);const n=Bn.r,a=Bn.g,r=Bn.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+n,ts.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(ts),e.getHSL(Hc);const a=ul(ts.h,Hc.h,n),r=ul(ts.s,Hc.s,n),c=ul(ts.l,Hc.l,n);return this.setHSL(a,r,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new ot;ot.NAMES=nx;let rb=0;class zi extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Hr,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(a.blending=this.blending),this.side!==Ea&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==_d&&(a.blendSrc=this.blendSrc),this.blendDst!==vd&&(a.blendDst=this.blendDst),this.blendEquation!==Fs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(n){const c=r(e.textures),u=r(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hs extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new j,Gc=new rt;let ob=0;class kn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=tp,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Gc.fromBufferAttribute(this,n),Gc.applyMatrix3(e),this.setXY(n,Gc.x,Gc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ai(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=zt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ai(n,this.array)),n}setX(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ai(n,this.array)),n}setY(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ai(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ai(n,this.array)),n}setW(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),a=zt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),a=zt(a,this.array),r=zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),a=zt(a,this.array),r=zt(r,this.array),c=zt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tp&&(e.usage=this.usage),e}}class ix extends kn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class ax extends kn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class ba extends kn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let lb=0;const _i=new ht,Qh=new $t,Lr=new j,oi=new ki,tl=new ki,En=new j;class Wi extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?ax:ix)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ft().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,n,a){return _i.makeTranslation(e,n,a),this.applyMatrix4(_i),this}scale(e,n,a){return _i.makeScale(e,n,a),this.applyMatrix4(_i),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=e.length;r<c;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ba(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const a=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(oi.min,tl.min),oi.expandByPoint(En),En.addVectors(oi.max,tl.max),oi.expandByPoint(En)):(oi.expandByPoint(tl.min),oi.expandByPoint(tl.max))}oi.getCenter(a);let r=0;for(let c=0,u=e.count;c<u;c++)En.fromBufferAttribute(e,c),r=Math.max(r,a.distanceToSquared(En));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)En.fromBufferAttribute(h,p),d&&(Lr.fromBufferAttribute(e,p),En.add(Lr)),r=Math.max(r,a.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let X=0;X<a.count;X++)h[X]=new j,d[X]=new j;const p=new j,g=new j,_=new j,v=new rt,y=new rt,b=new rt,E=new j,S=new j;function x(X,N,R){p.fromBufferAttribute(a,X),g.fromBufferAttribute(a,N),_.fromBufferAttribute(a,R),v.fromBufferAttribute(c,X),y.fromBufferAttribute(c,N),b.fromBufferAttribute(c,R),g.sub(p),_.sub(p),y.sub(v),b.sub(v);const z=1/(y.x*b.y-b.x*y.y);isFinite(z)&&(E.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(z),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(z),h[X].add(E),h[N].add(E),h[R].add(E),d[X].add(S),d[N].add(S),d[R].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,N=U.length;X<N;++X){const R=U[X],z=R.start,le=R.count;for(let ae=z,_e=z+le;ae<_e;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const D=new j,C=new j,F=new j,G=new j;function P(X){F.fromBufferAttribute(r,X),G.copy(F);const N=h[X];D.copy(N),D.sub(F.multiplyScalar(F.dot(N))).normalize(),C.crossVectors(G,N);const z=C.dot(d[X])<0?-1:1;u.setXYZW(X,D.x,D.y,D.z,z)}for(let X=0,N=U.length;X<N;++X){const R=U[X],z=R.start,le=R.count;for(let ae=z,_e=z+le;ae<_e;ae+=3)P(e.getX(ae+0)),P(e.getX(ae+1)),P(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new j,c=new j,u=new j,h=new j,d=new j,p=new j,g=new j,_=new j;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);r.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),h.fromBufferAttribute(a,b),d.fromBufferAttribute(a,E),p.fromBufferAttribute(a,S),h.add(g),d.add(g),p.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)En.fromBufferAttribute(e,n),En.normalize(),e.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(d.length*g);let y=0,b=0;for(let E=0,S=d.length;E<S;E++){h.isInterleavedBufferAttribute?y=d[E]*h.data.stride+h.offset:y=d[E]*g;for(let x=0;x<g;x++)v[b++]=p[y++]}return new kn(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wi,a=this.index.array,r=this.attributes;for(const h in r){const d=r[h],p=e(d,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=e(v,a);d.push(y)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(r[d]=g,c=!0)}c&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O_=new ht,Ls=new yl,Vc=new Xi,P_=new j,kc=new j,Xc=new j,Wc=new j,Jh=new j,jc=new j,I_=new j,Yc=new j;class ci extends $t{constructor(e=new Wi,n=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(c&&h){jc.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],_=c[d];g!==0&&(Jh.fromBufferAttribute(_,e),u?jc.addScaledVector(Jh,g):jc.addScaledVector(Jh.sub(n),g))}n.add(jc)}return n}raycast(e,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Vc.copy(a.boundingSphere),Vc.applyMatrix4(c),Ls.copy(e.ray).recast(e.near),!(Vc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Vc,P_)===null||Ls.origin.distanceToSquared(P_)>(e.far-e.near)**2))&&(O_.copy(c).invert(),Ls.copy(e.ray).applyMatrix4(O_),!(a.boundingBox!==null&&Ls.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Ls)))}_computeIntersections(e,n,a){let r;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,E=v.length;b<E;b++){const S=v[b],x=u[S.materialIndex],U=Math.max(S.start,y.start),D=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let C=U,F=D;C<F;C+=3){const G=h.getX(C),P=h.getX(C+1),X=h.getX(C+2);r=qc(this,x,e,a,p,g,_,G,P,X),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const b=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let S=b,x=E;S<x;S+=3){const U=h.getX(S),D=h.getX(S+1),C=h.getX(S+2);r=qc(this,u,e,a,p,g,_,U,D,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let b=0,E=v.length;b<E;b++){const S=v[b],x=u[S.materialIndex],U=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=U,F=D;C<F;C+=3){const G=C,P=C+1,X=C+2;r=qc(this,x,e,a,p,g,_,G,P,X),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=S.materialIndex,n.push(r))}}else{const b=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let S=b,x=E;S<x;S+=3){const U=S,D=S+1,C=S+2;r=qc(this,u,e,a,p,g,_,U,D,C),r&&(r.faceIndex=Math.floor(S/3),n.push(r))}}}}function cb(o,e,n,a,r,c,u,h){let d;if(e.side===Qn?d=a.intersectTriangle(u,c,r,!0,h):d=a.intersectTriangle(r,c,u,e.side===Ea,h),d===null)return null;Yc.copy(h),Yc.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(Yc);return p<n.near||p>n.far?null:{distance:p,point:Yc.clone(),object:o}}function qc(o,e,n,a,r,c,u,h,d,p){o.getVertexPosition(h,kc),o.getVertexPosition(d,Xc),o.getVertexPosition(p,Wc);const g=cb(o,e,n,a,kc,Xc,Wc,I_);if(g){const _=new j;Ri.getBarycoord(I_,kc,Xc,Wc,_),r&&(g.uv=Ri.getInterpolatedAttribute(r,h,d,p,_,new rt)),c&&(g.uv1=Ri.getInterpolatedAttribute(c,h,d,p,_,new rt)),u&&(g.normal=Ri.getInterpolatedAttribute(u,h,d,p,_,new j),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:d,c:p,normal:new j,materialIndex:0};Ri.getNormal(kc,Xc,Wc,v.normal),g.face=v,g.barycoord=_}return g}class Sl extends Wi{constructor(e=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const h=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,y=0;b("z","y","x",-1,-1,a,n,e,u,c,0),b("z","y","x",1,-1,a,n,-e,u,c,1),b("x","z","y",1,1,e,a,n,r,u,2),b("x","z","y",1,-1,e,a,-n,r,u,3),b("x","y","z",1,-1,e,n,a,r,c,4),b("x","y","z",-1,-1,e,n,-a,r,c,5),this.setIndex(d),this.setAttribute("position",new ba(p,3)),this.setAttribute("normal",new ba(g,3)),this.setAttribute("uv",new ba(_,2));function b(E,S,x,U,D,C,F,G,P,X,N){const R=C/P,z=F/X,le=C/2,ae=F/2,_e=G/2,he=P+1,B=X+1;let J=0,K=0;const be=new j;for(let L=0;L<B;L++){const Y=L*z-ae;for(let pe=0;pe<he;pe++){const Me=pe*R-le;be[E]=Me*U,be[S]=Y*D,be[x]=_e,p.push(be.x,be.y,be.z),be[E]=0,be[S]=0,be[x]=G>0?1:-1,g.push(be.x,be.y,be.z),_.push(pe/P),_.push(1-L/X),J+=1}}for(let L=0;L<X;L++)for(let Y=0;Y<P;Y++){const pe=v+Y+he*L,Me=v+Y+he*(L+1),W=v+(Y+1)+he*(L+1),ce=v+(Y+1)+he*L;d.push(pe,Me,ce),d.push(Me,W,ce),K+=6}h.addGroup(y,K,N),y+=K,v+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function Hn(o){const e={};for(let n=0;n<o.length;n++){const a=Kr(o[n]);for(const r in a)e[r]=a[r]}return e}function ub(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function sx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const fb={clone:Kr,merge:Hn};var hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hb,this.fragmentShader=db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=ub(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class rx extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Sa}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new j,B_=new rt,F_=new rt;class Gn extends rx{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,n){return this.getViewBounds(e,B_,F_),n.subVectors(F_,B_)}setViewOffset(e,n,a,r,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cl*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*r/d,n-=u.offsetY*a/p,r*=u.width/d,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ur=-90,Or=1;class pb extends $t{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Ur,Or,e,n);r.layers=this.layers,this.add(r);const c=new Gn(Ur,Or,e,n);c.layers=this.layers,this.add(c);const u=new Gn(Ur,Or,e,n);u.layers=this.layers,this.add(u);const h=new Gn(Ur,Or,e,n);h.layers=this.layers,this.add(h);const d=new Gn(Ur,Or,e,n);d.layers=this.layers,this.add(d);const p=new Gn(Ur,Or,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,h,d]=n;for(const p of n)this.remove(p);if(e===Sa)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===gu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,c),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,h),e.setRenderTarget(a,3,r),e.render(n,d),e.setRenderTarget(a,4,r),e.render(n,p),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,r),e.render(n,g),e.setRenderTarget(_,v,y),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class ox extends Tn{constructor(e=[],n=Wr,a,r,c,u,h,d,p,g){super(e,n,a,r,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mb extends ks{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new ox(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Sl(5,5,5),c=new us({name:"CubemapFromEquirect",uniforms:Kr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Qn,blending:ls});c.uniforms.tEquirect.value=n;const u=new ci(r,c),h=n.minFilter;return n.minFilter===ya&&(n.minFilter=li),new pb(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(c)}}class Gs extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gb={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const S=n.getJointPose(E,a),x=this._getHandJoint(p,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(gb)))}return h!==null&&(h.visible=r!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Gs;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class _b extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=tp,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new j;class vp{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)zn.fromBufferAttribute(this,n),zn.applyMatrix4(e),this.setXYZ(n,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)zn.fromBufferAttribute(this,n),zn.applyNormalMatrix(e),this.setXYZ(n,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)zn.fromBufferAttribute(this,n),zn.transformDirection(e),this.setXYZ(n,zn.x,zn.y,zn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Ai(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=zt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ai(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ai(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ai(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ai(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=zt(n,this.array),a=zt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=zt(n,this.array),a=zt(a,this.array),r=zt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=zt(n,this.array),a=zt(a,this.array),r=zt(r,this.array),c=zt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new kn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const z_=new j,H_=new Ot,G_=new Ot,xb=new j,V_=new ht,Kc=new j,ed=new Xi,k_=new ht,td=new yl;class yb extends ci{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=m_,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ki),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Kc),this.boundingBox.expandByPoint(Kc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xi),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Kc),this.boundingSphere.expandByPoint(Kc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ed.copy(this.boundingSphere),ed.applyMatrix4(r),e.ray.intersectsSphere(ed)!==!1&&(k_.copy(r).invert(),td.copy(e.ray).applyMatrix4(k_),!(this.boundingBox!==null&&td.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,td)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===m_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;H_.fromBufferAttribute(r.attributes.skinIndex,e),G_.fromBufferAttribute(r.attributes.skinWeight,e),z_.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=G_.getComponent(c);if(u!==0){const h=H_.getComponent(c);V_.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(xb.copy(z_).applyMatrix4(V_),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class lx extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cx extends Tn{constructor(e=null,n=1,a=1,r,c,u,h,d,p=Vn,g=Vn,_,v){super(null,u,h,d,p,g,r,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const X_=new ht,Sb=new ht;class xp{constructor(e=[],n=[]){this.uuid=Ci(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new ht;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:Sb;X_.multiplyMatrices(h,n[c]),X_.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new xp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new cx(n,e,e,xi,wi);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const c=e.bones[a];let u=n[c];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),u=new lx),this.bones.push(u),this.boneInverses.push(new ht().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];e.bones.push(u.uuid);const h=a[r];e.boneInverses.push(h.toArray())}return e}}class np extends kn{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pr=new ht,W_=new ht,Zc=[],j_=new ki,Mb=new ht,nl=new ci,il=new Xi;class bb extends ci{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new np(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,Mb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Pr),j_.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(j_)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Pr),il.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(il)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=r[u+h]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(nl.geometry=this.geometry,nl.material=this.material,nl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),il.copy(this.boundingSphere),il.applyMatrix4(a),e.ray.intersectsSphere(il)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,Pr),W_.multiplyMatrices(a,Pr),nl.matrixWorld=W_,nl.raycast(e,Zc);for(let u=0,h=Zc.length;u<h;u++){const d=Zc[u];d.instanceId=c,d.object=this,n.push(d)}Zc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new np(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new cx(new Float32Array(r*this.count),r,this.count,hp,wi));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const h=this.geometry.morphTargetsRelative?1:1-u,d=r*e;c[d]=h,c.set(a,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nd=new j,Eb=new j,Tb=new ft;class as{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=nd.subVectors(a,n).cross(Eb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(nd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||Tb.getNormalMatrix(e),r=this.coplanarPoint(nd).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new Xi,Qc=new j;class yp{constructor(e=new as,n=new as,a=new as,r=new as,c=new as,u=new as){this.planes=[e,n,a,r,c,u]}set(e,n,a,r,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Sa){const a=this.planes,r=e.elements,c=r[0],u=r[1],h=r[2],d=r[3],p=r[4],g=r[5],_=r[6],v=r[7],y=r[8],b=r[9],E=r[10],S=r[11],x=r[12],U=r[13],D=r[14],C=r[15];if(a[0].setComponents(d-c,v-p,S-y,C-x).normalize(),a[1].setComponents(d+c,v+p,S+y,C+x).normalize(),a[2].setComponents(d+u,v+g,S+b,C+U).normalize(),a[3].setComponents(d-u,v-g,S-b,C-U).normalize(),a[4].setComponents(d-h,v-_,S-E,C-D).normalize(),n===Sa)a[5].setComponents(d+h,v+_,S+E,C+D).normalize();else if(n===gu)a[5].setComponents(h,_,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Qc.x=r.normal.x>0?e.max.x:e.min.x,Qc.y=r.normal.y>0?e.max.y:e.min.y,Qc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ux extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _u=new j,vu=new j,Y_=new ht,al=new yl,Jc=new Xi,id=new j,q_=new j;class Sp extends $t{constructor(e=new Wi,n=new ux){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)_u.fromBufferAttribute(n,r-1),vu.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=_u.distanceTo(vu);e.setAttribute("lineDistance",new ba(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Jc.copy(a.boundingSphere),Jc.applyMatrix4(r),Jc.radius+=c,e.ray.intersectsSphere(Jc)===!1)return;Y_.copy(r).invert(),al.copy(e.ray).applyMatrix4(Y_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let E=y,S=b-1;E<S;E+=p){const x=g.getX(E),U=g.getX(E+1),D=$c(this,e,al,d,x,U,E);D&&n.push(D)}if(this.isLineLoop){const E=g.getX(b-1),S=g.getX(y),x=$c(this,e,al,d,E,S,b-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let E=y,S=b-1;E<S;E+=p){const x=$c(this,e,al,d,E,E+1,E);x&&n.push(x)}if(this.isLineLoop){const E=$c(this,e,al,d,b-1,y,b-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function $c(o,e,n,a,r,c,u){const h=o.geometry.attributes.position;if(_u.fromBufferAttribute(h,r),vu.fromBufferAttribute(h,c),n.distanceSqToSegment(_u,vu,id,q_)>a)return;id.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(id);if(!(p<e.near||p>e.far))return{distance:p,point:q_.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const K_=new j,Z_=new j;class Ab extends Sp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)K_.fromBufferAttribute(n,r),Z_.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+K_.distanceTo(Z_);e.setAttribute("lineDistance",new ba(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rb extends Sp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class fx extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Q_=new ht,ip=new yl,eu=new Xi,tu=new j;class wb extends $t{constructor(e=new Wi,n=new fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),eu.copy(a.boundingSphere),eu.applyMatrix4(r),eu.radius+=c,e.ray.intersectsSphere(eu)===!1)return;Q_.copy(r).invert(),ip.copy(e.ray).applyMatrix4(Q_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let b=v,E=y;b<E;b++){const S=p.getX(b);tu.fromBufferAttribute(_,S),J_(tu,S,d,r,e,n,this)}}else{const v=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let b=v,E=y;b<E;b++)tu.fromBufferAttribute(_,b),J_(tu,b,d,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function J_(o,e,n,a,r,c,u){const h=ip.distanceSqToPoint(o);if(h<n){const d=new j;ip.closestPointToPoint(o,d),d.applyMatrix4(a);const p=r.ray.origin.distanceTo(d);if(p<r.near||p>r.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class hx extends Tn{constructor(e,n,a=Vs,r,c,u,h=Vn,d=Vn,p,g=pl,_=1){if(g!==pl&&g!==ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,r,c,u,h,d,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Su extends Wi{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const c=e/2,u=n/2,h=Math.floor(a),d=Math.floor(r),p=h+1,g=d+1,_=e/h,v=n/d,y=[],b=[],E=[],S=[];for(let x=0;x<g;x++){const U=x*v-u;for(let D=0;D<p;D++){const C=D*_-c;b.push(C,-U,0),E.push(0,0,1),S.push(D/h),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let U=0;U<h;U++){const D=U+p*x,C=U+p*(x+1),F=U+1+p*(x+1),G=U+1+p*x;y.push(D,C,G),y.push(C,F,G)}this.setIndex(y),this.setAttribute("position",new ba(b,3)),this.setAttribute("normal",new ba(E,3)),this.setAttribute("uv",new ba(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mp extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zv,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ji extends Mp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cb extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Db extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function nu(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Nb(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Lb(o){function e(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function $_(o,e,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let d=0;d!==e;++d)r[u++]=o[h+d]}return r}function dx(o,e,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class Ml{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let h=a+2;;){if(r===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let d=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===d)break;if(r=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ub extends Ml{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:g_,endingEnd:g_}}intervalChanged_(e,n,a){const r=this.parameterPositions;let c=e-2,u=e+1,h=r[c],d=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case __:c=e,h=2*n-a;break;case v_:c=r.length-2,h=n+r[c]-r[c+1];break;default:c=e,h=a}if(d===void 0)switch(this.getSettings_().endingEnd){case __:u=e,d=2*a-n;break;case v_:u=1,d=a+r[1]-r[0];break;default:u=e-1,d=n}const p=(a-n)*.5,g=this.valueSize;this._weightPrev=p/(n-h),this._weightNext=p/(d-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=e*h,p=d-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,y=this._weightNext,b=(a-n)/(r-n),E=b*b,S=E*b,x=-v*S+2*v*E-v*b,U=(1+v)*S+(-1.5-2*v)*E+(-.5+v)*b+1,D=(-1-y)*S+(1.5+y)*E+.5*b,C=y*S-y*E;for(let F=0;F!==h;++F)c[F]=x*u[g+F]+U*u[p+F]+D*u[d+F]+C*u[_+F];return c}}class Ob extends Ml{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=e*h,p=d-h,g=(a-n)/(r-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[p+v]*_+u[d+v]*g;return c}}class Pb extends Ml{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nu(n,this.TimeBufferType),this.values=nu(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:nu(e.times,Array),values:nu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new Pb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ob(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ub(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case gl:n=this.InterpolantFactoryMethodDiscrete;break;case _l:n=this.InterpolantFactoryMethodLinear;break;case Lh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return _l;case this.InterpolantFactoryMethodSmooth:return Lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const d=a[h];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,d,u),e=!1;break}u=d}if(r!==void 0&&Nb(r))for(let h=0,d=r.length;h!==d;++h){const p=r[h];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,p),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===Lh,c=e.length-1;let u=1;for(let h=1;h<c;++h){let d=!1;const p=e[h],g=e[h+1];if(p!==g&&(h!==1||p!==e[0]))if(r)d=!0;else{const _=h*a,v=_-a,y=_+a;for(let b=0;b!==a;++b){const E=n[_+b];if(E!==n[v+b]||E!==n[y+b]){d=!0;break}}}if(d){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let y=0;y!==a;++y)n[v+y]=n[_+y]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,d=u*a,p=0;p!==a;++p)n[d+p]=n[h+p];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=_l;class $r extends Di{constructor(e,n,a){super(e,n,a)}}$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=gl;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class px extends Di{constructor(e,n,a,r){super(e,n,a,r)}}px.prototype.ValueTypeName="color";class Zr extends Di{constructor(e,n,a,r){super(e,n,a,r)}}Zr.prototype.ValueTypeName="number";class Ib extends Ml{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=(a-n)/(r-n);let p=e*h;for(let g=p+h;p!==g;p+=4)Gi.slerpFlat(c,0,u,p-h,u,p,d);return c}}class Qr extends Di{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new Ib(this.times,this.values,this.getValueSize(),e)}}Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends Di{constructor(e,n,a){super(e,n,a)}}eo.prototype.ValueTypeName="string";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=gl;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends Di{constructor(e,n,a,r){super(e,n,a,r)}}Jr.prototype.ValueTypeName="vector";class Bb{constructor(e="",n=-1,a=[],r=mM){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=Ci(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(zb(a[u]).scale(r));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let c=0,u=a.length;c!==u;++c)n.push(Di.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const c=n.length,u=[];for(let h=0;h<c;h++){let d=[],p=[];d.push((h+c-1)%c,h,(h+1)%c),p.push(0,1,0);const g=Lb(d);d=$_(d,1,g),p=$_(p,1,g),!r&&d[0]===0&&(d.push(c),p.push(p[0])),u.push(new Zr(".morphTargetInfluences["+n[h].name+"]",d,p).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,d=e.length;h<d;h++){const p=e[h],g=p.name.match(c);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(p)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],n,a));return u}static parseAnimation(e,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,y,b,E){if(y.length!==0){const S=[],x=[];dx(y,S,x,b),S.length!==0&&E.push(new _(v,S,x))}},r=[],c=e.name||"default",u=e.fps||30,h=e.blendMode;let d=e.length||-1;const p=e.hierarchy||[];for(let _=0;_<p.length;_++){const v=p[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let b;for(b=0;b<v.length;b++)if(v[b].morphTargets)for(let E=0;E<v[b].morphTargets.length;E++)y[v[b].morphTargets[E]]=-1;for(const E in y){const S=[],x=[];for(let U=0;U!==v[b].morphTargets.length;++U){const D=v[b];S.push(D.time),x.push(D.morphTarget===E?1:0)}r.push(new Zr(".morphTargetInfluence["+E+"]",S,x))}d=y.length*u}else{const y=".bones["+n[_].name+"]";a(Jr,y+".position",v,"pos",r),a(Qr,y+".quaternion",v,"rot",r),a(Jr,y+".scale",v,"scl",r)}}return r.length===0?null:new this(c,d,r,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Fb(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zr;case"vector":case"vector2":case"vector3":case"vector4":return Jr;case"color":return px;case"quaternion":return Qr;case"bool":case"boolean":return $r;case"string":return eo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function zb(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fb(o.type);if(o.times===void 0){const n=[],a=[];dx(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const os={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Hb{constructor(e,n,a){const r=this;let c=!1,u=0,h=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.itemStart=function(g){h++,c===!1&&r.onStart!==void 0&&r.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const y=p[_],b=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return b}return null}}}const Gb=new Hb;class to{constructor(e){this.manager=e!==void 0?e:Gb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,c){a.load(e,r,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}to.DEFAULT_MATERIAL_NAME="__DEFAULT";const _a={};class Vb extends Error{constructor(e,n){super(e),this.response=n}}class mx extends to{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=os.get(e);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(_a[e]!==void 0){_a[e].push({onLoad:n,onProgress:a,onError:r});return}_a[e]=[],_a[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,d=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=_a[e],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=v?parseInt(v):0,b=y!==0;let E=0;const S=new ReadableStream({start(x){U();function U(){_.read().then(({done:D,value:C})=>{if(D)x.close();else{E+=C.byteLength;const F=new ProgressEvent("progress",{lengthComputable:b,loaded:E,total:y});for(let G=0,P=g.length;G<P;G++){const X=g[G];X.onProgress&&X.onProgress(F)}x.enqueue(C),U()}},D=>{x.error(D)})}}});return new Response(S)}else throw new Vb(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return p.arrayBuffer().then(b=>y.decode(b))}}}).then(p=>{os.add(e,p);const g=_a[e];delete _a[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(p)}}).catch(p=>{const g=_a[e];if(g===void 0)throw this.manager.itemError(e),p;delete _a[e];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kb extends to{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=os.get(e);if(u!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u;const h=vl("img");function d(){g(),os.add(e,this),n&&n(this),c.manager.itemEnd(e)}function p(_){g(),r&&r(_),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",d,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",d,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(e),h.src=e,h}}class Xb extends to{constructor(e){super(e)}load(e,n,a,r){const c=new Tn,u=new kb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class Mu extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ad=new ht,ev=new j,tv=new j;class bp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;ev.setFromMatrixPosition(e.matrixWorld),n.position.copy(ev),tv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tv),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wb extends bp{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=qr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jb extends Mu{constructor(e,n,a=0,r=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new Wb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nv=new ht,sl=new j,sd=new j;class Yb extends bp{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,r=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),sl.setFromMatrixPosition(e.matrixWorld),a.position.copy(sl),sd.copy(a.position),sd.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(sd),a.updateMatrixWorld(),r.makeTranslation(-sl.x,-sl.y,-sl.z),nv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nv)}}class qb extends Mu{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new Yb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ep extends rx{constructor(e=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Kb extends bp{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gx extends Mu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Kb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zb extends Mu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class fl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const rd=new WeakMap;class Qb extends to{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=os.get(e);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(p=>{if(rd.has(u)===!0)r&&r(rd.get(u)),c.manager.itemError(e),c.manager.itemEnd(e);else return n&&n(p),c.manager.itemEnd(e),p});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader;const d=fetch(e,h).then(function(p){return p.blob()}).then(function(p){return createImageBitmap(p,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(p){return os.add(e,p),n&&n(p),c.manager.itemEnd(e),p}).catch(function(p){r&&r(p),rd.set(d,p),os.remove(e),c.manager.itemError(e),c.manager.itemEnd(e)});os.add(e,d),c.manager.itemStart(e)}}class Jb extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Tp="\\[\\]\\.:\\/",$b=new RegExp("["+Tp+"]","g"),Ap="[^"+Tp+"]",eE="[^"+Tp.replace("\\.","")+"]",tE=/((?:WC+[\/:])*)/.source.replace("WC",Ap),nE=/(WCOD+)?/.source.replace("WCOD",eE),iE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ap),aE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ap),sE=new RegExp("^"+tE+nE+iE+aE+"$"),rE=["material","materials","bones","map"];class oE{constructor(e,n,a){const r=a||Ht.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Ht{constructor(e,n,a){this.path=n,this.parsedPath=a||Ht.parseTrackName(n),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Ht.Composite(e,n,a):new Ht(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($b,"")}static parseTrackName(e){const n=sE.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);rE.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const d=a(h.children);if(d)return d}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(e||(e=Ht.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let p=n.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===p){p=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(p!==void 0){if(e[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[p]}}const u=e[r];if(u===void 0){const p=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+r+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=oE;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class iv{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lE extends Xs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function av(o,e,n,a){const r=cE(a);switch(n){case Wv:return o*e;case hp:return o*e/r.components*r.byteLength;case dp:return o*e/r.components*r.byteLength;case Yv:return o*e*2/r.components*r.byteLength;case pp:return o*e*2/r.components*r.byteLength;case jv:return o*e*3/r.components*r.byteLength;case xi:return o*e*4/r.components*r.byteLength;case mp:return o*e*4/r.components*r.byteLength;case lu:case cu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case uu:case fu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Nd:return Math.max(o,16)*Math.max(e,8)/4;case wd:case Dd:return Math.max(o,8)*Math.max(e,8)/2;case Ld:case Ud:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Od:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case kd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case jd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case hu:case Kd:case Zd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case qv:case Qd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Jd:case $d:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cE(o){switch(o){case Hi:case Vv:return{byteLength:1,components:1};case hl:case kv:case xl:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case Vs:case cp:case wi:return{byteLength:4,components:1};case Xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _x(){let o=null,e=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function uE(o){const e=new WeakMap;function n(h,d){const p=h.array,g=h.usage,_=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,d,p){const g=d.array,_=d.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,g);else{_.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<_.length;y++){const b=_[v],E=_[y];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++v,_[v]=E)}_.length=v+1;for(let y=0,b=_.length;y<b;y++){const E=_[y];o.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(o.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:r,remove:c,update:u}}var fE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_E=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ET=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_A=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:fE,alphahash_pars_fragment:hE,alphamap_fragment:dE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:_E,aomap_pars_fragment:vE,batching_pars_vertex:xE,batching_vertex:yE,begin_vertex:SE,beginnormal_vertex:ME,bsdfs:bE,iridescence_fragment:EE,bumpmap_pars_fragment:TE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:CE,color_fragment:DE,color_pars_fragment:NE,color_pars_vertex:LE,color_vertex:UE,common:OE,cube_uv_reflection_fragment:PE,defaultnormal_vertex:IE,displacementmap_pars_vertex:BE,displacementmap_vertex:FE,emissivemap_fragment:zE,emissivemap_pars_fragment:HE,colorspace_fragment:GE,colorspace_pars_fragment:VE,envmap_fragment:kE,envmap_common_pars_fragment:XE,envmap_pars_fragment:WE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:iT,envmap_vertex:YE,fog_vertex:qE,fog_pars_vertex:KE,fog_fragment:ZE,fog_pars_fragment:QE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:$E,lights_lambert_fragment:eT,lights_lambert_pars_fragment:tT,lights_pars_begin:nT,lights_toon_fragment:aT,lights_toon_pars_fragment:sT,lights_phong_fragment:rT,lights_phong_pars_fragment:oT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:fT,lights_fragment_end:hT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:pT,logdepthbuf_pars_vertex:mT,logdepthbuf_vertex:gT,map_fragment:_T,map_pars_fragment:vT,map_particle_fragment:xT,map_particle_pars_fragment:yT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:MT,morphinstance_vertex:bT,morphcolor_vertex:ET,morphnormal_vertex:TT,morphtarget_pars_vertex:AT,morphtarget_vertex:RT,normal_fragment_begin:wT,normal_fragment_maps:CT,normal_pars_fragment:DT,normal_pars_vertex:NT,normal_vertex:LT,normalmap_pars_fragment:UT,clearcoat_normal_fragment_begin:OT,clearcoat_normal_fragment_maps:PT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:BT,opaque_fragment:FT,packing:zT,premultiplied_alpha_fragment:HT,project_vertex:GT,dithering_fragment:VT,dithering_pars_fragment:kT,roughnessmap_fragment:XT,roughnessmap_pars_fragment:WT,shadowmap_pars_fragment:jT,shadowmap_pars_vertex:YT,shadowmap_vertex:qT,shadowmask_pars_fragment:KT,skinbase_vertex:ZT,skinning_pars_vertex:QT,skinning_vertex:JT,skinnormal_vertex:$T,specularmap_fragment:eA,specularmap_pars_fragment:tA,tonemapping_fragment:nA,tonemapping_pars_fragment:iA,transmission_fragment:aA,transmission_pars_fragment:sA,uv_pars_fragment:rA,uv_pars_vertex:oA,uv_vertex:lA,worldpos_vertex:cA,background_vert:uA,background_frag:fA,backgroundCube_vert:hA,backgroundCube_frag:dA,cube_vert:pA,cube_frag:mA,depth_vert:gA,depth_frag:_A,distanceRGBA_vert:vA,distanceRGBA_frag:xA,equirect_vert:yA,equirect_frag:SA,linedashed_vert:MA,linedashed_frag:bA,meshbasic_vert:EA,meshbasic_frag:TA,meshlambert_vert:AA,meshlambert_frag:RA,meshmatcap_vert:wA,meshmatcap_frag:CA,meshnormal_vert:DA,meshnormal_frag:NA,meshphong_vert:LA,meshphong_frag:UA,meshphysical_vert:OA,meshphysical_frag:PA,meshtoon_vert:IA,meshtoon_frag:BA,points_vert:FA,points_frag:zA,shadow_vert:HA,shadow_frag:GA,sprite_vert:VA,sprite_frag:kA},Ue={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Hn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Hn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Hn([Ue.points,Ue.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Hn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Hn([Ue.common,Ue.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Hn([Ue.sprite,Ue.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Hn([Ue.common,Ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Hn([Ue.lights,Ue.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const iu={r:0,b:0,g:0},Os=new Vi,XA=new ht;function WA(o,e,n,a,r,c,u){const h=new ot(0);let d=c===!0?0:1,p,g,_=null,v=0,y=null;function b(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?n:e).get(C)),C}function E(D){let C=!1;const F=b(D);F===null?x(h,d):F&&F.isColor&&(x(F,1),C=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?a.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(D,C){const F=b(C);F&&(F.isCubeTexture||F.mapping===yu)?(g===void 0&&(g=new ci(new Sl(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:Kr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,P,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Os.copy(C.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Os)),g.material.toneMapped=At.getTransfer(F.colorSpace)!==Xt,(_!==F||v!==F.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=F,v=F.version,y=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ci(new Su(2,2),new us({name:"BackgroundMaterial",uniforms:Kr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=At.getTransfer(F.colorSpace)!==Xt,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||v!==F.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,v=F.version,y=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,C){D.getRGB(iu,sx(o)),a.buffers.color.setClear(iu.r,iu.g,iu.b,C,u)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,C=1){h.set(D),d=C,x(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,x(h,d)},render:E,addToRenderList:S,dispose:U}}function jA(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let c=r,u=!1;function h(R,z,le,ae,_e){let he=!1;const B=_(ae,le,z);c!==B&&(c=B,p(c.object)),he=y(R,ae,le,_e),he&&b(R,ae,le,_e),_e!==null&&e.update(_e,o.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,C(R,z,le,ae),_e!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function d(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function _(R,z,le){const ae=le.wireframe===!0;let _e=a[R.id];_e===void 0&&(_e={},a[R.id]=_e);let he=_e[z.id];he===void 0&&(he={},_e[z.id]=he);let B=he[ae];return B===void 0&&(B=v(d()),he[ae]=B),B}function v(R){const z=[],le=[],ae=[];for(let _e=0;_e<n;_e++)z[_e]=0,le[_e]=0,ae[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:le,attributeDivisors:ae,object:R,attributes:{},index:null}}function y(R,z,le,ae){const _e=c.attributes,he=z.attributes;let B=0;const J=le.getAttributes();for(const K in J)if(J[K].location>=0){const L=_e[K];let Y=he[K];if(Y===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),L===void 0||L.attribute!==Y||Y&&L.data!==Y.data)return!0;B++}return c.attributesNum!==B||c.index!==ae}function b(R,z,le,ae){const _e={},he=z.attributes;let B=0;const J=le.getAttributes();for(const K in J)if(J[K].location>=0){let L=he[K];L===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(L=R.instanceColor));const Y={};Y.attribute=L,L&&L.data&&(Y.data=L.data),_e[K]=Y,B++}c.attributes=_e,c.attributesNum=B,c.index=ae}function E(){const R=c.newAttributes;for(let z=0,le=R.length;z<le;z++)R[z]=0}function S(R){x(R,0)}function x(R,z){const le=c.newAttributes,ae=c.enabledAttributes,_e=c.attributeDivisors;le[R]=1,ae[R]===0&&(o.enableVertexAttribArray(R),ae[R]=1),_e[R]!==z&&(o.vertexAttribDivisor(R,z),_e[R]=z)}function U(){const R=c.newAttributes,z=c.enabledAttributes;for(let le=0,ae=z.length;le<ae;le++)z[le]!==R[le]&&(o.disableVertexAttribArray(le),z[le]=0)}function D(R,z,le,ae,_e,he,B){B===!0?o.vertexAttribIPointer(R,z,le,_e,he):o.vertexAttribPointer(R,z,le,ae,_e,he)}function C(R,z,le,ae){E();const _e=ae.attributes,he=le.getAttributes(),B=z.defaultAttributeValues;for(const J in he){const K=he[J];if(K.location>=0){let be=_e[J];if(be===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),be!==void 0){const L=be.normalized,Y=be.itemSize,pe=e.get(be);if(pe===void 0)continue;const Me=pe.buffer,W=pe.type,ce=pe.bytesPerElement,Se=W===o.INT||W===o.UNSIGNED_INT||be.gpuType===cp;if(be.isInterleavedBufferAttribute){const ve=be.data,we=ve.stride,Je=be.offset;if(ve.isInstancedInterleavedBuffer){for(let je=0;je<K.locationSize;je++)x(K.location+je,ve.meshPerAttribute);R.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let je=0;je<K.locationSize;je++)S(K.location+je);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let je=0;je<K.locationSize;je++)D(K.location+je,Y/K.locationSize,W,L,we*ce,(Je+Y/K.locationSize*je)*ce,Se)}else{if(be.isInstancedBufferAttribute){for(let ve=0;ve<K.locationSize;ve++)x(K.location+ve,be.meshPerAttribute);R.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ve=0;ve<K.locationSize;ve++)S(K.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let ve=0;ve<K.locationSize;ve++)D(K.location+ve,Y/K.locationSize,W,L,Y*ce,Y/K.locationSize*ve*ce,Se)}}else if(B!==void 0){const L=B[J];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(K.location,L);break;case 3:o.vertexAttrib3fv(K.location,L);break;case 4:o.vertexAttrib4fv(K.location,L);break;default:o.vertexAttrib1fv(K.location,L)}}}}U()}function F(){X();for(const R in a){const z=a[R];for(const le in z){const ae=z[le];for(const _e in ae)g(ae[_e].object),delete ae[_e];delete z[le]}delete a[R]}}function G(R){if(a[R.id]===void 0)return;const z=a[R.id];for(const le in z){const ae=z[le];for(const _e in ae)g(ae[_e].object),delete ae[_e];delete z[le]}delete a[R.id]}function P(R){for(const z in a){const le=a[z];if(le[R.id]===void 0)continue;const ae=le[R.id];for(const _e in ae)g(ae[_e].object),delete ae[_e];delete le[R.id]}}function X(){N(),u=!0,c!==r&&(c=r,p(c.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:X,resetDefaultState:N,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:S,disableUnusedAttributes:U}}function YA(o,e,n){let a;function r(p){a=p}function c(p,g){o.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(o.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];n.update(y,a,1)}function d(p,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)u(p[b],g[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let b=0;for(let E=0;E<_;E++)b+=g[E]*v[E];n.update(b,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function qA(o,e,n,a){let r;function c(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==xi&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const X=P===xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Hi&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wi&&!X)}function d(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:F,maxSamples:G}}function KA(o){const e=this;let n=null,a=0,r=!1,c=!1;const u=new as,h=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||r;return r=v,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const b=_.clippingPlanes,E=_.clipIntersection,S=_.clipShadows,x=o.get(_);if(!r||b===null||b.length===0||c&&!S)c?g(null):p();else{const U=c?0:a,D=U*4;let C=x.clippingState||null;d.value=C,C=g(b,v,D,y);for(let F=0;F!==D;++F)C[F]=n[F];x.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=U}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,y,b){const E=_!==null?_.length:0;let S=null;if(E!==0){if(S=d.value,b!==!0||S===null){const x=y+E*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,C=y;D!==E;++D,C+=4)u.copy(_[D]).applyMatrix4(U,h),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function ZA(o){let e=new WeakMap;function n(u,h){return h===Ad?u.mapping=Wr:h===Rd&&(u.mapping=jr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Ad||h===Rd)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new mb(d.height);return p.fromEquirectangularTexture(o,u),e.set(u,p),u.addEventListener("dispose",r),n(p.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Fr=4,sv=[.125,.215,.35,.446,.526,.582],zs=20,od=new Ep,rv=new ot;let ld=null,cd=0,ud=0,fd=!1;const Bs=(1+Math.sqrt(5))/2,Ir=1/Bs,ov=[new j(-Bs,Ir,0),new j(Bs,Ir,0),new j(-Ir,0,Bs),new j(Ir,0,Bs),new j(0,Bs,-Ir),new j(0,Bs,Ir),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],QA=new j;class lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,r=100,c={}){const{size:u=256,position:h=QA}=c;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,r,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=fd,e.scissorTest=!1,au(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:li,minFilter:li,generateMipmaps:!1,type:xl,format:xi,colorSpace:Xn,depthBuffer:!1},r=cv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cv(e,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JA(c)),this._blurMaterial=$A(c,e,n)}return r}_compileMaterial(e){const n=new ci(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,a,r,c){const d=new Gn(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(rv),_.toneMapping=cs,_.autoClear=!1;const b=new Hs({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),E=new ci(new Sl,b);let S=!1;const x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,S=!0):(b.color.copy(rv),S=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(d.up.set(0,p[U],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[U],c.y,c.z)):D===1?(d.up.set(0,0,p[U]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[U],c.z)):(d.up.set(0,p[U],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[U]));const C=this._cubeSize;au(r,D*C,U>2?C:0,C,C),_.setRenderTarget(r),S&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=x}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===Wr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uv());const c=r?this._cubemapMaterial:this._equirectMaterial,u=new ci(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const d=this._cubeSize;au(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,od)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let c=1;c<r;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=ov[(r-c-1)%ov.length];this._blur(e,c-1,c,u,h)}n.autoClear=a}_blur(e,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",c),this._halfBlur(u,e,a,a,r,"longitudinal",c)}_halfBlur(e,n,a,r,c,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ci(this._lodPlanes[r],p),v=p.uniforms,y=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*zs-1),E=c/b,S=isFinite(c)?1+Math.floor(g*E):zs;S>zs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${zs}`);const x=[];let U=0;for(let P=0;P<zs;++P){const X=P/E,N=Math.exp(-X*X/2);x.push(N),P===0?U+=N:P<S&&(U+=2*N)}for(let P=0;P<x.length;P++)x[P]=x[P]/U;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:D}=this;v.dTheta.value=b,v.mipInt.value=D-a;const C=this._sizeLods[r],F=3*C*(r>D-Fr?r-D+Fr:0),G=4*(this._cubeSize-C);au(n,F,G,3*C,2*C),d.setRenderTarget(n),d.render(_,od)}}function JA(o){const e=[],n=[],a=[];let r=o;const c=o-Fr+1+sv.length;for(let u=0;u<c;u++){const h=Math.pow(2,r);n.push(h);let d=1/h;u>o-Fr?d=sv[u-o+Fr-1]:u===0&&(d=0),a.push(d);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,E=3,S=2,x=1,U=new Float32Array(E*b*y),D=new Float32Array(S*b*y),C=new Float32Array(x*b*y);for(let G=0;G<y;G++){const P=G%3*2/3-1,X=G>2?0:-1,N=[P,X,0,P+2/3,X,0,P+2/3,X+1,0,P,X,0,P+2/3,X+1,0,P,X+1,0];U.set(N,E*b*G),D.set(v,S*b*G);const R=[G,G,G,G,G,G];C.set(R,x*b*G)}const F=new Wi;F.setAttribute("position",new kn(U,E)),F.setAttribute("uv",new kn(D,S)),F.setAttribute("faceIndex",new kn(C,x)),e.push(F),r>Fr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function cv(o,e,n){const a=new ks(o,e,n);return a.texture.mapping=yu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function au(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function $A(o,e,n){const a=new Float32Array(zs),r=new j(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function uv(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function fv(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Rp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e1(o){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===Ad||d===Rd,g=d===Wr||d===jr;if(p||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new lv(o)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&r(y)?(n===null&&(n=new lv(o)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function r(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function t1(o){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Gr("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function n1(o,e,n,a){const r={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete r[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,b=_.attributes.position;let E=0;if(y!==null){const U=y.array;E=y.version;for(let D=0,C=U.length;D<C;D+=3){const F=U[D+0],G=U[D+1],P=U[D+2];v.push(F,G,G,P,P,F)}}else if(b!==void 0){const U=b.array;E=b.version;for(let D=0,C=U.length/3-1;D<C;D+=3){const F=D+0,G=D+1,P=D+2;v.push(F,G,G,P,P,F)}}else return;const S=new($v(v)?ax:ix)(v,1);S.version=E;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function i1(o,e,n){let a;function r(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function d(v,y){o.drawElements(a,y,c,v*u),n.update(y,a,1)}function p(v,y,b){b!==0&&(o.drawElementsInstanced(a,y,c,v*u,b),n.update(y,a,b))}function g(v,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,b);let S=0;for(let x=0;x<b;x++)S+=y[x];n.update(S,a,1)}function _(v,y,b,E){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/u,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,E,0,b);let x=0;for(let U=0;U<b;U++)x+=y[U]*E[U];n.update(x,a,1)}}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function a1(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=h*(c/3);break;case o.LINES:n.lines+=h*(c/2);break;case o.LINE_STRIP:n.lines+=h*(c-1);break;case o.LINE_LOOP:n.lines+=h*c;break;case o.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function s1(o,e,n){const a=new WeakMap,r=new Ot;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let R=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",R)};var y=R;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let F=h.attributes.position.count*C,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*G*4*_),X=new ex(P,F,G,_);X.type=wi,X.needsUpdate=!0;const N=C*4;for(let z=0;z<_;z++){const le=x[z],ae=U[z],_e=D[z],he=F*G*4*z;for(let B=0;B<le.count;B++){const J=B*N;b===!0&&(r.fromBufferAttribute(le,B),P[he+J+0]=r.x,P[he+J+1]=r.y,P[he+J+2]=r.z,P[he+J+3]=0),E===!0&&(r.fromBufferAttribute(ae,B),P[he+J+4]=r.x,P[he+J+5]=r.y,P[he+J+6]=r.z,P[he+J+7]=0),S===!0&&(r.fromBufferAttribute(_e,B),P[he+J+8]=r.x,P[he+J+9]=r.y,P[he+J+10]=r.z,P[he+J+11]=_e.itemSize===4?r.w:1)}}v={count:_,texture:X,size:new rt(F,G)},a.set(h,v),h.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const E=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function r1(o,e,n,a){let r=new WeakMap;function c(d){const p=a.render.frame,g=d.geometry,_=e.get(d,g);if(r.get(_)!==p&&(e.update(_),r.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==p&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function u(){r=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const vx=new Tn,hv=new hx(1,1),xx=new ex,yx=new JM,Sx=new ox,dv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),_v=new Float32Array(4);function no(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let c=dv[r];if(c===void 0&&(c=new Float32Array(r),dv[r]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,o[u].toArray(c,h)}return c}function _n(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function vn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function bu(o,e){let n=pv[e];n===void 0&&(n=new Int32Array(e),pv[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function o1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function l1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;o.uniform2fv(this.addr,e),vn(n,e)}}function c1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;o.uniform3fv(this.addr,e),vn(n,e)}}function u1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;o.uniform4fv(this.addr,e),vn(n,e)}}function f1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(_n(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,a))return;_v.set(a),o.uniformMatrix2fv(this.addr,!1,_v),vn(n,a)}}function h1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(_n(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,a))return;gv.set(a),o.uniformMatrix3fv(this.addr,!1,gv),vn(n,a)}}function d1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(_n(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,a))return;mv.set(a),o.uniformMatrix4fv(this.addr,!1,mv),vn(n,a)}}function p1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function m1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;o.uniform2iv(this.addr,e),vn(n,e)}}function g1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;o.uniform3iv(this.addr,e),vn(n,e)}}function _1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;o.uniform4iv(this.addr,e),vn(n,e)}}function v1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function x1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;o.uniform2uiv(this.addr,e),vn(n,e)}}function y1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;o.uniform3uiv(this.addr,e),vn(n,e)}}function S1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;o.uniform4uiv(this.addr,e),vn(n,e)}}function M1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(hv.compareFunction=Qv,c=hv):c=vx,n.setTexture2D(e||c,r)}function b1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||yx,r)}function E1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||Sx,r)}function T1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||xx,r)}function A1(o){switch(o){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return h1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return x1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}function R1(o,e){o.uniform1fv(this.addr,e)}function w1(o,e){const n=no(e,this.size,2);o.uniform2fv(this.addr,n)}function C1(o,e){const n=no(e,this.size,3);o.uniform3fv(this.addr,n)}function D1(o,e){const n=no(e,this.size,4);o.uniform4fv(this.addr,n)}function N1(o,e){const n=no(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function L1(o,e){const n=no(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function U1(o,e){const n=no(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function O1(o,e){o.uniform1iv(this.addr,e)}function P1(o,e){o.uniform2iv(this.addr,e)}function I1(o,e){o.uniform3iv(this.addr,e)}function B1(o,e){o.uniform4iv(this.addr,e)}function F1(o,e){o.uniform1uiv(this.addr,e)}function z1(o,e){o.uniform2uiv(this.addr,e)}function H1(o,e){o.uniform3uiv(this.addr,e)}function G1(o,e){o.uniform4uiv(this.addr,e)}function V1(o,e,n){const a=this.cache,r=e.length,c=bu(n,r);_n(a,c)||(o.uniform1iv(this.addr,c),vn(a,c));for(let u=0;u!==r;++u)n.setTexture2D(e[u]||vx,c[u])}function k1(o,e,n){const a=this.cache,r=e.length,c=bu(n,r);_n(a,c)||(o.uniform1iv(this.addr,c),vn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||yx,c[u])}function X1(o,e,n){const a=this.cache,r=e.length,c=bu(n,r);_n(a,c)||(o.uniform1iv(this.addr,c),vn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||Sx,c[u])}function W1(o,e,n){const a=this.cache,r=e.length,c=bu(n,r);_n(a,c)||(o.uniform1iv(this.addr,c),vn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||xx,c[u])}function j1(o){switch(o){case 5126:return R1;case 35664:return w1;case 35665:return C1;case 35666:return D1;case 35674:return N1;case 35675:return L1;case 35676:return U1;case 5124:case 35670:return O1;case 35667:case 35671:return P1;case 35668:case 35672:return I1;case 35669:case 35673:return B1;case 5125:return F1;case 36294:return z1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return W1}}class Y1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=A1(n.type)}}class q1{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=j1(n.type)}}class K1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const h=r[c];h.setValue(e,n[h.id],a)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function vv(o,e){o.seq.push(e),o.map[e.id]=e}function Z1(o,e,n){const a=o.name,r=a.length;for(hd.lastIndex=0;;){const c=hd.exec(a),u=hd.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===r){vv(n,p===void 0?new Y1(h,o,e):new q1(h,o,e));break}else{let _=n.map[h];_===void 0&&(_=new K1(h),vv(n,_)),n=_}}}class du{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const c=e.getActiveUniform(n,r),u=e.getUniformLocation(n,c.name);Z1(c,u,this)}}setValue(e,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let c=0,u=n.length;c!==u;++c){const h=n[c],d=a[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,c=e.length;r!==c;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function xv(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const Q1=37297;let J1=0;function $1(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=r;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const yv=new ft;function eR(o){At._getMatrix(yv,At.workingColorSpace,o);const e=`mat3( ${yv.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(o)){case mu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Sv(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(a&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+r+`

`+$1(o.getShaderSource(e),u)}else return r}function tR(o,e){const n=eR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nR(o,e){let n;switch(e){case oM:n="Linear";break;case lM:n="Reinhard";break;case cM:n="Cineon";break;case uM:n="ACESFilmic";break;case hM:n="AgX";break;case dM:n="Neutral";break;case fM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const su=new j;function iR(){At.getLuminanceCoefficients(su);const o=su.x.toFixed(4),e=su.y.toFixed(4),n=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function sR(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function rR(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(e,r),u=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:h}}return n}function ll(o){return o!==""}function Mv(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(o){return o.replace(oR,cR)}const lR=new Map;function cR(o,e){let n=dt[e];if(n===void 0){const a=lR.get(e);if(a!==void 0)n=dt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return ap(n)}const uR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(o){return o.replace(uR,fR)}function fR(o,e,n,a){let r="";for(let c=parseInt(e);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function Tv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Fv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===HS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===va&&(e="SHADOWMAP_TYPE_VSM"),e}function dR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Wr:case jr:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function mR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case zv:e="ENVMAP_BLENDING_MULTIPLY";break;case sM:e="ENVMAP_BLENDING_MIX";break;case rM:e="ENVMAP_BLENDING_ADD";break}return e}function gR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function _R(o,e,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=hR(n),p=dR(n),g=pR(n),_=mR(n),v=gR(n),y=aR(n),b=sR(c),E=r.createProgram();let S,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ll).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ll).join(`
`),x.length>0&&(x+=`
`)):(S=[Tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),x=[Tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cs?"#define TONE_MAPPING":"",n.toneMapping!==cs?dt.tonemapping_pars_fragment:"",n.toneMapping!==cs?nR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,tR("linearToOutputTexel",n.outputColorSpace),iR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ll).join(`
`)),u=ap(u),u=Mv(u,n),u=bv(u,n),h=ap(h),h=Mv(h,n),h=bv(h,n),u=Ev(u),h=Ev(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=U+S+u,C=U+x+h,F=xv(r,r.VERTEX_SHADER,D),G=xv(r,r.FRAGMENT_SHADER,C);r.attachShader(E,F),r.attachShader(E,G),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(z){if(o.debug.checkShaderErrors){const le=r.getProgramInfoLog(E).trim(),ae=r.getShaderInfoLog(F).trim(),_e=r.getShaderInfoLog(G).trim();let he=!0,B=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,E,F,G);else{const J=Sv(r,F,"vertex"),K=Sv(r,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+le+`
`+J+`
`+K)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ae===""||_e==="")&&(B=!1);B&&(z.diagnostics={runnable:he,programLog:le,vertexShader:{log:ae,prefix:S},fragmentShader:{log:_e,prefix:x}})}r.deleteShader(F),r.deleteShader(G),X=new du(r,E),N=rR(r,E)}let X;this.getUniforms=function(){return X===void 0&&P(this),X};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(E,Q1)),R},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=J1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=F,this.fragmentShader=G,this}let vR=0;class xR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new yR(e),n.set(e,a)),a}}class yR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function SR(o,e,n,a,r,c,u){const h=new tx,d=new xR,p=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(N){return p.add(N),N===0?"uv":`uv${N}`}function S(N,R,z,le,ae){const _e=le.fog,he=ae.geometry,B=N.isMeshStandardMaterial?le.environment:null,J=(N.isMeshStandardMaterial?n:e).get(N.envMap||B),K=J&&J.mapping===yu?J.image.height:null,be=b[N.type];N.precision!==null&&(y=r.getMaxPrecision(N.precision),y!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",y,"instead."));const L=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Y=L!==void 0?L.length:0;let pe=0;he.morphAttributes.position!==void 0&&(pe=1),he.morphAttributes.normal!==void 0&&(pe=2),he.morphAttributes.color!==void 0&&(pe=3);let Me,W,ce,Se;if(be){const Ct=Bi[be];Me=Ct.vertexShader,W=Ct.fragmentShader}else Me=N.vertexShader,W=N.fragmentShader,d.update(N),ce=d.getVertexShaderID(N),Se=d.getFragmentShaderID(N);const ve=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),Je=ae.isInstancedMesh===!0,je=ae.isBatchedMesh===!0,Nt=!!N.map,Rt=!!N.matcap,lt=!!J,H=!!N.aoMap,an=!!N.lightMap,Et=!!N.bumpMap,ct=!!N.normalMap,Ge=!!N.displacementMap,St=!!N.emissiveMap,Ke=!!N.metalnessMap,st=!!N.roughnessMap,sn=N.anisotropy>0,O=N.clearcoat>0,T=N.dispersion>0,ne=N.iridescence>0,de=N.sheen>0,ge=N.transmission>0,ue=sn&&!!N.anisotropyMap,Pe=O&&!!N.clearcoatMap,Ne=O&&!!N.clearcoatNormalMap,Ve=O&&!!N.clearcoatRoughnessMap,ke=ne&&!!N.iridescenceMap,Ee=ne&&!!N.iridescenceThicknessMap,Ie=de&&!!N.sheenColorMap,Ye=de&&!!N.sheenRoughnessMap,qe=!!N.specularMap,Ce=!!N.specularColorMap,at=!!N.specularIntensityMap,k=ge&&!!N.transmissionMap,Le=ge&&!!N.thicknessMap,Te=!!N.gradientMap,Be=!!N.alphaMap,Re=N.alphaTest>0,ye=!!N.alphaHash,ze=!!N.extensions;let it=cs;N.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=o.toneMapping);const It={shaderID:be,shaderType:N.type,shaderName:N.name,vertexShader:Me,fragmentShader:W,defines:N.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:y,batching:je,batchingColor:je&&ae._colorsTexture!==null,instancing:Je,instancingColor:Je&&ae.instanceColor!==null,instancingMorph:Je&&ae.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Xn,alphaToCoverage:!!N.alphaToCoverage,map:Nt,matcap:Rt,envMap:lt,envMapMode:lt&&J.mapping,envMapCubeUVHeight:K,aoMap:H,lightMap:an,bumpMap:Et,normalMap:ct,displacementMap:v&&Ge,emissiveMap:St,normalMapObjectSpace:ct&&N.normalMapType===xM,normalMapTangentSpace:ct&&N.normalMapType===Zv,metalnessMap:Ke,roughnessMap:st,anisotropy:sn,anisotropyMap:ue,clearcoat:O,clearcoatMap:Pe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ve,dispersion:T,iridescence:ne,iridescenceMap:ke,iridescenceThicknessMap:Ee,sheen:de,sheenColorMap:Ie,sheenRoughnessMap:Ye,specularMap:qe,specularColorMap:Ce,specularIntensityMap:at,transmission:ge,transmissionMap:k,thicknessMap:Le,gradientMap:Te,opaque:N.transparent===!1&&N.blending===Hr&&N.alphaToCoverage===!1,alphaMap:Be,alphaTest:Re,alphaHash:ye,combine:N.combine,mapUv:Nt&&E(N.map.channel),aoMapUv:H&&E(N.aoMap.channel),lightMapUv:an&&E(N.lightMap.channel),bumpMapUv:Et&&E(N.bumpMap.channel),normalMapUv:ct&&E(N.normalMap.channel),displacementMapUv:Ge&&E(N.displacementMap.channel),emissiveMapUv:St&&E(N.emissiveMap.channel),metalnessMapUv:Ke&&E(N.metalnessMap.channel),roughnessMapUv:st&&E(N.roughnessMap.channel),anisotropyMapUv:ue&&E(N.anisotropyMap.channel),clearcoatMapUv:Pe&&E(N.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&E(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&E(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&E(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&E(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&E(N.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&E(N.sheenRoughnessMap.channel),specularMapUv:qe&&E(N.specularMap.channel),specularColorMapUv:Ce&&E(N.specularColorMap.channel),specularIntensityMapUv:at&&E(N.specularIntensityMap.channel),transmissionMapUv:k&&E(N.transmissionMap.channel),thicknessMapUv:Le&&E(N.thicknessMap.channel),alphaMapUv:Be&&E(N.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ct||sn),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!he.attributes.uv&&(Nt||Be),fog:!!_e,useFog:N.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:ae.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:Nt&&N.map.isVideoTexture===!0&&At.getTransfer(N.map.colorSpace)===Xt,decodeVideoTextureEmissive:St&&N.emissiveMap.isVideoTexture===!0&&At.getTransfer(N.emissiveMap.colorSpace)===Xt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Fi,flipSided:N.side===Qn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ze&&N.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&N.extensions.multiDraw===!0||je)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function x(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const z in N.defines)R.push(z),R.push(N.defines[z]);return N.isRawShaderMaterial===!1&&(U(R,N),D(R,N),R.push(o.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function U(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function D(N,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),N.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),N.push(h.mask)}function C(N){const R=b[N.type];let z;if(R){const le=Bi[R];z=fb.clone(le.uniforms)}else z=N.uniforms;return z}function F(N,R){let z;for(let le=0,ae=g.length;le<ae;le++){const _e=g[le];if(_e.cacheKey===R){z=_e,++z.usedTimes;break}}return z===void 0&&(z=new _R(o,R,N,c),g.push(z)),z}function G(N){if(--N.usedTimes===0){const R=g.indexOf(N);g[R]=g[g.length-1],g.pop(),N.destroy()}}function P(N){d.remove(N)}function X(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:F,releaseProgram:G,releaseShaderCache:P,programs:g,dispose:X}}function MR(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function a(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:c}}function bR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Av(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Rv(){const o=[];let e=0;const n=[],a=[],r=[];function c(){e=0,n.length=0,a.length=0,r.length=0}function u(_,v,y,b,E,S){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:b,renderOrder:_.renderOrder,z:E,group:S},o[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=E,x.group=S),e++,x}function h(_,v,y,b,E,S){const x=u(_,v,y,b,E,S);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function d(_,v,y,b,E,S){const x=u(_,v,y,b,E,S);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function p(_,v){n.length>1&&n.sort(_||bR),a.length>1&&a.sort(v||Av),r.length>1&&r.sort(v||Av)}function g(){for(let _=e,v=o.length;_<v;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:h,unshift:d,finish:g,sort:p}}function ER(){let o=new WeakMap;function e(a,r){const c=o.get(a);let u;return c===void 0?(u=new Rv,o.set(a,[u])):r>=c.length?(u=new Rv,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function TR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new ot};break;case"SpotLight":n={position:new j,direction:new j,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=n,n}}}function AR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let RR=0;function wR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function CR(o){const e=new TR,n=AR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new j);const r=new j,c=new ht,u=new ht;function h(p){let g=0,_=0,v=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let y=0,b=0,E=0,S=0,x=0,U=0,D=0,C=0,F=0,G=0,P=0;p.sort(wR);for(let N=0,R=p.length;N<R;N++){const z=p[N],le=z.color,ae=z.intensity,_e=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=le.r*ae,_+=le.g*ae,v+=le.b*ae;else if(z.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(z.sh.coefficients[B],ae);P++}else if(z.isDirectionalLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const J=z.shadow,K=n.get(z);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,a.directionalShadow[y]=K,a.directionalShadowMap[y]=he,a.directionalShadowMatrix[y]=z.shadow.matrix,U++}a.directional[y]=B,y++}else if(z.isSpotLight){const B=e.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(le).multiplyScalar(ae),B.distance=_e,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,a.spot[E]=B;const J=z.shadow;if(z.map&&(a.spotLightMap[F]=z.map,F++,J.updateMatrices(z),z.castShadow&&G++),a.spotLightMatrix[E]=J.matrix,z.castShadow){const K=n.get(z);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,a.spotShadow[E]=K,a.spotShadowMap[E]=he,C++}E++}else if(z.isRectAreaLight){const B=e.get(z);B.color.copy(le).multiplyScalar(ae),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),a.rectArea[S]=B,S++}else if(z.isPointLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity),B.distance=z.distance,B.decay=z.decay,z.castShadow){const J=z.shadow,K=n.get(z);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,a.pointShadow[b]=K,a.pointShadowMap[b]=he,a.pointShadowMatrix[b]=z.shadow.matrix,D++}a.point[b]=B,b++}else if(z.isHemisphereLight){const B=e.get(z);B.skyColor.copy(z.color).multiplyScalar(ae),B.groundColor.copy(z.groundColor).multiplyScalar(ae),a.hemi[x]=B,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ue.LTC_FLOAT_1,a.rectAreaLTC2=Ue.LTC_FLOAT_2):(a.rectAreaLTC1=Ue.LTC_HALF_1,a.rectAreaLTC2=Ue.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==y||X.pointLength!==b||X.spotLength!==E||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==U||X.numPointShadows!==D||X.numSpotShadows!==C||X.numSpotMaps!==F||X.numLightProbes!==P)&&(a.directional.length=y,a.spot.length=E,a.rectArea.length=S,a.point.length=b,a.hemi.length=x,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=C+F-G,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=G,a.numLightProbes=P,X.directionalLength=y,X.pointLength=b,X.spotLength=E,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=U,X.numPointShadows=D,X.numSpotShadows=C,X.numSpotMaps=F,X.numLightProbes=P,a.version=RR++)}function d(p,g){let _=0,v=0,y=0,b=0,E=0;const S=g.matrixWorldInverse;for(let x=0,U=p.length;x<U;x++){const D=p[x];if(D.isDirectionalLight){const C=a.directional[_];C.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),_++}else if(D.isSpotLight){const C=a.spot[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const C=a.rectArea[b];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),u.identity(),c.copy(D.matrixWorld),c.premultiply(S),u.extractRotation(c),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const C=a.hemi[E];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:h,setupView:d,state:a}}function wv(o){const e=new CR(o),n=[],a=[];function r(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){e.setup(n)}function d(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function DR(o){let e=new WeakMap;function n(r,c=0){const u=e.get(r);let h;return u===void 0?(h=new wv(o),e.set(r,[h])):c>=u.length?(h=new wv(o),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UR(o,e,n){let a=new yp;const r=new rt,c=new rt,u=new Ot,h=new Cb({depthPacking:vM}),d=new Db,p={},g=n.maxTextureSize,_={[Ea]:Qn,[Qn]:Ea,[Fi]:Fi},v=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:NR,fragmentShader:LR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new Wi;b.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ci(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fv;let x=this.type;this.render=function(G,P,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const N=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),le=o.state;le.setBlending(ls),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ae=x!==va&&this.type===va,_e=x===va&&this.type!==va;for(let he=0,B=G.length;he<B;he++){const J=G[he],K=J.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const be=K.getFrameExtents();if(r.multiply(be),c.copy(K.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(c.x=Math.floor(g/be.x),r.x=c.x*be.x,K.mapSize.x=c.x),r.y>g&&(c.y=Math.floor(g/be.y),r.y=c.y*be.y,K.mapSize.y=c.y)),K.map===null||ae===!0||_e===!0){const Y=this.type!==va?{minFilter:Vn,magFilter:Vn}:{};K.map!==null&&K.map.dispose(),K.map=new ks(r.x,r.y,Y),K.map.texture.name=J.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const L=K.getViewportCount();for(let Y=0;Y<L;Y++){const pe=K.getViewport(Y);u.set(c.x*pe.x,c.y*pe.y,c.x*pe.z,c.y*pe.w),le.viewport(u),K.updateMatrices(J,Y),a=K.getFrustum(),C(P,X,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===va&&U(K,X),K.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(N,R,z)};function U(G,P){const X=e.update(E);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new ks(r.x,r.y)),v.uniforms.shadow_pass.value=G.map.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(P,null,X,v,E,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(P,null,X,y,E,null)}function D(G,P,X,N){let R=null;const z=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(z!==void 0)R=z;else if(R=X.isPointLight===!0?d:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const le=R.uuid,ae=P.uuid;let _e=p[le];_e===void 0&&(_e={},p[le]=_e);let he=_e[ae];he===void 0&&(he=R.clone(),_e[ae]=he,P.addEventListener("dispose",F)),R=he}if(R.visible=P.visible,R.wireframe=P.wireframe,N===va?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:_[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=o.properties.get(R);le.light=X}return R}function C(G,P,X,N,R){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===va)&&(!G.frustumCulled||a.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const ae=e.update(G),_e=G.material;if(Array.isArray(_e)){const he=ae.groups;for(let B=0,J=he.length;B<J;B++){const K=he[B],be=_e[K.materialIndex];if(be&&be.visible){const L=D(G,be,N,R);G.onBeforeShadow(o,G,P,X,ae,L,K),o.renderBufferDirect(X,null,ae,L,G,K),G.onAfterShadow(o,G,P,X,ae,L,K)}}}else if(_e.visible){const he=D(G,_e,N,R);G.onBeforeShadow(o,G,P,X,ae,he,null),o.renderBufferDirect(X,null,ae,he,G,null),G.onAfterShadow(o,G,P,X,ae,he,null)}}const le=G.children;for(let ae=0,_e=le.length;ae<_e;ae++)C(le[ae],P,X,N,R)}function F(G){G.target.removeEventListener("dispose",F);for(const X in p){const N=p[X],R=G.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const OR={[xd]:yd,[Sd]:Ed,[Md]:Td,[Xr]:bd,[yd]:xd,[Ed]:Sd,[Td]:Md,[bd]:Xr};function PR(o,e){function n(){let k=!1;const Le=new Ot;let Te=null;const Be=new Ot(0,0,0,0);return{setMask:function(Re){Te!==Re&&!k&&(o.colorMask(Re,Re,Re,Re),Te=Re)},setLocked:function(Re){k=Re},setClear:function(Re,ye,ze,it,It){It===!0&&(Re*=it,ye*=it,ze*=it),Le.set(Re,ye,ze,it),Be.equals(Le)===!1&&(o.clearColor(Re,ye,ze,it),Be.copy(Le))},reset:function(){k=!1,Te=null,Be.set(-1,0,0,0)}}}function a(){let k=!1,Le=!1,Te=null,Be=null,Re=null;return{setReversed:function(ye){if(Le!==ye){const ze=e.get("EXT_clip_control");ye?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Le=ye;const it=Re;Re=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(ye){ye?ve(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(ye){Te!==ye&&!k&&(o.depthMask(ye),Te=ye)},setFunc:function(ye){if(Le&&(ye=OR[ye]),Be!==ye){switch(ye){case xd:o.depthFunc(o.NEVER);break;case yd:o.depthFunc(o.ALWAYS);break;case Sd:o.depthFunc(o.LESS);break;case Xr:o.depthFunc(o.LEQUAL);break;case Md:o.depthFunc(o.EQUAL);break;case bd:o.depthFunc(o.GEQUAL);break;case Ed:o.depthFunc(o.GREATER);break;case Td:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Re!==ye&&(Le&&(ye=1-ye),o.clearDepth(ye),Re=ye)},reset:function(){k=!1,Te=null,Be=null,Re=null,Le=!1}}}function r(){let k=!1,Le=null,Te=null,Be=null,Re=null,ye=null,ze=null,it=null,It=null;return{setTest:function(Ct){k||(Ct?ve(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(Ct){Le!==Ct&&!k&&(o.stencilMask(Ct),Le=Ct)},setFunc:function(Ct,Jn,xn){(Te!==Ct||Be!==Jn||Re!==xn)&&(o.stencilFunc(Ct,Jn,xn),Te=Ct,Be=Jn,Re=xn)},setOp:function(Ct,Jn,xn){(ye!==Ct||ze!==Jn||it!==xn)&&(o.stencilOp(Ct,Jn,xn),ye=Ct,ze=Jn,it=xn)},setLocked:function(Ct){k=Ct},setClear:function(Ct){It!==Ct&&(o.clearStencil(Ct),It=Ct)},reset:function(){k=!1,Le=null,Te=null,Be=null,Re=null,ye=null,ze=null,it=null,It=null}}}const c=new n,u=new a,h=new r,d=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],b=null,E=!1,S=null,x=null,U=null,D=null,C=null,F=null,G=null,P=new ot(0,0,0),X=0,N=!1,R=null,z=null,le=null,ae=null,_e=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=J>=1):K.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=J>=2);let be=null,L={};const Y=o.getParameter(o.SCISSOR_BOX),pe=o.getParameter(o.VIEWPORT),Me=new Ot().fromArray(Y),W=new Ot().fromArray(pe);function ce(k,Le,Te,Be){const Re=new Uint8Array(4),ye=o.createTexture();o.bindTexture(k,ye),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ze=0;ze<Te;ze++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,Re):o.texImage2D(Le+ze,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Re);return ye}const Se={};Se[o.TEXTURE_2D]=ce(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=ce(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=ce(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=ce(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ve(o.DEPTH_TEST),u.setFunc(Xr),Et(!1),ct(f_),ve(o.CULL_FACE),H(ls);function ve(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function we(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function Je(k,Le){return _[k]!==Le?(o.bindFramebuffer(k,Le),_[k]=Le,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Le),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function je(k,Le){let Te=y,Be=!1;if(k){Te=v.get(Le),Te===void 0&&(Te=[],v.set(Le,Te));const Re=k.textures;if(Te.length!==Re.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let ye=0,ze=Re.length;ye<ze;ye++)Te[ye]=o.COLOR_ATTACHMENT0+ye;Te.length=Re.length,Be=!0}}else Te[0]!==o.BACK&&(Te[0]=o.BACK,Be=!0);Be&&o.drawBuffers(Te)}function Nt(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Rt={[Fs]:o.FUNC_ADD,[VS]:o.FUNC_SUBTRACT,[kS]:o.FUNC_REVERSE_SUBTRACT};Rt[XS]=o.MIN,Rt[WS]=o.MAX;const lt={[jS]:o.ZERO,[YS]:o.ONE,[qS]:o.SRC_COLOR,[_d]:o.SRC_ALPHA,[eM]:o.SRC_ALPHA_SATURATE,[JS]:o.DST_COLOR,[ZS]:o.DST_ALPHA,[KS]:o.ONE_MINUS_SRC_COLOR,[vd]:o.ONE_MINUS_SRC_ALPHA,[$S]:o.ONE_MINUS_DST_COLOR,[QS]:o.ONE_MINUS_DST_ALPHA,[tM]:o.CONSTANT_COLOR,[nM]:o.ONE_MINUS_CONSTANT_COLOR,[iM]:o.CONSTANT_ALPHA,[aM]:o.ONE_MINUS_CONSTANT_ALPHA};function H(k,Le,Te,Be,Re,ye,ze,it,It,Ct){if(k===ls){E===!0&&(we(o.BLEND),E=!1);return}if(E===!1&&(ve(o.BLEND),E=!0),k!==GS){if(k!==S||Ct!==N){if((x!==Fs||C!==Fs)&&(o.blendEquation(o.FUNC_ADD),x=Fs,C=Fs),Ct)switch(k){case Hr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case h_:o.blendFunc(o.ONE,o.ONE);break;case d_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case p_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Hr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case h_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case d_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case p_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}U=null,D=null,F=null,G=null,P.set(0,0,0),X=0,S=k,N=Ct}return}Re=Re||Le,ye=ye||Te,ze=ze||Be,(Le!==x||Re!==C)&&(o.blendEquationSeparate(Rt[Le],Rt[Re]),x=Le,C=Re),(Te!==U||Be!==D||ye!==F||ze!==G)&&(o.blendFuncSeparate(lt[Te],lt[Be],lt[ye],lt[ze]),U=Te,D=Be,F=ye,G=ze),(it.equals(P)===!1||It!==X)&&(o.blendColor(it.r,it.g,it.b,It),P.copy(it),X=It),S=k,N=!1}function an(k,Le){k.side===Fi?we(o.CULL_FACE):ve(o.CULL_FACE);let Te=k.side===Qn;Le&&(Te=!Te),Et(Te),k.blending===Hr&&k.transparent===!1?H(ls):H(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Be=k.stencilWrite;h.setTest(Be),Be&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),St(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function Et(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function ct(k){k!==FS?(ve(o.CULL_FACE),k!==z&&(k===f_?o.cullFace(o.BACK):k===zS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),z=k}function Ge(k){k!==le&&(B&&o.lineWidth(k),le=k)}function St(k,Le,Te){k?(ve(o.POLYGON_OFFSET_FILL),(ae!==Le||_e!==Te)&&(o.polygonOffset(Le,Te),ae=Le,_e=Te)):we(o.POLYGON_OFFSET_FILL)}function Ke(k){k?ve(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function st(k){k===void 0&&(k=o.TEXTURE0+he-1),be!==k&&(o.activeTexture(k),be=k)}function sn(k,Le,Te){Te===void 0&&(be===null?Te=o.TEXTURE0+he-1:Te=be);let Be=L[Te];Be===void 0&&(Be={type:void 0,texture:void 0},L[Te]=Be),(Be.type!==k||Be.texture!==Le)&&(be!==Te&&(o.activeTexture(Te),be=Te),o.bindTexture(k,Le||Se[k]),Be.type=k,Be.texture=Le)}function O(){const k=L[be];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(k){Me.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function Ye(k){W.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),W.copy(k))}function qe(k,Le){let Te=p.get(Le);Te===void 0&&(Te=new WeakMap,p.set(Le,Te));let Be=Te.get(k);Be===void 0&&(Be=o.getUniformBlockIndex(Le,k.name),Te.set(k,Be))}function Ce(k,Le){const Be=p.get(Le).get(k);d.get(Le)!==Be&&(o.uniformBlockBinding(Le,Be,k.__bindingPointIndex),d.set(Le,Be))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},be=null,L={},_={},v=new WeakMap,y=[],b=null,E=!1,S=null,x=null,U=null,D=null,C=null,F=null,G=null,P=new ot(0,0,0),X=0,N=!1,R=null,z=null,le=null,ae=null,_e=null,Me.set(0,0,o.canvas.width,o.canvas.height),W.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ve,disable:we,bindFramebuffer:Je,drawBuffers:je,useProgram:Nt,setBlending:H,setMaterial:an,setFlipSided:Et,setCullFace:ct,setLineWidth:Ge,setPolygonOffset:St,setScissorTest:Ke,activeTexture:st,bindTexture:sn,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:ne,texImage2D:ke,texImage3D:Ee,updateUBOMapping:qe,uniformBlockBinding:Ce,texStorage2D:Ne,texStorage3D:Ve,texSubImage2D:de,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:Pe,scissor:Ie,viewport:Ye,reset:at}}function IR(o,e,n,a,r,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new rt,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,T){return y?new OffscreenCanvas(O,T):vl("canvas")}function E(O,T,ne){let de=1;const ge=sn(O);if((ge.width>ne||ge.height>ne)&&(de=ne/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ue=Math.floor(de*ge.width),Pe=Math.floor(de*ge.height);_===void 0&&(_=b(ue,Pe));const Ne=T?b(ue,Pe):_;return Ne.width=ue,Ne.height=Pe,Ne.getContext("2d").drawImage(O,0,0,ue,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+Pe+")."),Ne}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){o.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(O,T,ne,de,ge=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ue=T;if(T===o.RED&&(ne===o.FLOAT&&(ue=o.R32F),ne===o.HALF_FLOAT&&(ue=o.R16F),ne===o.UNSIGNED_BYTE&&(ue=o.R8)),T===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ue=o.R8UI),ne===o.UNSIGNED_SHORT&&(ue=o.R16UI),ne===o.UNSIGNED_INT&&(ue=o.R32UI),ne===o.BYTE&&(ue=o.R8I),ne===o.SHORT&&(ue=o.R16I),ne===o.INT&&(ue=o.R32I)),T===o.RG&&(ne===o.FLOAT&&(ue=o.RG32F),ne===o.HALF_FLOAT&&(ue=o.RG16F),ne===o.UNSIGNED_BYTE&&(ue=o.RG8)),T===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ue=o.RG8UI),ne===o.UNSIGNED_SHORT&&(ue=o.RG16UI),ne===o.UNSIGNED_INT&&(ue=o.RG32UI),ne===o.BYTE&&(ue=o.RG8I),ne===o.SHORT&&(ue=o.RG16I),ne===o.INT&&(ue=o.RG32I)),T===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),ne===o.UNSIGNED_INT&&(ue=o.RGB32UI),ne===o.BYTE&&(ue=o.RGB8I),ne===o.SHORT&&(ue=o.RGB16I),ne===o.INT&&(ue=o.RGB32I)),T===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),ne===o.UNSIGNED_INT&&(ue=o.RGBA32UI),ne===o.BYTE&&(ue=o.RGBA8I),ne===o.SHORT&&(ue=o.RGBA16I),ne===o.INT&&(ue=o.RGBA32I)),T===o.RGB&&ne===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),T===o.RGBA){const Pe=ge?mu:At.getTransfer(de);ne===o.FLOAT&&(ue=o.RGBA32F),ne===o.HALF_FLOAT&&(ue=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(ue=Pe===Xt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(O,T){let ne;return O?T===null||T===Vs||T===dl?ne=o.DEPTH24_STENCIL8:T===wi?ne=o.DEPTH32F_STENCIL8:T===hl&&(ne=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Vs||T===dl?ne=o.DEPTH_COMPONENT24:T===wi?ne=o.DEPTH_COMPONENT32F:T===hl&&(ne=o.DEPTH_COMPONENT16),ne}function F(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Vn&&O.minFilter!==li?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function G(O){const T=O.target;T.removeEventListener("dispose",G),X(T),T.isVideoTexture&&g.delete(T)}function P(O){const T=O.target;T.removeEventListener("dispose",P),R(T)}function X(O){const T=a.get(O);if(T.__webglInit===void 0)return;const ne=O.source,de=v.get(ne);if(de){const ge=de[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&N(O),Object.keys(de).length===0&&v.delete(ne)}a.remove(O)}function N(O){const T=a.get(O);o.deleteTexture(T.__webglTexture);const ne=O.source,de=v.get(ne);delete de[T.__cacheKey],u.memory.textures--}function R(O){const T=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let ge=0;ge<T.__webglFramebuffer[de].length;ge++)o.deleteFramebuffer(T.__webglFramebuffer[de][ge]);else o.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)o.deleteFramebuffer(T.__webglFramebuffer[de]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ne=O.textures;for(let de=0,ge=ne.length;de<ge;de++){const ue=a.get(ne[de]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),u.memory.textures--),a.remove(ne[de])}a.remove(O)}let z=0;function le(){z=0}function ae(){const O=z;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),z+=1,O}function _e(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function he(O,T){const ne=a.get(O);if(O.isVideoTexture&&Ke(O),O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){const de=O.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(ne,O,T);return}}n.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+T)}function B(O,T){const ne=a.get(O);if(O.version>0&&ne.__version!==O.version){Se(ne,O,T);return}n.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+T)}function J(O,T){const ne=a.get(O);if(O.version>0&&ne.__version!==O.version){Se(ne,O,T);return}n.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+T)}function K(O,T){const ne=a.get(O);if(O.version>0&&ne.__version!==O.version){ve(ne,O,T);return}n.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+T)}const be={[Yr]:o.REPEAT,[rs]:o.CLAMP_TO_EDGE,[pu]:o.MIRRORED_REPEAT},L={[Vn]:o.NEAREST,[Gv]:o.NEAREST_MIPMAP_NEAREST,[ol]:o.NEAREST_MIPMAP_LINEAR,[li]:o.LINEAR,[ou]:o.LINEAR_MIPMAP_NEAREST,[ya]:o.LINEAR_MIPMAP_LINEAR},Y={[yM]:o.NEVER,[AM]:o.ALWAYS,[SM]:o.LESS,[Qv]:o.LEQUAL,[MM]:o.EQUAL,[TM]:o.GEQUAL,[bM]:o.GREATER,[EM]:o.NOTEQUAL};function pe(O,T){if(T.type===wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===li||T.magFilter===ou||T.magFilter===ol||T.magFilter===ya||T.minFilter===li||T.minFilter===ou||T.minFilter===ol||T.minFilter===ya)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,be[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,be[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,be[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,L[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Y[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Vn||T.minFilter!==ol&&T.minFilter!==ya||T.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Me(O,T){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",G));const de=T.source;let ge=v.get(de);ge===void 0&&(ge={},v.set(de,ge));const ue=_e(T);if(ue!==O.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),ge[ue].usedTimes++;const Pe=ge[O.__cacheKey];Pe!==void 0&&(ge[O.__cacheKey].usedTimes--,Pe.usedTimes===0&&N(T)),O.__cacheKey=ue,O.__webglTexture=ge[ue].texture}return ne}function W(O,T,ne){return Math.floor(Math.floor(O/ne)/T)}function ce(O,T,ne,de){const ue=O.updateRanges;if(ue.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,ne,de,T.data);else{ue.sort((Ee,Ie)=>Ee.start-Ie.start);let Pe=0;for(let Ee=1;Ee<ue.length;Ee++){const Ie=ue[Pe],Ye=ue[Ee],qe=Ie.start+Ie.count,Ce=W(Ye.start,T.width,4),at=W(Ie.start,T.width,4);Ye.start<=qe+1&&Ce===at&&W(Ye.start+Ye.count-1,T.width,4)===Ce?Ie.count=Math.max(Ie.count,Ye.start+Ye.count-Ie.start):(++Pe,ue[Pe]=Ye)}ue.length=Pe+1;const Ne=o.getParameter(o.UNPACK_ROW_LENGTH),Ve=o.getParameter(o.UNPACK_SKIP_PIXELS),ke=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Ie=ue.length;Ee<Ie;Ee++){const Ye=ue[Ee],qe=Math.floor(Ye.start/4),Ce=Math.ceil(Ye.count/4),at=qe%T.width,k=Math.floor(qe/T.width),Le=Ce,Te=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,at),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),n.texSubImage2D(o.TEXTURE_2D,0,at,k,Le,Te,ne,de,T.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ne),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ve),o.pixelStorei(o.UNPACK_SKIP_ROWS,ke)}}function Se(O,T,ne){let de=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=o.TEXTURE_3D);const ge=Me(O,T),ue=T.source;n.bindTexture(de,O.__webglTexture,o.TEXTURE0+ne);const Pe=a.get(ue);if(ue.version!==Pe.__version||ge===!0){n.activeTexture(o.TEXTURE0+ne);const Ne=At.getPrimaries(At.workingColorSpace),Ve=T.colorSpace===ss?null:At.getPrimaries(T.colorSpace),ke=T.colorSpace===ss||Ne===Ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Ee=E(T.image,!1,r.maxTextureSize);Ee=st(T,Ee);const Ie=c.convert(T.format,T.colorSpace),Ye=c.convert(T.type);let qe=D(T.internalFormat,Ie,Ye,T.colorSpace,T.isVideoTexture);pe(de,T);let Ce;const at=T.mipmaps,k=T.isVideoTexture!==!0,Le=Pe.__version===void 0||ge===!0,Te=ue.dataReady,Be=F(T,Ee);if(T.isDepthTexture)qe=C(T.format===ml,T.type),Le&&(k?n.texStorage2D(o.TEXTURE_2D,1,qe,Ee.width,Ee.height):n.texImage2D(o.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,Ie,Ye,null));else if(T.isDataTexture)if(at.length>0){k&&Le&&n.texStorage2D(o.TEXTURE_2D,Be,qe,at[0].width,at[0].height);for(let Re=0,ye=at.length;Re<ye;Re++)Ce=at[Re],k?Te&&n.texSubImage2D(o.TEXTURE_2D,Re,0,0,Ce.width,Ce.height,Ie,Ye,Ce.data):n.texImage2D(o.TEXTURE_2D,Re,qe,Ce.width,Ce.height,0,Ie,Ye,Ce.data);T.generateMipmaps=!1}else k?(Le&&n.texStorage2D(o.TEXTURE_2D,Be,qe,Ee.width,Ee.height),Te&&ce(T,Ee,Ie,Ye)):n.texImage2D(o.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,Ie,Ye,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Le&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Be,qe,at[0].width,at[0].height,Ee.depth);for(let Re=0,ye=at.length;Re<ye;Re++)if(Ce=at[Re],T.format!==xi)if(Ie!==null)if(k){if(Te)if(T.layerUpdates.size>0){const ze=av(Ce.width,Ce.height,T.format,T.type);for(const it of T.layerUpdates){const It=Ce.data.subarray(it*ze/Ce.data.BYTES_PER_ELEMENT,(it+1)*ze/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Re,0,0,it,Ce.width,Ce.height,1,Ie,It)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Re,0,0,0,Ce.width,Ce.height,Ee.depth,Ie,Ce.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Re,qe,Ce.width,Ce.height,Ee.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Te&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Re,0,0,0,Ce.width,Ce.height,Ee.depth,Ie,Ye,Ce.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Re,qe,Ce.width,Ce.height,Ee.depth,0,Ie,Ye,Ce.data)}else{k&&Le&&n.texStorage2D(o.TEXTURE_2D,Be,qe,at[0].width,at[0].height);for(let Re=0,ye=at.length;Re<ye;Re++)Ce=at[Re],T.format!==xi?Ie!==null?k?Te&&n.compressedTexSubImage2D(o.TEXTURE_2D,Re,0,0,Ce.width,Ce.height,Ie,Ce.data):n.compressedTexImage2D(o.TEXTURE_2D,Re,qe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Te&&n.texSubImage2D(o.TEXTURE_2D,Re,0,0,Ce.width,Ce.height,Ie,Ye,Ce.data):n.texImage2D(o.TEXTURE_2D,Re,qe,Ce.width,Ce.height,0,Ie,Ye,Ce.data)}else if(T.isDataArrayTexture)if(k){if(Le&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Be,qe,Ee.width,Ee.height,Ee.depth),Te)if(T.layerUpdates.size>0){const Re=av(Ee.width,Ee.height,T.format,T.type);for(const ye of T.layerUpdates){const ze=Ee.data.subarray(ye*Re/Ee.data.BYTES_PER_ELEMENT,(ye+1)*Re/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,Ie,Ye,ze)}T.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,Ye,Ee.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,qe,Ee.width,Ee.height,Ee.depth,0,Ie,Ye,Ee.data);else if(T.isData3DTexture)k?(Le&&n.texStorage3D(o.TEXTURE_3D,Be,qe,Ee.width,Ee.height,Ee.depth),Te&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,Ye,Ee.data)):n.texImage3D(o.TEXTURE_3D,0,qe,Ee.width,Ee.height,Ee.depth,0,Ie,Ye,Ee.data);else if(T.isFramebufferTexture){if(Le)if(k)n.texStorage2D(o.TEXTURE_2D,Be,qe,Ee.width,Ee.height);else{let Re=Ee.width,ye=Ee.height;for(let ze=0;ze<Be;ze++)n.texImage2D(o.TEXTURE_2D,ze,qe,Re,ye,0,Ie,Ye,null),Re>>=1,ye>>=1}}else if(at.length>0){if(k&&Le){const Re=sn(at[0]);n.texStorage2D(o.TEXTURE_2D,Be,qe,Re.width,Re.height)}for(let Re=0,ye=at.length;Re<ye;Re++)Ce=at[Re],k?Te&&n.texSubImage2D(o.TEXTURE_2D,Re,0,0,Ie,Ye,Ce):n.texImage2D(o.TEXTURE_2D,Re,qe,Ie,Ye,Ce);T.generateMipmaps=!1}else if(k){if(Le){const Re=sn(Ee);n.texStorage2D(o.TEXTURE_2D,Be,qe,Re.width,Re.height)}Te&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ie,Ye,Ee)}else n.texImage2D(o.TEXTURE_2D,0,qe,Ie,Ye,Ee);S(T)&&x(de),Pe.__version=ue.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ve(O,T,ne){if(T.image.length!==6)return;const de=Me(O,T),ge=T.source;n.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ne);const ue=a.get(ge);if(ge.version!==ue.__version||de===!0){n.activeTexture(o.TEXTURE0+ne);const Pe=At.getPrimaries(At.workingColorSpace),Ne=T.colorSpace===ss?null:At.getPrimaries(T.colorSpace),Ve=T.colorSpace===ss||Pe===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Ie=[];for(let ye=0;ye<6;ye++)!ke&&!Ee?Ie[ye]=E(T.image[ye],!0,r.maxCubemapSize):Ie[ye]=Ee?T.image[ye].image:T.image[ye],Ie[ye]=st(T,Ie[ye]);const Ye=Ie[0],qe=c.convert(T.format,T.colorSpace),Ce=c.convert(T.type),at=D(T.internalFormat,qe,Ce,T.colorSpace),k=T.isVideoTexture!==!0,Le=ue.__version===void 0||de===!0,Te=ge.dataReady;let Be=F(T,Ye);pe(o.TEXTURE_CUBE_MAP,T);let Re;if(ke){k&&Le&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Be,at,Ye.width,Ye.height);for(let ye=0;ye<6;ye++){Re=Ie[ye].mipmaps;for(let ze=0;ze<Re.length;ze++){const it=Re[ze];T.format!==xi?qe!==null?k?Te&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,0,0,it.width,it.height,qe,it.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,at,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,0,0,it.width,it.height,qe,Ce,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze,at,it.width,it.height,0,qe,Ce,it.data)}}}else{if(Re=T.mipmaps,k&&Le){Re.length>0&&Be++;const ye=sn(Ie[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Be,at,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){k?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ie[ye].width,Ie[ye].height,qe,Ce,Ie[ye].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Ie[ye].width,Ie[ye].height,0,qe,Ce,Ie[ye].data);for(let ze=0;ze<Re.length;ze++){const It=Re[ze].image[ye].image;k?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,0,0,It.width,It.height,qe,Ce,It.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,at,It.width,It.height,0,qe,Ce,It.data)}}else{k?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,qe,Ce,Ie[ye]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,qe,Ce,Ie[ye]);for(let ze=0;ze<Re.length;ze++){const it=Re[ze];k?Te&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,0,0,qe,Ce,it.image[ye]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ze+1,at,qe,Ce,it.image[ye])}}}S(T)&&x(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function we(O,T,ne,de,ge,ue){const Pe=c.convert(ne.format,ne.colorSpace),Ne=c.convert(ne.type),Ve=D(ne.internalFormat,Pe,Ne,ne.colorSpace),ke=a.get(T),Ee=a.get(ne);if(Ee.__renderTarget=T,!ke.__hasExternalTextures){const Ie=Math.max(1,T.width>>ue),Ye=Math.max(1,T.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,ue,Ve,Ie,Ye,T.depth,0,Pe,Ne,null):n.texImage2D(ge,ue,Ve,Ie,Ye,0,Pe,Ne,null)}n.bindFramebuffer(o.FRAMEBUFFER,O),St(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,ge,Ee.__webglTexture,0,Ge(T)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,ge,Ee.__webglTexture,ue),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(O,T,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer){const de=T.depthTexture,ge=de&&de.isDepthTexture?de.type:null,ue=C(T.stencilBuffer,ge),Pe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=Ge(T);St(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ne,ue,T.width,T.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,ue,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ue,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pe,o.RENDERBUFFER,O)}else{const de=T.textures;for(let ge=0;ge<de.length;ge++){const ue=de[ge],Pe=c.convert(ue.format,ue.colorSpace),Ne=c.convert(ue.type),Ve=D(ue.internalFormat,Pe,Ne,ue.colorSpace),ke=Ge(T);ne&&St(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ke,Ve,T.width,T.height):St(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ke,Ve,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ve,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function je(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=a.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ge=de.__webglTexture,ue=Ge(T);if(T.depthTexture.format===pl)St(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(T.depthTexture.format===ml)St(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Nt(O){const T=a.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const de=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=de}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const de=O.texture.mipmaps;de&&de.length>0?je(T.__webglFramebuffer[0],O):je(T.__webglFramebuffer,O)}else if(ne){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=o.createRenderbuffer(),Je(T.__webglDepthbuffer[de],O,!1);else{const ge=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[de];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else{const de=O.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Je(T.__webglDepthbuffer,O,!1);else{const ge=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(O,T,ne){const de=a.get(O);T!==void 0&&we(de.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&Nt(O)}function lt(O){const T=O.texture,ne=a.get(O),de=a.get(T);O.addEventListener("dispose",P);const ge=O.textures,ue=O.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=T.version,u.memory.textures++),ue){ne.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer[Ne]=[];for(let Ve=0;Ve<T.mipmaps.length;Ve++)ne.__webglFramebuffer[Ne][Ve]=o.createFramebuffer()}else ne.__webglFramebuffer[Ne]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)ne.__webglFramebuffer[Ne]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Pe)for(let Ne=0,Ve=ge.length;Ne<Ve;Ne++){const ke=a.get(ge[Ne]);ke.__webglTexture===void 0&&(ke.__webglTexture=o.createTexture(),u.memory.textures++)}if(O.samples>0&&St(O)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ge.length;Ne++){const Ve=ge[Ne];ne.__webglColorRenderbuffer[Ne]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne]);const ke=c.convert(Ve.format,Ve.colorSpace),Ee=c.convert(Ve.type),Ie=D(Ve.internalFormat,ke,Ee,Ve.colorSpace,O.isXRRenderTarget===!0),Ye=Ge(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,Ie,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),Je(ne.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){n.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),pe(o.TEXTURE_CUBE_MAP,T);for(let Ne=0;Ne<6;Ne++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)we(ne.__webglFramebuffer[Ne][Ve],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ve);else we(ne.__webglFramebuffer[Ne],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(T)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let Ne=0,Ve=ge.length;Ne<Ve;Ne++){const ke=ge[Ne],Ee=a.get(ke);n.bindTexture(o.TEXTURE_2D,Ee.__webglTexture),pe(o.TEXTURE_2D,ke),we(ne.__webglFramebuffer,O,ke,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,0),S(ke)&&x(o.TEXTURE_2D)}n.unbindTexture()}else{let Ne=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ne=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ne,de.__webglTexture),pe(Ne,T),T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)we(ne.__webglFramebuffer[Ve],O,T,o.COLOR_ATTACHMENT0,Ne,Ve);else we(ne.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,Ne,0);S(T)&&x(Ne),n.unbindTexture()}O.depthBuffer&&Nt(O)}function H(O){const T=O.textures;for(let ne=0,de=T.length;ne<de;ne++){const ge=T[ne];if(S(ge)){const ue=U(O),Pe=a.get(ge).__webglTexture;n.bindTexture(ue,Pe),x(ue),n.unbindTexture()}}}const an=[],Et=[];function ct(O){if(O.samples>0){if(St(O)===!1){const T=O.textures,ne=O.width,de=O.height;let ge=o.COLOR_BUFFER_BIT;const ue=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=a.get(O),Ne=T.length>1;if(Ne)for(let ke=0;ke<T.length;ke++)n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ve=O.texture.mipmaps;Ve&&Ve.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ne){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[ke]);const Ee=a.get(T[ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,ne,de,0,0,ne,de,ge,o.NEAREST),d===!0&&(an.length=0,Et.length=0,an.push(o.COLOR_ATTACHMENT0+ke),O.depthBuffer&&O.resolveDepthBuffer===!1&&(an.push(ue),Et.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Et)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,an))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ne)for(let ke=0;ke<T.length;ke++){n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[ke]);const Ee=a.get(T[ke]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,Ee,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const T=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Ge(O){return Math.min(r.maxSamples,O.samples)}function St(O){const T=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(O){const T=u.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function st(O,T){const ne=O.colorSpace,de=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ne!==Xn&&ne!==ss&&(At.getTransfer(ne)===Xt?(de!==xi||ge!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),T}function sn(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=Rt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=St}function BR(o,e){function n(a,r=ss){let c;const u=At.getTransfer(r);if(a===Hi)return o.UNSIGNED_BYTE;if(a===up)return o.UNSIGNED_SHORT_4_4_4_4;if(a===fp)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Xv)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Vv)return o.BYTE;if(a===kv)return o.SHORT;if(a===hl)return o.UNSIGNED_SHORT;if(a===cp)return o.INT;if(a===Vs)return o.UNSIGNED_INT;if(a===wi)return o.FLOAT;if(a===xl)return o.HALF_FLOAT;if(a===Wv)return o.ALPHA;if(a===jv)return o.RGB;if(a===xi)return o.RGBA;if(a===pl)return o.DEPTH_COMPONENT;if(a===ml)return o.DEPTH_STENCIL;if(a===hp)return o.RED;if(a===dp)return o.RED_INTEGER;if(a===Yv)return o.RG;if(a===pp)return o.RG_INTEGER;if(a===mp)return o.RGBA_INTEGER;if(a===lu||a===cu||a===uu||a===fu)if(u===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===lu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===lu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wd||a===Cd||a===Dd||a===Nd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Nd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ld||a===Ud||a===Od)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ld||a===Ud)return u===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Od)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Pd||a===Id||a===Bd||a===Fd||a===zd||a===Hd||a===Gd||a===Vd||a===kd||a===Xd||a===Wd||a===jd||a===Yd||a===qd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Pd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Id)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Bd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Fd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===zd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Hd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Gd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Vd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===kd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Xd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Wd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===jd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Yd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===qd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===hu||a===Kd||a===Zd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===hu)return u===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===qv||a===Qd||a===Jd||a===$d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===hu)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===dl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const FR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,a){if(this.texture===null){const r=new Tn,c=e.properties.get(r);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new us({vertexShader:FR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ci(new Su(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GR extends Xs{constructor(e,n){super();const a=this;let r=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,_=null,v=null,y=null,b=null;const E=new HR,S=n.getContextAttributes();let x=null,U=null;const D=[],C=[],F=new rt;let G=null;const P=new Gn;P.viewport=new Ot;const X=new Gn;X.viewport=new Ot;const N=[P,X],R=new Jb;let z=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ce=D[W];return ce===void 0&&(ce=new $h,D[W]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(W){let ce=D[W];return ce===void 0&&(ce=new $h,D[W]=ce),ce.getGripSpace()},this.getHand=function(W){let ce=D[W];return ce===void 0&&(ce=new $h,D[W]=ce),ce.getHandSpace()};function ae(W){const ce=C.indexOf(W.inputSource);if(ce===-1)return;const Se=D[ce];Se!==void 0&&(Se.update(W.inputSource,W.frame,p||u),Se.dispatchEvent({type:W.type,data:W.inputSource}))}function _e(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",_e),r.removeEventListener("inputsourceschange",he);for(let W=0;W<D.length;W++){const ce=C[W];ce!==null&&(C[W]=null,D[W].disconnect(ce))}z=null,le=null,E.reset(),e.setRenderTarget(x),y=null,v=null,_=null,r=null,U=null,Me.stop(),a.isPresenting=!1,e.setPixelRatio(G),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",_e),r.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ve=null,we=null;S.depth&&(we=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=S.stencil?ml:pl,ve=S.stencil?dl:Vs);const Je={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:c};_=new XRWebGLBinding(r,n),v=_.createProjectionLayer(Je),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new ks(v.textureWidth,v.textureHeight,{format:xi,type:Hi,depthTexture:new hx(v.textureWidth,v.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new ks(y.framebufferWidth,y.framebufferHeight,{format:xi,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(h),Me.setContext(r),Me.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(W){for(let ce=0;ce<W.removed.length;ce++){const Se=W.removed[ce],ve=C.indexOf(Se);ve>=0&&(C[ve]=null,D[ve].disconnect(Se))}for(let ce=0;ce<W.added.length;ce++){const Se=W.added[ce];let ve=C.indexOf(Se);if(ve===-1){for(let Je=0;Je<D.length;Je++)if(Je>=C.length){C.push(Se),ve=Je;break}else if(C[Je]===null){C[Je]=Se,ve=Je;break}if(ve===-1)break}const we=D[ve];we&&we.connect(Se)}}const B=new j,J=new j;function K(W,ce,Se){B.setFromMatrixPosition(ce.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);const ve=B.distanceTo(J),we=ce.projectionMatrix.elements,Je=Se.projectionMatrix.elements,je=we[14]/(we[10]-1),Nt=we[14]/(we[10]+1),Rt=(we[9]+1)/we[5],lt=(we[9]-1)/we[5],H=(we[8]-1)/we[0],an=(Je[8]+1)/Je[0],Et=je*H,ct=je*an,Ge=ve/(-H+an),St=Ge*-H;if(ce.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(St),W.translateZ(Ge),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),we[10]===-1)W.projectionMatrix.copy(ce.projectionMatrix),W.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Ke=je+Ge,st=Nt+Ge,sn=Et-St,O=ct+(ve-St),T=Rt*Nt/st*Ke,ne=lt*Nt/st*Ke;W.projectionMatrix.makePerspective(sn,O,T,ne,Ke,st),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function be(W,ce){ce===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ce.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ce=W.near,Se=W.far;E.texture!==null&&(E.depthNear>0&&(ce=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),R.near=X.near=P.near=ce,R.far=X.far=P.far=Se,(z!==R.near||le!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,le=R.far),P.layers.mask=W.layers.mask|2,X.layers.mask=W.layers.mask|4,R.layers.mask=P.layers.mask|X.layers.mask;const ve=W.parent,we=R.cameras;be(R,ve);for(let Je=0;Je<we.length;Je++)be(we[Je],ve);we.length===2?K(R,P,X):R.projectionMatrix.copy(P.projectionMatrix),L(W,R,ve)};function L(W,ce,Se){Se===null?W.matrix.copy(ce.matrixWorld):(W.matrix.copy(Se.matrixWorld),W.matrix.invert(),W.matrix.multiply(ce.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ce.projectionMatrix),W.projectionMatrixInverse.copy(ce.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=qr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(W){d=W,v!==null&&(v.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let Y=null;function pe(W,ce){if(g=ce.getViewerPose(p||u),b=ce,g!==null){const Se=g.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let je=0;je<Se.length;je++){const Nt=Se[je];let Rt=null;if(y!==null)Rt=y.getViewport(Nt);else{const H=_.getViewSubImage(v,Nt);Rt=H.viewport,je===0&&(e.setRenderTargetTextures(U,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(U))}let lt=N[je];lt===void 0&&(lt=new Gn,lt.layers.enable(je),lt.viewport=new Ot,N[je]=lt),lt.matrix.fromArray(Nt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Nt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),je===0&&(R.matrix.copy(lt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(lt)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){const je=_.getDepthInformation(Se[0]);je&&je.isValid&&je.texture&&E.init(e,je,r.renderState)}}for(let Se=0;Se<D.length;Se++){const ve=C[Se],we=D[Se];ve!==null&&we!==void 0&&we.update(ve,ce,p||u)}Y&&Y(W,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),b=null}const Me=new _x;Me.setAnimationLoop(pe),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}}const Ps=new Vi,VR=new ht;function kR(o,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,sx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,U,D,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(c(S,x),b(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),E(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?d(S,x,U,D):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Qn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Qn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const U=e.get(x),D=U.envMap,C=U.envMapRotation;D&&(S.envMap.value=D,Ps.copy(C),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),S.envMapRotation.value.setFromMatrix4(VR.makeRotationFromEuler(Ps)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,U,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*U,S.scale.value=D*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,U){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const U=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function XR(o,e,n,a){let r={},c={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(U,D){const C=D.program;a.uniformBlockBinding(U,C)}function p(U,D){let C=r[U.id];C===void 0&&(b(U),C=g(U),r[U.id]=C,U.addEventListener("dispose",S));const F=D.program;a.updateUBOMapping(U,F);const G=e.render.frame;c[U.id]!==G&&(v(U),c[U.id]=G)}function g(U){const D=_();U.__bindingPointIndex=D;const C=o.createBuffer(),F=U.__size,G=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,F,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,C),C}function _(){for(let U=0;U<h;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const D=r[U.id],C=U.uniforms,F=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let G=0,P=C.length;G<P;G++){const X=Array.isArray(C[G])?C[G]:[C[G]];for(let N=0,R=X.length;N<R;N++){const z=X[N];if(y(z,G,N,F)===!0){const le=z.__offset,ae=Array.isArray(z.value)?z.value:[z.value];let _e=0;for(let he=0;he<ae.length;he++){const B=ae[he],J=E(B);typeof B=="number"||typeof B=="boolean"?(z.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,le+_e,z.__data)):B.isMatrix3?(z.__data[0]=B.elements[0],z.__data[1]=B.elements[1],z.__data[2]=B.elements[2],z.__data[3]=0,z.__data[4]=B.elements[3],z.__data[5]=B.elements[4],z.__data[6]=B.elements[5],z.__data[7]=0,z.__data[8]=B.elements[6],z.__data[9]=B.elements[7],z.__data[10]=B.elements[8],z.__data[11]=0):(B.toArray(z.__data,_e),_e+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(U,D,C,F){const G=U.value,P=D+"_"+C;if(F[P]===void 0)return typeof G=="number"||typeof G=="boolean"?F[P]=G:F[P]=G.clone(),!0;{const X=F[P];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return F[P]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function b(U){const D=U.uniforms;let C=0;const F=16;for(let P=0,X=D.length;P<X;P++){const N=Array.isArray(D[P])?D[P]:[D[P]];for(let R=0,z=N.length;R<z;R++){const le=N[R],ae=Array.isArray(le.value)?le.value:[le.value];for(let _e=0,he=ae.length;_e<he;_e++){const B=ae[_e],J=E(B),K=C%F,be=K%J.boundary,L=K+be;C+=be,L!==0&&F-L<J.storage&&(C+=F-L),le.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=J.storage}}}const G=C%F;return G>0&&(C+=F-G),U.__size=C,U.__cache={},this}function E(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function S(U){const D=U.target;D.removeEventListener("dispose",S);const C=u.indexOf(D.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(r[D.id]),delete r[D.id],delete c[D.id]}function x(){for(const U in r)o.deleteBuffer(r[U]);u=[],r={},c={}}return{bind:d,update:p,dispose:x}}class WR{constructor(e={}){const{canvas:n=kM(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const b=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const U=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1;this._outputColorSpace=Nn;let G=0,P=0,X=null,N=-1,R=null;const z=new Ot,le=new Ot;let ae=null;const _e=new ot(0);let he=0,B=n.width,J=n.height,K=1,be=null,L=null;const Y=new Ot(0,0,B,J),pe=new Ot(0,0,B,J);let Me=!1;const W=new yp;let ce=!1,Se=!1;const ve=new ht,we=new ht,Je=new j,je=new Ot,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function lt(){return X===null?K:1}let H=a;function an(w,Z){return n.getContext(w,Z)}try{const w={alpha:!0,depth:r,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lp}`),n.addEventListener("webglcontextlost",Be,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",ye,!1),H===null){const Z="webgl2";if(H=an(Z,w),H===null)throw an(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Et,ct,Ge,St,Ke,st,sn,O,T,ne,de,ge,ue,Pe,Ne,Ve,ke,Ee,Ie,Ye,qe,Ce,at,k;function Le(){Et=new t1(H),Et.init(),Ce=new BR(H,Et),ct=new qA(H,Et,e,Ce),Ge=new PR(H,Et),ct.reverseDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),St=new a1(H),Ke=new MR,st=new IR(H,Et,Ge,Ke,ct,Ce,St),sn=new ZA(C),O=new e1(C),T=new uE(H),at=new jA(H,T),ne=new n1(H,T,St,at),de=new r1(H,ne,T,St),Ie=new s1(H,ct,st),Ve=new KA(Ke),ge=new SR(C,sn,O,Et,ct,at,Ve),ue=new kR(C,Ke),Pe=new ER,Ne=new DR(Et),Ee=new WA(C,sn,O,Ge,de,y,d),ke=new UR(C,de,ct),k=new XR(H,St,ct,Ge),Ye=new YA(H,Et,St),qe=new i1(H,Et,St),St.programs=ge.programs,C.capabilities=ct,C.extensions=Et,C.properties=Ke,C.renderLists=Pe,C.shadowMap=ke,C.state=Ge,C.info=St}Le();const Te=new GR(C,H);this.xr=Te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(B,J,!1))},this.getSize=function(w){return w.set(B,J)},this.setSize=function(w,Z,re=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,J=Z,n.width=Math.floor(w*K),n.height=Math.floor(Z*K),re===!0&&(n.style.width=w+"px",n.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(B*K,J*K).floor()},this.setDrawingBufferSize=function(w,Z,re){B=w,J=Z,K=re,n.width=Math.floor(w*re),n.height=Math.floor(Z*re),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,Z,re,oe){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,Z,re,oe),Ge.viewport(z.copy(Y).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(pe)},this.setScissor=function(w,Z,re,oe){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,Z,re,oe),Ge.scissor(le.copy(pe).multiplyScalar(K).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){Ge.setScissorTest(Me=w)},this.setOpaqueSort=function(w){be=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,re=!0){let oe=0;if(w){let Q=!1;if(X!==null){const Ae=X.texture.format;Q=Ae===mp||Ae===pp||Ae===dp}if(Q){const Ae=X.texture.type,De=Ae===Hi||Ae===Vs||Ae===hl||Ae===dl||Ae===up||Ae===fp,Oe=Ee.getClearColor(),Fe=Ee.getClearAlpha(),et=Oe.r,Ze=Oe.g,Xe=Oe.b;De?(b[0]=et,b[1]=Ze,b[2]=Xe,b[3]=Fe,H.clearBufferuiv(H.COLOR,0,b)):(E[0]=et,E[1]=Ze,E[2]=Xe,E[3]=Fe,H.clearBufferiv(H.COLOR,0,E))}else oe|=H.COLOR_BUFFER_BIT}Z&&(oe|=H.DEPTH_BUFFER_BIT),re&&(oe|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Be,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),Ee.dispose(),Pe.dispose(),Ne.dispose(),Ke.dispose(),sn.dispose(),O.dispose(),de.dispose(),at.dispose(),k.dispose(),ge.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",hn),Te.removeEventListener("sessionend",An),Wn.stop()};function Be(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const w=St.autoReset,Z=ke.enabled,re=ke.autoUpdate,oe=ke.needsUpdate,Q=ke.type;Le(),St.autoReset=w,ke.enabled=Z,ke.autoUpdate=re,ke.needsUpdate=oe,ke.type=Q}function ye(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ze(w){const Z=w.target;Z.removeEventListener("dispose",ze),it(Z)}function it(w){It(w),Ke.remove(w)}function It(w){const Z=Ke.get(w).programs;Z!==void 0&&(Z.forEach(function(re){ge.releaseProgram(re)}),w.isShaderMaterial&&ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,re,oe,Q,Ae){Z===null&&(Z=Nt);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,Oe=ds(w,Z,re,oe,Q);Ge.setMaterial(oe,De);let Fe=re.index,et=1;if(oe.wireframe===!0){if(Fe=ne.getWireframeAttribute(re),Fe===void 0)return;et=2}const Ze=re.drawRange,Xe=re.attributes.position;let pt=Ze.start*et,Lt=(Ze.start+Ze.count)*et;Ae!==null&&(pt=Math.max(pt,Ae.start*et),Lt=Math.min(Lt,(Ae.start+Ae.count)*et)),Fe!==null?(pt=Math.max(pt,0),Lt=Math.min(Lt,Fe.count)):Xe!=null&&(pt=Math.max(pt,0),Lt=Math.min(Lt,Xe.count));const qt=Lt-pt;if(qt<0||qt===1/0)return;at.setup(Q,oe,Oe,re,Fe);let Mt,bt=Ye;if(Fe!==null&&(Mt=T.get(Fe),bt=qe,bt.setIndex(Mt)),Q.isMesh)oe.wireframe===!0?(Ge.setLineWidth(oe.wireframeLinewidth*lt()),bt.setMode(H.LINES)):bt.setMode(H.TRIANGLES);else if(Q.isLine){let Qe=oe.linewidth;Qe===void 0&&(Qe=1),Ge.setLineWidth(Qe*lt()),Q.isLineSegments?bt.setMode(H.LINES):Q.isLineLoop?bt.setMode(H.LINE_LOOP):bt.setMode(H.LINE_STRIP)}else Q.isPoints?bt.setMode(H.POINTS):Q.isSprite&&bt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))bt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,en=Q._multiDrawCounts,wt=Q._multiDrawCount,Ln=Fe?T.get(Fe).bytesPerElement:1,wa=Ke.get(oe).currentProgram.getUniforms();for(let Kt=0;Kt<wt;Kt++)wa.setValue(H,"_gl_DrawID",Kt),bt.render(Qe[Kt]/Ln,en[Kt])}else if(Q.isInstancedMesh)bt.renderInstances(pt,qt,Q.count);else if(re.isInstancedBufferGeometry){const Qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,en=Math.min(re.instanceCount,Qe);bt.renderInstances(pt,qt,en)}else bt.render(pt,qt)};function Ct(w,Z,re){w.transparent===!0&&w.side===Fi&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,Aa(w,Z,re),w.side=Ea,w.needsUpdate=!0,Aa(w,Z,re),w.side=Fi):Aa(w,Z,re)}this.compile=function(w,Z,re=null){re===null&&(re=w),x=Ne.get(re),x.init(Z),D.push(x),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),w!==re&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const oe=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ae=Q.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const Oe=Ae[De];Ct(Oe,re,Q),oe.add(Oe)}else Ct(Ae,re,Q),oe.add(Ae)}),x=D.pop(),oe},this.compileAsync=function(w,Z,re=null){const oe=this.compile(w,Z,re);return new Promise(Q=>{function Ae(){if(oe.forEach(function(De){Ke.get(De).currentProgram.isReady()&&oe.delete(De)}),oe.size===0){Q(w);return}setTimeout(Ae,10)}Et.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Jn=null;function xn(w){Jn&&Jn(w)}function hn(){Wn.stop()}function An(){Wn.start()}const Wn=new _x;Wn.setAnimationLoop(xn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){Jn=w,Te.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},Te.addEventListener("sessionstart",hn),Te.addEventListener("sessionend",An),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Z),Z=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,Z,X),x=Ne.get(w,D.length),x.init(Z),D.push(x),we.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W.setFromProjectionMatrix(we),Se=this.localClippingEnabled,ce=Ve.init(this.clippingPlanes,Se),S=Pe.get(w,U.length),S.init(),U.push(S),Te.enabled===!0&&Te.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&fs(Ae,Z,-1/0,C.sortObjects)}fs(w,Z,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(be,L),Rt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Rt&&Ee.addToRenderList(S,w),this.info.render.frame++,ce===!0&&Ve.beginShadows();const re=x.state.shadowsArray;ke.render(re,w,Z),ce===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=S.opaque,Q=S.transmissive;if(x.setupLights(),Z.isArrayCamera){const Ae=Z.cameras;if(Q.length>0)for(let De=0,Oe=Ae.length;De<Oe;De++){const Fe=Ae[De];El(oe,Q,w,Fe)}Rt&&Ee.render(w);for(let De=0,Oe=Ae.length;De<Oe;De++){const Fe=Ae[De];bl(S,w,Fe,Fe.viewport)}}else Q.length>0&&El(oe,Q,w,Z),Rt&&Ee.render(w),bl(S,w,Z);X!==null&&P===0&&(st.updateMultisampleRenderTarget(X),st.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(C,w,Z),at.resetDefaultState(),N=-1,R=null,D.pop(),D.length>0?(x=D[D.length-1],ce===!0&&Ve.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function fs(w,Z,re,oe){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){oe&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const De=de.update(w),Oe=w.material;Oe.visible&&S.push(w,De,Oe,re,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){const De=de.update(w),Oe=w.material;if(oe&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),je.copy(De.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Oe)){const Fe=De.groups;for(let et=0,Ze=Fe.length;et<Ze;et++){const Xe=Fe[et],pt=Oe[Xe.materialIndex];pt&&pt.visible&&S.push(w,De,pt,re,je.z,Xe)}}else Oe.visible&&S.push(w,De,Oe,re,je.z,null)}}const Ae=w.children;for(let De=0,Oe=Ae.length;De<Oe;De++)fs(Ae[De],Z,re,oe)}function bl(w,Z,re,oe){const Q=w.opaque,Ae=w.transmissive,De=w.transparent;x.setupLightsView(re),ce===!0&&Ve.setGlobalState(C.clippingPlanes,re),oe&&Ge.viewport(z.copy(oe)),Q.length>0&&hs(Q,Z,re),Ae.length>0&&hs(Ae,Z,re),De.length>0&&hs(De,Z,re),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function El(w,Z,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[oe.id]===void 0&&(x.state.transmissionRenderTarget[oe.id]=new ks(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?xl:Hi,minFilter:ya,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[oe.id],De=oe.viewport||z;Ae.setSize(De.z*C.transmissionResolutionScale,De.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor(_e),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),Rt&&Ee.render(re);const Fe=C.toneMapping;C.toneMapping=cs;const et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),x.setupLightsView(oe),ce===!0&&Ve.setGlobalState(C.clippingPlanes,oe),hs(w,re,oe),st.updateMultisampleRenderTarget(Ae),st.updateRenderTargetMipmap(Ae),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Xe=0,pt=Z.length;Xe<pt;Xe++){const Lt=Z[Xe],qt=Lt.object,Mt=Lt.geometry,bt=Lt.material,Qe=Lt.group;if(bt.side===Fi&&qt.layers.test(oe.layers)){const en=bt.side;bt.side=Qn,bt.needsUpdate=!0,Ta(qt,re,oe,Mt,bt,Qe),bt.side=en,bt.needsUpdate=!0,Ze=!0}}Ze===!0&&(st.updateMultisampleRenderTarget(Ae),st.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Oe),C.setClearColor(_e,he),et!==void 0&&(oe.viewport=et),C.toneMapping=Fe}function hs(w,Z,re){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Ae=w.length;Q<Ae;Q++){const De=w[Q],Oe=De.object,Fe=De.geometry,et=De.group;let Ze=De.material;Ze.allowOverride===!0&&oe!==null&&(Ze=oe),Oe.layers.test(re.layers)&&Ta(Oe,Z,re,Fe,Ze,et)}}function Ta(w,Z,re,oe,Q,Ae){w.onBeforeRender(C,Z,re,oe,Q,Ae),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(C,Z,re,oe,w,Ae),Q.transparent===!0&&Q.side===Fi&&Q.forceSinglePass===!1?(Q.side=Qn,Q.needsUpdate=!0,C.renderBufferDirect(re,Z,oe,Q,w,Ae),Q.side=Ea,Q.needsUpdate=!0,C.renderBufferDirect(re,Z,oe,Q,w,Ae),Q.side=Fi):C.renderBufferDirect(re,Z,oe,Q,w,Ae),w.onAfterRender(C,Z,re,oe,Q,Ae)}function Aa(w,Z,re){Z.isScene!==!0&&(Z=Nt);const oe=Ke.get(w),Q=x.state.lights,Ae=x.state.shadowsArray,De=Q.state.version,Oe=ge.getParameters(w,Q.state,Ae,Z,re),Fe=ge.getProgramCacheKey(Oe);let et=oe.programs;oe.environment=w.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(w.isMeshStandardMaterial?O:sn).get(w.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",ze),et=new Map,oe.programs=et);let Ze=et.get(Fe);if(Ze!==void 0){if(oe.currentProgram===Ze&&oe.lightsStateVersion===De)return qi(w,Oe),Ze}else Oe.uniforms=ge.getUniforms(w),w.onBeforeCompile(Oe,C),Ze=ge.acquireProgram(Oe,Fe),et.set(Fe,Ze),oe.uniforms=Oe.uniforms;const Xe=oe.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=Ve.uniform),qi(w,Oe),oe.needsLights=ln(w),oe.lightsStateVersion=De,oe.needsLights&&(Xe.ambientLightColor.value=Q.state.ambient,Xe.lightProbe.value=Q.state.probe,Xe.directionalLights.value=Q.state.directional,Xe.directionalLightShadows.value=Q.state.directionalShadow,Xe.spotLights.value=Q.state.spot,Xe.spotLightShadows.value=Q.state.spotShadow,Xe.rectAreaLights.value=Q.state.rectArea,Xe.ltc_1.value=Q.state.rectAreaLTC1,Xe.ltc_2.value=Q.state.rectAreaLTC2,Xe.pointLights.value=Q.state.point,Xe.pointLightShadows.value=Q.state.pointShadow,Xe.hemisphereLights.value=Q.state.hemi,Xe.directionalShadowMap.value=Q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xe.spotShadowMap.value=Q.state.spotShadowMap,Xe.spotLightMatrix.value=Q.state.spotLightMatrix,Xe.spotLightMap.value=Q.state.spotLightMap,Xe.pointShadowMap.value=Q.state.pointShadowMap,Xe.pointShadowMatrix.value=Q.state.pointShadowMatrix),oe.currentProgram=Ze,oe.uniformsList=null,Ze}function Yi(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=du.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function qi(w,Z){const re=Ke.get(w);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.batchingColor=Z.batchingColor,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.instancingMorph=Z.instancingMorph,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function ds(w,Z,re,oe,Q){Z.isScene!==!0&&(Z=Nt),st.resetTextureUnits();const Ae=Z.fog,De=oe.isMeshStandardMaterial?Z.environment:null,Oe=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Xn,Fe=(oe.isMeshStandardMaterial?O:sn).get(oe.envMap||De),et=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ze=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Xe=!!re.morphAttributes.position,pt=!!re.morphAttributes.normal,Lt=!!re.morphAttributes.color;let qt=cs;oe.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qt=C.toneMapping);const Mt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,bt=Mt!==void 0?Mt.length:0,Qe=Ke.get(oe),en=x.state.lights;if(ce===!0&&(Se===!0||w!==R)){const yn=w===R&&oe.id===N;Ve.setState(oe,w,yn)}let wt=!1;oe.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==en.state.version||Qe.outputColorSpace!==Oe||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==Fe||oe.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==et||Qe.vertexTangents!==Ze||Qe.morphTargets!==Xe||Qe.morphNormals!==pt||Qe.morphColors!==Lt||Qe.toneMapping!==qt||Qe.morphTargetsCount!==bt)&&(wt=!0):(wt=!0,Qe.__version=oe.version);let Ln=Qe.currentProgram;wt===!0&&(Ln=Aa(oe,Z,Q));let wa=!1,Kt=!1,Zi=!1;const jt=Ln.getUniforms(),Un=Qe.uniforms;if(Ge.useProgram(Ln.program)&&(wa=!0,Kt=!0,Zi=!0),oe.id!==N&&(N=oe.id,Kt=!0),wa||R!==w){Ge.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),WM(ve),jM(ve),jt.setValue(H,"projectionMatrix",ve)):jt.setValue(H,"projectionMatrix",w.projectionMatrix),jt.setValue(H,"viewMatrix",w.matrixWorldInverse);const Rn=jt.map.cameraPosition;Rn!==void 0&&Rn.setValue(H,Je.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&jt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&jt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Kt=!0,Zi=!0)}if(Q.isSkinnedMesh){jt.setOptional(H,Q,"bindMatrix"),jt.setOptional(H,Q,"bindMatrixInverse");const yn=Q.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),jt.setValue(H,"boneTexture",yn.boneTexture,st))}Q.isBatchedMesh&&(jt.setOptional(H,Q,"batchingTexture"),jt.setValue(H,"batchingTexture",Q._matricesTexture,st),jt.setOptional(H,Q,"batchingIdTexture"),jt.setValue(H,"batchingIdTexture",Q._indirectTexture,st),jt.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&jt.setValue(H,"batchingColorTexture",Q._colorsTexture,st));const dn=re.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Ie.update(Q,re,Ln),(Kt||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,jt.setValue(H,"receiveShadow",Q.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Un.envMap.value=Fe,Un.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(Un.envMapIntensity.value=Z.environmentIntensity),Kt&&(jt.setValue(H,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&Ra(Un,Zi),Ae&&oe.fog===!0&&ue.refreshFogUniforms(Un,Ae),ue.refreshMaterialUniforms(Un,oe,K,J,x.state.transmissionRenderTarget[w.id]),du.upload(H,Yi(Qe),Un,st)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(du.upload(H,Yi(Qe),Un,st),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&jt.setValue(H,"center",Q.center),jt.setValue(H,"modelViewMatrix",Q.modelViewMatrix),jt.setValue(H,"normalMatrix",Q.normalMatrix),jt.setValue(H,"modelMatrix",Q.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const yn=oe.uniformsGroups;for(let Rn=0,Ni=yn.length;Rn<Ni;Rn++){const Qi=yn[Rn];k.update(Qi,Ln),k.bind(Qi,Ln)}}return Ln}function Ra(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function ln(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,Z,re){const oe=Ke.get(w);oe.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Ke.get(w.texture).__webglTexture=Z,Ke.get(w.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const re=Ke.get(w);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0};const Tl=H.createFramebuffer();this.setRenderTarget=function(w,Z=0,re=0){X=w,G=Z,P=re;let oe=!0,Q=null,Ae=!1,De=!1;if(w){const Fe=Ke.get(w);if(Fe.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(H.FRAMEBUFFER,null),oe=!1;else if(Fe.__webglFramebuffer===void 0)st.setupRenderTarget(w);else if(Fe.__hasExternalTextures)st.rebindTextures(w,Ke.get(w.texture).__webglTexture,Ke.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xe=w.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&Ke.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(De=!0);const Ze=Ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[Z])?Q=Ze[Z][re]:Q=Ze[Z],Ae=!0):w.samples>0&&st.useMultisampledRTT(w)===!1?Q=Ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?Q=Ze[re]:Q=Ze,z.copy(w.viewport),le.copy(w.scissor),ae=w.scissorTest}else z.copy(Y).multiplyScalar(K).floor(),le.copy(pe).multiplyScalar(K).floor(),ae=Me;if(re!==0&&(Q=Tl),Ge.bindFramebuffer(H.FRAMEBUFFER,Q)&&oe&&Ge.drawBuffers(w,Q),Ge.viewport(z),Ge.scissor(le),Ge.setScissorTest(ae),Ae){const Fe=Ke.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,re)}else if(De){const Fe=Ke.get(w.texture),et=Z;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,re,et)}else if(w!==null&&re!==0){const Fe=Ke.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,re)}N=-1},this.readRenderTargetPixels=function(w,Z,re,oe,Q,Ae,De,Oe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){Ge.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const et=w.textures[Oe],Ze=et.format,Xe=et.type;if(!ct.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-oe&&re>=0&&re<=w.height-Q&&(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Oe),H.readPixels(Z,re,oe,Q,Ce.convert(Ze),Ce.convert(Xe),Ae))}finally{const et=X!==null?Ke.get(X).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(w,Z,re,oe,Q,Ae,De,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe)if(Z>=0&&Z<=w.width-oe&&re>=0&&re<=w.height-Q){Ge.bindFramebuffer(H.FRAMEBUFFER,Fe);const et=w.textures[Oe],Ze=et.format,Xe=et.type;if(!ct.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Oe),H.readPixels(Z,re,oe,Q,Ce.convert(Ze),Ce.convert(Xe),0);const Lt=X!==null?Ke.get(X).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,Lt);const qt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await XM(H,qt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.deleteBuffer(pt),H.deleteSync(qt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,re=0){const oe=Math.pow(2,-re),Q=Math.floor(w.image.width*oe),Ae=Math.floor(w.image.height*oe),De=Z!==null?Z.x:0,Oe=Z!==null?Z.y:0;st.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,De,Oe,Q,Ae),Ge.unbindTexture()};const Al=H.createFramebuffer(),Ki=H.createFramebuffer();this.copyTextureToTexture=function(w,Z,re=null,oe=null,Q=0,Ae=null){Ae===null&&(Q!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Q,Q=0):Ae=0);let De,Oe,Fe,et,Ze,Xe,pt,Lt,qt;const Mt=w.isCompressedTexture?w.mipmaps[Ae]:w.image;if(re!==null)De=re.max.x-re.min.x,Oe=re.max.y-re.min.y,Fe=re.isBox3?re.max.z-re.min.z:1,et=re.min.x,Ze=re.min.y,Xe=re.isBox3?re.min.z:0;else{const dn=Math.pow(2,-Q);De=Math.floor(Mt.width*dn),Oe=Math.floor(Mt.height*dn),w.isDataArrayTexture?Fe=Mt.depth:w.isData3DTexture?Fe=Math.floor(Mt.depth*dn):Fe=1,et=0,Ze=0,Xe=0}oe!==null?(pt=oe.x,Lt=oe.y,qt=oe.z):(pt=0,Lt=0,qt=0);const bt=Ce.convert(Z.format),Qe=Ce.convert(Z.type);let en;Z.isData3DTexture?(st.setTexture3D(Z,0),en=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(st.setTexture2DArray(Z,0),en=H.TEXTURE_2D_ARRAY):(st.setTexture2D(Z,0),en=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const wt=H.getParameter(H.UNPACK_ROW_LENGTH),Ln=H.getParameter(H.UNPACK_IMAGE_HEIGHT),wa=H.getParameter(H.UNPACK_SKIP_PIXELS),Kt=H.getParameter(H.UNPACK_SKIP_ROWS),Zi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Mt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,et),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ze),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);const jt=w.isDataArrayTexture||w.isData3DTexture,Un=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const dn=Ke.get(w),yn=Ke.get(Z),Rn=Ke.get(dn.__renderTarget),Ni=Ke.get(yn.__renderTarget);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Qi=0;Qi<Fe;Qi++)jt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.get(w).__webglTexture,Q,Xe+Qi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.get(Z).__webglTexture,Ae,qt+Qi)),H.blitFramebuffer(et,Ze,De,Oe,pt,Lt,De,Oe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||Ke.has(w)){const dn=Ke.get(w),yn=Ke.get(Z);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,Al),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ki);for(let Rn=0;Rn<Fe;Rn++)jt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,dn.__webglTexture,Q,Xe+Rn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,dn.__webglTexture,Q),Un?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,Ae,qt+Rn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,Ae),Q!==0?H.blitFramebuffer(et,Ze,De,Oe,pt,Lt,De,Oe,H.COLOR_BUFFER_BIT,H.NEAREST):Un?H.copyTexSubImage3D(en,Ae,pt,Lt,qt+Rn,et,Ze,De,Oe):H.copyTexSubImage2D(en,Ae,pt,Lt,et,Ze,De,Oe);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Un?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(en,Ae,pt,Lt,qt,De,Oe,Fe,bt,Qe,Mt.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(en,Ae,pt,Lt,qt,De,Oe,Fe,bt,Mt.data):H.texSubImage3D(en,Ae,pt,Lt,qt,De,Oe,Fe,bt,Qe,Mt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,pt,Lt,De,Oe,bt,Qe,Mt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,pt,Lt,Mt.width,Mt.height,bt,Mt.data):H.texSubImage2D(H.TEXTURE_2D,Ae,pt,Lt,De,Oe,bt,Qe,Mt);H.pixelStorei(H.UNPACK_ROW_LENGTH,wt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ln),H.pixelStorei(H.UNPACK_SKIP_PIXELS,wa),H.pixelStorei(H.UNPACK_SKIP_ROWS,Kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zi),Ae===0&&Z.generateMipmaps&&H.generateMipmap(en),Ge.unbindTexture()},this.copyTextureToTexture3D=function(w,Z,re=null,oe=null,Q=0){return Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Z,re,oe,Q)},this.initRenderTarget=function(w){Ke.get(w).__webglFramebuffer===void 0&&st.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?st.setTextureCube(w,0):w.isData3DTexture?st.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?st.setTexture2DArray(w,0):st.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){G=0,P=0,X=null,Ge.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}function Cv(o,e){if(e===gM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===ep||e===Kv){let n=o.getIndex();if(n===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let d=0;d<h.count;d++)u.push(d);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===ep)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class jR extends to{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new QR(n)}),this.register(function(n){return new JR(n)}),this.register(function(n){return new ow(n)}),this.register(function(n){return new lw(n)}),this.register(function(n){return new cw(n)}),this.register(function(n){return new ew(n)}),this.register(function(n){return new tw(n)}),this.register(function(n){return new nw(n)}),this.register(function(n){return new iw(n)}),this.register(function(n){return new ZR(n)}),this.register(function(n){return new aw(n)}),this.register(function(n){return new $R(n)}),this.register(function(n){return new rw(n)}),this.register(function(n){return new sw(n)}),this.register(function(n){return new qR(n)}),this.register(function(n){return new uw(n)}),this.register(function(n){return new fw(n)})}load(e,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const p=fl.extractUrlBase(e);u=fl.resolveURL(p,this.path)}else u=fl.extractUrlBase(e);this.manager.itemStart(e);const h=function(p){r?r(p):console.error(p),c.manager.itemError(e),c.manager.itemEnd(e)},d=new mx(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(p){try{c.parse(p,u,function(g){n(g),c.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let c;const u={},h={},d=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===Mx){try{u[yt.KHR_BINARY_GLTF]=new hw(e)}catch(_){r&&r(_);return}c=JSON.parse(u[yt.KHR_BINARY_GLTF].content)}else c=JSON.parse(d.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new Tw(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](p);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case yt.KHR_MATERIALS_UNLIT:u[_]=new KR;break;case yt.KHR_DRACO_MESH_COMPRESSION:u[_]=new dw(c,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:u[_]=new pw;break;case yt.KHR_MESH_QUANTIZATION:u[_]=new mw;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}p.setExtensions(u),p.setPlugins(h),p.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,c){a.parse(e,n,r,c)})}}function YR(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qR{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const c=n.json,d=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let p;const g=new ot(16777215);d.color!==void 0&&g.setRGB(d.color[0],d.color[1],d.color[2],Xn);const _=d.range!==void 0?d.range:0;switch(d.type){case"directional":p=new gx(g),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new qb(g),p.distance=_;break;case"spot":p=new jb(g),p.distance=_,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,p.angle=d.spot.outerConeAngle,p.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return p.position.set(0,0,0),xa(p,d),d.intensity!==void 0&&(p.intensity=d.intensity),p.name=n.createUniqueName(d.name||"light_"+e),r=Promise.resolve(p),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(d){return a._getNodeRef(n.cache,h,d)})}}class KR{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Hs}extendParams(e,n,a){const r=[];e.color=new ot(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Xn),e.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",c.baseColorTexture,Nn))}return Promise.all(r)}}class ZR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(n.emissiveIntensity=c),Promise.resolve()}}class QR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new rt(h,h)}return Promise.all(c)}}class JR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class $R{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class ew{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];n.sheenColor=new ot(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;n.sheenColor.setRGB(h[0],h[1],h[2],Xn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,Nn)),u.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class tw{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class nw{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return n.attenuationColor=new ot().setRGB(h[0],h[1],h[2],Xn),Promise.all(c)}}class iw{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class aw{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return n.specularColor=new ot().setRGB(h[0],h[1],h[2],Xn),u.specularColorTexture!==void 0&&c.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,Nn)),Promise.all(c)}}class sw{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(c)}}class rw{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class ow{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class lw{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let d=a.textureLoader;if(h.uri){const p=a.options.manager.getHandler(h.uri);p!==null&&(d=p)}return a.loadTextureImage(e,u.source,d)}}class cw{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let d=a.textureLoader;if(h.uri){const p=a.options.manager.getHandler(h.uri);p!==null&&(d=p)}return a.loadTextureImage(e,u.source,d)}}class uw{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const d=r.byteOffset||0,p=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,d,p);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(y),g,_,v,r.mode,r.filter),y})})}else return null}}class fw{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const p of r.primitives)if(p.mode!==vi.TRIANGLES&&p.mode!==vi.TRIANGLE_STRIP&&p.mode!==vi.TRIANGLE_FAN&&p.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],d={};for(const p in u)h.push(this.parser.getDependency("accessor",u[p]).then(g=>(d[p]=g,d[p])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(p=>{const g=p.pop(),_=g.isGroup?g.children:[g],v=p[0].count,y=[];for(const b of _){const E=new ht,S=new j,x=new Gi,U=new j(1,1,1),D=new bb(b.geometry,b.material,v);for(let C=0;C<v;C++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,C),d.SCALE&&U.fromBufferAttribute(d.SCALE,C),D.setMatrixAt(C,E.compose(S,x,U));for(const C in d)if(C==="_COLOR_0"){const F=d[C];D.instanceColor=new np(F.array,F.itemSize,F.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&b.geometry.setAttribute(C,d[C]);$t.prototype.copy.call(D,b),this.parser.assignFinalMaterial(D),y.push(D)}return g.isGroup?(g.clear(),g.add(...y),g):y[0]}))}}const Mx="glTF",rl=12,Dv={JSON:1313821514,BIN:5130562};class hw{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,rl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Mx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-rl,c=new DataView(e,rl);let u=0;for(;u<r;){const h=c.getUint32(u,!0);u+=4;const d=c.getUint32(u,!0);if(u+=4,d===Dv.JSON){const p=new Uint8Array(e,rl+u,h);this.content=a.decode(p)}else if(d===Dv.BIN){const p=rl+u;this.body=e.slice(p,p+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dw{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},d={},p={};for(const g in u){const _=sp[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=sp[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],y=kr[v.componentType];p[_]=y.name,d[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(y){for(const b in y.attributes){const E=y.attributes[b],S=d[b];S!==void 0&&(E.normalized=S)}_(y)},h,p,Xn,v)})})}}class pw{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class mw{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class bx extends Ml{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=h*2,p=h*3,g=r-n,_=(a-n)/g,v=_*_,y=v*_,b=e*p,E=b-p,S=-2*y+3*v,x=y-v,U=1-S,D=x-v+_;for(let C=0;C!==h;C++){const F=u[E+C+h],G=u[E+C+d]*g,P=u[b+C+h],X=u[b+C]*g;c[C]=U*F+D*G+S*P+x*X}return c}}const gw=new Gi;class _w extends bx{interpolate_(e,n,a,r){const c=super.interpolate_(e,n,a,r);return gw.fromArray(c).normalize().toArray(c),c}}const vi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nv={9728:Vn,9729:li,9984:Gv,9985:ou,9986:ol,9987:ya},Lv={33071:rs,33648:pu,10497:Yr},dd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vw={CUBICSPLINE:void 0,LINEAR:_l,STEP:gl},pd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Mp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ea})),o.DefaultMaterial}function Is(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function xa(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yw(o,e,n){let a=!1,r=!1,c=!1;for(let p=0,g=e.length;p<g;p++){const _=e[p];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],h=[],d=[];for(let p=0,g=e.length;p<g;p++){const _=e[p];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):o.attributes.color;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d)]).then(function(p){const g=p[0],_=p[1],v=p[2];return a&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function Sw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Mw(o){let e;const n=o.extensions&&o.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+md(n.attributes):e=o.indices+":"+md(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+md(o.targets[a]);return e}function md(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function rp(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ew=new ht;class Tw{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new YR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const d=h.match(/Version\/(\d+)/);r=a&&d?parseInt(d[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new Xb(this.options.manager):this.textureLoader=new Qb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Is(c,h,r),xa(h,r),Promise.all(a._invokeAll(function(d){return d.afterRoot&&d.afterRoot(h)})).then(function(){for(const d of h.scenes)d.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let h=0,d=u.length;h<d;h++)e[u[h]].isBone=!0}for(let r=0,c=e.length;r<c;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),c=(u,h)=>{const d=this.associations.get(u);d!=null&&this.associations.set(h,d);for(const[p,g]of u.children.entries())c(g,h.children[p])};return c(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=e(n[r]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(fl.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=dd[r.type],h=kr[r.componentType],d=r.normalized===!0,p=new h(r.count*u);return Promise.resolve(new kn(p,u,d))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],d=dd[r.type],p=kr[r.componentType],g=p.BYTES_PER_ELEMENT,_=g*d,v=r.byteOffset||0,y=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,b=r.normalized===!0;let E,S;if(y&&y!==_){const x=Math.floor(v/y),U="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let D=n.cache.get(U);D||(E=new p(h,x*y,r.count*y/g),D=new vb(E,y/g),n.cache.add(U,D)),S=new vp(D,d,v%y/g,b)}else h===null?E=new p(r.count*d):E=new p(h,v,r.count*d),S=new kn(E,d,b);if(r.sparse!==void 0){const x=dd.SCALAR,U=kr[r.sparse.indices.componentType],D=r.sparse.indices.byteOffset||0,C=r.sparse.values.byteOffset||0,F=new U(u[1],D,r.sparse.count*x),G=new p(u[2],C,r.sparse.count*d);h!==null&&(S=new kn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let P=0,X=F.length;P<X;P++){const N=F[P];if(S.setX(N,G[P*d]),d>=2&&S.setY(N,G[P*d+1]),d>=3&&S.setZ(N,G[P*d+2]),d>=4&&S.setW(N,G[P*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=b}return S})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const d=a.manager.getHandler(u.uri);d!==null&&(h=d)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const r=this,c=this.json,u=c.textures[e],h=c.images[n],d=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const p=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=Nv[v.magFilter]||li,g.minFilter=Nv[v.minFilter]||ya,g.wrapS=Lv[v.wrapS]||Yr,g.wrapT=Lv[v.wrapT]||Yr,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Vn&&g.minFilter!==li,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[d]=p,p}loadImageSource(e,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=r.images[e],h=self.URL||self.webkitURL;let d=u.uri||"",p=!1;if(u.bufferView!==void 0)d=a.getDependency("bufferView",u.bufferView).then(function(_){p=!0;const v=new Blob([_],{type:u.mimeType});return d=h.createObjectURL(v),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(d).then(function(_){return new Promise(function(v,y){let b=v;n.isImageBitmapLoader===!0&&(b=function(E){const S=new Tn(E);S.needsUpdate=!0,v(S)}),n.load(fl.resolveURL(_,c.path),b,void 0,y)})}).then(function(_){return p===!0&&h.revokeObjectURL(d),xa(_,u),_.userData.mimeType=u.mimeType||bw(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[yt.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const d=c.associations.get(u);u=c.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,d)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let d=this.cache.get(h);d||(d=new fx,zi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,d.sizeAttenuation=!1,this.cache.add(h,d)),a=d}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let d=this.cache.get(h);d||(d=new ux,zi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,this.cache.add(h,d)),a=d}if(r||c||u){let h="ClonedMaterial:"+a.uuid+":";r&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let d=this.cache.get(h);d||(d=a.clone(),c&&(d.vertexColors=!0),u&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(h,d),this.associations.set(d,this.associations.get(a))),a=d}e.material=a}getMaterialType(){return Mp}loadMaterial(e){const n=this,a=this.json,r=this.extensions,c=a.materials[e];let u;const h={},d=c.extensions||{},p=[];if(d[yt.KHR_MATERIALS_UNLIT]){const _=r[yt.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),p.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new ot(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Xn),h.opacity=v[3]}_.baseColorTexture!==void 0&&p.push(n.assignTexture(h,"map",_.baseColorTexture,Nn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(p.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),p.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),p.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=Fi);const g=c.alphaMode||pd.OPAQUE;if(g===pd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===pd.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Hs&&(p.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new rt(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==Hs&&(p.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Hs){const _=c.emissiveFactor;h.emissive=new ot().setRGB(_[0],_[1],_[2],Xn)}return c.emissiveTexture!==void 0&&u!==Hs&&p.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,Nn)),Promise.all(p).then(function(){const _=new u(h);return c.name&&(_.name=c.name),xa(_,c),n.associations.set(_,{materials:e}),c.extensions&&Is(r,_,c),_})}createUniqueName(e){const n=Ht.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function c(h){return a[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(d){return Uv(d,h,n)})}const u=[];for(let h=0,d=e.length;h<d;h++){const p=e[h],g=Mw(p),_=r[g];if(_)u.push(_.promise);else{let v;p.extensions&&p.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?v=c(p):v=Uv(new Wi,p,n),r[g]={primitive:p,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let d=0,p=u.length;d<p;d++){const g=u[d].material===void 0?xw(this.cache):this.getDependency("material",u[d].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(d){const p=d.slice(0,d.length-1),g=d[d.length-1],_=[];for(let y=0,b=g.length;y<b;y++){const E=g[y],S=u[y];let x;const U=p[y];if(S.mode===vi.TRIANGLES||S.mode===vi.TRIANGLE_STRIP||S.mode===vi.TRIANGLE_FAN||S.mode===void 0)x=c.isSkinnedMesh===!0?new yb(E,U):new ci(E,U),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===vi.TRIANGLE_STRIP?x.geometry=Cv(x.geometry,Kv):S.mode===vi.TRIANGLE_FAN&&(x.geometry=Cv(x.geometry,ep));else if(S.mode===vi.LINES)x=new Ab(E,U);else if(S.mode===vi.LINE_STRIP)x=new Sp(E,U);else if(S.mode===vi.LINE_LOOP)x=new Rb(E,U);else if(S.mode===vi.POINTS)x=new wb(E,U);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&Sw(x,c),x.name=n.createUniqueName(c.name||"mesh_"+e),xa(x,c),S.extensions&&Is(r,x,S),n.assignFinalMaterial(x),_.push(x)}for(let y=0,b=_.length;y<b;y++)n.associations.set(_[y],{meshes:e,primitives:y});if(_.length===1)return c.extensions&&Is(r,_[0],c),_[0];const v=new Gs;c.extensions&&Is(r,v,c),n.associations.set(v,{meshes:e});for(let y=0,b=_.length;y<b;y++)v.add(_[y]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Gn(Jv.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new Ep(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),xa(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,h=[],d=[];for(let p=0,g=u.length;p<g;p++){const _=u[p];if(_){h.push(_);const v=new ht;c!==null&&v.fromArray(c.array,p*16),d.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[p])}return new xp(h,d)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],c=r.name?r.name:"animation_"+e,u=[],h=[],d=[],p=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const y=r.channels[_],b=r.samplers[y.sampler],E=y.target,S=E.node,x=r.parameters!==void 0?r.parameters[b.input]:b.input,U=r.parameters!==void 0?r.parameters[b.output]:b.output;E.node!==void 0&&(u.push(this.getDependency("node",S)),h.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",U)),p.push(b),g.push(E))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d),Promise.all(p),Promise.all(g)]).then(function(_){const v=_[0],y=_[1],b=_[2],E=_[3],S=_[4],x=[];for(let U=0,D=v.length;U<D;U++){const C=v[U],F=y[U],G=b[U],P=E[U],X=S[U];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const N=a._createAnimationTracks(C,F,G,P,X);if(N)for(let R=0;R<N.length;R++)x.push(N[R])}return new Bb(c,void 0,x)})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let d=0,p=r.weights.length;d<p;d++)h.morphTargetInfluences[d]=r.weights[d]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=r.children||[];for(let p=0,g=h.length;p<g;p++)u.push(a.getDependency("node",h[p]));const d=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),d]).then(function(p){const g=p[0],_=p[1],v=p[2];v!==null&&g.traverse(function(y){y.isSkinnedMesh&&y.bind(v,Ew)});for(let y=0,b=_.length;y<b;y++)g.add(_[y]);return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?r.createUniqueName(c.name):"",h=[],d=r._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(e)});return d&&h.push(d),c.camera!==void 0&&h.push(r.getDependency("camera",c.camera).then(function(p){return r._getNodeRef(r.cameraCache,c.camera,p)})),r._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(e)}).forEach(function(p){h.push(p)}),this.nodeCache[e]=Promise.all(h).then(function(p){let g;if(c.isBone===!0?g=new lx:p.length>1?g=new Gs:p.length===1?g=p[0]:g=new $t,g!==p[0])for(let _=0,v=p.length;_<v;_++)g.add(p[_]);if(c.name&&(g.userData.name=c.name,g.name=u),xa(g,c),c.extensions&&Is(a,g,c),c.matrix!==void 0){const _=new ht;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!r.associations.has(g))r.associations.set(g,{});else if(c.mesh!==void 0&&r.meshCache.refs[c.mesh]>1){const _=r.associations.get(g);r.associations.set(g,{..._})}return r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,c=new Gs;a.name&&(c.name=r.createUniqueName(a.name)),xa(c,a),a.extensions&&Is(n,c,a);const u=a.nodes||[],h=[];for(let d=0,p=u.length;d<p;d++)h.push(r.getDependency("node",u[d]));return Promise.all(h).then(function(d){for(let g=0,_=d.length;g<_;g++)c.add(d[g]);const p=g=>{const _=new Map;for(const[v,y]of r.associations)(v instanceof zi||v instanceof Tn)&&_.set(v,y);return g.traverse(v=>{const y=r.associations.get(v);y!=null&&_.set(v,y)}),_};return r.associations=p(c),c})}_createAnimationTracks(e,n,a,r,c){const u=[],h=e.name?e.name:e.uuid,d=[];is[c.path]===is.weights?e.traverse(function(v){v.morphTargetInfluences&&d.push(v.name?v.name:v.uuid)}):d.push(h);let p;switch(is[c.path]){case is.weights:p=Zr;break;case is.rotation:p=Qr;break;case is.translation:case is.scale:p=Jr;break;default:switch(a.itemSize){case 1:p=Zr;break;case 2:case 3:default:p=Jr;break}break}const g=r.interpolation!==void 0?vw[r.interpolation]:_l,_=this._getArrayFromAccessor(a);for(let v=0,y=d.length;v<y;v++){const b=new p(d[v]+"."+is[c.path],n.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),u.push(b)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=rp(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof Qr?_w:bx;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Aw(o,e,n){const a=e.attributes,r=new ki;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(r.set(new j(d[0],d[1],d[2]),new j(p[0],p[1],p[2])),h.normalized){const g=rp(kr[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new j,d=new j;for(let p=0,g=c.length;p<g;p++){const _=c[p];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],y=v.min,b=v.max;if(y!==void 0&&b!==void 0){if(d.setX(Math.max(Math.abs(y[0]),Math.abs(b[0]))),d.setY(Math.max(Math.abs(y[1]),Math.abs(b[1]))),d.setZ(Math.max(Math.abs(y[2]),Math.abs(b[2]))),v.normalized){const E=rp(kr[v.componentType]);d.multiplyScalar(E)}h.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new Xi;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function Uv(o,e,n){const a=e.attributes,r=[];function c(u,h){return n.getDependency("accessor",u).then(function(d){o.setAttribute(h,d)})}for(const u in a){const h=sp[u]||u.toLowerCase();h in o.attributes||r.push(c(a[u],h))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(h){o.setIndex(h)});r.push(u)}return At.workingColorSpace!==Xn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${At.workingColorSpace}" not supported.`),xa(o,e),Aw(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?yw(o,e.targets,n):o})}const Ov={type:"change"},wp={type:"start"},Ex={type:"end"},ru=new yl,Pv=new as,Rw=Math.cos(70*Jv.DEG2RAD),gn=new j,Zn=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gd=1e-6;class ww extends lE{constructor(e,n=null){super(e,n),this.state=Wt.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Gi,this._lastTargetPosition=new j,this._quat=new Gi().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new iv,this._sphericalDelta=new iv,this._scale=1,this._panOffset=new j,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new j,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dw.bind(this),this._onPointerDown=Cw.bind(this),this._onPointerUp=Nw.bind(this),this._onContextMenu=Fw.bind(this),this._onMouseWheel=Ow.bind(this),this._onKeyDown=Pw.bind(this),this._onTouchStart=Iw.bind(this),this._onTouchMove=Bw.bind(this),this._onMouseDown=Lw.bind(this),this._onMouseMove=Uw.bind(this),this._interceptControlDown=zw.bind(this),this._interceptControlUp=Hw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ov),this.update(),this.state=Wt.NONE}update(e=null){const n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(a)&&isFinite(r)&&(a<-Math.PI?a+=Zn:a>Math.PI&&(a-=Zn),r<-Math.PI?r+=Zn:r>Math.PI&&(r-=Zn),a<=r?this._spherical.theta=Math.max(a,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+r)/2?Math.max(a,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=gn.length();u=this._clampDistance(h*this._scale);const d=h-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),c=!!d}else if(this.object.isOrthographicCamera){const h=new j(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=d!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(ru.origin.copy(this.object.position),ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ru.direction))<Rw?this.object.lookAt(this.target):(Pv.setFromNormalAndCoplanarPoint(this.object.up,this.target),ru.intersectPlane(Pv,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>gd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gd||this._lastTargetPosition.distanceToSquared(this.target)>gd?(this.dispatchEvent(Ov),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;gn.copy(r).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),r=e-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=r/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(a,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(a,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,c=Math.sqrt(a*a+r*r);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),c=.5*(e.pageY+a.y);this._rotateEnd.set(r,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(a,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,c=Math.sqrt(a*a+r*r);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,h=(e.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new rt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function Cw(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function Dw(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function Nw(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ex),this.state=Wt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Lw(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Wt.DOLLY;break;case zr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Wt.ROTATE}break;case zr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(wp)}function Uw(o){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Ow(o){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(o.preventDefault(),this.dispatchEvent(wp),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Ex))}function Pw(o){this.enabled!==!1&&this._handleKeyDown(o)}function Iw(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Wt.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Wt.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(wp)}function Bw(o){switch(this._trackPointer(o),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Wt.NONE}}function Fw(o){this.enabled!==!1&&o.preventDefault()}function zw(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hw(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Gw="/Chi-Botanical/assets/download-Ca-91j9r.webp",Vw="/Chi-Botanical/assets/GettyImages-482350860%20(1)-Dv6MDqv_.webp",kw="/Chi-Botanical/assets/luxury-nail-manicure-dsJk9mds.jpg",Xw="/Chi-Botanical/assets/Mesotherapy-min-450x433-qggAlRqZ.png",Ww="/Chi-Botanical/assets/pedicure-2-DNm8YrML.jpg",jw="/Chi-Botanical/assets/R%20(1)-BWu9qDMM.jpg",Yw="/Chi-Botanical/assets/Screenshot%202025-06-27%20055142-DeGeb9Nw.png",qw=({modelPath:o})=>{const e=Pt.useRef(null),[n,a]=Pt.useState(0),[r,c]=Pt.useState(null);return Pt.useEffect(()=>{let u,h,d,p,g,_;const v=e.current;if(!v){console.error("Three.js mount container not found.");return}u=new _b,h=new Gn(75,v.offsetWidth/v.offsetHeight,.1,1e3),h.position.set(0,.2,.5),h.lookAt(u.position),d=new WR({antialias:!0,alpha:!0}),d.setSize(v.offsetWidth,v.offsetHeight),d.setClearColor(15921906,0),v.appendChild(d.domElement);const y=new Zb(16777215,1.5);u.add(y);const b=new gx(16777215,1.5);b.position.set(1,1,2),u.add(b);const E=new jR,S=`/Chi-Botanical/${o}`;E.load(S,D=>{p=D.scene;const C=new ki().setFromObject(p),F=new j;C.getCenter(F),p.position.x=-F.x,p.position.y=-F.y,p.position.z=-F.z,p.scale.set(.7,.7,.7),u.add(p),g=new ww(h,d.domElement),g.enableDamping=!0,g.dampingFactor=.1,g.enableZoom=!1,g.enablePan=!1,g.enableRotate=!0,g.target.set(0,0,0),g.minDistance=.3,g.maxDistance=1,g.update(),x(),U(),a(100)},D=>{a(Math.round(D.loaded/D.total*100))},D=>{console.error("Failed to load model:",D),c("Failed to load 3D model. Check console for details.")});const x=()=>{_=requestAnimationFrame(x),p&&(p.rotation.y+=.005,p.rotation.x+=.003),g&&g.update(),d.render(u,h)},U=()=>{const D=v.offsetWidth,C=v.offsetHeight;h.aspect=D/C,h.updateProjectionMatrix(),d.setSize(D,C)};return window.addEventListener("resize",U,!1),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",U,!1),g&&g.dispose(),d&&d.dispose(),u&&u.traverse(D=>{D.isMesh&&(D.geometry.dispose(),Array.isArray(D.material)?D.material.forEach(C=>C.dispose()):D.material.dispose())}),v&&d.domElement&&v.removeChild(d.domElement)}},[o]),$.jsxs("div",{ref:e,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[n<100&&!r&&$.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#000",zIndex:10},children:["Loading: ",n,"%"]}),r&&$.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"red",color:"white",padding:"20px",zIndex:10},children:r})]})},Kw=({onAnimationComplete:o,animationPhase:e,setAnimationPhase:n})=>{const a=Pt.useRef(null),r=Pt.useRef([]),c=Pt.useRef(null),u=Pt.useRef(!1),h="Inter, sans-serif",d="CHI BOTANICAL",p=["#98FB98","#ADFF2F","#00FA9A","#3CB371","#66CDAA","#7CFC00","#32CD32"],g=window.innerWidth<=768,_=g?50:85,v=g?1500:4e3,y=g?1:2.5,b=g?4:2.5;class E{constructor(x,U,D,C){this.x=x,this.y=U,this.targetX=x,this.targetY=U,this.initialX=x,this.initialY=U,this.radius=D,this.color=C,this.alpha=1,this.vx=(Math.random()-.5)*2,this.vy=(Math.random()-.5)*2,this.life=0,this.maxLife=100+Math.random()*50,this.gravity=0,this.rotation=Math.random()*Math.PI*2,this.rotationSpeed=0}draw(x){x.save(),x.translate(this.x,this.y),x.rotate(this.rotation),x.beginPath();const U=this.radius*1.5,D=this.radius*4;x.moveTo(0,-D/2),x.bezierCurveTo(U,-D*.3,U,D*.3,0,D/2),x.bezierCurveTo(-U,D*.3,-U,-D*.3,0,-D/2),x.closePath(),x.fillStyle=this.color,x.globalAlpha=this.alpha,x.fill(),x.globalAlpha=1,x.restore()}updateForForming(x){this.x+=(this.targetX-this.x)*x,this.y+=(this.targetY-this.y)*x}updateForScattering(){this.x+=this.vx,this.y+=this.vy,this.vy+=this.gravity,this.rotation+=this.rotationSpeed,this.life++,this.alpha=1-this.life/this.maxLife,this.alpha<=.05&&(this.alpha=0)}}return Pt.useLayoutEffect(()=>{const S=a.current,x=S.getContext("2d");if(S.width=window.innerWidth,S.height=window.innerHeight,S.width===0||S.height===0){console.warn("Canvas dimensions are zero. Skipping initial particle setup.");return}const D=((P,X,N,R)=>{const z=document.createElement("canvas"),le=z.getContext("2d");z.width=R.canvas.width,z.height=R.canvas.height,le.font=`${X}px ${N}`,le.textBaseline="middle",le.fillStyle="#000";let ae=0;const _e=[];for(let Y=0;Y<P.length;Y++){const pe=P[Y],Me=le.measureText(pe).width;_e.push(Me),ae+=Me,Y<P.length-1&&(ae+=b)}let he=z.width/2-ae/2;const B=g?-80:-70,J=z.height/2+B;for(let Y=0;Y<P.length;Y++){const pe=P[Y];le.fillText(pe,he,J),he+=_e[Y]+b}if(z.width===0||z.height===0)return console.error("Temporary canvas dimensions are zero. Cannot get image data."),[];const be=le.getImageData(0,0,z.width,z.height).data,L=[];for(let Y=0;Y<z.height;Y+=2)for(let pe=0;pe<z.width;pe+=2){const Me=(Y*z.width+pe)*4;be[Me+3]>0&&L.push({x:pe,y:Y})}return L})(d,_,h,x);r.current=[];for(let P=0;P<v;P++){const X=Math.random()*S.width,N=Math.random()*S.height,R=y+Math.random()*.5,z=D[P%D.length],le=p[Math.floor(Math.random()*p.length)],ae=new E(X,N,R,le);ae.initialX=X,ae.initialY=N,z?(ae.targetX=z.x,ae.targetY=z.y):(ae.targetX=Math.random()*S.width,ae.targetY=Math.random()*S.height),r.current.push(ae)}let C=0,F=null;const G=P=>{F||(F=P);const X=P-F;if(x.clearRect(0,0,S.width,S.height),r.current.forEach(N=>N.draw(x)),e==="forming")C=Math.min(1,X/15e3),r.current.forEach(R=>{R.updateForForming(C*.05)}),C>=1&&(r.current.forEach(R=>{R.x=R.targetX,R.y=R.targetY}),n("formedAndIdle"),F=P);else if(e==="formedAndIdle")X>=2e3&&(n("scattering"),F=P,u.current||(r.current.forEach(R=>{R.vx=(Math.random()-.5)*40,R.vy=(Math.random()-1)*30,R.gravity=.05+Math.random()*.05,R.rotation=Math.random()*Math.PI*2,R.rotationSpeed=(Math.random()-.5)*.08,R.color=p[Math.floor(Math.random()*p.length)],R.radius=y*3+Math.random()*2}),u.current=!0));else if(e==="scattering"){let R=!0;if(r.current.forEach(z=>{z.updateForScattering(),z.alpha>0&&(R=!1)}),R||X>=4e3){n("done"),o();return}}c.current=requestAnimationFrame(G)};return c.current=requestAnimationFrame(G),()=>{c.current&&cancelAnimationFrame(c.current)}},[e,o,n]),Pt.useEffect(()=>{const S=()=>{const x=a.current;x&&(x.width=window.innerWidth,x.height=window.innerHeight)};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),$.jsxs("div",{className:`intro-animation-container ${e==="done"?"done":"active"}`,style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},children:[(e==="forming"||e==="formedAndIdle")&&$.jsx("div",{style:{position:"absolute",top:"20%",left:0,width:"100%",height:"100%",zIndex:0},children:$.jsx(qw,{modelPath:"/brick.glb"})}),$.jsx("canvas",{ref:a,className:"intro-canvas",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:10}})]})},Zw=()=>{const[o,e]=Pt.useState(!0),[n,a]=Pt.useState("forming"),[r,c]=Pt.useState(null),u=Pt.useRef(null),h=Pt.useRef(null),d=Pt.useCallback(()=>{e(!1),a("done")},[]),p=(_,v)=>{c({name:_,price:v}),setTimeout(()=>{u.current&&u.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},g=()=>{h.current&&h.current.scrollIntoView({behavior:"smooth",block:"start"})};return $.jsxs("div",{className:"app-container",children:[o&&$.jsx(Kw,{onAnimationComplete:d,animationPhase:n,setAnimationPhase:a}),$.jsxs("main",{className:`main-content ${o?"main-content-hidden":"main-content-visible"}`,style:{display:o?"none":"flex"},children:[$.jsx("video",{className:"background-video",src:"https://videos.pexels.com/video-files/855907/855907-sd_640_360_25fps.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onError:_=>console.error("Video loading error:",_),children:"Your browser does not support the video tag."}),$.jsx("div",{className:"video-overlay"}),$.jsxs("div",{className:"hero-content",children:[$.jsx("h1",{className:"hero-title",children:"Chi Botanical"}),$.jsx("p",{className:"hero-subtitle",children:"Your Moment of Radiance."}),$.jsx("button",{className:"hero-button",onClick:g,children:"BOOK YOUR EXPERIENCE"})]})]}),$.jsxs("section",{className:`section-common ${o?"section-hidden":"section-visible"}`,children:[$.jsxs("div",{className:"section-crafted-for-you",children:[$.jsx("h2",{className:"section-title",children:"Crafted For You"}),$.jsx("p",{className:"section-description",children:"Welcome. This is more than makeup, more than nails — it's a space crafted for you. A haven to pause, indulge, and reveal your unique radiance. I believe in enhancing beauty with artistry and care, creating an experience that leaves you feeling refreshed, confident, and truly valued."})]}),$.jsxs("div",{className:"section-offerings",ref:h,children:[$.jsx("h2",{className:"section-title",children:"The Offerings"}),$.jsxs("div",{className:"offerings-grid",children:[$.jsxs("div",{className:"offering-card",children:[$.jsx("div",{className:"offering-icon",children:$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-paintbrush",children:[$.jsx("path",{d:"M18.37 2.63c-2.44-.94-5.3-.2-7.22 1.72L3 13.5V19h5.5l9.55-9.55c1.92-1.92 2.66-4.78 1.72-7.22l-.45-.45Z"}),$.jsx("path",{d:"M15 5l4 4"}),$.jsx("path",{d:"M10.5 9.5L1.5 18.5"})]})}),$.jsx("h3",{className:"offering-title",children:"Signature Facial Makeup"}),$.jsx("p",{className:"offering-description",children:"A tailored application using premium products for flawless, photo-ready skin that enhances your natural beauty."}),$.jsx("p",{className:"offering-price",children:"Approx. 60 minutes | $120"}),$.jsx("button",{className:"offering-button",onClick:()=>p("Signature Facial Makeup",120),children:"SELECT SERVICE"})]}),$.jsxs("div",{className:"offering-card",children:[$.jsx("div",{className:"offering-icon",children:$.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucude-hand",children:$.jsx("path",{d:"M18 11.4V22h-4V12.4L7.5 6H4c0-1.5 1.5-3 3-3h5.4L18 11.4z"})})}),$.jsx("h3",{className:"offering-title",children:"Gel Manicure Artistry"}),$.jsx("p",{className:"offering-description",children:"Impeccable colour application, lasting shine, and detailed cuticle care for elegant, polished hands."}),$.jsx("p",{className:"offering-price",children:"Approx. 75 minutes | $95"}),$.jsx("button",{className:"offering-button",onClick:()=>p("Gel Manicure Artistry",95),children:"SELECT SERVICE"})]}),$.jsxs("div",{className:"offering-card",children:[$.jsx("div",{className:"offering-icon",children:$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-feather",children:[$.jsx("path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}),$.jsx("path",{d:"M16 8L2 22"}),$.jsx("path",{d:"M17.5 15H9"})]})}),$.jsx("h3",{className:"offering-title",children:"Bridal Radiance Makeup"}),$.jsx("p",{className:"offering-description",children:"A comprehensive, long-lasting look designed to make you feel breathtaking on your special day. Consultation included."}),$.jsx("p",{className:"offering-price",children:"Approx. 120 minutes | $250"}),$.jsx("button",{className:"offering-button",onClick:()=>p("Bridal Radiance Makeup",250),children:"SELECT SERVICE"})]})]})]}),$.jsxs("div",{className:"section-gallery",children:[$.jsx("h2",{className:"section-title",children:"Our Gallery"}),$.jsxs("div",{className:"gallery-grid",children:[$.jsx("div",{className:"gallery-card",children:$.jsx("img",{src:Gw,alt:"Gallery Image 1",className:"gallery-image",onError:_=>{_.target.onerror=null,_.target.src="https://placehold.co/600x400/90EE90/000000?text=Image+Error"}})}),$.jsx("div",{className:"gallery-card",children:$.jsx("img",{src:Vw,alt:"Gallery Image 2",className:"gallery-image",onError:_=>{_.target.onerror=null,_.target.src="https://placehold.co/600x400/90EE90/000000?text=Image+Error"}})}),$.jsx("div",{className:"gallery-card",children:$.jsx("img",{src:kw,alt:"Gallery Image 2",className:"gallery-image",onError:_=>{_.target.onerror=null,_.target.src="https://placehold.co/600x400/90EE90/000000?text=Image+Error"}})}),$.jsx("div",{className:"gallery-card",children:$.jsx("img",{src:Xw,alt:"Gallery Image 2",className:"gallery-image",onError:_=>{_.target.onerror=null,_.target.src="https://placehold.co/600x400/90EE90/000000?text=Image+Error"}})}),$.jsx("div",{className:"gallery-card",children:$.jsx("img",{src:Ww,alt:"Gallery Image 2",className:"gallery-image",onError:_=>{_.target.onerror=null,_.target.src="https://placehold.co/600x400/90EE90/000000?text=Image+Error"}})}),$.jsx("div",{className:"gallery-card",children:$.jsx("img",{src:jw,alt:"Gallery Image 2",className:"gallery-image",onError:_=>{_.target.onerror=null,_.target.src="https://placehold.co/600x400/90EE90/000000?text=Image+Error"}})})]})]})]}),!o&&$.jsx(Qw,{service:r,ref:u,showIntro:o}),$.jsx(Jw,{show:!o}),$.jsx($w,{show:!o}),$.jsx("style",{children:`
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
                `})]})},Qw=xu.forwardRef(({service:o,showIntro:e},n)=>{Pt.useEffect(()=>{u("selectDateTime"),d(null),g(null),v(""),b(""),S(""),U(""),C(new Date().getMonth()),G(new Date().getFullYear()),X(""),R("")},[o]);const[a,r]=Pt.useState([]),[c,u]=Pt.useState("selectDateTime"),[h,d]=Pt.useState(null),[p,g]=Pt.useState(null),[_,v]=Pt.useState(""),[y,b]=Pt.useState(""),[E,S]=Pt.useState(""),[x,U]=Pt.useState(""),[D,C]=Pt.useState(new Date().getMonth()),[F,G]=Pt.useState(new Date().getFullYear()),[P,X]=Pt.useState(""),[N,R]=Pt.useState(""),z=(W,ce)=>new Date(ce,W+1,0).getDate(),le=W=>["January","February","March","April","May","June","July","August","September","October","November","December"][W],_e=(()=>{const W=[];for(let ce=9;ce<17;ce++)W.push(`${ce}:00 AM`),ce<16&&W.push(`${ce}:30 AM`);return W.map(ce=>{const[Se,ve,we]=ce.split(/:|\s/);let Je=parseInt(Se);return we==="PM"&&Je!==12?Je+=12:we==="AM"&&Je===12&&(Je=0),`${Je}:${ve} ${we||""}`.trim()})})(),he=()=>{C(W=>W===0?(G(ce=>ce-1),11):W-1),d(null),g(null)},B=()=>{C(W=>W===11?(G(ce=>ce+1),0):W+1),d(null),g(null)},J=W=>{const ce=new Date(F,D,W),Se=new Date;if(Se.setHours(0,0,0,0),ce<Se){Y("Cannot select a past date.","error");return}const ve=`${ce.getFullYear()}-${String(ce.getMonth()+1).padStart(2,"0")}-${String(ce.getDate()).padStart(2,"0")}`;d(ve),g(null),X(""),R("")},K=W=>{if(!h){Y("Please select a date first.","error");return}a.some(Se=>Se.date===h&&Se.time===W)?Y("This slot is already booked. Please choose another time.","error"):(g(W),X(""),R(""))},be=()=>{if(!o){Y("Please select a service first.","error");return}if(!h||!p){Y("Please select both a date and a time.","error");return}u("confirmDetails"),X(""),R("")},L=()=>{if(!_||!y||!E){Y("Please fill in all required contact details.","error");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)){Y("Please enter a valid email address.","error");return}if(!/^\+?[0-9\s-()]{7,20}$/.test(E)){Y("Please enter a valid phone number.","error");return}try{r(W=>[...W,{date:h,time:p}]),u("bookingSuccess"),Y("Booking confirmed successfully!","success"),d(null),g(null),v(""),b(""),S(""),U("")}catch(W){console.error("Error confirming booking:",W),u("bookingFailure"),Y("Failed to confirm booking. Please try again.","error")}},Y=(W,ce)=>{X(W),R(ce),setTimeout(()=>{X(""),R("")},5e3)},pe=o!==null,Me=()=>{if(e)return null;if(!pe)return $.jsxs("div",{className:"no-service-selected-message",children:[$.jsx("p",{children:'Please select a service from "The Offerings" section to book your experience.'}),$.jsxs("p",{className:"user-id",children:["Your User ID: ",$.jsx("span",{})]})]});switch(c){case"selectDateTime":const W=new Date(F,D,1).getDay(),ce=z(D,F),Se=Array.from({length:ce},(ve,we)=>we+1);return $.jsxs("div",{className:"calendar-time-layout",children:[$.jsxs("div",{className:"calendar-card",children:[$.jsxs("h3",{className:"calendar-title",children:["Select Date & Time for ",o.name]}),$.jsxs("div",{className:"calendar-navigation",children:[$.jsx("button",{onClick:he,className:"calendar-navigation-button","aria-label":"Previous Month",children:$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-arrow-left",children:[$.jsx("path",{d:"m12 19-7-7 7-7"}),$.jsx("path",{d:"M19 12H5"})]})}),$.jsxs("h4",{className:"calendar-navigation-title",children:[le(D)," ",F]}),$.jsx("button",{onClick:B,className:"calendar-navigation-button","aria-label":"Next Month",children:$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-arrow-right",children:[$.jsx("path",{d:"M5 12h14"}),$.jsx("path",{d:"m12 5 7 7-7 7"})]})})]}),$.jsx("div",{className:"week-days-grid",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(ve=>$.jsx("div",{children:ve},ve))}),$.jsxs("div",{className:"days-grid",children:[Array.from({length:W}).map((ve,we)=>$.jsx("div",{className:"day-cell-empty"},`empty-${we}`)),Se.map(ve=>{const we=`${F}-${String(D+1).padStart(2,"0")}-${String(ve).padStart(2,"0")}`,Je=h===we,je=new Date;je.setHours(0,0,0,0);const Rt=new Date(F,D,ve)<je;return $.jsx("button",{onClick:()=>J(ve),className:`day-cell ${Je?"selected":"default"} ${Rt?"past-date":""}`,disabled:Rt,children:ve},ve)})]})]}),$.jsxs("div",{className:"time-slots-card",children:[$.jsx("h3",{className:"calendar-title",children:"Available Times"}),h?$.jsx("div",{className:"time-slots-grid",children:_e.map(ve=>{const we=p===ve,Je=a.some(Ge=>Ge.date===h&&Ge.time===ve),je=new Date,[Nt,Rt]=ve.split(" ");let[lt,H]=Nt.split(":").map(Number);Rt==="PM"&&lt!==12?lt+=12:Rt==="AM"&&lt===12&&(lt=0);const an=h.split("-").map(Number),ct=new Date(an[0],an[1]-1,an[2],lt,H)<je;return $.jsxs("button",{onClick:()=>K(ve),className:`time-slot-button ${we?"selected":"default"} ${Je||ct?"booked":""}`,disabled:Je||ct,children:[ve," ",Je?"(Booked)":ct?"(Past)":""]},ve)})}):$.jsx("p",{className:"no-times-message",children:"Please select a date to see available times."}),$.jsx("button",{onClick:be,disabled:!h||!p,className:"proceed-button",children:"PROCEED TO DETAILS"})]})]});case"confirmDetails":return $.jsxs("div",{className:"confirm-details-card",children:[$.jsx("h3",{className:"calendar-title",children:"Confirm Your Booking"}),$.jsxs("div",{className:"details-summary",children:[$.jsxs("p",{children:[$.jsx("strong",{children:"Service:"})," ",o.name," ($",o.price,")"]}),$.jsxs("p",{children:[$.jsx("strong",{children:"Date:"})," ",h]}),$.jsxs("p",{children:[$.jsx("strong",{children:"Time:"})," ",p]}),$.jsxs("p",{className:"user-id",children:["Your User ID: ",$.jsx("span",{})]})]}),$.jsxs("form",{className:"form-group",children:[$.jsxs("div",{children:[$.jsx("label",{htmlFor:"userName",className:"form-label",children:"Your Name:"}),$.jsx("input",{type:"text",id:"userName",value:_,onChange:ve=>v(ve.target.value),className:"form-input",placeholder:"Full Name",required:!0})]}),$.jsxs("div",{children:[$.jsx("label",{htmlFor:"userEmail",className:"form-label",children:"Your Email:"}),$.jsx("input",{type:"email",id:"userEmail",value:y,onChange:ve=>b(ve.target.value),className:"form-input",placeholder:"email@example.com",required:!0})]}),$.jsxs("div",{children:[$.jsx("label",{htmlFor:"userPhone",className:"form-label",children:"Your Phone:"}),$.jsx("input",{type:"tel",id:"userPhone",value:E,onChange:ve=>S(ve.target.value),className:"form-input",placeholder:"+1234567890",required:!0})]}),$.jsxs("div",{children:[$.jsx("label",{htmlFor:"userNotes",className:"form-label",children:"Additional Notes (Optional):"}),$.jsx("textarea",{id:"userNotes",value:x,onChange:ve=>U(ve.target.value),rows:"3",className:"form-textarea",placeholder:"Any special requests or details..."})]}),$.jsxs("div",{className:"form-actions",children:[$.jsx("button",{type:"button",onClick:()=>u("selectDateTime"),className:"form-button back",children:"BACK"}),$.jsx("button",{type:"button",onClick:L,className:"form-button confirm",children:"CONFIRM BOOKING"})]})]})]});case"bookingSuccess":return $.jsxs("div",{className:"booking-status-card success",children:[$.jsx("h3",{className:"status-title",children:"Booking Successful!"}),$.jsxs("p",{className:"status-message success",children:["Your appointment for ",$.jsx("span",{children:o.name})," on ",$.jsx("span",{children:h})," at ",$.jsx("span",{children:p})," has been confirmed."]}),$.jsxs("p",{className:"status-sub-message success",children:["A confirmation email has been sent to ",y,"."]}),$.jsx("button",{onClick:()=>{setSelectedServiceForBooking(null),u("selectDateTime")},className:"status-button success",children:"BOOK ANOTHER APPOINTMENT"})]});case"bookingFailure":return $.jsxs("div",{className:"booking-status-card failure",children:[$.jsx("h3",{className:"status-title",children:"Booking Failed!"}),$.jsxs("p",{className:"status-message failure",children:["We encountered an issue confirming your booking.",P&&$.jsx("p",{className:"mt-2",children:P})]}),$.jsx("button",{onClick:()=>u("confirmDetails"),className:"status-button failure",children:"TRY AGAIN"}),$.jsx("button",{onClick:()=>{setSelectedServiceForBooking(null),u("selectDateTime")},className:"status-button failure",children:"SELECT NEW SERVICE"})]});default:return null}};return $.jsx("section",{className:"booking-section",ref:n,children:$.jsxs("div",{className:`booking-content-wrapper ${pe?"expanded-booking-content":"collapsed-booking-content"}`,children:[P&&$.jsx("div",{className:`message-box ${N}`,children:P}),Me()]})})}),Jw=xu.forwardRef(({show:o},e)=>$.jsxs("section",{className:`meet-artist-section ${o?"meet-artist-section-visible":"meet-artist-section-hidden"}`,ref:e,children:[$.jsx("h2",{className:"section-title",children:"Meet the Artist"}),$.jsx("div",{className:"artist-photo-placeholder",children:$.jsx("img",{src:Yw,alt:"Gallery Image 2",className:"gallery-image",onError:n=>{n.target.onerror=null,n.target.src="https://placehold.co/600x400/90EE90/000000?text=Image+Error"}})}),$.jsx("p",{className:"artist-description",children:"Driven by a passion for revealing individual beauty, [Artist Name] brings years of experience and a delicate touch to every client interaction. Dedicated to creating a calming and luxurious experience where you feel heard, pampered, and beautiful."}),$.jsxs("div",{className:"artist-contact-info",children:[$.jsxs("p",{children:["Email: ",$.jsx("a",{href:"mailto:hello@ChiBotanical.com",children:"hello@ChiBotanical.com"})]}),$.jsx("p",{children:"Location: Downtown Serenity Plaza (By Appointment Only)"})]}),$.jsxs("div",{className:"social-icons",children:[$.jsx("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",className:"social-icon","aria-label":"Instagram",children:$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-instagram",children:[$.jsx("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),$.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),$.jsx("line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"})]})}),$.jsx("a",{href:"https://www.pinterest.com/",target:"_blank",rel:"noopener noreferrer",className:"social-icon","aria-label":"Pinterest",children:$.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-pinterest",children:$.jsx("path",{d:"M8 2v8h4M8 10v4c0 1.6-1.4 2-2 2s-2-.4-2-2v-4c0-2.2 1.5-4 3.5-4h5.5c2 0 3.5 2.2 3.5 4v6c0 1.6-1.4 2-2 2s-2-.4-2-2V14M17 12h-5"})})})]})]})),$w=xu.forwardRef(({show:o},e)=>$.jsx("footer",{className:`footer ${o?"footer-visible":"footer-hidden"}`,ref:e,children:$.jsxs("p",{children:["© 2025 Chi Botanical. All Rights Reserved. | ",$.jsxs("span",{className:"footer-links",children:[$.jsx("a",{href:"#",children:"Privacy Policy"})," | ",$.jsx("a",{href:"#",children:"Terms & Conditions"})]})]})})),Iv=document.getElementById("root");Iv?BS.createRoot(Iv).render($.jsx(xu.StrictMode,{children:$.jsx(Zw,{})})):console.error("Error: Root element with ID 'root' not found in your index.html. Your React app cannot mount.");
