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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardHoverEffectDemo: function() { return /* binding */ CardHoverEffectDemo; },\n/* harmony export */   accounts: function() { return /* binding */ accounts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Hooks/useFetch */ \"(app-pages-browser)/./src/Hooks/useFetch.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ CardHoverEffectDemo,accounts auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CardHoverEffectDemo() {\n    _s();\n    const { data, error, loading } = (0,_Hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:8080/your-accounts\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        console.log(data);\n    }, [\n        data\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \" Loading..\"\n        }, void 0, false, {\n            fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/Frontend/src/components/Cards/Index.tsx\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_1__.HoverEffect, {\n        items: accounts\n    }, void 0, false, {\n        fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/Frontend/src/components/Cards/Index.tsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\n_s(CardHoverEffectDemo, \"kO6JFiZRgoquWzsdjojnrQL4Jmc=\", false, function() {\n    return [\n        _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = CardHoverEffectDemo;\nconst accounts = [\n    {\n        title: \"Stripe\",\n        username: \"Siddhant.xo\",\n        password: \"123\",\n        link: \"https://stripe.com\"\n    },\n    {\n        title: \"Stripe\",\n        username: \"Siddhant.xo\",\n        password: \"123\",\n        link: \"https://stripe.com\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"CardHoverEffectDemo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmRzL0luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDc0M7QUFDSztBQUNUO0FBRTNCLFNBQVNHOztJQUNkLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFHTCwyREFBUUEsQ0FBQztJQUMxQ0MsZ0RBQVNBLENBQUM7UUFDVkssUUFBUUMsR0FBRyxDQUFDSjtJQUNaLEdBQUc7UUFBQ0E7S0FBSztJQUVULElBQUdFLFNBQVE7UUFDVCxxQkFBTyw4REFBQ0c7c0JBQUc7Ozs7OztJQUNiO0lBRUEscUJBQU8sOERBQUNULCtDQUFXQTtRQUFDVSxPQUFPQzs7Ozs7O0FBQzdCO0dBWGdCUjs7UUFDbUJGLHVEQUFRQTs7O0tBRDNCRTtBQVlULE1BQU1RLFdBQVc7SUFDdEI7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0NBRUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkcy9JbmRleC50c3g/ZTlmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgSG92ZXJFZmZlY3QgfSBmcm9tIFwiLi9DYXJkc1wiO1xuaW1wb3J0IHVzZUZldGNoIGZyb20gXCIuLi8uLi9Ib29rcy91c2VGZXRjaFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRIb3ZlckVmZmVjdERlbW8oKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZUZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3lvdXItYWNjb3VudHNcIilcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSlcbiAgfSwgW2RhdGFdKVxuICBcbiAgaWYobG9hZGluZyl7XG4gICAgcmV0dXJuIDxoMT4gTG9hZGluZy4uPC9oMT5cbiAgfVxuICBcbiAgcmV0dXJuIDxIb3ZlckVmZmVjdCBpdGVtcz17YWNjb3VudHN9IC8+O1xufVxuZXhwb3J0IGNvbnN0IGFjY291bnRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiU3RyaXBlXCIsXG4gICAgdXNlcm5hbWU6IFwiU2lkZGhhbnQueG9cIixcbiAgICBwYXNzd29yZDogXCIxMjNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vc3RyaXBlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3RyaXBlXCIsXG4gICAgdXNlcm5hbWU6IFwiU2lkZGhhbnQueG9cIixcbiAgICBwYXNzd29yZDogXCIxMjNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vc3RyaXBlLmNvbVwiLFxuICB9LFxuICBcbl07XG4iXSwibmFtZXMiOlsiSG92ZXJFZmZlY3QiLCJ1c2VGZXRjaCIsInVzZUVmZmVjdCIsIkNhcmRIb3ZlckVmZmVjdERlbW8iLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsImgxIiwiaXRlbXMiLCJhY2NvdW50cyIsInRpdGxlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Cards/Index.tsx\n"));

/***/ })

});