"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/Cards/Index.tsx":
/*!****************************************!*\
  !*** ./src/components/Cards/Index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardHoverEffectDemo: function() { return /* binding */ CardHoverEffectDemo; },\n/* harmony export */   projects: function() { return /* binding */ projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./src/components/Cards/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction CardHoverEffectDemo() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().custom_scroll), \" font-normal max-w-5xl mx-auto px-8 h-[20cm] relative top-10 border border-white\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_1__.HoverEffect, {\n            items: projects\n        }, void 0, false, {\n            fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/src/components/Cards/Index.tsx\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/src/components/Cards/Index.tsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = CardHoverEffectDemo;\nconst projects = [\n    {\n        title: \"Stripe\",\n        description: \"A technology company that builds economic infrastructure for the internet.\",\n        link: \"https://stripe.com\"\n    },\n    {\n        title: \"Netflix\",\n        description: \"A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\",\n        link: \"https://netflix.com\"\n    },\n    {\n        title: \"Google\",\n        description: \"A multinational technology company that specializes in Internet-related services and products.\",\n        link: \"https://google.com\"\n    },\n    {\n        title: \"Meta\",\n        description: \"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.\",\n        link: \"https://meta.com\"\n    },\n    {\n        title: \"Amazon\",\n        description: \"A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.\",\n        link: \"https://amazon.com\"\n    },\n    {\n        title: \"Microsoft\",\n        description: \"A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.\",\n        link: \"https://microsoft.com\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"CardHoverEffectDemo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmRzL0luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFFakMsU0FBU0U7SUFDWixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVyxHQUF3QixPQUFyQkgseUVBQW9CLEVBQUM7a0JBQ3BDLDRFQUFDRCwrQ0FBV0E7WUFBQ00sT0FBT0M7Ozs7Ozs7Ozs7O0FBR2hDO0tBTmdCTDtBQU9ULE1BQU1LLFdBQVc7SUFDdEI7UUFDRUMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsTUFBTTtJQUNSO0NBRUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkcy9JbmRleC50c3g/ZTlmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3ZlckVmZmVjdCB9IGZyb20gXCIuL0NhcmRzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRIb3ZlckVmZmVjdERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jdXN0b21fc2Nyb2xsfSBmb250LW5vcm1hbCBtYXgtdy01eGwgbXgtYXV0byBweC04IGgtWzIwY21dIHJlbGF0aXZlIHRvcC0xMCBib3JkZXIgYm9yZGVyLXdoaXRlYH0+XG4gICAgICAgICAgICA8SG92ZXJFZmZlY3QgaXRlbXM9e3Byb2plY3RzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiU3RyaXBlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgdGVjaG5vbG9neSBjb21wYW55IHRoYXQgYnVpbGRzIGVjb25vbWljIGluZnJhc3RydWN0dXJlIGZvciB0aGUgaW50ZXJuZXQuXCIsXG4gICAgbGluazogXCJodHRwczovL3N0cmlwZS5jb21cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk5ldGZsaXhcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzdHJlYW1pbmcgc2VydmljZSB0aGF0IG9mZmVycyBhIHdpZGUgdmFyaWV0eSBvZiBhd2FyZC13aW5uaW5nIFRWIHNob3dzLCBtb3ZpZXMsIGFuaW1lLCBkb2N1bWVudGFyaWVzLCBhbmQgbW9yZSBvbiB0aG91c2FuZHMgb2YgaW50ZXJuZXQtY29ubmVjdGVkIGRldmljZXMuXCIsXG4gICAgbGluazogXCJodHRwczovL25ldGZsaXguY29tXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHb29nbGVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBtdWx0aW5hdGlvbmFsIHRlY2hub2xvZ3kgY29tcGFueSB0aGF0IHNwZWNpYWxpemVzIGluIEludGVybmV0LXJlbGF0ZWQgc2VydmljZXMgYW5kIHByb2R1Y3RzLlwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNZXRhXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgdGVjaG5vbG9neSBjb21wYW55IHRoYXQgZm9jdXNlcyBvbiBidWlsZGluZyBwcm9kdWN0cyB0aGF0IGFkdmFuY2UgRmFjZWJvb2sncyBtaXNzaW9uIG9mIGJyaW5naW5nIHRoZSB3b3JsZCBjbG9zZXIgdG9nZXRoZXIuXCIsXG4gICAgbGluazogXCJodHRwczovL21ldGEuY29tXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBbWF6b25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBtdWx0aW5hdGlvbmFsIHRlY2hub2xvZ3kgY29tcGFueSBmb2N1c2luZyBvbiBlLWNvbW1lcmNlLCBjbG91ZCBjb21wdXRpbmcsIGRpZ2l0YWwgc3RyZWFtaW5nLCBhbmQgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UuXCIsXG4gICAgbGluazogXCJodHRwczovL2FtYXpvbi5jb21cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1pY3Jvc29mdFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIG11bHRpbmF0aW9uYWwgdGVjaG5vbG9neSBjb21wYW55IHRoYXQgZGV2ZWxvcHMsIG1hbnVmYWN0dXJlcywgbGljZW5zZXMsIHN1cHBvcnRzLCBhbmQgc2VsbHMgY29tcHV0ZXIgc29mdHdhcmUsIGNvbnN1bWVyIGVsZWN0cm9uaWNzLCBwZXJzb25hbCBjb21wdXRlcnMsIGFuZCByZWxhdGVkIHNlcnZpY2VzLlwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9taWNyb3NvZnQuY29tXCIsXG4gIH0sXG4gIFxuXTtcbiJdLCJuYW1lcyI6WyJIb3ZlckVmZmVjdCIsInN0eWxlcyIsIkNhcmRIb3ZlckVmZmVjdERlbW8iLCJkaXYiLCJjbGFzc05hbWUiLCJjdXN0b21fc2Nyb2xsIiwiaXRlbXMiLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Cards/Index.tsx\n"));

/***/ })

});