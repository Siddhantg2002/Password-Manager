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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardHoverEffectDemo: function() { return /* binding */ CardHoverEffectDemo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards */ \"(app-pages-browser)/./src/components/Cards/Cards.tsx\");\n/* harmony import */ var _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Hooks/useFetch */ \"(app-pages-browser)/./src/Hooks/useFetch.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ CardHoverEffectDemo auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CardHoverEffectDemo() {\n    _s();\n    const { data, error, loading } = (0,_Hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:8080/your-accounts\");\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (data) {\n            setAccounts(data.map((account)=>({\n                    name: account.title,\n                    username: account.username,\n                    password: account.password,\n                    link: account.websiteLink\n                })));\n        }\n    }, [\n        data\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/Frontend/src/components/Cards/Index.tsx\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: error.message\n        }, void 0, false, {\n            fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/Frontend/src/components/Cards/Index.tsx\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_1__.HoverEffect, {\n        items: accounts\n    }, void 0, false, {\n        fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/Frontend/src/components/Cards/Index.tsx\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, this);\n}\n_s(CardHoverEffectDemo, \"dBlt07hWXXX3B3BoNHIcYoMd3G0=\", false, function() {\n    return [\n        _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = CardHoverEffectDemo;\nvar _c;\n$RefreshReg$(_c, \"CardHoverEffectDemo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmRzL0luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNzQztBQUNNO0FBQ0E7QUFVckMsU0FBU0k7O0lBQ2QsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUdOLDJEQUFRQSxDQUFZO0lBQ3JELE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBWSxFQUFFO0lBRXRERCxnREFBU0EsQ0FBQztRQUNSLElBQUlHLE1BQU07WUFDUkksWUFBWUosS0FBS0ssR0FBRyxDQUFDQyxDQUFBQSxVQUFZO29CQUMvQkMsTUFBTUQsUUFBUUUsS0FBSztvQkFDbkJDLFVBQVVILFFBQVFHLFFBQVE7b0JBQzFCQyxVQUFVSixRQUFRSSxRQUFRO29CQUMxQkMsTUFBTUwsUUFBUU0sV0FBVztnQkFDM0I7UUFDRjtJQUNGLEdBQUc7UUFBQ1o7S0FBSztJQUVULElBQUlFLFNBQVM7UUFDWCxxQkFBTyw4REFBQ1c7c0JBQUc7Ozs7OztJQUNiO0lBRUEsSUFBSVosT0FBTztRQUNULHFCQUFPLDhEQUFDWTtzQkFBSVosTUFBTWEsT0FBTzs7Ozs7O0lBQzNCO0lBRUEscUJBQU8sOERBQUNuQiwrQ0FBV0E7UUFBQ29CLE9BQU9aOzs7Ozs7QUFDN0I7R0F4QmdCSjs7UUFDbUJILHVEQUFRQTs7O0tBRDNCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkcy9JbmRleC50c3g/ZTlmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IEhvdmVyRWZmZWN0IH0gZnJvbSBcIi4vQ2FyZHNcIjtcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwiLi4vLi4vSG9va3MvdXNlRmV0Y2hcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5pbnRlcmZhY2UgQWNjb3VudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZEhvdmVyRWZmZWN0RGVtbygpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlRmV0Y2g8QWNjb3VudFtdPihcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC95b3VyLWFjY291bnRzXCIpO1xuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlPEFjY291bnRbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHNldEFjY291bnRzKGRhdGEubWFwKGFjY291bnQgPT4gKHtcbiAgICAgICAgbmFtZTogYWNjb3VudC50aXRsZSxcbiAgICAgICAgdXNlcm5hbWU6IGFjY291bnQudXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBhY2NvdW50LnBhc3N3b3JkLFxuICAgICAgICBsaW5rOiBhY2NvdW50LndlYnNpdGVMaW5rXG4gICAgICB9KSkpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxoMT57ZXJyb3IubWVzc2FnZX08L2gxPjtcbiAgfVxuXG4gIHJldHVybiA8SG92ZXJFZmZlY3QgaXRlbXM9e2FjY291bnRzfSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJIb3ZlckVmZmVjdCIsInVzZUZldGNoIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkSG92ZXJFZmZlY3REZW1vIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImFjY291bnRzIiwic2V0QWNjb3VudHMiLCJtYXAiLCJhY2NvdW50IiwibmFtZSIsInRpdGxlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxpbmsiLCJ3ZWJzaXRlTGluayIsImgxIiwibWVzc2FnZSIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Cards/Index.tsx\n"));

/***/ })

});