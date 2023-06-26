(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue2ScaleBox"] = factory();
	else
		root["vue2ScaleBox"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./lib/index.vue?vue&type=template&id=efd47572&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"vue2ScaleBox",staticClass:"vue2-scale-box",style:({
    ..._vm.style,
    width: _vm.width + 'px',
    height: _vm.height + 'px',
    backgroundColor: _vm.bgc,
  })},[_vm._t("default")],2)
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./lib/index.vue?vue&type=script&lang=js&

/**
 * width        宽
 * height       高
 * bgc          背景颜色
 * delay        自适应缩放防抖延迟时间（ms）
 * isFlat       是否启用拉伸模式
 * @scaleChange 缩放值发生改变的方法 可动态获取 scale 改变后的值
 */
/* harmony default export */ var lib_vue_loader_options_libvue_type_script_lang_js_ = ({
  name: "Vue2ScaleBox",
  props: {
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 1080,
    },
    bgc: {
      type: String,
      default: "transparent",
    },
    delay: {
      type: Number,
      default: 100,
    },
    isFlat: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scale: 0,
      scaleX: 0,
      scaleY: 0,
      style: {
        position: "fixed",
        transform: "scale(var(--scale)) translate(-50%, -50%)",
        transformOrigin: "0 0",
        left: "50%",
        top: "50%",
        zIndex: 999,
      },
    };
  },
  created() {
    if (this.isFlat) {
      // 拉伸模式
      this.style["transform"] =
        "scaleX(var(--scaleX)) scaleY(var(--scaleY)) translate(-50%, -50%)";
    } else {
      // 等比缩放模式
      this.style["transform"] = "scale(var(--scale)) translate(-50%, -50%)";
    }
  },
  watch: {
    scale: {
      handler(scale) {
        let args;
        if (this.isFlat) {
          args = [this.scaleX, this.scaleY];
        } else {
          args = scale;
        }
        this.$emit("scaleChange", args);
      },
      immediate: true,
    },
  },
  mounted() {
    this.setScale();
    window.addEventListener("resize", this.debounce(this.setScale));
  },
  methods: {
    getScale() {
      const { width, height } = this;
      const wh = window.innerHeight / height;
      const ww = window.innerWidth / width;
      return ww < wh ? ww : wh;
    },
    getScaleX() {
      const ww = window.innerWidth / this.width;
      return ww;
    },
    getScaleY() {
      const wh = window.innerHeight / this.height;
      return wh;
    },
    setScale() {
      this.scale = this.getScale();
      if (this.$refs.vue2ScaleBox) {
        if (this.isFlat) {
          // 拉伸模式
          this.scaleX = this.getScaleX();
          this.scaleY = this.getScaleY();
          this.$refs.vue2ScaleBox.style.setProperty("--scaleX", this.scaleX);
          this.$refs.vue2ScaleBox.style.setProperty("--scaleY", this.scaleY);
        } else {
          // 等比缩放模式
          this.scale = this.getScale();
          this.$refs.vue2ScaleBox.style.setProperty("--scale", this.scale);
        }
      }
    },
    debounce(fn, delay) {
      const delays = delay || this.delay;
      let timer;
      return function () {
        const th = this;
        const args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          timer = null;
          fn.apply(th, args);
        }, delays);
      };
    },
  },
});

;// CONCATENATED MODULE: ./lib/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var libvue_type_script_lang_js_ = (lib_vue_loader_options_libvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./lib/index.vue





/* normalize component */
;
var component = normalizeComponent(
  libvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lib = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (lib);


__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});