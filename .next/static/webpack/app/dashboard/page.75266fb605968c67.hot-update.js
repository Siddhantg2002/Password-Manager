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

/***/ "(app-pages-browser)/./src/components/Tabs/Tabs.tsx":
/*!**************************************!*\
  !*** ./src/components/Tabs/Tabs.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FadeInDiv: function() { return /* binding */ FadeInDiv; },\n/* harmony export */   Tabs: function() { return /* binding */ Tabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./src/utils/cn.ts\");\n/* __next_internal_client_entry_do_not_use__ Tabs,FadeInDiv auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Tabs = (param)=>{\n    let { tabs: propTabs, containerClassName, activeTabClassName, tabClassName, contentClassName } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(propTabs[0]);\n    const [tabs, setTabs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(propTabs);\n    const moveSelectedTabToTop = (idx)=>{\n        const newTabs = [\n            ...propTabs\n        ];\n        const selectedTab = newTabs.splice(idx, 1);\n        newTabs.unshift(selectedTab[0]);\n        setTabs(newTabs);\n        setActive(newTabs[0]);\n    };\n    const [hovering, setHovering] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full\", containerClassName),\n                children: propTabs.map((tab, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            moveSelectedTabToTop(idx);\n                        },\n                        onMouseEnter: ()=>setHovering(true),\n                        onMouseLeave: ()=>setHovering(false),\n                        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"relative px-4 py-2 rounded-full\", tabClassName),\n                        style: {\n                            transformStyle: \"preserve-3d\"\n                        },\n                        children: [\n                            active.value === tab.value && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                layoutId: \"clickedbutton\",\n                                transition: {\n                                    type: \"spring\",\n                                    bounce: 0.3,\n                                    duration: 0.6\n                                },\n                                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full \", activeTabClassName)\n                            }, void 0, false, {\n                                fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/src/components/Tabs/Tabs.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"relative block text-black dark:text-white\",\n                                children: tab.title\n                            }, void 0, false, {\n                                fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/src/components/Tabs/Tabs.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, tab.title, true, {\n                        fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/src/components/Tabs/Tabs.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/src/components/Tabs/Tabs.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeInDiv, {\n                tabs: tabs,\n                active: active,\n                hovering: hovering,\n                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"mt-32\", contentClassName)\n            }, active.value, false, {\n                fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/src/components/Tabs/Tabs.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Tabs, \"XrjJrqEGwkbQwi7kA2ABxh0hv5U=\");\n_c = Tabs;\nconst FadeInDiv = (param)=>{\n    let { className, tabs, hovering } = param;\n    const isActive = (tab)=>{\n        return tab.value === tabs[0].value;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-full\",\n        children: tabs.map((tab, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                layoutId: tab.value,\n                style: {\n                    scale: 1 - idx * 0.1,\n                    top: hovering ? idx * -50 : 0,\n                    zIndex: -idx,\n                    opacity: idx < 3 ? 1 - idx * 0.1 : 0\n                },\n                animate: {\n                    y: isActive(tab) ? [\n                        0,\n                        40,\n                        0\n                    ] : 0\n                },\n                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"w-full h-full absolute top-0 left-0\", className),\n                children: tab.content\n            }, tab.value, false, {\n                fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/src/components/Tabs/Tabs.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/siddhantgupta/Desktop/SID/Local Projects/Password Manager/src/components/Tabs/Tabs.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = FadeInDiv;\nvar _c, _c1;\n$RefreshReg$(_c, \"Tabs\");\n$RefreshReg$(_c1, \"FadeInDiv\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RhYnMvVGFicy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ007QUFDUDtBQVF6QixNQUFNRyxPQUFPO1FBQUMsRUFDbkJDLE1BQU1DLFFBQVEsRUFDZEMsa0JBQWtCLEVBQ2xCQyxrQkFBa0IsRUFDbEJDLFlBQVksRUFDWkMsZ0JBQWdCLEVBT2pCOztJQUNDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBTUssUUFBUSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDRCxNQUFNUSxRQUFRLEdBQUdaLCtDQUFRQSxDQUFRSztJQUV4QyxNQUFNUSx1QkFBdUIsQ0FBQ0M7UUFDNUIsTUFBTUMsVUFBVTtlQUFJVjtTQUFTO1FBQzdCLE1BQU1XLGNBQWNELFFBQVFFLE1BQU0sQ0FBQ0gsS0FBSztRQUN4Q0MsUUFBUUcsT0FBTyxDQUFDRixXQUFXLENBQUMsRUFBRTtRQUM5QkosUUFBUUc7UUFDUkosVUFBVUksT0FBTyxDQUFDLEVBQUU7SUFDdEI7SUFFQSxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDO0lBRXpDLHFCQUNFOzswQkFDRSw4REFBQ3FCO2dCQUNDQyxXQUFXcEIsNkNBQUVBLENBQ1gsbUpBQ0FJOzBCQUdERCxTQUFTa0IsR0FBRyxDQUFDLENBQUNDLEtBQUtWLG9CQUNsQiw4REFBQ1c7d0JBRUNDLFNBQVM7NEJBQ1BiLHFCQUFxQkM7d0JBQ3ZCO3dCQUNBYSxjQUFjLElBQU1QLFlBQVk7d0JBQ2hDUSxjQUFjLElBQU1SLFlBQVk7d0JBQ2hDRSxXQUFXcEIsNkNBQUVBLENBQUMsbUNBQW1DTTt3QkFDakRxQixPQUFPOzRCQUNMQyxnQkFBZ0I7d0JBQ2xCOzs0QkFFQ3BCLE9BQU9xQixLQUFLLEtBQUtQLElBQUlPLEtBQUssa0JBQ3pCLDhEQUFDOUIsaURBQU1BLENBQUNvQixHQUFHO2dDQUNUVyxVQUFTO2dDQUNUQyxZQUFZO29DQUFFQyxNQUFNO29DQUFVQyxRQUFRO29DQUFLQyxVQUFVO2dDQUFJO2dDQUN6RGQsV0FBV3BCLDZDQUFFQSxDQUNYLCtEQUNBSzs7Ozs7OzBDQUtOLDhEQUFDOEI7Z0NBQUtmLFdBQVU7MENBQ2JFLElBQUljLEtBQUs7Ozs7Ozs7dUJBdkJQZCxJQUFJYyxLQUFLOzs7Ozs7Ozs7OzBCQTRCcEIsOERBQUNDO2dCQUNDbkMsTUFBTUE7Z0JBQ05NLFFBQVFBO2dCQUVSUyxVQUFVQTtnQkFDVkcsV0FBV3BCLDZDQUFFQSxDQUFDLFNBQVNPO2VBRmxCQyxPQUFPcUIsS0FBSzs7Ozs7OztBQU16QixFQUFFO0dBekVXNUI7S0FBQUE7QUEyRU4sTUFBTW9DLFlBQVk7UUFBQyxFQUN4QmpCLFNBQVMsRUFDVGxCLElBQUksRUFDSmUsUUFBUSxFQU9UO0lBQ0MsTUFBTXFCLFdBQVcsQ0FBQ2hCO1FBQ2hCLE9BQU9BLElBQUlPLEtBQUssS0FBSzNCLElBQUksQ0FBQyxFQUFFLENBQUMyQixLQUFLO0lBQ3BDO0lBQ0EscUJBQ0UsOERBQUNWO1FBQUlDLFdBQVU7a0JBQ1psQixLQUFLbUIsR0FBRyxDQUFDLENBQUNDLEtBQUtWLG9CQUNkLDhEQUFDYixpREFBTUEsQ0FBQ29CLEdBQUc7Z0JBRVRXLFVBQVVSLElBQUlPLEtBQUs7Z0JBQ25CRixPQUFPO29CQUNMWSxPQUFPLElBQUkzQixNQUFNO29CQUNqQjRCLEtBQUt2QixXQUFXTCxNQUFNLENBQUMsS0FBSztvQkFDNUI2QixRQUFRLENBQUM3QjtvQkFDVDhCLFNBQVM5QixNQUFNLElBQUksSUFBSUEsTUFBTSxNQUFNO2dCQUNyQztnQkFDQStCLFNBQVM7b0JBQ1BDLEdBQUdOLFNBQVNoQixPQUFPO3dCQUFDO3dCQUFHO3dCQUFJO3FCQUFFLEdBQUc7Z0JBQ2xDO2dCQUNBRixXQUFXcEIsNkNBQUVBLENBQUMsdUNBQXVDb0I7MEJBRXBERSxJQUFJdUIsT0FBTztlQWJQdkIsSUFBSU8sS0FBSzs7Ozs7Ozs7OztBQWtCeEIsRUFBRTtNQXBDV1EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFicy9UYWJzLnRzeD8zMGFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvdXRpbHMvY25cIjtcblxudHlwZSBUYWIgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNvbnRlbnQ/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGUgfCBhbnk7XG59O1xuXG5leHBvcnQgY29uc3QgVGFicyA9ICh7XG4gIHRhYnM6IHByb3BUYWJzLFxuICBjb250YWluZXJDbGFzc05hbWUsXG4gIGFjdGl2ZVRhYkNsYXNzTmFtZSxcbiAgdGFiQ2xhc3NOYW1lLFxuICBjb250ZW50Q2xhc3NOYW1lLFxufToge1xuICB0YWJzOiBUYWJbXTtcbiAgY29udGFpbmVyQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBhY3RpdmVUYWJDbGFzc05hbWU/OiBzdHJpbmc7XG4gIHRhYkNsYXNzTmFtZT86IHN0cmluZztcbiAgY29udGVudENsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlPFRhYj4ocHJvcFRhYnNbMF0pO1xuICBjb25zdCBbdGFicywgc2V0VGFic10gPSB1c2VTdGF0ZTxUYWJbXT4ocHJvcFRhYnMpO1xuXG4gIGNvbnN0IG1vdmVTZWxlY3RlZFRhYlRvVG9wID0gKGlkeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbmV3VGFicyA9IFsuLi5wcm9wVGFic107XG4gICAgY29uc3Qgc2VsZWN0ZWRUYWIgPSBuZXdUYWJzLnNwbGljZShpZHgsIDEpO1xuICAgIG5ld1RhYnMudW5zaGlmdChzZWxlY3RlZFRhYlswXSk7XG4gICAgc2V0VGFicyhuZXdUYWJzKTtcbiAgICBzZXRBY3RpdmUobmV3VGFic1swXSk7XG4gIH07XG5cbiAgY29uc3QgW2hvdmVyaW5nLCBzZXRIb3ZlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBbcGVyc3BlY3RpdmU6MTAwMHB4XSByZWxhdGl2ZSBvdmVyZmxvdy1hdXRvIHNtOm92ZXJmbG93LXZpc2libGUgbm8tdmlzaWJsZS1zY3JvbGxiYXIgbWF4LXctZnVsbCB3LWZ1bGxcIixcbiAgICAgICAgICBjb250YWluZXJDbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge3Byb3BUYWJzLm1hcCgodGFiLCBpZHgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e3RhYi50aXRsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbW92ZVNlbGVjdGVkVGFiVG9Ub3AoaWR4KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyaW5nKHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmluZyhmYWxzZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFwicmVsYXRpdmUgcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiLCB0YWJDbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGU6IFwicHJlc2VydmUtM2RcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FjdGl2ZS52YWx1ZSA9PT0gdGFiLnZhbHVlICYmIChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBsYXlvdXRJZD1cImNsaWNrZWRidXR0b25cIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgYm91bmNlOiAwLjMsIGR1cmF0aW9uOiAwLjYgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgXCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYXktMjAwIGRhcms6YmctemluYy04MDAgcm91bmRlZC1mdWxsIFwiLFxuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiQ2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIHt0YWIudGl0bGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8RmFkZUluRGl2XG4gICAgICAgIHRhYnM9e3RhYnN9XG4gICAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICBrZXk9e2FjdGl2ZS52YWx1ZX1cbiAgICAgICAgaG92ZXJpbmc9e2hvdmVyaW5nfVxuICAgICAgICBjbGFzc05hbWU9e2NuKFwibXQtMzJcIiwgY29udGVudENsYXNzTmFtZSl9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZhZGVJbkRpdiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgdGFicyxcbiAgaG92ZXJpbmcsXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAga2V5Pzogc3RyaW5nO1xuICB0YWJzOiBUYWJbXTtcbiAgYWN0aXZlOiBUYWI7XG4gIGhvdmVyaW5nPzogYm9vbGVhbjtcbn0pID0+IHtcbiAgY29uc3QgaXNBY3RpdmUgPSAodGFiOiBUYWIpID0+IHtcbiAgICByZXR1cm4gdGFiLnZhbHVlID09PSB0YWJzWzBdLnZhbHVlO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAge3RhYnMubWFwKCh0YWIsIGlkeCkgPT4gKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGtleT17dGFiLnZhbHVlfVxuICAgICAgICAgIGxheW91dElkPXt0YWIudmFsdWV9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHNjYWxlOiAxIC0gaWR4ICogMC4xLFxuICAgICAgICAgICAgdG9wOiBob3ZlcmluZyA/IGlkeCAqIC01MCA6IDAsXG4gICAgICAgICAgICB6SW5kZXg6IC1pZHgsXG4gICAgICAgICAgICBvcGFjaXR5OiBpZHggPCAzID8gMSAtIGlkeCAqIDAuMSA6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICB5OiBpc0FjdGl2ZSh0YWIpID8gWzAsIDQwLCAwXSA6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKFwidy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTBcIiwgY2xhc3NOYW1lKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0YWIuY29udGVudH1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwibW90aW9uIiwiY24iLCJUYWJzIiwidGFicyIsInByb3BUYWJzIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwiYWN0aXZlVGFiQ2xhc3NOYW1lIiwidGFiQ2xhc3NOYW1lIiwiY29udGVudENsYXNzTmFtZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNldFRhYnMiLCJtb3ZlU2VsZWN0ZWRUYWJUb1RvcCIsImlkeCIsIm5ld1RhYnMiLCJzZWxlY3RlZFRhYiIsInNwbGljZSIsInVuc2hpZnQiLCJob3ZlcmluZyIsInNldEhvdmVyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidGFiIiwiYnV0dG9uIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInN0eWxlIiwidHJhbnNmb3JtU3R5bGUiLCJ2YWx1ZSIsImxheW91dElkIiwidHJhbnNpdGlvbiIsInR5cGUiLCJib3VuY2UiLCJkdXJhdGlvbiIsInNwYW4iLCJ0aXRsZSIsIkZhZGVJbkRpdiIsImlzQWN0aXZlIiwic2NhbGUiLCJ0b3AiLCJ6SW5kZXgiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInkiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Tabs/Tabs.tsx\n"));

/***/ })

});