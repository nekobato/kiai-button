/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class n{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const h=window,l=h.trustedTypes,d=l?l.emptyScript:"",a=h.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=v){var e;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:c).toAttribute(i,s.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,n=e._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=e.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:c;this._$El=n,this[n]=o.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:f}),(null!==(r=h.reactiveElementVersions)&&void 0!==r?r:h.reactiveElementVersions=[]).push("1.4.1");const g=window,y=g.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,m="?"+$,w=`<${m}>`,S=document,k=(t="")=>S.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,E=/>/g,M=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,P=/"/g,U=/^(?:script|style|textarea|title)$/i,j=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),N=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),R=new WeakMap,z=S.createTreeWalker(S,129,null,!1),I=(t,i)=>{const s=t.length-1,e=[];let n,o=2===i?"<svg>":"",r=x;for(let i=0;i<s;i++){const s=t[i];let h,l,d=-1,a=0;for(;a<s.length&&(r.lastIndex=a,l=r.exec(s),null!==l);)a=r.lastIndex,r===x?"!--"===l[1]?r=C:void 0!==l[1]?r=E:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=M):void 0!==l[3]&&(r=M):r===M?">"===l[0]?(r=null!=n?n:x,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?M:'"'===l[3]?P:O):r===P||r===O?r=M:r===C||r===E?r=x:(r=M,n=void 0);const c=r===M&&t[i+1].startsWith("/>")?" ":"";o+=r===x?s+w:d>=0?(e.push(h),s.slice(0,d)+"$lit$"+s.slice(d)+$+c):s+$+(-2===d?(e.push(void 0),i):c)}const h=o+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(h):h,e]};class B{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,o=0;const r=t.length-1,h=this.parts,[l,d]=I(t,i);if(this.el=B.createElement(l,s),z.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=z.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith($)){const s=d[o++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split($),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?Z:"@"===i[1]?q:D})}else h.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(U.test(e.tagName)){const t=e.textContent.split($),i=t.length-1;if(i>0){e.textContent=y?y.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],k()),z.nextNode(),h.push({type:2,index:++n});e.append(t[i],k())}}}else if(8===e.nodeType)if(e.data===m)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf($,t+1));)h.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,i){const s=S.createElement("template");return s.innerHTML=t,s}}function W(t,i,s=t,e){var n,o,r,h;if(i===N)return i;let l=void 0!==e?null===(n=s._$Cl)||void 0===n?void 0:n[e]:s._$Cu;const d=A(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,s,e)),void 0!==e?(null!==(r=(h=s)._$Cl)&&void 0!==r?r:h._$Cl=[])[e]=l:s._$Cu=l),void 0!==l&&(i=W(t,l._$AS(t,i.values),l,e)),i}class K{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:S).importNode(s,!0);z.currentNode=n;let o=z.nextNode(),r=0,h=0,l=e[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new L(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new F(o,this,t)),this.v.push(i),l=e[++h]}r!==(null==l?void 0:l.index)&&(o=z.nextNode(),r++)}return n}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class L{constructor(t,i,s,e){var n;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=W(this,t,i),A(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>_(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==T&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=B.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(s);else{const t=new K(n,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=R.get(t.strings);return void 0===i&&R.set(t.strings,i=new B(t)),i}O(t){_(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new L(this.S(k()),this.S(k()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class D{constructor(t,i,s,e,n){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=W(this,t,i,0),o=!A(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const e=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=W(this,e[s+r],i,r),h===N&&(h=this._$AH[r]),o||(o=!A(h)||h!==this._$AH[r]),h===T?t=T:t!==T&&(t+=(null!=h?h:"")+n[r+1]),this._$AH[r]=h}o&&!e&&this.P(t)}P(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends D{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===T?void 0:t}}const J=y?y.emptyScript:"";class Z extends D{constructor(){super(...arguments),this.type=4}P(t){t&&t!==T?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class q extends D{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=W(this,t,i,0))&&void 0!==s?s:T)===N)return;const e=this._$AH,n=t===T&&e!==T||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==T&&(e===T||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const G=g.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,V;null==G||G(B,L),(null!==(p=g.litHtmlVersions)&&void 0!==p?p:g.litHtmlVersions=[]).push("2.3.1");class X extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new L(i.insertBefore(k(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return N}}X.finalized=!0,X._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:X}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){var i;if(super(t),t.type!==tt||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var s,e;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(s=this.st)||void 0===s?void 0:s.has(t))&&this.nt.add(t);return this.render(i)}const n=t.element.classList;this.nt.forEach((t=>{t in i||(n.remove(t),this.nt.delete(t))}));for(const t in i){const s=!!i[t];s===this.nt.has(t)||(null===(e=this.st)||void 0===e?void 0:e.has(t))||(s?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return N}}),st=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):st(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function nt(t){return et({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements;var rt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let ht=class extends X{duration=200;radius=50;strokeWidth=8;color="#000000";isPressing=!1;value=0;increaseInterval=null;onPressing(){const t=100/this.duration;this.isPressing=!0,this.increaseInterval||(this.increaseInterval=setInterval((()=>{this.isPressing?this.value<100&&(this.value+=t):this.value-=2*t,this.value<=0&&(this.value=0,clearInterval(this.increaseInterval),this.increaseInterval=null),this.requestUpdate()}),5))}onStopPress(){this.isPressing=!1}onClick(){this.dispatchEvent(new CustomEvent("click"))}onPressingByKey(t){"Space"!==t.code&&"Enter"!==t.code||this.onPressing()}onStopPressByKey(t){"Space"!==t.code&&"Enter"!==t.code||this.onStopPress()}render(){const{color:t,radius:i,strokeWidth:s,value:e}=this,n=2*i,o=i-s/2,r=2*Math.PI*o,h=r*((100-e)/100);return j`
      <style>
        :host {
          border-radius: 50%;
        }
        .container {
          position: relative;
          width: ${n}px;
          height: ${n}px;
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
          class=${it({activated:this.value>=100,pressing:this.isPressing})}
        >
          <slot></slot>
          <svg width=${n} height=${n} viewBox=${`0 0 ${n} ${n}`}>
            <circle
              r=${o}
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
    `}};rt([et({type:Number})],ht.prototype,"duration",void 0),rt([et({type:Number})],ht.prototype,"radius",void 0),rt([et({type:Number})],ht.prototype,"strokeWidth",void 0),rt([et({type:String})],ht.prototype,"color",void 0),rt([nt()],ht.prototype,"isPressing",void 0),rt([nt()],ht.prototype,"value",void 0),ht=rt([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */)("nn-kiai-button")],ht);export{ht as NNKiaiButton};
