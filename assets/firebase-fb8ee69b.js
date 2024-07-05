/**
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
 */const Ro=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Xu=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,u=s+2<e.length,c=u?e[s+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(f=64)),r.push(n[h],n[l],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ro(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const l=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||l==null)throw new Ju;const f=i<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),l!==64){const A=c<<6&192|l;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ju extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zu=function(e){const t=Ro(e);return Po.encodeByteArray(t,!0)},Pn=function(e){return Zu(e).replace(/\./g,"")},tc=function(e){try{return Po.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ec(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nc=()=>ec().__FIREBASE_DEFAULTS__,rc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},sc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&tc(e[1]);return t&&JSON.parse(t)},hs=()=>{try{return nc()||rc()||sc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ic=e=>{var t,n;return(n=(t=hs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},So=e=>{const t=ic(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Co=()=>{var e;return(e=hs())===null||e===void 0?void 0:e.config};/**
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
 */class oc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Vo(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Pn(JSON.stringify(n)),Pn(JSON.stringify(o)),a].join(".")}/**
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
 */function Sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ac(){var e;const t=(e=hs())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uc(){return!ac()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Do(){try{return typeof indexedDB=="object"}catch{return!1}}function cc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const hc="FirebaseError";class Qt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=hc,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bo.prototype.create)}}class bo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?lc(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,a,r)}}function lc(e,t){return e.replace(dc,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const dc=/\{\$([^}]+)}/g;function Dr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(fi(i)&&fi(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fi(e){return e!==null&&typeof e=="object"}/**
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
 */function Me(e){return e&&e._delegate?e._delegate:e}class ue{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class fc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new oc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(gc(t))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Mt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mt){return this.instances.has(t)}getOptions(t=Mt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Mt){return this.component?this.component.multipleInstances?t:Mt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pc(e){return e===Mt?void 0:e}function gc(e){return e.instantiationMode==="EAGER"}/**
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
 */class mc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var P;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(P||(P={}));const _c={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},yc=P.INFO,Ec={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},vc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Ec[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class No{constructor(t){this.name=t,this._logLevel=yc,this._logHandler=vc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in P))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_c[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...t),this._logHandler(this,P.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...t),this._logHandler(this,P.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,P.INFO,...t),this._logHandler(this,P.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,P.WARN,...t),this._logHandler(this,P.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...t),this._logHandler(this,P.ERROR,...t)}}const Tc=(e,t)=>t.some(n=>e instanceof n);let pi,gi;function Ic(){return pi||(pi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wc(){return gi||(gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ko=new WeakMap,br=new WeakMap,Oo=new WeakMap,dr=new WeakMap,ls=new WeakMap;function Ac(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(St(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ko.set(n,e)}).catch(()=>{}),ls.set(t,e),t}function Rc(e){if(br.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});br.set(e,t)}let Nr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return br.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Oo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Pc(e){Nr=e(Nr)}function Sc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(fr(this),t,...n);return Oo.set(r,t.sort?t.sort():[t]),St(r)}:wc().includes(e)?function(...t){return e.apply(fr(this),t),St(ko.get(this))}:function(...t){return St(e.apply(fr(this),t))}}function Cc(e){return typeof e=="function"?Sc(e):(e instanceof IDBTransaction&&Rc(e),Tc(e,Ic())?new Proxy(e,Nr):e)}function St(e){if(e instanceof IDBRequest)return Ac(e);if(dr.has(e))return dr.get(e);const t=Cc(e);return t!==e&&(dr.set(e,t),ls.set(t,e)),t}const fr=e=>ls.get(e);function Vc(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=St(o);return r&&o.addEventListener("upgradeneeded",u=>{r(St(o.result),u.oldVersion,u.newVersion,St(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Dc=["get","getKey","getAll","getAllKeys","count"],bc=["put","add","delete","clear"],pr=new Map;function mi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(pr.get(t))return pr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=bc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Dc.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return pr.set(t,i),i}Pc(e=>({...e,get:(t,n,r)=>mi(t,n)||e.get(t,n,r),has:(t,n)=>!!mi(t,n)||e.has(t,n)}));/**
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
 */class Nc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kr="@firebase/app",_i="0.9.29";/**
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
 */const zt=new No("@firebase/app"),Oc="@firebase/app-compat",xc="@firebase/analytics-compat",Mc="@firebase/analytics",Lc="@firebase/app-check-compat",Fc="@firebase/app-check",Uc="@firebase/auth",Bc="@firebase/auth-compat",qc="@firebase/database",$c="@firebase/database-compat",jc="@firebase/functions",zc="@firebase/functions-compat",Gc="@firebase/installations",Kc="@firebase/installations-compat",Hc="@firebase/messaging",Qc="@firebase/messaging-compat",Wc="@firebase/performance",Yc="@firebase/performance-compat",Xc="@firebase/remote-config",Jc="@firebase/remote-config-compat",Zc="@firebase/storage",th="@firebase/storage-compat",eh="@firebase/firestore",nh="@firebase/firestore-compat",rh="firebase",sh="10.9.0";/**
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
 */const Or="[DEFAULT]",ih={[kr]:"fire-core",[Oc]:"fire-core-compat",[Mc]:"fire-analytics",[xc]:"fire-analytics-compat",[Fc]:"fire-app-check",[Lc]:"fire-app-check-compat",[Uc]:"fire-auth",[Bc]:"fire-auth-compat",[qc]:"fire-rtdb",[$c]:"fire-rtdb-compat",[jc]:"fire-fn",[zc]:"fire-fn-compat",[Gc]:"fire-iid",[Kc]:"fire-iid-compat",[Hc]:"fire-fcm",[Qc]:"fire-fcm-compat",[Wc]:"fire-perf",[Yc]:"fire-perf-compat",[Xc]:"fire-rc",[Jc]:"fire-rc-compat",[Zc]:"fire-gcs",[th]:"fire-gcs-compat",[eh]:"fire-fst",[nh]:"fire-fst-compat","fire-js":"fire-js",[rh]:"fire-js-all"};/**
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
 */const Cn=new Map,xr=new Map;function oh(e,t){try{e.container.addComponent(t)}catch(n){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Le(e){const t=e.name;if(xr.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;xr.set(t,e);for(const n of Cn.values())oh(n,e);return!0}function xo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ah={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new bo("app","Firebase",ah);/**
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
 */class uh{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const Mo=sh;function Lo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Or,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(n||(n=Co()),!n)throw Ct.create("no-options");const i=Cn.get(s);if(i){if(Dr(n,i.options)&&Dr(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const o=new mc(s);for(const u of xr.values())o.addComponent(u);const a=new uh(n,r,o);return Cn.set(s,a),a}function Fo(e=Or){const t=Cn.get(e);if(!t&&e===Or&&Co())return Lo();if(!t)throw Ct.create("no-app",{appName:e});return t}function Vt(e,t,n){var r;let s=(r=ih[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Le(new ue(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const ch="firebase-heartbeat-database",hh=1,Fe="firebase-heartbeat-store";let gr=null;function Uo(){return gr||(gr=Vc(ch,hh,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Fe)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ct.create("idb-open",{originalErrorMessage:e.message})})),gr}async function lh(e){try{const n=(await Uo()).transaction(Fe),r=await n.objectStore(Fe).get(Bo(e));return await n.done,r}catch(t){if(t instanceof Qt)zt.warn(t.message);else{const n=Ct.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zt.warn(n.message)}}}async function yi(e,t){try{const r=(await Uo()).transaction(Fe,"readwrite");await r.objectStore(Fe).put(t,Bo(e)),await r.done}catch(n){if(n instanceof Qt)zt.warn(n.message);else{const r=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(r.message)}}}function Bo(e){return`${e.name}!${e.options.appId}`}/**
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
 */const dh=1024,fh=30*24*60*60*1e3;class ph{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ei();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=fh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ei(),{heartbeatsToSend:r,unsentEntries:s}=gh(this._heartbeatsCache.heartbeats),i=Pn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ei(){return new Date().toISOString().substring(0,10)}function gh(e,t=dh){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vi(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Do()?cc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function vi(e){return Pn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function _h(e){Le(new ue("platform-logger",t=>new Nc(t),"PRIVATE")),Le(new ue("heartbeat",t=>new ph(t),"PRIVATE")),Vt(kr,_i,e),Vt(kr,_i,"esm2017"),Vt("fire-js","")}_h("");var yh="firebase",Eh="10.9.0";/**
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
 */Vt(yh,Eh,"app");/**
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
 */const qo="firebasestorage.googleapis.com",vh="storageBucket",Th=2*60*1e3,Ih=10*60*1e3;/**
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
 */class vt extends Qt{constructor(t,n,r=0){super(mr(t),`Firebase Storage: ${n} (${mr(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return mr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _t;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_t||(_t={}));function mr(e){return"storage/"+e}function wh(){const e="An unknown error occurred, please check the error payload for server response.";return new vt(_t.UNKNOWN,e)}function Ah(){return new vt(_t.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Rh(){return new vt(_t.CANCELED,"User canceled the upload/download.")}function Ph(e){return new vt(_t.INVALID_URL,"Invalid URL '"+e+"'.")}function Sh(e){return new vt(_t.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ti(e){return new vt(_t.INVALID_ARGUMENT,e)}function $o(){return new vt(_t.APP_DELETED,"The Firebase app was deleted.")}function Ch(e){return new vt(_t.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ut{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ut.makeFromUrl(t,n)}catch{return new ut(t,"")}if(r.path==="")return r;throw Sh(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",l=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${l}/${h}/b/${s}/o${f}`,"i"),A={bucket:1,path:3},V=n===qo?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",q=new RegExp(`^https?://${V}/${s}/${v}`,"i"),Y=[{regex:a,indices:u,postModify:i},{regex:g,indices:A,postModify:c},{regex:q,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<Y.length;x++){const Tt=Y[x],lt=Tt.regex.exec(t);if(lt){const Xt=lt[Tt.indices.bucket];let dn=lt[Tt.indices.path];dn||(dn=""),r=new ut(Xt,dn),Tt.postModify(r);break}}if(r==null)throw Ph(t);return r}}class Vh{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Dh(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...v){c||(c=!0,t.apply(null,v))}function l(v){s=setTimeout(()=>{s=null,e(g,u())},v)}function f(){i&&clearTimeout(i)}function g(v,...q){if(c){f();return}if(v){f(),h.call(null,v,...q);return}if(u()||o){f(),h.call(null,v,...q);return}r<64&&(r*=2);let Y;a===1?(a=2,Y=0):Y=(r+Math.random())*1e3,l(Y)}let A=!1;function V(v){A||(A=!0,f(),!c&&(s!==null?(v||(a=2),clearTimeout(s),l(0)):v||(a=1)))}return l(0),i=setTimeout(()=>{o=!0,V(!0)},n),V}function bh(e){e(!1)}/**
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
 */function Nh(e){return e!==void 0}function Ii(e,t,n,r){if(r<t)throw Ti(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Ti(`Invalid value for '${e}'. Expected ${n} or less.`)}function kh(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Vn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Vn||(Vn={}));/**
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
 */function Oh(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||s||i}/**
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
 */class xh{constructor(t,n,r,s,i,o,a,u,c,h,l,f=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=l,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,A)=>{this.resolve_=g,this.reject_=A,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new fn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Vn.NO_ERROR,u=i.getStatus();if(!a||Oh(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Vn.ABORT;r(!1,new fn(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new fn(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Nh(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=wh();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?$o():Rh();o(u)}else{const u=Ah();o(u)}};this.canceled_?n(!1,new fn(!1,null,!0)):this.backoffId_=Dh(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&bh(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fn{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Mh(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Lh(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Fh(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Uh(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Bh(e,t,n,r,s,i,o=!0){const a=kh(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return Fh(c,t),Mh(c,n),Lh(c,i),Uh(c,r),new xh(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
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
 */function qh(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function $h(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class Dn{constructor(t,n){this._service=t,n instanceof ut?this._location=n:this._location=ut.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Dn(t,n)}get root(){const t=new ut(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $h(this._location.path)}get storage(){return this._service}get parent(){const t=qh(this._location.path);if(t===null)return null;const n=new ut(this._location.bucket,t);return new Dn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Ch(t)}}function wi(e,t){const n=t==null?void 0:t[vh];return n==null?null:ut.makeFromBucketSpec(n,e)}function jh(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:Vo(s,e.app.options.projectId))}class zh{constructor(t,n,r,s,i){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=qo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Th,this._maxUploadRetryTime=Ih,this._requests=new Set,s!=null?this._bucket=ut.makeFromBucketSpec(s,this._host):this._bucket=wi(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ut.makeFromBucketSpec(this._url,t):this._bucket=wi(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ii("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ii("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Dn(this,t)}_makeRequest(t,n,r,s,i=!0){if(this._deleted)return new Vh($o());{const o=Bh(t,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const Ai="@firebase/storage",Ri="0.12.2";/**
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
 */const jo="storage";function Gh(e=Fo(),t){e=Me(e);const r=xo(e,jo).getImmediate({identifier:t}),s=So("storage");return s&&Kh(r,...s),r}function Kh(e,t,n,r={}){jh(e,t,n,r)}function Hh(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new zh(n,r,s,t,Mo)}function Qh(){Le(new ue(jo,Hh,"PUBLIC").setMultipleInstances(!0)),Vt(Ai,Ri,""),Vt(Ai,Ri,"esm2017")}Qh();var Wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,ds=ds||{},T=Wh||self;function qn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Je(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Yh(e){return Object.prototype.hasOwnProperty.call(e,_r)&&e[_r]||(e[_r]=++Xh)}var _r="closure_uid_"+(1e9*Math.random()>>>0),Xh=0;function Jh(e,t,n){return e.call.apply(e.bind,arguments)}function Zh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function et(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=Jh:et=Zh,et.apply(null,arguments)}function pn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function G(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ot(){this.s=this.s,this.o=this.o}var tl=0;Ot.prototype.s=!1;Ot.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tl!=0)&&Yh(this)};Ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function fs(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Pi(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qn(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function nt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var el=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};T.addEventListener("test",n,t),T.removeEventListener("test",n,t)}catch{}return e}();function Ue(e){return/^[\s\xa0]*$/.test(e)}function $n(){var e=T.navigator;return e&&(e=e.userAgent)?e:""}function dt(e){return $n().indexOf(e)!=-1}function ps(e){return ps[" "](e),e}ps[" "]=function(){};function nl(e,t){var n=Ql;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var rl=dt("Opera"),ce=dt("Trident")||dt("MSIE"),Go=dt("Edge"),Mr=Go||ce,Ko=dt("Gecko")&&!($n().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),sl=$n().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function Ho(){var e=T.document;return e?e.documentMode:void 0}var Lr;t:{var yr="",Er=function(){var e=$n();if(Ko)return/rv:([^\);]+)(\)|;)/.exec(e);if(Go)return/Edge\/([\d\.]+)/.exec(e);if(ce)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(sl)return/WebKit\/(\S+)/.exec(e);if(rl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Er&&(yr=Er?Er[1]:""),ce){var vr=Ho();if(vr!=null&&vr>parseFloat(yr)){Lr=String(vr);break t}}Lr=yr}var Fr;if(T.document&&ce){var Si=Ho();Fr=Si||parseInt(Lr,10)||void 0}else Fr=void 0;var il=Fr;function Be(e,t){if(nt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ko){t:{try{ps(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ol[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Be.$.h.call(this)}}G(Be,nt);var ol={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),al=0;function ul(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++al,this.fa=this.ia=!1}function jn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function gs(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function cl(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Qo(e){const t={};for(const n in e)t[n]=e[n];return t}const Ci="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wo(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Ci.length;i++)n=Ci[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function zn(e){this.src=e,this.g={},this.h=0}zn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Br(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ul(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Ur(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=zo(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(jn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Br(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var ms="closure_lm_"+(1e6*Math.random()|0),Tr={};function Yo(e,t,n,r,s){if(r&&r.once)return Jo(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Yo(e,t[i],n,r,s);return null}return n=Es(n),e&&e[Ze]?e.O(t,n,Je(r)?!!r.capture:!!r,s):Xo(e,t,n,!1,r,s)}function Xo(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Je(s)?!!s.capture:!!s,a=ys(e);if(a||(e[ms]=a=new zn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=hl(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)el||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ta(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hl(){function e(n){return t.call(e.src,e.listener,n)}const t=ll;return e}function Jo(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Jo(e,t[i],n,r,s);return null}return n=Es(n),e&&e[Ze]?e.P(t,n,Je(r)?!!r.capture:!!r,s):Xo(e,t,n,!0,r,s)}function Zo(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Zo(e,t[i],n,r,s);else r=Je(r)?!!r.capture:!!r,n=Es(n),e&&e[Ze]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Br(i,n,r,s),-1<n&&(jn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ys(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Br(t,n,r,s)),(n=-1<e?t[e]:null)&&_s(n))}function _s(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ze])Ur(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ta(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ys(t))?(Ur(n,e),n.h==0&&(n.src=null,t[ms]=null)):jn(e)}}}function ta(e){return e in Tr?Tr[e]:Tr[e]="on"+e}function ll(e,t){if(e.fa)e=!0;else{t=new Be(t,this);var n=e.listener,r=e.la||e.src;e.ia&&_s(e),e=n.call(r,t)}return e}function ys(e){return e=e[ms],e instanceof zn?e:null}var Ir="__closure_events_fn_"+(1e9*Math.random()>>>0);function Es(e){return typeof e=="function"?e:(e[Ir]||(e[Ir]=function(t){return e.handleEvent(t)}),e[Ir])}function z(){Ot.call(this),this.i=new zn(this),this.S=this,this.J=null}G(z,Ot);z.prototype[Ze]=!0;z.prototype.removeEventListener=function(e,t,n,r){Zo(this,e,t,n,r)};function Q(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new nt(t,e);else if(t instanceof nt)t.target=t.target||e;else{var s=t;t=new nt(r,e),Wo(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=gn(o,r,!0,t)&&s}if(o=t.g=e,s=gn(o,r,!0,t)&&s,s=gn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=gn(o,r,!1,t)&&s}z.prototype.N=function(){if(z.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)jn(n[r]);delete e.g[t],e.h--}}this.J=null};z.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};z.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function gn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Ur(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var vs=T.JSON.stringify;class dl{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function fl(){var e=Ts;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class pl{constructor(){this.h=this.g=null}add(t,n){const r=ea.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ea=new dl(()=>new gl,e=>e.reset());class gl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ml(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function _l(e){T.setTimeout(()=>{throw e},0)}let qe,$e=!1,Ts=new pl,na=()=>{const e=T.Promise.resolve(void 0);qe=()=>{e.then(yl)}};var yl=()=>{for(var e;e=fl();){try{e.h.call(e.g)}catch(n){_l(n)}var t=ea;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}$e=!1};function Gn(e,t){z.call(this),this.h=e||1,this.g=t||T,this.j=et(this.qb,this),this.l=Date.now()}G(Gn,z);m=Gn.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(Is(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Is(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){Gn.$.N.call(this),Is(this),delete this.g};function ws(e,t,n){if(typeof e=="function")n&&(e=et(e,n));else if(e&&typeof e.handleEvent=="function")e=et(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function ra(e){e.g=ws(()=>{e.g=null,e.i&&(e.i=!1,ra(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class El extends Ot{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ra(this)}N(){super.N(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(e){Ot.call(this),this.h=e,this.g={}}G(je,Ot);var Vi=[];function sa(e,t,n,r){Array.isArray(n)||(n&&(Vi[0]=n.toString()),n=Vi);for(var s=0;s<n.length;s++){var i=Yo(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ia(e){gs(e.g,function(t,n){this.g.hasOwnProperty(n)&&_s(t)},e),e.g={}}je.prototype.N=function(){je.$.N.call(this),ia(this)};je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Kn(){this.g=!0}Kn.prototype.Ea=function(){this.g=!1};function vl(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Tl(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function ne(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+wl(e,n)+(r?" "+r:"")})}function Il(e,t){e.info(function(){return"TIMEOUT: "+t})}Kn.prototype.info=function(){};function wl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return vs(n)}catch{return t}}var Wt={},Di=null;function Hn(){return Di=Di||new z}Wt.Ta="serverreachability";function oa(e){nt.call(this,Wt.Ta,e)}G(oa,nt);function ze(e){const t=Hn();Q(t,new oa(t))}Wt.STAT_EVENT="statevent";function aa(e,t){nt.call(this,Wt.STAT_EVENT,e),this.stat=t}G(aa,nt);function st(e){const t=Hn();Q(t,new aa(t,e))}Wt.Ua="timingevent";function ua(e,t){nt.call(this,Wt.Ua,e),this.size=t}G(ua,nt);function tn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var Qn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ca={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function As(){}As.prototype.h=null;function bi(e){return e.h||(e.h=e.i())}function ha(){}var en={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rs(){nt.call(this,"d")}G(Rs,nt);function Ps(){nt.call(this,"c")}G(Ps,nt);var qr;function Wn(){}G(Wn,As);Wn.prototype.g=function(){return new XMLHttpRequest};Wn.prototype.i=function(){return{}};qr=new Wn;function nn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new je(this),this.P=Al,e=Mr?125:void 0,this.V=new Gn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new la}function la(){this.i=null,this.g="",this.h=!1}var Al=45e3,da={},$r={};m=nn.prototype;m.setTimeout=function(e){this.P=e};function jr(e,t,n){e.L=1,e.A=Xn(wt(t)),e.u=n,e.S=!0,fa(e,null)}function fa(e,t){e.G=Date.now(),rn(e),e.B=wt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Ta(n.i,"t",r),e.o=0,n=e.l.J,e.h=new la,e.g=$a(e.l,n?t:null,!e.u),0<e.O&&(e.M=new El(et(e.Pa,e,e.g),e.O)),sa(e.U,e.g,"readystatechange",e.nb),t=e.I?Qo(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ze(),vl(e.j,e.v,e.B,e.m,e.W,e.u)}m.nb=function(e){e=e.target;const t=this.M;t&&pt(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const h=pt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||Mr||this.g&&(this.h.h||this.g.ja()||xi(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?ze(3):ze(2)),Yn(this);var n=this.g.da();this.ca=n;e:if(pa(this)){var r=xi(this.g);e="";var s=r.length,i=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),De(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Tl(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ue(a)){var c=a;break e}}c=null}if(n=c)ne(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zr(this,n);else{this.i=!1,this.s=3,st(12),Ft(this),De(this);break t}}this.S?(ga(this,h,o),Mr&&this.i&&h==3&&(sa(this.U,this.V,"tick",this.mb),this.V.start())):(ne(this.j,this.m,o,null),zr(this,o)),h==4&&Ft(this),this.i&&!this.J&&(h==4?Fa(this.l,this):(this.i=!1,rn(this)))}else Gl(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Ft(this),De(this)}}}catch{}finally{}};function pa(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function ga(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=Rl(e,n),s==$r){t==4&&(e.s=4,st(14),r=!1),ne(e.j,e.m,null,"[Incomplete Response]");break}else if(s==da){e.s=4,st(15),ne(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ne(e.j,e.m,s,null),zr(e,s);pa(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,st(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ns(t),t.M=!0,st(11))):(ne(e.j,e.m,n,"[Invalid Chunked Response]"),Ft(e),De(e))}m.mb=function(){if(this.g){var e=pt(this.g),t=this.g.ja();this.o<t.length&&(Yn(this),ga(this,e,t),this.i&&e!=4&&rn(this))}};function Rl(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?$r:(n=Number(t.substring(n,r)),isNaN(n)?da:(r+=1,r+n>t.length?$r:(t=t.slice(r,r+n),e.o=r+n,t)))}m.cancel=function(){this.J=!0,Ft(this)};function rn(e){e.Y=Date.now()+e.P,ma(e,e.P)}function ma(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=tn(et(e.lb,e),t)}function Yn(e){e.C&&(T.clearTimeout(e.C),e.C=null)}m.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Il(this.j,this.B),this.L!=2&&(ze(),st(17)),Ft(this),this.s=2,De(this)):ma(this,this.Y-e)};function De(e){e.l.H==0||e.J||Fa(e.l,e)}function Ft(e){Yn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Is(e.V),ia(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function zr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Gr(n.i,e))){if(!e.K&&Gr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)kn(n),er(n);else break t;bs(n),st(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=tn(et(n.ib,n),6e3));if(1>=Aa(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ut(n,11)}else if((e.K||n.g==e)&&kn(n),!Ue(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const A=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=r.i;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ss(i,i.h),i.h=null))}if(r.F){const V=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;V&&(r.Da=V,N(r.I,r.F,V))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=qa(r,r.J?r.pa:null,r.Y),o.K){Ra(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(Yn(a),rn(a)),r.g=o}else Ma(r);0<n.j.length&&nr(n)}else c[0]!="stop"&&c[0]!="close"||Ut(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ut(n,7):Ds(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ze(4)}catch{}}function Pl(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(qn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Sl(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(qn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function _a(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(qn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Sl(e),r=Pl(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cl(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function $t(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $t){this.h=e.h,bn(this,e.j),this.s=e.s,this.g=e.g,Nn(this,e.m),this.l=e.l;var t=e.i,n=new Ge;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ni(this,n),this.o=e.o}else e&&(t=String(e).match(ya))?(this.h=!1,bn(this,t[1]||"",!0),this.s=Pe(t[2]||""),this.g=Pe(t[3]||"",!0),Nn(this,t[4]),this.l=Pe(t[5]||"",!0),Ni(this,t[6]||"",!0),this.o=Pe(t[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Se(t,ki,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Se(t,ki,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Se(n,n.charAt(0)=="/"?bl:Dl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Se(n,kl)),e.join("")};function wt(e){return new $t(e)}function bn(e,t,n){e.j=n?Pe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Nn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ni(e,t,n){t instanceof Ge?(e.i=t,Ol(e.i,e.h)):(n||(t=Se(t,Nl)),e.i=new Ge(t,e.h))}function N(e,t,n){e.i.set(t,n)}function Xn(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Pe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Vl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ki=/[#\/\?@]/g,Dl=/[#\?:]/g,bl=/[#\?]/g,Nl=/[#\?@]/g,kl=/#/g;function Ge(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function xt(e){e.g||(e.g=new Map,e.h=0,e.i&&Cl(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Ge.prototype;m.add=function(e,t){xt(this),this.i=null,e=_e(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ea(e,t){xt(e),t=_e(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function va(e,t){return xt(e),t=_e(e,t),e.g.has(t)}m.forEach=function(e,t){xt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};m.ta=function(){xt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};m.Z=function(e){xt(this);let t=[];if(typeof e=="string")va(this,e)&&(t=t.concat(this.g.get(_e(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return xt(this),this.i=null,e=_e(this,e),va(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Ta(e,t,n){Ea(e,t),0<n.length&&(e.i=null,e.g.set(_e(e,t),fs(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function _e(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ol(e,t){t&&!e.j&&(xt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ea(this,r),Ta(this,s,n))},e)),e.j=t}var xl=class{constructor(e,t){this.g=e,this.map=t}};function Ia(e){this.l=e||Ml,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ka&&T.g.Ka()&&T.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ml=10;function wa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Aa(e){return e.h?1:e.g?e.g.size:0}function Gr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ss(e,t){e.g?e.g.add(t):e.h=t}function Ra(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ia.prototype.cancel=function(){if(this.i=Pa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Pa(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return fs(e.i)}var Ll=class{stringify(e){return T.JSON.stringify(e,void 0)}parse(e){return T.JSON.parse(e,void 0)}};function Fl(){this.g=new Ll}function Ul(e,t,n){const r=n||"";try{_a(e,function(s,i){let o=s;Je(s)&&(o=vs(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Bl(e,t){const n=new Kn;if(T.Image){const r=new Image;r.onload=pn(mn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=pn(mn,n,r,"TestLoadImage: error",!1,t),r.onabort=pn(mn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=pn(mn,n,r,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function mn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Jn(e){this.l=e.ec||null,this.j=e.ob||!1}G(Jn,As);Jn.prototype.g=function(){return new Zn(this.l,this.j)};Jn.prototype.i=function(e){return function(){return e}}({});function Zn(e,t){z.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Cs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Zn,z);var Cs=0;m=Zn.prototype;m.open=function(e,t){if(this.readyState!=Cs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ke(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||T).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=Cs};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ke(this)),this.g&&(this.readyState=3,Ke(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sa(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Sa(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sn(this):Ke(this),this.readyState==3&&Sa(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,sn(this))};m.Ya=function(e){this.g&&(this.response=e,sn(this))};m.ka=function(){this.g&&sn(this)};function sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ke(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ke(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Zn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ql=T.JSON.parse;function O(e){z.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ca,this.L=this.M=!1}G(O,z);var Ca="",$l=/^https?$/i,jl=["POST","PUT"];m=O.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qr.g(),this.C=this.u?bi(this.u):bi(qr),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Oi(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=T.FormData&&e instanceof T.FormData,!(0<=zo(jl,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ba(this),0<this.B&&((this.L=zl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=ws(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Oi(this,i)}};function zl(e){return ce&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof ds<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function Oi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Va(e),tr(e)}function Va(e){e.F||(e.F=!0,Q(e,"complete"),Q(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),tr(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tr(this,!0)),O.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?Da(this):this.kb())};m.kb=function(){Da(this)};function Da(e){if(e.h&&typeof ds<"u"&&(!e.C[1]||pt(e)!=4||e.da()!=2)){if(e.v&&pt(e)==4)ws(e.La,0,e);else if(Q(e,"readystatechange"),pt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(ya)[1]||null;!s&&T.self&&T.self.location&&(s=T.self.location.protocol.slice(0,-1)),r=!$l.test(s?s.toLowerCase():"")}n=r}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var i=2<pt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Va(e)}}finally{tr(e)}}}}function tr(e,t){if(e.g){ba(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=r}catch{}}}function ba(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}m.isActive=function(){return!!this.g};function pt(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ql(t)}};function xi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ca:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Gl(e){const t={};e=(e.g&&2<=pt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Ue(e[r]))continue;var n=ml(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}cl(t,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Na(e){let t="";return gs(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Vs(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Na(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function we(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ka(e){this.Ga=0,this.j=[],this.l=new Kn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=we("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=we("baseRetryDelayMs",5e3,e),this.hb=we("retryDelaySeedMs",1e4,e),this.eb=we("forwardChannelMaxRetries",2,e),this.xa=we("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ia(e&&e.concurrentRequestLimit),this.Ja=new Fl,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=ka.prototype;m.ra=8;m.H=1;function Ds(e){if(Oa(e),e.H==3){var t=e.W++,n=wt(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),on(e,n),t=new nn(e,e.l,t),t.L=2,t.A=Xn(wt(n)),n=!1,T.navigator&&T.navigator.sendBeacon)try{n=T.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&T.Image&&(new Image().src=t.A,n=!0),n||(t.g=$a(t.l,null),t.g.ha(t.A)),t.G=Date.now(),rn(t)}Ba(e)}function er(e){e.g&&(Ns(e),e.g.cancel(),e.g=null)}function Oa(e){er(e),e.u&&(T.clearTimeout(e.u),e.u=null),kn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function nr(e){if(!wa(e.i)&&!e.m){e.m=!0;var t=e.Na;qe||na(),$e||(qe(),$e=!0),Ts.add(t,e),e.C=0}}function Kl(e,t){return Aa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=tn(et(e.Na,e,t),Ua(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new nn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Qo(i),Wo(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=xa(this,s,t),n=wt(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),on(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Na(i)))+"&"+t:this.o&&Vs(n,this.o,i)),Ss(this.i,s),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),s.aa=!0,jr(s,n,null)):jr(s,n,t),this.H=2}}else this.H==3&&(e?Mi(this,e):this.j.length==0||wa(this.i)||Mi(this))};function Mi(e,t){var n;t?n=t.m:n=e.W++;const r=wt(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),on(e,r),e.o&&e.s&&Vs(r,e.o,e.s),n=new nn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=xa(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ss(e.i,n),jr(n,r,t)}function on(e,t){e.na&&gs(e.na,function(n,r){N(t,r,n)}),e.h&&_a({},function(n,r){N(t,r,n)})}function xa(e,t,n){n=Math.min(e.j.length,n);var r=e.h?et(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=s[u].g;const h=s[u].map;if(c-=i,0>c)i=Math.max(0,s[u].g-100),a=!1;else try{Ul(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Ma(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;qe||na(),$e||(qe(),$e=!0),Ts.add(t,e),e.A=0}}function bs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=tn(et(e.Ma,e),Ua(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,La(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=tn(et(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),er(this),La(this))};function Ns(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function La(e){e.g=new nn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=wt(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),on(e,t),e.o&&e.s&&Vs(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Xn(wt(t)),n.u=null,n.S=!0,fa(n,e)}m.ib=function(){this.v!=null&&(this.v=null,er(this),bs(this),st(19))};function kn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function Fa(e,t){var n=null;if(e.g==t){kn(e),Ns(e),e.g=null;var r=2}else if(Gr(e.i,t))n=t.F,Ra(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=Hn(),Q(r,new ua(r,n)),nr(e)}else Ma(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Kl(e,t)||r==2&&bs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Ut(e,5);break;case 4:Ut(e,10);break;case 3:Ut(e,6);break;default:Ut(e,2)}}}function Ua(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ut(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=et(e.pb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||bn(n,"https"),Xn(n)),Bl(n.toString(),r)}else st(2);e.H=0,e.h&&e.h.za(t),Ba(e),Oa(e)}m.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function Ba(e){if(e.H=0,e.ma=[],e.h){const t=Pa(e.i);(t.length!=0||e.j.length!=0)&&(Pi(e.ma,t),Pi(e.ma,e.j),e.i.i.length=0,fs(e.j),e.j.length=0),e.h.ya()}}function qa(e,t,n){var r=n instanceof $t?wt(n):new $t(n);if(r.g!="")t&&(r.g=t+"."+r.g),Nn(r,r.m);else{var s=T.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new $t(null);r&&bn(i,r),t&&(i.g=t),s&&Nn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),on(e,r),r}function $a(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new O(new Jn({ob:n})):new O(e.va),t.Oa(e.J),t}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function ja(){}m=ja.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function On(){if(ce&&!(10<=Number(il)))throw Error("Environmental error: no available transport.")}On.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){z.call(this),this.g=new ka(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ue(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ue(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ye(this)}G(ot,z);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=qa(e,null,e.Y),nr(e)};ot.prototype.close=function(){Ds(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=vs(e),e=n);t.j.push(new xl(t.fb++,e)),t.H==3&&nr(t)};ot.prototype.N=function(){this.g.h=null,delete this.j,Ds(this.g),delete this.g,ot.$.N.call(this)};function za(e){Rs.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(za,Rs);function Ga(){Ps.call(this),this.status=1}G(Ga,Ps);function ye(e){this.g=e}G(ye,ja);ye.prototype.Ba=function(){Q(this.g,"a")};ye.prototype.Aa=function(e){Q(this.g,new za(e))};ye.prototype.za=function(e){Q(this.g,new Ga)};ye.prototype.ya=function(){Q(this.g,"b")};function Hl(){this.blockSize=-1}function ct(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}G(ct,Hl);ct.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function wr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}ct.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)wr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){wr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){wr(this,r),s=0;break}}this.h=s,this.i+=t};ct.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function b(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Ql={};function ks(e){return-128<=e&&128>e?nl(e,function(t){return new b([t|0],0>t?-1:0)}):new b([e|0],0>e?-1:0)}function gt(e){if(isNaN(e)||!isFinite(e))return re;if(0>e)return H(gt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Kr;return new b(t,0)}function Ka(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return H(Ka(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gt(Math.pow(t,8)),r=re,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=gt(Math.pow(t,i)),r=r.R(i).add(gt(o))):(r=r.R(n),r=r.add(gt(o)))}return r}var Kr=4294967296,re=ks(0),Hr=ks(1),Li=ks(16777216);m=b.prototype;m.ea=function(){if(at(this))return-H(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Kr+r)*t,t*=Kr}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(It(this))return"0";if(at(this))return"-"+H(this).toString(e);for(var t=gt(Math.pow(e,6)),n=this,r="";;){var s=Mn(n,t).g;n=xn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,It(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function It(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function at(e){return e.h==-1}m.X=function(e){return e=xn(this,e),at(e)?-1:It(e)?0:1};function H(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new b(n,~e.h).add(Hr)}m.abs=function(){return at(this)?H(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new b(n,n[n.length-1]&-2147483648?-1:0)};function xn(e,t){return e.add(H(t))}m.R=function(e){if(It(this)||It(e))return re;if(at(this))return at(e)?H(this).R(H(e)):H(H(this).R(e));if(at(e))return H(this.R(H(e)));if(0>this.X(Li)&&0>e.X(Li))return gt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,u=e.D(s)&65535;n[2*r+2*s]+=o*u,_n(n,2*r+2*s),n[2*r+2*s+1]+=i*u,_n(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,_n(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,_n(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new b(n,0)};function _n(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ae(e,t){this.g=e,this.h=t}function Mn(e,t){if(It(t))throw Error("division by zero");if(It(e))return new Ae(re,re);if(at(e))return t=Mn(H(e),t),new Ae(H(t.g),H(t.h));if(at(t))return t=Mn(e,H(t)),new Ae(H(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Hr,r=t;0>=r.X(e);)n=Fi(n),r=Fi(r);var s=Jt(n,1),i=Jt(r,1);for(r=Jt(r,2),n=Jt(n,2);!It(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Jt(r,1),n=Jt(n,1)}return t=xn(e,s.R(t)),new Ae(s,t)}for(s=re;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=gt(n),o=i.R(t);at(o)||0<o.X(e);)n-=r,i=gt(n),o=i.R(t);It(i)&&(i=Hr),s=s.add(i),e=xn(e,o)}return new Ae(s,e)}m.gb=function(e){return Mn(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new b(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new b(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new b(n,this.h^e.h)};function Fi(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new b(n,e.h)}function Jt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new b(s,e.h)}On.prototype.createWebChannel=On.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;Qn.NO_ERROR=0;Qn.TIMEOUT=8;Qn.HTTP_ERROR=6;ca.COMPLETE="complete";ha.EventType=en;en.OPEN="a";en.CLOSE="b";en.ERROR="c";en.MESSAGE="d";z.prototype.listen=z.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;ct.prototype.digest=ct.prototype.l;ct.prototype.reset=ct.prototype.reset;ct.prototype.update=ct.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=gt;b.fromString=Ka;var Wl=function(){return new On},Yl=function(){return Hn()},Ar=Qn,Xl=ca,Jl=Wt,Ui={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yn=ha,Zl=O,td=ct,se=b;const Bi="@firebase/firestore";/**
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
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
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
 */let Ee="10.9.0";/**
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
 */const Gt=new No("@firebase/firestore");function Re(){return Gt.logLevel}function _(e,...t){if(Gt.logLevel<=P.DEBUG){const n=t.map(Os);Gt.debug(`Firestore (${Ee}): ${e}`,...n)}}function yt(e,...t){if(Gt.logLevel<=P.ERROR){const n=t.map(Os);Gt.error(`Firestore (${Ee}): ${e}`,...n)}}function he(e,...t){if(Gt.logLevel<=P.WARN){const n=t.map(Os);Gt.warn(`Firestore (${Ee}): ${e}`,...n)}}function Os(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function w(e="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+e;throw yt(t),new Error(t)}function B(e,t){e||w()}function C(e,t){return e}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Qt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Ha{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ed{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class nd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rd{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new Ha(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return B(t===null||typeof t=="string"),new J(t)}}class sd{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class id{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new sd(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class od{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ad{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new od(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ud(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=ud(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function D(e,t){return e<t?-1:e>t?1:0}function le(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class j{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new j(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new j(0,0))}static max(){return new I(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class He{constructor(t,n,r){n===void 0?n=0:n>t.length&&w(),r===void 0?r=t.length-n:r>t.length-n&&w(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class k extends He{construct(t,n,r){return new k(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new k(n)}static emptyPath(){return new k([])}}const hd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends He{construct(t,n,r){return new tt(t,n,r)}static isValidIdentifier(t){return hd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(k.fromString(t))}static fromName(t){return new E(k.fromString(t).popFirst(5))}static empty(){return new E(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return k.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new k(t.slice()))}}function ld(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=I.fromTimestamp(r===1e9?new j(n+1,0):new j(n,r));return new bt(s,E.empty(),t)}function dd(e){return new bt(e.readTime,e.key,-1)}class bt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new bt(I.min(),E.empty(),-1)}static max(){return new bt(I.max(),E.empty(),-1)}}function fd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
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
 */const pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function xs(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==pd)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,r)=>{n(t)})}static reject(t){return new d((n,r)=>{r(t)})}static waitFor(t){return new d((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=d.resolve(!1);for(const r of t)n=n.next(s=>s?d.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new d((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(t,n){return new d((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Ms{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new Dt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new be(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Ls(r.target.error);this.V.reject(new be(t,s))}}static open(t,n,r,s){try{return new Ms(n,t.transaction(s,r))}catch(i){throw new be(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new _d(n)}}class Bt{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Bt.S(Sn())===12.2&&yt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),Lt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Do())return!1;if(Bt.C())return!0;const t=Sn(),n=Bt.S(t),r=0<n&&n<10,s=Bt.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new be(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new y(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new be(t,o))},s.onupgradeneeded=i=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Ms.open(this.db,t,i?"readonly":"readwrite",r),u=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),d.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class md{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Lt(this.k.delete())}}class be extends y{constructor(t,n){super(p.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function an(e){return e.name==="IndexedDbTransactionError"}class _d{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(_("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Lt(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),Lt(this.store.add(t))}get(t){return Lt(this.store.get(t)).next(n=>(n===void 0&&(n=null),_("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),Lt(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),Lt(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new d((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new d((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new d((r,s)=>{n.onerror=i=>{const o=Ls(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new d((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new md(a),c=n(a.primaryKey,a.value,u);if(c instanceof d){const h=c.catch(l=>(u.done(),d.reject(l)));r.push(h)}u.isDone?s():u.$===null?a.continue():a.continue(u.$)}}).next(()=>d.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Lt(e){return new d((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=Ls(r.target.error);n(s)}})}let qi=!1;function Ls(e){const t=Bt.S(Sn());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qi||(qi=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class Fs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Fs._e=-1;function rr(e){return e==null}function Ln(e){return e===0&&1/e==-1/0}function yd(e){return typeof e=="number"&&Number.isInteger(e)&&!Ln(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function $i(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function un(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Qa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class M{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new M(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new M(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new En(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new En(this.root,t,this.comparator,!1)}getReverseIterator(){return new En(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new En(this.root,t,this.comparator,!0)}}class En{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??K.RED,this.left=s??K.EMPTY,this.right=i??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new K(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return K.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();const t=this.left.check();if(t!==this.right.check())throw w();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(t,n,r,s,i){return this}insert(t,n,r){return new K(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class W{constructor(t){this.comparator=t,this.data=new M(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ji(this.data.getIterator())}getIteratorFrom(t){return new ji(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof W)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new W(this.comparator);return n.data=t,n}}class ji{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new Rt([])}unionWith(t){let n=new W(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Rt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return le(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Wa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wa("Invalid base64 string: "+i):i}}(t);return new rt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new rt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Ed=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(e){if(B(!!e),typeof e=="string"){let t=0;const n=Ed.exec(e);if(B(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Kt(e){return typeof e=="string"?rt.fromBase64String(e):rt.fromUint8Array(e)}/**
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
 */function Us(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bs(e){const t=e.mapValue.fields.__previous_value__;return Us(t)?Bs(t):t}function Qe(e){const t=Nt(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
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
 */class vd{constructor(t,n,r,s,i,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class We{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new We("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof We&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ht(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Us(e)?4:Td(e)?9007199254740991:10:w()}function Et(e,t){if(e===t)return!0;const n=Ht(e);if(n!==Ht(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Qe(e).isEqual(Qe(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nt(s.timestampValue),a=Nt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Kt(s.bytesValue).isEqual(Kt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return F(s.geoPointValue.latitude)===F(i.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return F(s.integerValue)===F(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=F(s.doubleValue),a=F(i.doubleValue);return o===a?Ln(o)===Ln(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return le(e.arrayValue.values||[],t.arrayValue.values||[],Et);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if($i(o)!==$i(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Et(o[u],a[u])))return!1;return!0}(e,t);default:return w()}}function Ye(e,t){return(e.values||[]).find(n=>Et(n,t))!==void 0}function de(e,t){if(e===t)return 0;const n=Ht(e),r=Ht(t);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=F(i.integerValue||i.doubleValue),u=F(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return zi(e.timestampValue,t.timestampValue);case 4:return zi(Qe(e),Qe(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Kt(i),u=Kt(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=D(a[c],u[c]);if(h!==0)return h}return D(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=D(F(i.latitude),F(o.latitude));return a!==0?a:D(F(i.longitude),F(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=de(a[c],u[c]);if(h)return h}return D(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===vn.mapValue&&o===vn.mapValue)return 0;if(i===vn.mapValue)return 1;if(o===vn.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let l=0;l<u.length&&l<h.length;++l){const f=D(u[l],h[l]);if(f!==0)return f;const g=de(a[u[l]],c[h[l]]);if(g!==0)return g}return D(u.length,h.length)}(e.mapValue,t.mapValue);default:throw w()}}function zi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=Nt(e),r=Nt(t),s=D(n.seconds,r.seconds);return s!==0?s:D(n.nanos,r.nanos)}function fe(e){return Qr(e)}function Qr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Nt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Kt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qr(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qr(n.fields[o])}`;return s+"}"}(e.mapValue):w()}function Gi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Wr(e){return!!e&&"integerValue"in e}function qs(e){return!!e&&"arrayValue"in e}function Ki(e){return!!e&&"nullValue"in e}function Hi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Rr(e){return!!e&&"mapValue"in e}function Ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return un(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ne(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Td(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ft{constructor(t){this.value=t}static empty(){return new ft({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Rr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ne(n)}setAll(t){let n=tt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ne(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Rr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Et(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){un(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ft(Ne(this.value))}}/**
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
 */class Z{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Z(t,0,I.min(),I.min(),I.min(),ft.empty(),0)}static newFoundDocument(t,n,r,s){return new Z(t,1,n,I.min(),r,s,0)}static newNoDocument(t,n){return new Z(t,2,n,I.min(),I.min(),ft.empty(),0)}static newUnknownDocument(t,n){return new Z(t,3,n,I.min(),I.min(),ft.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fn{constructor(t,n){this.position=t,this.inclusive=n}}function Qi(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=de(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Et(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Xe{constructor(t,n="asc"){this.field=t,this.dir=n}}function Id(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Ya{}class U extends Ya{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Ad(t,n,r):n==="array-contains"?new Sd(t,r):n==="in"?new Cd(t,r):n==="not-in"?new Vd(t,r):n==="array-contains-any"?new Dd(t,r):new U(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Rd(t,r):new Pd(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(de(n,this.value)):n!==null&&Ht(this.value)===Ht(n)&&this.matchesComparison(de(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Ya{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new ht(t,n)}matches(t){return Xa(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Xa(e){return e.op==="and"}function Ja(e){return wd(e)&&Xa(e)}function wd(e){for(const t of e.filters)if(t instanceof ht)return!1;return!0}function Yr(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+fe(e.value);if(Ja(e))return e.filters.map(t=>Yr(t)).join(",");{const t=e.filters.map(n=>Yr(n)).join(",");return`${e.op}(${t})`}}function Za(e,t){return e instanceof U?function(r,s){return s instanceof U&&r.op===s.op&&r.field.isEqual(s.field)&&Et(r.value,s.value)}(e,t):e instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Za(o,s.filters[a]),!0):!1}(e,t):void w()}function tu(e){return e instanceof U?function(n){return`${n.field.canonicalString()} ${n.op} ${fe(n.value)}`}(e):e instanceof ht?function(n){return n.op.toString()+" {"+n.getFilters().map(tu).join(" ,")+"}"}(e):"Filter"}class Ad extends U{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Rd extends U{constructor(t,n){super(t,"in",n),this.keys=eu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Pd extends U{constructor(t,n){super(t,"not-in",n),this.keys=eu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function eu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class Sd extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return qs(n)&&Ye(n.arrayValue,this.value)}}class Cd extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ye(this.value.arrayValue,n)}}class Vd extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ye(this.value.arrayValue,n)}}class Dd extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!qs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ye(this.value.arrayValue,r))}}/**
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
 */class bd{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Yi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new bd(e,t,n,r,s,i,o)}function $s(e){const t=C(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Yr(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),rr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>fe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>fe(r)).join(",")),t.ce=n}return t.ce}function js(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Id(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Za(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wi(e.startAt,t.startAt)&&Wi(e.endAt,t.endAt)}function Xr(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class ve{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Nd(e,t,n,r,s,i,o,a){return new ve(e,t,n,r,s,i,o,a)}function nu(e){return new ve(e)}function Xi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ru(e){return e.collectionGroup!==null}function ke(e){const t=C(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new W(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Xe(i,r))}),n.has(tt.keyField().canonicalString())||t.le.push(new Xe(tt.keyField(),r))}return t.le}function mt(e){const t=C(e);return t.he||(t.he=kd(t,ke(e))),t.he}function kd(e,t){if(e.limitType==="F")return Yi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xe(s.field,i)});const n=e.endAt?new Fn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fn(e.startAt.position,e.startAt.inclusive):null;return Yi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Jr(e,t){const n=e.filters.concat([t]);return new ve(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Zr(e,t,n){return new ve(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sr(e,t){return js(mt(e),mt(t))&&e.limitType===t.limitType}function su(e){return`${$s(mt(e))}|lt:${e.limitType}`}function Zt(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>tu(s)).join(", ")}]`),rr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fe(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fe(s)).join(",")),`Target(${r})`}(mt(e))}; limitType=${e.limitType})`}function ir(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):E.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ke(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=Qi(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ke(r),s)||r.endAt&&!function(o,a,u){const c=Qi(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ke(r),s))}(e,t)}function Od(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function iu(e){return(t,n)=>{let r=!1;for(const s of ke(e)){const i=xd(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xd(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?de(u,c):w()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return w()}}/**
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
 */class Te{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){un(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Qa(this.inner)}size(){return this.innerSize}}/**
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
 */const Md=new M(E.comparator);function kt(){return Md}const ou=new M(E.comparator);function Ce(...e){let t=ou;for(const n of e)t=t.insert(n.key,n);return t}function Ld(e){let t=ou;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function qt(){return Oe()}function au(){return Oe()}function Oe(){return new Te(e=>e.toString(),(e,t)=>e.isEqual(t))}const Fd=new W(E.comparator);function S(...e){let t=Fd;for(const n of e)t=t.add(n);return t}const Ud=new W(D);function Bd(){return Ud}/**
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
 */function uu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ln(t)?"-0":t}}function cu(e){return{integerValue:""+e}}function qd(e,t){return yd(t)?cu(t):uu(e,t)}/**
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
 */class or{constructor(){this._=void 0}}function $d(e,t,n){return e instanceof ts?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Us(i)&&(i=Bs(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Un?hu(e,t):e instanceof Bn?lu(e,t):function(s,i){const o=zd(s,i),a=Ji(o)+Ji(s.Ie);return Wr(o)&&Wr(s.Ie)?cu(a):uu(s.serializer,a)}(e,t)}function jd(e,t,n){return e instanceof Un?hu(e,t):e instanceof Bn?lu(e,t):n}function zd(e,t){return e instanceof es?function(r){return Wr(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ts extends or{}class Un extends or{constructor(t){super(),this.elements=t}}function hu(e,t){const n=du(t);for(const r of e.elements)n.some(s=>Et(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bn extends or{constructor(t){super(),this.elements=t}}function lu(e,t){let n=du(t);for(const r of e.elements)n=n.filter(s=>!Et(s,r));return{arrayValue:{values:n}}}class es extends or{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Ji(e){return F(e.integerValue||e.doubleValue)}function du(e){return qs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Gd(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Un&&s instanceof Un||r instanceof Bn&&s instanceof Bn?le(r.elements,s.elements,Et):r instanceof es&&s instanceof es?Et(r.Ie,s.Ie):r instanceof ts&&s instanceof ts}(e.transform,t.transform)}class jt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class zs{}function fu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Hd(e.key,jt.none()):new Gs(e.key,e.data,jt.none());{const n=e.data,r=ft.empty();let s=new W(tt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ar(e.key,r,new Rt(s.toArray()),jt.none())}}function Kd(e,t,n){e instanceof Gs?function(s,i,o){const a=s.value.clone(),u=to(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ar?function(s,i,o){if(!wn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=to(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(pu(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function xe(e,t,n,r){return e instanceof Gs?function(i,o,a,u){if(!wn(i.precondition,o))return a;const c=i.value.clone(),h=eo(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof ar?function(i,o,a,u){if(!wn(i.precondition,o))return a;const c=eo(i.fieldTransforms,u,o),h=o.data;return h.setAll(pu(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(i,o,a){return wn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Zi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&le(r,s,(i,o)=>Gd(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Gs extends zs{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ar extends zs{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function to(e,t,n){const r=new Map;B(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,jd(o,a,n[s]))}return r}function eo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$d(i,o,t))}return r}class Hd extends zs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qd{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Kd(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=xe(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=xe(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=au();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=fu(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),S())}isEqual(t){return this.batchId===t.batchId&&le(this.mutations,t.mutations,(n,r)=>Zi(n,r))&&le(this.baseMutations,t.baseMutations,(n,r)=>Zi(n,r))}}/**
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
 */class Wd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Yd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var L,R;function gu(e){if(e===void 0)return yt("GRPC error has no .code"),p.UNKNOWN;switch(e){case L.OK:return p.OK;case L.CANCELLED:return p.CANCELLED;case L.UNKNOWN:return p.UNKNOWN;case L.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case L.INTERNAL:return p.INTERNAL;case L.UNAVAILABLE:return p.UNAVAILABLE;case L.UNAUTHENTICATED:return p.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case L.NOT_FOUND:return p.NOT_FOUND;case L.ALREADY_EXISTS:return p.ALREADY_EXISTS;case L.PERMISSION_DENIED:return p.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case L.ABORTED:return p.ABORTED;case L.OUT_OF_RANGE:return p.OUT_OF_RANGE;case L.UNIMPLEMENTED:return p.UNIMPLEMENTED;case L.DATA_LOSS:return p.DATA_LOSS;default:return w()}}(R=L||(L={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Xd(){return new TextEncoder}/**
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
 */const Jd=new se([4294967295,4294967295],0);function no(e){const t=Xd().encode(e),n=new td;return n.update(t),new Uint8Array(n.digest())}function ro(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new se([n,r],0),new se([s,i],0)]}class Ks{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ve(`Invalid padding: ${n}`);if(r<0)throw new Ve(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ve(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ve(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=se.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(se.fromNumber(r)));return s.compare(Jd)===1&&(s=new se([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=no(t),[r,s]=ro(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Ks(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=no(t),[r,s]=ro(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ve extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ur{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,cn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ur(I.min(),s,new M(D),kt(),S())}}class cn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new cn(r,n,S(),S(),S())}}/**
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
 */class An{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class mu{constructor(t,n){this.targetId=t,this.fe=n}}class _u{constructor(t,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class so{constructor(){this.ge=0,this.pe=oo(),this.ye=rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=S(),n=S(),r=S();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:w()}}),new cn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=oo()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,B(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Zd{constructor(t){this.Be=t,this.ke=new Map,this.qe=kt(),this.Qe=io(),this.Ke=new M(D)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:w()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Xr(i))if(r===0){const o=new E(i.path);this.We(n,o,Z.newNoDocument(o,I.min()))}else B(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Kt(r).toUint8Array()}catch(u){if(u instanceof Wa)return he("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ks(o,s,i)}catch(u){return he(u instanceof Ve?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Xr(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,Z.newNoDocument(u,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=S();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new ur(t,n,this.Ke,this.qe,r);return this.qe=kt(),this.Qe=io(),this.Ke=new M(D),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new so,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new W(D),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new so),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function io(){return new M(E.comparator)}function oo(){return new M(E.comparator)}const tf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ef=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),nf=(()=>({and:"AND",or:"OR"}))();class rf{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ns(e,t){return e.useProto3Json||rr(t)?t:{value:t}}function rs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ie(e){return B(!!e),I.fromTimestamp(function(n){const r=Nt(n);return new j(r.seconds,r.nanos)}(e))}function Eu(e,t){return ss(e,t).canonicalString()}function ss(e,t){const n=function(s){return new k(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function vu(e){const t=k.fromString(e);return B(Ru(t)),t}function Pr(e,t){const n=vu(t);if(n.get(1)!==e.databaseId.projectId)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Iu(n))}function Tu(e,t){return Eu(e.databaseId,t)}function sf(e){const t=vu(e);return t.length===4?k.emptyPath():Iu(t)}function ao(e){return new k(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Iu(e){return B(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function of(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:w()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(B(h===void 0||typeof h=="string"),rt.fromBase64String(h||"")):(B(h===void 0||h instanceof Uint8Array),rt.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?p.UNKNOWN:gu(c.code);return new y(h,c.message||"")}(o);n=new _u(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pr(e,r.document.name),i=ie(r.document.updateTime),o=r.document.createTime?ie(r.document.createTime):I.min(),a=new ft({mapValue:{fields:r.document.fields}}),u=Z.newFoundDocument(s,i,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new An(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Pr(e,r.document),i=r.readTime?ie(r.readTime):I.min(),o=Z.newNoDocument(s,i),a=r.removedTargetIds||[];n=new An([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Pr(e,r.document),i=r.removedTargetIds||[];n=new An([],i,s,null)}else{if(!("filter"in t))return w();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Yd(s,i),a=r.targetId;n=new mu(a,o)}}return n}function af(e,t){return{documents:[Tu(e,t.path)]}}function uf(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tu(e,s);const i=function(c){if(c.length!==0)return Au(ht.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(f){return{field:te(f.field),direction:lf(f.dir)}}(h))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ns(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:s}}function cf(e){let t=sf(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){B(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(l){const f=wu(l);return f instanceof ht&&Ja(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(l){return l.map(f=>function(A){return new Xe(ee(A.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(l){let f;return f=typeof l=="object"?l.value:l,rr(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(l){const f=!!l.before,g=l.values||[];return new Fn(g,f)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const f=!l.before,g=l.values||[];return new Fn(g,f)}(n.endAt)),Nd(t,s,o,i,a,"F",u,c)}function hf(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function wu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ee(n.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ee(n.unaryFilter.field);return U.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ee(n.unaryFilter.field);return U.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ee(n.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(e):e.fieldFilter!==void 0?function(n){return U.create(ee(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ht.create(n.compositeFilter.filters.map(r=>wu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return w()}}(n.compositeFilter.op))}(e):w()}function lf(e){return tf[e]}function df(e){return ef[e]}function ff(e){return nf[e]}function te(e){return{fieldPath:e.canonicalString()}}function ee(e){return tt.fromServerFormat(e.fieldPath)}function Au(e){return e instanceof U?function(n){if(n.op==="=="){if(Hi(n.value))return{unaryFilter:{field:te(n.field),op:"IS_NAN"}};if(Ki(n.value))return{unaryFilter:{field:te(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hi(n.value))return{unaryFilter:{field:te(n.field),op:"IS_NOT_NAN"}};if(Ki(n.value))return{unaryFilter:{field:te(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:te(n.field),op:df(n.op),value:n.value}}}(e):e instanceof ht?function(n){const r=n.getFilters().map(s=>Au(s));return r.length===1?r[0]:{compositeFilter:{op:ff(n.op),filters:r}}}(e):w()}function Ru(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Pt{constructor(t,n,r,s,i=I.min(),o=I.min(),a=rt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Pt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class pf{constructor(t){this.ct=t}}function gf(e){const t=cf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Zr(t,t.limit,"L"):t}/**
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
 */class mf{constructor(){this._n=new _f}addToCollectionParentIndex(t,n){return this._n.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(bt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(bt.min())}updateCollectionGroup(t,n,r){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class _f{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new W(k.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new W(k.comparator)).toArray()}}/**
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
 */class pe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new pe(0)}static Ln(){return new pe(-1)}}/**
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
 */class yf{constructor(){this.changes=new Te(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Z.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?d.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ef{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class vf{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&xe(r.mutation,s,Rt.empty(),j.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,S()).next(()=>r))}getLocalViewOfDocuments(t,n,r=S()){const s=qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Ce();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=qt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,S()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=kt();const o=Oe(),a=function(){return Oe()}();return n.forEach((u,c)=>{const h=r.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof ar)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),xe(h.mutation,c,h.mutation.getFieldMask(),j.now())):o.set(c.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new Ef(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Oe();let s=new M((o,a)=>o-a),i=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Rt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const l=(s.get(a.batchId)||S()).add(u);s=s.insert(a.batchId,l)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=au();h.forEach(f=>{if(!i.has(f)){const g=fu(n.get(f),r.get(f));g!==null&&l.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ru(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):d.resolve(qt());let a=-1,u=i;return o.next(c=>d.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?d.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,S())).next(h=>({batchId:a,changes:Ld(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let s=Ce();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Ce();return this.indexManager.getCollectionParents(t,i).next(a=>d.forEach(a,u=>{const c=function(l,f){return new ve(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(h=>{h.forEach((l,f)=>{o=o.insert(l,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Z.newInvalidDocument(h)))});let a=Ce();return o.forEach((u,c)=>{const h=i.get(u);h!==void 0&&xe(h.mutation,c,Rt.empty(),j.now()),ir(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class Tf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return d.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ie(s.createTime)}}(n)),d.resolve()}getNamedQuery(t,n){return d.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:gf(s.bundledQuery),readTime:ie(s.readTime)}}(n)),d.resolve()}}/**
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
 */class If{constructor(){this.overlays=new M(E.comparator),this.hr=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const r=qt();return d.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),d.resolve()}getOverlaysForCollection(t,n,r){const s=qt(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return d.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new M((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=i.get(c.largestBatchId);h===null&&(h=qt(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=qt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=s)););return d.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Wd(n,r));let i=this.hr.get(n);i===void 0&&(i=S(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Hs{constructor(){this.Pr=new W($.Ir),this.Tr=new W($.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new $(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new $(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new E(new k([])),r=new $(n,t),s=new $(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new E(new k([])),r=new $(n,t),s=new $(n,t+1);let i=S();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new $(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ${constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return E.comparator(t.key,n.key)||D(t.pr,n.pr)}static Er(t,n){return D(t.pr,n.pr)||E.comparator(t.key,n.key)}}/**
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
 */class wf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new W($.Ir)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qd(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new $(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new $(n,0),s=new $(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new W(D);return n.forEach(s=>{const i=new $(s,0),o=new $(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),d.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new $(new E(i),0);let a=new W(D);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.pr)),!0)},o),d.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){B(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return d.forEach(n.mutations,s=>{const i=new $(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new $(n,0),s=this.wr.firstAfterOrEqual(r);return d.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Af{constructor(t){this.vr=t,this.docs=function(){return new M(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return d.resolve(r?r.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(t,n){let r=kt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Z.newInvalidDocument(s))}),d.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=kt();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||fd(dd(h),r)<=0||(s.has(h.key)||ir(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,r,s){w()}Fr(t,n){return d.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Rf(this)}getSize(t){return d.resolve(this.size)}}class Rf extends yf{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),d.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class Pf{constructor(t){this.persistence=t,this.Mr=new Te(n=>$s(n),js),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Hs,this.targetCount=0,this.Lr=pe.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),d.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new pe(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.qn(n),d.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),d.waitFor(i).next(()=>s)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return d.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),d.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),d.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return d.resolve(r)}containsKey(t,n){return d.resolve(this.Nr.containsKey(n))}}/**
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
 */class Sf{constructor(t,n){this.Br={},this.overlays={},this.kr=new Fs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Pf(this),this.indexManager=new mf,this.remoteDocumentCache=function(s){return new Af(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new pf(n),this.$r=new Tf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new If,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new wf(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const s=new Cf(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return d.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Cf extends gd{constructor(t){super(),this.currentSequenceNumber=t}}class Qs{constructor(t){this.persistence=t,this.zr=new Hs,this.jr=null}static Hr(t){return new Qs(t)}get Jr(){if(this.jr)return this.jr;throw w()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),d.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),d.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Jr,r=>{const s=E.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,I.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return d.or([()=>d.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class Ws{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=S(),s=S();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ws(t,n.fromCache,r,s)}}/**
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
 */class Vf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Df{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return uc()?8:Bt.v(Sn())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Vf;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(Re()<=P.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",Zt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),d.resolve()):(Re()<=P.DEBUG&&_("QueryEngine","Query:",Zt(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Re()<=P.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",Zt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,mt(n))):d.resolve())}ji(t,n){if(Xi(n))return d.resolve(null);let r=mt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zr(n,null,"F"),r=mt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=S(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(t,Zr(n,null,"F")):this.es(t,c,n,u)}))})))}Hi(t,n,r,s){return Xi(n)||s.isEqual(I.min())?d.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?d.resolve(null):(Re()<=P.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zt(n)),this.es(t,o,n,ld(s,-1)).next(a=>a))})}Zi(t,n){let r=new W(iu(t));return n.forEach((s,i)=>{ir(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return Re()<=P.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Zt(n)),this.zi.getDocumentsMatchingQuery(t,n,bt.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class bf{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new M(D),this.rs=new Te(i=>$s(i),js),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Nf(e,t,n,r){return new bf(e,t,n,r)}async function Pu(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=S();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function Su(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function kf(e,t){const n=C(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((h,l)=>{const f=s.get(l);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Qr.addMatchingKeys(i,h.addedDocuments,l)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(l)!==null?g=g.withResumeToken(rt.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(l,g),function(V,v,q){return V.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(f,g,h)&&a.push(n.Qr.updateTargetData(i,g))});let u=kt(),c=S();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Of(i,o,t.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(I.min())){const h=n.Qr.getLastRemoteSnapshotVersion(i).next(l=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.ns=s,i))}function Of(e,t,n){let r=S(),s=S();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=kt();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:s}})}function xf(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,d.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Pt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function is(e,t,n){const r=C(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!an(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function uo(e,t,n){const r=C(e);let s=I.min(),i=S();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const l=C(u),f=l.rs.get(h);return f!==void 0?d.resolve(l.ns.get(f)):l.Qr.getTargetData(c,h)}(r,o,mt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:I.min(),n?i:S())).next(a=>(Mf(r,Od(t),a),{documents:a,hs:i})))}function Mf(e,t,n){let r=e.ss.get(t)||I.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class co{constructor(){this.activeTargetIds=Bd()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Lf{constructor(){this.no=new co,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new co,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ff{io(t){}shutdown(){}}/**
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
 */class ho{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tn=null;function Sr(){return Tn===null?Tn=function(){return 268435456+Math.round(2147483648*Math.random())}():Tn++,"0x"+Tn.toString(16)}/**
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
 */const Uf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Bf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const X="WebChannelConnection";class qf extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Sr(),u=this.bo(n,r.toUriEncodedString());_("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,u,c,s).then(h=>(_("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw he("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",s),h})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=Uf[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=Sr();return new Promise((o,a)=>{const u=new Zl;u.setWithCredentials(!0),u.listenOnce(Xl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ar.NO_ERROR:const h=u.getResponseJson();_(X,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(h)),o(h);break;case Ar.TIMEOUT:_(X,`RPC '${t}' ${i} timed out`),a(new y(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:const l=u.getStatus();if(_(X,`RPC '${t}' ${i} failed with status:`,l,"response text:",u.getResponseText()),l>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const A=function(v){const q=v.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(q)>=0?q:p.UNKNOWN}(g.status);a(new y(A,g.message))}else a(new y(p.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(p.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{_(X,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);_(X,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Fo(t,n,r){const s=Sr(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Wl(),a=Yl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=i.join("");_(X,`Creating RPC '${t}' stream ${s}: ${h}`,u);const l=o.createWebChannel(h,u);let f=!1,g=!1;const A=new Bf({lo:v=>{g?_(X,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(f||(_(X,`Opening RPC '${t}' stream ${s} transport.`),l.open(),f=!0),_(X,`RPC '${t}' stream ${s} sending:`,v),l.send(v))},ho:()=>l.close()}),V=(v,q,it)=>{v.listen(q,Y=>{try{it(Y)}catch(x){setTimeout(()=>{throw x},0)}})};return V(l,yn.EventType.OPEN,()=>{g||_(X,`RPC '${t}' stream ${s} transport opened.`)}),V(l,yn.EventType.CLOSE,()=>{g||(g=!0,_(X,`RPC '${t}' stream ${s} transport closed`),A.Vo())}),V(l,yn.EventType.ERROR,v=>{g||(g=!0,he(X,`RPC '${t}' stream ${s} transport errored:`,v),A.Vo(new y(p.UNAVAILABLE,"The operation could not be completed")))}),V(l,yn.EventType.MESSAGE,v=>{var q;if(!g){const it=v.data[0];B(!!it);const Y=it,x=Y.error||((q=Y[0])===null||q===void 0?void 0:q.error);if(x){_(X,`RPC '${t}' stream ${s} received error:`,x);const Tt=x.status;let lt=function(Yu){const di=L[Yu];if(di!==void 0)return gu(di)}(Tt),Xt=x.message;lt===void 0&&(lt=p.INTERNAL,Xt="Unknown error status: "+Tt+" with message "+x.message),g=!0,A.Vo(new y(lt,Xt)),l.close()}else _(X,`RPC '${t}' stream ${s} received:`,it),A.mo(it)}}),V(a,Jl.STAT_EVENT,v=>{v.stat===Ui.PROXY?_(X,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===Ui.NOPROXY&&_(X,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.Ro()},0),A}}function Cr(){return typeof document<"u"?document:null}/**
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
 */function cr(e){return new rf(e,!0)}/**
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
 */class Cu{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class $f{constructor(t,n,r,s,i,o,a,u){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Cu(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(yt(n.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new y(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jf extends $f{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=of(this.serializer,t),r=function(i){if(!("targetChange"in i))return I.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?ie(o.readTime):I.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=ao(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=Xr(u)?{documents:af(i,u)}:{query:uf(i,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=yu(i,o.resumeToken);const c=ns(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=rs(i,o.snapshotVersion.toTimestamp());const c=ns(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=hf(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=ao(this.serializer),n.removeTarget=t,this.t_(n)}}/**
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
 */class zf extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,ss(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(p.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,ss(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(p.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Gf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(yt(n),this.g_=!1):_("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class Kf{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{ln(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=C(u);c.v_.add(4),await hn(c),c.x_.set("Unknown"),c.v_.delete(4),await hr(c)}(this))})}),this.x_=new Gf(r,s)}}async function hr(e){if(ln(e))for(const t of e.F_)await t(!0)}async function hn(e){for(const t of e.F_)await t(!1)}function Vu(e,t){const n=C(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Zs(n)?Js(n):Ie(n).Jo()&&Xs(n,t))}function Ys(e,t){const n=C(e),r=Ie(n);n.C_.delete(t),r.Jo()&&Du(n,t),n.C_.size===0&&(r.Jo()?r.Xo():ln(n)&&n.x_.set("Unknown"))}function Xs(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ie(e).c_(t)}function Du(e,t){e.O_.Oe(t),Ie(e).l_(t)}function Js(e){e.O_=new Zd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ie(e).start(),e.x_.p_()}function Zs(e){return ln(e)&&!Ie(e).Ho()&&e.C_.size>0}function ln(e){return C(e).v_.size===0}function bu(e){e.O_=void 0}async function Hf(e){e.C_.forEach((t,n)=>{Xs(e,t)})}async function Qf(e,t){bu(e),Zs(e)?(e.x_.S_(t),Js(e)):e.x_.set("Unknown")}async function Wf(e,t,n){if(e.x_.set("Online"),t instanceof _u&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await lo(e,r)}else if(t instanceof An?e.O_.$e(t):t instanceof mu?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(I.min()))try{const r=await Su(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=i.C_.get(c);h&&i.C_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=i.C_.get(u);if(!h)return;i.C_.set(u,h.withResumeToken(rt.EMPTY_BYTE_STRING,h.snapshotVersion)),Du(i,u);const l=new Pt(h.target,u,c,h.sequenceNumber);Xs(i,l)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await lo(e,r)}}async function lo(e,t,n){if(!an(t))throw t;e.v_.add(1),await hn(e),e.x_.set("Offline"),n||(n=()=>Su(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await hr(e)})}async function fo(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=ln(n);n.v_.add(3),await hn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await hr(n)}async function Yf(e,t){const n=C(e);t?(n.v_.delete(2),await hr(n)):t||(n.v_.add(2),await hn(n),n.x_.set("Unknown"))}function Ie(e){return e.N_||(e.N_=function(n,r,s){const i=C(n);return i.R_(),new jf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Hf.bind(null,e),To:Qf.bind(null,e),u_:Wf.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),Zs(e)?Js(e):e.x_.set("Unknown")):(await e.N_.stop(),bu(e))})),e.N_}/**
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
 */class ti{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new ti(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nu(e,t){if(yt("AsyncQueue",`${t}: ${e}`),an(e))return new y(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class oe{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=Ce(),this.sortedSet=new M(this.comparator)}static emptySet(t){return new oe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof oe)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new oe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class po{constructor(){this.B_=new M(E.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):w():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ge{constructor(t,n,r,s,i,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ge(t,n,oe.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&sr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Xf{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class Jf{constructor(){this.queries=new Te(t=>su(t),sr),this.onlineState="Unknown",this.W_=new Set}}async function Zf(e,t){const n=C(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new Xf,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Nu(o,`Initialization of query '${Zt(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.Q_.push(t),t.G_(n.onlineState),i.q_&&t.z_(i.q_)&&ei(n)}async function tp(e,t){const n=C(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ep(e,t){const n=C(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&ei(n)}function np(e,t,n){const r=C(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function ei(e){e.W_.forEach(t=>{t.next()})}var os,go;(go=os||(os={})).j_="default",go.Cache="cache";class rp{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ge(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=ge.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==os.Cache}}/**
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
 */class ku{constructor(t){this.key=t}}class Ou{constructor(t){this.key=t}}class sp{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=S(),this.mutatedKeys=S(),this.ha=iu(t),this.Pa=new oe(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new po,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((h,l)=>{const f=s.get(h),g=ir(this.query,l)?l:null,A=!!f&&this.mutatedKeys.has(f.key),V=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;f&&g?f.data.isEqual(g.data)?A!==V&&(r.track({type:3,doc:g}),v=!0):this.da(f,g)||(r.track({type:2,doc:g}),v=!0,(u&&this.ha(g,u)>0||c&&this.ha(g,c)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),v=!0):f&&!g&&(r.track({type:1,doc:f}),v=!0,(u||c)&&(a=!0)),v&&(g?(o=o.add(g),i=V?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((h,l)=>function(g,A){const V=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return V(g)-V(A)}(h.type,l.type)||this.ha(h.doc,l.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],u=this.la.size===0&&this.current&&!s?1:0,c=u!==this.ca;return this.ca=u,o.length!==0||c?{snapshot:new ge(this.query,t.Pa,i,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new po,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=S(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new Ou(r))}),this.la.forEach(r=>{t.has(r)||n.push(new ku(r))}),n}fa(t){this.ua=t.hs,this.la=S();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return ge.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class ip{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class op{constructor(t){this.key=t,this.pa=!1}}class ap{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Te(a=>su(a),sr),this.Sa=new Map,this.ba=new Set,this.Da=new M(E.comparator),this.Ca=new Map,this.va=new Hs,this.Fa={},this.Ma=new Map,this.xa=pe.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function up(e,t,n=!0){const r=Uu(e);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await xu(r,t,n,!0),s}async function cp(e,t){const n=Uu(e);await xu(n,t,!0,!1)}async function xu(e,t,n,r){const s=await xf(e.localStore,mt(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await hp(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&Vu(e.remoteStore,s),a}async function hp(e,t,n,r,s){e.Na=(l,f,g)=>async function(V,v,q,it){let Y=v.view.Ta(q);Y.Xi&&(Y=await uo(V.localStore,v.query,!1).then(({documents:Xt})=>v.view.Ta(Xt,Y)));const x=it&&it.targetChanges.get(v.targetId),Tt=it&&it.targetMismatches.get(v.targetId)!=null,lt=v.view.applyChanges(Y,V.isPrimaryClient,x,Tt);return _o(V,v.targetId,lt.Va),lt.snapshot}(e,l,f,g);const i=await uo(e.localStore,t,!0),o=new sp(t,i.hs),a=o.Ta(i.documents),u=cn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,u);_o(e,n,c.Va);const h=new ip(t,n,o);return e.wa.set(t,h),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),c.snapshot}async function lp(e,t,n){const r=C(e),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!sr(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await is(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ys(r.remoteStore,s.targetId),as(r,s.targetId)}).catch(xs)):(as(r,s.targetId),await is(r.localStore,s.targetId,!0))}async function dp(e,t){const n=C(e),r=n.wa.get(t),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ys(n.remoteStore,r.targetId))}async function Mu(e,t){const n=C(e);try{const r=await kf(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(B(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?B(o.pa):s.removedDocuments.size>0&&(B(o.pa),o.pa=!1))}),await Fu(n,r,t)}catch(r){await xs(r)}}function mo(e,t,n){const r=C(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=C(o);u.onlineState=a;let c=!1;u.queries.forEach((h,l)=>{for(const f of l.Q_)f.G_(a)&&(c=!0)}),c&&ei(u)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fp(e,t,n){const r=C(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new M(E.comparator);o=o.insert(i,Z.newNoDocument(i,I.min()));const a=S().add(i),u=new ur(I.min(),new Map,new M(D),o,a);await Mu(r,u),r.Da=r.Da.remove(i),r.Ca.delete(t),ni(r)}else await is(r.localStore,t,!1).then(()=>as(r,t,n)).catch(xs)}function as(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||Lu(e,r)})}function Lu(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(Ys(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),ni(e))}function _o(e,t,n){for(const r of n)r instanceof ku?(e.va.addReference(r.key,t),pp(e,r)):r instanceof Ou?(_("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Lu(e,r.key)):w()}function pp(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(_("SyncEngine","New document in limbo: "+n),e.ba.add(r),ni(e))}function ni(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new E(k.fromString(t)),r=e.xa.next();e.Ca.set(r,new op(n)),e.Da=e.Da.insert(n,r),Vu(e.remoteStore,new Pt(mt(nu(n.path)),r,"TargetPurposeLimboResolution",Fs._e))}}async function Fu(e,t,n){const r=C(e),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,u)=>{o.push(r.Na(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const h=Ws.Ki(u.targetId,c);i.push(h)}}))}),await Promise.all(o),r.ya.u_(s),await async function(u,c){const h=C(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>d.forEach(c,f=>d.forEach(f.qi,g=>h.persistence.referenceDelegate.addReference(l,f.targetId,g)).next(()=>d.forEach(f.Qi,g=>h.persistence.referenceDelegate.removeReference(l,f.targetId,g)))))}catch(l){if(!an(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const f=l.targetId;if(!l.fromCache){const g=h.ns.get(f),A=g.snapshotVersion,V=g.withLastLimboFreeSnapshotVersion(A);h.ns=h.ns.insert(f,V)}}}(r.localStore,i))}async function gp(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Pu(n.localStore,t);n.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(u=>{u.reject(new y(p.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Fu(n,r.us)}}function mp(e,t){const n=C(e),r=n.Ca.get(t);if(r&&r.pa)return S().add(r.key);{let s=S();const i=n.Sa.get(t);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Uu(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fp.bind(null,t),t.ya.u_=ep.bind(null,t.eventManager),t.ya.La=np.bind(null,t.eventManager),t}class yo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=cr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Nf(this.persistence,new Df,t.initialUser,this.serializer)}createPersistence(t){return new Sf(Qs.Hr,this.serializer)}createSharedClientState(t){return new Lf}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _p{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gp.bind(null,this.syncEngine),await Yf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Jf}()}createDatastore(t){const n=cr(t.databaseInfo.databaseId),r=function(i){return new qf(i)}(t.databaseInfo);return function(i,o,a,u){return new zf(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Kf(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>mo(this.syncEngine,n,0),function(){return ho.D()?new ho:new Ff}())}createSyncEngine(t,n){return function(s,i,o,a,u,c,h){const l=new ap(s,i,o,a,u,c);return h&&(l.Oa=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=C(r);_("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await hn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 *//**
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
 */class yp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):yt("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Ep{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=J.UNAUTHENTICATED,this.clientId=cd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Nu(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Vr(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Pu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Eo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Tp(e);_("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>fo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>fo(t.remoteStore,s)),e._onlineComponents=t}function vp(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Tp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!vp(n))throw n;he("Error using user provided cache. Falling back to memory cache: "+n),await Vr(e,new yo)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Vr(e,new yo);return e._offlineComponents}async function Ip(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Eo(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Eo(e,new _p))),e._onlineComponents}async function wp(e){const t=await Ip(e),n=t.eventManager;return n.onListen=up.bind(null,t.syncEngine),n.onUnlisten=lp.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=cp.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=dp.bind(null,t.syncEngine),n}function Ap(e,t,n={}){const r=new Dt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const h=new yp({next:f=>{o.enqueueAndForget(()=>tp(i,l)),f.fromCache&&u.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),l=new rp(a,h,{includeMetadataChanges:!0,ta:!0});return Zf(i,l)}(await wp(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function Bu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const vo=new Map;/**
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
 */function Rp(e,t,n){if(!n)throw new y(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Pp(e,t,n,r){if(t===!0&&r===!0)throw new y(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function To(e){if(E.isDocumentKey(e))throw new y(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function lr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":w()}function us(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lr(e);throw new y(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Io{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ri{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Io({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Io(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ed;switch(r.type){case"firstParty":return new id(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vo.get(n);r&&(_("ComponentProvider","Removing Datastore"),vo.delete(n),r.terminate())}(this),Promise.resolve()}}function Sp(e,t,n,r={}){var s;const i=(e=us(e,ri))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&he("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=J.MOCK_USER;else{a=Vo(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new J(c)}e._authCredentials=new nd(new Ha(a,u))}}/**
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
 */class Yt{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Yt(this.firestore,t,this._query)}}class At{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class ae extends Yt{constructor(t,n,r){super(t,n,nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new E(t))}withConverter(t){return new ae(this.firestore,t,this._path)}}function Xp(e,t,...n){if(e=Me(e),Rp("collection","path",t),e instanceof ri){const r=k.fromString(t,...n);return To(r),new ae(e,null,r)}{if(!(e instanceof At||e instanceof ae))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(k.fromString(t,...n));return To(r),new ae(e.firestore,null,r)}}/**
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
 */class Cp{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Cu(this,"async_queue_retry"),this.cu=()=>{const n=Cr();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Cr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=Cr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Dt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!an(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw yt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const s=ti.createAndSchedule(this,t,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&w()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class qu extends ri{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Cp}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$u(this),this._firestoreClient.terminate()}}function Vp(e,t){const n=typeof e=="object"?e:Fo(),r=typeof e=="string"?e:t||"(default)",s=xo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=So("firestore");i&&Sp(s,...i)}return s}function Dp(e){return e._firestoreClient||$u(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function $u(e){var t,n,r;const s=e._freezeSettings(),i=function(a,u,c,h){return new vd(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Bu(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Ep(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new me(rt.fromBase64String(t))}catch(n){throw new y(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new me(rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ju{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class zu{constructor(t){this._methodName=t}}/**
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
 */class si{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
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
 */const bp=/^__.*__$/;function Gu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class ii{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.pu(t),s}yu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return cs(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(Gu(this.Vu)&&bp.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class Np{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||cr(t)}Cu(t,n,r,s=!1){return new ii({Vu:t,methodName:n,Du:r,path:tt.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kp(e){const t=e._freezeSettings(),n=cr(e._databaseId);return new Np(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Op(e,t,n,r=!1){return oi(n,e.Cu(r?4:3,t))}function oi(e,t){if(Ku(e=Me(e)))return Mp("Unsupported field value:",t,e),xp(e,t);if(e instanceof zu)return function(r,s){if(!Gu(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=oi(a,s.wu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=j.fromDate(r);return{timestampValue:rs(s.serializer,i)}}if(r instanceof j){const i=new j(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rs(s.serializer,i)}}if(r instanceof si)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof me)return{bytesValue:yu(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Eu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${lr(r)}`)}(e,t)}function xp(e,t){const n={};return Qa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):un(e,(r,s)=>{const i=oi(s,t.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ku(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof j||e instanceof si||e instanceof me||e instanceof At||e instanceof zu)}function Mp(e,t,n){if(!Ku(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=lr(n);throw r==="an object"?t.Su(e+" a custom object"):t.Su(e+" "+r)}}const Lp=new RegExp("[~\\*/\\[\\]]");function Fp(e,t,n){if(t.search(Lp)>=0)throw cs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ju(...t.split("."))._internalPath}catch{throw cs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function cs(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new y(p.INVALID_ARGUMENT,a+e+u)}/**
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
 */class Hu{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Up(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ai("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Up extends Hu{data(){return super.data()}}function ai(e,t){return typeof t=="string"?Fp(e,t):t instanceof ju?t._internalPath:t._delegate._internalPath}/**
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
 */function Bp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ui{}class Qu extends ui{}function Jp(e,t,...n){let r=[];t instanceof ui&&r.push(t),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof hi).length,a=i.filter(u=>u instanceof ci).length;if(o>1||o>0&&a>0)throw new y(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class ci extends Qu{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new ci(t,n,r)}_apply(t){const n=this._parse(t);return Wu(t._query,n),new Yt(t.firestore,t.converter,Jr(t._query,n))}_parse(t){const n=kp(t.firestore);return function(i,o,a,u,c,h,l){let f;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new y(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ao(l,h);const g=[];for(const A of l)g.push(wo(u,i,A));f={arrayValue:{values:g}}}else f=wo(u,i,l)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ao(l,h),f=Op(a,o,l,h==="in"||h==="not-in");return U.create(c,h,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class hi extends ui{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new hi(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ht.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)Wu(o,u),o=Jr(o,u)}(t._query,n),new Yt(t.firestore,t.converter,Jr(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class li extends Qu{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new li(t,n)}_apply(t){const n=function(s,i,o){if(s.startAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xe(i,o)}(t._query,this._field,this._direction);return new Yt(t.firestore,t.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ve(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Zp(e,t="asc"){const n=t,r=ai("orderBy",e);return li._create(r,n)}function wo(e,t,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new y(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ru(t)&&n.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(k.fromString(n));if(!E.isDocumentKey(r))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gi(e,new E(r))}if(n instanceof At)return Gi(e,n._key);throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lr(n)}.`)}function Ao(e,t){if(!Array.isArray(e)||e.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Wu(e,t){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class qp{convertValue(t,n="none"){switch(Ht(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Kt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw w()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return un(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new si(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Bs(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qe(t));default:return null}}convertTimestamp(t){const n=Nt(t);return new j(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=k.fromString(t);B(Ru(r));const s=new We(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(n)||yt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class In{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $p extends Hu{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Rn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(ai("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Rn extends $p{data(t={}){return super.data(t)}}class jp{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new In(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Rn(this._firestore,this._userDataWriter,r.key,r,new In(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Rn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new In(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Rn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new In(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:zp(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}class Gp extends qp{constructor(t){super(),this.firestore=t}convertBytes(t){return new me(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,n)}}function tg(e){e=us(e,Yt);const t=us(e.firestore,qu),n=Dp(t),r=new Gp(t);return Bp(e._query),Ap(n,e._query).then(s=>new jp(t,r,e,s))}(function(t,n=!0){(function(s){Ee=s})(Mo),Le(new ue("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new qu(new rd(r.getProvider("auth-internal")),new ad(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new y(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new We(c.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Vt(Bi,"4.5.0",t),Vt(Bi,"4.5.0","esm2017")})();const Kp={apiKey:"AIzaSyAwSEYmzmbnwAzGyUF4Iv9BU-sOhW_6bLY",authDomain:"voxten-website.firebaseapp.com",projectId:"voxten-website",storageBucket:"voxten-website.appspot.com",messagingSenderId:"709250687641",appId:"1:709250687641:web:88865e23c78fb0a6584e08"},Hp=Lo(Kp);Gh();const eg=Vp(Hp);export{Xp as c,eg as f,tg as g,Zp as o,Jp as q};
