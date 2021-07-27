/*! For license information please see 700.js.LICENSE.txt */
(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[700],{7366:function(e){var t;t=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.map((function(e){return e._vuebackbone_proxy}));for(var r in e)if("function"==typeof e[r]&&"constructor"!==r&&(t||-1===o.indexOf(r))){var a=e[r].bind(e);t||(a=i(a,r)),Object.defineProperty(n,r,{value:a})}return Object.defineProperty(n,"_vuebackbone_original",{value:e}),n};var o=["slice","forEach","map","reduce","reduceRight","find","filter","every","some","indexOf","lastIndexOf","findIndex"],r=["pop","shift","remove","get","at","where","findWhere","reject","sortBy","shuffle","toArray","detect","select","first","head","take","rest","tail","drop","initial","last","without"];function i(e,t){return r.indexOf(t)>-1?function(){var t=e.apply(this,arguments);return t&&(t._vuebackbone_proxy||t.map((function(e){return e._vuebackbone_proxy})))||t}:e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n={};for(var o in e)if("function"==typeof e[o]&&"constructor"!==o){var r=e[o].bind(e);Object.defineProperty(n,o,{value:r})}return Object.keys(e.attributes).forEach((function(o){!function(e,t,n,o){var r=t.get.bind(t,n),i=t.set.bind(t,n),a=e[n]?o+n:n;Object.defineProperty(e,a,{enumerable:!0,get:r,set:i})}(n,e,o,t)})),n.id||Object.defineProperty(n,"id",{get:function(){return e.id}}),Object.defineProperty(n,"_vuebackbone_original",{value:e}),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapBBModels=v,t.install=_,t.original=h;var o=i(n(1)),r=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}var a={proxies:!0,conflictPrefix:"$",addComputed:!0,dataPrefix:"_",simpleCollectionProxy:!1};function u(e){a.proxies&&!e._vuebackbone_proxy&&(e.models?(e.each(u),e._vuebackbone_proxy=(0,r.default)(e,a.simpleCollectionProxy)):e._vuebackbone_proxy=(0,o.default)(e,a.conflictPrefix))}function c(e){return e.attributes}function s(e){return e.map(c)}function f(e){return e.models?s(e):c(e)}function p(e){return a.addComputed&&a.proxies?a.dataPrefix+e:e}function b(e,t){var n=e._vuebackbone[t],o=n.bb;o.models?function(e,t,n,o){a.proxies&&(o.on("add",u),n.onreset=function(){return o.each(u)},o.on("reset",n.onreset)),n.onchange=function(){if(e.$data[p(t)]=s(o),a.proxies){var n=o._vuebackbone_proxy;n.length=0,o.forEach((function(e,t){return n[t]=e._vuebackbone_proxy}))}},o.on("reset sort remove add",n.onchange)}(e,t,n,o):function(e,t){e.onchange=function(){t.keys().length>Object.keys(t._previousAttributes).length&&console.warn("VueBackbone: Adding new Model attributes after binding is not supported, provide defaults for all properties")},t.on("change",e.onchange)}(n,o)}function d(e,t){var n=e._vuebackbone[t];n&&(n.bb.off(null,n.onchange),n.onreset&&n.bb.off(null,n.onreset))}var l={beforeCreate:function(){var e=this,t=e.$options.bb;if(t){if("function"!=typeof t)throw"VueBackbone: 'bb' initialization option must be a function";t=t(),e._vuebackbone={},Object.keys(t).forEach((function(n){var o=t[n],r=!1;if(!0===o.prop){if(!e.$options.propsData||!e.$options.propsData[n])throw"VueBackbone: Missing Backbone object in Vue prop '"+n+"'";o=e.$options.propsData[n],r=!0}if(!(o=o._vuebackbone_original||o).on||!o.attributes&&!o.models)throw"VueBackbone: Unrecognized Backbone object in Vue instantiation ("+n+"), must be a Collection or Model";!function(e,t,n,o){e._vuebackbone[t]={bb:n},u(n),o||(function(e,t){var n=e.$options.data,o=f(e._vuebackbone[t].bb),r=p(t);e.$options.data=function(){var e={},i=n?n.apply(this,arguments):{};if(i.hasOwnProperty(t))throw"VueBackbone: Property '"+t+"' mustn't exist within the Vue data already";if(i.hasOwnProperty(r))throw"VueBackbone: Property '"+r+"' mustn't exist within the Vue data already";return Object.keys(i).forEach((function(t){return e[t]=i[t]})),e[r]=o,e}}(e,t),a.addComputed&&a.proxies?function(e,t){var n=e._vuebackbone[t],o=p(t),r=e.$options;r.computed=r.computed||{},r.computed[t]?console.warn("VueBackbone: Generated computed function '"+t+"' already exists within the Vue computed functions"):r.computed[t]={get:function(){return e.$data[o],n.bb._vuebackbone_proxy},set:function(r){d(e,t),u(r),n.bb=r,e.$data[o]=f(r),b(e,t)}}}(e,t):function(e,t){var n=e._vuebackbone[t],o=p(t);e.$bb=e.$bb||{},Object.defineProperty(e.$bb,t,{get:function(){return e.$data[o],n.bb},set:function(r){d(e,t),n.bb=r,e.$data[o]=f(r),b(e,t)}})}(e,t)),b(e,t)}(e,n,o,r)}))}},destroyed:function(){var e=this,t=e._vuebackbone;t&&Object.keys(t).forEach((function(t){return d(e,t)}))}};function v(e){return a.proxies?function(){var t=e.apply(this,arguments);return t&&(t._vuebackbone_proxy||t.map((function(e){return e._vuebackbone_proxy})))||t}:function(){var t=e.apply(this,arguments);return t&&(t.attributes||t.map((function(e){return e.attributes})))||t}}function _(e,t){for(var n in t)t.hasOwnProperty(n)&&(a[n]=t[n]);e.mixin(l)}function h(e){return e._vuebackbone_original||e}t.default={install:_,mapBBModels:v,original:h}}])},e.exports=t()},1018:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=function(e,t){var n="static";t&&t.name&&"string"==typeof t.name&&(n=t.name),"function"!=typeof e.config.optionMergeStrategies[n]&&(e.config.optionMergeStrategies[n]=e.config.optionMergeStrategies.data),t&&t.namespaced&&(e.prototype.$static={}),e.mixin({beforeCreate:function(){const e=this.$options[n],t=this.$static||this;e&&"function"==typeof e?Object.assign(t,e.apply(this)):e&&"object"==typeof e&&Object.assign(t,e)}})}},1900:(e,t,n)=>{"use strict";function o(e,t,n,o,r,i,a,u){var c,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=c):r&&(c=u?function(){r.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(e,t){return c.call(t),f(e,t)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:s}}n.d(t,{Z:()=>o})}}]);