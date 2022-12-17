"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./reducers/user.ts\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./reducers/post.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\nvar initialState = {\n    user: _user__WEBPACK_IMPORTED_MODULE_1__.initialStateUser,\n    post: _post__WEBPACK_IMPORTED_MODULE_2__.initialStatePost\n};\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({\n    index: function() {\n        var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n        switch(action.type){\n            case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:\n                console.log(\"HYDRATE => \", action);\n                return _objectSpread({}, state, action.payload);\n            default:\n                return state;\n        }\n    },\n    user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0w7QUFDWTtBQUNBO0FBT3BELElBQU1NLFlBQVksR0FBaUI7SUFDL0JKLElBQUksRUFBRUMsbURBQWdCO0lBQ3RCQyxJQUFJLEVBQUVDLG1EQUFnQjtDQUN6QjtBQUVELElBQU1FLFdBQVcsR0FBR04sc0RBQWUsQ0FBQztJQUNoQ08sS0FBSyxFQUFFLFdBQWtDO1lBQWpDQyxLQUFLLG9FQUFHSCxZQUFZLEVBQUVJLE1BQU07UUFDaEMsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1lBQ2YsS0FBS1gsdURBQU87Z0JBQ1JZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRUgsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sa0JBQUtELEtBQUssRUFBcUJDLE1BQU0sQ0FBQ0ksT0FBTyxDQUFFO1lBQzFEO2dCQUNJLE9BQU9MLEtBQUssQ0FBQztTQUNwQjtLQUNKO0lBQ0RQLElBQUksRUFBSkEsNkNBQUk7SUFDSkUsSUFBSSxFQUFKQSw2Q0FBSTtDQUNQLENBQUM7QUFFRiwrREFBZUcsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL2luZGV4LnRzPzUxYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyLCB7aW5pdGlhbFN0YXRlVXNlciwgVXNlcn0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCwge2luaXRpYWxTdGF0ZVBvc3QsIFBvc3R9IGZyb20gXCIuL3Bvc3RcIjtcclxuXHJcbmludGVyZmFjZSBJbml0aWFsU3RhdGUge1xyXG4gICAgdXNlcjogVXNlcixcclxuICAgIHBvc3Q6IFBvc3RcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOiBpbml0aWFsU3RhdGVVc2VyLFxyXG4gICAgcG9zdDogaW5pdGlhbFN0YXRlUG9zdCxcclxufTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFID0+IFwiLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgYXMgSW5pdGlhbFN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiXSwibmFtZXMiOlsiSFlEUkFURSIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJpbml0aWFsU3RhdGVVc2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZVBvc3QiLCJpbml0aWFsU3RhdGUiLCJyb290UmVkdWNlciIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.ts\n");

/***/ }),

/***/ "./reducers/post.ts":
/*!**************************!*\
  !*** ./reducers/post.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialStatePost\": function() { return /* binding */ initialStatePost; }\n/* harmony export */ });\nvar initialStatePost = {\n    mainPosts: []\n};\nvar reducer = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialStatePost, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNTyxJQUFNQSxnQkFBZ0IsR0FBUztJQUNsQ0MsU0FBUyxFQUFFLEVBQUU7Q0FDaEI7QUFFRCxJQUFNQyxPQUFPLEdBQUcsV0FBc0M7UUFBckNDLEtBQUssb0VBQUdILGdCQUFnQixFQUFFSSxNQUFNO0lBQzdDLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNmO1lBQ0ksT0FBT0YsS0FBSyxDQUFDO0tBQ3BCO0NBQ0o7QUFFRCwrREFBZUQsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QudHM/MjllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFBvc3Qge1xyXG4gICAgbWFpblBvc3RzOiBbXVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGVQb3N0OiBQb3N0ID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXSxcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZVBvc3QsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlUG9zdCIsIm1haW5Qb3N0cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.ts\n");

/***/ })

});