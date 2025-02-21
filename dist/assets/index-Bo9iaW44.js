function ib(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var J0={exports:{}},rc={},Z0={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),ob=Symbol.for("react.portal"),sb=Symbol.for("react.fragment"),ab=Symbol.for("react.strict_mode"),lb=Symbol.for("react.profiler"),ub=Symbol.for("react.provider"),cb=Symbol.for("react.context"),fb=Symbol.for("react.forward_ref"),db=Symbol.for("react.suspense"),hb=Symbol.for("react.memo"),pb=Symbol.for("react.lazy"),Vg=Symbol.iterator;function mb(t){return t===null||typeof t!="object"?null:(t=Vg&&t[Vg]||t["@@iterator"],typeof t=="function"?t:null)}var e1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t1=Object.assign,n1={};function jo(t,e,n){this.props=t,this.context=e,this.refs=n1,this.updater=n||e1}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function r1(){}r1.prototype=jo.prototype;function tp(t,e,n){this.props=t,this.context=e,this.refs=n1,this.updater=n||e1}var np=tp.prototype=new r1;np.constructor=tp;t1(np,jo.prototype);np.isPureReactComponent=!0;var zg=Array.isArray,i1=Object.prototype.hasOwnProperty,rp={current:null},o1={key:!0,ref:!0,__self:!0,__source:!0};function s1(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)i1.call(e,r)&&!o1.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ea,type:t,key:o,ref:s,props:i,_owner:rp.current}}function gb(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ip(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function yb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $g=/\/+/g;function yf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yb(""+t.key):e.toString(36)}function Nl(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ea:case ob:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+yf(s,0):r,zg(i)?(n="",t!=null&&(n=t.replace($g,"$&/")+"/"),Nl(i,e,n,"",function(c){return c})):i!=null&&(ip(i)&&(i=gb(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace($g,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",zg(t))for(var l=0;l<t.length;l++){o=t[l];var u=r+yf(o,l);s+=Nl(o,e,n,u,i)}else if(u=mb(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=r+yf(o,l++),s+=Nl(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function il(t,e,n){if(t==null)return t;var r=[],i=0;return Nl(t,r,"","",function(o){return e.call(n,o,i++)}),r}function vb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},Dl={transition:null},wb={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:rp};function a1(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!ip(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=jo;ee.Fragment=sb;ee.Profiler=lb;ee.PureComponent=tp;ee.StrictMode=ab;ee.Suspense=db;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wb;ee.act=a1;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=t1({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=rp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)i1.call(e,u)&&!o1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ea,type:t.type,key:i,ref:o,props:r,_owner:s}};ee.createContext=function(t){return t={$$typeof:cb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ub,_context:t},t.Consumer=t};ee.createElement=s1;ee.createFactory=function(t){var e=s1.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:fb,render:t}};ee.isValidElement=ip;ee.lazy=function(t){return{$$typeof:pb,_payload:{_status:-1,_result:t},_init:vb}};ee.memo=function(t,e){return{$$typeof:hb,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Dl.transition;Dl.transition={};try{t()}finally{Dl.transition=e}};ee.unstable_act=a1;ee.useCallback=function(t,e){return St.current.useCallback(t,e)};ee.useContext=function(t){return St.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ee.useEffect=function(t,e){return St.current.useEffect(t,e)};ee.useId=function(){return St.current.useId()};ee.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return St.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ee.useRef=function(t){return St.current.useRef(t)};ee.useState=function(t){return St.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return St.current.useTransition()};ee.version="18.3.1";Z0.exports=ee;var M=Z0.exports;const de=xa(M),_b=ib({__proto__:null,default:de},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb=M,Eb=Symbol.for("react.element"),bb=Symbol.for("react.fragment"),Tb=Object.prototype.hasOwnProperty,Sb=xb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kb={key:!0,ref:!0,__self:!0,__source:!0};function l1(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Tb.call(e,r)&&!kb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Eb,type:t,key:o,ref:s,props:i,_owner:Sb.current}}rc.Fragment=bb;rc.jsx=l1;rc.jsxs=l1;J0.exports=rc;var d=J0.exports,pd={},u1={exports:{}},qt={},c1={exports:{}},f1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var Y=B.length;B.push(G);e:for(;0<Y;){var ce=Y-1>>>1,te=B[ce];if(0<i(te,G))B[ce]=G,B[Y]=te,Y=ce;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],Y=B.pop();if(Y!==G){B[0]=Y;e:for(var ce=0,te=B.length,Ee=te>>>1;ce<Ee;){var Mt=2*(ce+1)-1,It=B[Mt],wt=Mt+1,At=B[wt];if(0>i(It,Y))wt<te&&0>i(At,It)?(B[ce]=At,B[wt]=Y,ce=wt):(B[ce]=It,B[Mt]=Y,ce=Mt);else if(wt<te&&0>i(At,Y))B[ce]=At,B[wt]=Y,ce=wt;else break e}}return G}function i(B,G){var Y=B.sortIndex-G.sortIndex;return Y!==0?Y:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],h=1,m=null,g=3,b=!1,I=!1,C=!1,R=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(B){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=B)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function P(B){if(C=!1,E(B),!I)if(n(u)!==null)I=!0,Qr(L);else{var G=n(c);G!==null&&Lt(P,G.startTime-B)}}function L(B,G){I=!1,C&&(C=!1,x(w),w=-1),b=!0;var Y=g;try{for(E(G),m=n(u);m!==null&&(!(m.expirationTime>G)||B&&!A());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,g=m.priorityLevel;var te=ce(m.expirationTime<=G);G=t.unstable_now(),typeof te=="function"?m.callback=te:m===n(u)&&r(u),E(G)}else r(u);m=n(u)}if(m!==null)var Ee=!0;else{var Mt=n(c);Mt!==null&&Lt(P,Mt.startTime-G),Ee=!1}return Ee}finally{m=null,g=Y,b=!1}}var N=!1,_=null,w=-1,T=5,S=-1;function A(){return!(t.unstable_now()-S<T)}function O(){if(_!==null){var B=t.unstable_now();S=B;var G=!0;try{G=_(!0,B)}finally{G?k():(N=!1,_=null)}}else N=!1}var k;if(typeof v=="function")k=function(){v(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,on=et.port2;et.port1.onmessage=O,k=function(){on.postMessage(null)}}else k=function(){R(O,0)};function Qr(B){_=B,N||(N=!0,k())}function Lt(B,G){w=R(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){I||b||(I=!0,Qr(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Y=g;g=G;try{return B()}finally{g=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=g;g=B;try{return G()}finally{g=Y}},t.unstable_scheduleCallback=function(B,G,Y){var ce=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ce+Y:ce):Y=ce,B){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Y+te,B={id:h++,callback:G,priorityLevel:B,startTime:Y,expirationTime:te,sortIndex:-1},Y>ce?(B.sortIndex=Y,e(c,B),n(u)===null&&B===n(c)&&(C?(x(w),w=-1):C=!0,Lt(P,Y-ce))):(B.sortIndex=te,e(u,B),I||b||(I=!0,Qr(L))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var G=g;return function(){var Y=g;g=G;try{return B.apply(this,arguments)}finally{g=Y}}}})(f1);c1.exports=f1;var Ib=c1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ab=M,Gt=Ib;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d1=new Set,$s={};function Pi(t,e){po(t,e),po(t+"Capture",e)}function po(t,e){for($s[t]=e,t=0;t<e.length;t++)d1.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),md=Object.prototype.hasOwnProperty,Cb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bg={},Ug={};function Pb(t){return md.call(Ug,t)?!0:md.call(Bg,t)?!1:Cb.test(t)?Ug[t]=!0:(Bg[t]=!0,!1)}function Rb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ob(t,e,n,r){if(e===null||typeof e>"u"||Rb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var op=/[\-:]([a-z])/g;function sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(op,sp);at[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(op,sp);at[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(op,sp);at[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ap(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ob(e,n,i,r)&&(n=null),r||i===null?Pb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=Ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),lp=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),p1=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),cp=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),m1=Symbol.for("react.offscreen"),Hg=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=Hg&&t[Hg]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,vf;function ys(t){if(vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vf=e&&e[1]||""}return`
`+vf+t}var wf=!1;function _f(t,e){if(!t||wf)return"";wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=l);break}}}finally{wf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ys(t):""}function jb(t){switch(t.tag){case 5:return ys(t.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return t=_f(t.type,!1),t;case 11:return t=_f(t.type.render,!1),t;case 1:return t=_f(t.type,!0),t;default:return""}}function wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ui:return"Fragment";case Bi:return"Portal";case gd:return"Profiler";case lp:return"StrictMode";case yd:return"Suspense";case vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case p1:return(t.displayName||"Context")+".Consumer";case h1:return(t._context.displayName||"Context")+".Provider";case up:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cp:return e=t.displayName||null,e!==null?e:wd(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return wd(t(e))}catch{}}return null}function Nb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wd(e);case 8:return e===lp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function g1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Db(t){var e=g1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=Db(t))}function y1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=g1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v1(t,e){e=e.checked,e!=null&&ap(t,"checked",e,!1)}function xd(t,e){v1(t,e);var n=Lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ed(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ed(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vs=Array.isArray;function ro(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(vs(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function w1(t,e){var n=Lr(e.value),r=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var al,x1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(al=al||document.createElement("div"),al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lb=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(t){Lb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ss[e]=Ss[t]})});function E1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ss.hasOwnProperty(t)&&Ss[t]?(""+e).trim():e+"px"}function b1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=E1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Mb=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sd(t,e){if(e){if(Mb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Id=null;function fp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ad=null,io=null,oo=null;function Kg(t){if(t=Sa(t)){if(typeof Ad!="function")throw Error(V(280));var e=t.stateNode;e&&(e=lc(e),Ad(t.stateNode,t.type,e))}}function T1(t){io?oo?oo.push(t):oo=[t]:io=t}function S1(){if(io){var t=io,e=oo;if(oo=io=null,Kg(t),e)for(t=0;t<e.length;t++)Kg(e[t])}}function k1(t,e){return t(e)}function I1(){}var xf=!1;function A1(t,e,n){if(xf)return t(e,n);xf=!0;try{return k1(t,e,n)}finally{xf=!1,(io!==null||oo!==null)&&(I1(),S1())}}function Us(t,e){var n=t.stateNode;if(n===null)return null;var r=lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var Cd=!1;if(Qn)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{Cd=!1}function Fb(t,e,n,r,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ks=!1,ou=null,su=!1,Pd=null,Vb={onError:function(t){ks=!0,ou=t}};function zb(t,e,n,r,i,o,s,l,u){ks=!1,ou=null,Fb.apply(Vb,arguments)}function $b(t,e,n,r,i,o,s,l,u){if(zb.apply(this,arguments),ks){if(ks){var c=ou;ks=!1,ou=null}else throw Error(V(198));su||(su=!0,Pd=c)}}function Ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function C1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yg(t){if(Ri(t)!==t)throw Error(V(188))}function Bb(t){var e=t.alternate;if(!e){if(e=Ri(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Yg(i),t;if(o===r)return Yg(i),e;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function P1(t){return t=Bb(t),t!==null?R1(t):null}function R1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=R1(t);if(e!==null)return e;t=t.sibling}return null}var O1=Gt.unstable_scheduleCallback,Xg=Gt.unstable_cancelCallback,Ub=Gt.unstable_shouldYield,Hb=Gt.unstable_requestPaint,Ve=Gt.unstable_now,Wb=Gt.unstable_getCurrentPriorityLevel,dp=Gt.unstable_ImmediatePriority,j1=Gt.unstable_UserBlockingPriority,au=Gt.unstable_NormalPriority,Gb=Gt.unstable_LowPriority,N1=Gt.unstable_IdlePriority,ic=null,In=null;function qb(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Yb,Qb=Math.log,Kb=Math.LN2;function Yb(t){return t>>>=0,t===0?32:31-(Qb(t)/Kb|0)|0}var ll=64,ul=4194304;function ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=ws(l):(o&=s,o!==0&&(r=ws(o)))}else s=n&~i,s!==0?r=ws(s):o!==0&&(r=ws(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function Xb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-mn(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=Xb(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function D1(){var t=ll;return ll<<=1,!(ll&4194240)&&(ll=64),t}function Ef(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function Zb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function L1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M1,pp,F1,V1,z1,Od=!1,cl=[],br=null,Tr=null,Sr=null,Hs=new Map,Ws=new Map,yr=[],eT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jg(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(e.pointerId)}}function as(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Sa(e),e!==null&&pp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tT(t,e,n,r,i){switch(e){case"focusin":return br=as(br,t,e,n,r,i),!0;case"dragenter":return Tr=as(Tr,t,e,n,r,i),!0;case"mouseover":return Sr=as(Sr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hs.set(o,as(Hs.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ws.set(o,as(Ws.get(o)||null,t,e,n,r,i)),!0}return!1}function $1(t){var e=oi(t.target);if(e!==null){var n=Ri(e);if(n!==null){if(e=n.tag,e===13){if(e=C1(n),e!==null){t.blockedOn=e,z1(t.priority,function(){F1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Id=r,n.target.dispatchEvent(r),Id=null}else return e=Sa(n),e!==null&&pp(e),t.blockedOn=n,!1;e.shift()}return!0}function Zg(t,e,n){Ll(t)&&n.delete(e)}function nT(){Od=!1,br!==null&&Ll(br)&&(br=null),Tr!==null&&Ll(Tr)&&(Tr=null),Sr!==null&&Ll(Sr)&&(Sr=null),Hs.forEach(Zg),Ws.forEach(Zg)}function ls(t,e){t.blockedOn===e&&(t.blockedOn=null,Od||(Od=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,nT)))}function Gs(t){function e(i){return ls(i,t)}if(0<cl.length){ls(cl[0],t);for(var n=1;n<cl.length;n++){var r=cl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&ls(br,t),Tr!==null&&ls(Tr,t),Sr!==null&&ls(Sr,t),Hs.forEach(e),Ws.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)$1(n),n.blockedOn===null&&yr.shift()}var so=tr.ReactCurrentBatchConfig,uu=!0;function rT(t,e,n,r){var i=fe,o=so.transition;so.transition=null;try{fe=1,mp(t,e,n,r)}finally{fe=i,so.transition=o}}function iT(t,e,n,r){var i=fe,o=so.transition;so.transition=null;try{fe=4,mp(t,e,n,r)}finally{fe=i,so.transition=o}}function mp(t,e,n,r){if(uu){var i=jd(t,e,n,r);if(i===null)Of(t,e,r,cu,n),Jg(t,r);else if(tT(i,t,e,n,r))r.stopPropagation();else if(Jg(t,r),e&4&&-1<eT.indexOf(t)){for(;i!==null;){var o=Sa(i);if(o!==null&&M1(o),o=jd(t,e,n,r),o===null&&Of(t,e,r,cu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Of(t,e,r,null,n)}}var cu=null;function jd(t,e,n,r){if(cu=null,t=fp(r),t=oi(t),t!==null)if(e=Ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=C1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function B1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wb()){case dp:return 1;case j1:return 4;case au:case Gb:return 16;case N1:return 536870912;default:return 16}default:return 16}}var wr=null,gp=null,Ml=null;function U1(){if(Ml)return Ml;var t,e=gp,n=e.length,r,i="value"in wr?wr.value:wr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Ml=i.slice(t,1<r?1-r:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function ey(){return!1}function Qt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fl:ey,this.isPropagationStopped=ey,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yp=Qt(No),Ta=Ne({},No,{view:0,detail:0}),oT=Qt(Ta),bf,Tf,us,oc=Ne({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(bf=t.screenX-us.screenX,Tf=t.screenY-us.screenY):Tf=bf=0,us=t),bf)},movementY:function(t){return"movementY"in t?t.movementY:Tf}}),ty=Qt(oc),sT=Ne({},oc,{dataTransfer:0}),aT=Qt(sT),lT=Ne({},Ta,{relatedTarget:0}),Sf=Qt(lT),uT=Ne({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),cT=Qt(uT),fT=Ne({},No,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dT=Qt(fT),hT=Ne({},No,{data:0}),ny=Qt(hT),pT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gT[t])?!!e[t]:!1}function vp(){return yT}var vT=Ne({},Ta,{key:function(t){if(t.key){var e=pT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vp,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wT=Qt(vT),_T=Ne({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ry=Qt(_T),xT=Ne({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vp}),ET=Qt(xT),bT=Ne({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),TT=Qt(bT),ST=Ne({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kT=Qt(ST),IT=[9,13,27,32],wp=Qn&&"CompositionEvent"in window,Is=null;Qn&&"documentMode"in document&&(Is=document.documentMode);var AT=Qn&&"TextEvent"in window&&!Is,H1=Qn&&(!wp||Is&&8<Is&&11>=Is),iy=" ",oy=!1;function W1(t,e){switch(t){case"keyup":return IT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hi=!1;function CT(t,e){switch(t){case"compositionend":return G1(e);case"keypress":return e.which!==32?null:(oy=!0,iy);case"textInput":return t=e.data,t===iy&&oy?null:t;default:return null}}function PT(t,e){if(Hi)return t==="compositionend"||!wp&&W1(t,e)?(t=U1(),Ml=gp=wr=null,Hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return H1&&e.locale!=="ko"?null:e.data;default:return null}}var RT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RT[t.type]:e==="textarea"}function q1(t,e,n,r){T1(r),e=fu(e,"onChange"),0<e.length&&(n=new yp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var As=null,qs=null;function OT(t){iw(t,0)}function sc(t){var e=qi(t);if(y1(e))return t}function jT(t,e){if(t==="change")return e}var Q1=!1;if(Qn){var kf;if(Qn){var If="oninput"in document;if(!If){var ay=document.createElement("div");ay.setAttribute("oninput","return;"),If=typeof ay.oninput=="function"}kf=If}else kf=!1;Q1=kf&&(!document.documentMode||9<document.documentMode)}function ly(){As&&(As.detachEvent("onpropertychange",K1),qs=As=null)}function K1(t){if(t.propertyName==="value"&&sc(qs)){var e=[];q1(e,qs,t,fp(t)),A1(OT,e)}}function NT(t,e,n){t==="focusin"?(ly(),As=e,qs=n,As.attachEvent("onpropertychange",K1)):t==="focusout"&&ly()}function DT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(qs)}function LT(t,e){if(t==="click")return sc(e)}function MT(t,e){if(t==="input"||t==="change")return sc(e)}function FT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:FT;function Qs(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!md.call(e,i)||!vn(t[i],e[i]))return!1}return!0}function uy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cy(t,e){var n=uy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uy(n)}}function Y1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X1(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function _p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VT(t){var e=X1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y1(n.ownerDocument.documentElement,n)){if(r!==null&&_p(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=cy(n,o);var s=cy(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zT=Qn&&"documentMode"in document&&11>=document.documentMode,Wi=null,Nd=null,Cs=null,Dd=!1;function fy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dd||Wi==null||Wi!==iu(r)||(r=Wi,"selectionStart"in r&&_p(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cs&&Qs(Cs,r)||(Cs=r,r=fu(Nd,"onSelect"),0<r.length&&(e=new yp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wi)))}function dl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gi={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},Af={},J1={};Qn&&(J1=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function ac(t){if(Af[t])return Af[t];if(!Gi[t])return t;var e=Gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in J1)return Af[t]=e[n];return t}var Z1=ac("animationend"),ew=ac("animationiteration"),tw=ac("animationstart"),nw=ac("transitionend"),rw=new Map,dy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,e){rw.set(t,e),Pi(e,[t])}for(var Cf=0;Cf<dy.length;Cf++){var Pf=dy[Cf],$T=Pf.toLowerCase(),BT=Pf[0].toUpperCase()+Pf.slice(1);Hr($T,"on"+BT)}Hr(Z1,"onAnimationEnd");Hr(ew,"onAnimationIteration");Hr(tw,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(nw,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UT=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function hy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$b(r,e,void 0,t),t.currentTarget=null}function iw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;hy(i,l,c),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;hy(i,l,c),o=u}}}if(su)throw t=Pd,su=!1,Pd=null,t}function ve(t,e){var n=e[zd];n===void 0&&(n=e[zd]=new Set);var r=t+"__bubble";n.has(r)||(ow(e,t,2,!1),n.add(r))}function Rf(t,e,n){var r=0;e&&(r|=4),ow(n,t,r,e)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Ks(t){if(!t[hl]){t[hl]=!0,d1.forEach(function(n){n!=="selectionchange"&&(UT.has(n)||Rf(n,!1,t),Rf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hl]||(e[hl]=!0,Rf("selectionchange",!1,e))}}function ow(t,e,n,r){switch(B1(e)){case 1:var i=rT;break;case 4:i=iT;break;default:i=mp}n=i.bind(null,e,n,t),i=void 0,!Cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Of(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=oi(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}A1(function(){var c=o,h=fp(n),m=[];e:{var g=rw.get(t);if(g!==void 0){var b=yp,I=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":b=wT;break;case"focusin":I="focus",b=Sf;break;case"focusout":I="blur",b=Sf;break;case"beforeblur":case"afterblur":b=Sf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ty;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=aT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=ET;break;case Z1:case ew:case tw:b=cT;break;case nw:b=TT;break;case"scroll":b=oT;break;case"wheel":b=kT;break;case"copy":case"cut":case"paste":b=dT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ry}var C=(e&4)!==0,R=!C&&t==="scroll",x=C?g!==null?g+"Capture":null:g;C=[];for(var v=c,E;v!==null;){E=v;var P=E.stateNode;if(E.tag===5&&P!==null&&(E=P,x!==null&&(P=Us(v,x),P!=null&&C.push(Ys(v,P,E)))),R)break;v=v.return}0<C.length&&(g=new b(g,I,null,n,h),m.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",g&&n!==Id&&(I=n.relatedTarget||n.fromElement)&&(oi(I)||I[Kn]))break e;if((b||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,b?(I=n.relatedTarget||n.toElement,b=c,I=I?oi(I):null,I!==null&&(R=Ri(I),I!==R||I.tag!==5&&I.tag!==6)&&(I=null)):(b=null,I=c),b!==I)){if(C=ty,P="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=ry,P="onPointerLeave",x="onPointerEnter",v="pointer"),R=b==null?g:qi(b),E=I==null?g:qi(I),g=new C(P,v+"leave",b,n,h),g.target=R,g.relatedTarget=E,P=null,oi(h)===c&&(C=new C(x,v+"enter",I,n,h),C.target=E,C.relatedTarget=R,P=C),R=P,b&&I)t:{for(C=b,x=I,v=0,E=C;E;E=Mi(E))v++;for(E=0,P=x;P;P=Mi(P))E++;for(;0<v-E;)C=Mi(C),v--;for(;0<E-v;)x=Mi(x),E--;for(;v--;){if(C===x||x!==null&&C===x.alternate)break t;C=Mi(C),x=Mi(x)}C=null}else C=null;b!==null&&py(m,g,b,C,!1),I!==null&&R!==null&&py(m,R,I,C,!0)}}e:{if(g=c?qi(c):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var L=jT;else if(sy(g))if(Q1)L=MT;else{L=DT;var N=NT}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=LT);if(L&&(L=L(t,c))){q1(m,L,n,h);break e}N&&N(t,g,c),t==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Ed(g,"number",g.value)}switch(N=c?qi(c):window,t){case"focusin":(sy(N)||N.contentEditable==="true")&&(Wi=N,Nd=c,Cs=null);break;case"focusout":Cs=Nd=Wi=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,fy(m,n,h);break;case"selectionchange":if(zT)break;case"keydown":case"keyup":fy(m,n,h)}var _;if(wp)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Hi?W1(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(H1&&n.locale!=="ko"&&(Hi||w!=="onCompositionStart"?w==="onCompositionEnd"&&Hi&&(_=U1()):(wr=h,gp="value"in wr?wr.value:wr.textContent,Hi=!0)),N=fu(c,w),0<N.length&&(w=new ny(w,t,null,n,h),m.push({event:w,listeners:N}),_?w.data=_:(_=G1(n),_!==null&&(w.data=_)))),(_=AT?CT(t,n):PT(t,n))&&(c=fu(c,"onBeforeInput"),0<c.length&&(h=new ny("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=_))}iw(m,e)})}function Ys(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Us(t,n),o!=null&&r.unshift(Ys(t,o,i)),o=Us(t,e),o!=null&&r.push(Ys(t,o,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function py(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Us(n,o),u!=null&&s.unshift(Ys(n,u,l))):i||(u=Us(n,o),u!=null&&s.push(Ys(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var HT=/\r\n?/g,WT=/\u0000|\uFFFD/g;function my(t){return(typeof t=="string"?t:""+t).replace(HT,`
`).replace(WT,"")}function pl(t,e,n){if(e=my(e),my(t)!==e&&n)throw Error(V(425))}function du(){}var Ld=null,Md=null;function Fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vd=typeof setTimeout=="function"?setTimeout:void 0,GT=typeof clearTimeout=="function"?clearTimeout:void 0,gy=typeof Promise=="function"?Promise:void 0,qT=typeof queueMicrotask=="function"?queueMicrotask:typeof gy<"u"?function(t){return gy.resolve(null).then(t).catch(QT)}:Vd;function QT(t){setTimeout(function(){throw t})}function jf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gs(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Do,Xs="__reactProps$"+Do,Kn="__reactContainer$"+Do,zd="__reactEvents$"+Do,KT="__reactListeners$"+Do,YT="__reactHandles$"+Do;function oi(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kn]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yy(t);t!==null;){if(n=t[Tn])return n;t=yy(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[Tn]||t[Kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function lc(t){return t[Xs]||null}var $d=[],Qi=-1;function Wr(t){return{current:t}}function _e(t){0>Qi||(t.current=$d[Qi],$d[Qi]=null,Qi--)}function me(t,e){Qi++,$d[Qi]=t.current,t.current=e}var Mr={},vt=Wr(Mr),Ot=Wr(!1),vi=Mr;function mo(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function hu(){_e(Ot),_e(vt)}function vy(t,e,n){if(vt.current!==Mr)throw Error(V(168));me(vt,e),me(Ot,n)}function sw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,Nb(t)||"Unknown",i));return Ne({},n,r)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,vi=vt.current,me(vt,t),me(Ot,Ot.current),!0}function wy(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=sw(t,e,vi),r.__reactInternalMemoizedMergedChildContext=t,_e(Ot),_e(vt),me(vt,t)):_e(Ot),me(Ot,n)}var Bn=null,uc=!1,Nf=!1;function aw(t){Bn===null?Bn=[t]:Bn.push(t)}function XT(t){uc=!0,aw(t)}function Gr(){if(!Nf&&Bn!==null){Nf=!0;var t=0,e=fe;try{var n=Bn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,uc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),O1(dp,Gr),i}finally{fe=e,Nf=!1}}return null}var Ki=[],Yi=0,mu=null,gu=0,Xt=[],Jt=0,wi=null,Un=1,Hn="";function ti(t,e){Ki[Yi++]=gu,Ki[Yi++]=mu,mu=t,gu=e}function lw(t,e,n){Xt[Jt++]=Un,Xt[Jt++]=Hn,Xt[Jt++]=wi,wi=t;var r=Un;t=Hn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var o=32-mn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Un=1<<32-mn(e)+i|n<<i|r,Hn=o+t}else Un=1<<o|n<<i|r,Hn=t}function xp(t){t.return!==null&&(ti(t,1),lw(t,1,0))}function Ep(t){for(;t===mu;)mu=Ki[--Yi],Ki[Yi]=null,gu=Ki[--Yi],Ki[Yi]=null;for(;t===wi;)wi=Xt[--Jt],Xt[Jt]=null,Hn=Xt[--Jt],Xt[Jt]=null,Un=Xt[--Jt],Xt[Jt]=null}var Ut=null,Bt=null,ke=!1,cn=null;function uw(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _y(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Bt=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wi!==null?{id:Un,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Bt=null,!0):!1;default:return!1}}function Bd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(ke){var e=Bt;if(e){var n=e;if(!_y(t,e)){if(Bd(t))throw Error(V(418));e=kr(n.nextSibling);var r=Ut;e&&_y(t,e)?uw(r,n):(t.flags=t.flags&-4097|2,ke=!1,Ut=t)}}else{if(Bd(t))throw Error(V(418));t.flags=t.flags&-4097|2,ke=!1,Ut=t}}}function xy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function ml(t){if(t!==Ut)return!1;if(!ke)return xy(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fd(t.type,t.memoizedProps)),e&&(e=Bt)){if(Bd(t))throw cw(),Error(V(418));for(;e;)uw(t,e),e=kr(e.nextSibling)}if(xy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=Ut?kr(t.stateNode.nextSibling):null;return!0}function cw(){for(var t=Bt;t;)t=kr(t.nextSibling)}function go(){Bt=Ut=null,ke=!1}function bp(t){cn===null?cn=[t]:cn.push(t)}var JT=tr.ReactCurrentBatchConfig;function cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function gl(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ey(t){var e=t._init;return e(t._payload)}function fw(t){function e(x,v){if(t){var E=x.deletions;E===null?(x.deletions=[v],x.flags|=16):E.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=Pr(x,v),x.index=0,x.sibling=null,x}function o(x,v,E){return x.index=E,t?(E=x.alternate,E!==null?(E=E.index,E<v?(x.flags|=2,v):E):(x.flags|=2,v)):(x.flags|=1048576,v)}function s(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,v,E,P){return v===null||v.tag!==6?(v=$f(E,x.mode,P),v.return=x,v):(v=i(v,E),v.return=x,v)}function u(x,v,E,P){var L=E.type;return L===Ui?h(x,v,E.props.children,P,E.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===pr&&Ey(L)===v.type)?(P=i(v,E.props),P.ref=cs(x,v,E),P.return=x,P):(P=Wl(E.type,E.key,E.props,null,x.mode,P),P.ref=cs(x,v,E),P.return=x,P)}function c(x,v,E,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Bf(E,x.mode,P),v.return=x,v):(v=i(v,E.children||[]),v.return=x,v)}function h(x,v,E,P,L){return v===null||v.tag!==7?(v=fi(E,x.mode,P,L),v.return=x,v):(v=i(v,E),v.return=x,v)}function m(x,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$f(""+v,x.mode,E),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ol:return E=Wl(v.type,v.key,v.props,null,x.mode,E),E.ref=cs(x,null,v),E.return=x,E;case Bi:return v=Bf(v,x.mode,E),v.return=x,v;case pr:var P=v._init;return m(x,P(v._payload),E)}if(vs(v)||os(v))return v=fi(v,x.mode,E,null),v.return=x,v;gl(x,v)}return null}function g(x,v,E,P){var L=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return L!==null?null:l(x,v,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ol:return E.key===L?u(x,v,E,P):null;case Bi:return E.key===L?c(x,v,E,P):null;case pr:return L=E._init,g(x,v,L(E._payload),P)}if(vs(E)||os(E))return L!==null?null:h(x,v,E,P,null);gl(x,E)}return null}function b(x,v,E,P,L){if(typeof P=="string"&&P!==""||typeof P=="number")return x=x.get(E)||null,l(v,x,""+P,L);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ol:return x=x.get(P.key===null?E:P.key)||null,u(v,x,P,L);case Bi:return x=x.get(P.key===null?E:P.key)||null,c(v,x,P,L);case pr:var N=P._init;return b(x,v,E,N(P._payload),L)}if(vs(P)||os(P))return x=x.get(E)||null,h(v,x,P,L,null);gl(v,P)}return null}function I(x,v,E,P){for(var L=null,N=null,_=v,w=v=0,T=null;_!==null&&w<E.length;w++){_.index>w?(T=_,_=null):T=_.sibling;var S=g(x,_,E[w],P);if(S===null){_===null&&(_=T);break}t&&_&&S.alternate===null&&e(x,_),v=o(S,v,w),N===null?L=S:N.sibling=S,N=S,_=T}if(w===E.length)return n(x,_),ke&&ti(x,w),L;if(_===null){for(;w<E.length;w++)_=m(x,E[w],P),_!==null&&(v=o(_,v,w),N===null?L=_:N.sibling=_,N=_);return ke&&ti(x,w),L}for(_=r(x,_);w<E.length;w++)T=b(_,x,w,E[w],P),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?w:T.key),v=o(T,v,w),N===null?L=T:N.sibling=T,N=T);return t&&_.forEach(function(A){return e(x,A)}),ke&&ti(x,w),L}function C(x,v,E,P){var L=os(E);if(typeof L!="function")throw Error(V(150));if(E=L.call(E),E==null)throw Error(V(151));for(var N=L=null,_=v,w=v=0,T=null,S=E.next();_!==null&&!S.done;w++,S=E.next()){_.index>w?(T=_,_=null):T=_.sibling;var A=g(x,_,S.value,P);if(A===null){_===null&&(_=T);break}t&&_&&A.alternate===null&&e(x,_),v=o(A,v,w),N===null?L=A:N.sibling=A,N=A,_=T}if(S.done)return n(x,_),ke&&ti(x,w),L;if(_===null){for(;!S.done;w++,S=E.next())S=m(x,S.value,P),S!==null&&(v=o(S,v,w),N===null?L=S:N.sibling=S,N=S);return ke&&ti(x,w),L}for(_=r(x,_);!S.done;w++,S=E.next())S=b(_,x,w,S.value,P),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?w:S.key),v=o(S,v,w),N===null?L=S:N.sibling=S,N=S);return t&&_.forEach(function(O){return e(x,O)}),ke&&ti(x,w),L}function R(x,v,E,P){if(typeof E=="object"&&E!==null&&E.type===Ui&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ol:e:{for(var L=E.key,N=v;N!==null;){if(N.key===L){if(L=E.type,L===Ui){if(N.tag===7){n(x,N.sibling),v=i(N,E.props.children),v.return=x,x=v;break e}}else if(N.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===pr&&Ey(L)===N.type){n(x,N.sibling),v=i(N,E.props),v.ref=cs(x,N,E),v.return=x,x=v;break e}n(x,N);break}else e(x,N);N=N.sibling}E.type===Ui?(v=fi(E.props.children,x.mode,P,E.key),v.return=x,x=v):(P=Wl(E.type,E.key,E.props,null,x.mode,P),P.ref=cs(x,v,E),P.return=x,x=P)}return s(x);case Bi:e:{for(N=E.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(x,v.sibling),v=i(v,E.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=Bf(E,x.mode,P),v.return=x,x=v}return s(x);case pr:return N=E._init,R(x,v,N(E._payload),P)}if(vs(E))return I(x,v,E,P);if(os(E))return C(x,v,E,P);gl(x,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,E),v.return=x,x=v):(n(x,v),v=$f(E,x.mode,P),v.return=x,x=v),s(x)):n(x,v)}return R}var yo=fw(!0),dw=fw(!1),yu=Wr(null),vu=null,Xi=null,Tp=null;function Sp(){Tp=Xi=vu=null}function kp(t){var e=yu.current;_e(yu),t._currentValue=e}function Hd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ao(t,e){vu=t,Tp=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(Tp!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(vu===null)throw Error(V(308));Xi=t,vu.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var si=null;function Ip(t){si===null?si=[t]:si.push(t)}function hw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function Ap(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yn(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hp(t,n)}}function by(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wu(t,e,n,r){var i=t.updateQueue;mr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,h=c=u=null,l=o;do{var g=l.lane,b=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,C=l;switch(g=e,b=n,C.tag){case 1:if(I=C.payload,typeof I=="function"){m=I.call(b,m,g);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=C.payload,g=typeof I=="function"?I.call(b,m,g):I,g==null)break e;m=Ne({},m,g);break e;case 2:mr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else b={eventTime:b,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=b,u=m):h=h.next=b,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);xi|=s,t.lanes=s,t.memoizedState=m}}function Ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var ka={},An=Wr(ka),Js=Wr(ka),Zs=Wr(ka);function ai(t){if(t===ka)throw Error(V(174));return t}function Cp(t,e){switch(me(Zs,e),me(Js,t),me(An,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Td(e,t)}_e(An),me(An,e)}function vo(){_e(An),_e(Js),_e(Zs)}function mw(t){ai(Zs.current);var e=ai(An.current),n=Td(e,t.type);e!==n&&(me(Js,t),me(An,n))}function Pp(t){Js.current===t&&(_e(An),_e(Js))}var Re=Wr(0);function _u(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Df=[];function Rp(){for(var t=0;t<Df.length;t++)Df[t]._workInProgressVersionPrimary=null;Df.length=0}var zl=tr.ReactCurrentDispatcher,Lf=tr.ReactCurrentBatchConfig,_i=0,Oe=null,He=null,Qe=null,xu=!1,Ps=!1,ea=0,ZT=0;function ft(){throw Error(V(321))}function Op(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function jp(t,e,n,r,i,o){if(_i=o,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?rS:iS,t=n(r,i),Ps){o=0;do{if(Ps=!1,ea=0,25<=o)throw Error(V(301));o+=1,Qe=He=null,e.updateQueue=null,zl.current=oS,t=n(r,i)}while(Ps)}if(zl.current=Eu,e=He!==null&&He.next!==null,_i=0,Qe=He=Oe=null,xu=!1,e)throw Error(V(300));return t}function Np(){var t=ea!==0;return ea=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Oe.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function nn(){if(He===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Qe===null?Oe.memoizedState:Qe.next;if(e!==null)Qe=e,He=t;else{if(t===null)throw Error(V(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Qe===null?Oe.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function ta(t,e){return typeof e=="function"?e(t):e}function Mf(t){var e=nn(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var h=c.lane;if((_i&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,s=r):u=u.next=m,Oe.lanes|=h,xi|=h}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=l,vn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Oe.lanes|=o,xi|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ff(t){var e=nn(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);vn(o,e.memoizedState)||(Rt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function gw(){}function yw(t,e){var n=Oe,r=nn(),i=e(),o=!vn(r.memoizedState,i);if(o&&(r.memoizedState=i,Rt=!0),r=r.queue,Dp(_w.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,na(9,ww.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(V(349));_i&30||vw(n,e,i)}return i}function vw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ww(t,e,n,r){e.value=n,e.getSnapshot=r,xw(e)&&Ew(t)}function _w(t,e,n){return n(function(){xw(e)&&Ew(t)})}function xw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function Ew(t){var e=Yn(t,1);e!==null&&gn(e,t,1,-1)}function Sy(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=nS.bind(null,Oe,t),[e.memoizedState,t]}function na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bw(){return nn().memoizedState}function $l(t,e,n,r){var i=_n();Oe.flags|=t,i.memoizedState=na(1|e,n,void 0,r===void 0?null:r)}function cc(t,e,n,r){var i=nn();r=r===void 0?null:r;var o=void 0;if(He!==null){var s=He.memoizedState;if(o=s.destroy,r!==null&&Op(r,s.deps)){i.memoizedState=na(e,n,o,r);return}}Oe.flags|=t,i.memoizedState=na(1|e,n,o,r)}function ky(t,e){return $l(8390656,8,t,e)}function Dp(t,e){return cc(2048,8,t,e)}function Tw(t,e){return cc(4,2,t,e)}function Sw(t,e){return cc(4,4,t,e)}function kw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Iw(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,kw.bind(null,e,t),n)}function Lp(){}function Aw(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Cw(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Pw(t,e,n){return _i&21?(vn(n,e)||(n=D1(),Oe.lanes|=n,xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function eS(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Lf.transition;Lf.transition={};try{t(!1),e()}finally{fe=n,Lf.transition=r}}function Rw(){return nn().memoizedState}function tS(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ow(t))jw(e,n);else if(n=hw(t,e,n,r),n!==null){var i=Tt();gn(n,t,r,i),Nw(n,e,r)}}function nS(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ow(t))jw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,vn(l,s)){var u=e.interleaved;u===null?(i.next=i,Ip(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=hw(t,e,i,r),n!==null&&(i=Tt(),gn(n,t,r,i),Nw(n,e,r))}}function Ow(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function jw(t,e){Ps=xu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hp(t,n)}}var Eu={readContext:tn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},rS={readContext:tn,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:ky,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$l(4194308,4,kw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){return $l(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tS.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:Sy,useDebugValue:Lp,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=Sy(!1),e=t[0];return t=eS.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=_n();if(ke){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),Je===null)throw Error(V(349));_i&30||vw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,ky(_w.bind(null,r,o,t),[t]),r.flags|=2048,na(9,ww.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=_n(),e=Je.identifierPrefix;if(ke){var n=Hn,r=Un;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iS={readContext:tn,useCallback:Aw,useContext:tn,useEffect:Dp,useImperativeHandle:Iw,useInsertionEffect:Tw,useLayoutEffect:Sw,useMemo:Cw,useReducer:Mf,useRef:bw,useState:function(){return Mf(ta)},useDebugValue:Lp,useDeferredValue:function(t){var e=nn();return Pw(e,He.memoizedState,t)},useTransition:function(){var t=Mf(ta)[0],e=nn().memoizedState;return[t,e]},useMutableSource:gw,useSyncExternalStore:yw,useId:Rw,unstable_isNewReconciler:!1},oS={readContext:tn,useCallback:Aw,useContext:tn,useEffect:Dp,useImperativeHandle:Iw,useInsertionEffect:Tw,useLayoutEffect:Sw,useMemo:Cw,useReducer:Ff,useRef:bw,useState:function(){return Ff(ta)},useDebugValue:Lp,useDeferredValue:function(t){var e=nn();return He===null?e.memoizedState=t:Pw(e,He.memoizedState,t)},useTransition:function(){var t=Ff(ta)[0],e=nn().memoizedState;return[t,e]},useMutableSource:gw,useSyncExternalStore:yw,useId:Rw,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fc={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Cr(t),o=Wn(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ir(t,o,i),e!==null&&(gn(e,t,i,r),Vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Cr(t),o=Wn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ir(t,o,i),e!==null&&(gn(e,t,i,r),Vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Cr(t),i=Wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ir(t,i,r),e!==null&&(gn(e,t,r,n),Vl(e,t,r))}};function Iy(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Qs(n,r)||!Qs(i,o):!0}function Dw(t,e,n){var r=!1,i=Mr,o=e.contextType;return typeof o=="object"&&o!==null?o=tn(o):(i=jt(e)?vi:vt.current,r=e.contextTypes,o=(r=r!=null)?mo(t,i):Mr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Ay(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function Gd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ap(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=tn(o):(o=jt(e)?vi:vt.current,i.context=mo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Wd(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fc.enqueueReplaceState(i,i.state,null),wu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wo(t,e){try{var n="",r=e;do n+=jb(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Vf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sS=typeof WeakMap=="function"?WeakMap:Map;function Lw(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tu||(Tu=!0,rh=r),qd(t,e)},n}function Mw(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){qd(t,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Cy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_S.bind(null,t,e,n),e.then(t,t))}function Py(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ry(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var aS=tr.ReactCurrentOwner,Rt=!1;function bt(t,e,n,r){e.child=t===null?dw(e,null,n,r):yo(e,t.child,n,r)}function Oy(t,e,n,r,i){n=n.render;var o=e.ref;return ao(e,i),r=jp(t,e,n,r,o,i),n=Np(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(ke&&n&&xp(e),e.flags|=1,bt(t,e,r,i),e.child)}function jy(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Hp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Fw(t,e,o,r,i)):(t=Wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qs,n(s,r)&&t.ref===e.ref)return Xn(t,e,i)}return e.flags|=1,t=Pr(o,r),t.ref=e.ref,t.return=e,e.child=t}function Fw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Qs(o,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Xn(t,e,i)}return Qd(t,e,n,r,i)}function Vw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Zi,zt),zt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Zi,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(Zi,zt),zt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,me(Zi,zt),zt|=r;return bt(t,e,i,n),e.child}function zw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qd(t,e,n,r,i){var o=jt(n)?vi:vt.current;return o=mo(e,o),ao(e,i),n=jp(t,e,n,r,o,i),r=Np(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(ke&&r&&xp(e),e.flags|=1,bt(t,e,n,i),e.child)}function Ny(t,e,n,r,i){if(jt(n)){var o=!0;pu(e)}else o=!1;if(ao(e,i),e.stateNode===null)Bl(t,e),Dw(e,n,r),Gd(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=jt(n)?vi:vt.current,c=mo(e,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ay(e,s,r,c),mr=!1;var g=e.memoizedState;s.state=g,wu(e,r,s,i),u=e.memoizedState,l!==r||g!==u||Ot.current||mr?(typeof h=="function"&&(Wd(e,n,h,r),u=e.memoizedState),(l=mr||Iy(e,n,l,r,g,u,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,pw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ln(e.type,l),s.props=c,m=e.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=jt(n)?vi:vt.current,u=mo(e,u));var b=n.getDerivedStateFromProps;(h=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Ay(e,s,r,u),mr=!1,g=e.memoizedState,s.state=g,wu(e,r,s,i);var I=e.memoizedState;l!==m||g!==I||Ot.current||mr?(typeof b=="function"&&(Wd(e,n,b,r),I=e.memoizedState),(c=mr||Iy(e,n,c,r,g,I,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),s.props=r,s.state=I,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Kd(t,e,n,r,o,i)}function Kd(t,e,n,r,i,o){zw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&wy(e,n,!1),Xn(t,e,o);r=e.stateNode,aS.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=yo(e,t.child,null,o),e.child=yo(e,null,l,o)):bt(t,e,l,o),e.memoizedState=r.state,i&&wy(e,n,!0),e.child}function $w(t){var e=t.stateNode;e.pendingContext?vy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vy(t,e.context,!1),Cp(t,e.containerInfo)}function Dy(t,e,n,r,i){return go(),bp(i),e.flags|=256,bt(t,e,n,r),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bw(t,e,n){var r=e.pendingProps,i=Re.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Re,i&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=pc(s,r,0,null),t=fi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Xd(n),e.memoizedState=Yd,t):Mp(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return lS(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Pr(l,o):(o=fi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Xd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Yd,r}return o=t.child,t=o.sibling,r=Pr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mp(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yl(t,e,n,r){return r!==null&&bp(r),yo(e,t.child,null,n),t=Mp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lS(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Vf(Error(V(422))),yl(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=pc({mode:"visible",children:r.children},i,0,null),o=fi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&yo(e,t.child,null,s),e.child.memoizedState=Xd(s),e.memoizedState=Yd,o);if(!(e.mode&1))return yl(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Vf(o,r,void 0),yl(t,e,s,r)}if(l=(s&t.childLanes)!==0,Rt||l){if(r=Je,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yn(t,i),gn(r,t,i,-1))}return Up(),r=Vf(Error(V(421))),yl(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xS.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Bt=kr(i.nextSibling),Ut=e,ke=!0,cn=null,t!==null&&(Xt[Jt++]=Un,Xt[Jt++]=Hn,Xt[Jt++]=wi,Un=t.id,Hn=t.overflow,wi=e),e=Mp(e,r.children),e.flags|=4096,e)}function Ly(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hd(t.return,e,n)}function zf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Uw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(bt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ly(t,n,e);else if(t.tag===19)Ly(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_u(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_u(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zf(e,!0,n,null,o);break;case"together":zf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uS(t,e,n){switch(e.tag){case 3:$w(e),go();break;case 5:mw(e);break;case 1:jt(e.type)&&pu(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(yu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?Bw(t,e,n):(me(Re,Re.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);me(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Uw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,Vw(t,e,n)}return Xn(t,e,n)}var Hw,Jd,Ww,Gw;Hw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jd=function(){};Ww=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(An.current);var o=null;switch(n){case"input":i=_d(t,i),r=_d(t,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=bd(t,i),r=bd(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=du)}Sd(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($s.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($s.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Gw=function(t,e,n,r){n!==r&&(e.flags|=4)};function fs(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cS(t,e,n){var r=e.pendingProps;switch(Ep(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return jt(e.type)&&hu(),dt(e),null;case 3:return r=e.stateNode,vo(),_e(Ot),_e(vt),Rp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(sh(cn),cn=null))),Jd(t,e),dt(e),null;case 5:Pp(e);var i=ai(Zs.current);if(n=e.type,t!==null&&e.stateNode!=null)Ww(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return dt(e),null}if(t=ai(An.current),ml(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Tn]=e,r[Xs]=o,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<_s.length;i++)ve(_s[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Wg(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":qg(r,o),ve("invalid",r)}Sd(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&pl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&pl(r.textContent,l,t),i=["children",""+l]):$s.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ve("scroll",r)}switch(n){case"input":sl(r),Gg(r,o,!0);break;case"textarea":sl(r),Qg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=du)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Tn]=e,t[Xs]=r,Hw(t,e,!1,!1),e.stateNode=t;e:{switch(s=kd(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<_s.length;i++)ve(_s[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Wg(t,r),i=_d(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ve("invalid",t);break;case"textarea":qg(t,r),i=bd(t,r),ve("invalid",t);break;default:i=r}Sd(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?b1(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&x1(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bs(t,u):typeof u=="number"&&Bs(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($s.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ve("scroll",t):u!=null&&ap(t,o,u,s))}switch(n){case"input":sl(t),Gg(t,r,!1);break;case"textarea":sl(t),Qg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Lr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ro(t,!!r.multiple,o,!1):r.defaultValue!=null&&ro(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=du)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)Gw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=ai(Zs.current),ai(An.current),ml(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(o=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return dt(e),null;case 13:if(_e(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Bt!==null&&e.mode&1&&!(e.flags&128))cw(),go(),e.flags|=98560,o=!1;else if(o=ml(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(V(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[Tn]=e}else go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),o=!1}else cn!==null&&(sh(cn),cn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?We===0&&(We=3):Up())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return vo(),Jd(t,e),t===null&&Ks(e.stateNode.containerInfo),dt(e),null;case 10:return kp(e.type._context),dt(e),null;case 17:return jt(e.type)&&hu(),dt(e),null;case 19:if(_e(Re),o=e.memoizedState,o===null)return dt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)fs(o,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=_u(t),s!==null){for(e.flags|=128,fs(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Re,Re.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ve()>_o&&(e.flags|=128,r=!0,fs(o,!1),e.lanes=4194304)}else{if(!r)if(t=_u(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ke)return dt(e),null}else 2*Ve()-o.renderingStartTime>_o&&n!==1073741824&&(e.flags|=128,r=!0,fs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ve(),e.sibling=null,n=Re.current,me(Re,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return Bp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function fS(t,e){switch(Ep(e),e.tag){case 1:return jt(e.type)&&hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vo(),_e(Ot),_e(vt),Rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pp(e),null;case 13:if(_e(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Re),null;case 4:return vo(),null;case 10:return kp(e.type._context),null;case 22:case 23:return Bp(),null;case 24:return null;default:return null}}var vl=!1,mt=!1,dS=typeof WeakSet=="function"?WeakSet:Set,U=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function Zd(t,e,n){try{n()}catch(r){Me(t,e,r)}}var My=!1;function hS(t,e){if(Ld=uu,t=X1(),_p(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,h=0,m=t,g=null;t:for(;;){for(var b;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(b=m.firstChild)!==null;)g=m,m=b;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=s),g===o&&++h===r&&(u=s),(b=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=b}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},uu=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var C=I.memoizedProps,R=I.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?C:ln(e.type,C),R);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(P){Me(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return I=My,My=!1,I}function Rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zd(e,n,o)}i=i.next}while(i!==r)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qw(t){var e=t.alternate;e!==null&&(t.alternate=null,qw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[Xs],delete e[zd],delete e[KT],delete e[YT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qw(t){return t.tag===5||t.tag===3||t.tag===4}function Fy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=du));else if(r!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}function nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}var nt=null,un=!1;function lr(t,e,n){for(n=n.child;n!==null;)Kw(t,e,n),n=n.sibling}function Kw(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:mt||Ji(n,e);case 6:var r=nt,i=un;nt=null,lr(t,e,n),nt=r,un=i,nt!==null&&(un?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(un?(t=nt,n=n.stateNode,t.nodeType===8?jf(t.parentNode,n):t.nodeType===1&&jf(t,n),Gs(t)):jf(nt,n.stateNode));break;case 4:r=nt,i=un,nt=n.stateNode.containerInfo,un=!0,lr(t,e,n),nt=r,un=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Zd(n,e,s),i=i.next}while(i!==r)}lr(t,e,n);break;case 1:if(!mt&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Me(n,e,l)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,lr(t,e,n),mt=r):lr(t,e,n);break;default:lr(t,e,n)}}function Vy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dS),e.forEach(function(r){var i=ES.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,un=!1;break e;case 3:nt=l.stateNode.containerInfo,un=!0;break e;case 4:nt=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(nt===null)throw Error(V(160));Kw(o,s,i),nt=null,un=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Me(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yw(e,t),e=e.sibling}function Yw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),wn(t),r&4){try{Rs(3,t,t.return),dc(3,t)}catch(C){Me(t,t.return,C)}try{Rs(5,t,t.return)}catch(C){Me(t,t.return,C)}}break;case 1:an(e,t),wn(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(an(e,t),wn(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{Bs(i,"")}catch(C){Me(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&v1(i,o),kd(l,s);var c=kd(l,o);for(s=0;s<u.length;s+=2){var h=u[s],m=u[s+1];h==="style"?b1(i,m):h==="dangerouslySetInnerHTML"?x1(i,m):h==="children"?Bs(i,m):ap(i,h,m,c)}switch(l){case"input":xd(i,o);break;case"textarea":w1(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?ro(i,!!o.multiple,b,!1):g!==!!o.multiple&&(o.defaultValue!=null?ro(i,!!o.multiple,o.defaultValue,!0):ro(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xs]=o}catch(C){Me(t,t.return,C)}}break;case 6:if(an(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(C){Me(t,t.return,C)}}break;case 3:if(an(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gs(e.containerInfo)}catch(C){Me(t,t.return,C)}break;case 4:an(e,t),wn(t);break;case 13:an(e,t),wn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zp=Ve())),r&4&&Vy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||h,an(e,t),mt=c):an(e,t),wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(U=t,h=t.child;h!==null;){for(m=U=h;U!==null;){switch(g=U,b=g.child,g.tag){case 0:case 11:case 14:case 15:Rs(4,g,g.return);break;case 1:Ji(g,g.return);var I=g.stateNode;if(typeof I.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(C){Me(r,n,C)}}break;case 5:Ji(g,g.return);break;case 22:if(g.memoizedState!==null){$y(m);continue}}b!==null?(b.return=g,U=b):$y(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=E1("display",s))}catch(C){Me(t,t.return,C)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(C){Me(t,t.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:an(e,t),wn(t),r&4&&Vy(t);break;case 21:break;default:an(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qw(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bs(i,""),r.flags&=-33);var o=Fy(t);nh(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Fy(t);th(t,l,s);break;default:throw Error(V(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pS(t,e,n){U=t,Xw(t)}function Xw(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||vl;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||mt;l=vl;var c=mt;if(vl=s,(mt=u)&&!c)for(U=i;U!==null;)s=U,u=s.child,s.tag===22&&s.memoizedState!==null?By(i):u!==null?(u.return=s,U=u):By(i);for(;o!==null;)U=o,Xw(o),o=o.sibling;U=i,vl=l,mt=c}zy(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):zy(t)}}function zy(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||dc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Ty(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ty(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Gs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}mt||e.flags&512&&eh(e)}catch(g){Me(e,e.return,g)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function $y(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function By(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Me(e,i,u)}}var o=e.return;try{eh(e)}catch(u){Me(e,o,u)}break;case 5:var s=e.return;try{eh(e)}catch(u){Me(e,s,u)}}}catch(u){Me(e,e.return,u)}if(e===t){U=null;break}var l=e.sibling;if(l!==null){l.return=e.return,U=l;break}U=e.return}}var mS=Math.ceil,bu=tr.ReactCurrentDispatcher,Fp=tr.ReactCurrentOwner,en=tr.ReactCurrentBatchConfig,se=0,Je=null,Ue=null,st=0,zt=0,Zi=Wr(0),We=0,ra=null,xi=0,hc=0,Vp=0,Os=null,Pt=null,zp=0,_o=1/0,zn=null,Tu=!1,rh=null,Ar=null,wl=!1,_r=null,Su=0,js=0,ih=null,Ul=-1,Hl=0;function Tt(){return se&6?Ve():Ul!==-1?Ul:Ul=Ve()}function Cr(t){return t.mode&1?se&2&&st!==0?st&-st:JT.transition!==null?(Hl===0&&(Hl=D1()),Hl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:B1(t.type)),t):1}function gn(t,e,n,r){if(50<js)throw js=0,ih=null,Error(V(185));ba(t,n,r),(!(se&2)||t!==Je)&&(t===Je&&(!(se&2)&&(hc|=n),We===4&&vr(t,st)),Nt(t,r),n===1&&se===0&&!(e.mode&1)&&(_o=Ve()+500,uc&&Gr()))}function Nt(t,e){var n=t.callbackNode;Jb(t,e);var r=lu(t,t===Je?st:0);if(r===0)n!==null&&Xg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xg(n),e===1)t.tag===0?XT(Uy.bind(null,t)):aw(Uy.bind(null,t)),qT(function(){!(se&6)&&Gr()}),n=null;else{switch(L1(r)){case 1:n=dp;break;case 4:n=j1;break;case 16:n=au;break;case 536870912:n=N1;break;default:n=au}n=o_(n,Jw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jw(t,e){if(Ul=-1,Hl=0,se&6)throw Error(V(327));var n=t.callbackNode;if(lo()&&t.callbackNode!==n)return null;var r=lu(t,t===Je?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ku(t,r);else{e=r;var i=se;se|=2;var o=e_();(Je!==t||st!==e)&&(zn=null,_o=Ve()+500,ci(t,e));do try{vS();break}catch(l){Zw(t,l)}while(!0);Sp(),bu.current=o,se=i,Ue!==null?e=0:(Je=null,st=0,e=We)}if(e!==0){if(e===2&&(i=Rd(t),i!==0&&(r=i,e=oh(t,i))),e===1)throw n=ra,ci(t,0),vr(t,r),Nt(t,Ve()),n;if(e===6)vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!gS(i)&&(e=ku(t,r),e===2&&(o=Rd(t),o!==0&&(r=o,e=oh(t,o))),e===1))throw n=ra,ci(t,0),vr(t,r),Nt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:ni(t,Pt,zn);break;case 3:if(vr(t,r),(r&130023424)===r&&(e=zp+500-Ve(),10<e)){if(lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vd(ni.bind(null,t,Pt,zn),e);break}ni(t,Pt,zn);break;case 4:if(vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-mn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mS(r/1960))-r,10<r){t.timeoutHandle=Vd(ni.bind(null,t,Pt,zn),r);break}ni(t,Pt,zn);break;case 5:ni(t,Pt,zn);break;default:throw Error(V(329))}}}return Nt(t,Ve()),t.callbackNode===n?Jw.bind(null,t):null}function oh(t,e){var n=Os;return t.current.memoizedState.isDehydrated&&(ci(t,e).flags|=256),t=ku(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&sh(e)),t}function sh(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function gS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!vn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~Vp,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function Uy(t){if(se&6)throw Error(V(327));lo();var e=lu(t,0);if(!(e&1))return Nt(t,Ve()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var r=Rd(t);r!==0&&(e=r,n=oh(t,r))}if(n===1)throw n=ra,ci(t,0),vr(t,e),Nt(t,Ve()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ni(t,Pt,zn),Nt(t,Ve()),null}function $p(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(_o=Ve()+500,uc&&Gr())}}function Ei(t){_r!==null&&_r.tag===0&&!(se&6)&&lo();var e=se;se|=1;var n=en.transition,r=fe;try{if(en.transition=null,fe=1,t)return t()}finally{fe=r,en.transition=n,se=e,!(se&6)&&Gr()}}function Bp(){zt=Zi.current,_e(Zi)}function ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GT(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Ep(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hu();break;case 3:vo(),_e(Ot),_e(vt),Rp();break;case 5:Pp(r);break;case 4:vo();break;case 13:_e(Re);break;case 19:_e(Re);break;case 10:kp(r.type._context);break;case 22:case 23:Bp()}n=n.return}if(Je=t,Ue=t=Pr(t.current,null),st=zt=e,We=0,ra=null,Vp=hc=xi=0,Pt=Os=null,si!==null){for(e=0;e<si.length;e++)if(n=si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}si=null}return t}function Zw(t,e){do{var n=Ue;try{if(Sp(),zl.current=Eu,xu){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xu=!1}if(_i=0,Qe=He=Oe=null,Ps=!1,ea=0,Fp.current=null,n===null||n.return===null){We=1,ra=e,Ue=null;break}e:{var o=t,s=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=Py(s);if(b!==null){b.flags&=-257,Ry(b,s,l,o,e),b.mode&1&&Cy(o,c,e),e=b,u=c;var I=e.updateQueue;if(I===null){var C=new Set;C.add(u),e.updateQueue=C}else I.add(u);break e}else{if(!(e&1)){Cy(o,c,e),Up();break e}u=Error(V(426))}}else if(ke&&l.mode&1){var R=Py(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ry(R,s,l,o,e),bp(wo(u,l));break e}}o=u=wo(u,l),We!==4&&(We=2),Os===null?Os=[o]:Os.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var x=Lw(o,u,e);by(o,x);break e;case 1:l=u;var v=o.type,E=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ar===null||!Ar.has(E)))){o.flags|=65536,e&=-e,o.lanes|=e;var P=Mw(o,l,e);by(o,P);break e}}o=o.return}while(o!==null)}n_(n)}catch(L){e=L,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function e_(){var t=bu.current;return bu.current=Eu,t===null?Eu:t}function Up(){(We===0||We===3||We===2)&&(We=4),Je===null||!(xi&268435455)&&!(hc&268435455)||vr(Je,st)}function ku(t,e){var n=se;se|=2;var r=e_();(Je!==t||st!==e)&&(zn=null,ci(t,e));do try{yS();break}catch(i){Zw(t,i)}while(!0);if(Sp(),se=n,bu.current=r,Ue!==null)throw Error(V(261));return Je=null,st=0,We}function yS(){for(;Ue!==null;)t_(Ue)}function vS(){for(;Ue!==null&&!Ub();)t_(Ue)}function t_(t){var e=i_(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?n_(t):Ue=e,Fp.current=null}function n_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fS(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Ue=null;return}}else if(n=cS(n,e,zt),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);We===0&&(We=5)}function ni(t,e,n){var r=fe,i=en.transition;try{en.transition=null,fe=1,wS(t,e,n,r)}finally{en.transition=i,fe=r}return null}function wS(t,e,n,r){do lo();while(_r!==null);if(se&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zb(t,o),t===Je&&(Ue=Je=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,o_(au,function(){return lo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=en.transition,en.transition=null;var s=fe;fe=1;var l=se;se|=4,Fp.current=null,hS(t,n),Yw(n,t),VT(Md),uu=!!Ld,Md=Ld=null,t.current=n,pS(n),Hb(),se=l,fe=s,en.transition=o}else t.current=n;if(wl&&(wl=!1,_r=t,Su=i),o=t.pendingLanes,o===0&&(Ar=null),qb(n.stateNode),Nt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tu)throw Tu=!1,t=rh,rh=null,t;return Su&1&&t.tag!==0&&lo(),o=t.pendingLanes,o&1?t===ih?js++:(js=0,ih=t):js=0,Gr(),null}function lo(){if(_r!==null){var t=L1(Su),e=en.transition,n=fe;try{if(en.transition=null,fe=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,Su=0,se&6)throw Error(V(331));var i=se;for(se|=4,U=t.current;U!==null;){var o=U,s=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(U=c;U!==null;){var h=U;switch(h.tag){case 0:case 11:case 15:Rs(8,h,o)}var m=h.child;if(m!==null)m.return=h,U=m;else for(;U!==null;){h=U;var g=h.sibling,b=h.return;if(qw(h),h===c){U=null;break}if(g!==null){g.return=b,U=g;break}U=b}}}var I=o.alternate;if(I!==null){var C=I.child;if(C!==null){I.child=null;do{var R=C.sibling;C.sibling=null,C=R}while(C!==null)}}U=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,U=s;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rs(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,U=x;break e}U=o.return}}var v=t.current;for(U=v;U!==null;){s=U;var E=s.child;if(s.subtreeFlags&2064&&E!==null)E.return=s,U=E;else e:for(s=v;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:dc(9,l)}}catch(L){Me(l,l.return,L)}if(l===s){U=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,U=P;break e}U=l.return}}if(se=i,Gr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(ic,t)}catch{}r=!0}return r}finally{fe=n,en.transition=e}}return!1}function Hy(t,e,n){e=wo(n,e),e=Lw(t,e,1),t=Ir(t,e,1),e=Tt(),t!==null&&(ba(t,1,e),Nt(t,e))}function Me(t,e,n){if(t.tag===3)Hy(t,t,n);else for(;e!==null;){if(e.tag===3){Hy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){t=wo(n,t),t=Mw(e,t,1),e=Ir(e,t,1),t=Tt(),e!==null&&(ba(e,1,t),Nt(e,t));break}}e=e.return}}function _S(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(st&n)===n&&(We===4||We===3&&(st&130023424)===st&&500>Ve()-zp?ci(t,0):Vp|=n),Nt(t,e)}function r_(t,e){e===0&&(t.mode&1?(e=ul,ul<<=1,!(ul&130023424)&&(ul=4194304)):e=1);var n=Tt();t=Yn(t,e),t!==null&&(ba(t,e,n),Nt(t,n))}function xS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),r_(t,n)}function ES(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),r_(t,n)}var i_;i_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,uS(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,ke&&e.flags&1048576&&lw(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bl(t,e),t=e.pendingProps;var i=mo(e,vt.current);ao(e,n),i=jp(null,e,r,t,i,n);var o=Np();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(o=!0,pu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ap(e),i.updater=fc,e.stateNode=i,i._reactInternals=e,Gd(e,r,t,n),e=Kd(null,e,r,!0,o,n)):(e.tag=0,ke&&o&&xp(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TS(r),t=ln(r,t),i){case 0:e=Qd(null,e,r,t,n);break e;case 1:e=Ny(null,e,r,t,n);break e;case 11:e=Oy(null,e,r,t,n);break e;case 14:e=jy(null,e,r,ln(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Qd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Ny(t,e,r,i,n);case 3:e:{if($w(e),t===null)throw Error(V(387));r=e.pendingProps,o=e.memoizedState,i=o.element,pw(t,e),wu(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=wo(Error(V(423)),e),e=Dy(t,e,r,n,i);break e}else if(r!==i){i=wo(Error(V(424)),e),e=Dy(t,e,r,n,i);break e}else for(Bt=kr(e.stateNode.containerInfo.firstChild),Ut=e,ke=!0,cn=null,n=dw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(go(),r===i){e=Xn(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return mw(e),t===null&&Ud(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Fd(r,i)?s=null:o!==null&&Fd(r,o)&&(e.flags|=32),zw(t,e),bt(t,e,s,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return Bw(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=yo(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Oy(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,me(yu,r._currentValue),r._currentValue=s,o!==null)if(vn(o.value,s)){if(o.children===i.children&&!Ot.current){e=Xn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Wn(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Hd(o.return,n,e),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(V(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ao(e,n),i=tn(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=ln(r,e.pendingProps),i=ln(r.type,i),jy(t,e,r,i,n);case 15:return Fw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Bl(t,e),e.tag=1,jt(r)?(t=!0,pu(e)):t=!1,ao(e,n),Dw(e,r,i),Gd(e,r,i,n),Kd(null,e,r,!0,t,n);case 19:return Uw(t,e,n);case 22:return Vw(t,e,n)}throw Error(V(156,e.tag))};function o_(t,e){return O1(t,e)}function bS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new bS(t,e,n,r)}function Hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TS(t){if(typeof t=="function")return Hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===up)return 11;if(t===cp)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Hp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ui:return fi(n.children,i,o,e);case lp:s=8,i|=8;break;case gd:return t=Zt(12,n,e,i|2),t.elementType=gd,t.lanes=o,t;case yd:return t=Zt(13,n,e,i),t.elementType=yd,t.lanes=o,t;case vd:return t=Zt(19,n,e,i),t.elementType=vd,t.lanes=o,t;case m1:return pc(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h1:s=10;break e;case p1:s=9;break e;case up:s=11;break e;case cp:s=14;break e;case pr:s=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=Zt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function fi(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function pc(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=m1,t.lanes=n,t.stateNode={isHidden:!1},t}function $f(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function Bf(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ef(0),this.expirationTimes=Ef(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ef(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wp(t,e,n,r,i,o,s,l,u){return t=new SS(t,e,n,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Zt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ap(o),t}function kS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function s_(t){if(!t)return Mr;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(jt(n))return sw(t,n,e)}return e}function a_(t,e,n,r,i,o,s,l,u){return t=Wp(n,r,!0,t,i,o,s,l,u),t.context=s_(null),n=t.current,r=Tt(),i=Cr(n),o=Wn(r,i),o.callback=e??null,Ir(n,o,i),t.current.lanes=i,ba(t,i,r),Nt(t,r),t}function mc(t,e,n,r){var i=e.current,o=Tt(),s=Cr(i);return n=s_(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(i,e,s),t!==null&&(gn(t,i,s,o),Vl(t,i,s)),s}function Iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gp(t,e){Wy(t,e),(t=t.alternate)&&Wy(t,e)}function IS(){return null}var l_=typeof reportError=="function"?reportError:function(t){console.error(t)};function qp(t){this._internalRoot=t}gc.prototype.render=qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));mc(t,e,null,null)};gc.prototype.unmount=qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ei(function(){mc(null,t,null,null)}),e[Kn]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=V1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&$1(t)}};function Qp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gy(){}function AS(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Iu(s);o.call(c)}}var s=a_(e,r,t,0,null,!1,!1,"",Gy);return t._reactRootContainer=s,t[Kn]=s.current,Ks(t.nodeType===8?t.parentNode:t),Ei(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Iu(u);l.call(c)}}var u=Wp(t,0,!1,null,null,!1,!1,"",Gy);return t._reactRootContainer=u,t[Kn]=u.current,Ks(t.nodeType===8?t.parentNode:t),Ei(function(){mc(e,u,n,r)}),u}function vc(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=Iu(s);l.call(u)}}mc(e,s,t,i)}else s=AS(n,e,t,i,r);return Iu(s)}M1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ws(e.pendingLanes);n!==0&&(hp(e,n|1),Nt(e,Ve()),!(se&6)&&(_o=Ve()+500,Gr()))}break;case 13:Ei(function(){var r=Yn(t,1);if(r!==null){var i=Tt();gn(r,t,1,i)}}),Gp(t,1)}};pp=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=Tt();gn(e,t,134217728,n)}Gp(t,134217728)}};F1=function(t){if(t.tag===13){var e=Cr(t),n=Yn(t,e);if(n!==null){var r=Tt();gn(n,t,e,r)}Gp(t,e)}};V1=function(){return fe};z1=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ad=function(t,e,n){switch(e){case"input":if(xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lc(r);if(!i)throw Error(V(90));y1(r),xd(r,i)}}}break;case"textarea":w1(t,n);break;case"select":e=n.value,e!=null&&ro(t,!!n.multiple,e,!1)}};k1=$p;I1=Ei;var CS={usingClientEntryPoint:!1,Events:[Sa,qi,lc,T1,S1,$p]},ds={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PS={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=P1(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||IS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{ic=_l.inject(PS),In=_l}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CS;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qp(e))throw Error(V(200));return kS(t,e,null,n)};qt.createRoot=function(t,e){if(!Qp(t))throw Error(V(299));var n=!1,r="",i=l_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wp(t,1,!1,null,null,n,!1,r,i),t[Kn]=e.current,Ks(t.nodeType===8?t.parentNode:t),new qp(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=P1(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Ei(t)};qt.hydrate=function(t,e,n){if(!yc(e))throw Error(V(200));return vc(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!Qp(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=l_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=a_(e,null,t,1,n??null,i,!1,o,s),t[Kn]=e.current,Ks(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gc(e)};qt.render=function(t,e,n){if(!yc(e))throw Error(V(200));return vc(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!yc(t))throw Error(V(40));return t._reactRootContainer?(Ei(function(){vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Kn]=null})}),!0):!1};qt.unstable_batchedUpdates=$p;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yc(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return vc(t,e,n,!1,r)};qt.version="18.3.1-next-f1338f8080-20240426";function u_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u_)}catch(t){console.error(t)}}u_(),u1.exports=qt;var c_=u1.exports,qy=c_;pd.createRoot=qy.createRoot,pd.hydrateRoot=qy.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ia.apply(this,arguments)}var xr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xr||(xr={}));const Qy="popstate";function RS(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:l}=r.location;return ah("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Au(i)}return jS(e,n,null,t)}function je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function f_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OS(){return Math.random().toString(36).substr(2,8)}function Ky(t,e){return{usr:t.state,key:t.key,idx:e}}function ah(t,e,n,r){return n===void 0&&(n=null),ia({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Lo(e):e,{state:n,key:e&&e.key||r||OS()})}function Au(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Lo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=xr.Pop,u=null,c=h();c==null&&(c=0,s.replaceState(ia({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function m(){l=xr.Pop;let R=h(),x=R==null?null:R-c;c=R,u&&u({action:l,location:C.location,delta:x})}function g(R,x){l=xr.Push;let v=ah(C.location,R,x);c=h()+1;let E=Ky(v,c),P=C.createHref(v);try{s.pushState(E,"",P)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(P)}o&&u&&u({action:l,location:C.location,delta:1})}function b(R,x){l=xr.Replace;let v=ah(C.location,R,x);c=h();let E=Ky(v,c),P=C.createHref(v);s.replaceState(E,"",P),o&&u&&u({action:l,location:C.location,delta:0})}function I(R){let x=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof R=="string"?R:Au(R);return v=v.replace(/ $/,"%20"),je(x,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,x)}let C={get action(){return l},get location(){return t(i,s)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Qy,m),u=R,()=>{i.removeEventListener(Qy,m),u=null}},createHref(R){return e(i,R)},createURL:I,encodeLocation(R){let x=I(R);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:b,go(R){return s.go(R)}};return C}var Yy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yy||(Yy={}));function NS(t,e,n){return n===void 0&&(n="/"),DS(t,e,n,!1)}function DS(t,e,n,r){let i=typeof e=="string"?Lo(e):e,o=xo(i.pathname||"/",n);if(o==null)return null;let s=d_(t);LS(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=qS(o);l=WS(s[u],c,r)}return l}function d_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(je(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Rr([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),d_(o.children,e,h,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:US(c,o.index),routesMeta:h})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let u of h_(o.path))i(o,s,u)}),e}function h_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=h_(r.join("/")),l=[];return l.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...s),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function LS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MS=/^:[\w-]+$/,FS=3,VS=2,zS=1,$S=10,BS=-2,Xy=t=>t==="*";function US(t,e){let n=t.split("/"),r=n.length;return n.some(Xy)&&(r+=BS),e&&(r+=VS),n.filter(i=>!Xy(i)).reduce((i,o)=>i+(MS.test(o)?FS:o===""?zS:$S),r)}function HS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WS(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,h=o==="/"?e:e.slice(o.length)||"/",m=Cu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!m&&c&&n&&!r[r.length-1].route.index&&(m=Cu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:Rr([o,m.pathname]),pathnameBase:XS(Rr([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=Rr([o,m.pathnameBase]))}return s}function Cu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:b}=h;if(g==="*"){let C=l[m]||"";s=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const I=l[m];return b&&!I?c[g]=void 0:c[g]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function GS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),f_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function qS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return f_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function QS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Lo(t):t;return{pathname:n?n.startsWith("/")?n:KS(n,e):e,search:JS(r),hash:ZS(i)}}function KS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Uf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Kp(t,e){let n=YS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Yp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Lo(t):(i=ia({},t),je(!i.pathname||!i.pathname.includes("?"),Uf("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Uf("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Uf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=QS(i,l),c=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),XS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ek(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const p_=["post","put","patch","delete"];new Set(p_);const tk=["get",...p_];new Set(tk);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa.apply(this,arguments)}const wc=M.createContext(null),m_=M.createContext(null),nr=M.createContext(null),_c=M.createContext(null),qr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),g_=M.createContext(null);function nk(t,e){let{relative:n}=e===void 0?{}:e;Mo()||je(!1);let{basename:r,navigator:i}=M.useContext(nr),{hash:o,pathname:s,search:l}=xc(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Rr([r,s])),i.createHref({pathname:u,search:l,hash:o})}function Mo(){return M.useContext(_c)!=null}function Fo(){return Mo()||je(!1),M.useContext(_c).location}function y_(t){M.useContext(nr).static||M.useLayoutEffect(t)}function v_(){let{isDataRoute:t}=M.useContext(qr);return t?mk():rk()}function rk(){Mo()||je(!1);let t=M.useContext(wc),{basename:e,future:n,navigator:r}=M.useContext(nr),{matches:i}=M.useContext(qr),{pathname:o}=Fo(),s=JSON.stringify(Kp(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return y_(()=>{l.current=!0}),M.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Yp(c,JSON.parse(s),o,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Rr([e,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[e,r,s,o,t])}function xc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(nr),{matches:i}=M.useContext(qr),{pathname:o}=Fo(),s=JSON.stringify(Kp(i,r.v7_relativeSplatPath));return M.useMemo(()=>Yp(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function ik(t,e){return ok(t,e)}function ok(t,e,n,r){Mo()||je(!1);let{navigator:i}=M.useContext(nr),{matches:o}=M.useContext(qr),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Fo(),h;if(e){var m;let R=typeof e=="string"?Lo(e):e;u==="/"||(m=R.pathname)!=null&&m.startsWith(u)||je(!1),h=R}else h=c;let g=h.pathname||"/",b=g;if(u!=="/"){let R=u.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(R.length).join("/")}let I=NS(t,{pathname:b}),C=ck(I&&I.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:Rr([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:Rr([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),o,n,r);return e&&C?M.createElement(_c.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:xr.Pop}},C):C}function sk(){let t=pk(),e=ek(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const ak=M.createElement(sk,null);class lk extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(qr.Provider,{value:this.props.routeContext},M.createElement(g_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uk(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(wc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(qr.Provider,{value:e},r)}function ck(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);h>=0||je(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:b}=n,I=m.route.loader&&g[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||I){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,m,g)=>{let b,I=!1,C=null,R=null;n&&(b=l&&m.route.id?l[m.route.id]:void 0,C=m.route.errorElement||ak,u&&(c<0&&g===0?(I=!0,R=null):c===g&&(I=!0,R=m.route.hydrateFallbackElement||null)));let x=e.concat(s.slice(0,g+1)),v=()=>{let E;return b?E=C:I?E=R:m.route.Component?E=M.createElement(m.route.Component,null):m.route.element?E=m.route.element:E=h,M.createElement(uk,{match:m,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:E})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?M.createElement(lk,{location:n.location,revalidation:n.revalidation,component:C,error:b,children:v(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):v()},null)}var w_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(w_||{}),Pu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pu||{});function fk(t){let e=M.useContext(wc);return e||je(!1),e}function dk(t){let e=M.useContext(m_);return e||je(!1),e}function hk(t){let e=M.useContext(qr);return e||je(!1),e}function __(t){let e=hk(),n=e.matches[e.matches.length-1];return n.route.id||je(!1),n.route.id}function pk(){var t;let e=M.useContext(g_),n=dk(Pu.UseRouteError),r=__(Pu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function mk(){let{router:t}=fk(w_.UseNavigateStable),e=__(Pu.UseNavigateStable),n=M.useRef(!1);return y_(()=>{n.current=!0}),M.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oa({fromRouteId:e},o)))},[t,e])}function gk(t){let{to:e,replace:n,state:r,relative:i}=t;Mo()||je(!1);let{future:o,static:s}=M.useContext(nr),{matches:l}=M.useContext(qr),{pathname:u}=Fo(),c=v_(),h=Yp(e,Kp(l,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return M.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function ze(t){je(!1)}function yk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=xr.Pop,navigator:o,static:s=!1,future:l}=t;Mo()&&je(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:o,static:s,future:oa({v7_relativeSplatPath:!1},l)}),[u,l,o,s]);typeof r=="string"&&(r=Lo(r));let{pathname:h="/",search:m="",hash:g="",state:b=null,key:I="default"}=r,C=M.useMemo(()=>{let R=xo(h,u);return R==null?null:{location:{pathname:R,search:m,hash:g,state:b,key:I},navigationType:i}},[u,h,m,g,b,I,i]);return C==null?null:M.createElement(nr.Provider,{value:c},M.createElement(_c.Provider,{children:n,value:C}))}function vk(t){let{children:e,location:n}=t;return ik(lh(e),n)}new Promise(()=>{});function lh(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let o=[...e,i];if(r.type===M.Fragment){n.push.apply(n,lh(r.props.children,o));return}r.type!==ze&&je(!1),!r.props.index||!r.props.children||je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=lh(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ru.apply(this,arguments)}function x_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _k(t,e){return t.button===0&&(!e||e==="_self")&&!wk(t)}const xk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ek=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],bk="6";try{window.__reactRouterVersion=bk}catch{}const Tk=M.createContext({isTransitioning:!1}),Sk="startTransition",Jy=_b[Sk];function kk(t){let{basename:e,children:n,future:r,window:i}=t,o=M.useRef();o.current==null&&(o.current=RS({window:i,v5Compat:!0}));let s=o.current,[l,u]=M.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},h=M.useCallback(m=>{c&&Jy?Jy(()=>u(m)):u(m)},[u,c]);return M.useLayoutEffect(()=>s.listen(h),[s,h]),M.createElement(yk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Ik=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ak=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ck=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:u,to:c,preventScrollReset:h,unstable_viewTransition:m}=e,g=x_(e,xk),{basename:b}=M.useContext(nr),I,C=!1;if(typeof c=="string"&&Ak.test(c)&&(I=c,Ik))try{let E=new URL(window.location.href),P=c.startsWith("//")?new URL(E.protocol+c):new URL(c),L=xo(P.pathname,b);P.origin===E.origin&&L!=null?c=L+P.search+P.hash:C=!0}catch{}let R=nk(c,{relative:i}),x=Rk(c,{replace:s,state:l,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:m});function v(E){r&&r(E),E.defaultPrevented||x(E)}return M.createElement("a",Ru({},g,{href:I||R,onClick:C||o?r:v,ref:n,target:u}))}),gr=M.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:u,unstable_viewTransition:c,children:h}=e,m=x_(e,Ek),g=xc(u,{relative:m.relative}),b=Fo(),I=M.useContext(m_),{navigator:C,basename:R}=M.useContext(nr),x=I!=null&&Ok(g)&&c===!0,v=C.encodeLocation?C.encodeLocation(g).pathname:g.pathname,E=b.pathname,P=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;i||(E=E.toLowerCase(),P=P?P.toLowerCase():null,v=v.toLowerCase()),P&&R&&(P=xo(P,R)||P);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let N=E===v||!s&&E.startsWith(v)&&E.charAt(L)==="/",_=P!=null&&(P===v||!s&&P.startsWith(v)&&P.charAt(v.length)==="/"),w={isActive:N,isPending:_,isTransitioning:x},T=N?r:void 0,S;typeof o=="function"?S=o(w):S=[o,N?"active":null,_?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(w):l;return M.createElement(Ck,Ru({},m,{"aria-current":T,className:S,ref:n,style:A,to:u,unstable_viewTransition:c}),typeof h=="function"?h(w):h)});var uh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(uh||(uh={}));var Zy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zy||(Zy={}));function Pk(t){let e=M.useContext(wc);return e||je(!1),e}function Rk(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l}=e===void 0?{}:e,u=v_(),c=Fo(),h=xc(t,{relative:s});return M.useCallback(m=>{if(_k(m,n)){m.preventDefault();let g=r!==void 0?r:Au(c)===Au(h);u(t,{replace:g,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l})}},[c,u,h,r,i,n,t,o,s,l])}function Ok(t,e){e===void 0&&(e={});let n=M.useContext(Tk);n==null&&je(!1);let{basename:r}=Pk(uh.useViewTransitionState),i=xc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=xo(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=xo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cu(i.pathname,s)!=null||Cu(i.pathname,o)!=null}var Xe=function(){return Xe=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Xe.apply(this,arguments)};function sa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var we="-ms-",Ns="-moz-",ue="-webkit-",E_="comm",Ec="rule",Xp="decl",jk="@import",b_="@keyframes",Nk="@layer",T_=Math.abs,Jp=String.fromCharCode,ch=Object.assign;function Dk(t,e){return Ke(t,0)^45?(((e<<2^Ke(t,0))<<2^Ke(t,1))<<2^Ke(t,2))<<2^Ke(t,3):0}function S_(t){return t.trim()}function $n(t,e){return(t=e.exec(t))?t[0]:t}function J(t,e,n){return t.replace(e,n)}function Gl(t,e,n){return t.indexOf(e,n)}function Ke(t,e){return t.charCodeAt(e)|0}function Eo(t,e,n){return t.slice(e,n)}function xn(t){return t.length}function k_(t){return t.length}function xs(t,e){return e.push(t),t}function Lk(t,e){return t.map(e).join("")}function ev(t,e){return t.filter(function(n){return!$n(n,e)})}var bc=1,bo=1,I_=0,rn=0,Be=0,Vo="";function Tc(t,e,n,r,i,o,s,l){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:bc,column:bo,length:s,return:"",siblings:l}}function hr(t,e){return ch(Tc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Fi(t){for(;t.root;)t=hr(t.root,{children:[t]});xs(t,t.siblings)}function Mk(){return Be}function Fk(){return Be=rn>0?Ke(Vo,--rn):0,bo--,Be===10&&(bo=1,bc--),Be}function yn(){return Be=rn<I_?Ke(Vo,rn++):0,bo++,Be===10&&(bo=1,bc++),Be}function di(){return Ke(Vo,rn)}function ql(){return rn}function Sc(t,e){return Eo(Vo,t,e)}function fh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vk(t){return bc=bo=1,I_=xn(Vo=t),rn=0,[]}function zk(t){return Vo="",t}function Hf(t){return S_(Sc(rn-1,dh(t===91?t+2:t===40?t+1:t)))}function $k(t){for(;(Be=di())&&Be<33;)yn();return fh(t)>2||fh(Be)>3?"":" "}function Bk(t,e){for(;--e&&yn()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Sc(t,ql()+(e<6&&di()==32&&yn()==32))}function dh(t){for(;yn();)switch(Be){case t:return rn;case 34:case 39:t!==34&&t!==39&&dh(Be);break;case 40:t===41&&dh(t);break;case 92:yn();break}return rn}function Uk(t,e){for(;yn()&&t+Be!==57;)if(t+Be===84&&di()===47)break;return"/*"+Sc(e,rn-1)+"*"+Jp(t===47?t:yn())}function Hk(t){for(;!fh(di());)yn();return Sc(t,rn)}function Wk(t){return zk(Ql("",null,null,null,[""],t=Vk(t),0,[0],t))}function Ql(t,e,n,r,i,o,s,l,u){for(var c=0,h=0,m=s,g=0,b=0,I=0,C=1,R=1,x=1,v=0,E="",P=i,L=o,N=r,_=E;R;)switch(I=v,v=yn()){case 40:if(I!=108&&Ke(_,m-1)==58){Gl(_+=J(Hf(v),"&","&\f"),"&\f",T_(c?l[c-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:_+=Hf(v);break;case 9:case 10:case 13:case 32:_+=$k(I);break;case 92:_+=Bk(ql()-1,7);continue;case 47:switch(di()){case 42:case 47:xs(Gk(Uk(yn(),ql()),e,n,u),u);break;default:_+="/"}break;case 123*C:l[c++]=xn(_)*x;case 125*C:case 59:case 0:switch(v){case 0:case 125:R=0;case 59+h:x==-1&&(_=J(_,/\f/g,"")),b>0&&xn(_)-m&&xs(b>32?nv(_+";",r,n,m-1,u):nv(J(_," ","")+";",r,n,m-2,u),u);break;case 59:_+=";";default:if(xs(N=tv(_,e,n,c,h,i,l,E,P=[],L=[],m,o),o),v===123)if(h===0)Ql(_,e,N,N,P,o,m,l,L);else switch(g===99&&Ke(_,3)===110?100:g){case 100:case 108:case 109:case 115:Ql(t,N,N,r&&xs(tv(t,N,N,0,0,i,l,E,i,P=[],m,L),L),i,L,m,l,r?P:L);break;default:Ql(_,N,N,N,[""],L,0,l,L)}}c=h=b=0,C=x=1,E=_="",m=s;break;case 58:m=1+xn(_),b=I;default:if(C<1){if(v==123)--C;else if(v==125&&C++==0&&Fk()==125)continue}switch(_+=Jp(v),v*C){case 38:x=h>0?1:(_+="\f",-1);break;case 44:l[c++]=(xn(_)-1)*x,x=1;break;case 64:di()===45&&(_+=Hf(yn())),g=di(),h=m=xn(E=_+=Hk(ql())),v++;break;case 45:I===45&&xn(_)==2&&(C=0)}}return o}function tv(t,e,n,r,i,o,s,l,u,c,h,m){for(var g=i-1,b=i===0?o:[""],I=k_(b),C=0,R=0,x=0;C<r;++C)for(var v=0,E=Eo(t,g+1,g=T_(R=s[C])),P=t;v<I;++v)(P=S_(R>0?b[v]+" "+E:J(E,/&\f/g,b[v])))&&(u[x++]=P);return Tc(t,e,n,i===0?Ec:l,u,c,h,m)}function Gk(t,e,n,r){return Tc(t,e,n,E_,Jp(Mk()),Eo(t,2,-2),0,r)}function nv(t,e,n,r,i){return Tc(t,e,n,Xp,Eo(t,0,r),Eo(t,r+1,-1),r,i)}function A_(t,e,n){switch(Dk(t,e)){case 5103:return ue+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+t+t;case 4789:return Ns+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+t+Ns+t+we+t+t;case 5936:switch(Ke(t,e+11)){case 114:return ue+t+we+J(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ue+t+we+J(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ue+t+we+J(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ue+t+we+t+t;case 6165:return ue+t+we+"flex-"+t+t;case 5187:return ue+t+J(t,/(\w+).+(:[^]+)/,ue+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return ue+t+we+"flex-item-"+J(t,/flex-|-self/g,"")+($n(t,/flex-|baseline/)?"":we+"grid-row-"+J(t,/flex-|-self/g,""))+t;case 4675:return ue+t+we+"flex-line-pack"+J(t,/align-content|flex-|-self/g,"")+t;case 5548:return ue+t+we+J(t,"shrink","negative")+t;case 5292:return ue+t+we+J(t,"basis","preferred-size")+t;case 6060:return ue+"box-"+J(t,"-grow","")+ue+t+we+J(t,"grow","positive")+t;case 4554:return ue+J(t,/([^-])(transform)/g,"$1"+ue+"$2")+t;case 6187:return J(J(J(t,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),t,"")+t;case 5495:case 3959:return J(t,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return J(J(t,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+t+t;case 4200:if(!$n(t,/flex-|baseline/))return we+"grid-column-align"+Eo(t,e)+t;break;case 2592:case 3360:return we+J(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,$n(r.props,/grid-\w+-end/)})?~Gl(t+(n=n[e].value),"span",0)?t:we+J(t,"-start","")+t+we+"grid-row-span:"+(~Gl(n,"span",0)?$n(n,/\d+/):+$n(n,/\d+/)-+$n(t,/\d+/))+";":we+J(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return $n(r.props,/grid-\w+-start/)})?t:we+J(J(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return J(t,/(.+)-inline(.+)/,ue+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(t)-1-e>6)switch(Ke(t,e+1)){case 109:if(Ke(t,e+4)!==45)break;case 102:return J(t,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ns+(Ke(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Gl(t,"stretch",0)?A_(J(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return J(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,u,c){return we+i+":"+o+c+(s?we+i+"-span:"+(l?u:+u-+o)+c:"")+t});case 4949:if(Ke(t,e+6)===121)return J(t,":",":"+ue)+t;break;case 6444:switch(Ke(t,Ke(t,14)===45?18:11)){case 120:return J(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ke(t,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+we+"$2box$3")+t;case 100:return J(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(t,"scroll-","scroll-snap-")+t}return t}function Ou(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function qk(t,e,n,r){switch(t.type){case Nk:if(t.children.length)break;case jk:case Xp:return t.return=t.return||t.value;case E_:return"";case b_:return t.return=t.value+"{"+Ou(t.children,r)+"}";case Ec:if(!xn(t.value=t.props.join(",")))return""}return xn(n=Ou(t.children,r))?t.return=t.value+"{"+n+"}":""}function Qk(t){var e=k_(t);return function(n,r,i,o){for(var s="",l=0;l<e;l++)s+=t[l](n,r,i,o)||"";return s}}function Kk(t){return function(e){e.root||(e=e.return)&&t(e)}}function Yk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Xp:t.return=A_(t.value,t.length,n);return;case b_:return Ou([hr(t,{value:J(t.value,"@","@"+ue)})],r);case Ec:if(t.length)return Lk(n=t.props,function(i){switch($n(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fi(hr(t,{props:[J(i,/:(read-\w+)/,":"+Ns+"$1")]})),Fi(hr(t,{props:[i]})),ch(t,{props:ev(n,r)});break;case"::placeholder":Fi(hr(t,{props:[J(i,/:(plac\w+)/,":"+ue+"input-$1")]})),Fi(hr(t,{props:[J(i,/:(plac\w+)/,":"+Ns+"$1")]})),Fi(hr(t,{props:[J(i,/:(plac\w+)/,we+"input-$1")]})),Fi(hr(t,{props:[i]})),ch(t,{props:ev(n,r)});break}return""})}}var Xk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vt={},To=typeof process<"u"&&Vt!==void 0&&(Vt.REACT_APP_SC_ATTR||Vt.SC_ATTR)||"data-styled",C_="active",P_="data-styled-version",kc="6.1.12",Zp=`/*!sc*/
`,ju=typeof window<"u"&&"HTMLElement"in window,Jk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Vt.REACT_APP_SC_DISABLE_SPEEDY!==""?Vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Vt!==void 0&&Vt.SC_DISABLE_SPEEDY!==void 0&&Vt.SC_DISABLE_SPEEDY!==""&&Vt.SC_DISABLE_SPEEDY!=="false"&&Vt.SC_DISABLE_SPEEDY),Zk={},Ic=Object.freeze([]),So=Object.freeze({});function R_(t,e,n){return n===void 0&&(n=So),t.theme!==n.theme&&t.theme||e||n.theme}var O_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tI=/(^-|-$)/g;function rv(t){return t.replace(eI,"-").replace(tI,"")}var nI=/(a)(d)/gi,xl=52,iv=function(t){return String.fromCharCode(t+(t>25?39:97))};function hh(t){var e,n="";for(e=Math.abs(t);e>xl;e=e/xl|0)n=iv(e%xl)+n;return(iv(e%xl)+n).replace(nI,"$1-$2")}var Wf,j_=5381,eo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},N_=function(t){return eo(j_,t)};function D_(t){return hh(N_(t)>>>0)}function rI(t){return t.displayName||t.name||"Component"}function Gf(t){return typeof t=="string"&&!0}var L_=typeof Symbol=="function"&&Symbol.for,M_=L_?Symbol.for("react.memo"):60115,iI=L_?Symbol.for("react.forward_ref"):60112,oI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aI=((Wf={})[iI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wf[M_]=F_,Wf);function ov(t){return("type"in(e=t)&&e.type.$$typeof)===M_?F_:"$$typeof"in t?aI[t.$$typeof]:oI;var e}var lI=Object.defineProperty,uI=Object.getOwnPropertyNames,sv=Object.getOwnPropertySymbols,cI=Object.getOwnPropertyDescriptor,fI=Object.getPrototypeOf,av=Object.prototype;function V_(t,e,n){if(typeof e!="string"){if(av){var r=fI(e);r&&r!==av&&V_(t,r,n)}var i=uI(e);sv&&(i=i.concat(sv(e)));for(var o=ov(t),s=ov(e),l=0;l<i.length;++l){var u=i[l];if(!(u in sI||n&&n[u]||s&&u in s||o&&u in o)){var c=cI(e,u);try{lI(t,u,c)}catch{}}}}return t}function bi(t){return typeof t=="function"}function em(t){return typeof t=="object"&&"styledComponentId"in t}function li(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ph(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function aa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function mh(t,e,n){if(n===void 0&&(n=!1),!n&&!aa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=mh(t[r],e[r]);else if(aa(e))for(var r in e)t[r]=mh(t[r],e[r]);return t}function tm(t,e){Object.defineProperty(t,"toString",{value:e})}function Ti(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var dI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Ti(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Zp);return n},t}(),Kl=new Map,Nu=new Map,Yl=1,El=function(t){if(Kl.has(t))return Kl.get(t);for(;Nu.has(Yl);)Yl++;var e=Yl++;return Kl.set(t,e),Nu.set(e,t),e},hI=function(t,e){Yl=e+1,Kl.set(t,e),Nu.set(e,t)},pI="style[".concat(To,"][").concat(P_,'="').concat(kc,'"]'),mI=new RegExp("^".concat(To,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gI=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},yI=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Zp),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var u=l.match(mI);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(hI(h,c),gI(t,h,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},lv=function(t){for(var e=document.querySelectorAll(pI),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(To)!==C_&&(yI(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function vI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var z_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(To,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(To,C_),r.setAttribute(P_,kc);var s=vI();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},wI=function(){function t(e){this.element=z_(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Ti(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),_I=function(){function t(e){this.element=z_(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),xI=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),uv=ju,EI={isServer:!ju,useCSSOMInjection:!Jk},Du=function(){function t(e,n,r){e===void 0&&(e=So),n===void 0&&(n={});var i=this;this.options=Xe(Xe({},EI),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ju&&uv&&(uv=!1,lv(this)),tm(this,function(){return function(o){for(var s=o.getTag(),l=s.length,u="",c=function(m){var g=function(x){return Nu.get(x)}(m);if(g===void 0)return"continue";var b=o.names.get(g),I=s.getGroup(m);if(b===void 0||!b.size||I.length===0)return"continue";var C="".concat(To,".g").concat(m,'[id="').concat(g,'"]'),R="";b!==void 0&&b.forEach(function(x){x.length>0&&(R+="".concat(x,","))}),u+="".concat(I).concat(C,'{content:"').concat(R,'"}').concat(Zp)},h=0;h<l;h++)c(h);return u}(i)})}return t.registerId=function(e){return El(e)},t.prototype.rehydrate=function(){!this.server&&ju&&lv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Xe(Xe({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new xI(i):r?new wI(i):new _I(i)}(this.options),new dI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(El(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(El(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(El(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),bI=/&/g,TI=/^\s*\/\/.*$/gm;function $_(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=$_(n.children,e)),n})}function SI(t){var e,n,r,i=So,o=i.options,s=o===void 0?So:o,l=i.plugins,u=l===void 0?Ic:l,c=function(g,b,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):g},h=u.slice();h.push(function(g){g.type===Ec&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(bI,n).replace(r,c))}),s.prefix&&h.push(Yk),h.push(qk);var m=function(g,b,I,C){b===void 0&&(b=""),I===void 0&&(I=""),C===void 0&&(C="&"),e=C,n=b,r=new RegExp("\\".concat(n,"\\b"),"g");var R=g.replace(TI,""),x=Wk(I||b?"".concat(I," ").concat(b," { ").concat(R," }"):R);s.namespace&&(x=$_(x,s.namespace));var v=[];return Ou(x,Qk(h.concat(Kk(function(E){return v.push(E)})))),v};return m.hash=u.length?u.reduce(function(g,b){return b.name||Ti(15),eo(g,b.name)},j_).toString():"",m}var kI=new Du,gh=SI(),B_=de.createContext({shouldForwardProp:void 0,styleSheet:kI,stylis:gh});B_.Consumer;de.createContext(void 0);function yh(){return M.useContext(B_)}var II=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=gh);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,tm(this,function(){throw Ti(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=gh),this.name+e.hash},t}(),AI=function(t){return t>="A"&&t<="Z"};function cv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;AI(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var U_=function(t){return t==null||t===!1||t===""},H_=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!U_(o)&&(Array.isArray(o)&&o.isCss||bi(o)?r.push("".concat(cv(i),":"),o,";"):aa(o)?r.push.apply(r,sa(sa(["".concat(i," {")],H_(o),!1),["}"],!1)):r.push("".concat(cv(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Xk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Or(t,e,n,r){if(U_(t))return[];if(em(t))return[".".concat(t.styledComponentId)];if(bi(t)){if(!bi(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Or(i,e,n,r)}var o;return t instanceof II?n?(t.inject(n,r),[t.getName(r)]):[t]:aa(t)?H_(t):Array.isArray(t)?Array.prototype.concat.apply(Ic,t.map(function(s){return Or(s,e,n,r)})):[t.toString()]}function W_(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(bi(n)&&!em(n))return!1}return!0}var CI=N_(kc),PI=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&W_(e),this.componentId=n,this.baseHash=eo(CI,n),this.baseStyle=r,Du.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=li(i,this.staticRulesId);else{var o=ph(Or(this.rules,e,n,r)),s=hh(eo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=li(i,s),this.staticRulesId=s}else{for(var u=eo(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")c+=m;else if(m){var g=ph(Or(m,e,n,r));u=eo(u,g+h),c+=g}}if(c){var b=hh(u>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,r(c,".".concat(b),void 0,this.componentId)),i=li(i,b)}}return i},t}(),la=de.createContext(void 0);la.Consumer;function RI(t){var e=de.useContext(la),n=M.useMemo(function(){return function(r,i){if(!r)throw Ti(14);if(bi(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Ti(8);return i?Xe(Xe({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?de.createElement(la.Provider,{value:n},t.children):null}var qf={};function OI(t,e,n){var r=em(t),i=t,o=!Gf(t),s=e.attrs,l=s===void 0?Ic:s,u=e.componentId,c=u===void 0?function(P,L){var N=typeof P!="string"?"sc":rv(P);qf[N]=(qf[N]||0)+1;var _="".concat(N,"-").concat(D_(kc+N+qf[N]));return L?"".concat(L,"-").concat(_):_}(e.displayName,e.parentComponentId):u,h=e.displayName,m=h===void 0?function(P){return Gf(P)?"styled.".concat(P):"Styled(".concat(rI(P),")")}(t):h,g=e.displayName&&e.componentId?"".concat(rv(e.displayName),"-").concat(e.componentId):e.componentId||c,b=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;I=function(P,L){return C(P,L)&&R(P,L)}}else I=C}var x=new PI(n,g,r?i.componentStyle:void 0);function v(P,L){return function(N,_,w){var T=N.attrs,S=N.componentStyle,A=N.defaultProps,O=N.foldedComponentIds,k=N.styledComponentId,et=N.target,on=de.useContext(la),Qr=yh(),Lt=N.shouldForwardProp||Qr.shouldForwardProp,B=R_(_,on,A)||So,G=function(It,wt,At){for(var Kr,jn=Xe(Xe({},wt),{className:void 0,theme:At}),ir=0;ir<It.length;ir+=1){var Nn=bi(Kr=It[ir])?Kr(jn):Kr;for(var Yt in Nn)jn[Yt]=Yt==="className"?li(jn[Yt],Nn[Yt]):Yt==="style"?Xe(Xe({},jn[Yt]),Nn[Yt]):Nn[Yt]}return wt.className&&(jn.className=li(jn.className,wt.className)),jn}(T,_,B),Y=G.as||et,ce={};for(var te in G)G[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&G.theme===B||(te==="forwardedAs"?ce.as=G.forwardedAs:Lt&&!Lt(te,Y)||(ce[te]=G[te]));var Ee=function(It,wt){var At=yh(),Kr=It.generateAndInjectStyles(wt,At.styleSheet,At.stylis);return Kr}(S,G),Mt=li(O,k);return Ee&&(Mt+=" "+Ee),G.className&&(Mt+=" "+G.className),ce[Gf(Y)&&!O_.has(Y)?"class":"className"]=Mt,ce.ref=w,M.createElement(Y,ce)}(E,P,L)}v.displayName=m;var E=de.forwardRef(v);return E.attrs=b,E.componentStyle=x,E.displayName=m,E.shouldForwardProp=I,E.foldedComponentIds=r?li(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=g,E.target=r?i.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(L){for(var N=[],_=1;_<arguments.length;_++)N[_-1]=arguments[_];for(var w=0,T=N;w<T.length;w++)mh(L,T[w],!0);return L}({},i.defaultProps,P):P}}),tm(E,function(){return".".concat(E.styledComponentId)}),o&&V_(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function fv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var dv=function(t){return Object.assign(t,{isCss:!0})};function G_(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(bi(t)||aa(t))return dv(Or(fv(Ic,sa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Or(r):dv(Or(fv(r,e)))}function vh(t,e,n){if(n===void 0&&(n=So),!e)throw Ti(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,G_.apply(void 0,sa([i],o,!1)))};return r.attrs=function(i){return vh(t,e,Xe(Xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return vh(t,e,Xe(Xe({},n),i))},r}var q_=function(t){return vh(OI,t)},Q=q_;O_.forEach(function(t){Q[t]=q_(t)});var jI=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=W_(e),Du.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var o=i(ph(Or(this.rules,n,r,i)),""),s=this.componentId+e;r.insertRules(s,s,o)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Du.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function NI(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=G_.apply(void 0,sa([t],e,!1)),i="sc-global-".concat(D_(JSON.stringify(r))),o=new jI(r,i),s=function(u){var c=yh(),h=de.useContext(la),m=de.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(m,u,c.styleSheet,h,c.stylis),de.useLayoutEffect(function(){if(!c.styleSheet.server)return l(m,u,c.styleSheet,h,c.stylis),function(){return o.removeStyles(m,c.styleSheet)}},[m,u,c.styleSheet,h,c.stylis]),null};function l(u,c,h,m,g){if(o.isStatic)o.renderStyles(u,Zk,h,g);else{var b=Xe(Xe({},c),{theme:R_(c,m,s.defaultProps)});o.renderStyles(u,b,h,g)}}return de.memo(s)}const DI=NI`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
  background-color: #FFFFFF;
  scroll-behavior: smooth; /* Smooth scrolling */
}

body {
  overflow-x: hidden;
  scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
  scroll-behavior: smooth; /* Smooth scrolling */
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
  background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
  background: #fff;
  border: 5px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

h1 {
  color: ${({theme:t})=>t.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
  color: ${({theme:t})=>t.colors.heading};
  font-size: 4.4rem;
  font-weight: 500;
  white-space: normal;
  text-align: center;
}

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({theme:t})=>t.colors.text};
  opacity: 0.7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight: 400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
}

.common-heading {
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
}

input, textarea {
  max-width: 50rem;
  color: ${({theme:t})=>t.colors.black};
  padding: 1.6rem 2.4rem;
  border: 1px solid ${({theme:t})=>t.colors.border};
  text-transform: uppercase;
  box-shadow: ${({theme:t})=>t.colors.shadowSupport};
}

input[type="submit"] {
  max-width: 16rem;
  margin-top: 2rem;
  background-color: ${({theme:t})=>t.colors.btn};
  color: ${({theme:t})=>t.colors.white};
  padding: 1.4rem 2.2rem;
  border-style: solid;
  border-width: 0.1rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: ${({theme:t})=>t.media.tab}) {
  .container {
    padding: 0 3.2rem;
  }

  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: ${({theme:t})=>t.media.mobile}) {
  html {
    font-size: 50%;
  }

  .grid {
    gap: 3.2rem;
  }

  .grid-two-column, .grid-three-column, .grid-four-column {
    grid-template-columns: 1fr;
  }
}
`;var Q_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hv=de.createContext&&de.createContext(Q_),LI=["attr","size","title"];function MI(t,e){if(t==null)return{};var n=FI(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function FI(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Lu(){return Lu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lu.apply(this,arguments)}function pv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Mu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pv(Object(n),!0).forEach(function(r){VI(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function VI(t,e,n){return e=zI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zI(t){var e=$I(t,"string");return typeof e=="symbol"?e:e+""}function $I(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function K_(t){return t&&t.map((e,n)=>de.createElement(e.tag,Mu({key:n},e.attr),K_(e.child)))}function Ia(t){return e=>de.createElement(BI,Lu({attr:Mu({},t.attr)},e),K_(t.child))}function BI(t){var e=n=>{var{attr:r,size:i,title:o}=t,s=MI(t,LI),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),de.createElement("svg",Lu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:Mu(Mu({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&de.createElement("title",null,o),t.children)};return hv!==void 0?de.createElement(hv.Consumer,null,n=>e(n)):e(Q_)}function UI(t){return Ia({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z",fill:"currentColor"},child:[]}]})(t)}function HI(t){return Ia({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z",fill:"currentColor"},child:[]}]})(t)}const WI=()=>{const[t,e]=M.useState(!1);return d.jsxs(GI,{role:"navigation","aria-label":"Main Navigation",children:[d.jsx("div",{className:`overlay ${t?"active":""}`,onClick:()=>e(!1)}),d.jsxs("div",{className:"menuIcon",children:[d.jsx("div",{className:"mobile-navbar-btn","aria-label":t?"Close menu":"Open menu","aria-expanded":t,onClick:()=>e(!t),children:t?d.jsx(UI,{className:"mobile-nav-icon close-icon","aria-hidden":"true"}):d.jsx(HI,{className:"mobile-nav-icon","aria-hidden":"true"})}),d.jsxs("ul",{className:`navbar-list ${t?"active":""}`,role:"menubar",children:[d.jsx("li",{role:"none",children:d.jsx(gr,{className:"navbar-link",onClick:()=>e(!1),to:"/",role:"menuitem","aria-label":"Home",children:"Home"})}),d.jsx("li",{role:"none",children:d.jsx(gr,{className:"navbar-link",onClick:()=>e(!1),to:"/about",role:"menuitem","aria-label":"About Us",children:"About"})}),d.jsx("li",{role:"none",children:d.jsx(gr,{className:"navbar-link",onClick:()=>e(!1),to:"/testimonial",role:"menuitem","aria-label":"Testimonials",children:"Testimonials"})}),d.jsx("li",{role:"none",children:d.jsx(gr,{className:"navbar-link",onClick:()=>e(!1),to:"/contact",role:"menuitem","aria-label":"Contact Us",children:"Contact"})}),d.jsx("li",{role:"none",children:d.jsx(gr,{className:"navbar-link",onClick:()=>e(!1),to:"/blog",role:"menuitem","aria-label":"Blogs",children:"Blogs"})}),d.jsx("li",{role:"none",children:d.jsx(gr,{className:"navbar-link",onClick:()=>e(!1),to:"/FAQ",role:"menuitem","aria-label":"FAQ",children:"FAQ"})})]})]})]})},GI=Q.nav`
  /* Main container for the menu */
  .menuIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(37,37,37,255);
    box-sizing: border-box;
    width: 100%;
    position: relative;
    z-index: 1001;
  }

  /* Basic styling for desktop view */
  .navbar-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li {
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: bold;
          color: #fff;
          transition: color 0.3s ease;
        }

        &:hover,
        &:active {
          color: #ffcc00;
        }
      }
    }
  }

  /* Hidden by default in desktop view */
  .mobile-navbar-btn {
    display: none;

    .mobile-nav-icon {
      font-size: 4rem;
      cursor: pointer;
      color: #febb12;
      transition: color 0.3s ease;
    }

    .close-icon {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 10001;
    }
  }

  /* Overlay that dims the background when the menu is open */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999;
  }

  .overlay.active {
    opacity: 1;
    visibility: visible;
  }

  /* Responsive styling for mobile view */
  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
    }

    /* Full-screen mobile view menu */
    .navbar-list {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(37, 37, 37, 0.95);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 0;
      margin: 0;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
      z-index: 10000;
    }

    /* Show menu when active */
    .navbar-list.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    /* Styling for navbar links in mobile view */
    .navbar-link {
      font-size: 2.5rem;
      color: #ffcc00;
      text-transform: uppercase;
    }

    /* Ensure the menu icon appears */
    .mobile-navbar-btn .mobile-nav-icon {
      display: block;
    }
  }
`,qI=()=>d.jsxs(QI,{children:[d.jsx(gr,{to:"/",children:d.jsxs(KI,{children:[d.jsx(YI,{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/logo1_rzt9qj.png",alt:"Logo"}),d.jsxs(XI,{children:[d.jsx(JI,{children:"STOCK"}),d.jsx(eA,{}),d.jsx(ZI,{children:"ARCHERY"})]})]})}),d.jsx(WI,{})]}),QI=Q.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: rgba(37, 37, 37, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    padding: 0 1.6rem; /* Reduce padding on mobile */
  }
`,KI=Q.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    margin-left: 0; /* Ensure no margin on mobile */
  }
`,YI=Q.img`
  width: 50px; /* Increase size if needed */
  height: 50px; /* Increase size if needed */
  border-radius: 50%; /* Ensure it’s perfectly round */
  margin-right: 0.5rem; /* Space between logo and text */
  object-fit: cover; /* Ensure the image covers the circle properly */
  
  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    width: 50px; /* Adjust size on mobile if needed */
    height: 50px; /* Adjust size on mobile if needed */
    margin-right: 0.5rem; /* Reduce space on mobile */
  }
`,XI=Q.div`
  font-size: 3rem; /* Adjust size as needed */
  font-weight: bold; /* You can choose the desired font weight */
  display: flex;
  align-items: center;
  text-decoration: none;

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    margin-left: 1.5rem; /* Move text to the right on mobile */
  }
`,JI=Q.span`
  color: #fff; /* White color */
`,ZI=Q.span`
  color: #febb12; /* Yellow color */
`,eA=Q.span`
  margin-left: 0.5rem; /* Adjust the spacing as needed */
`,mv=()=>{};let nm={},Y_={},X_=null,J_={mark:mv,measure:mv};try{typeof window<"u"&&(nm=window),typeof document<"u"&&(Y_=document),typeof MutationObserver<"u"&&(X_=MutationObserver),typeof performance<"u"&&(J_=performance)}catch{}const{userAgent:gv=""}=nm.navigator||{},Fr=nm,xe=Y_,yv=X_,bl=J_;Fr.document;const rr=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",Z_=~gv.indexOf("MSIE")||~gv.indexOf("Trident/");var Ie="classic",e2="duotone",Ht="sharp",Wt="sharp-duotone",tA=[Ie,e2,Ht,Wt],nA={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},vv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},rA=["kit"],iA=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,oA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,sA={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},aA={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},lA={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},uA={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},cA={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},fA={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},t2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},dA=["solid","regular","light","thin","duotone","brands"],n2=[1,2,3,4,5,6,7,8,9,10],hA=n2.concat([11,12,13,14,15,16,17,18,19,20]),Es={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pA=[...Object.keys(uA),...dA,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Es.GROUP,Es.SWAP_OPACITY,Es.PRIMARY,Es.SECONDARY].concat(n2.map(t=>"".concat(t,"x"))).concat(hA.map(t=>"w-".concat(t))),mA={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},gA={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},yA={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},wv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Jn="___FONT_AWESOME___",wh=16,r2="fa",i2="svg-inline--fa",Si="data-fa-i2svg",_h="data-fa-pseudo-element",vA="data-fa-pseudo-element-pending",rm="data-prefix",im="data-icon",_v="fontawesome-i2svg",wA="async",_A=["HTML","HEAD","STYLE","SCRIPT"],o2=(()=>{try{return!0}catch{return!1}})(),s2=[Ie,Ht,Wt];function Aa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Ie]}})}const a2={...t2};a2[Ie]={...t2[Ie],...vv.kit,...vv["kit-duotone"]};const hi=Aa(a2),xh={...fA};xh[Ie]={...xh[Ie],...wv.kit,...wv["kit-duotone"]};const ua=Aa(xh),Eh={...cA};Eh[Ie]={...Eh[Ie],...yA.kit};const pi=Aa(Eh),bh={...lA};bh[Ie]={...bh[Ie],...gA.kit};const xA=Aa(bh),EA=iA,l2="fa-layers-text",bA=oA,TA={...nA};Aa(TA);const SA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qf=Es,ko=new Set;Object.keys(ua[Ie]).map(ko.add.bind(ko));Object.keys(ua[Ht]).map(ko.add.bind(ko));Object.keys(ua[Wt]).map(ko.add.bind(ko));const kA=[...rA,...pA],Ds=Fr.FontAwesomeConfig||{};function IA(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function AA(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}xe&&typeof xe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=AA(IA(n));i!=null&&(Ds[r]=i)});const u2={styleDefault:"solid",familyDefault:"classic",cssPrefix:r2,replacementClass:i2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ds.familyPrefix&&(Ds.cssPrefix=Ds.familyPrefix);const Io={...u2,...Ds};Io.autoReplaceSvg||(Io.observeMutations=!1);const H={};Object.keys(u2).forEach(t=>{Object.defineProperty(H,t,{enumerable:!0,set:function(e){Io[t]=e,Ls.forEach(n=>n(H))},get:function(){return Io[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(t){Io.cssPrefix=t,Ls.forEach(e=>e(H))},get:function(){return Io.cssPrefix}});Fr.FontAwesomeConfig=H;const Ls=[];function CA(t){return Ls.push(t),()=>{Ls.splice(Ls.indexOf(t),1)}}const ur=wh,Sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function PA(t){if(!t||!rr)return;const e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=xe.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return xe.head.insertBefore(e,r),t}const RA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ca(){let t=12,e="";for(;t-- >0;)e+=RA[Math.random()*62|0];return e}function zo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function om(t){return t.classList?zo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function c2(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OA(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(c2(t[n]),'" '),"").trim()}function Ac(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function sm(t){return t.size!==Sn.size||t.x!==Sn.x||t.y!==Sn.y||t.rotate!==Sn.rotate||t.flipX||t.flipY}function jA(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function NA(t){let{transform:e,width:n=wh,height:r=wh,startCentered:i=!1}=t,o="";return i&&Z_?o+="translate(".concat(e.x/ur-n/2,"em, ").concat(e.y/ur-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/ur,"em), calc(-50% + ").concat(e.y/ur,"em)) "):o+="translate(".concat(e.x/ur,"em, ").concat(e.y/ur,"em) "),o+="scale(".concat(e.size/ur*(e.flipX?-1:1),", ").concat(e.size/ur*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var DA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function f2(){const t=r2,e=i2,n=H.cssPrefix,r=H.replacementClass;let i=DA;if(n!==t||r!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let xv=!1;function Kf(){H.autoAddCss&&!xv&&(PA(f2()),xv=!0)}var LA={mixout(){return{dom:{css:f2,insertCss:Kf}}},hooks(){return{beforeDOMElementCreation(){Kf()},beforeI2svg(){Kf()}}}};const Zn=Fr||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var kn=Zn[Jn];const d2=[],h2=function(){xe.removeEventListener("DOMContentLoaded",h2),Fu=1,d2.map(t=>t())};let Fu=!1;rr&&(Fu=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),Fu||xe.addEventListener("DOMContentLoaded",h2));function MA(t){rr&&(Fu?setTimeout(t,0):d2.push(t))}function Ca(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?c2(t):"<".concat(e," ").concat(OA(n),">").concat(r.map(Ca).join(""),"</").concat(e,">")}function Ev(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Yf=function(e,n,r,i){var o=Object.keys(e),s=o.length,l=n,u,c,h;for(r===void 0?(u=1,h=e[o[0]]):(u=0,h=r);u<s;u++)c=o[u],h=l(h,e[c],c,e);return h};function FA(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Th(t){const e=FA(t);return e.length===1?e[0].toString(16):null}function VA(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function bv(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Sh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=bv(e);typeof kn.hooks.addPack=="function"&&!r?kn.hooks.addPack(t,bv(e)):kn.styles[t]={...kn.styles[t]||{},...i},t==="fas"&&Sh("fa",e)}const{styles:ii,shims:zA}=kn,$A={[Ie]:Object.values(pi[Ie]),[Ht]:Object.values(pi[Ht]),[Wt]:Object.values(pi[Wt])};let am=null,p2={},m2={},g2={},y2={},v2={};const BA={[Ie]:Object.keys(hi[Ie]),[Ht]:Object.keys(hi[Ht]),[Wt]:Object.keys(hi[Wt])};function UA(t){return~kA.indexOf(t)}function HA(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!UA(i)?i:null}const w2=()=>{const t=r=>Yf(ii,(i,o,s)=>(i[s]=Yf(o,r,{}),i),{});p2=t((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),m2=t((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),v2=t((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(l=>{r[l]=o}),r});const e="far"in ii||H.autoFetchSvg,n=Yf(zA,(r,i)=>{const o=i[0];let s=i[1];const l=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});g2=n.names,y2=n.unicodes,am=Cc(H.styleDefault,{family:H.familyDefault})};CA(t=>{am=Cc(t.styleDefault,{family:H.familyDefault})});w2();function lm(t,e){return(p2[t]||{})[e]}function WA(t,e){return(m2[t]||{})[e]}function Er(t,e){return(v2[t]||{})[e]}function _2(t){return g2[t]||{prefix:null,iconName:null}}function GA(t){const e=y2[t],n=lm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Vr(){return am}const um=()=>({prefix:null,iconName:null,rest:[]});function Cc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Ie}=e,r=hi[n][t],i=ua[n][t]||ua[n][r],o=t in kn.styles?t:null;return i||o||null}const qA={[Ie]:Object.keys(pi[Ie]),[Ht]:Object.keys(pi[Ht]),[Wt]:Object.keys(pi[Wt])};function Pc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Ie]:"".concat(H.cssPrefix,"-").concat(Ie),[Ht]:"".concat(H.cssPrefix,"-").concat(Ht),[Wt]:"".concat(H.cssPrefix,"-").concat(Wt)};let i=null,o=Ie;const s=tA.filter(u=>u!==e2);s.forEach(u=>{(t.includes(r[u])||t.some(c=>qA[u].includes(c)))&&(o=u)});const l=t.reduce((u,c)=>{const h=HA(H.cssPrefix,c);if(ii[c]?(c=$A[o].includes(c)?xA[o][c]:c,i=c,u.prefix=c):BA[o].indexOf(c)>-1?(i=c,u.prefix=Cc(c,{family:o})):h?u.iconName=h:c!==H.replacementClass&&!s.some(m=>c===r[m])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const m=i==="fa"?_2(u.iconName):{},g=Er(u.prefix,u.iconName);m.prefix&&(i=null),u.iconName=m.iconName||g||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!ii.far&&ii.fas&&!H.autoFetchSvg&&(u.prefix="fas")}return u},um());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Ht&&(ii.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=Er(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===Wt&&(ii.fasds||H.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Er(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Vr()||"fas"),l}class QA{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},Sh(o,i[o]);const s=pi[Ie][o];s&&Sh(s,i[o]),w2()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:l}=r[i],u=l[2];e[o]||(e[o]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[o][c]=l)}),e[o][s]=l}),e}}let Tv=[],to={};const uo={},KA=Object.keys(uo);function YA(t,e){let{mixoutsTo:n}=e;return Tv=t,to={},Object.keys(uo).forEach(r=>{KA.indexOf(r)===-1&&delete uo[r]}),Tv.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{to[s]||(to[s]=[]),to[s].push(o[s])})}r.provides&&r.provides(uo)}),n}function kh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(to[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function ki(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(to[t]||[]).forEach(o=>{o.apply(null,n)})}function zr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[t]?uo[t].apply(null,e):void 0}function Ih(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Vr();if(e)return e=Er(n,e)||e,Ev(x2.definitions,n,e)||Ev(kn.styles,n,e)}const x2=new QA,XA=()=>{H.autoReplaceSvg=!1,H.observeMutations=!1,ki("noAuto")},JA={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rr?(ki("beforeI2svg",t),zr("pseudoElements2svg",t),zr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,MA(()=>{eC({autoReplaceSvgRoot:e}),ki("watch",t)})}},ZA={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Er(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Cc(t[0]);return{prefix:n,iconName:Er(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(H.cssPrefix,"-"))>-1||t.match(EA))){const e=Pc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Vr(),iconName:Er(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Vr();return{prefix:e,iconName:Er(e,t)||t}}}},Kt={noAuto:XA,config:H,dom:JA,parse:ZA,library:x2,findIconDefinition:Ih,toHtml:Ca},eC=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=xe}=t;(Object.keys(kn.styles).length>0||H.autoFetchSvg)&&rr&&H.autoReplaceSvg&&Kt.dom.i2svg({node:e})};function Rc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ca(n))}}),Object.defineProperty(t,"node",{get:function(){if(!rr)return;const n=xe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function tC(t){let{children:e,main:n,mask:r,attributes:i,styles:o,transform:s}=t;if(sm(s)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=Ac({...o,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function nC(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function cm(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:l,maskId:u,titleId:c,extra:h,watchable:m=!1}=t,{width:g,height:b}=n.found?n:e,I=r==="fak",C=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(L=>h.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(h.classes).join(" ");let R={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":i,class:C,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)}};const x=I&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/b*16*.0625,"em")}:{};m&&(R.attributes[Si]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||ca())},children:[l]}),delete R.attributes.title);const v={...R,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:o,symbol:s,styles:{...x,...h.styles}},{children:E,attributes:P}=n.found&&e.found?zr("generateAbstractMask",v)||{children:[],attributes:{}}:zr("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=E,v.attributes=P,s?nC(v):tC(v)}function Sv(t){const{content:e,width:n,height:r,transform:i,title:o,extra:s,watchable:l=!1}=t,u={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};l&&(u[Si]="");const c={...s.styles};sm(i)&&(c.transform=NA({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=Ac(c);h.length>0&&(u.style=h);const m=[];return m.push({tag:"span",attributes:u,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function rC(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Ac(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Xf}=kn;function Ah(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Qf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Qf.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Qf.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const iC={found:!1,width:512,height:512};function oC(t,e){!o2&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ch(t,e){let n=e;return e==="fa"&&H.styleDefault!==null&&(e=Vr()),new Promise((r,i)=>{if(n==="fa"){const o=_2(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Xf[e]&&Xf[e][t]){const o=Xf[e][t];return r(Ah(o))}oC(t,e),r({...iC,icon:H.showMissingIcons&&t?zr("missingIconAbstract")||{}:{}})})}const kv=()=>{},Ph=H.measurePerformance&&bl&&bl.mark&&bl.measure?bl:{mark:kv,measure:kv},bs='FA "6.6.0"',sC=t=>(Ph.mark("".concat(bs," ").concat(t," begins")),()=>E2(t)),E2=t=>{Ph.mark("".concat(bs," ").concat(t," ends")),Ph.measure("".concat(bs," ").concat(t),"".concat(bs," ").concat(t," begins"),"".concat(bs," ").concat(t," ends"))};var fm={begin:sC,end:E2};const Xl=()=>{};function Iv(t){return typeof(t.getAttribute?t.getAttribute(Si):null)=="string"}function aC(t){const e=t.getAttribute?t.getAttribute(rm):null,n=t.getAttribute?t.getAttribute(im):null;return e&&n}function lC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function uC(){return H.autoReplaceSvg===!0?Jl.replace:Jl[H.autoReplaceSvg]||Jl.replace}function cC(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function fC(t){return xe.createElement(t)}function b2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?cC:fC}=e;if(typeof t=="string")return xe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(b2(o,{ceFn:n}))}),r}function dC(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Jl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(b2(n),e)}),e.getAttribute(Si)===null&&H.keepOriginalSource){let n=xe.createComment(dC(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~om(e).indexOf(H.replacementClass))return Jl.replace(t);const r=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===H.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Ca(o)).join(`
`);e.setAttribute(Si,""),e.innerHTML=i}};function Av(t){t()}function T2(t,e){const n=typeof e=="function"?e:Xl;if(t.length===0)n();else{let r=Av;H.mutateApproach===wA&&(r=Fr.requestAnimationFrame||Av),r(()=>{const i=uC(),o=fm.begin("mutate");t.map(i),o(),n()})}}let dm=!1;function S2(){dm=!0}function Rh(){dm=!1}let Vu=null;function Cv(t){if(!yv||!H.observeMutations)return;const{treeCallback:e=Xl,nodeCallback:n=Xl,pseudoElementsCallback:r=Xl,observeMutationsRoot:i=xe}=t;Vu=new yv(o=>{if(dm)return;const s=Vr();zo(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Iv(l.addedNodes[0])&&(H.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&H.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Iv(l.target)&&~SA.indexOf(l.attributeName))if(l.attributeName==="class"&&aC(l.target)){const{prefix:u,iconName:c}=Pc(om(l.target));l.target.setAttribute(rm,u||s),c&&l.target.setAttribute(im,c)}else lC(l.target)&&n(l.target)})}),rr&&Vu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function hC(){Vu&&Vu.disconnect()}function pC(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function mC(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Pc(om(t));return i.prefix||(i.prefix=Vr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=WA(i.prefix,t.innerText)||lm(i.prefix,Th(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function gC(t){const e=zo(t.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||ca()):(e["aria-hidden"]="true",e.focusable="false")),e}function yC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=mC(t),o=gC(t),s=kh("parseNodeAttributes",{},t);let l=e.styleParser?pC(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o},...s}}const{styles:vC}=kn;function k2(t){const e=H.autoReplaceSvg==="nest"?Pv(t,{styleParser:!1}):Pv(t);return~e.extra.classes.indexOf(l2)?zr("generateLayersText",t,e):zr("generateSvgReplacementMutation",t,e)}let Cn=new Set;s2.map(t=>{Cn.add("fa-".concat(t))});Object.keys(hi[Ie]).map(Cn.add.bind(Cn));Object.keys(hi[Ht]).map(Cn.add.bind(Cn));Object.keys(hi[Wt]).map(Cn.add.bind(Cn));Cn=[...Cn];function Rv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rr)return Promise.resolve();const n=xe.documentElement.classList,r=h=>n.add("".concat(_v,"-").concat(h)),i=h=>n.remove("".concat(_v,"-").concat(h)),o=H.autoFetchSvg?Cn:s2.map(h=>"fa-".concat(h)).concat(Object.keys(vC));o.includes("fa")||o.push("fa");const s=[".".concat(l2,":not([").concat(Si,"])")].concat(o.map(h=>".".concat(h,":not([").concat(Si,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=zo(t.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=fm.begin("onTree"),c=l.reduce((h,m)=>{try{const g=k2(m);g&&h.push(g)}catch(g){o2||g.name==="MissingIcon"&&console.error(g)}return h},[]);return new Promise((h,m)=>{Promise.all(c).then(g=>{T2(g,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(g=>{u(),m(g)})})}function wC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;k2(t).then(n=>{n&&T2([n],e)})}function _C(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ih(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Ih(i||{})),t(r,{...n,mask:i})}}const xC=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Sn,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:l=null,classes:u=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:m,iconName:g,icon:b}=t;return Rc({type:"icon",...t},()=>(ki("beforeDOMElementCreation",{iconDefinition:t,params:e}),H.autoA11y&&(s?c["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(l||ca()):(c["aria-hidden"]="true",c.focusable="false")),cm({icons:{main:Ah(b),mask:i?Ah(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:g,transform:{...Sn,...n},symbol:r,title:s,maskId:o,titleId:l,extra:{attributes:c,styles:h,classes:u}})))};var EC={mixout(){return{icon:_C(xC)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Rv,t.nodeCallback=wC,t}}},provides(t){t.i2svg=function(e){const{node:n=xe,callback:r=()=>{}}=e;return Rv(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:l,symbol:u,mask:c,maskId:h,extra:m}=n;return new Promise((g,b)=>{Promise.all([Ch(r,s),c.iconName?Ch(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[C,R]=I;g([e,cm({icons:{main:C,mask:R},prefix:s,iconName:r,transform:l,symbol:u,maskId:h,title:i,titleId:o,extra:m,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:o,styles:s}=e;const l=Ac(s);l.length>0&&(r.style=l);let u;return sm(o)&&(u=zr("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},bC={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Rc({type:"layer"},()=>{ki("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},TC={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=e;return Rc({type:"counter",content:t},()=>(ki("beforeDOMElementCreation",{content:t,params:e}),rC({content:t.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(H.cssPrefix,"-layers-counter"),...r]}})))}}}},SC={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Sn,title:r=null,classes:i=[],attributes:o={},styles:s={}}=e;return Rc({type:"text",content:t},()=>(ki("beforeDOMElementCreation",{content:t,params:e}),Sv({content:t,transform:{...Sn,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(H.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:o}=n;let s=null,l=null;if(Z_){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/u,l=c.height/u}return H.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Sv({content:e.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}};const kC=new RegExp('"',"ug"),Ov=[1105920,1112319],jv={FontAwesome:{normal:"fas",400:"fas"},...aA,...sA,...mA},Oh=Object.keys(jv).reduce((t,e)=>(t[e.toLowerCase()]=jv[e],t),{}),IC=Object.keys(Oh).reduce((t,e)=>{const n=Oh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function AC(t){const e=t.replace(kC,""),n=VA(e,0),r=n>=Ov[0]&&n<=Ov[1],i=e.length===2?e[0]===e[1]:!1;return{value:Th(i?e[0]:e),isSecondary:r||i}}function CC(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Oh[n]||{})[i]||IC[n]}function Nv(t,e){const n="".concat(vA).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const s=zo(t.children).filter(g=>g.getAttribute(_h)===e)[0],l=Fr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(bA),h=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),r();if(c&&m!=="none"&&m!==""){const g=l.getPropertyValue("content");let b=CC(u,h);const{value:I,isSecondary:C}=AC(g),R=c[0].startsWith("FontAwesome");let x=lm(b,I),v=x;if(R){const E=GA(I);E.iconName&&E.prefix&&(x=E.iconName,b=E.prefix)}if(x&&!C&&(!s||s.getAttribute(rm)!==b||s.getAttribute(im)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const E=yC(),{extra:P}=E;P.attributes[_h]=e,Ch(x,b).then(L=>{const N=cm({...E,icons:{main:L,mask:um()},prefix:b,iconName:v,extra:P,watchable:!0}),_=xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_,t.firstChild):t.appendChild(_),_.outerHTML=N.map(w=>Ca(w)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function PC(t){return Promise.all([Nv(t,"::before"),Nv(t,"::after")])}function RC(t){return t.parentNode!==document.head&&!~_A.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_h)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Dv(t){if(rr)return new Promise((e,n)=>{const r=zo(t.querySelectorAll("*")).filter(RC).map(PC),i=fm.begin("searchPseudoElements");S2(),Promise.all(r).then(()=>{i(),Rh(),e()}).catch(()=>{i(),Rh(),n()})})}var OC={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Dv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=xe}=e;H.searchPseudoElements&&Dv(n)}}};let Lv=!1;var jC={mixout(){return{dom:{unwatch(){S2(),Lv=!0}}}},hooks(){return{bootstrap(){Cv(kh("mutationObserverCallbacks",{}))},noAuto(){hC()},watch(t){const{observeMutationsRoot:e}=t;Lv?Rh():Cv(kh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Mv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var NC={mixout(){return{parse:{transform:t=>Mv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Mv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:o}=e;const s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:h,path:m};return{tag:"g",attributes:{...g.outer},children:[{tag:"g",attributes:{...g.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...g.path}}]}]}}}};const Jf={x:0,y:0,width:"100%",height:"100%"};function Fv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function DC(t){return t.tag==="g"?t.children:[t]}var LC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Pc(n.split(" ").map(i=>i.trim())):um();return r.prefix||(r.prefix=Vr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:l}=e;const{width:u,icon:c}=i,{width:h,icon:m}=o,g=jA({transform:l,containerWidth:h,iconWidth:u}),b={tag:"rect",attributes:{...Jf,fill:"white"}},I=c.children?{children:c.children.map(Fv)}:{},C={tag:"g",attributes:{...g.inner},children:[Fv({tag:c.tag,attributes:{...c.attributes,...g.path},...I})]},R={tag:"g",attributes:{...g.outer},children:[C]},x="mask-".concat(s||ca()),v="clip-".concat(s||ca()),E={tag:"mask",attributes:{...Jf,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,R]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:DC(m)},E]};return n.push(P,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")"),...Jf}}),{children:n,attributes:r}}}},MC={provides(t){let e=!1;Fr.matchMedia&&(e=Fr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},FC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},VC=[LA,EC,bC,TC,SC,OC,jC,NC,LC,MC,FC];YA(VC,{mixoutsTo:Kt});Kt.noAuto;Kt.config;Kt.library;Kt.dom;const jh=Kt.parse;Kt.findIconDefinition;Kt.toHtml;const zC=Kt.icon;Kt.layer;Kt.text;Kt.counter;var I2={exports:{}},$C="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",BC=$C,UC=BC;function A2(){}function C2(){}C2.resetWarningCache=A2;var HC=function(){function t(r,i,o,s,l,u){if(u!==UC){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:C2,resetWarningCache:A2};return n.PropTypes=n,n};I2.exports=HC();var Pa=I2.exports;const W=xa(Pa);function Vv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function En(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vv(Object(n),!0).forEach(function(r){no(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zu(t){"@babel/helpers - typeof";return zu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zu(t)}function no(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function WC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GC(t,e){if(t==null)return{};var n=WC(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Nh(t){return qC(t)||QC(t)||KC(t)||YC()}function qC(t){if(Array.isArray(t))return Dh(t)}function QC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function KC(t,e){if(t){if(typeof t=="string")return Dh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dh(t,e)}}function Dh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function YC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XC(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,h=t.spinReverse,m=t.pulse,g=t.fixedWidth,b=t.inverse,I=t.border,C=t.listItem,R=t.flip,x=t.size,v=t.rotation,E=t.pull,P=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":g,"fa-inverse":b,"fa-border":I,"fa-li":C,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},no(e,"fa-".concat(x),typeof x<"u"&&x!==null),no(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),no(e,"fa-pull-".concat(E),typeof E<"u"&&E!==null),no(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(P).map(function(L){return P[L]?L:null}).filter(function(L){return L})}function JC(t){return t=t-0,t===t}function P2(t){return JC(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ZC=["style"];function eP(t){return t.charAt(0).toUpperCase()+t.slice(1)}function tP(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=P2(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[eP(i)]=o:e[i]=o,e},{})}function R2(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return R2(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var h=e.attributes[c];switch(c){case"class":u.attrs.className=h,delete e.attributes.class;break;case"style":u.attrs.style=tP(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=h:u.attrs[P2(c)]=h}return u},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=GC(n,ZC);return i.attrs.style=En(En({},i.attrs.style),s),t.apply(void 0,[e.tag,En(En({},i.attrs),l)].concat(Nh(r)))}var O2=!1;try{O2=!0}catch{}function nP(){if(!O2&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function zv(t){if(t&&zu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jh.icon)return jh.icon(t);if(t===null)return null;if(t&&zu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Zf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?no({},t,e):{}}var $v={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},$t=de.forwardRef(function(t,e){var n=En(En({},$v),t),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,u=n.titleId,c=n.maskId,h=zv(r),m=Zf("classes",[].concat(Nh(XC(n)),Nh((s||"").split(" ")))),g=Zf("transform",typeof n.transform=="string"?jh.transform(n.transform):n.transform),b=Zf("mask",zv(i)),I=zC(h,En(En(En(En({},m),g),b),{},{symbol:o,title:l,titleId:u,maskId:c}));if(!I)return nP("Could not find icon",h),null;var C=I.abstract,R={ref:e};return Object.keys(n).forEach(function(x){$v.hasOwnProperty(x)||(R[x]=n[x])}),rP(C[0],R)});$t.displayName="FontAwesomeIcon";$t.propTypes={beat:W.bool,border:W.bool,beatFade:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};var rP=R2.bind(null,de.createElement);const hm={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},j2={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},N2={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},iP={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},D2={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},oP={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]};var Bv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},M2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=o>>2,m=(o&3)<<4|l>>4;let g=(l&15)<<2|c>>6,b=c&63;u||(b=64,s||(g=64)),r.push(n[h],n[m],n[g],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(L2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||c==null||m==null)throw new aP;const g=o<<2|l>>4;if(r.push(g),c!==64){const b=l<<4&240|c>>2;if(r.push(b),m!==64){const I=c<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lP=function(t){const e=L2(t);return M2.encodeByteArray(e,!0)},$u=function(t){return lP(t).replace(/\./g,"")},uP=function(t){try{return M2.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=()=>cP().__FIREBASE_DEFAULTS__,dP=()=>{if(typeof process>"u"||typeof Bv>"u")return;const t=Bv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uP(t[1]);return e&&JSON.parse(e)},pm=()=>{try{return fP()||dP()||hP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pP=t=>{var e,n;return(n=(e=pm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mP=t=>{const e=pP(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},F2=()=>{var t;return(t=pm())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$u(JSON.stringify(n)),$u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wP(){var t;const e=(t=pm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _P(){return!wP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xP(){try{return typeof indexedDB=="object"}catch{return!1}}function EP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="FirebaseError";class $o extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bP,Object.setPrototypeOf(this,$o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V2.prototype.create)}}class V2{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?TP(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new $o(i,l,r)}}function TP(t,e){return t.replace(SP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SP=/\{\$([^}]+)}/g;function Lh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Uv(o)&&Uv(s)){if(!Lh(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){return t&&t._delegate?t._delegate:t}class da{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AP(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IP(t){return t===ri?void 0:t}function AP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const PP={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},RP=oe.INFO,OP={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},jP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=OP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class z2{constructor(e){this.name=e,this._logLevel=RP,this._logHandler=jP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const NP=(t,e)=>e.some(n=>t instanceof n);let Hv,Wv;function DP(){return Hv||(Hv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LP(){return Wv||(Wv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $2=new WeakMap,Mh=new WeakMap,B2=new WeakMap,ed=new WeakMap,mm=new WeakMap;function MP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(jr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&$2.set(n,t)}).catch(()=>{}),mm.set(e,t),e}function FP(t){if(Mh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Mh.set(t,e)}let Fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VP(t){Fh=t(Fh)}function zP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(td(this),e,...n);return B2.set(r,e.sort?e.sort():[e]),jr(r)}:LP().includes(t)?function(...e){return t.apply(td(this),e),jr($2.get(this))}:function(...e){return jr(t.apply(td(this),e))}}function $P(t){return typeof t=="function"?zP(t):(t instanceof IDBTransaction&&FP(t),NP(t,DP())?new Proxy(t,Fh):t)}function jr(t){if(t instanceof IDBRequest)return MP(t);if(ed.has(t))return ed.get(t);const e=$P(t);return e!==t&&(ed.set(t,e),mm.set(e,t)),e}const td=t=>mm.get(t);function BP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=jr(s);return r&&s.addEventListener("upgradeneeded",u=>{r(jr(s.result),u.oldVersion,u.newVersion,jr(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const UP=["get","getKey","getAll","getAllKeys","count"],HP=["put","add","delete","clear"],nd=new Map;function Gv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nd.get(e))return nd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||UP.includes(n)))return;const o=async function(s,...l){const u=this.transaction(s,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return nd.set(e,o),o}VP(t=>({...t,get:(e,n,r)=>Gv(e,n)||t.get(e,n,r),has:(e,n)=>!!Gv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vh="@firebase/app",qv="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new z2("@firebase/app"),qP="@firebase/app-compat",QP="@firebase/analytics-compat",KP="@firebase/analytics",YP="@firebase/app-check-compat",XP="@firebase/app-check",JP="@firebase/auth",ZP="@firebase/auth-compat",e4="@firebase/database",t4="@firebase/database-compat",n4="@firebase/functions",r4="@firebase/functions-compat",i4="@firebase/installations",o4="@firebase/installations-compat",s4="@firebase/messaging",a4="@firebase/messaging-compat",l4="@firebase/performance",u4="@firebase/performance-compat",c4="@firebase/remote-config",f4="@firebase/remote-config-compat",d4="@firebase/storage",h4="@firebase/storage-compat",p4="@firebase/firestore",m4="@firebase/vertexai-preview",g4="@firebase/firestore-compat",y4="firebase",v4="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="[DEFAULT]",w4={[Vh]:"fire-core",[qP]:"fire-core-compat",[KP]:"fire-analytics",[QP]:"fire-analytics-compat",[XP]:"fire-app-check",[YP]:"fire-app-check-compat",[JP]:"fire-auth",[ZP]:"fire-auth-compat",[e4]:"fire-rtdb",[t4]:"fire-rtdb-compat",[n4]:"fire-fn",[r4]:"fire-fn-compat",[i4]:"fire-iid",[o4]:"fire-iid-compat",[s4]:"fire-fcm",[a4]:"fire-fcm-compat",[l4]:"fire-perf",[u4]:"fire-perf-compat",[c4]:"fire-rc",[f4]:"fire-rc-compat",[d4]:"fire-gcs",[h4]:"fire-gcs-compat",[p4]:"fire-fst",[g4]:"fire-fst-compat",[m4]:"fire-vertex","fire-js":"fire-js",[y4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map,_4=new Map,$h=new Map;function Qv(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Uu(t){const e=t.name;if($h.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;$h.set(e,t);for(const n of Bu.values())Qv(n,t);for(const n of _4.values())Qv(n,t);return!0}function x4(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new V2("app","Firebase",E4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new da("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4=v4;function U2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=F2()),!n)throw Nr.create("no-options");const o=Bu.get(i);if(o){if(Lh(n,o.options)&&Lh(r,o.config))return o;throw Nr.create("duplicate-app",{appName:i})}const s=new CP(i);for(const u of $h.values())s.addComponent(u);const l=new b4(n,r,s);return Bu.set(i,l),l}function S4(t=zh){const e=Bu.get(t);if(!e&&t===zh&&F2())return U2();if(!e)throw Nr.create("no-app",{appName:t});return e}function co(t,e,n){var r;let i=(r=w4[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(l.join(" "));return}Uu(new da(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4="firebase-heartbeat-database",I4=1,ha="firebase-heartbeat-store";let rd=null;function H2(){return rd||(rd=BP(k4,I4,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ha)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),rd}async function A4(t){try{const n=(await H2()).transaction(ha),r=await n.objectStore(ha).get(W2(t));return await n.done,r}catch(e){if(e instanceof $o)er.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function Kv(t,e){try{const r=(await H2()).transaction(ha,"readwrite");await r.objectStore(ha).put(e,W2(t)),await r.done}catch(n){if(n instanceof $o)er.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function W2(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4=1024,P4=30*24*60*60*1e3;class R4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yv();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=P4}),this._storage.overwrite(this._heartbeatsCache))}catch(i){er.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yv(),{heartbeatsToSend:r,unsentEntries:i}=O4(this._heartbeatsCache.heartbeats),o=$u(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return er.warn(n),""}}}function Yv(){return new Date().toISOString().substring(0,10)}function O4(t,e=C4){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Xv(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xP()?EP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A4(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xv(t){return $u(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N4(t){Uu(new da("platform-logger",e=>new WP(e),"PRIVATE")),Uu(new da("heartbeat",e=>new R4(e),"PRIVATE")),co(Vh,qv,t),co(Vh,qv,"esm2017"),co("fire-js","")}N4("");var D4="firebase",L4="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co(D4,L4,"app");var Jv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var G2;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,w){function T(){}T.prototype=w.prototype,_.D=w.prototype,_.prototype=new T,_.prototype.constructor=_,_.C=function(S,A,O){for(var k=Array(arguments.length-2),et=2;et<arguments.length;et++)k[et-2]=arguments[et];return w.prototype[A].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,w,T){T||(T=0);var S=Array(16);if(typeof w=="string")for(var A=0;16>A;++A)S[A]=w.charCodeAt(T++)|w.charCodeAt(T++)<<8|w.charCodeAt(T++)<<16|w.charCodeAt(T++)<<24;else for(A=0;16>A;++A)S[A]=w[T++]|w[T++]<<8|w[T++]<<16|w[T++]<<24;w=_.g[0],T=_.g[1],A=_.g[2];var O=_.g[3],k=w+(O^T&(A^O))+S[0]+3614090360&4294967295;w=T+(k<<7&4294967295|k>>>25),k=O+(A^w&(T^A))+S[1]+3905402710&4294967295,O=w+(k<<12&4294967295|k>>>20),k=A+(T^O&(w^T))+S[2]+606105819&4294967295,A=O+(k<<17&4294967295|k>>>15),k=T+(w^A&(O^w))+S[3]+3250441966&4294967295,T=A+(k<<22&4294967295|k>>>10),k=w+(O^T&(A^O))+S[4]+4118548399&4294967295,w=T+(k<<7&4294967295|k>>>25),k=O+(A^w&(T^A))+S[5]+1200080426&4294967295,O=w+(k<<12&4294967295|k>>>20),k=A+(T^O&(w^T))+S[6]+2821735955&4294967295,A=O+(k<<17&4294967295|k>>>15),k=T+(w^A&(O^w))+S[7]+4249261313&4294967295,T=A+(k<<22&4294967295|k>>>10),k=w+(O^T&(A^O))+S[8]+1770035416&4294967295,w=T+(k<<7&4294967295|k>>>25),k=O+(A^w&(T^A))+S[9]+2336552879&4294967295,O=w+(k<<12&4294967295|k>>>20),k=A+(T^O&(w^T))+S[10]+4294925233&4294967295,A=O+(k<<17&4294967295|k>>>15),k=T+(w^A&(O^w))+S[11]+2304563134&4294967295,T=A+(k<<22&4294967295|k>>>10),k=w+(O^T&(A^O))+S[12]+1804603682&4294967295,w=T+(k<<7&4294967295|k>>>25),k=O+(A^w&(T^A))+S[13]+4254626195&4294967295,O=w+(k<<12&4294967295|k>>>20),k=A+(T^O&(w^T))+S[14]+2792965006&4294967295,A=O+(k<<17&4294967295|k>>>15),k=T+(w^A&(O^w))+S[15]+1236535329&4294967295,T=A+(k<<22&4294967295|k>>>10),k=w+(A^O&(T^A))+S[1]+4129170786&4294967295,w=T+(k<<5&4294967295|k>>>27),k=O+(T^A&(w^T))+S[6]+3225465664&4294967295,O=w+(k<<9&4294967295|k>>>23),k=A+(w^T&(O^w))+S[11]+643717713&4294967295,A=O+(k<<14&4294967295|k>>>18),k=T+(O^w&(A^O))+S[0]+3921069994&4294967295,T=A+(k<<20&4294967295|k>>>12),k=w+(A^O&(T^A))+S[5]+3593408605&4294967295,w=T+(k<<5&4294967295|k>>>27),k=O+(T^A&(w^T))+S[10]+38016083&4294967295,O=w+(k<<9&4294967295|k>>>23),k=A+(w^T&(O^w))+S[15]+3634488961&4294967295,A=O+(k<<14&4294967295|k>>>18),k=T+(O^w&(A^O))+S[4]+3889429448&4294967295,T=A+(k<<20&4294967295|k>>>12),k=w+(A^O&(T^A))+S[9]+568446438&4294967295,w=T+(k<<5&4294967295|k>>>27),k=O+(T^A&(w^T))+S[14]+3275163606&4294967295,O=w+(k<<9&4294967295|k>>>23),k=A+(w^T&(O^w))+S[3]+4107603335&4294967295,A=O+(k<<14&4294967295|k>>>18),k=T+(O^w&(A^O))+S[8]+1163531501&4294967295,T=A+(k<<20&4294967295|k>>>12),k=w+(A^O&(T^A))+S[13]+2850285829&4294967295,w=T+(k<<5&4294967295|k>>>27),k=O+(T^A&(w^T))+S[2]+4243563512&4294967295,O=w+(k<<9&4294967295|k>>>23),k=A+(w^T&(O^w))+S[7]+1735328473&4294967295,A=O+(k<<14&4294967295|k>>>18),k=T+(O^w&(A^O))+S[12]+2368359562&4294967295,T=A+(k<<20&4294967295|k>>>12),k=w+(T^A^O)+S[5]+4294588738&4294967295,w=T+(k<<4&4294967295|k>>>28),k=O+(w^T^A)+S[8]+2272392833&4294967295,O=w+(k<<11&4294967295|k>>>21),k=A+(O^w^T)+S[11]+1839030562&4294967295,A=O+(k<<16&4294967295|k>>>16),k=T+(A^O^w)+S[14]+4259657740&4294967295,T=A+(k<<23&4294967295|k>>>9),k=w+(T^A^O)+S[1]+2763975236&4294967295,w=T+(k<<4&4294967295|k>>>28),k=O+(w^T^A)+S[4]+1272893353&4294967295,O=w+(k<<11&4294967295|k>>>21),k=A+(O^w^T)+S[7]+4139469664&4294967295,A=O+(k<<16&4294967295|k>>>16),k=T+(A^O^w)+S[10]+3200236656&4294967295,T=A+(k<<23&4294967295|k>>>9),k=w+(T^A^O)+S[13]+681279174&4294967295,w=T+(k<<4&4294967295|k>>>28),k=O+(w^T^A)+S[0]+3936430074&4294967295,O=w+(k<<11&4294967295|k>>>21),k=A+(O^w^T)+S[3]+3572445317&4294967295,A=O+(k<<16&4294967295|k>>>16),k=T+(A^O^w)+S[6]+76029189&4294967295,T=A+(k<<23&4294967295|k>>>9),k=w+(T^A^O)+S[9]+3654602809&4294967295,w=T+(k<<4&4294967295|k>>>28),k=O+(w^T^A)+S[12]+3873151461&4294967295,O=w+(k<<11&4294967295|k>>>21),k=A+(O^w^T)+S[15]+530742520&4294967295,A=O+(k<<16&4294967295|k>>>16),k=T+(A^O^w)+S[2]+3299628645&4294967295,T=A+(k<<23&4294967295|k>>>9),k=w+(A^(T|~O))+S[0]+4096336452&4294967295,w=T+(k<<6&4294967295|k>>>26),k=O+(T^(w|~A))+S[7]+1126891415&4294967295,O=w+(k<<10&4294967295|k>>>22),k=A+(w^(O|~T))+S[14]+2878612391&4294967295,A=O+(k<<15&4294967295|k>>>17),k=T+(O^(A|~w))+S[5]+4237533241&4294967295,T=A+(k<<21&4294967295|k>>>11),k=w+(A^(T|~O))+S[12]+1700485571&4294967295,w=T+(k<<6&4294967295|k>>>26),k=O+(T^(w|~A))+S[3]+2399980690&4294967295,O=w+(k<<10&4294967295|k>>>22),k=A+(w^(O|~T))+S[10]+4293915773&4294967295,A=O+(k<<15&4294967295|k>>>17),k=T+(O^(A|~w))+S[1]+2240044497&4294967295,T=A+(k<<21&4294967295|k>>>11),k=w+(A^(T|~O))+S[8]+1873313359&4294967295,w=T+(k<<6&4294967295|k>>>26),k=O+(T^(w|~A))+S[15]+4264355552&4294967295,O=w+(k<<10&4294967295|k>>>22),k=A+(w^(O|~T))+S[6]+2734768916&4294967295,A=O+(k<<15&4294967295|k>>>17),k=T+(O^(A|~w))+S[13]+1309151649&4294967295,T=A+(k<<21&4294967295|k>>>11),k=w+(A^(T|~O))+S[4]+4149444226&4294967295,w=T+(k<<6&4294967295|k>>>26),k=O+(T^(w|~A))+S[11]+3174756917&4294967295,O=w+(k<<10&4294967295|k>>>22),k=A+(w^(O|~T))+S[2]+718787259&4294967295,A=O+(k<<15&4294967295|k>>>17),k=T+(O^(A|~w))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+w&4294967295,_.g[1]=_.g[1]+(A+(k<<21&4294967295|k>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+O&4294967295}r.prototype.u=function(_,w){w===void 0&&(w=_.length);for(var T=w-this.blockSize,S=this.B,A=this.h,O=0;O<w;){if(A==0)for(;O<=T;)i(this,_,O),O+=this.blockSize;if(typeof _=="string"){for(;O<w;)if(S[A++]=_.charCodeAt(O++),A==this.blockSize){i(this,S),A=0;break}}else for(;O<w;)if(S[A++]=_[O++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=w},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var w=1;w<_.length-8;++w)_[w]=0;var T=8*this.o;for(w=_.length-8;w<_.length;++w)_[w]=T&255,T/=256;for(this.u(_),_=Array(16),w=T=0;4>w;++w)for(var S=0;32>S;S+=8)_[T++]=this.g[w]>>>S&255;return _};function o(_,w){var T=l;return Object.prototype.hasOwnProperty.call(T,_)?T[_]:T[_]=w(_)}function s(_,w){this.h=w;for(var T=[],S=!0,A=_.length-1;0<=A;A--){var O=_[A]|0;S&&O==w||(T[A]=O,S=!1)}this.g=T}var l={};function u(_){return-128<=_&&128>_?o(_,function(w){return new s([w|0],0>w?-1:0)}):new s([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return m;if(0>_)return R(c(-_));for(var w=[],T=1,S=0;_>=T;S++)w[S]=_/T|0,T*=4294967296;return new s(w,0)}function h(_,w){if(_.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(_.charAt(0)=="-")return R(h(_.substring(1),w));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(w,8)),S=m,A=0;A<_.length;A+=8){var O=Math.min(8,_.length-A),k=parseInt(_.substring(A,A+O),w);8>O?(O=c(Math.pow(w,O)),S=S.j(O).add(c(k))):(S=S.j(T),S=S.add(c(k)))}return S}var m=u(0),g=u(1),b=u(16777216);t=s.prototype,t.m=function(){if(C(this))return-R(this).m();for(var _=0,w=1,T=0;T<this.g.length;T++){var S=this.i(T);_+=(0<=S?S:4294967296+S)*w,w*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I(this))return"0";if(C(this))return"-"+R(this).toString(_);for(var w=c(Math.pow(_,6)),T=this,S="";;){var A=P(T,w).g;T=x(T,A.j(w));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(_);if(T=A,I(T))return O+S;for(;6>O.length;)O="0"+O;S=O+S}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function I(_){if(_.h!=0)return!1;for(var w=0;w<_.g.length;w++)if(_.g[w]!=0)return!1;return!0}function C(_){return _.h==-1}t.l=function(_){return _=x(this,_),C(_)?-1:I(_)?0:1};function R(_){for(var w=_.g.length,T=[],S=0;S<w;S++)T[S]=~_.g[S];return new s(T,~_.h).add(g)}t.abs=function(){return C(this)?R(this):this},t.add=function(_){for(var w=Math.max(this.g.length,_.g.length),T=[],S=0,A=0;A<=w;A++){var O=S+(this.i(A)&65535)+(_.i(A)&65535),k=(O>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);S=k>>>16,O&=65535,k&=65535,T[A]=k<<16|O}return new s(T,T[T.length-1]&-2147483648?-1:0)};function x(_,w){return _.add(R(w))}t.j=function(_){if(I(this)||I(_))return m;if(C(this))return C(_)?R(this).j(R(_)):R(R(this).j(_));if(C(_))return R(this.j(R(_)));if(0>this.l(b)&&0>_.l(b))return c(this.m()*_.m());for(var w=this.g.length+_.g.length,T=[],S=0;S<2*w;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var A=0;A<_.g.length;A++){var O=this.i(S)>>>16,k=this.i(S)&65535,et=_.i(A)>>>16,on=_.i(A)&65535;T[2*S+2*A]+=k*on,v(T,2*S+2*A),T[2*S+2*A+1]+=O*on,v(T,2*S+2*A+1),T[2*S+2*A+1]+=k*et,v(T,2*S+2*A+1),T[2*S+2*A+2]+=O*et,v(T,2*S+2*A+2)}for(S=0;S<w;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=w;S<2*w;S++)T[S]=0;return new s(T,0)};function v(_,w){for(;(_[w]&65535)!=_[w];)_[w+1]+=_[w]>>>16,_[w]&=65535,w++}function E(_,w){this.g=_,this.h=w}function P(_,w){if(I(w))throw Error("division by zero");if(I(_))return new E(m,m);if(C(_))return w=P(R(_),w),new E(R(w.g),R(w.h));if(C(w))return w=P(_,R(w)),new E(R(w.g),w.h);if(30<_.g.length){if(C(_)||C(w))throw Error("slowDivide_ only works with positive integers.");for(var T=g,S=w;0>=S.l(_);)T=L(T),S=L(S);var A=N(T,1),O=N(S,1);for(S=N(S,2),T=N(T,2);!I(S);){var k=O.add(S);0>=k.l(_)&&(A=A.add(T),O=k),S=N(S,1),T=N(T,1)}return w=x(_,A.j(w)),new E(A,w)}for(A=m;0<=_.l(w);){for(T=Math.max(1,Math.floor(_.m()/w.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),O=c(T),k=O.j(w);C(k)||0<k.l(_);)T-=S,O=c(T),k=O.j(w);I(O)&&(O=g),A=A.add(O),_=x(_,k)}return new E(A,_)}t.A=function(_){return P(this,_).h},t.and=function(_){for(var w=Math.max(this.g.length,_.g.length),T=[],S=0;S<w;S++)T[S]=this.i(S)&_.i(S);return new s(T,this.h&_.h)},t.or=function(_){for(var w=Math.max(this.g.length,_.g.length),T=[],S=0;S<w;S++)T[S]=this.i(S)|_.i(S);return new s(T,this.h|_.h)},t.xor=function(_){for(var w=Math.max(this.g.length,_.g.length),T=[],S=0;S<w;S++)T[S]=this.i(S)^_.i(S);return new s(T,this.h^_.h)};function L(_){for(var w=_.g.length+1,T=[],S=0;S<w;S++)T[S]=_.i(S)<<1|_.i(S-1)>>>31;return new s(T,_.h)}function N(_,w){var T=w>>5;w%=32;for(var S=_.g.length-T,A=[],O=0;O<S;O++)A[O]=0<w?_.i(O+T)>>>w|_.i(O+T+1)<<32-w:_.i(O+T);return new s(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=h,G2=s}).apply(typeof Jv<"u"?Jv:typeof self<"u"?self:typeof window<"u"?window:{});var Tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var q2,Q2,Ts,K2,Zl,Bh,Y2,X2,J2;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tl=="object"&&Tl];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,f){if(f)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var j=a[y];if(!(j in p))break e;p=p[j]}a=a[a.length-1],y=p[a],f=f(y),f!=y&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function o(a,f){a instanceof String&&(a+="");var p=0,y=!1,j={next:function(){if(!y&&p<a.length){var D=p++;return{value:f(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}i("Array.prototype.values",function(a){return a||function(){return o(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function u(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function m(a,f,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,y),a.apply(f,j)}}return function(){return a.apply(f,arguments)}}function g(a,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,g.apply(null,arguments)}function b(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function I(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,j,D){for(var $=Array(arguments.length-2),he=2;he<arguments.length;he++)$[he-2]=arguments[he];return f.prototype[j].apply(y,$)}}function C(a){const f=a.length;if(0<f){const p=Array(f);for(let y=0;y<f;y++)p[y]=a[y];return p}return[]}function R(a,f){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const j=a.length||0,D=y.length||0;a.length=j+D;for(let $=0;$<D;$++)a[j+$]=y[$]}else a.push(y)}}class x{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function v(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var L=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function N(a,f,p){for(const y in a)f.call(p,a[y],y,a)}function _(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function w(a){const f={};for(const p in a)f[p]=a[p];return f}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,f){let p,y;for(let j=1;j<arguments.length;j++){y=arguments[j];for(p in y)a[p]=y[p];for(let D=0;D<T.length;D++)p=T[D],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function A(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function O(a){l.setTimeout(()=>{throw a},0)}function k(){var a=G;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,p){const y=on.get();y.set(f,p),this.h?this.h.next=y:this.g=y,this.h=y}}var on=new x(()=>new Qr,a=>a.reset());class Qr{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,B=!1,G=new et,Y=()=>{const a=l.Promise.resolve(void 0);Lt=()=>{a.then(ce)}};var ce=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(p){O(p)}var f=on;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}B=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,f),l.removeEventListener("test",p,f)}catch{}return a}();function It(a,f){if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(L){e:{try{P(f.nodeName);var j=!0;break e}catch{}j=!1}j||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&It.aa.h.call(this)}}I(It,Ee);var wt={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),Kr=0;function jn(a,f,p,y,j){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!y,this.ha=j,this.key=++Kr,this.da=this.fa=!1}function ir(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Nn(a){this.src=a,this.g={},this.h=0}Nn.prototype.add=function(a,f,p,y,j){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var $=Qc(a,f,y,j);return-1<$?(f=a[$],p||(f.fa=!1)):(f=new jn(f,this.src,D,!!y,j),f.fa=p,a.push(f)),f};function Yt(a,f){var p=f.type;if(p in a.g){var y=a.g[p],j=Array.prototype.indexOf.call(y,f,void 0),D;(D=0<=j)&&Array.prototype.splice.call(y,j,1),D&&(ir(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Qc(a,f,p,y){for(var j=0;j<a.length;++j){var D=a[j];if(!D.da&&D.listener==f&&D.capture==!!p&&D.ha==y)return j}return-1}var Kc="closure_lm_"+(1e6*Math.random()|0),Yc={};function zm(a,f,p,y,j){if(Array.isArray(f)){for(var D=0;D<f.length;D++)zm(a,f[D],p,y,j);return null}return p=Um(p),a&&a[At]?a.K(f,p,c(y)?!!y.capture:!!y,j):CE(a,f,p,!1,y,j)}function CE(a,f,p,y,j,D){if(!f)throw Error("Invalid event type");var $=c(j)?!!j.capture:!!j,he=Jc(a);if(he||(a[Kc]=he=new Nn(a)),p=he.add(f,p,y,$,D),p.proxy)return p;if(y=PE(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)Mt||(j=$),j===void 0&&(j=!1),a.addEventListener(f.toString(),y,j);else if(a.attachEvent)a.attachEvent(Bm(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function PE(){function a(p){return f.call(a.src,a.listener,p)}const f=RE;return a}function $m(a,f,p,y,j){if(Array.isArray(f))for(var D=0;D<f.length;D++)$m(a,f[D],p,y,j);else y=c(y)?!!y.capture:!!y,p=Um(p),a&&a[At]?(a=a.i,f=String(f).toString(),f in a.g&&(D=a.g[f],p=Qc(D,p,y,j),-1<p&&(ir(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete a.g[f],a.h--)))):a&&(a=Jc(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Qc(f,p,y,j)),(p=-1<a?f[a]:null)&&Xc(p))}function Xc(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[At])Yt(f.i,a);else{var p=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(p,y,a.capture):f.detachEvent?f.detachEvent(Bm(p),y):f.addListener&&f.removeListener&&f.removeListener(y),(p=Jc(f))?(Yt(p,a),p.h==0&&(p.src=null,f[Kc]=null)):ir(a)}}}function Bm(a){return a in Yc?Yc[a]:Yc[a]="on"+a}function RE(a,f){if(a.da)a=!0;else{f=new It(f,this);var p=a.listener,y=a.ha||a.src;a.fa&&Xc(a),a=p.call(y,f)}return a}function Jc(a){return a=a[Kc],a instanceof Nn?a:null}var Zc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Um(a){return typeof a=="function"?a:(a[Zc]||(a[Zc]=function(f){return a.handleEvent(f)}),a[Zc])}function lt(){te.call(this),this.i=new Nn(this),this.M=this,this.F=null}I(lt,te),lt.prototype[At]=!0,lt.prototype.removeEventListener=function(a,f,p,y){$m(this,a,f,p,y)};function _t(a,f){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new Ee(f,a);else if(f instanceof Ee)f.target=f.target||a;else{var j=f;f=new Ee(y,a),S(f,j)}if(j=!0,p)for(var D=p.length-1;0<=D;D--){var $=f.g=p[D];j=Ba($,y,!0,f)&&j}if($=f.g=a,j=Ba($,y,!0,f)&&j,j=Ba($,y,!1,f)&&j,p)for(D=0;D<p.length;D++)$=f.g=p[D],j=Ba($,y,!1,f)&&j}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],y=0;y<p.length;y++)ir(p[y]);delete a.g[f],a.h--}}this.F=null},lt.prototype.K=function(a,f,p,y){return this.i.add(String(a),f,!1,p,y)},lt.prototype.L=function(a,f,p,y){return this.i.add(String(a),f,!0,p,y)};function Ba(a,f,p,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var j=!0,D=0;D<f.length;++D){var $=f[D];if($&&!$.da&&$.capture==p){var he=$.listener,tt=$.ha||$.src;$.fa&&Yt(a.i,$),j=he.call(tt,y)!==!1&&j}}return j&&!y.defaultPrevented}function Hm(a,f,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function Wm(a){a.g=Hm(()=>{a.g=null,a.i&&(a.i=!1,Wm(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class OE extends te{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Wm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wo(a){te.call(this),this.h=a,this.g={}}I(Wo,te);var Gm=[];function qm(a){N(a.g,function(f,p){this.g.hasOwnProperty(p)&&Xc(f)},a),a.g={}}Wo.prototype.N=function(){Wo.aa.N.call(this),qm(this)},Wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ef=l.JSON.stringify,jE=l.JSON.parse,NE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function tf(){}tf.prototype.h=null;function Qm(a){return a.h||(a.h=a.i())}function Km(){}var Go={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nf(){Ee.call(this,"d")}I(nf,Ee);function rf(){Ee.call(this,"c")}I(rf,Ee);var Yr={},Ym=null;function Ua(){return Ym=Ym||new lt}Yr.La="serverreachability";function Xm(a){Ee.call(this,Yr.La,a)}I(Xm,Ee);function qo(a){const f=Ua();_t(f,new Xm(f))}Yr.STAT_EVENT="statevent";function Jm(a,f){Ee.call(this,Yr.STAT_EVENT,a),this.stat=f}I(Jm,Ee);function xt(a){const f=Ua();_t(f,new Jm(f,a))}Yr.Ma="timingevent";function Zm(a,f){Ee.call(this,Yr.Ma,a),this.size=f}I(Zm,Ee);function Qo(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Ko(){this.g=!0}Ko.prototype.xa=function(){this.g=!1};function DE(a,f,p,y,j,D){a.info(function(){if(a.g)if(D)for(var $="",he=D.split("&"),tt=0;tt<he.length;tt++){var ae=he[tt].split("=");if(1<ae.length){var ut=ae[0];ae=ae[1];var ct=ut.split("_");$=2<=ct.length&&ct[1]=="type"?$+(ut+"="+ae+"&"):$+(ut+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+y+") [attempt "+j+"]: "+f+`
`+p+`
`+$})}function LE(a,f,p,y,j,D,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+j+"]: "+f+`
`+p+`
`+D+" "+$})}function ji(a,f,p,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+FE(a,p)+(y?" "+y:"")})}function ME(a,f){a.info(function(){return"TIMEOUT: "+f})}Ko.prototype.info=function(){};function FE(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var j=y[1];if(Array.isArray(j)&&!(1>j.length)){var D=j[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<j.length;$++)j[$]=""}}}}return ef(p)}catch{return f}}var Ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},of;function Wa(){}I(Wa,tf),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},of=new Wa;function or(a,f,p,y){this.j=a,this.i=f,this.l=p,this.R=y||1,this.U=new Wo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tg}function tg(){this.i=null,this.g="",this.h=!1}var ng={},sf={};function af(a,f,p){a.L=1,a.v=Ka(Dn(f)),a.m=p,a.P=!0,rg(a,null)}function rg(a,f){a.F=Date.now(),Ga(a),a.A=Dn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),yg(p.i,"t",y),a.C=0,p=a.j.J,a.h=new tg,a.g=Dg(a.j,p?f:null,!a.m),0<a.O&&(a.M=new OE(g(a.Y,a,a.g),a.O)),f=a.U,p=a.g,y=a.ca;var j="readystatechange";Array.isArray(j)||(j&&(Gm[0]=j.toString()),j=Gm);for(var D=0;D<j.length;D++){var $=zm(p,j[D],y||f.handleEvent,!1,f.h||f);if(!$)break;f.g[$.key]=$}f=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),qo(),DE(a.i,a.u,a.A,a.l,a.R,a.m)}or.prototype.ca=function(a){a=a.target;const f=this.M;f&&Ln(a)==3?f.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const ct=Ln(this.g);var f=this.g.Ba();const Li=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Tg(this.g)))){this.J||ct!=4||f==7||(f==8||0>=Li?qo(3):qo(2)),lf(this);var p=this.g.Z();this.X=p;t:if(ig(this)){var y=Tg(this.g);a="";var j=y.length,D=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),Yo(this);var $="";break t}this.h.i=new l.TextDecoder}for(f=0;f<j;f++)this.h.h=!0,a+=this.h.i.decode(y[f],{stream:!(D&&f==j-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,LE(this.i,this.u,this.A,this.l,this.R,ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var he,tt=this.g;if((he=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(he)){var ae=he;break t}}ae=null}if(p=ae)ji(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uf(this,p);else{this.o=!1,this.s=3,xt(12),Xr(this),Yo(this);break e}}if(this.P){p=!0;let sn;for(;!this.J&&this.C<$.length;)if(sn=VE(this,$),sn==sf){ct==4&&(this.s=4,xt(14),p=!1),ji(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==ng){this.s=4,xt(15),ji(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else ji(this.i,this.l,sn,null),uf(this,sn);if(ig(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||$.length!=0||this.h.h||(this.s=1,xt(16),p=!1),this.o=this.o&&p,!p)ji(this.i,this.l,$,"[Invalid Chunked Response]"),Xr(this),Yo(this);else if(0<$.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),mf(ut),ut.M=!0,xt(11))}}else ji(this.i,this.l,$,null),uf(this,$);ct==4&&Xr(this),this.o&&!this.J&&(ct==4?Rg(this.j,this):(this.o=!1,Ga(this)))}else nb(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Xr(this),Yo(this)}}}catch{}finally{}};function ig(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function VE(a,f){var p=a.C,y=f.indexOf(`
`,p);return y==-1?sf:(p=Number(f.substring(p,y)),isNaN(p)?ng:(y+=1,y+p>f.length?sf:(f=f.slice(y,y+p),a.C=y+p,f)))}or.prototype.cancel=function(){this.J=!0,Xr(this)};function Ga(a){a.S=Date.now()+a.I,og(a,a.I)}function og(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qo(g(a.ba,a),f)}function lf(a){a.B&&(l.clearTimeout(a.B),a.B=null)}or.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ME(this.i,this.A),this.L!=2&&(qo(),xt(17)),Xr(this),this.s=2,Yo(this)):og(this,this.S-a)};function Yo(a){a.j.G==0||a.J||Rg(a.j,a)}function Xr(a){lf(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,qm(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function uf(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||cf(p.h,a))){if(!a.K&&cf(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var j=y;if(j[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)el(p),Ja(p);else break e;pf(p),xt(18)}}else p.za=j[1],0<p.za-p.T&&37500>j[2]&&p.F&&p.v==0&&!p.C&&(p.C=Qo(g(p.Za,p),6e3));if(1>=lg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Zr(p,11)}else if((a.K||p.g==a)&&el(p),!v(f))for(j=p.Da.g.parse(f),f=0;f<j.length;f++){let ae=j[f];if(p.T=ae[0],ae=ae[1],p.G==2)if(ae[0]=="c"){p.K=ae[1],p.ia=ae[2];const ut=ae[3];ut!=null&&(p.la=ut,p.j.info("VER="+p.la));const ct=ae[4];ct!=null&&(p.Aa=ct,p.j.info("SVER="+p.Aa));const Li=ae[5];Li!=null&&typeof Li=="number"&&0<Li&&(y=1.5*Li,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const sn=a.g;if(sn){const nl=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var D=y.h;D.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(ff(D,D.h),D.h=null))}if(y.D){const gf=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;gf&&(y.ya=gf,ye(y.I,y.D,gf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var $=a;if(y.qa=Ng(y,y.J?y.ia:null,y.W),$.K){ug(y.h,$);var he=$,tt=y.L;tt&&(he.I=tt),he.B&&(lf(he),Ga(he)),y.g=$}else Cg(y);0<p.i.length&&Za(p)}else ae[0]!="stop"&&ae[0]!="close"||Zr(p,7);else p.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Zr(p,7):hf(p):ae[0]!="noop"&&p.l&&p.l.ta(ae),p.v=0)}}qo(4)}catch{}}var zE=class{constructor(a,f){this.g=a,this.map=f}};function sg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ag(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function lg(a){return a.h?1:a.g?a.g.size:0}function cf(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function ff(a,f){a.g?a.g.add(f):a.h=f}function ug(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}sg.prototype.cancel=function(){if(this.i=cg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function cg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return C(a.i)}function $E(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var f=[],p=a.length,y=0;y<p;y++)f.push(a[y]);return f}f=[],p=0;for(y in a)f[p++]=a[y];return f}function BE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const y in a)f[p++]=y;return f}}}function fg(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=BE(a),y=$E(a),j=y.length,D=0;D<j;D++)f.call(void 0,y[D],p&&p[D],a)}var dg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UE(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),j=null;if(0<=y){var D=a[p].substring(0,y);j=a[p].substring(y+1)}else D=a[p];f(D,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Jr){this.h=a.h,qa(this,a.j),this.o=a.o,this.g=a.g,Qa(this,a.s),this.l=a.l;var f=a.i,p=new Zo;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),hg(this,p),this.m=a.m}else a&&(f=String(a).match(dg))?(this.h=!1,qa(this,f[1]||"",!0),this.o=Xo(f[2]||""),this.g=Xo(f[3]||"",!0),Qa(this,f[4]),this.l=Xo(f[5]||"",!0),hg(this,f[6]||"",!0),this.m=Xo(f[7]||"")):(this.h=!1,this.i=new Zo(null,this.h))}Jr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Jo(f,pg,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Jo(f,pg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Jo(p,p.charAt(0)=="/"?GE:WE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Jo(p,QE)),a.join("")};function Dn(a){return new Jr(a)}function qa(a,f,p){a.j=p?Xo(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Qa(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function hg(a,f,p){f instanceof Zo?(a.i=f,KE(a.i,a.h)):(p||(f=Jo(f,qE)),a.i=new Zo(f,a.h))}function ye(a,f,p){a.i.set(f,p)}function Ka(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Xo(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Jo(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,HE),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function HE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pg=/[#\/\?@]/g,WE=/[#\?:]/g,GE=/[#\?]/g,qE=/[#\?@]/g,QE=/#/g;function Zo(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function sr(a){a.g||(a.g=new Map,a.h=0,a.i&&UE(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Zo.prototype,t.add=function(a,f){sr(this),this.i=null,a=Ni(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function mg(a,f){sr(a),f=Ni(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function gg(a,f){return sr(a),f=Ni(a,f),a.g.has(f)}t.forEach=function(a,f){sr(this),this.g.forEach(function(p,y){p.forEach(function(j){a.call(f,j,y,this)},this)},this)},t.na=function(){sr(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let y=0;y<f.length;y++){const j=a[y];for(let D=0;D<j.length;D++)p.push(f[y])}return p},t.V=function(a){sr(this);let f=[];if(typeof a=="string")gg(this,a)&&(f=f.concat(this.g.get(Ni(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return sr(this),this.i=null,a=Ni(this,a),gg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function yg(a,f,p){mg(a,f),0<p.length&&(a.i=null,a.g.set(Ni(a,f),C(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var y=f[p];const D=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var j=D;$[y]!==""&&(j+="="+encodeURIComponent(String($[y]))),a.push(j)}}return this.i=a.join("&")};function Ni(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function KE(a,f){f&&!a.j&&(sr(a),a.i=null,a.g.forEach(function(p,y){var j=y.toLowerCase();y!=j&&(mg(this,y),yg(this,j,p))},a)),a.j=f}function YE(a,f){const p=new Ko;if(l.Image){const y=new Image;y.onload=b(ar,p,"TestLoadImage: loaded",!0,f,y),y.onerror=b(ar,p,"TestLoadImage: error",!1,f,y),y.onabort=b(ar,p,"TestLoadImage: abort",!1,f,y),y.ontimeout=b(ar,p,"TestLoadImage: timeout",!1,f,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function XE(a,f){const p=new Ko,y=new AbortController,j=setTimeout(()=>{y.abort(),ar(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(j),D.ok?ar(p,"TestPingServer: ok",!0,f):ar(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(j),ar(p,"TestPingServer: error",!1,f)})}function ar(a,f,p,y,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),y(p)}catch{}}function JE(){this.g=new NE}function ZE(a,f,p){const y=p||"";try{fg(a,function(j,D){let $=j;c(j)&&($=ef(j)),f.push(y+D+"="+encodeURIComponent($))})}catch(j){throw f.push(y+"type="+encodeURIComponent("_badmap")),j}}function es(a){this.l=a.Ub||null,this.j=a.eb||!1}I(es,tf),es.prototype.g=function(){return new Ya(this.l,this.j)},es.prototype.i=function(a){return function(){return a}}({});function Ya(a,f){lt.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ya,lt),t=Ya.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function vg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?ts(this):ns(this),this.readyState==3&&vg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ts(this))},t.Qa=function(a){this.g&&(this.response=a,ts(this))},t.ga=function(){this.g&&ts(this)};function ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ns(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wg(a){let f="";return N(a,function(p,y){f+=y,f+=":",f+=p,f+=`\r
`}),f}function df(a,f,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=wg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ye(a,f,p))}function De(a){lt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(De,lt);var eb=/^https?$/i,tb=["POST","PUT"];t=De.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():of.g(),this.v=this.o?Qm(this.o):Qm(of),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(D){_g(this,D);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var j in y)p.set(j,y[j]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())p.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),j=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(tb,f,void 0))||y||j||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of p)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bg(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){_g(this,D)}};function _g(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,xg(a),Xa(a)}function xg(a){a.A||(a.A=!0,_t(a,"complete"),_t(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_t(this,"complete"),_t(this,"abort"),Xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xa(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Eg(this):this.bb())},t.bb=function(){Eg(this)};function Eg(a){if(a.h&&typeof s<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)Hm(a.Ea,0,a);else if(_t(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var y;if(y=$===0){var j=String(a.D).match(dg)[1]||null;!j&&l.self&&l.self.location&&(j=l.self.location.protocol.slice(0,-1)),y=!eb.test(j?j.toLowerCase():"")}p=y}if(p)_t(a,"complete"),_t(a,"success");else{a.m=6;try{var D=2<Ln(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",xg(a)}}finally{Xa(a)}}}}function Xa(a,f){if(a.g){bg(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||_t(a,"ready");try{p.onreadystatechange=y}catch{}}}function bg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),jE(f)}};function Tg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nb(a){const f={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var p=A(a[y]);const j=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=f[j]||[];f[j]=D,D.push(p)}_(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function Sg(a){this.Aa=0,this.i=[],this.j=new Ko,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,a),this.cb=rs("retryDelaySeedMs",1e4,a),this.Wa=rs("forwardChannelMaxRetries",2,a),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new sg(a&&a.concurrentRequestLimit),this.Da=new JE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sg.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,y){xt(0),this.W=a,this.H=f||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Ng(this,null,this.W),Za(this)};function hf(a){if(kg(a),a.G==3){var f=a.U++,p=Dn(a.I);if(ye(p,"SID",a.K),ye(p,"RID",f),ye(p,"TYPE","terminate"),is(a,p),f=new or(a,a.j,f),f.L=2,f.v=Ka(Dn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=f.v,p=!0),p||(f.g=Dg(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ga(f)}jg(a)}function Ja(a){a.g&&(mf(a),a.g.cancel(),a.g=null)}function kg(a){Ja(a),a.u&&(l.clearTimeout(a.u),a.u=null),el(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Za(a){if(!ag(a.h)&&!a.s){a.s=!0;var f=a.Ga;Lt||Y(),B||(Lt(),B=!0),G.add(f,a),a.B=0}}function rb(a,f){return lg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qo(g(a.Ga,a,f),Og(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const j=new or(this,this.j,a);let D=this.o;if(this.S&&(D?(D=w(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(j.H=D,D=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=Ag(this,j,f),p=Dn(this.I),ye(p,"RID",a),ye(p,"CVER",22),this.D&&ye(p,"X-HTTP-Session-Id",this.D),is(this,p),D&&(this.O?f="headers="+encodeURIComponent(String(wg(D)))+"&"+f:this.m&&df(p,this.m,D)),ff(this.h,j),this.Ua&&ye(p,"TYPE","init"),this.P?(ye(p,"$req",f),ye(p,"SID","null"),j.T=!0,af(j,p,null)):af(j,p,f),this.G=2}}else this.G==3&&(a?Ig(this,a):this.i.length==0||ag(this.h)||Ig(this))};function Ig(a,f){var p;f?p=f.l:p=a.U++;const y=Dn(a.I);ye(y,"SID",a.K),ye(y,"RID",p),ye(y,"AID",a.T),is(a,y),a.m&&a.o&&df(y,a.m,a.o),p=new or(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Ag(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ff(a.h,p),af(p,y,f)}function is(a,f){a.H&&N(a.H,function(p,y){ye(f,y,p)}),a.l&&fg({},function(p,y){ye(f,y,p)})}function Ag(a,f,p){p=Math.min(a.i.length,p);var y=a.l?g(a.l.Na,a.l,a):null;e:{var j=a.i;let D=-1;for(;;){const $=["count="+p];D==-1?0<p?(D=j[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let he=!0;for(let tt=0;tt<p;tt++){let ae=j[tt].g;const ut=j[tt].map;if(ae-=D,0>ae)D=Math.max(0,j[tt].g-100),he=!1;else try{ZE(ut,$,"req"+ae+"_")}catch{y&&y(ut)}}if(he){y=$.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,y}function Cg(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;Lt||Y(),B||(Lt(),B=!0),G.add(f,a),a.v=0}}function pf(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qo(g(a.Fa,a),Og(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Pg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qo(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Ja(this),Pg(this))};function mf(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Pg(a){a.g=new or(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Dn(a.qa);ye(f,"RID","rpc"),ye(f,"SID",a.K),ye(f,"AID",a.T),ye(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(f,"TO",a.ja),ye(f,"TYPE","xmlhttp"),is(a,f),a.m&&a.o&&df(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ka(Dn(f)),p.m=null,p.P=!0,rg(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Ja(this),pf(this),xt(19))};function el(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Rg(a,f){var p=null;if(a.g==f){el(a),mf(a),a.g=null;var y=2}else if(cf(a.h,f))p=f.D,ug(a.h,f),y=1;else return;if(a.G!=0){if(f.o)if(y==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var j=a.B;y=Ua(),_t(y,new Zm(y,p)),Za(a)}else Cg(a);else if(j=f.s,j==3||j==0&&0<f.X||!(y==1&&rb(a,f)||y==2&&pf(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),j){case 1:Zr(a,5);break;case 4:Zr(a,10);break;case 3:Zr(a,6);break;default:Zr(a,2)}}}function Og(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function Zr(a,f){if(a.j.info("Error code "+f),f==2){var p=g(a.fb,a),y=a.Xa;const j=!y;y=new Jr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qa(y,"https"),Ka(y),j?YE(y.toString(),p):XE(y.toString(),p)}else xt(2);a.G=0,a.l&&a.l.sa(f),jg(a),kg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function jg(a){if(a.G=0,a.ka=[],a.l){const f=cg(a.h);(f.length!=0||a.i.length!=0)&&(R(a.ka,f),R(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Ng(a,f,p){var y=p instanceof Jr?Dn(p):new Jr(p);if(y.g!="")f&&(y.g=f+"."+y.g),Qa(y,y.s);else{var j=l.location;y=j.protocol,f=f?f+"."+j.hostname:j.hostname,j=+j.port;var D=new Jr(null);y&&qa(D,y),f&&(D.g=f),j&&Qa(D,j),p&&(D.l=p),y=D}return p=a.D,f=a.ya,p&&f&&ye(y,p,f),ye(y,"VER",a.la),is(a,y),y}function Dg(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new De(new es({eb:p})):new De(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lg(){}t=Lg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function tl(){}tl.prototype.g=function(a,f){return new Ft(a,f)};function Ft(a,f){lt.call(this),this.g=new Sg(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!v(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!v(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Di(this)}I(Ft,lt),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){hf(this.g)},Ft.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ef(a),a=p);f.i.push(new zE(f.Ya++,a)),f.G==3&&Za(f)},Ft.prototype.N=function(){this.g.l=null,delete this.j,hf(this.g),delete this.g,Ft.aa.N.call(this)};function Mg(a){nf.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}I(Mg,nf);function Fg(){rf.call(this),this.status=1}I(Fg,rf);function Di(a){this.g=a}I(Di,Lg),Di.prototype.ua=function(){_t(this.g,"a")},Di.prototype.ta=function(a){_t(this.g,new Mg(a))},Di.prototype.sa=function(a){_t(this.g,new Fg)},Di.prototype.ra=function(){_t(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,J2=function(){return new tl},X2=function(){return Ua()},Y2=Yr,Bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ha.NO_ERROR=0,Ha.TIMEOUT=8,Ha.HTTP_ERROR=6,Zl=Ha,eg.COMPLETE="complete",K2=eg,Km.EventType=Go,Go.OPEN="a",Go.CLOSE="b",Go.ERROR="c",Go.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ts=Km,Q2=es,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,q2=De}).apply(typeof Tl<"u"?Tl:typeof self<"u"?self:typeof window<"u"?window:{});const Zv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new z2("@firebase/firestore");function hs(){return Ii.logLevel}function q(t,...e){if(Ii.logLevel<=oe.DEBUG){const n=e.map(gm);Ii.debug(`Firestore (${Bo}): ${t}`,...n)}}function Ai(t,...e){if(Ii.logLevel<=oe.ERROR){const n=e.map(gm);Ii.error(`Firestore (${Bo}): ${t}`,...n)}}function Hu(t,...e){if(Ii.logLevel<=oe.WARN){const n=e.map(gm);Ii.warn(`Firestore (${Bo}): ${t}`,...n)}}function gm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: `+t;throw Ai(e),new Error(e)}function Ge(t,e){t||re()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends $o{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class F4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class V4{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new mi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mi,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mi)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ge(typeof r.accessToken=="string"),new Z2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new pt(e)}}class z4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new z4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class B4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.R=n.token,new B4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=H4(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new Ze(0,0))}static max(){return new Pe(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends pa{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const W4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends pa{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return W4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new K(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new K(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Fe.fromString(e))}static fromName(e){return new Z(Fe.fromString(e).popFirst(5))}static empty(){return new Z(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Fe(e.slice()))}}function G4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Pe.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new $r(i,Z.empty(),e)}function q4(t){return new $r(t.readTime,t.key,-1)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(Pe.min(),Z.empty(),-1)}static max(){return new $r(Pe.max(),Z.empty(),-1)}}function Q4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==K4)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let u=0;u<o;u++){const c=u;n(e[c]).next(h=>{s[c]=h,++l,l===o&&r(s)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function X4(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Oc(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}nx.oe=-1;function ym(t){return t==null}function Wu(t){return t===0&&1/t==-1/0}function J4(t){return typeof t=="number"&&Number.isInteger(t)&&!Wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ra(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,o){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t0(this.data.getIterator())}getIteratorFrom(e){return new t0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yt(this.comparator);return n.data=e,n}}class t0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new hn([])}unionWith(e){let n=new yt(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Z4("Invalid base64 string: "+o):o}}(e);return new Pn(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Pn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pn.EMPTY_BYTE_STRING=new Pn("");const e3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(t){if(Ge(!!t),typeof t=="string"){let e=0;const n=e3.exec(t);if(Ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ma(t){return typeof t=="string"?Pn.fromBase64String(t):Pn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ix(t){const e=t.mapValue.fields.__previous_value__;return vm(e)?ix(e):e}function Gu(t){const e=Ci(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e,n,r,i,o,s,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class qu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Co(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vm(t)?4:r3(t)?9007199254740991:n3(t)?10:11:re()}function Rn(t,e){if(t===e)return!0;const n=Co(t);if(n!==Co(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gu(t).isEqual(Gu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Ci(i.timestampValue),l=Ci(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ma(i.bytesValue).isEqual(ma(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=it(i.doubleValue),l=it(o.doubleValue);return s===l?Wu(s)===Wu(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return Ao(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(e0(s)!==e0(l))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(l[u]===void 0||!Rn(s[u],l[u])))return!1;return!0}(t,e);default:return re()}}function ga(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Po(t,e){if(t===e)return 0;const n=Co(t),r=Co(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=it(o.integerValue||o.doubleValue),u=it(s.integerValue||s.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return n0(t.timestampValue,e.timestampValue);case 4:return n0(Gu(t),Gu(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(o,s){const l=ma(o),u=ma(s);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),u=s.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=pe(l[c],u[c]);if(h!==0)return h}return pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=pe(it(o.latitude),it(s.latitude));return l!==0?l:pe(it(o.longitude),it(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return r0(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,u,c,h;const m=o.fields||{},g=s.fields||{},b=(l=m.value)===null||l===void 0?void 0:l.arrayValue,I=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=pe(((c=b==null?void 0:b.values)===null||c===void 0?void 0:c.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:r0(b,I)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===kl.mapValue&&s===kl.mapValue)return 0;if(o===kl.mapValue)return 1;if(s===kl.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),c=s.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let m=0;m<u.length&&m<h.length;++m){const g=pe(u[m],h[m]);if(g!==0)return g;const b=Po(l[u[m]],c[h[m]]);if(b!==0)return b}return pe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw re()}}function n0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Ci(t),r=Ci(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function r0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Po(n[i],r[i]);if(o)return o}return pe(n.length,r.length)}function Ro(t){return Uh(t)}function Uh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ci(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ma(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Uh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Uh(n.fields[s])}`;return i+"}"}(t.mapValue):re()}function Hh(t){return!!t&&"integerValue"in t}function wm(t){return!!t&&"arrayValue"in t}function eu(t){return!!t&&"mapValue"in t}function n3(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ms(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ra(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ms(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ms(t.arrayValue.values[n]);return e}return Object.assign({},t)}function r3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ms(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=Ms(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ra(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new dn(Ms(this.value))}}function ox(t){const e=[];return Ra(t.fields,(n,r)=>{const i=new ot([n]);if(eu(r)){const o=ox(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new fn(e,0,Pe.min(),Pe.min(),Pe.min(),dn.empty(),0)}static newFoundDocument(e,n,r,i){return new fn(e,1,n,Pe.min(),r,i,0)}static newNoDocument(e,n){return new fn(e,2,n,Pe.min(),Pe.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new fn(e,3,n,Pe.min(),Pe.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n){this.position=e,this.inclusive=n}}function i0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=Z.comparator(Z.fromName(s.referenceValue),n.key):r=Po(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function o0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n="asc"){this.field=e,this.dir=n}}function i3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{}class Ye extends sx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new s3(e,n,r):n==="array-contains"?new u3(e,r):n==="in"?new c3(e,r):n==="not-in"?new f3(e,r):n==="array-contains-any"?new d3(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new a3(e,r):new l3(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Po(n,this.value)):n!==null&&Co(this.value)===Co(n)&&this.matchesComparison(Po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Br extends sx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Br(e,n)}matches(e){return ax(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ax(t){return t.op==="and"}function lx(t){return o3(t)&&ax(t)}function o3(t){for(const e of t.filters)if(e instanceof Br)return!1;return!0}function Wh(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Ro(t.value);if(lx(t))return t.filters.map(e=>Wh(e)).join(",");{const e=t.filters.map(n=>Wh(n)).join(",");return`${t.op}(${e})`}}function ux(t,e){return t instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.field.isEqual(i.field)&&Rn(r.value,i.value)}(t,e):t instanceof Br?function(r,i){return i instanceof Br&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&ux(s,i.filters[l]),!0):!1}(t,e):void re()}function cx(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Ro(n.value)}`}(t):t instanceof Br?function(n){return n.op.toString()+" {"+n.getFilters().map(cx).join(" ,")+"}"}(t):"Filter"}class s3 extends Ye{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class a3 extends Ye{constructor(e,n){super(e,"in",n),this.keys=fx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class l3 extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=fx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class u3 extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wm(n)&&ga(n.arrayValue,this.value)}}class c3 extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ga(this.value.arrayValue,n)}}class f3 extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ga(this.value.arrayValue,n)}}class d3 extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ga(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function s0(t,e=null,n=[],r=[],i=null,o=null,s=null){return new h3(t,e,n,r,i,o,s)}function _m(t){const e=ge(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ym(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ro(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ro(r)).join(",")),e.ue=n}return e.ue}function xm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!i3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ux(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!o0(t.startAt,e.startAt)&&o0(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function p3(t,e,n,r,i,o,s,l){return new jc(t,e,n,r,i,o,s,l)}function m3(t){return new jc(t)}function a0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function g3(t){return t.collectionGroup!==null}function Fs(t){const e=ge(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new yt(ot.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ku(o,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new Ku(ot.keyField(),r))}return e.ce}function gi(t){const e=ge(t);return e.le||(e.le=y3(e,Fs(t))),e.le}function y3(t,e){if(t.limitType==="F")return s0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ku(i.field,o)});const n=t.endAt?new Qu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qu(t.startAt.position,t.startAt.inclusive):null;return s0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gh(t,e,n){return new jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dx(t,e){return xm(gi(t),gi(e))&&t.limitType===e.limitType}function hx(t){return`${_m(gi(t))}|lt:${t.limitType}`}function ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cx(i)).join(", ")}]`),ym(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ro(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ro(i)).join(",")),`Target(${r})`}(gi(t))}; limitType=${t.limitType})`}function Em(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Z.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Fs(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,u){const c=i0(s,l,u);return s.inclusive?c<=0:c<0}(r.startAt,Fs(r),i)||r.endAt&&!function(s,l,u){const c=i0(s,l,u);return s.inclusive?c>=0:c>0}(r.endAt,Fs(r),i))}(t,e)}function v3(t){return(e,n)=>{let r=!1;for(const i of Fs(t)){const o=w3(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function w3(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(o,s,l){const u=s.data.field(o),c=l.data.field(o);return u!==null&&c!==null?Po(u,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ra(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return rx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _3=new Dt(Z.comparator);function Yu(){return _3}const px=new Dt(Z.comparator);function Il(...t){let e=px;for(const n of t)e=e.insert(n.key,n);return e}function mx(t){let e=px;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ui(){return Vs()}function gx(){return Vs()}function Vs(){return new Uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const x3=new Dt(Z.comparator),E3=new yt(Z.comparator);function gt(...t){let e=E3;for(const n of t)e=e.add(n);return e}const b3=new yt(pe);function T3(){return b3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function yx(t){return{integerValue:""+t}}function S3(t,e){return J4(e)?yx(e):bm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this._=void 0}}function k3(t,e,n){return t instanceof Xu?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&vm(o)&&(o=ix(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof ya?wx(t,e):t instanceof va?_x(t,e):function(i,o){const s=vx(i,o),l=l0(s)+l0(i.Pe);return Hh(s)&&Hh(i.Pe)?yx(l):bm(i.serializer,l)}(t,e)}function I3(t,e,n){return t instanceof ya?wx(t,e):t instanceof va?_x(t,e):n}function vx(t,e){return t instanceof Ju?function(r){return Hh(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Xu extends Nc{}class ya extends Nc{constructor(e){super(),this.elements=e}}function wx(t,e){const n=xx(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class va extends Nc{constructor(e){super(),this.elements=e}}function _x(t,e){let n=xx(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Ju extends Nc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function l0(t){return it(t.integerValue||t.doubleValue)}function xx(t){return wm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function A3(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ya&&i instanceof ya||r instanceof va&&i instanceof va?Ao(r.elements,i.elements,Rn):r instanceof Ju&&i instanceof Ju?Rn(r.Pe,i.Pe):r instanceof Xu&&i instanceof Xu}(t.transform,e.transform)}class C3{constructor(e,n){this.version=e,this.transformResults=n}}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dc{}function Ex(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tx(t.key,Gn.none()):new Oa(t.key,t.data,Gn.none());{const n=t.data,r=dn.empty();let i=new yt(ot.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Oi(t.key,r,new hn(i.toArray()),Gn.none())}}function P3(t,e,n){t instanceof Oa?function(i,o,s){const l=i.value.clone(),u=c0(i.fieldTransforms,o,s.transformResults);l.setAll(u),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Oi?function(i,o,s){if(!tu(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=c0(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(bx(i)),u.setAll(l),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function zs(t,e,n,r){return t instanceof Oa?function(o,s,l,u){if(!tu(o.precondition,s))return l;const c=o.value.clone(),h=f0(o.fieldTransforms,u,s);return c.setAll(h),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Oi?function(o,s,l,u){if(!tu(o.precondition,s))return l;const c=f0(o.fieldTransforms,u,s),h=s.data;return h.setAll(bx(o)),h.setAll(c),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,l){return tu(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function R3(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=vx(r.transform,i||null);o!=null&&(n===null&&(n=dn.empty()),n.set(r.field,o))}return n||null}function u0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ao(r,i,(o,s)=>A3(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends Dc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Oi extends Dc{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function bx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function c0(t,e,n){const r=new Map;Ge(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,I3(s,l,n[i]))}return r}function f0(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,k3(o,s,e))}return r}class Tx extends Dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class O3 extends Dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&P3(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gx();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const u=Ex(s,l);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(Pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),gt())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,(n,r)=>u0(n,r))&&Ao(this.baseMutations,e.baseMutations,(n,r)=>u0(n,r))}}class Tm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ge(e.mutations.length===r.length);let i=function(){return x3}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Tm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ie;function D3(t){switch(t){default:return re();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function L3(t){if(t===void 0)return Ai("GRPC error has no .code"),z.UNKNOWN;switch(t){case $e.OK:return z.OK;case $e.CANCELLED:return z.CANCELLED;case $e.UNKNOWN:return z.UNKNOWN;case $e.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case $e.INTERNAL:return z.INTERNAL;case $e.UNAVAILABLE:return z.UNAVAILABLE;case $e.UNAUTHENTICATED:return z.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case $e.NOT_FOUND:return z.NOT_FOUND;case $e.ALREADY_EXISTS:return z.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return z.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case $e.ABORTED:return z.ABORTED;case $e.OUT_OF_RANGE:return z.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return z.UNIMPLEMENTED;case $e.DATA_LOSS:return z.DATA_LOSS;default:return re()}}(ie=$e||($e={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new G2([4294967295,4294967295],0);class M3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F3(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V3(t,e){return qh(t,e.toTimestamp())}function fo(t){return Ge(!!t),Pe.fromTimestamp(function(n){const r=Ci(n);return new Ze(r.seconds,r.nanos)}(t))}function Sx(t,e){return Qh(t,e).canonicalString()}function Qh(t,e){const n=function(i){return new Fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function z3(t){const e=Fe.fromString(t);return Ge(Q3(e)),e}function Kh(t,e){return Sx(t.databaseId,e.path)}function $3(t){const e=z3(t);return e.length===4?Fe.emptyPath():U3(e)}function B3(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function U3(t){return Ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function d0(t,e,n){return{name:Kh(t,e),fields:n.value.mapValue.fields}}function H3(t,e){let n;if(e instanceof Oa)n={update:d0(t,e.key,e.value)};else if(e instanceof Tx)n={delete:Kh(t,e.key)};else if(e instanceof Oi)n={update:d0(t,e.key,e.data),updateMask:q3(e.fieldMask)};else{if(!(e instanceof O3))return re();n={verify:Kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof Xu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ya)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof va)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ju)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:V3(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:re()}(t,e.precondition)),n}function W3(t,e){return t&&t.length>0?(Ge(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?fo(i.updateTime):fo(o);return s.isEqual(Pe.min())&&(s=fo(o)),new C3(s,i.transformResults||[])}(n,e))):[]}function G3(t){let e=$3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ge(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];n.where&&(o=function(m){const g=kx(m);return g instanceof Br&&lx(g)?g.getFilters():[g]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(g=>function(I){return new Ku($i(I.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ym(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,b=m.values||[];return new Qu(b,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,b=m.values||[];return new Qu(b,g)}(n.endAt)),p3(e,i,s,o,l,"F",u,c)}function kx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$i(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$i(n.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=$i(n.unaryFilter.field);return Ye.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$i(n.unaryFilter.field);return Ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create($i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Br.create(n.compositeFilter.filters.map(r=>kx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function $i(t){return ot.fromServerFormat(t.fieldPath)}function q3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Q3(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(e){this.ct=e}}function Y3(t){const e=G3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X3{constructor(){this.un=new J3}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve($r.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class J3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new yt(Fe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new yt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oo(0)}static kn(){return new Oo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(){this.changes=new Uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,fn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&zs(r.mutation,i,hn.empty(),Ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,gt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=gt()){const i=ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Il();return o.forEach((l,u)=>{s=s.insert(l,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,gt()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=Yu();const s=Vs(),l=function(){return Vs()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Oi)?o=o.insert(c.key,c):h!==void 0?(s.set(c.key,h.mutation.getFieldMask()),zs(h.mutation,c,h.mutation.getFieldMask(),Ze.now())):s.set(c.key,hn.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((c,h)=>s.set(c,h)),n.forEach((c,h)=>{var m;return l.set(c,new e5(h,(m=s.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Vs();let i=new Dt((s,l)=>s-l),o=gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||hn.empty();h=l.applyToLocalView(c,h),r.set(u,h);const m=(i.get(l.batchId)||gt()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,m=gx();h.forEach(g=>{if(!o.has(g)){const b=Ex(n.get(g),r.get(g));b!==null&&m.set(g,b),o=o.add(g)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,m))}return F.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return Z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):g3(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):F.resolve(ui());let l=-1,u=o;return s.next(c=>F.forEach(c,(h,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),o.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,u,c,gt())).next(h=>({batchId:l,changes:mx(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let i=Il();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Il();return this.indexManager.getCollectionParents(e,o).next(l=>F.forEach(l,u=>{const c=function(m,g){return new jc(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((m,g)=>{s=s.insert(m,g)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,c)=>{const h=c.getKey();s.get(h)===null&&(s=s.insert(h,fn.newInvalidDocument(h)))});let l=Il();return s.forEach((u,c)=>{const h=o.get(u);h!==void 0&&zs(h.mutation,c,hn.empty(),Ze.now()),Em(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fo(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Y3(i.bundledQuery),readTime:fo(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(){this.overlays=new Dt(Z.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ui();return F.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ui(),o=n.length+1,s=new Z(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Dt((c,h)=>c-h);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=o.get(c.largestBatchId);h===null&&(h=ui(),o=o.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=ui(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new N3(n,r));let o=this.Ir.get(n);o===void 0&&(o=gt(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(){this.sessionToken=Pn.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.Tr=new yt(qe.Er),this.dr=new yt(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Z(new Fe([])),r=new qe(n,e),i=new qe(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Z(new Fe([])),r=new qe(n,e),i=new qe(n,e+1);let o=gt();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Z.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new yt(qe.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new j3(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new qe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(s)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return F.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const l=this.Dr(s.wr);o.push(l)}),F.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new yt(pe);return n.forEach(i=>{const o=new qe(i,0),s=new qe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;Z.isDocumentKey(o)||(o=o.child(""));const s=new qe(new Z(o),0);let l=new yt(pe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},s),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const o=new qe(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new qe(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e){this.Mr=e,this.docs=function(){return new Dt(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():fn.newInvalidDocument(n))}getEntries(e,n){let r=Yu();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():fn.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Yu();const s=n.path,l=new Z(s.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||Q4(q4(h),r)<=0||(i.has(h.key)||Em(n,h))&&(o=o.insert(h.key,h.mutableCopy()))}return F.resolve(o)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new a5(this)}getSize(e){return F.resolve(this.size)}}class a5 extends Z3{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(e){this.persistence=e,this.Nr=new Uo(n=>_m(n),xm),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Sm,this.targetCount=0,this.kr=Oo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Oo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(o).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),F.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(e,n){this.qr={},this.overlays={},this.Qr=new nx(0),this.Kr=!1,this.Kr=!0,this.$r=new i5,this.referenceDelegate=e(this),this.Ur=new l5(this),this.indexManager=new X3,this.remoteDocumentCache=function(i){return new s5(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new K3(n),this.Gr=new n5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new r5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new o5(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new c5(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class c5 extends Y4{constructor(e){super(),this.currentSequenceNumber=e}}class km{constructor(e){this.persistence=e,this.Jr=new Sm,this.Yr=null}static Zr(e){return new km(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=Z.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,Pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=gt(),i=gt();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Im(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _P()?8:X4(vP())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new f5;return this.Xi(e,n,s).next(l=>{if(o.result=l,this.zi)return this.es(e,n,s,l.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(hs()<=oe.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(hs()<=oe.DEBUG&&q("QueryEngine","Query:",ps(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(hs()<=oe.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gi(n))):F.resolve())}Yi(e,n){if(a0(n))return F.resolve(null);let r=gi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gh(n,null,"F"),r=gi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=gt(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,s,u.readTime)?this.Yi(e,Gh(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return a0(n)||i.isEqual(Pe.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?F.resolve(null):(hs()<=oe.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ps(n)),this.rs(e,s,n,G4(i,-1)).next(l=>l))})}ts(e,n){let r=new yt(v3(e));return n.forEach((i,o)=>{Em(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return hs()<=oe.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ps(n)),this.Ji.getDocumentsMatchingQuery(e,n,$r.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h5{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Dt(pe),this._s=new Uo(o=>_m(o),xm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t5(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function p5(t,e,n,r){return new h5(t,e,n,r)}async function Ix(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let u=gt();for(const c of i){s.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of o){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:s,addedBatchIds:l}))})})}function m5(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const m=c.batch,g=m.keys();let b=F.resolve();return g.forEach(I=>{b=b.next(()=>h.getEntry(u,I)).next(C=>{const R=c.docVersions.get(I);Ge(R!==null),C.version.compareTo(R)<0&&(m.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=gt();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function g5(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function y5(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class h0{constructor(){this.activeTargetIds=T3()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class v5{constructor(){this.so=new h0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new h0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al=null;function id(){return Al===null?Al=function(){return 268435456+Math.round(2147483648*Math.random())}():Al++,"0x"+Al.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class E5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const l=id(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,o,s),this.No(n,u,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw Hu("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,o,s,l){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=_5[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=id();return new Promise((s,l)=>{const u=new q2;u.setWithCredentials(!0),u.listenOnce(K2.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Zl.NO_ERROR:const h=u.getResponseJson();q(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case Zl.TIMEOUT:q(ht,`RPC '${e}' ${o} timed out`),l(new K(z.DEADLINE_EXCEEDED,"Request time out"));break;case Zl.HTTP_ERROR:const m=u.getStatus();if(q(ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const b=g==null?void 0:g.error;if(b&&b.status&&b.message){const I=function(R){const x=R.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(x)>=0?x:z.UNKNOWN}(b.status);l(new K(I,b.message))}else l(new K(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(z.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{q(ht,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);q(ht,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=id(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=J2(),l=X2(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Q2({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=o.join("");q(ht,`Creating RPC '${e}' stream ${i}: ${h}`,u);const m=s.createWebChannel(h,u);let g=!1,b=!1;const I=new x5({Io:R=>{b?q(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(g||(q(ht,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(ht,`RPC '${e}' stream ${i} sending:`,R),m.send(R))},To:()=>m.close()}),C=(R,x,v)=>{R.listen(x,E=>{try{v(E)}catch(P){setTimeout(()=>{throw P},0)}})};return C(m,Ts.EventType.OPEN,()=>{b||(q(ht,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),C(m,Ts.EventType.CLOSE,()=>{b||(b=!0,q(ht,`RPC '${e}' stream ${i} transport closed`),I.So())}),C(m,Ts.EventType.ERROR,R=>{b||(b=!0,Hu(ht,`RPC '${e}' stream ${i} transport errored:`,R),I.So(new K(z.UNAVAILABLE,"The operation could not be completed")))}),C(m,Ts.EventType.MESSAGE,R=>{var x;if(!b){const v=R.data[0];Ge(!!v);const E=v,P=E.error||((x=E[0])===null||x===void 0?void 0:x.error);if(P){q(ht,`RPC '${e}' stream ${i} received error:`,P);const L=P.status;let N=function(T){const S=$e[T];if(S!==void 0)return L3(S)}(L),_=P.message;N===void 0&&(N=z.INTERNAL,_="Unknown error status: "+L+" with message "+P.message),b=!0,I.So(new K(N,_)),m.close()}else q(ht,`RPC '${e}' stream ${i} received:`,v),I.bo(v)}}),C(l,Y2.STAT_EVENT,R=>{R.stat===Bh.PROXY?q(ht,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Bh.NOPROXY&&q(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function od(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){return new M3(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b5{constructor(e,n,r,i,o,s,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ax(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Ai(n.toString()),Ai("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class T5 extends b5{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=W3(e.writeResults,e.commitTime),r=fo(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=B3(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>H3(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(z.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Qh(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(z.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,Qh(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(z.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class k5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ai(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Na(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ge(u);c.L_.add(4),await ja(c),c.q_.set("Unknown"),c.L_.delete(4),await Mc(c)}(this))})}),this.q_=new k5(r,i)}}async function Mc(t){if(Na(t))for(const e of t.B_)await e(!0)}async function ja(t){for(const e of t.B_)await e(!1)}function Na(t){return ge(t).L_.size===0}async function Cx(t,e,n){if(!Oc(e))throw e;t.L_.add(1),await ja(t),t.q_.set("Offline"),n||(n=()=>g5(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Mc(t)})}function Px(t,e){return e().catch(n=>Cx(t,n,e))}async function Fc(t){const e=ge(t),n=Ur(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;A5(e);)try{const i=await y5(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,C5(e,i)}catch(i){await Cx(e,i)}Rx(e)&&Ox(e)}function A5(t){return Na(t)&&t.O_.length<10}function C5(t,e){t.O_.push(e);const n=Ur(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Rx(t){return Na(t)&&!Ur(t).n_()&&t.O_.length>0}function Ox(t){Ur(t).start()}async function P5(t){Ur(t).p_()}async function R5(t){const e=Ur(t);for(const n of t.O_)e.m_(n.mutations)}async function O5(t,e,n){const r=t.O_.shift(),i=Tm.from(r,e,n);await Px(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fc(t)}async function j5(t,e){e&&Ur(t).V_&&await async function(r,i){if(function(s){return D3(s)&&s!==z.ABORTED}(i.code)){const o=r.O_.shift();Ur(r).s_(),await Px(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Fc(r)}}(t,e),Rx(t)&&Ox(t)}async function m0(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Na(n);n.L_.add(3),await ja(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Mc(n)}async function N5(t,e){const n=ge(t);e?(n.L_.delete(2),await Mc(n)):e||(n.L_.add(2),await ja(n),n.q_.set("Unknown"))}function Ur(t){return t.U_||(t.U_=function(n,r,i){const o=ge(n);return o.w_(),new T5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:P5.bind(null,t),mo:j5.bind(null,t),f_:R5.bind(null,t),g_:O5.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Fc(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new Am(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jx(t,e){if(Ai("AsyncQueue",`${e}: ${t}`),Oc(t))return new K(z.UNAVAILABLE,`${e}: ${t}`);throw t}class D5{constructor(){this.queries=g0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ge(n),o=i.queries;i.queries=g0(),o.forEach((s,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(z.ABORTED,"Firestore shutting down"))}}function g0(){return new Uo(t=>hx(t),dx)}function L5(t){t.Y_.forEach(e=>{e.next()})}var y0,v0;(v0=y0||(y0={})).ea="default",v0.Cache="cache";class M5{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Uo(l=>hx(l),dx),this.Ma=new Map,this.xa=new Set,this.Oa=new Dt(Z.comparator),this.Na=new Map,this.La=new Sm,this.Ba={},this.ka=new Map,this.qa=Oo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function F5(t,e,n){const r=B5(t);try{const i=await function(s,l){const u=ge(s),c=Ze.now(),h=l.reduce((b,I)=>b.add(I.key),gt());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let I=Yu(),C=gt();return u.cs.getEntries(b,h).next(R=>{I=R,I.forEach((x,v)=>{v.isValidDocument()||(C=C.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,I)).next(R=>{m=R;const x=[];for(const v of l){const E=R3(v,m.get(v.key).overlayedDocument);E!=null&&x.push(new Oi(v.key,E,ox(E.value.mapValue),Gn.exists(!0)))}return u.mutationQueue.addMutationBatch(b,c,x,l)}).next(R=>{g=R;const x=R.applyToLocalDocumentSet(m,C);return u.documentOverlayCache.saveOverlays(b,R.batchId,x)})}).then(()=>({batchId:g.batchId,changes:mx(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,u){let c=s.Ba[s.currentUser.toKey()];c||(c=new Dt(pe)),c=c.insert(l,u),s.Ba[s.currentUser.toKey()]=c}(r,i.batchId,n),await Vc(r,i.changes),await Fc(r.remoteStore)}catch(i){const o=jx(i,"Failed to persist write");n.reject(o)}}function w0(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const u=ge(s);u.onlineState=l;let c=!1;u.queries.forEach((h,m)=>{for(const g of m.j_)g.Z_(l)&&(c=!0)}),c&&L5(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function V5(t,e){const n=ge(t),r=e.batch.batchId;try{const i=await m5(n.localStore,e);Dx(n,r,null),Nx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vc(n,i)}catch(i){await tx(i)}}async function z5(t,e,n){const r=ge(t);try{const i=await function(s,l){const u=ge(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(Ge(m!==null),h=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Dx(r,e,n),Nx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vc(r,i)}catch(i){await tx(i)}}function Nx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Dx(t,e,n){const r=ge(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function Vc(t,e,n){const r=ge(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{s.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(h=void 0)===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Im.Wi(u.targetId,c);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,c){const h=ge(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(c,g=>F.forEach(g.$i,b=>h.persistence.referenceDelegate.addReference(m,g.targetId,b)).next(()=>F.forEach(g.Ui,b=>h.persistence.referenceDelegate.removeReference(m,g.targetId,b)))))}catch(m){if(!Oc(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const b=h.os.get(g),I=b.snapshotVersion,C=b.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(g,C)}}}(r.localStore,o))}async function $5(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await Ix(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(z.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vc(n,r.hs)}}function B5(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=V5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=z5.bind(null,e),e}class _0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Lc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return p5(this.persistence,new d5,e.initialUser,this.serializer)}createPersistence(e){return new u5(km.Zr,this.serializer)}createSharedClientState(e){return new v5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class U5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>w0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$5.bind(null,this.syncEngine),await N5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new D5}()}createDatastore(e){const n=Lc(e.databaseInfo.databaseId),r=function(o){return new E5(o)}(e.databaseInfo);return function(o,s,l,u){return new S5(o,s,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new I5(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>w0(this.syncEngine,n,0),function(){return p0.D()?new p0:new w5}())}createSyncEngine(e,n){return function(i,o,s,l,u,c,h){const m=new M5(i,o,s,l,u,c);return h&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ge(i);q("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await ja(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=ex.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jx(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sd(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ix(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function x0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await G5(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>m0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>m0(e.remoteStore,i)),t._onlineComponents=e}function W5(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function G5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await sd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!W5(n))throw n;Hu("Error using user provided cache. Falling back to memory cache: "+n),await sd(t,new _0)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await sd(t,new _0);return t._offlineComponents}async function q5(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await x0(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await x0(t,new U5))),t._onlineComponents}function Q5(t){return q5(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t,e,n){if(!n)throw new K(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function K5(t,e,n,r){if(e===!0&&r===!0)throw new K(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function b0(t){if(!Z.isDocumentKey(t))throw new K(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function T0(t){if(Z.isDocumentKey(t))throw new K(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Fx(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cm(t);throw new K(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}K5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new K(z.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new K(z.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new K(z.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new S0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new S0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new M4;switch(r.type){case"firstParty":return new $4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=E0.get(n);r&&(q("ComponentProvider","Removing Datastore"),E0.delete(n),r.terminate())}(this),Promise.resolve()}}function Y5(t,e,n,r={}){var i;const o=(t=Fx(t,zc))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Hu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=pt.MOCK_USER;else{l=yP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new pt(c)}t._authCredentials=new F4(new Z2(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pm(this.firestore,e,this._query)}}class qn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qn(this.firestore,e,this._key)}}class Dr extends Pm{constructor(e,n,r){super(e,n,m3(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qn(this.firestore,null,new Z(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function Vx(t,e,...n){if(t=fa(t),Mx("collection","path",e),t instanceof zc){const r=Fe.fromString(e,...n);return T0(r),new Dr(t,null,r)}{if(!(t instanceof qn||t instanceof Dr))throw new K(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return T0(r),new Dr(t.firestore,null,r)}}function X5(t,e,...n){if(t=fa(t),arguments.length===1&&(e=ex.newId()),Mx("doc","path",e),t instanceof zc){const r=Fe.fromString(e,...n);return b0(r),new qn(t,null,new Z(r))}{if(!(t instanceof qn||t instanceof Dr))throw new K(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return b0(r),new qn(t.firestore,t instanceof Dr?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J5{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Ax(this,"async_queue_retry"),this.Eu=()=>{const n=od();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=od();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=od();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new mi;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Oc(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw Ai("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Am.createAndSchedule(this,e,n,r,o=>this.Vu(o));return this.lu.push(i),i}du(){this.hu&&re()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class zx extends zc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new J5}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$x(this),this._firestoreClient.terminate()}}function Z5(t,e){const n=typeof t=="object"?t:S4(),r=typeof t=="string"?t:"(default)",i=x4(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=mP("firestore");o&&Y5(i,...o)}return i}function eR(t){return t._firestoreClient||$x(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $x(t){var e,n,r;const i=t._freezeSettings(),o=function(l,u,c,h){return new t3(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Lx(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new H5(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wa(Pn.fromBase64String(e))}catch(n){throw new K(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wa(Pn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=/^__.*__$/;class nR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oa(e,this.data,n,this.fieldTransforms)}}function Gx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Rm{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Rm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Zu(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Gx(this.wu)&&tR.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class rR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lc(e)}Nu(e,n,r,i=!1){return new Rm({wu:e,methodName:n,Ou:r,path:ot.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iR(t){const e=t._freezeSettings(),n=Lc(t._databaseId);return new rR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oR(t,e,n,r,i,o={}){const s=t.Nu(o.merge||o.mergeFields?2:0,e,n,i);Yx("Data must be an object, but it was:",s,r);const l=Qx(r,s);let u,c;if(o.merge)u=new hn(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const m of o.mergeFields){const g=sR(e,m,n);if(!s.contains(g))throw new K(z.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);uR(h,g)||h.push(g)}u=new hn(h),c=s.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=s.fieldTransforms;return new nR(new dn(l),u,c)}function qx(t,e){if(Kx(t=fa(t)))return Yx("Unsupported field value:",e,t),Qx(t,e);if(t instanceof Ux)return function(r,i){if(!Gx(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let u=qx(l,i.Fu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=fa(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return S3(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Ze.fromDate(r);return{timestampValue:qh(i.serializer,o)}}if(r instanceof Ze){const o=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qh(i.serializer,o)}}if(r instanceof Hx)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wa)return{bytesValue:F3(i.serializer,r._byteString)};if(r instanceof qn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Sx(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Wx)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return bm(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Cm(r)}`)}(t,e)}function Qx(t,e){const n={};return rx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ra(t,(r,i)=>{const o=qx(i,e.bu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function Kx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Hx||t instanceof wa||t instanceof qn||t instanceof Ux||t instanceof Wx)}function Yx(t,e,n){if(!Kx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Cm(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function sR(t,e,n){if((e=fa(e))instanceof Bx)return e._internalPath;if(typeof e=="string")return lR(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const aR=new RegExp("[~\\*/\\[\\]]");function lR(t,e,n){if(e.search(aR)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bx(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new K(z.INVALID_ARGUMENT,l+t+u)}function uR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function Xx(t,e){const n=Fx(t.firestore,zx),r=X5(t),i=cR(t.converter,e);return fR(n,[oR(iR(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Gn.exists(!1))]).then(()=>r)}function fR(t,e){return function(r,i){const o=new mi;return r.asyncQueue.enqueueAndForget(async()=>F5(await Q5(r),i,o)),o.promise}(eR(t),e)}(function(e,n=!0){(function(i){Bo=i})(T4),Uu(new da("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new zx(new V4(r.getProvider("auth-internal")),new U4(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qu(c.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),co(Zv,"4.7.0",e),co(Zv,"4.7.0","esm2017")})();const dR={apiKey:"AIzaSyBmR3GSVYkjoqB3abYYPo0NqhyDX-ILUKU",authDomain:"lead-generation-database.firebaseapp.com",projectId:"lead-generation-database",storageBucket:"lead-generation-database.appspot.com",messagingSenderId:"42227662086",appId:"1:42227662086:web:cc1043134a2cebdf66f287"},hR=U2(dR),Jx=Z5(hR),pR=()=>{const[t,e]=M.useState(""),n=l=>{e(l.target.value)},r=async l=>{l.preventDefault();try{const u=new Date().toISOString().split("T")[0],c=await Xx(Vx(Jx,"submissions"),{phone:t});console.log("Document written with ID: ",c.id),e("")}catch(u){console.error("Error adding document: ",u)}},i="+917645086121",o=encodeURIComponent("Hi, I was just checking out your website, and Im interested in learning more about your trading floor and live market sessions. Can you provide me with more details?"),s=`https://wa.me/${i}?text=${o}`;return d.jsxs(mR,{children:[d.jsx("section",{className:"contact-short","aria-labelledby":"contact-short-heading",children:d.jsxs("div",{className:"grid grid-two-column",children:[d.jsx("div",{className:"contact-text",children:d.jsx("h3",{id:"contact-short-heading",children:"Talk to us today"})}),d.jsx("div",{className:"contact-short-btn",children:d.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":"Contact us on WhatsApp",children:d.jsxs(gR,{children:[d.jsx($t,{icon:N2,className:"whatsapp-icon","aria-hidden":"true"}),d.jsx("span",{children:"Contact Us"})]})})})]})}),d.jsx("footer",{"aria-labelledby":"footer-heading",role:"contentinfo",children:d.jsxs("div",{className:"container grid grid-four-column",children:[d.jsxs("div",{className:"footer-about",children:[d.jsxs("h3",{id:"footer-heading",children:[d.jsx("span",{className:"stock",children:"Stock"})," ",d.jsx("span",{className:"archery",children:"Archery"})]}),d.jsx("a",{href:"/","aria-label":"Visit our homepage",children:d.jsx("p",{children:"Besides Babulal Sweets, Manik Sarkar Chowk, Adampur, Bhagalpur 812001, Bihar."})})]}),d.jsxs("div",{className:"footer-subscribe",children:[d.jsx("h3",{children:"Feel Free to Contact Us"}),d.jsxs("form",{onSubmit:r,"aria-labelledby":"subscribe-form-heading",children:[d.jsx("input",{id:"phone-input",name:"phone",type:"tel",required:!0,autoComplete:"off",placeholder:"Phone number",value:t,onChange:n}),d.jsx("input",{type:"submit",value:"Submit","aria-label":"Submit subscription form"})]})]}),d.jsxs("div",{className:"footer-social",children:[d.jsx("h3",{children:"Follow Us"}),d.jsxs("div",{className:"footer-social--icons",role:"list",children:[d.jsx("a",{href:"https://www.linkedin.com/company/stockarchery/",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on LinkedIn",children:d.jsx($t,{icon:hm,style:{color:"#0077b5"},className:"icons"})}),d.jsx("a",{href:"https://www.instagram.com/stock.archery/?hl=en",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Instagram",children:d.jsx($t,{icon:j2,style:{color:"#e1306c"},className:"icons"})}),d.jsx("a",{href:"https://www.youtube.com/@stock.archery",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on YouTube",children:d.jsx($t,{icon:iP,style:{color:"#ff0000"},className:"icons"})}),d.jsx("a",{href:"https://x.com/stockarchery",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Twitter",children:d.jsx($t,{icon:D2,style:{color:"#0077b5"},className:"icons"})})]})]}),d.jsxs("div",{className:"footer-contact",children:[d.jsx("h3",{children:"Call Us"}),d.jsx("a",{href:"tel:+919229102334","aria-label":"Call us at +91 9229102334",children:d.jsx("h3",{children:"+91 9229102334"})}),d.jsx("a",{href:"tel:+918252052601","aria-label":"Call us at +91 8252052601",children:d.jsx("h3",{children:"+91 8252052601"})})]})]})})]})},mR=Q.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: rgba(37, 37, 37, 255);
    border-radius: 2rem;
    border: 3px solid #febb12;
    box-shadow: ${({theme:t})=>t.colors.shadowSupport};
    transform: translateY(50%);

    .grid {
      display: grid;
      gap: 2rem;

      .contact-text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #febb12;
      }

      .contact-short-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          text-decoration: none; /* Remove underline from the link */
        }
      }
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: rgba(37, 37, 37, 255);

    h3 {
      color: ${({theme:t})=>t.colors.yellow};
      margin-bottom: 2.4rem;
      font-size: 2rem;
    }

    .stock {
      color: #ffffff; /* White color for Stock */
    }

    .archery {
      color: #febb12; /* Existing color for Archery */
    }

    p {
      color: #febb12;
      font-size: 1.5rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      .icons {
        font-size: 2.0rem;
        color: inherit; /* Use color from parent element */
        cursor: pointer;
      }
    }

    .footer-subscribe {
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type="tel"] {
          width: 250px;
          padding: 0.75rem 1rem;
          border-radius: 1.5rem;
          border: 2px solid ${({theme:t})=>t.colors.yellow};
        }

        input[type="submit"] {
          width: 150px;
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
          border: 1px solid #febb12;
          background-color: #febb12;
          color: #000000;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: #e6c072;
            border-color: #febb12;
          }
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({theme:t})=>t.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .contact-short {
      max-width: 100%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .grid {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .contact-short-btn {
        margin-top: 2rem;
        justify-self: center;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`,gR=Q.button`
  background-color: #28a745; /* Green color */
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 1.5rem; /* Added border radius */

  .whatsapp-icon {
    font-size: 2rem; /* Size of the WhatsApp icon */
  }

  &:hover {
    background-color: #218838; /* Darker green on hover */
  }
`,Zx=Q.button`
  text-decoration: none;
  max-width: auto;
  background-color: #fdbe11;
  color: #252525;
  padding: 1.4rem 2.4rem;
  border-radius: 20px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
   box-shadow: 0 2rem 2rem 0 rgba(196, 143, 33, 0.3);

    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: #252525;
    font-size: 1.8rem;
    
  }
`,yR=(t,e)=>{switch(e.type){case"HOME_UPDATE":return{...t,name:e.payload.name,image:e.payload.image,paragraph:e.payload.paragraph};case"ABOUT_UPDATE":return{...t,name:e.payload.name,image:e.payload.image,paragraph:e.payload.paragraph};case"VIDEO_UPDATE":return{...t,name2:e.payload.name2,paragraph2:e.payload.paragraph2};case"GET_SERVICES":return{...t,services:e.payload};default:return t}},eE=de.createContext(),vR="https://backendapi-production-1726.up.railway.app/service",wR={name:"",image:"",paragraph:"",services:[]},_R=({children:t})=>{const[e,n]=M.useReducer(yR,wR),r=()=>n({type:"HOME_UPDATE",payload:{name:"STOCK ARCHERY",image:"./images/2.gif",paragraph:"Welcome to Stock Archery, your premier source for expert trading knowledge and strategies. Achieve trading success with our in-depth resources, tips, and insights tailored for savvy investors. Start mastering the market today"}}),i=()=>n({type:"ABOUT_UPDATE",payload:{name:"Bihar's First Trading Floor",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726054959/Screenshot__32_-removebg-preview_ahrfou.png",paragraph:"Introducing Stock Archery's  live trading classes—where education meets real-time trading. Gain hands-on experience and practical skills in our interactive sessions. Elevate your trading expertise with our unique, live-learning approach. Join now and experience the future of trading education"}}),o=()=>n({type:"VIDEO_UPDATE",payload:{name2:"STOCK ARCHERY",paragraph2:"First of its kind, we offer live trading classes where students can learn and trade in real-time. This unique approach combines education with practical trading experience, providing a hands-on learning environment."}}),s=async l=>{try{const u=await fetch(l);if(!u.ok)throw new Error(`HTTP error! Status: ${u.status}`);const c=await u.json();n({type:"GET_SERVICES",payload:c})}catch(u){console.error("Failed to fetch services:",u)}};return M.useEffect(()=>{s(vR)},[]),M.useEffect(()=>{o()},[]),d.jsx(eE.Provider,{value:{...e,updateHomePage:r,updateAboutPage:i,updateVideoPage:o},children:t})},$c=()=>M.useContext(eE);var Le={},Om={},Da={},La={},tE="Expected a function",k0=NaN,xR="[object Symbol]",ER=/^\s+|\s+$/g,bR=/^[-+]0x[0-9a-f]+$/i,TR=/^0b[01]+$/i,SR=/^0o[0-7]+$/i,kR=parseInt,IR=typeof rl=="object"&&rl&&rl.Object===Object&&rl,AR=typeof self=="object"&&self&&self.Object===Object&&self,CR=IR||AR||Function("return this")(),PR=Object.prototype,RR=PR.toString,OR=Math.max,jR=Math.min,ad=function(){return CR.Date.now()};function NR(t,e,n){var r,i,o,s,l,u,c=0,h=!1,m=!1,g=!0;if(typeof t!="function")throw new TypeError(tE);e=I0(e)||0,ec(n)&&(h=!!n.leading,m="maxWait"in n,o=m?OR(I0(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g);function b(N){var _=r,w=i;return r=i=void 0,c=N,s=t.apply(w,_),s}function I(N){return c=N,l=setTimeout(x,e),h?b(N):s}function C(N){var _=N-u,w=N-c,T=e-_;return m?jR(T,o-w):T}function R(N){var _=N-u,w=N-c;return u===void 0||_>=e||_<0||m&&w>=o}function x(){var N=ad();if(R(N))return v(N);l=setTimeout(x,C(N))}function v(N){return l=void 0,g&&r?b(N):(r=i=void 0,s)}function E(){l!==void 0&&clearTimeout(l),c=0,r=u=i=l=void 0}function P(){return l===void 0?s:v(ad())}function L(){var N=ad(),_=R(N);if(r=arguments,i=this,u=N,_){if(l===void 0)return I(u);if(m)return l=setTimeout(x,e),b(u)}return l===void 0&&(l=setTimeout(x,e)),s}return L.cancel=E,L.flush=P,L}function DR(t,e,n){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(tE);return ec(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),NR(t,e,{leading:r,maxWait:e,trailing:i})}function ec(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function LR(t){return!!t&&typeof t=="object"}function MR(t){return typeof t=="symbol"||LR(t)&&RR.call(t)==xR}function I0(t){if(typeof t=="number")return t;if(MR(t))return k0;if(ec(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ec(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(ER,"");var n=TR.test(t);return n||SR.test(t)?kR(t.slice(2),n?2:8):bR.test(t)?k0:+t}var FR=DR,Ma={};Object.defineProperty(Ma,"__esModule",{value:!0});Ma.addPassiveEventListener=function(e,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),nu.has(n)||nu.set(n,new Set);var o=nu.get(n);if(!o.has(i)){var s=function(){var l=!1;try{var u=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,u)}catch{}return l}();e.addEventListener(n,r,s?{passive:!0}:!1),o.add(i)}};Ma.removePassiveEventListener=function(e,n,r){e.removeEventListener(n,r),nu.get(n).delete(r.name||n)};var nu=new Map;Object.defineProperty(La,"__esModule",{value:!0});var VR=FR,zR=BR(VR),$R=Ma;function BR(t){return t&&t.__esModule?t:{default:t}}var UR=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,zR.default)(e,n)},Ae={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var r=UR(function(i){Ae.scrollHandler(e)},n);Ae.scrollSpyContainers.push(e),(0,$R.addPassiveEventListener)(e,"scroll",r)}},isMounted:function(e){return Ae.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=Ae.scrollSpyContainers[Ae.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(r){return r(Ae.currentPositionX(e),Ae.currentPositionY(e))})},addStateHandler:function(e){Ae.spySetState.push(e)},addSpyHandler:function(e,n){var r=Ae.scrollSpyContainers[Ae.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(e),e(Ae.currentPositionX(n),Ae.currentPositionY(n))},updateStates:function(){Ae.spySetState.forEach(function(e){return e()})},unmount:function(e,n){Ae.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Ae.spySetState&&Ae.spySetState.length&&Ae.spySetState.indexOf(e)>-1&&Ae.spySetState.splice(Ae.spySetState.indexOf(e),1),document.removeEventListener("scroll",Ae.scrollHandler)},update:function(){return Ae.scrollSpyContainers.forEach(function(e){return Ae.scrollHandler(e)})}};La.default=Ae;var Ho={},Fa={};Object.defineProperty(Fa,"__esModule",{value:!0});var HR=function(e,n){var r=e.indexOf("#")===0?e.substring(1):e,i=r?"#"+r:"",o=window&&window.location,s=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",s):history.replaceState(history.state,"",s)},WR=function(){return window.location.hash.replace(/^#/,"")},GR=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},qR=function(e){return getComputedStyle(e).position!=="static"},ld=function(e,n){for(var r=e.offsetTop,i=e.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},QR=function(e,n,r){if(r)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(qR(e)){if(n.offsetParent!==e){var i=function(h){return h===e||h===document},o=ld(n,i),s=o.offsetTop,l=o.offsetParent;if(l!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return s}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var u=function(h){return h===document};return ld(n,u).offsetTop-ld(e,u).offsetTop};Fa.default={updateHash:HR,getHash:WR,filterElementInContainer:GR,scrollOffset:QR};var Bc={},jm={};Object.defineProperty(jm,"__esModule",{value:!0});jm.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var Nm={};Object.defineProperty(Nm,"__esModule",{value:!0});var KR=Ma,YR=["mousedown","mousewheel","touchmove","keydown"];Nm.default={subscribe:function(e){return typeof document<"u"&&YR.forEach(function(n){return(0,KR.addPassiveEventListener)(document,n,e)})}};var Va={};Object.defineProperty(Va,"__esModule",{value:!0});var Yh={registered:{},scrollEvent:{register:function(e,n){Yh.registered[e]=n},remove:function(e){Yh.registered[e]=null}}};Va.default=Yh;Object.defineProperty(Bc,"__esModule",{value:!0});var XR=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},JR=Fa;Uc(JR);var ZR=jm,A0=Uc(ZR),eO=Nm,tO=Uc(eO),nO=Va,bn=Uc(nO);function Uc(t){return t&&t.__esModule?t:{default:t}}var nE=function(e){return A0.default[e.smooth]||A0.default.defaultEasing},rO=function(e){return typeof e=="function"?e:function(){return e}},iO=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Xh=function(){return iO()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),rE=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},iE=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},oE=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},oO=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},sO=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},aO=function t(e,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){bn.default.registered.end&&bn.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=t.bind(null,e,n);Xh.call(window,o);return}bn.default.registered.end&&bn.default.registered.end(i.to,i.target,i.currentPosition)},Dm=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},za=function(e,n,r,i){n.data=n.data||rE(),window.clearTimeout(n.data.delayTimeout);var o=function(){n.data.cancel=!0};if(tO.default.subscribe(o),Dm(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?iE(n):oE(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){bn.default.registered.end&&bn.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=rO(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var s=nE(n),l=aO.bind(null,s,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){bn.default.registered.begin&&bn.default.registered.begin(n.data.to,n.data.target),Xh.call(window,l)},n.delay);return}bn.default.registered.begin&&bn.default.registered.begin(n.data.to,n.data.target),Xh.call(window,l)},Hc=function(e){return e=XR({},e),e.data=e.data||rE(),e.absolute=!0,e},lO=function(e){za(0,Hc(e))},uO=function(e,n){za(e,Hc(n))},cO=function(e){e=Hc(e),Dm(e),za(e.horizontal?oO(e):sO(e),e)},fO=function(e,n){n=Hc(n),Dm(n);var r=n.horizontal?iE(n):oE(n);za(e+r,n)};Bc.default={animateTopScroll:za,getAnimationType:nE,scrollToTop:lO,scrollToBottom:cO,scrollTo:uO,scrollMore:fO};Object.defineProperty(Ho,"__esModule",{value:!0});var dO=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hO=Fa,pO=Lm(hO),mO=Bc,gO=Lm(mO),yO=Va,Cl=Lm(yO);function Lm(t){return t&&t.__esModule?t:{default:t}}var Pl={},C0=void 0;Ho.default={unmount:function(){Pl={}},register:function(e,n){Pl[e]=n},unregister:function(e){delete Pl[e]},get:function(e){return Pl[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return C0=e},getActiveLink:function(){return C0},scrollTo:function(e,n){var r=this.get(e);if(!r){console.warn("target Element not found");return}n=dO({},n,{absolute:!1});var i=n.containerId,o=n.container,s=void 0;i?s=document.getElementById(i):o&&o.nodeType?s=o:s=document,n.absolute=!0;var l=n.horizontal,u=pO.default.scrollOffset(s,r,l)+(n.offset||0);if(!n.smooth){Cl.default.registered.begin&&Cl.default.registered.begin(e,r),s===document?n.horizontal?window.scrollTo(u,0):window.scrollTo(0,u):s.scrollTop=u,Cl.default.registered.end&&Cl.default.registered.end(e,r);return}gO.default.animateTopScroll(u,n,e,r)}};var Wc={};Object.defineProperty(Wc,"__esModule",{value:!0});var vO=Fa,ud=wO(vO);function wO(t){return t&&t.__esModule?t:{default:t}}var _O={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var r=this.scroller,i=r.get(e);if(i&&(n||e!==r.getActiveLink())){var o=this.containers[e]||document;r.scrollTo(e,{container:o})}},getHash:function(){return ud.default.getHash()},changeHash:function(e,n){this.isInitialized()&&ud.default.getHash()!==e&&ud.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Wc.default=_O;Object.defineProperty(Da,"__esModule",{value:!0});var Rl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xO=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),EO=M,P0=$a(EO),bO=La,Ol=$a(bO),TO=Ho,SO=$a(TO),kO=Pa,be=$a(kO),IO=Wc,cr=$a(IO);function $a(t){return t&&t.__esModule?t:{default:t}}function AO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function CO(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function PO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var R0={to:be.default.string.isRequired,containerId:be.default.string,container:be.default.object,activeClass:be.default.string,activeStyle:be.default.object,spy:be.default.bool,horizontal:be.default.bool,smooth:be.default.oneOfType([be.default.bool,be.default.string]),offset:be.default.number,delay:be.default.number,isDynamic:be.default.bool,onClick:be.default.func,duration:be.default.oneOfType([be.default.number,be.default.func]),absolute:be.default.bool,onSetActive:be.default.func,onSetInactive:be.default.func,ignoreCancelEvents:be.default.bool,hashSpy:be.default.bool,saveHashHistory:be.default.bool,spyThrottle:be.default.number};Da.default=function(t,e){var n=e||SO.default,r=function(o){PO(s,o);function s(l){AO(this,s);var u=CO(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return i.call(u),u.state={active:!1},u}return xO(s,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u&&!c?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Ol.default.isMounted(u)||Ol.default.mount(u,this.props.spyThrottle),this.props.hashSpy&&(cr.default.isMounted()||cr.default.mount(n),cr.default.mapContainer(this.props.to,u)),Ol.default.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Ol.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c={};this.state&&this.state.active?c=Rl({},this.props.style,this.props.activeStyle):c=Rl({},this.props.style);var h=Rl({},this.props);for(var m in R0)h.hasOwnProperty(m)&&delete h[m];return h.className=u,h.style=c,h.onClick=this.handleClick,P0.default.createElement(t,h)}}]),s}(P0.default.PureComponent),i=function(){var s=this;this.scrollTo=function(l,u){n.scrollTo(l,Rl({},s.state,u))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.spyHandler=function(l,u){var c=s.getScrollSpyContainer();if(!(cr.default.isMounted()&&!cr.default.isInitialized())){var h=s.props.horizontal,m=s.props.to,g=null,b=void 0,I=void 0;if(h){var C=0,R=0,x=0;if(c.getBoundingClientRect){var v=c.getBoundingClientRect();x=v.left}if(!g||s.props.isDynamic){if(g=n.get(m),!g)return;var E=g.getBoundingClientRect();C=E.left-x+l,R=C+E.width}var P=l-s.props.offset;b=P>=Math.floor(C)&&P<Math.floor(R),I=P<Math.floor(C)||P>=Math.floor(R)}else{var L=0,N=0,_=0;if(c.getBoundingClientRect){var w=c.getBoundingClientRect();_=w.top}if(!g||s.props.isDynamic){if(g=n.get(m),!g)return;var T=g.getBoundingClientRect();L=T.top-_+u,N=L+T.height}var S=u-s.props.offset;b=S>=Math.floor(L)&&S<Math.floor(N),I=S<Math.floor(L)||S>=Math.floor(N)}var A=n.getActiveLink();if(I){if(m===A&&n.setActiveLink(void 0),s.props.hashSpy&&cr.default.getHash()===m){var O=s.props.saveHashHistory,k=O===void 0?!1:O;cr.default.changeHash("",k)}s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive(m,g))}if(b&&(A!==m||s.state.active===!1)){n.setActiveLink(m);var et=s.props.saveHashHistory,on=et===void 0?!1:et;s.props.hashSpy&&cr.default.changeHash(m,on),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(m,g))}}}};return r.propTypes=R0,r.defaultProps={offset:0},r};Object.defineProperty(Om,"__esModule",{value:!0});var RO=M,O0=sE(RO),OO=Da,jO=sE(OO);function sE(t){return t&&t.__esModule?t:{default:t}}function NO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j0(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function DO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var LO=function(t){DO(e,t);function e(){var n,r,i,o;NO(this,e);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return o=(r=(i=j0(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),i),i.render=function(){return O0.default.createElement("a",i.props,i.props.children)},r),j0(i,o)}return e}(O0.default.Component);Om.default=(0,jO.default)(LO);var Mm={};Object.defineProperty(Mm,"__esModule",{value:!0});var MO=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),FO=M,N0=aE(FO),VO=Da,zO=aE(VO);function aE(t){return t&&t.__esModule?t:{default:t}}function $O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function BO(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function UO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var HO=function(t){UO(e,t);function e(){return $O(this,e),BO(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return MO(e,[{key:"render",value:function(){return N0.default.createElement("button",this.props,this.props.children)}}]),e}(N0.default.Component);Mm.default=(0,zO.default)(HO);var Fm={},Gc={};Object.defineProperty(Gc,"__esModule",{value:!0});var WO=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},GO=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),qO=M,D0=qc(qO),QO=c_;qc(QO);var KO=Ho,L0=qc(KO),YO=Pa,M0=qc(YO);function qc(t){return t&&t.__esModule?t:{default:t}}function XO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function JO(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function ZO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Gc.default=function(t){var e=function(n){ZO(r,n);function r(i){XO(this,r);var o=JO(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return GO(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;L0.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){L0.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return D0.default.createElement(t,WO({},this.props,{parentBindings:this.childBindings}))}}]),r}(D0.default.Component);return e.propTypes={name:M0.default.string,id:M0.default.string},e};Object.defineProperty(Fm,"__esModule",{value:!0});var F0=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ej=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),tj=M,V0=Vm(tj),nj=Gc,rj=Vm(nj),ij=Pa,z0=Vm(ij);function Vm(t){return t&&t.__esModule?t:{default:t}}function oj(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function sj(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function aj(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var lE=function(t){aj(e,t);function e(){return oj(this,e),sj(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return ej(e,[{key:"render",value:function(){var r=this,i=F0({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,V0.default.createElement("div",F0({},i,{ref:function(s){r.props.parentBindings.domNode=s}}),this.props.children)}}]),e}(V0.default.Component);lE.propTypes={name:z0.default.string,id:z0.default.string};Fm.default=(0,rj.default)(lE);var cd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$0=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function B0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U0(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function H0(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var jl=M,ei=La,fd=Ho,Ce=Pa,fr=Wc,W0={to:Ce.string.isRequired,containerId:Ce.string,container:Ce.object,activeClass:Ce.string,spy:Ce.bool,smooth:Ce.oneOfType([Ce.bool,Ce.string]),offset:Ce.number,delay:Ce.number,isDynamic:Ce.bool,onClick:Ce.func,duration:Ce.oneOfType([Ce.number,Ce.func]),absolute:Ce.bool,onSetActive:Ce.func,onSetInactive:Ce.func,ignoreCancelEvents:Ce.bool,hashSpy:Ce.bool,spyThrottle:Ce.number},lj={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||fd,i=function(s){H0(l,s);function l(u){B0(this,l);var c=U0(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,u));return o.call(c),c.state={active:!1},c}return $0(l,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,h=this.props.container;return c?document.getElementById(c):h&&h.nodeType?h:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();ei.isMounted(c)||ei.mount(c,this.props.spyThrottle),this.props.hashSpy&&(fr.isMounted()||fr.mount(r),fr.mapContainer(this.props.to,c)),this.props.spy&&ei.addStateHandler(this.stateHandler),ei.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){ei.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var h=cd({},this.props);for(var m in W0)h.hasOwnProperty(m)&&delete h[m];return h.className=c,h.onClick=this.handleClick,jl.createElement(e,h)}}]),l}(jl.Component),o=function(){var l=this;this.scrollTo=function(u,c){r.scrollTo(u,cd({},l.state,c))},this.handleClick=function(u){l.props.onClick&&l.props.onClick(u),u.stopPropagation&&u.stopPropagation(),u.preventDefault&&u.preventDefault(),l.scrollTo(l.props.to,l.props)},this.stateHandler=function(){r.getActiveLink()!==l.props.to&&(l.state!==null&&l.state.active&&l.props.onSetInactive&&l.props.onSetInactive(),l.setState({active:!1}))},this.spyHandler=function(u){var c=l.getScrollSpyContainer();if(!(fr.isMounted()&&!fr.isInitialized())){var h=l.props.to,m=null,g=0,b=0,I=0;if(c.getBoundingClientRect){var C=c.getBoundingClientRect();I=C.top}if(!m||l.props.isDynamic){if(m=r.get(h),!m)return;var R=m.getBoundingClientRect();g=R.top-I+u,b=g+R.height}var x=u-l.props.offset,v=x>=Math.floor(g)&&x<Math.floor(b),E=x<Math.floor(g)||x>=Math.floor(b),P=r.getActiveLink();if(E)return h===P&&r.setActiveLink(void 0),l.props.hashSpy&&fr.getHash()===h&&fr.changeHash(),l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive()),ei.updateStates();if(v&&P!==h)return r.setActiveLink(h),l.props.hashSpy&&fr.changeHash(h),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(h)),ei.updateStates()}}};return i.propTypes=W0,i.defaultProps={offset:0},i},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){H0(i,r);function i(o){B0(this,i);var s=U0(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return s.childBindings={domNode:null},s}return $0(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;fd.unregister(this.props.name)}},{key:"registerElems",value:function(s){fd.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return jl.createElement(e,cd({},this.props,{parentBindings:this.childBindings}))}}]),i}(jl.Component);return n.propTypes={name:Ce.string,id:Ce.string},n}},uj=lj;Object.defineProperty(Le,"__esModule",{value:!0});Le.Helpers=Le.ScrollElement=Le.ScrollLink=Le.animateScroll=Le.scrollSpy=Le.Events=Le.scroller=Le.Element=Le.Button=wE=Le.Link=void 0;var cj=Om,uE=On(cj),fj=Mm,cE=On(fj),dj=Fm,fE=On(dj),hj=Ho,dE=On(hj),pj=Va,hE=On(pj),mj=La,pE=On(mj),gj=Bc,mE=On(gj),yj=Da,gE=On(yj),vj=Gc,yE=On(vj),wj=uj,vE=On(wj);function On(t){return t&&t.__esModule?t:{default:t}}var wE=Le.Link=uE.default;Le.Button=cE.default;Le.Element=fE.default;Le.scroller=dE.default;Le.Events=hE.default;Le.scrollSpy=pE.default;Le.animateScroll=mE.default;Le.ScrollLink=gE.default;Le.ScrollElement=yE.default;Le.Helpers=vE.default;Le.default={Link:uE.default,Button:cE.default,Element:fE.default,scroller:dE.default,Events:hE.default,scrollSpy:pE.default,animateScroll:mE.default,ScrollLink:gE.default,ScrollElement:yE.default,Helpers:vE.default};const _j=()=>{const{image:t,paragraph:e}=$c();return d.jsx(xj,{children:d.jsxs("div",{className:"container grid grid-two-column",children:[d.jsxs("div",{className:"section-hero-data",role:"banner","aria-labelledby":"hero-heading",children:[d.jsxs("h1",{id:"hero-heading",className:"hero-heading",children:[d.jsx("span",{className:"stock",children:"Stock"})," ",d.jsx("span",{className:"archery",children:"Archery"})]}),d.jsx("p",{className:"hero-para",children:e}),d.jsx(wE,{to:"sections-page",smooth:!0,duration:500,"aria-label":"Learn more about our services",children:d.jsx(Zx,{className:"btn hireme-btn",children:"Know more"})})]}),d.jsxs("div",{className:"section-hero-image",role:"figure","aria-labelledby":"hero-image-caption",children:[d.jsx("picture",{children:d.jsx("img",{src:t,alt:"Hero illustration showing archery",className:"hero-img"})}),d.jsx("figcaption",{id:"hero-image-caption",className:"sr-only",children:"Hero illustration showing archery equipment and practice."})]})]})})},xj=Q.section`
  padding: 9rem 0;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }

  .btn {
    max-width: 16rem;
    background-color: #febb12;
    border: none;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #fdd788; /* Slightly lighter on hover */
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .stock {
    color: white; /* White color for "Stock" */
  }

  .archery {
    color: #febb12; /* Original color for "Archery" */
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #FDD788;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  picture {
    text-align: center;
    width: 100%;
  }

  .hero-img {
    max-width: 100%;
  }

  /* Optional: Adding a gradient overlay */
  .section-hero-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(37, 37, 37, 0.4), rgba(37, 37, 37, 0.1));
    border-radius: 15px; /* Match the image border radius */
    z-index: 0;
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .grid {
      gap: 7.2rem;
      grid-template-columns: 1fr; /* Stack items vertically on small screens */
    }
  }
`,Ej=Q.div`
  display: flex;
  background-color: rgba(37, 37, 37, 1);
  color: #febb12;
  padding: 20px;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,bj=Q.div`
  flex: 1;
  background-color: #333;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  

  iframe {
    width: 100%;
    height: 325px;
    border: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`,Tj=Q.div`
  flex: 1;
  padding: 0; /* Explicitly remove padding */
  margin: 0; /* Explicitly remove margin */

  h2 {
    font-size: 4rem;
    color: #fff;
    margin: none; /* Remove margin */
    padding: none; /* Remove padding */
    
    
    span {
      color: #febb12;
    }
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
    color: #FDD788;
   margin: 40px 0 0; 
    padding: 0; /* Remove padding */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,_E=()=>d.jsxs(Ej,{children:[d.jsx(bj,{children:d.jsx("iframe",{src:"https://www.youtube.com/embed/6CdNjMRb9NE",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),d.jsxs(Tj,{children:[d.jsxs("h2",{children:["Bihar's ",d.jsx("span",{children:"First"})," Trading ",d.jsx("span",{children:"Floor"})]}),d.jsx("p",{children:"Experience Bihar’s premier stock market institute where education meets action. Our live trading classes allow students to learn and trade simultaneously in a real market setting. Gain hands-on experience, guided by expert mentors, and master strategies that work. Join us and elevate your trading skills with real-time practice."})]})]}),Sj=Q.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  max-width: calc(33.333% - 20px);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 8%;
    right: 0;
    width: 0.5px;
    height: 90%;
    background-color: #febb12;
    display: block;
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;

    &::after {
      display: none;
    }
  }
`,kj=Q.img`
  border-radius: 10px;
  width: 180px;  /* Fixed width */
  height: 160px; /* Fixed height */
  object-fit: cover; /* Ensures image covers the entire container without distortion */
  margin-bottom: 10px;
  background: #e0e0e0; /* Placeholder color */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.loaded {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 80%;  /* Adjust width for smaller screens */
    height: auto; /* Maintain aspect ratio */
  }
`,Ij=Q.h2`
  margin: 10px 0;
  font-size: 18px;
  color: #febb12;
`,Aj=Q.p`
  font-size: 14px;
  color: #FDD788;
`,Cj=Q.hr`
  border: none;
  border-top: 1px solid #febb12;
  margin: 20px 0;
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,Vi=({image:t,heading:e,text:n})=>{const[r,i]=M.useState(!1),o=()=>{i(!0)};return d.jsxs(d.Fragment,{children:[d.jsxs(Sj,{children:[d.jsx(kj,{src:t,alt:e,onLoad:o,className:r?"loaded":""}),d.jsx(Ij,{children:e}),d.jsx(Aj,{children:n})]}),d.jsx(Cj,{})]})},Pj=Q.div`
  padding: 20px;
  background-color: rgba(37, 37, 37, 1);
`,Rj=Q.h1`
  text-align: center;
  font-size: 50px;
  color: #febb12;
  margin-bottom: 40px;

  span {
    color: #fff;
  }
`,G0=Q.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,xE=()=>d.jsxs(Pj,{id:"sections-page",children:[d.jsxs(Rj,{children:[d.jsx("span",{children:"Our"})," Services"]}),d.jsxs(M.Suspense,{fallback:d.jsx("div",{children:"Loading..."}),children:[d.jsxs(G0,{children:[d.jsx(Vi,{image:"/data/1.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Bihar’s First Live Trading Institute"})}),text:"The only institute in Bihar offering real-time trading classes, setting a new standard for stock market education."}),d.jsx(Vi,{image:"/data/1.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Learn and Trade Simultaneously"})}),text:"Students gain hands-on experience by learning and trading in a live market environment."}),d.jsx(Vi,{image:"/data/1.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Expert Mentor Guidance"})}),text:"Benefit from personalized instruction and proven strategies from seasoned trading professionals."})]}),d.jsxs(G0,{children:[d.jsx(Vi,{image:"/data/1.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Real-Time Market Exposure"})}),text:"Develop practical trading skills with immediate application in the live market."}),d.jsx(Vi,{image:"/data/1.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Comprehensive Trading Experience"})}),text:"A unique blend of theoretical knowledge and practical execution, ensuring well-rounded trading expertise."}),d.jsx(Vi,{image:"/data/1.jpg",heading:d.jsx(d.Fragment,{children:d.jsx("strong",{children:"Interactive Learning Environment"})}),text:"Engage in an energetic and collaborative setting where real-time discussions and peer interactions enhance the learning experience."})]})]})]}),Oj=()=>{const{updateHomePage:t}=$c();return M.useEffect(()=>t(),[]),d.jsxs(d.Fragment,{children:[d.jsx(_j,{}),d.jsx(_E,{}),d.jsx(xE,{})]})},EE=()=>{const{image:t,paragraph:e}=$c();return d.jsx(jj,{children:d.jsxs("div",{className:"container grid grid-two-column",children:[d.jsxs("div",{className:"section-hero-data",children:[d.jsxs("h1",{className:"hero-heading",children:[d.jsx("span",{className:"stock",children:"Stock"})," ",d.jsx("span",{className:"archery",children:"Archery"})]}),d.jsx("p",{className:"hero-para",children:e}),d.jsx(gr,{to:"/content","aria-label":"Learn more about Stock Archery",children:d.jsx(Zx,{className:"btn hireme-btn",children:"Know more"})})]}),d.jsx("div",{className:"section-hero-image",children:d.jsx("picture",{children:d.jsx("img",{src:t,alt:"Stock Archery promotional image",className:"hero-img"})})})]})})},jj=Q.section`
  padding: 9rem 0;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }

  .btn {
    max-width: 16rem;
    background-color: #febb12;
    border: none;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #fdd788; /* Slightly lighter on hover */
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .stock {
    color: white; /* White color for "Stock" */
  }

  .archery {
    color: #febb12; /* Original color for "Archery" */
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #FDD788;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  picture {
    text-align: center;
    width: 100%;
  }

  .hero-img {
    max-width: 100%;
  }

  /* Optional: Adding a gradient overlay */
  .section-hero-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(37, 37, 37, 0.4), rgba(37, 37, 37, 0.1));
    border-radius: 15px; /* Match the image border radius */
    z-index: 0;
  }

  @media (max-width: ${({theme:t})=>t.media.mobile}) {
    .grid {
      gap: 7.2rem;
      grid-template-columns: 1fr; /* Stack items vertically on small screens */
    }
  }
`,Nj=Q.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #252525;
  gap: 40px;
`,Dj=Q.h1`
  color: #febb12;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;

  & span {
    color: #ffffff;
  }
`,bE=Q.div`
  display: flex;
  align-items: flex-start;
  padding: 30px;
  background-color: #252525;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Lj=Q.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 30px;
  border: 6px solid #4a90e2;
  transition: transform 0.3s ease;

  ${bE}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`,Mj=Q.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  @media (min-width: 769px) {
    text-align: left;
  }
`,Fj=Q.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #febb12;
  font-weight: bold;
`,Vj=Q.h4`
  font-size: 2rem;
  margin: 5px 0;
  color: #febb12;
  font-weight: 2000;
`,zj=Q.p`
  font-size: 1.5rem;
  color: #fdd788;
  margin: 10px 0;
  line-height: 1.6;
  max-width: 1500px;
`,$j=Q.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`,dd=Q.a`
  font-size: 1.8rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #8ebbf2;
    transform: scale(1.1);
  }
`,Bj=({name:t,subject:e,bio:n,image:r,linkedin:i,twitter:o,instagram:s})=>d.jsx("article",{children:d.jsxs(bE,{children:[d.jsx(Lj,{src:r,alt:`Portrait of ${t}`}),d.jsxs(Mj,{children:[d.jsx(Fj,{children:t}),d.jsx(Vj,{children:e}),d.jsx(zj,{children:n}),d.jsxs($j,{children:[i&&d.jsx(dd,{href:i,target:"_blank",rel:"noopener noreferrer","aria-label":`LinkedIn profile of ${t}`,children:d.jsx($t,{icon:hm,style:{color:"#0077b5"}})}),o&&d.jsx(dd,{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":`Twitter profile of ${t}`,children:d.jsx($t,{icon:D2,style:{color:"#000000"}})}),s&&d.jsx(dd,{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":`Instagram profile of ${t}`,children:d.jsx($t,{icon:j2,style:{color:"#e1306c"}})})]})]})]})}),Uj=()=>{const t=[{subject:"Prem Sandesh",bio:"With over eight years of experience in price action trading and a specialization in swing trades, I offer unparalleled expertise in market dynamics. My mission is to equip aspiring traders with essential insights and skills for confident, profitable market navigation. Discover comprehensive strategies and practical techniques tailored for success. Join me to enhance your trading skills and achieve remarkable results in the ever-evolving financial markets.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/t_Profile/v1726052942/Screenshot_30_fbcyw9.png",linkedin:"https://www.linkedin.com/in/prem-sandesh-b29927289/",twitter:"https://x.com/stockarchery",instagram:"https://www.instagram.com/stock.archery/"},{subject:"Kumar Ankit",bio:"Hello, I'm Kumar Ankit, your dedicated mentor—Certified Researcher, Trader, and Financial Advisor with nearly a decade of market experience. With my extensive expertise, I emphasize that mastering a single trading setup can lead to significant success in the stock market. My mission is to guide you in discovering that pivotal setup, ensuring you have the tools and knowledge needed to excel. Join me to unlock your trading potential and achieve financial success with proven strategies and personalized support. See you soon on your path to market mastery!",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/t_Profile/v1724152394/ankit_mwv8wb.png",linkedin:"https://www.linkedin.com/in/kumar-ankit-964823323/",twitter:"https://x.com/stockarchery",instagram:"https://www.instagram.com/stock.archery/"}];return d.jsxs(Nj,{children:[d.jsxs(Dj,{children:[d.jsx("span",{children:"Meet"})," Our Mentors"]}),t.map((e,n)=>d.jsx(Bj,{...e},n))]})},Hj=()=>{const{updateAboutPage:t}=$c();return M.useEffect(()=>{t()},[t]),d.jsxs("div",{children:[d.jsx(EE,{}),d.jsx(Uj,{})]})},Wj=()=>{M.useState({username:"",phonenumber:"",message:"",tradingExperience:"",city:"",occupation:""});const t=async n=>{n.preventDefault();const r=n.target,i={username:r.username.value,phonenumber:r.phonenumber.value,message:r.message.value,tradingExperience:r.tradingExperience.value,city:r.city.value,occupation:r.occupation.value};try{const o=new Date().toISOString().split("T")[0];await Xx(Vx(Jx,o),i),alert("Message sent successfully!")}catch(o){console.error("Error adding document: ",o),alert("Error sending message, please try again.")}r.reset()},e=Q.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        padding: 2rem;
        background-color: ${({theme:n})=>n.colors.background};
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: auto;
        align-items: center;
        justify-content: center;

        input,
        textarea {
          padding: 1rem;
          border: 1px solid ${({theme:n})=>n.colors.yellow};
          border-radius: 5px;
          font-size: 2rem;
          width: 100%;
          max-width: 100%;
        }

        textarea {
          resize: vertical;
          min-height: 200px;
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.3s;
          padding: 1rem;
          background-color: ${({theme:n})=>n.colors.yellow};
          color: #fff;
          border: 2px solid ${({theme:n})=>n.colors.yellow};
          font-size: 1.2rem;
          width: 100px;
          max-width: 200px;
          text-align: center;
          margin-top: 1rem;

          &:hover {
            background-color: ${({theme:n})=>n.colors.yellow};
            border: 2px solid ${({theme:n})=>n.colors.yellow};
            transform: scale(1.05);
          }
        }
      }
    }

    iframe {
      border: 0;
    }
  `;return d.jsxs(e,{children:[d.jsx("h2",{className:"common-heading",children:"Feel Free to Contact us"}),d.jsx("div",{className:"container",children:d.jsx("div",{className:"contact-form",children:d.jsxs("form",{onSubmit:t,className:"contact-inputs",children:[d.jsx("input",{type:"text",name:"username",placeholder:"Name",autoComplete:"off",required:!0}),d.jsx("input",{type:"tel",name:"phonenumber",placeholder:"Phone Number",autoComplete:"off",required:!0}),d.jsx("textarea",{name:"message",cols:"30",rows:"6",placeholder:"Your message",autoComplete:"off",required:!0}),d.jsx("input",{type:"submit",value:"Send"})]})})})]})},Gj=Q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(37, 37, 37, 255);
`,qj=Q.h1`
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
  color: #febb12;
  margin-top: 7px;
`,Qj=Q.div`
  overflow: hidden;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(37, 37, 37, 255);
  border-radius: 10px;
  padding: 20px;
`,Kj=Q.div`
  display: flex;
  transition: transform 1s ease-in-out;
`,Yj=Q.div`
  flex: 0 0 25%;
  max-width: 25%;
  height: 300px;
  background-color: #444;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  font-size: 16px;
  color: #febb12;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(37, 37, 37, 255);
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin: 10px 0;
  }
`,Xj=Q.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`,Jj=Q.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`,Zj=Q.div`
  text-align: center;
  font-size: 14px;
  color: #ccc;
`,e9=({name:t,review:e,imageSrc:n,onMouseEnter:r,onMouseLeave:i})=>d.jsxs(Yj,{onMouseEnter:r,onMouseLeave:i,"aria-labelledby":`card-name-${t}`,"aria-describedby":`card-review-${t}`,children:[d.jsx(Xj,{src:n,alt:`Review from ${t}`}),d.jsx(Jj,{id:`card-name-${t}`,children:t}),d.jsx(Zj,{id:`card-review-${t}`,children:e})]}),t9=()=>{const[t,e]=M.useState(0),[n,r]=M.useState(!1),i=M.useRef(null),o=[{name:"Manav Ranjan",review:'"Prem sir ka experience aur energetic class environment se maine live trading mein confidence paya. Standoff strategies bahut helpful hain."',imageSrc:"./images/Student1.jpg"},{name:"Shahwaz Alam",review:'"I learned so much about the stock market from Ankit Sir. His classes are clear and helpful. Highly recommended!"',imageSrc:"./images/student3.jpg"},{name:"Vaihavb",review:"Live market mein trading ka experience anokha tha. Ankit sir, Prem sir, aur Prabhas sir ke guidance meinmaine kaafi kuch seekha.",imageSrc:"./images/Student4.jpg"},{name:"Tripti Sharma",review:"I am thankful to have found Prem on Instagram, conducting live market classes from Bihar. Stock Archery real-time sessions are insightful and interactive, offering a thorough understanding of market dynamics.",imageSrc:"./images/student5.png"},{name:"Deepak Kumar",review:"Stock Archery ne mujhe trading ke basics aur advanced dono level pe mahir banaya. Bhagalpur jaise chote sheher mein aisa platform milna sach mein incredible ha",imageSrc:"./images/student6.png"}];M.useEffect(()=>{const c=()=>{if(i.current){const m=window.innerWidth<=768?i.current.clientWidth:i.current.clientWidth/4;i.current.style.transform=`translateX(-${t*m}px)`}};return window.addEventListener("resize",c),c(),()=>window.removeEventListener("resize",c)},[t]),M.useEffect(()=>{let c;return n||(c=setInterval(()=>{e(h=>(h+1)%o.length)},4e3)),()=>clearInterval(c)},[n,o.length]);const s=()=>{r(!0)},l=()=>{r(!1)},u=c=>{if(i.current){const m=window.innerWidth<=768?i.current.clientWidth:i.current.clientWidth/4,g=c.deltaY>0?1:-1;e(b=>{const I=(b+g+o.length)%o.length;return i.current.style.transform=`translateX(-${I*m}px)`,I}),c.preventDefault()}};return M.useEffect(()=>(i.current&&i.current.addEventListener("wheel",u),()=>{i.current&&i.current.removeEventListener("wheel",u)}),[]),d.jsxs(Gj,{children:[d.jsx(qj,{children:"Testimonials"}),d.jsx(Qj,{children:d.jsx(Kj,{ref:i,children:o.map((c,h)=>d.jsx(e9,{...c,onMouseEnter:s,onMouseLeave:l},h))})})]})};function n9(t){return Ia({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function r9(t){return Ia({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(t)}function i9(t){return Ia({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(t)}function o9(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var TE=M,s9=o9(TE);function q0(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a9(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var l9=!!(typeof window<"u"&&window.document&&window.document.createElement);function u9(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],l;function u(){l=t(s.map(function(h){return h.props})),c.canUseDOM?e(l):n&&(l=n(l))}var c=function(h){a9(m,h);function m(){return h.apply(this,arguments)||this}m.peek=function(){return l},m.rewind=function(){if(m.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var I=l;return l=void 0,s=[],I};var g=m.prototype;return g.UNSAFE_componentWillMount=function(){s.push(this),u()},g.componentDidUpdate=function(){u()},g.componentWillUnmount=function(){var I=s.indexOf(this);s.splice(I,1),u()},g.render=function(){return s9.createElement(o,this.props)},m}(TE.PureComponent);return q0(c,"displayName","SideEffect("+r(o)+")"),q0(c,"canUseDOM",l9),c}}var c9=u9;const f9=xa(c9);var d9=typeof Element<"u",h9=typeof Map=="function",p9=typeof Set=="function",m9=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ru(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!ru(t[r],e[r]))return!1;return!0}var o;if(h9&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;for(o=t.entries();!(r=o.next()).done;)if(!ru(r.value[1],e.get(r.value[0])))return!1;return!0}if(p9&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(m9&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(d9&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!ru(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var g9=function(e,n){try{return ru(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const y9=xa(g9);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Q0=Object.getOwnPropertySymbols,v9=Object.prototype.hasOwnProperty,w9=Object.prototype.propertyIsEnumerable;function _9(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function x9(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var E9=x9()?Object.assign:function(t,e){for(var n,r=_9(t),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)v9.call(n,s)&&(r[s]=n[s]);if(Q0){i=Q0(n);for(var l=0;l<i.length;l++)w9.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r};const b9=xa(E9);var yi={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},X={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(X).map(function(t){return X[t]});var Se={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},tc={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_a={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},T9=Object.keys(tc).reduce(function(t,e){return t[tc[e]]=e,t},{}),S9=[X.NOSCRIPT,X.SCRIPT,X.STYLE],pn="data-react-helmet",k9=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I9=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},A9=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},C9=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},K0=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},P9=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Jh=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},R9=function(e){var n=ho(e,X.TITLE),r=ho(e,_a.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=ho(e,_a.DEFAULT_TITLE);return n||i||void 0},O9=function(e){return ho(e,_a.ON_CHANGE_CLIENT_STATE)||function(){}},hd=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,i){return Ct({},r,i)},{})},j9=function(e,n){return n.filter(function(r){return typeof r[X.BASE]<"u"}).map(function(r){return r[X.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),s=0;s<o.length;s++){var l=o[s],u=l.toLowerCase();if(e.indexOf(u)!==-1&&i[u])return r.concat(i)}return r},[])},ms=function(e,n,r){var i={};return r.filter(function(o){return Array.isArray(o[e])?!0:(typeof o[e]<"u"&&M9("Helmet: "+e+' should be of type "Array". Instead found type "'+k9(o[e])+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,s){var l={};s.filter(function(g){for(var b=void 0,I=Object.keys(g),C=0;C<I.length;C++){var R=I[C],x=R.toLowerCase();n.indexOf(x)!==-1&&!(b===Se.REL&&g[b].toLowerCase()==="canonical")&&!(x===Se.REL&&g[x].toLowerCase()==="stylesheet")&&(b=x),n.indexOf(R)!==-1&&(R===Se.INNER_HTML||R===Se.CSS_TEXT||R===Se.ITEM_PROP)&&(b=R)}if(!b||!g[b])return!1;var v=g[b].toLowerCase();return i[b]||(i[b]={}),l[b]||(l[b]={}),i[b][v]?!1:(l[b][v]=!0,!0)}).reverse().forEach(function(g){return o.push(g)});for(var u=Object.keys(l),c=0;c<u.length;c++){var h=u[c],m=b9({},i[h],l[h]);i[h]=m}return o},[]).reverse()},ho=function(e,n){for(var r=e.length-1;r>=0;r--){var i=e[r];if(i.hasOwnProperty(n))return i[n]}return null},N9=function(e){return{baseTag:j9([Se.HREF,Se.TARGET],e),bodyAttributes:hd(yi.BODY,e),defer:ho(e,_a.DEFER),encode:ho(e,_a.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:hd(yi.HTML,e),linkTags:ms(X.LINK,[Se.REL,Se.HREF],e),metaTags:ms(X.META,[Se.NAME,Se.CHARSET,Se.HTTPEQUIV,Se.PROPERTY,Se.ITEM_PROP],e),noscriptTags:ms(X.NOSCRIPT,[Se.INNER_HTML],e),onChangeClientState:O9(e),scriptTags:ms(X.SCRIPT,[Se.SRC,Se.INNER_HTML],e),styleTags:ms(X.STYLE,[Se.CSS_TEXT],e),title:R9(e),titleAttributes:hd(yi.TITLE,e)}},Zh=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){Zh(e)},0)}}(),Y0=function(e){return clearTimeout(e)},D9=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Zh:global.requestAnimationFrame||Zh,L9=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Y0:global.cancelAnimationFrame||Y0,M9=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},gs=null,F9=function(e){gs&&L9(gs),e.defer?gs=D9(function(){X0(e,function(){gs=null})}):(X0(e),gs=null)},X0=function(e,n){var r=e.baseTag,i=e.bodyAttributes,o=e.htmlAttributes,s=e.linkTags,l=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,h=e.scriptTags,m=e.styleTags,g=e.title,b=e.titleAttributes;ep(X.BODY,i),ep(X.HTML,o),V9(g,b);var I={baseTag:zi(X.BASE,r),linkTags:zi(X.LINK,s),metaTags:zi(X.META,l),noscriptTags:zi(X.NOSCRIPT,u),scriptTags:zi(X.SCRIPT,h),styleTags:zi(X.STYLE,m)},C={},R={};Object.keys(I).forEach(function(x){var v=I[x],E=v.newTags,P=v.oldTags;E.length&&(C[x]=E),P.length&&(R[x]=I[x].oldTags)}),n&&n(),c(e,C,R)},SE=function(e){return Array.isArray(e)?e.join(""):e},V9=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=SE(e)),ep(X.TITLE,n)},ep=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var i=r.getAttribute(pn),o=i?i.split(","):[],s=[].concat(o),l=Object.keys(n),u=0;u<l.length;u++){var c=l[u],h=n[c]||"";r.getAttribute(c)!==h&&r.setAttribute(c,h),o.indexOf(c)===-1&&o.push(c);var m=s.indexOf(c);m!==-1&&s.splice(m,1)}for(var g=s.length-1;g>=0;g--)r.removeAttribute(s[g]);o.length===s.length?r.removeAttribute(pn):r.getAttribute(pn)!==l.join(",")&&r.setAttribute(pn,l.join(","))}},zi=function(e,n){var r=document.head||document.querySelector(X.HEAD),i=r.querySelectorAll(e+"["+pn+"]"),o=Array.prototype.slice.call(i),s=[],l=void 0;return n&&n.length&&n.forEach(function(u){var c=document.createElement(e);for(var h in u)if(u.hasOwnProperty(h))if(h===Se.INNER_HTML)c.innerHTML=u.innerHTML;else if(h===Se.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=u.cssText:c.appendChild(document.createTextNode(u.cssText));else{var m=typeof u[h]>"u"?"":u[h];c.setAttribute(h,m)}c.setAttribute(pn,"true"),o.some(function(g,b){return l=b,c.isEqualNode(g)})?o.splice(l,1):s.push(c)}),o.forEach(function(u){return u.parentNode.removeChild(u)}),s.forEach(function(u){return r.appendChild(u)}),{oldTags:o,newTags:s}},kE=function(e){return Object.keys(e).reduce(function(n,r){var i=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+i:i},"")},z9=function(e,n,r,i){var o=kE(r),s=SE(n);return o?"<"+e+" "+pn+'="true" '+o+">"+Jh(s,i)+"</"+e+">":"<"+e+" "+pn+'="true">'+Jh(s,i)+"</"+e+">"},$9=function(e,n,r){return n.reduce(function(i,o){var s=Object.keys(o).filter(function(c){return!(c===Se.INNER_HTML||c===Se.CSS_TEXT)}).reduce(function(c,h){var m=typeof o[h]>"u"?h:h+'="'+Jh(o[h],r)+'"';return c?c+" "+m:m},""),l=o.innerHTML||o.cssText||"",u=S9.indexOf(e)===-1;return i+"<"+e+" "+pn+'="true" '+s+(u?"/>":">"+l+"</"+e+">")},"")},IE=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[tc[i]||i]=e[i],r},n)},B9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,i){return r[T9[i]||i]=e[i],r},n)},U9=function(e,n,r){var i,o=(i={key:n},i[pn]=!0,i),s=IE(r,o);return[de.createElement(X.TITLE,s,n)]},H9=function(e,n){return n.map(function(r,i){var o,s=(o={key:i},o[pn]=!0,o);return Object.keys(r).forEach(function(l){var u=tc[l]||l;if(u===Se.INNER_HTML||u===Se.CSS_TEXT){var c=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[u]=r[l]}),de.createElement(e,s)})},Mn=function(e,n,r){switch(e){case X.TITLE:return{toComponent:function(){return U9(e,n.title,n.titleAttributes)},toString:function(){return z9(e,n.title,n.titleAttributes,r)}};case yi.BODY:case yi.HTML:return{toComponent:function(){return IE(n)},toString:function(){return kE(n)}};default:return{toComponent:function(){return H9(e,n)},toString:function(){return $9(e,n,r)}}}},AE=function(e){var n=e.baseTag,r=e.bodyAttributes,i=e.encode,o=e.htmlAttributes,s=e.linkTags,l=e.metaTags,u=e.noscriptTags,c=e.scriptTags,h=e.styleTags,m=e.title,g=m===void 0?"":m,b=e.titleAttributes;return{base:Mn(X.BASE,n,i),bodyAttributes:Mn(yi.BODY,r,i),htmlAttributes:Mn(yi.HTML,o,i),link:Mn(X.LINK,s,i),meta:Mn(X.META,l,i),noscript:Mn(X.NOSCRIPT,u,i),script:Mn(X.SCRIPT,c,i),style:Mn(X.STYLE,h,i),title:Mn(X.TITLE,{title:g,titleAttributes:b},i)}},W9=function(e){var n,r;return r=n=function(i){C9(o,i);function o(){return I9(this,o),P9(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(l){return!y9(this.props,l)},o.prototype.mapNestedChildrenToProps=function(l,u){if(!u)return null;switch(l.type){case X.SCRIPT:case X.NOSCRIPT:return{innerHTML:u};case X.STYLE:return{cssText:u}}throw new Error("<"+l.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(l){var u,c=l.child,h=l.arrayTypeChildren,m=l.newChildProps,g=l.nestedChildren;return Ct({},h,(u={},u[c.type]=[].concat(h[c.type]||[],[Ct({},m,this.mapNestedChildrenToProps(c,g))]),u))},o.prototype.mapObjectTypeChildren=function(l){var u,c,h=l.child,m=l.newProps,g=l.newChildProps,b=l.nestedChildren;switch(h.type){case X.TITLE:return Ct({},m,(u={},u[h.type]=b,u.titleAttributes=Ct({},g),u));case X.BODY:return Ct({},m,{bodyAttributes:Ct({},g)});case X.HTML:return Ct({},m,{htmlAttributes:Ct({},g)})}return Ct({},m,(c={},c[h.type]=Ct({},g),c))},o.prototype.mapArrayTypeChildrenToProps=function(l,u){var c=Ct({},u);return Object.keys(l).forEach(function(h){var m;c=Ct({},c,(m={},m[h]=l[h],m))}),c},o.prototype.warnOnInvalidChildren=function(l,u){return!0},o.prototype.mapChildrenToProps=function(l,u){var c=this,h={};return de.Children.forEach(l,function(m){if(!(!m||!m.props)){var g=m.props,b=g.children,I=K0(g,["children"]),C=B9(I);switch(c.warnOnInvalidChildren(m,b),m.type){case X.LINK:case X.META:case X.NOSCRIPT:case X.SCRIPT:case X.STYLE:h=c.flattenArrayTypeChildren({child:m,arrayTypeChildren:h,newChildProps:C,nestedChildren:b});break;default:u=c.mapObjectTypeChildren({child:m,newProps:u,newChildProps:C,nestedChildren:b});break}}}),u=this.mapArrayTypeChildrenToProps(h,u),u},o.prototype.render=function(){var l=this.props,u=l.children,c=K0(l,["children"]),h=Ct({},c);return u&&(h=this.mapChildrenToProps(u,h)),de.createElement(e,h)},A9(o,null,[{key:"canUseDOM",set:function(l){e.canUseDOM=l}}]),o}(de.Component),n.propTypes={base:W.object,bodyAttributes:W.object,children:W.oneOfType([W.arrayOf(W.node),W.node]),defaultTitle:W.string,defer:W.bool,encodeSpecialCharacters:W.bool,htmlAttributes:W.object,link:W.arrayOf(W.object),meta:W.arrayOf(W.object),noscript:W.arrayOf(W.object),onChangeClientState:W.func,script:W.arrayOf(W.object),style:W.arrayOf(W.object),title:W.string,titleAttributes:W.object,titleTemplate:W.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var i=e.rewind();return i||(i=AE({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},G9=function(){return null},q9=f9(N9,F9,AE)(G9),nc=W9(q9);nc.renderStatic=nc.rewind;const Q9=Q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(37, 37, 37, 1); /* Corrected RGBA value */
  color: #fff;
`,K9=Q.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #febb12;
`,Y9=Q.div`
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
`,X9=Q.div`
  background-color: #252525;
  border-radius: 15px; /* Rounded corners */
  border: 2px solid #ddd; /* Border around each question */
  padding: 15px 20px; /* Adjust padding */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-bottom: 20px; /* Space between FAQ items */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: shadow effect */
  display: flex;
  flex-direction: column;
`,J9=Q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Z9=Q.div`
  font-size: 1.9rem; /* Larger font size */
  font-weight: bold;
  color: #febb12;
  flex-grow: 1;
`,e6=Q.div`
  max-height: ${({isOpen:t})=>t?"300px":"0"};
  overflow: hidden;
  transition: max-height 0.6s ease, padding 0.6s ease;
  padding: ${({isOpen:t})=>t?"10px 0":"0"};
  font-size: 1.9rem; /* Larger font size for better readability */
  background-color: #252525;
  color: #fff;
`,t6=Q.div`
  transition: transform 0.3s ease;
  transform: ${({isOpen:t})=>t?"rotate(180deg)":"rotate(0)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.9rem; /* Adjust size if needed */
  color: #febb12; /* Yellow color for the arrow */
`,n6=()=>{const[t,e]=M.useState(null),n=i=>{e(t===i?null:i)},r=[{question:"Whom is this training suitable for ?",answer:"Anyone intrested in learning stock market from scratch is welcome to join the course."},{question:"Is laptop mandatory to attend the training ?",answer:"No, a laptop is not mandatory to attend the training. However, having a laptop is highly recommended as it enhances your learning experience."},{question:"Do I need to pay entire fees at once ?",answer:"Yes, you need to pay the entire fees at once."},{question:"How long will this training last ?",answer:"The training duration is of 2 months, excluding weekends, with one year of handholding support."},{question:"Will I be able to trade independently after this training ends ?",answer:"Absolutely Yes, many individuals successfully pursue trading as a full-time career after this course."},{question:"Will I receive a certificate of course completion ?",answer:"Yes, you will."}];return d.jsxs(Q9,{children:[d.jsxs(nc,{children:[d.jsx("title",{children:"Frequently Asked Questions | Stock Archery"}),d.jsx("meta",{name:"description",content:"Find answers to common questions about our capital markets training, including suitability, laptop requirements, fees, training duration, certification, and more."}),d.jsx("meta",{name:"keywords",content:"FAQ, capital markets training, Stock Archery, trading education, financial markets, trading course, stock market questions"}),d.jsx("meta",{property:"og:title",content:"Frequently Asked Questions | Stock Archery"}),d.jsx("meta",{property:"og:description",content:"Find answers to common questions about our capital markets training, including suitability, laptop requirements, fees, training duration, certification, and more."}),d.jsx("meta",{property:"og:image",content:"./images/faq-image.svg"}),d.jsx("meta",{property:"og:url",content:"https://www.stockarchery.com/faq"})]}),d.jsx(K9,{children:"Frequently Asked Questions"}),d.jsx(Y9,{children:r.map((i,o)=>d.jsxs(X9,{onClick:()=>n(o),role:"button","aria-expanded":t===o,"aria-controls":`answer-${o}`,tabIndex:"0",children:[d.jsxs(J9,{children:[d.jsx(Z9,{children:i.question}),d.jsx(t6,{isOpen:t===o,children:t===o?d.jsx(i9,{}):d.jsx(r9,{})})]}),d.jsx(e6,{id:`answer-${o}`,isOpen:t===o,children:i.answer})]},o))})]})},r6=Q.button`
  display: flex;
  align-items: center;
  background-color: green;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d00; /* Darker green on hover */
  }

  svg {
    margin-right: 8px;
  }
`,i6=Q(r6)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Ensures the button is above other elements */
`,o6=()=>{const t=()=>{const r=`https://wa.me/+917645086121?text=${encodeURIComponent("Hi, I was just checking out your website, and Im interested in learning more about your trading floor and live market sessions. Can you provide me with more details?")}`;window.open(r,"_blank")};return d.jsxs(i6,{onClick:t,children:[d.jsx(n9,{}),"Contact Us"]})},s6=()=>{const[t,e]=M.useState(null),[n,r]=M.useState(window.innerWidth<=768);M.useEffect(()=>{const N=()=>{r(window.innerWidth<=768)};return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]);const i={width:"100%",marginBottom:"none",margin:"0 auto",padding:"20px",backgroundColor:"rgba(37, 37, 37, 1)",color:"#febb12"},o={display:"flex",alignItems:"center",flexDirection:n?"column":"row",marginBottom:"40px",textAlign:n?"center":"left",gap:n?"20px":"40px"},s={width:n?"100%":"60%",maxWidth:n?"300px":"500px",height:n?"auto":"400px",objectFit:"cover",borderRadius:"10px",marginBottom:n?"20px":"0"},l={marginTop:n?"20px":"0",textAlign:n?"center":"left",flex:1},u={fontSize:n?"2.5rem":"3rem",marginBottom:"20px",color:"#febb12",fontWeight:"bold"},c={color:"#fff"},h={fontSize:n?"1.5rem":"1.8rem",lineHeight:"1.6",marginBottom:"15px",textAlign:"justify",color:"#FDD788"},m={fontSize:n?"2.5rem":"3rem",textAlign:"center",marginBottom:"30px",color:"#febb12",fontWeight:"bold"},g={display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",gap:"20px",marginBottom:"30px"},b={position:"relative",width:"100%",maxWidth:"300px",perspective:"1000px",margin:"0 auto"},I=N=>({position:"relative",width:"100%",height:"350px",transition:"transform 0.6s",transformStyle:"preserve-3d",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",transform:N?"rotateY(180deg)":"rotateY(0deg)"}),C={position:"absolute",width:"100%",height:"100%",backfaceVisibility:"hidden",backgroundColor:"rgba(37,37,37,255)",color:"#febb12",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",boxSizing:"border-box",borderRadius:"10px",overflow:"hidden"},R={position:"absolute",width:"100%",height:"100%",backfaceVisibility:"hidden",backgroundColor:"#333",color:"#FDD788",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",boxSizing:"border-box",transform:"rotateY(180deg)",borderRadius:"10px",overflow:"hidden"},x={width:"100%",height:"200px",objectFit:"cover",borderRadius:"10px"},v={fontSize:n?"1.8rem":"2rem",margin:"10px 0",color:"#febb12",fontWeight:"bold"},E={fontSize:n?"1.6rem":"1.5rem",color:"#FDD788"},P={display:"none"},L=[{title:"Live Market Sessions",text:"Our trading floor, the first of its kind in Bihar, offers a unique opportunity to learn and trade during live market.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/2nd_s04uzo.jpg",backText:"Join our live market sessions at Stock Archery to gain unparalleled real-time trading experience and actionable insights directly from industry experts. Our sessions offer a unique opportunity to engage with the market as it unfolds, providing you with hands-on learning and immediate feedback from seasoned professionals."},{title:"One-on-One Mentorship",text:"Stock Archery offers personalized mentorship, empowering you with tailored guidance and support for success.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/3rd_jem2df.jpg",backText:"Our exclusive one-on-one mentorship program offers personalized support tailored to your unique trading needs. Designed to help you navigate the complexities of the stock market with confidence, this program provides direct access to expert guidance and customized strategies."},{title:"Doubt Clearing Sessions",text:"We are dedicated to sustainable practices that protect the environment and promote a healthier future.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152393/5th_-_Copy_flkcme.jpg",backText:"Clear your doubts and overcome trading challenges with our in-depth, personalized sessions. Our program is designed to tackle your specific trading issues head-on, providing targeted solutions and expert advice to address your unique concerns. Benefit from comprehensive, one-on-one discussions that focus on resolving your trading difficulties and refining your strategies."},{title:"1 Year Handhold Support",text:"We actively engage with and support our local communities through various initiatives and partnerships.",image:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726124281/12343_sobrul.webp",backText:"Enjoy a full year of dedicated support with our comprehensive trading program, designed to keep you on track with your trading goals and ensure continuous progress. Our year-long support package offers you ongoing access to expert guidance, personalized feedback, and strategic insights tailored to your evolving needs."}];return d.jsxs(d.Fragment,{children:[d.jsxs(nc,{children:[d.jsx("title",{children:"About Us | Stock Archery"}),d.jsx("meta",{name:"description",content:"Learn about Stock Archery, Bihar’s premier trading floor offering hands-on trading education, live market sessions, and personalized mentorship. Discover our innovative approach and services to enhance your trading skills."}),d.jsx("meta",{name:"keywords",content:"Stock Archery, trading education, live market sessions, one-on-one mentorship, trading support, Bihar"}),d.jsx("meta",{property:"og:title",content:"About Us | Stock Archery"}),d.jsx("meta",{property:"og:description",content:"Discover Stock Archery's premier trading floor in Bihar. Learn about our live market sessions, one-on-one mentorship, and year-long support programs designed to enhance your trading skills."}),d.jsx("meta",{property:"og:image",content:"./images/about1.svg"}),d.jsx("meta",{property:"og:url",content:"https://www.stockarchery.com/about"})]}),d.jsxs("div",{style:i,children:[d.jsxs("section",{style:o,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726124858/Screenshot__33_-removebg-preview_eltals.png",alt:"About Stock Archery",style:s}),d.jsxs("div",{style:l,children:[d.jsxs("h1",{style:u,children:[d.jsx("span",{style:c,children:"ABOUT"})," US"]}),d.jsx("p",{style:h,children:"Stock Archery is Bihar’s premier trading floor and educational hub, offering unmatched hands-on trading education during live market sessions. As a pioneer in the region, we specialize in practical, real-time trading experience. Our expert trainers provide comprehensive, step-by-step guidance, ensuring that students master essential trading skills. At Stock Archery, our innovative approach promotes learning by doing—students trade alongside seasoned professionals, merging theory with real-world practice. Whether you're a novice or seeking advanced skill enhancement, Stock Archery delivers tailored classes to achieve your trading goals. Discover the future of trading education and elevate your market success with us today."})]})]}),d.jsxs("h1",{style:m,children:[d.jsx("span",{style:c,children:"Our"})," Services"]}),d.jsx("div",{style:g,children:L.map((N,_)=>d.jsx("div",{style:b,onMouseEnter:()=>e(_),onMouseLeave:()=>e(null),role:"region","aria-labelledby":`card-${_}-title`,children:d.jsxs("div",{style:I(t===_),children:[d.jsxs("div",{style:C,children:[d.jsx("img",{src:N.image,alt:`Image representing ${N.title}`,style:x}),d.jsx("strong",{children:d.jsx("h2",{id:`card-${_}-title`,style:v,children:N.title})}),d.jsx("p",{style:E,children:N.text})]}),d.jsxs("div",{style:R,children:[d.jsx("h2",{style:P,"aria-hidden":"true",children:N.title}),d.jsx("p",{style:E,children:N.backText})]})]})},_))})]})]})},a6=[{name:"Dhiraj Kumar",review:"Prem sir ka experience aur energetic class environment se maine live trading mein confidence paya. Standoff strategies bahut helpful hain.",rating:5,image:"/data/Dhiraj.png"},{name:"Shahwaz Alam",review:"I learned so much about the stock market from Ankit Sir. His classes are clear and helpful. Highly recommended",rating:4,image:"/data/Sahnwaz.png"},{name:"Vaibhav",review:"Live market mein trading ka experience anokha tha. Ankit sir, Prem sir, aur Prabhas sir ke guidance meinmaine kaafi kuch seekha.",rating:5,image:"/data/baibhav.png"},{name:"Prabhat",review:"Stock Archery ne mujhe trading ke basics aur advanced dono level pe mahir banaya. Bhagalpur jaise chote sheher mein aisa platform milna sach mein incredible ha",rating:5,image:"/data/Prabhat.png"},{name:"Rohan Kumar",review:"Stock Archery ke live classes kamaal ki hain! Real-time market ke sath trading seekhne ka maza hi kuch aur hai. Professionals ke sath trade karke bahut kuch naya seekhne ko mila. Bahut helpful aur informative sessions hain. Highly recommended.",rating:5,image:"/data/Rohan.png"},{name:"Dhiraj Ghosh",review:"Real-time trading se confidence badta hai aur strategies ko easily implement karne ka mauka milta hai. Instructors bhi bahut supportive hain. Ideal for trading beginners and experts alike!.",rating:5,image:"/data/Dhiraj Ghosh.png"},{name:"Abhinish Kumar",review:"Real-time trading se self-belief badh jaata hai aur strategies ko aasan se apply karne ka moka milta hai. Instructors bhi kaafi helpful hain. Beginners aur experts dono ke liye yeh perfect platform hai",rating:5,image:"/data/Abhinish.png"}],l6=()=>d.jsxs("div",{className:"reviews-container",children:[d.jsx("style",{children:`
          body {
            background-color: rgba(37, 37, 37, 1);
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            color: #fff;
          }

          .reviews-container {
            padding: 20px;
            max-width: 1200px;
            margin: auto;
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 3rem;
            color: #fff;
          }

          h1 span {
            color: #febb12;
          }

          .reviews {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .review-card {
            background-color: rgba(37, 37, 37, 1);
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
          }

          .review-card img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-bottom: 10px;
          }

          .review-card h2 {
            margin-top: 0;
            font-size: 2rem;
            color: #febb12;
          }

          .review-card p {
            font-size: 1.5rem;
            color: #FDD788;
          }

          .rating {
            margin-top: 10px;
            font-size: 1.5rem;
            color: #50C878;
          }

          @media (max-width: 1200px) {
            .reviews {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 768px) {
            .reviews {
              grid-template-columns: repeat(2, 1fr);
            }

            h1 {
              font-size: 2.5rem;
             
            }
          }

          @media (max-width: 480px) {
            .reviews {
              grid-template-columns: 1fr;
            }

            h1 {
              
              font-size: 2.5rem;
            }
          }
        `}),d.jsxs("h1",{children:["Student ",d.jsx("span",{children:"Reviews"})]}),d.jsx("div",{className:"reviews",children:a6.map((t,e)=>d.jsxs("div",{className:"review-card",children:[d.jsx("img",{src:t.image,alt:`${t.name}'s profile`}),d.jsx("h2",{children:t.name}),d.jsx("p",{children:t.review}),d.jsxs("div",{className:"rating",children:["★".repeat(t.rating),"☆".repeat(5-t.rating)]})]},e))})]}),u6=()=>{const t=[{title:"Ola Electric IPO Success: Journey, Milestones, and Market Impact",description:"Ola Electric, a subsidiary of the ride-hailing giant Ola, has become a symbol of India's electric vehicle (EV) revolution.",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724395871/Grey_minimalist_business_project_presentation_eqv2bp.png",route:"/ola"},{title:"Zerodha Cancels Referral Program",description:"Zerodha Cancels Referral Program: A Detailed Analysis",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724396033/Simple_Presentation_in_Pink_Lilac_Pastel_Blobs_Basic_Style_wul5th.png",route:"/ref"},{title:"Stock Market Analysis During Festive Season",description:"Discover how the Indian stock market has performed during the festive seasons over the last five years.",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725431242/334-removebg-preview_ezjbws.png",route:"/festival"},{title:"IT Stocks Propel Nifty to Fresh All-Time High; Sensex Surges Over 250 Points",description:"The Indian stock market witnessed a significant surge today as the Nifty 50 index reached a fresh all-time high, driven primarily by gains in IT stocks. ",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724920780/Screenshot_16_oa5p7v.png",route:"/it"},{title:"The Impact of Bajaj Housing Finance’s Rs 6,500 Crore IPO Announcement",description:"Bajaj Finance and Bajaj Finserv Surge by 5% on September 2nd: The Impact of Bajaj Housing Finance’s Rs 6,500 Crore IPO Announcement",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725353763/5_drivgt.jpg",route:"/bjaj"},{title:"Bajaj Housing Finance IPO",description:"The recent announcement of an Initial Public Offering (IPO) by Bajaj has led to a significant surge in the company's stock prices",imgUrl:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725792949/Bajaj-Housing-Finance-IPO-Price-Set-at-_66-70-Per-Share-IW-News-Title-removebg-preview_q15hyc.png",route:"/bjaj2"},{title:"Five Things To Learn In stock Market",description:"Five Things you should learn fast or market will make you learn in its own way",imgUrl:"./images/9.gif",route:"/five"}],e=(n,r,i,o)=>{const l=`${window.location.origin}${r}`,u=encodeURIComponent(l),c=encodeURIComponent(i),h=encodeURIComponent(o);let m="";switch(n){case"linkedin":m=`https://www.linkedin.com/shareArticle?mini=true&url=${u}&title=${c}`;break;case"telegram":m=`https://telegram.me/share/url?url=${u}&text=${c} - ${h}`;break;case"whatsapp":m=`https://api.whatsapp.com/send?text=${c}%20${u}%20%0A%0AImage:%20${h}`;break;default:return}window.open(m,"_blank")};return d.jsxs("div",{className:"blog-page",children:[d.jsx("style",{children:`
    /* General Styles */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    .container {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
        background: rgba(37, 37, 37, 255);
    }

    /* Hero Section Styles */
    .hero {
        color: black;
        text-align: center;
        background: rgba(37, 37, 37, 255);
    }

    .hero h2 {
        font-size: 3.5rem;
        margin: 0;
        color: #febb12;
    }

    .hero p {
        font-size: 2rem;
        margin: 10px 0 0;
    }

    /* Cards Container Styles */
    .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }

    @media (min-width: 1024px) {
        .cards-container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .card {
        background: white;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-decoration: none;
        color: #febb12;
        position: relative;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.2);
    }

    .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .card-content {
        padding: 20px;
    }

    .card-title {
        font-size: 2rem;
        margin: 0 0 10px;
        font-weight: bold;
    }

    .card-description {
        font-size: 1.5rem;
        margin: 0;
        color: #000000;
        font-weight: bold;
    }

    .card-link {
        display: block;
        margin-top: 15px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #febb12;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .card-link:hover {
        color: #0056b3;
    }

    .share-icons {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        position: absolute;
        bottom: 20px;
        right: 20px;
    }

    .share-icon {
        font-size: 3rem;
        cursor: pointer;
        color: #0056b3;
        transition: color 0.3s ease;
    }

    .share-icon:hover {
        color: #0056b3;
    }
    `}),d.jsx("section",{className:"hero",children:d.jsx("div",{className:"container",children:d.jsx("h2",{children:"BLOGS"})})}),d.jsx("div",{className:"container",children:d.jsx("div",{className:"cards-container",children:t.map((n,r)=>d.jsxs("a",{href:n.route,className:"card",children:[d.jsx("img",{src:n.imgUrl,alt:n.title,className:"card-image"}),d.jsxs("div",{className:"card-content",children:[d.jsx("h3",{className:"card-title",children:n.title}),d.jsx("p",{className:"card-description",children:n.description}),d.jsx("span",{className:"card-link",children:"Read More"})]}),d.jsxs("div",{className:"share-icons",children:[d.jsx($t,{icon:hm,className:"share-icon",onClick:()=>e("linkedin",n.route,n.title,n.imgUrl)}),d.jsx($t,{icon:oP,className:"share-icon",onClick:()=>e("telegram",n.route,n.title,n.imgUrl)}),d.jsx($t,{icon:N2,className:"share-icon",onClick:()=>e("whatsapp",n.route,n.title,n.imgUrl)})]})]},r))})})]})},Te={body:{margin:0,fontFamily:"Arial, sans-serif",backgroundColor:"#f4f4f4",overflowX:"hidden"},header:{backgroundImage:"url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724395871/Grey_minimalist_business_project_presentation_eqv2bp.png)",backgroundSize:"cover",backgroundPosition:"center",color:"white",padding:"30px 20px",width:"100%",height:"280px",minHeight:"198px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",animation:"fadeIn 1s ease-in-out",textAlign:"center",position:"relative",left:"2px",right:"2px",marginTop:"2px"},headerH1:{fontSize:"2.5em",margin:0,animation:"slideIn 1s ease-out"},main:{padding:"20px",width:"100%",boxSizing:"border-box",backgroundColor:"#fff"},h1:{fontSize:"2.5em",color:"#333",marginBottom:"20px",transition:"color 0.3s ease"},h1Hover:{color:"#4CAF50"},h2:{fontSize:"1.8em",color:"#555",marginTop:"20px",marginBottom:"10px",fontWeight:"bold",textAlign:"left",transition:"color 0.3s ease"},h2Hover:{color:"#4CAF50"},p:{lineHeight:"1.8",color:"#000000",marginBottom:"20px",textAlign:"justify"},socialIcons:{display:"flex",justifyContent:"center",marginTop:"20px"},socialIcon:{textDecoration:"none",margin:"0 10px",fontSize:"24px",color:"#007BFF",transition:"color 0.3s ease, transform 0.3s ease"},socialIconHover:{color:"#0056b3",transform:"scale(1.2)"},socialIconInner:{background:"none",border:"none",padding:"0",borderRadius:"0"}},c6=()=>d.jsxs("div",{style:Te.body,children:[d.jsx("header",{style:Te.header}),d.jsxs("main",{style:Te.main,children:[d.jsx("h1",{style:Te.h1,children:"Ola Electric IPO Success: Journey, Milestones, and Market Impact"}),d.jsx("h2",{style:Te.h2,children:"The Birth of Ola Electric"}),d.jsx("p",{style:Te.p,children:"Ola Electric was officially founded in 2017, but its roots trace back to the larger vision of Bhavish Aggarwal, the co-founder of Ola Cabs. Recognizing the global shift towards sustainable transportation and the Indian government's push for electric mobility, Aggarwal envisioned an electric ecosystem that would encompass not just vehicles but also the infrastructure required to support them. Ola Electric's mission was clear from the start: to create affordable, high-performance electric vehicles that could replace traditional internal combustion engine (ICE) vehicles in India. This vision was aligned with India's National Electric Mobility Mission Plan, which aimed to achieve significant electrification of the automobile industry by 2030."}),d.jsx("h2",{style:Te.h2,children:"Early Challenges and Strategic Alliances"}),d.jsx("p",{style:Te.p,children:"The journey to building a robust electric vehicle company was fraught with challenges. In a market dominated by ICE vehicles, the acceptance of electric vehicles (EVs) was a significant hurdle. Concerns about range anxiety, charging infrastructure, and the high initial cost of EVs were major roadblocks. To address these issues, Ola Electric adopted a multi-pronged strategy. The company started by focusing on electric two-wheelers, a segment that had a higher acceptance rate among Indian consumers due to lower costs and easier urban mobility. This decision proved crucial as it allowed Ola Electric to establish a foothold in the burgeoning EV market. In 2018, Ola Electric raised $56 million in its first funding round from Tiger Global and Matrix Partners. This funding was instrumental in accelerating the company's R&D efforts and scaling its production capabilities."}),d.jsx("h2",{style:Te.h2,children:"The Ola Electric Scooter: A Game Changer"}),d.jsx("p",{style:Te.p,children:"In 2020, Ola Electric unveiled its first electric scooter, the Ola S1, which was met with widespread acclaim. The scooter was designed to be both affordable and technologically advanced, with features such as app-based keyless entry, voice controls, and a robust battery pack offering a range of over 100 kilometers on a single charge. The Ola S1's launch was a pivotal moment for the company. It not only demonstrated Ola Electric's ability to deliver a high-quality product but also set new standards in the Indian EV market. The scooter's success was underpinned by Ola's investment in a sprawling manufacturing facility in Krishnagiri, Tamil Nadu, dubbed the 'Futurefactory.'"}),d.jsx("h2",{style:Te.h2,children:"The Futurefactory: A Vision Realized"}),d.jsx("p",{style:Te.p,children:"The Futurefactory, one of the world's largest electric two-wheeler production facilities, is a testament to Ola Electric's ambitious vision. Spread over 500 acres, the factory has an annual production capacity of 10 million vehicles, making it the largest of its kind globally. This facility is a critical component of Ola Electric's strategy to scale its operations and meet the growing demand for electric vehicles. The factory is also a shining example of sustainable manufacturing, powered entirely by renewable energy sources, and is expected to be the world's first carbon-negative two-wheeler factory."}),d.jsx("p",{style:Te.p,children:"In conclusion, Ola Electric's remarkable performance in the stock market is a reflection of its strategic vision, innovative product offerings, and strong market fundamentals. As the company continues to expand and capture a larger share of the electric vehicle market, it is likely to maintain its position as a leading player in the industry."}),d.jsxs("div",{style:Te.socialIcons,children:[d.jsx("a",{href:"https://twitter.com/share?url=https://stockarchery.in/ola&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-twitter",style:Te.socialIconInner})}),d.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/ola",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-facebook-f",style:Te.socialIconInner})}),d.jsx("a",{href:"https://wa.me/?text=https://stockarchery.in/ola",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-whatsapp",style:Te.socialIconInner})}),d.jsx("a",{href:"https://t.me/share/url?url=https://stockarchery.in/ola&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-telegram",style:Te.socialIconInner})}),d.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/ola",target:"_blank",rel:"noopener noreferrer",style:Te.socialIcon,children:d.jsx("i",{className:"fab fa-linkedin",style:Te.socialIconInner})})]})]}),d.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @media (max-width: 768px) {
            header {
              padding: 30px 10px;
            }
            header h1 {
              font-size: 2em;
            }
            main {
              padding: 15px;
            }
            h1 {
              font-size: 2em;
            }
            h2 {
              font-size: 1.5em;
            }
            .social-icons a {
              margin: 0 8px;
              font-size: 20px;
            }
          }

          @media (max-width: 480px) {
            header {
              padding: 20px 5px;
            }
            header h1 {
              font-size: 1.5em;
            }
            main {
              padding: 10px;
            }
            h1 {
              font-size: 1.8em;
            }
            h2 {
              font-size: 1.3em;
            }
            .social-icons {
              flex-direction: row;
              align-items: center;
            }
            .social-icons a {
              margin: 5px 5px;
              font-size: 18px;
            }
          }
        `})]}),le={body:{margin:0,fontFamily:"Arial, sans-serif",backgroundColor:"#f4f4f4",overflowX:"hidden"},header:{backgroundImage:"url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724396033/Simple_Presentation_in_Pink_Lilac_Pastel_Blobs_Basic_Style_wul5th.png)",backgroundSize:"cover",backgroundPosition:"center",color:"white",padding:"30px 20px",width:"100%",height:"280px",minHeight:"198px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",animation:"fadeIn 1s ease-in-out",textAlign:"center",position:"relative",left:"2px",right:"2px",marginTop:"2px"},headerH1:{fontSize:"2.5em",margin:0,animation:"slideIn 1s ease-out"},main:{padding:"20px",width:"100%",boxSizing:"border-box",backgroundColor:"#fff"},h1:{fontSize:"2.5em",color:"#333",marginBottom:"20px",transition:"color 0.3s ease"},h1Hover:{color:"#4CAF50"},h2:{fontSize:"1.8em",color:"#555",marginTop:"20px",marginBottom:"10px",fontWeight:"bold",textAlign:"left",transition:"color 0.3s ease"},h2Hover:{color:"#4CAF50"},h3:{fontSize:"1.0em",color:"#000000",transition:"color 0.3s ease"},p:{lineHeight:"1.8",color:"#000000",marginBottom:"20px",textAlign:"justify"},socialIcons:{display:"flex",justifyContent:"center",marginTop:"20px"},socialIcon:{textDecoration:"none",margin:"0 10px",fontSize:"24px",color:"#007BFF",transition:"color 0.3s ease, transform 0.3s ease"},socialIconHover:{color:"#0056b3",transform:"scale(1.2)"},socialIconInner:{background:"none",border:"none",padding:"0",borderRadius:"0"}},f6=()=>d.jsxs("div",{style:le.body,children:[d.jsx("header",{style:le.header}),d.jsxs("main",{style:le.main,children:[d.jsx("h1",{style:le.h1,children:"Zerodha Cancels Referral Program"}),d.jsx("h2",{style:le.h2,children:"Introduction"}),d.jsx("p",{style:le.p,children:"Zerodha, India's largest stockbroker, has recently announced the cancellation of its popular referral program. This decision has stirred conversations in the financial community, as the referral program was a significant part of Zerodha's customer acquisition strategy. In this report, we will explore the reasons behind this decision, its potential impact, and what it means for Zerodha and its users."}),d.jsx("h2",{style:le.h2,children:"Background of Zerodha's Referral Program"}),d.jsx("p",{style:le.p,children:"Zerodha's referral program was introduced as an innovative way to incentivize existing users to bring new customers to the platform. The program offered monetary rewards or brokerage credits to those who referred new users who successfully opened trading accounts with Zerodha. This approach not only helped Zerodha grow its user base rapidly but also created a strong community of traders who were actively engaged with the platform."}),d.jsx("h2",{style:le.h2,children:"Why Zerodha Cancelled the Referral Program"}),d.jsx("p",{style:le.p,children:"There are several reasons behind Zerodha's decision to cancel its referral program:"}),d.jsxs("ol",{children:[d.jsx("li",{children:d.jsxs("p",{style:le.p,children:[d.jsx("h3",{style:le.h3,children:"Regulatory Compliance:"})," The financial industry in India is heavily regulated. The Securities and Exchange Board of India (SEBI) has been tightening regulations around promotional activities, including referral programs, to ensure transparency and protect investors. Zerodha's decision could be influenced by the need to comply with these evolving regulations, thereby avoiding potential legal issues."]})}),d.jsx("li",{children:d.jsxs("p",{style:le.p,children:[d.jsx("h3",{style:le.h3,children:"Sustainability Concerns:"})," As Zerodha's user base grew, the cost of maintaining the referral program may have become unsustainable. The company might have found that the expenses associated with rewarding referrals were outweighing the benefits, especially as the program matured and the rate of new user acquisition slowed down."]})}),d.jsx("li",{children:d.jsxs("p",{style:le.p,children:[d.jsx("h3",{style:le.h3,children:"Focus on Organic Growth:"})," Zerodha has always emphasized the importance of organic growth and providing value through its products and services. By canceling the referral program, the company may be aiming to shift its focus entirely to organic user acquisition strategies, such as content marketing, educational initiatives, and word-of-mouth."]})})]}),d.jsx("h2",{style:le.h2,children:"Impact on Users and the Market"}),d.jsx("p",{style:le.p,children:"The cancellation of the referral program is likely to have mixed reactions among Zerodha's users. While some may be disappointed by the loss of an incentive to refer friends and family, others might appreciate the company's focus on improving its core services. In the long term, this decision could lead to a more sustainable and customer-centric approach, which may benefit both users and Zerodha."}),d.jsx("h2",{style:le.h2,children:"Conclusion"}),d.jsx("p",{style:le.p,children:"Zerodha's decision to cancel its referral program reflects its commitment to regulatory compliance, sustainable growth, and enhancing the user experience. While this move may seem surprising to some, it is likely a strategic decision aimed at positioning the company for long-term success in a rapidly evolving market. Users and stakeholders should view this change as a part of Zerodha's broader strategy to maintain its leadership position in the Indian stockbroking industry."}),d.jsxs("div",{style:le.socialIcons,children:[d.jsx("a",{href:"https://twitter.com/share?url=https://stockarchery.in/ref&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-twitter",style:le.socialIconInner})}),d.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/ref",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-facebook-f",style:le.socialIconInner})}),d.jsx("a",{href:"https://wa.me/?text=https://stockarchery.in/ref",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-whatsapp",style:le.socialIconInner})}),d.jsx("a",{href:"https://t.me/share/url?url=https://stockarchery.in/ref&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-telegram",style:le.socialIconInner})}),d.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/ref",target:"_blank",rel:"noopener noreferrer",style:le.socialIcon,children:d.jsx("i",{className:"fab fa-linkedin",style:le.socialIconInner})})]})]}),d.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @media (max-width: 768px) {
            header {
              padding: 30px 10px;
            }
            header h1 {
              font-size: 2em;
            }
            main {
              padding: 15px;
            }
            h1 {
              font-size: 2em;
            }
            h2 {
              font-size: 1.5em;
            }
            .social-icons a {
              margin: 0 8px;
              font-size: 20px;
            }
          }

          @media (max-width: 480px) {
            header {
              padding: 20px 5px;
            }
            header h1 {
              font-size: 1.5em;
            }
            main {
              padding: 10px;
            }
            h1 {
              font-size: 1.8em;
            }
            h2 {
              font-size: 1.3em;
            }
            .social-icons {
              flex-direction: row;
              align-items: center;
            }
            .social-icons a {
              margin: 5px 5px;
              font-size: 18px;
            }
          }
        `})]}),d6=()=>d.jsxs("div",{style:dr.blogContainer,children:[d.jsx("h1",{className:"animated-heading",children:"Analyzing Indian Stock Market Trends During Festive Seasons: Insights from the Last 5 Years"}),d.jsxs("div",{style:dr.post,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725430842/festival_qj2rtg.png",alt:"Bajaj Stocks Surge",style:dr.postImage}),d.jsx("h2",{className:"subheading",children:"Introduction"}),d.jsx("p",{style:dr.postText,children:"The festive season in India is a significant period not only for cultural celebrations but also for the economy and the stock market. Historically, the stock market tends to reflect the positive sentiment and increased consumer spending during festivals like Diwali, Dussehra, and Christmas. This blog explores the Indian stock market's behavior during the festive seasons over the past five years, offering valuable insights for investors. We will also discuss what the 2024 festive season might hold for the markets."}),d.jsx("h2",{className:"subheading",children:"Market Overview: Festive Seasons (2019-2023)"}),d.jsxs("p",{style:dr.postText,children:["➡️2019: A robust rally pre-Diwali, fueled by strong earnings and reforms. FMCG and automotive sectors performed well.",d.jsx("br",{}),"➡️2020: Despite the pandemic, a sharp rally occurred in November due to vaccine news and earnings recovery. Pharma and IT sectors surged.",d.jsx("br",{}),"➡️2021: Bull run continued, with Sensex crossing 60,000. Real estate and infrastructure sectors saw strong gains.",d.jsx("br",{}),"➡️2022: Modest Diwali rally amid global uncertainties. Energy and consumer sectors performed well.",d.jsx("br",{}),"➡️2023: Record highs driven by economic recovery, led by banking, consumer goods, and automotive sectors.",d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725431242/334-removebg-preview_ezjbws.png",alt:"IPO",className:"inline-image right-image"})]}),d.jsx("h2",{className:"subheading",children:"Key Observations and Sectoral Performance"}),d.jsxs("p",{style:dr.postText,children:["The market generally reacts positively during the festive season, often leading to pre-festive rallies. This trend is fueled by investor optimism, increased consumer spending, and favorable economic conditions.",d.jsx("br",{}),"⭐Consumer Goods: This sector consistently performs well during the festive season, driven by increased demand for FMCG products.",d.jsx("br",{}),"⭐Automotive: Festive discounts and new model launches lead to higher sales, boosting the sector's stock performance.",d.jsx("br",{}),"⭐Banking: The festive season sees increased activity in the banking sector due to higher demand for loans and financial services. Stable interest rates further support this growth."]}),d.jsx("h2",{className:"subheading",children:"What to Expect in 2024"}),d.jsx("p",{style:dr.postText,children:"The Indian economy is expected to continue its growth trajectory, with GDP growth estimates ranging between 6-7% for the year. A strong economic backdrop generally supports positive market sentiment during the festive season. Inflation has been relatively stable, but any unexpected spikes could influence consumer spending and market performance. The Reserve Bank of India's monetary policy will play a crucial role in maintaining this balance.The earnings season leading up to the festive period will be critical. Strong corporate results could fuel a pre-festive rally, while any disappointments might temper expectations."}),d.jsx("h2",{className:"subheading",children:"Conclusion: Investing During the Festive Season"}),d.jsxs("p",{style:dr.postText,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725431425/Screenshot__26_-removebg-preview_mj8wnf.png",alt:"Investment",className:"inline-image"}),"The festive season presents unique opportunities for investors. Historical trends suggest that a pre-festive rally is likely, driven by positive sentiment and increased consumer spending. However, global uncertainties could moderate this rally, making it essential for investors to stay informed and consider sectoral performance when making investment decisions."]})]})]}),dr={blogContainer:{maxWidth:"800px",width:"100%",padding:"20px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},postImage:{width:"100%",height:"auto",borderRadius:"8px",marginBottom:"20px"},postText:{fontSize:"2rem",color:"#555",lineHeight:"1.6",marginBottom:"20px"}},ne={body:{margin:0,fontFamily:"Arial, sans-serif",backgroundColor:"#f4f4f4",overflowX:"hidden"},header:{backgroundImage:"url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724921355/Screenshot_19_xwzfao.png)",backgroundSize:"cover",backgroundPosition:"center",color:"white",padding:"60px 20px",width:"100%",height:"280px",minHeight:"198px",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"},headerH1:{fontSize:"3em",margin:0,textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",animation:"slideIn 1s ease-out"},main:{padding:"20px",width:"100%",boxSizing:"border-box",backgroundColor:"#fff",animation:"fadeIn 1.5s ease-in-out"},section:{marginBottom:"40px"},sectionHeader:{fontSize:"2.2em",color:"#333",marginBottom:"20px",borderBottom:"2px solid #ddd",paddingBottom:"10px",animation:"fadeInUp 1s ease-in-out"},p:{lineHeight:"1.8",color:"#000000",marginBottom:"20px",textAlign:"justify",animation:"fadeInUp 1.4s ease-in-out"},imageGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px",marginTop:"20px"},imageCard:{position:"relative",overflow:"hidden",borderRadius:"12px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},imageCardOverlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.4)",color:"white",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.5em",opacity:0,transition:"opacity 0.3s ease"},imageCardOverlayHover:{opacity:1},fullWidthImageSection:{width:"100%",margin:"40px 0",position:"relative"},fullWidthImage:{width:"100%",height:"auto",borderRadius:"12px"},socialIcons:{display:"flex",justifyContent:"center",marginTop:"20px",animation:"fadeIn 1.6s ease-in-out"},socialIcon:{textDecoration:"none",margin:"0 10px",fontSize:"24px",color:"#007BFF",transition:"color 0.3s ease, transform 0.3s ease"},socialIconHover:{color:"#0056b3",transform:"scale(1.2)"},socialIconInner:{background:"none",border:"none",padding:"0",borderRadius:"0"}},h6=()=>d.jsxs("div",{style:ne.body,children:[d.jsx("header",{style:ne.header,children:d.jsx("h1",{style:ne.headerH1,children:"IT Stocks Propel Nifty to Fresh All-Time High"})}),d.jsxs("main",{style:ne.main,children:[d.jsxs("section",{style:ne.section,children:[d.jsx("p",{style:ne.p,children:"The Indian stock market witnessed a significant surge today as the Nifty 50 index reached a fresh all-time high, driven primarily by gains in IT stocks. Major IT companies like TCS, Infosys, and Wipro reported better-than-expected quarterly earnings, which bolstered investor confidence. The global demand for IT services, fueled by digital transformation, cloud computing, and remote work solutions, has positioned Indian IT companies at the forefront, leading to a strong performance in their stock prices. This sector's positive outlook has further spurred buying interest, contributing to the rally. Additionally, the broader market sentiment remains bullish, with sectors such as banking, finance, and FMCG also showing gains. The Sensex, another key benchmark index, mirrored this trend, climbing over 250 points, reflecting strong overall market momentum."}),d.jsxs("div",{style:ne.imageGrid,children:[d.jsxs("div",{style:ne.imageCard,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724920780/Screenshot_16_oa5p7v.png",alt:"Stock Market Surge",style:{width:"100%",height:"auto"}}),d.jsx("div",{style:ne.imageCardOverlay,children:"Market Surge"})]}),d.jsxs("div",{style:ne.imageCard,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724921355/Screenshot_19_xwzfao.png",alt:"IT Stocks",style:{width:"100%",height:"auto"}}),d.jsx("div",{style:ne.imageCardOverlay,children:"IT Stocks Lead"})]})]})]}),d.jsxs("section",{style:ne.section,children:[d.jsx("h2",{style:ne.sectionHeader,children:"Key Highlights"}),d.jsxs("p",{style:ne.p,children:["⭐",d.jsx("strong",{children:"Nifty 50 Hits Record High:"})," The Nifty 50 index surged to an all-time high, crossing the previous records and setting a new benchmark."]}),d.jsxs("p",{style:ne.p,children:["⭐",d.jsx("strong",{children:"Sensex Gains Over 250 Points:"})," The Sensex followed suit, gaining over 250 points. This rise is indicative of a broader market rally, with several sectors contributing to the positive momentum, though IT remains the standout performer."]}),d.jsxs("p",{style:ne.p,children:["⭐",d.jsx("strong",{children:"Strong Performance of IT Stocks:"}),"Leading IT companies like TCS, Infosys, and Wipro were among the top gainers in today’s trade. The sector’s growth can be attributed to several factors, including robust quarterly earnings, positive outlooks, and increasing demand for IT services globally."]})]}),d.jsx("section",{style:ne.fullWidthImageSection,children:d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724920893/Screenshot_17_zimagw.png",alt:"Nifty 50 Record High",style:ne.fullWidthImage})}),d.jsxs("section",{style:ne.section,children:[d.jsx("h2",{style:ne.sectionHeader,children:"Factors Driving the Rally"}),d.jsxs("p",{style:ne.p,children:["➡️",d.jsx("strong",{children:"Robust Earnings Reports:"})," Several IT companies have posted better-than-expected quarterly results, which have bolstered investor sentiment."]}),d.jsxs("p",{style:ne.p,children:["➡️",d.jsx("strong",{children:"Positive Market Sentiment:"}),"Overall, market sentiment has been buoyant, with investors showing optimism about the growth prospects of the Indian economy. The IT sector, being a major growth driver, has naturally benefited from this optimism.."]}),d.jsxs("p",{style:ne.p,children:["➡️",d.jsx("strong",{children:"Global Demand for IT Services:"})," Several IT companies have posted better-than-expected quarterly results, which have bolstered investor sentiment."]}),d.jsxs("p",{style:ne.p,children:["➡️",d.jsx("strong",{children:"Favorable Economic Indicators:"})," Recent economic data points, such as improved GDP growth rates and lower inflation, have also contributed to the positive market sentiment. The Indian economy’s resilience in the face of global challenges has instilled confidence among investors."]}),d.jsxs("p",{style:ne.p,children:["➡️",d.jsx("strong",{children:"Foreign Institutional Investments (FII):"})," The Indian stock market has seen a steady inflow of foreign institutional investments, particularly in the IT sector. The consistent investment flow from global investors has further fueled the rally in IT stocks."]})]}),d.jsxs("div",{style:ne.socialIcons,children:[d.jsx("a",{href:"https://twitter.com/share?url=https://stockarchery.in/it&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:ne.socialIcon,children:d.jsx("i",{className:"fab fa-twitter",style:ne.socialIconInner})}),d.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/it",target:"_blank",rel:"noopener noreferrer",style:ne.socialIcon,children:d.jsx("i",{className:"fab fa-facebook-f",style:ne.socialIconInner})}),d.jsx("a",{href:"https://wa.me/?text=https://stockarchery.in/it",target:"_blank",rel:"noopener noreferrer",style:ne.socialIcon,children:d.jsx("i",{className:"fab fa-whatsapp",style:ne.socialIconInner})}),d.jsx("a",{href:"https://t.me/share/url?url=https://stockarchery.in/it&text=Check%20out%20this%20blog%20page%20I%20found",target:"_blank",rel:"noopener noreferrer",style:ne.socialIcon,children:d.jsx("i",{className:"fab fa-telegram",style:ne.socialIconInner})}),d.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/it",target:"_blank",rel:"noopener noreferrer",style:ne.socialIcon,children:d.jsx("i",{className:"fab fa-linkedin",style:ne.socialIconInner})})]})]}),d.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .imageCard:hover .imageCardOverlay {
            opacity: 1;
          }

          @media (max-width: 768px) {
            header {
              padding: 30px 10px;
            }
            header h1 {
              font-size: 2em;
            }
            main {
              padding: 15px;
            }
            h2 {
              font-size: 1.5em;
            }
            img {
              margin: 10px auto;
              display: block;
            }
          }

          @media (max-width: 480px) {
            header {
              padding: 20px 5px;
            }
            header h1 {
              font-size: 1.5em;
            }
            main {
              padding: 10px;
            }
            h2 {
              font-size: 1.3em;
            }
            img {
              margin: 10px auto;
              display: block;
            }
          }
        `})]}),p6=()=>d.jsxs("div",{style:Fn.blogContainer,children:[d.jsx("h1",{className:"animated-heading",children:"Bajaj Stocks Surge Following Recent IPO Announcement"}),d.jsxs("div",{style:Fn.post,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725361124/Screenshot_25_jqc6ai.png",alt:"Bajaj Stocks Surge",style:Fn.postImage}),d.jsx("h2",{className:"subheading",children:"The Impact of Bajaj's IPO Announcement"}),d.jsx("p",{style:Fn.postText,children:"The recent announcement of an Initial Public Offering (IPO) by Bajaj has led to a significant surge in the company's stock prices. This surge reflects growing investor confidence in the company's future prospects and its ability to deliver strong returns."}),d.jsx("h2",{className:"subheading",children:"Investor Optimism and Market Reaction"}),d.jsxs("p",{style:Fn.postText,children:["Over the past few weeks, Bajaj's stocks have seen a steady climb, culminating in a sharp rise immediately following the IPO announcement.",d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725350565/2_l0gtg8.png",alt:"IPO",className:"inline-image right-image"}),"Investors are optimistic about the potential growth opportunities that this IPO could unlock for Bajaj, particularly in expanding its market reach and enhancing its product offerings."]}),d.jsx("h2",{className:"subheading",children:"Analyst Predictions and Future Prospects"}),d.jsx("p",{style:Fn.postText,children:"Market analysts have been closely monitoring this development, with many predicting continued upward momentum in Bajaj's stock prices. The company’s strong fundamentals, combined with favorable market conditions, have made this IPO one of the most anticipated events in the financial sector this year."}),d.jsx("h2",{className:"subheading",children:"Increased Trading Volumes Before the IPO"}),d.jsx("p",{style:Fn.postText,children:"In the days leading up to the IPO, trading volumes in Bajaj stocks have also increased significantly, indicating heightened investor interest. The market's reaction suggests that Bajaj's strategic decisions are being well-received, and the IPO could serve as a catalyst for further growth in the company's valuation."}),d.jsx("h2",{className:"subheading",children:"Utilization of IPO Funds for Expansion"}),d.jsxs("p",{style:Fn.postText,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725350564/3_zlc3pb.png",alt:"Investment",className:"inline-image"}),"As the IPO date approaches, investors will be keenly watching how Bajaj plans to utilize the capital raised. The company has indicated that the funds will be used for various expansion projects, including new product development and market diversification."]}),d.jsx("h2",{className:"subheading",children:"Conclusion: A Testament to Bajaj's Market Position"}),d.jsx("p",{style:Fn.postText,children:"Overall, the recent surge in Bajaj stocks is a testament to the company's solid market position and the confidence that investors have in its future. As more details about the IPO become available, it will be interesting to see how the stock market continues to respond."})]})]}),Fn={blogContainer:{maxWidth:"800px",width:"100%",padding:"20px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},postImage:{width:"100%",height:"auto",borderRadius:"8px",marginBottom:"20px"},postText:{fontSize:"2rem",color:"#555",lineHeight:"1.6",marginBottom:"20px"}},m6=()=>d.jsxs("div",{style:Vn.blogContainer,children:[d.jsx("h1",{className:"animated-heading",children:"Bajaj Housing Finance IPO"}),d.jsxs("div",{style:Vn.post,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725792479/316945-bajaj-housing-finance-ipo_tx03z5.avif",alt:"Bajaj Stocks Surge",style:Vn.postImage}),d.jsx("h2",{className:"subheading",children:"The Impact of Bajaj's IPO Announcement"}),d.jsx("p",{style:Vn.postText,children:"The recent announcement of an Initial Public Offering (IPO) by Bajaj has led to a significant surge in the company's stock prices. This surge reflects growing investor confidence in the company's future prospects and its ability to deliver strong returns."}),d.jsx("h2",{className:"subheading",children:"About Bjaj Housing Finance"}),d.jsxs("p",{style:Vn.postText,children:["Classified as an ‘Upper-Layer NBFC’ by the RBI pursuant to Scale Based Regulations, Bajaj Housing Finance Limited (BHFL) is a 100% subsidiary of Bajaj Finance Limited — one of the most diversified NBFCs in the Indian market, catering to more than 88.11 million customers across the country. Headquartered in Pune, BHFL offers finance to individuals as well as corporate entities for the purchase and renovation of homes, or commercial spaces.",d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725792949/Bajaj-Housing-Finance-IPO-Price-Set-at-_66-70-Per-Share-IW-News-Title-removebg-preview_q15hyc.png",alt:"IPO",className:"inline-image right-image"}),"It also provides loans against property for business or personal needs as well as working capital for business expansion purposes. BHFL also offers finance to developers engaged in the construction of residential and commercial properties as well as lease rental discounting to developers and high-net-worth individuals. The Company is rated AAA/Stable for its long-term debt programme and A1+ for its short-term debt programme from CRISIL and India Ratings."]}),d.jsx("h2",{className:"subheading",children:"Bjaj Housing Finance IPO"}),d.jsx("p",{style:Vn.postText,children:"Bajaj Housing Finance IPO is a book built issue of Rs 6,560.00 crores. The issue is a combination of fresh issue of 50.86 crore shares aggregating to Rs 3,560.00 crores and offer for sale of 42.86 crore shares aggregating to Rs 3,000.00 crores. Bajaj Housing Finance IPO opens for subscription on September 9, 2024 and closes on September 11, 2024. The allotment for the Bajaj Housing Finance IPO is expected to be finalized on Thursday, September 12, 2024. Bajaj Housing Finance IPO will list on BSE, NSE with tentative listing date fixed as Monday, September 16, 2024."}),d.jsx("h2",{className:"subheading",children:"Bajaj Housing Finance raises Rs 1,757 crore from anchor investors"}),d.jsx("p",{style:Vn.postText,children:"Bajaj Housing Finance on Friday allotted shares worth Rs 1,757 crore to anchor investors. It allotted 251 million shares at Rs 70 apiece to over 100 investors. Some of the investors that got an allotment included the Government of Singapore, HDFC MF, New World Fund, and Capital Group."}),d.jsx("h2",{className:"subheading",children:"Utilization of IPO Funds for Expansion"}),d.jsxs("p",{style:Vn.postText,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725793329/cvvcvcvcvcvcvcvcvcvcvcvcvbngfdtcgmhlk_jhg_fderxl-removebg-preview_g97zna.png",alt:"Investment",className:"inline-image"}),"As the IPO date approaches, investors will be keenly watching how Bajaj plans to utilize the capital raised. The company has indicated that the funds will be used for various expansion projects, including new product development and market diversification."]}),d.jsx("h2",{className:"subheading",children:"Conclusion: A Testament to Bajaj's Market Position"}),d.jsx("p",{style:Vn.postText,children:"Overall, the recent surge in Bajaj stocks is a testament to the company's solid market position and the confidence that investors have in its future. As more details about the IPO become available, it will be interesting to see how the stock market continues to respond."})]})]}),Vn={blogContainer:{maxWidth:"800px",width:"100%",padding:"20px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},postImage:{width:"100%",height:"auto",borderRadius:"8px",marginBottom:"20px"},postText:{fontSize:"2rem",color:"#555",lineHeight:"1.6",marginBottom:"20px"}},g6=()=>d.jsxs("div",{style:Et.blogContainer,children:[d.jsx("h1",{className:"animated-heading",children:"Five Things You Should Learn Fast, or the Market Will Make You Learn in Its Own Way❓"}),d.jsx("p",{style:Et.postText,children:"The stock market is an incredible platform for wealth creation, but it's also a place where overconfidence and poor decision-making can lead to significant losses. Many traders and investors start their journey thinking they can outsmart the market, but reality soon sets in. The market is not a casino; it's a disciplined game of strategy, patience, and resilience. Here are five crucial lessons every trader and investor must internalize to succeed in the stock market."}),d.jsxs("div",{style:Et.post,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726208591/Screenshot_36_jx5yb5.png",alt:"Bajaj Stocks Surge",style:Et.postImage}),d.jsx("h2",{className:"subheading",children:"You Can Never Outsmart the Market"}),d.jsx("p",{style:Et.postText,children:"No matter how much experience or knowledge you possess, you will never completely outsmart the market. The stock market is influenced by countless variables—economic indicators, geopolitical events, company-specific news, and even mass psychology—that are far beyond your control. Many new traders enter the market with a sense of invincibility, convinced they can predict every market movement. However, the most seasoned traders understand that attempting to outguess the market consistently is a futile exercise. The market will humble you if you come with overconfidence or an inflated sense of your own abilities."}),d.jsx("h2",{className:"subheading",children:"Lesson:"}),d.jsxs("p",{style:Et.postText,children:["⏩Focus on discipline, strategy, and risk management rather than trying to beat the market. It’s essential to accept that market fluctuations are inevitable, and you can only control your responses to them, not the market itself.",d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726208591/Screenshot_36_jx5yb5.png",alt:"IPO",className:"inline-image right-image"})]}),d.jsx("h2",{className:"subheading",children:"It’s a Stock Market, Not a Casino"}),d.jsx("p",{style:Et.postText,children:"The stock market is often compared to gambling, but this comparison couldn’t be further from the truth. In a casino, you are relying solely on luck. In the stock market, success comes from research, analysis, and careful decision-making.While day trading and speculative investments might feel similar to gambling, true long-term success in the market comes from disciplined strategies and understanding the fundamentals of the stocks you're investing in. Unlike a casino, where the odds are stacked against you, in the stock market, you can tilt the odds in your favor with proper research and strategy."}),d.jsx("h2",{className:"subheading",children:"Lesson:"}),d.jsx("p",{style:Et.postText,children:"⏩Treat the stock market as a disciplined investment platform. Informed decisions, backed by analysis and research, will always outperform speculative behavior and gambling-like trades."}),d.jsx("h2",{className:"subheading",children:"Stock Market as Primary or Secondary Source of Income"}),d.jsx("p",{style:Et.postText,children:"One of the most important decisions a trader has to make is whether they want to make the stock market their primary or secondary source of income. For many, full-time trading seems appealing because of the potential for large profits. However, the reality is that full-time trading is much more difficult than it seems. The market’s unpredictability can lead to extended periods of little to no gains or even losses.Before you consider transitioning to full-time trading, it’s critical to build a strong track record and ensure you have a financial cushion to absorb the inevitable downturns. For most people, keeping the stock market as a secondary source of income while maintaining a more stable primary income stream is the safer route."}),d.jsx("h2",{className:"subheading",children:"Lesson:"}),d.jsx("p",{style:Et.postText,children:"⏩The stock market can be a great supplementary source of income, but going full-time requires years of experience and a solid financial backup plan. Consider keeping trading as a secondary income until you’re consistently outperforming your main job"}),d.jsx("h2",{className:"subheading",children:"Stock Tips Will Burn Your Fingers"}),d.jsxs("p",{style:Et.postText,children:[d.jsx("img",{src:"https://res.cloudinary.com/dyrn2eg1j/image/upload/v1726208315/Screenshot__35_-removebg-preview_r3on92.png",alt:"Investment",className:"inline-image"}),"Stock tips from friends, family, or even online gurus might seem like a shortcut to success, but they often lead to poor outcomes. Acting on stock tips without conducting your own research is a recipe for disaster. While some tips may work in the short term, relying on them means you're essentially gambling with your money.Successful traders don’t rely on tips. They build their strategies based on thorough analysis, data-driven insights, and clear investment goals. By blindly following tips, you risk not only losing money but also damaging your ability to learn and grow as a trader"]}),d.jsx("h2",{className:"subheading",children:"Lesson:"}),d.jsx("p",{style:Et.postText,children:"⏩Avoid following stock tips blindly. Instead, focus on building your own knowledge and strategies, backed by solid research and analysis"}),d.jsx("h2",{className:"subheading",children:"Your Portfolio May Lag in a Bullish Market—And That’s Okay"}),d.jsx("p",{style:Et.postText,children:"One of the hardest lessons for new investors is that even in a bullish market, their portfolio may not perform as well as others’. This can be frustrating, but it's essential to understand that markets move in cycles, and not all stocks rise at the same pace. The temptation to chase hot stocks that are surging during a bull run can be strong, but doing so can lead to overpaying for stocks or taking unnecessary risks.Instead of chasing the hottest stocks, focus on the fundamentals of the companies you're invested in and the long-term potential of your portfolio. A disciplined approach will yield better results over time than constantly trying to keep up with the market or other investors."}),d.jsx("h2",{className:"subheading",children:"Lesson:"}),d.jsx("p",{style:Et.postText,children:"⏩ Don’t get disheartened if your portfolio lags in a bullish market. Focus on your long-term strategy and resist the urge to chase quick gains, as the market will eventually reward well-researched investments."}),d.jsx("h2",{className:"subheading",children:"Conclusion: The Market Teaches Tough Lessons"}),d.jsx("p",{style:Et.postText,children:"The stock market is a dynamic, unpredictable place, and those who fail to learn key lessons quickly are often taught in the harshest ways possible. You can never truly outsmart the market, and treating it like a casino or relying on stock tips is a surefire way to lose money. Whether you see the stock market as your primary or secondary income source, understanding risk management, discipline, and research will determine your long-term success. The market is a marathon, not a sprint, and while your portfolio might underperform during bullish times, staying committed to a thoughtful strategy will pay off in the long run.By learning these lessons early on, you can position yourself for success without being blindsided by the market’s unforgiving nature"})]})]}),Et={blogContainer:{maxWidth:"800px",width:"100%",padding:"20px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"0 auto"},postImage:{width:"100%",height:"auto",borderRadius:"8px",marginBottom:"20px"},postText:{fontSize:"2rem",color:"#555",lineHeight:"1.6",marginBottom:"20px"}},y6={colors:{heading:"rgb(24 24 29)",text:"#febb12;",white:"#fff",yellow:"#febb12",black:"#212529",helper:"#8490ff",bg:"rgb(249 249 255)",footer_bg:"#0a1435",btn:"rgb(98 84 243)",border:"rgba(98, 84, 243, 0.5)",hr:"#ffffff",gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",shadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px"},media:{mobile:"768px",tab:"998px"}},v6=()=>d.jsxs(RI,{theme:y6,children:[d.jsx(DI,{}),d.jsx(o6,{}),d.jsxs(kk,{children:[d.jsx(qI,{}),d.jsxs(vk,{children:[d.jsx(ze,{path:"/",element:d.jsx(Oj,{})}),d.jsx(ze,{path:"/about",element:d.jsx(Hj,{})}),d.jsx(ze,{path:"/contact",element:d.jsx(Wj,{})}),d.jsx(ze,{path:"/review",element:d.jsx(t9,{})}),d.jsx(ze,{path:"/video",element:d.jsx(_E,{})}),d.jsx(ze,{path:"/FAQ",element:d.jsx(n6,{})}),d.jsx(ze,{path:"/blog",element:d.jsx(u6,{})}),d.jsx(ze,{path:"/content",element:d.jsx(s6,{})}),d.jsx(ze,{path:"/testimonial",element:d.jsx(l6,{})}),d.jsx(ze,{path:"/new",element:d.jsx(EE,{})}),d.jsx(ze,{path:"/sect",element:d.jsx(xE,{})}),d.jsx(ze,{path:"/ola",element:d.jsx(c6,{})}),d.jsx(ze,{path:"/ref",element:d.jsx(f6,{})}),d.jsx(ze,{path:"/festival",element:d.jsx(d6,{})}),d.jsx(ze,{path:"/it",element:d.jsx(h6,{})}),d.jsx(ze,{path:"/bjaj",element:d.jsx(p6,{})}),d.jsx(ze,{path:"/bjaj2",element:d.jsx(m6,{})}),d.jsx(ze,{path:"/five",element:d.jsx(g6,{})}),d.jsx(ze,{path:"*",element:d.jsx(gk,{to:"/"})})]}),d.jsx(pR,{})]})]});pd.createRoot(document.getElementById("root")).render(d.jsxs(_R,{children:[d.jsx(de.StrictMode,{children:d.jsx(v6,{})}),","]}));
