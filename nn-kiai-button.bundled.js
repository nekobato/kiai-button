/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class s{constructor(t,s){if(s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const e=new Map,o=t=>(t=>{let o=e.get(t);return void 0===o&&e.set(t,o=new s(t,i)),o})("string"==typeof t?t:t+""),n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return o(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r,h,l,d;const a={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},c=(t,i)=>i!==t&&(i==i||t==t),u={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:c};class v extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=u){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=u){var e,o;const n=this.constructor.Πp(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:a.toAttribute)(i,s.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,i){var s,e,o;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),h=t.converter,l=null!==(o=null!==(e=null===(s=h)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof h?h:null)&&void 0!==o?o:a.fromAttribute;this.Πh=r,this[r]=l(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f,p,b,y;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null===(h=(r=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(r,{ReactiveElement:v}),(null!==(l=(d=globalThis).reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.0.0-rc.2");const g=globalThis.trustedTypes,w=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,$="?"+m,S=`<${$}>`,k=document,x=(t="")=>k.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,E=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,N=/"/g,A=/^(?:script|style|textarea)$/i,z=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),I=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),U=new WeakMap,_=k.createTreeWalker(k,129,null,!1);class W{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[l,d]=((t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=T;for(let i=0;i<s;i++){const s=t[i];let h,l,d=-1,a=0;for(;a<s.length&&(r.lastIndex=a,l=r.exec(s),null!==l);)a=r.lastIndex,r===T?"!--"===l[1]?r=j:void 0!==l[1]?r=E:void 0!==l[2]?(A.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=o?o:T,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?O:'"'===l[3]?N:P):r===N||r===P?r=O:r===j||r===E?r=T:(r=O,o=void 0);const c=r===O&&t[i+1].startsWith("/>")?" ":"";n+=r===T?s+S:d>=0?(e.push(h),s.slice(0,d)+"$lit$"+s.slice(d)+m+c):s+m+(-2===d?(e.push(void 0),i):c)}const h=n+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==w?w.createHTML(h):h,e]})(t,i);if(this.el=W.createElement(l,s),_.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=_.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(m)){const s=d[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(m),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?q:"?"===i[1]?H:"@"===i[1]?J:D})}else h.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(A.test(e.tagName)){const t=e.textContent.split(m),i=t.length-1;if(i>0){e.textContent=g?g.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],x()),_.nextNode(),h.push({type:2,index:++o});e.append(t[i],x())}}}else if(8===e.nodeType)if(e.data===$)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(m,t+1));)h.push({type:7,index:o}),t+=m.length-1}o++}}static createElement(t,i){const s=k.createElement("template");return s.innerHTML=t,s}}function B(t,i,s=t,e){var o,n,r,h;if(i===I)return i;let l=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const d=C(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l.O)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(t),l.T(t,s,e)),void 0!==e?(null!==(r=(h=s).Σi)&&void 0!==r?r:h.Σi=[])[e]=l:s.Σo=l),void 0!==l&&(i=B(t,l.S(t,i.values),l,e)),i}class K{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:k).importNode(s,!0);_.currentNode=o;let n=_.nextNode(),r=0,h=0,l=e[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new L(n,n.nextSibling,this,t):1===l.type?i=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(i=new Z(n,this,t)),this.l.push(i),l=e[++h]}r!==(null==l?void 0:l.index)&&(n=_.nextNode(),r++)}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class L{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=B(this,t,i),C(t)?t===R||null==t||""===t?(this.H!==R&&this.R(),this.H=R):t!==this.H&&t!==I&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return M(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(k.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=W.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else{const t=new K(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=U.get(t.strings);return void 0===i&&U.set(t.strings,i=new W(t)),i}g(t){M(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new L(this.k(x()),this.k(x()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class D{constructor(t,i,s,e,o){this.type=1,this.H=R,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(R),this.strings=s):this.H=R}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=B(this,t,i,0),n=!C(t)||t!==this.H&&t!==I,n&&(this.H=t);else{const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=B(this,e[s+r],i,r),h===I&&(h=this.H[r]),n||(n=!C(h)||h!==this.H[r]),h===R?t=R:t!==R&&(t+=(null!=h?h:"")+o[r+1]),this.H[r]=h}n&&!e&&this.W(t)}W(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends D{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===R?void 0:t}}class H extends D{constructor(){super(...arguments),this.type=4}W(t){t&&t!==R?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class J extends D{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=B(this,t,i,0))&&void 0!==s?s:R)===I)return;const e=this.H,o=t===R&&e!==R||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==R&&(e===R||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class Z{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){B(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,G,Q,V,X,Y;null===(p=(f=globalThis).litHtmlPlatformSupport)||void 0===p||p.call(f,W,L),(null!==(b=(y=globalThis).litHtmlVersions)&&void 0!==b?b:y.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(F=(Y=globalThis).litElementVersions)&&void 0!==F?F:Y.litElementVersions=[]).push("3.0.0-rc.2");class tt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new L(i.insertBefore(x(),t),t,void 0,s)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return I}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:tt}),null===(X=(V=globalThis).litElementPlatformSupport)||void 0===X||X.call(V,{LitElement:tt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){var i;if(super(t),t.type!==it||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).filter((i=>t[i])).join(" ")}update(t,[i]){if(void 0===this.bt){this.bt=new Set;for(const t in i)i[t]&&this.bt.add(t);return this.render(i)}const s=t.element.classList;this.bt.forEach((t=>{t in i||(s.remove(t),this.bt.delete(t))}));for(const t in i){const e=!!i[t];e!==this.bt.has(t)&&(e?(s.add(t),this.bt.add(t)):(s.remove(t),this.bt.delete(t)))}return I}}),et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):et(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function nt(t){return ot({...t,state:!0,attribute:!1})}var rt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let ht=class extends tt{duration=200;radius=50;strokeWidth=8;color="#000000";isPressing=!1;value=0;increaseInterval=null;onPressing(){const t=100/this.duration;this.isPressing=!0,this.increaseInterval||(this.increaseInterval=setInterval((()=>{this.isPressing?this.value<100&&(this.value+=t):this.value-=2*t,this.value<=0&&(this.value=0,clearInterval(this.increaseInterval),this.increaseInterval=null),this.requestUpdate()}),5))}onStopPress(){this.isPressing=!1}onClick(){this.dispatchEvent(new CustomEvent("click"))}onPressingByKey(t){"Space"!==t.code&&"Enter"!==t.code||this.onPressing()}onStopPressByKey(t){"Space"!==t.code&&"Enter"!==t.code||this.onStopPress()}render(){const{color:t,radius:i,strokeWidth:s,value:e}=this,o=2*i,n=i-s/2,r=2*Math.PI*n,h=r*((100-e)/100);return z`
      <style>
        :host {
          border-radius: 50%;
        }
        .container {
          position: relative;
          width: ${o}px;
          height: ${o}px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        button {
          width: 100%;
          height: 100%;
          border: none;
          background: none;
          border-radius: 50%;
          padding: 0;
          transition: transform 0.2s;
        }
        button.pressing slot {
          background-color: #444444;
        }
        button.activated {
          transform: scale(1.1);
        }
        button.activated slot {
          color: #000000;
          background-color: #dddddd;
        }
        svg {
          position: absolute;
          top: 0;
          left: 0;
          transform: rotate(-90deg);
          cursor: pointer;
          filter: drop-shadow(0 0 2px rgba(200, 200, 200, 0.8));
        }
        slot {
          display: inline-flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          background-color: #000000;
          border-radius: 50%;
          color: #efefef;
          font-weight: bold;
          font-size: 16px;
        }
      </style>
      <div id="container" class="container">
        <button
          @mousedown=${this.onPressing}
          @keydown=${this.onPressingByKey}
          @mouseup=${this.onStopPress}
          @mouseleave=${this.onStopPress}
          @keyup=${this.onStopPressByKey}
          @click=${this.onClick}
          class=${st({activated:this.value>=100,pressing:this.isPressing})}
        >
          <slot></slot>
          <svg width=${o} height=${o} viewBox=${`0 0 ${o} ${o}`}>
            <circle
              r=${n}
              cx=${i}
              cy=${i}
              stroke=${t}
              fill="transparent"
              stroke-width=${s}
              stroke-dasharray=${r}
              stroke-dashoffset=${h}
            />
          </svg>
        </button>
      </div>
    `}};rt([ot({type:Number})],ht.prototype,"duration",void 0),rt([ot({type:Number})],ht.prototype,"radius",void 0),rt([ot({type:Number})],ht.prototype,"strokeWidth",void 0),rt([ot({type:String})],ht.prototype,"color",void 0),rt([nt()],ht.prototype,"isPressing",void 0),rt([nt()],ht.prototype,"value",void 0),ht=rt([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */)("nn-kiai-button")],ht);export{ht as NNKiaiButton};
