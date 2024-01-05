"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Login() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            if (response.ok) {\n                setMessage(\"로그인이 완료되었습니다.\");\n            } else {\n                setMessage(\"로그인에 실패했습니다.\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n            setMessage(\"로그인 중 오류가 발생했습니다.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center h-90vh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-10\",\n                children: \"로그인페이지\"\n            }, void 0, false, {\n                fileName: \"D:\\\\KDT-IaaS-1team-ERP\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"h-32 flex flex-col items-end justify-around\",\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-black\",\n                        type: \"text\",\n                        value: username,\n                        placeholder: \"아이디\",\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\KDT-IaaS-1team-ERP\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-black\",\n                        type: \"text\",\n                        value: password,\n                        placeholder: \"비밀번호\",\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\KDT-IaaS-1team-ERP\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-black\",\n                        type: \"submit\",\n                        children: \"로그인\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\KDT-IaaS-1team-ERP\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\KDT-IaaS-1team-ERP\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"D:\\\\KDT-IaaS-1team-ERP\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"mt-10\",\n                href: \"/\",\n                children: \"메인페이지로\"\n            }, void 0, false, {\n                fileName: \"D:\\\\KDT-IaaS-1team-ERP\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\KDT-IaaS-1team-ERP\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"EfoIcgWB4w2qhzB0JK+4ONQBx/k=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVzQztBQUNWO0FBR2IsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1TLGNBQWMsT0FBT0M7UUFDekJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxVQUFVO2dCQUNyQ0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVmO29CQUFVRTtnQkFBUztZQUM1QztZQUNBLElBQUlPLFNBQVNPLEVBQUUsRUFBRTtnQkFDZlgsV0FBVztZQUNiLE9BQU87Z0JBQ0xBLFdBQVc7WUFDYjtRQUNGLEVBQUUsT0FBT1ksT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsVUFBVUE7WUFDeEJaLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNjO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBUTs7Ozs7OzBCQUN0Qiw4REFBQ0U7Z0JBQU1GLFdBQVk7Z0JBQThDRyxVQUFVakI7O2tDQUMzRSw4REFBQ2tCO3dCQUFNSixXQUFVO3dCQUFzQkssTUFBSzt3QkFBT0MsT0FBTzFCO3dCQUFVMkIsYUFBWTt3QkFBTUMsVUFBVSxDQUFDckIsSUFBSU4sWUFBWU0sRUFBRXNCLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUMvSCw4REFBQ0Y7d0JBQU1KLFdBQVU7d0JBQXNCSyxNQUFLO3dCQUFPQyxPQUFPeEI7d0JBQVV5QixhQUFZO3dCQUFRQyxVQUFVLENBQUNyQixJQUFNSixZQUFZSSxFQUFFc0IsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBQ25JLDhEQUFDSTt3QkFBT1YsV0FBVTt3QkFBc0JLLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OztZQUVyRHJCLHlCQUFXLDhEQUFDMkI7MEJBQUczQjs7Ozs7OzBCQUNoQiw4REFBQ04sa0RBQUlBO2dCQUFDc0IsV0FBVTtnQkFBUVksTUFBSzswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3ZDO0dBdkN3QmpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9wYWdlLnRzeD80OTBhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKXtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9sb2dpblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIuuhnOq3uOyduOydtCDsmYTro4zrkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukLlwiKTsgXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRNZXNzYWdlKFwi66Gc6re47J24IOykkSDsmKTrpZjqsIAg67Cc7IOd7ZaI7Iq164uI64ukLlwiKTsgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtOTB2aFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItMTBcIj7roZzqt7jsnbjtjpjsnbTsp4A8L2gxPlxyXG4gICAgICA8Zm9ybSAgY2xhc3NOYW1lID0gXCJoLTMyIGZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGp1c3RpZnktYXJvdW5kXCIgb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2tcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VybmFtZX0gcGxhY2Vob2xkZXI9XCLslYTsnbTrlJRcIiBvbkNoYW5nZT17KGUpPT5zZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2tcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtwYXNzd29yZH0gcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIiAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFja1wiIHR5cGU9XCJzdWJtaXRcIj7roZzqt7jsnbg8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7bWVzc2FnZSAmJiA8cD57bWVzc2FnZX08L3A+fVxyXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJtdC0xMFwiIGhyZWY9XCIvXCI+66mU7J247Y6Y7J207KeA66GcPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiTG9naW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.tsx\n"));

/***/ })

});