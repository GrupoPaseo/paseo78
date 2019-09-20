/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*! http://responsiveslides.com v1.55 by @viljamis */\n(function (c, K, C) {\n  c.fn.responsiveSlides = function (m) {\n    var a = c.extend({\n      auto: !0,\n      speed: 500,\n      timeout: 4e3,\n      pager: !1,\n      nav: !1,\n      random: !1,\n      pause: !1,\n      pauseControls: !0,\n      prevText: \"Previous\",\n      nextText: \"Next\",\n      maxwidth: \"\",\n      navContainer: \"\",\n      manualControls: \"\",\n      namespace: \"rslides\",\n      before: c.noop,\n      after: c.noop\n    }, m);\n    return this.each(function () {\n      C++;\n\n      var f = c(this),\n          u,\n          t,\n          v,\n          n,\n          q,\n          r,\n          p = 0,\n          e = f.children(),\n          D = e.length,\n          h = parseFloat(a.speed),\n          E = parseFloat(a.timeout),\n          w = parseFloat(a.maxwidth),\n          g = a.namespace,\n          d = g + C,\n          F = g + \"_nav \" + d + \"_nav\",\n          x = g + \"_here\",\n          k = d + \"_on\",\n          y = d + \"_s\",\n          l = c(\"<ul class='\" + g + \"_tabs \" + d + \"_tabs' />\"),\n          z = {\n        float: \"left\",\n        position: \"relative\",\n        opacity: 1,\n        zIndex: 2\n      },\n          A = {\n        float: \"none\",\n        position: \"absolute\",\n        opacity: 0,\n        zIndex: 1\n      },\n          G = function () {\n        var b = (document.body || document.documentElement).style,\n            a = \"transition\";\n        if (\"string\" === typeof b[a]) return !0;\n        u = [\"Moz\", \"Webkit\", \"Khtml\", \"O\", \"ms\"];\n        var a = a.charAt(0).toUpperCase() + a.substr(1),\n            c;\n\n        for (c = 0; c < u.length; c++) {\n          if (\"string\" === typeof b[u[c] + a]) return !0;\n        }\n\n        return !1;\n      }(),\n          B = function B(b) {\n        a.before(b);\n        G ? (e.removeClass(k).css(A).eq(b).addClass(k).css(z), p = b, setTimeout(function () {\n          a.after(b);\n        }, h)) : e.stop().fadeOut(h, function () {\n          c(this).removeClass(k).css(A).css(\"opacity\", 1);\n        }).eq(b).fadeIn(h, function () {\n          c(this).addClass(k).css(z);\n          a.after(b);\n          p = b;\n        });\n      };\n\n      a.random && (e.sort(function () {\n        return Math.round(Math.random()) - 0.5;\n      }), f.empty().append(e));\n      e.each(function (a) {\n        this.id = y + a;\n      });\n      f.addClass(g + \" \" + d);\n      m && m.maxwidth && f.css(\"max-width\", w);\n      e.hide().css(A).eq(0).addClass(k).css(z).show();\n      G && e.show().css({\n        \"-webkit-transition\": \"opacity \" + h + \"ms ease-in-out\",\n        \"-moz-transition\": \"opacity \" + h + \"ms ease-in-out\",\n        \"-o-transition\": \"opacity \" + h + \"ms ease-in-out\",\n        transition: \"opacity \" + h + \"ms ease-in-out\"\n      });\n\n      if (1 < e.length) {\n        if (E < h + 100) return;\n\n        if (a.pager && !a.manualControls) {\n          var H = [];\n          e.each(function (a) {\n            a += 1;\n            H += \"<li><a href='#' class='\" + y + a + \"'>\" + a + \"</a></li>\";\n          });\n          l.append(H);\n          m.navContainer ? c(a.navContainer).append(l) : f.after(l);\n        }\n\n        a.manualControls && (l = c(a.manualControls), l.addClass(g + \"_tabs \" + d + \"_tabs\"));\n        (a.pager || a.manualControls) && l.find(\"li\").each(function (a) {\n          c(this).addClass(y + (a + 1));\n        });\n        if (a.pager || a.manualControls) r = l.find(\"a\"), t = function t(a) {\n          r.closest(\"li\").removeClass(x).eq(a).addClass(x);\n        };\n        a.auto && (v = function v() {\n          q = setInterval(function () {\n            e.stop(!0, !0);\n            var b = p + 1 < D ? p + 1 : 0;\n            (a.pager || a.manualControls) && t(b);\n            B(b);\n          }, E);\n        }, v());\n\n        n = function n() {\n          a.auto && (clearInterval(q), v());\n        };\n\n        a.pause && f.hover(function () {\n          clearInterval(q);\n        }, function () {\n          n();\n        });\n        if (a.pager || a.manualControls) r.bind(\"click\", function (b) {\n          b.preventDefault();\n          a.pauseControls || n();\n          b = r.index(this);\n          p === b || c(\".\" + k).queue(\"fx\").length || (t(b), B(b));\n        }).eq(0).closest(\"li\").addClass(x), a.pauseControls && r.hover(function () {\n          clearInterval(q);\n        }, function () {\n          n();\n        });\n\n        if (a.nav) {\n          g = \"<a href='#' class='\" + F + \" prev'>\" + a.prevText + \"</a><a href='#' class='\" + F + \" next'>\" + a.nextText + \"</a>\";\n          m.navContainer ? c(a.navContainer).append(g) : f.after(g);\n          var d = c(\".\" + d + \"_nav\"),\n              I = d.filter(\".prev\");\n          d.bind(\"click\", function (b) {\n            b.preventDefault();\n            b = c(\".\" + k);\n\n            if (!b.queue(\"fx\").length) {\n              var d = e.index(b);\n              b = d - 1;\n              d = d + 1 < D ? p + 1 : 0;\n              B(c(this)[0] === I[0] ? b : d);\n              (a.pager || a.manualControls) && t(c(this)[0] === I[0] ? b : d);\n              a.pauseControls || n();\n            }\n          });\n          a.pauseControls && d.hover(function () {\n            clearInterval(q);\n          }, function () {\n            n();\n          });\n        }\n      }\n\n      if (\"undefined\" === typeof document.body.style.maxWidth && m.maxwidth) {\n        var J = function J() {\n          f.css(\"width\", \"100%\");\n          f.width() > w && f.css(\"width\", w);\n        };\n\n        J();\n        c(K).bind(\"resize\", function () {\n          J();\n        });\n      }\n    });\n  };\n})(jQuery, this, 0);\n\n$(function () {\n  $(\".rslides\").responsiveSlides();\n  $(\".header__burguer\").on(\"click\", function () {\n    if ($(\".header__nav\").first().is(\":hidden\")) {\n      $(\".header__nav\").slideDown(\"slow\");\n    } else {\n      $(\".header__nav\").slideUp(\"slow\");\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });