!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],e);else{var n="object"==typeof exports?e(require("vue")):e(t.Vue);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=192)}({0:function(t,e,n){"use strict";var r=n(2),o=n.n(r),i=function(t){t.component(this.name,this)},s=function(t){return t.mixins=t.mixins||[],t.components=t.components||{},t.install=t.install||i,t},u=function(t){return t.changedTouches[0]||t.touches[0]};n.d(e,"c",function(){return c}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var c=o.a.prototype.$isServer},1:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,u){var c,a="function"==typeof t?t.options:t;if(e&&(a.render=e,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},a._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(a.functional){a._injectStyles=c;var l=a.render;a.render=function(t,e){return c.call(e),l(t,e)}}else{var f=a.beforeCreate;a.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:a}}n.d(e,"a",function(){return r})},124:function(t,e,n){},192:function(t,e,n){"use strict";n.r(e);var r=n(25),o=n(0),i=Object(o.a)({name:"wv-footer-link",mixins:[r.a],props:{text:String},methods:{onClick:function(){this.$emit("click"),this.routerLink()}}}),s=n(1),u=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-footer__link",domProps:{textContent:this._s(this.text)},on:{click:this.onClick}})},[],!1,null,null,null).exports,c=Object(o.a)({name:"wv-footer",components:{FooterLink:u},props:{text:String,links:{type:Array,default:function(){return[]}}}}),a=(n(247),Object(s.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-footer"},[this.links.length>0?e("p",{staticClass:"weui-footer__links"},this._l(this.links,function(t){return e("FooterLink",{key:t.text,attrs:{text:t.text,to:t.link}})})):this._e(),this._v(" "),e("p",{staticClass:"weui-footer__text",domProps:{innerHTML:this._s(this.text)}})])},[],!1,null,"7e1809bd",null));e.default=a.exports},2:function(e,n){e.exports=t},247:function(t,e,n){"use strict";var r=n(124);n.n(r).a},25:function(t,e,n){"use strict";e.a={props:{url:String,replace:Boolean,to:[String,Object]},methods:{routerLink:function(){var t=this.to,e=this.url,n=this.$router,r=this.replace;t&&n?n[r?"replace":"push"](t):e&&(r?location.replace(e):location.href=e)}}}}})});