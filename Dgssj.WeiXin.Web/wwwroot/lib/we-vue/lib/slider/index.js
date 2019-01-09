!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],e);else{var n="object"==typeof exports?e(require("vue")):e(t.Vue);for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,function(t){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=177)}({0:function(t,e,n){"use strict";var i=n(2),r=n.n(i),o=function(t){t.component(this.name,this)},s=function(t){return t.mixins=t.mixins||[],t.components=t.components||{},t.install=t.install||o,t},u=function(t){return t.changedTouches[0]||t.touches[0]};n.d(e,"c",function(){return a}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var a=r.a.prototype.$isServer},1:function(t,e,n){"use strict";function i(t,e,n,i,r,o,s,u){var a,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=a):r&&(a=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(l.functional){l._injectStyles=a;var c=l.render;l.render=function(t,e){return a.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,a):[a]}return{exports:t,options:l}}n.d(e,"a",function(){return i})},107:function(t,e,n){},177:function(t,e,n){"use strict";n.r(e);var i=n(0),r=Object(i.a)({name:"wv-slider",props:{min:{type:Number,default:0,validator:function(t){return t>=0}},max:{type:Number,default:100},step:{type:Number,default:1,validator:function(t){return t>0}},value:{type:Number},showValue:{type:Boolean,default:!0},enableClick:{type:Boolean,default:!0},disabled:Boolean},data:function(){return{handlerStartPos:0,sliderLeft:0,sliderLength:0}},computed:{percent:function(){return void 0===this.value||null===this.value?0:Math.floor((this.value-this.min)/(this.max-this.min)*100)},stepWidth:function(){return this.sliderLength*this.step/(this.max-this.min)}},created:function(){if(this.min>=this.max)throw new Error("property:max must be bigger than property:min")},mounted:function(){this.sliderLeft=this.$refs.inner.offsetLeft,this.sliderLength=this.$refs.inner.getBoundingClientRect().width},methods:{getHandlerStartPos:function(){var t=this.$refs.inner.getBoundingClientRect();return this.$refs.handler.getBoundingClientRect().left-t.left},onClick:function(t){if(!this.disabled&&this.enableClick){var e=Math.round((t.clientX-this.sliderLeft)/this.stepWidth),n=this.min+this.step*e;this.$emit("input",n),this.$emit("change",n)}},onTouchstart:function(){this.disabled||(this.handlerStartPos=this.getHandlerStartPos())},onTouchmove:function(t){if(!this.disabled){var e=Object(i.b)(t),n=Math.round((e.clientX-this.sliderLeft)/this.stepWidth),r=this.min+this.step*n;r=r<this.min?this.min:r>this.max?this.max:r,this.$emit("input",r),this.$emit("change",r)}}}}),o=(n(210),n(1)),s=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-slider-box"},[n("div",{staticClass:"weui-slider"},[n("div",{ref:"inner",staticClass:"weui-slider__inner",on:{click:function(e){return e.preventDefault(),t.onClick(e)}}},[n("div",{staticClass:"weui-slider__track",style:{width:t.percent+"%"}}),t._v(" "),n("div",{ref:"handler",staticClass:"weui-slider__handler",style:{left:t.percent+"%"},on:{touchstart:t.onTouchstart,touchmove:t.onTouchmove}})])]),t._v(" "),t.showValue?n("div",{staticClass:"weui-slider-box__value"},[t._t("value-box",[t._v(t._s(t.value))])],2):t._e()])},[],!1,null,"1dfca812",null);e.default=s.exports},2:function(e,n){e.exports=t},210:function(t,e,n){"use strict";var i=n(107);n.n(i).a}})});