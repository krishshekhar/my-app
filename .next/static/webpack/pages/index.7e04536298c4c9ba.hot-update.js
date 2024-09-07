"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MapComponent.jsx":
/*!*****************************************!*\
  !*** ./src/components/MapComponent.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar MapComponent = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), distanceData = _useState[0], setDistanceData = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), roadsData = _useState1[0], setRoadsData = _useState1[1];\n    var apiKey = \"AIzaSyD2VncOECd86zdXY-JXr8WLy54Sr5TkzIA\"; // Use environment variable\n    var fetchApiData = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function(endpoint, params) {\n            var query, url, response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        query = new URLSearchParams(params).toString();\n                        url = \"/api/maps?\".concat(query);\n                        return [\n                            4,\n                            fetch(url)\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!response.ok) {\n                            throw new Error(\"Failed to fetch data\");\n                        }\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        return [\n                            2,\n                            _state.sent()\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(error);\n                        throw error;\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchApiData(endpoint, params) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n                var origins, destinations, response, data, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                3,\n                                ,\n                                4\n                            ]);\n                            origins = \"40.712776,-74.005974\"; // Example origin\n                            destinations = \"34.052235,-118.243683\"; // Example destination\n                            return [\n                                4,\n                                fetch(\"/api/maps?origins=\".concat(origins, \"&destinations=\").concat(destinations))\n                            ];\n                        case 1:\n                            response = _state.sent();\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            setDistanceData(data.distanceMatrix);\n                            setRoadsData(data.snapToRoads);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.error(\"Error fetching data:\", error);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 4:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    console.log(\"roads data\", roadsData);\n    console.log(\"distance Data\", distanceData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Map Data\"\n            }, void 0, false, {\n                fileName: \"/Users/Krish/my-app/src/components/MapComponent.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Distance Matrix\"\n            }, void 0, false, {\n                fileName: \"/Users/Krish/my-app/src/components/MapComponent.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            distanceData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(distanceData, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/Krish/my-app/src/components/MapComponent.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Snap to Roads\"\n            }, void 0, false, {\n                fileName: \"/Users/Krish/my-app/src/components/MapComponent.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            roadsData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(roadsData, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/Krish/my-app/src/components/MapComponent.jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Krish/my-app/src/components/MapComponent.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this);\n};\n_s(MapComponent, \"LQdVu6U0aI96I50/uBs1SPtl51g=\");\n_c = MapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapComponent);\nvar _c;\n$RefreshReg$(_c, \"MapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXBDb21wb25lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBRW5ELElBQU1HLGVBQWU7O0lBQ25CLElBQXdDRCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBMUNFLGVBQWlDRixjQUFuQkcsa0JBQW1CSDtJQUN4QyxJQUFrQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFdBQXBDSSxZQUEyQkosZUFBaEJLLGVBQWdCTDtJQUNsQyxJQUFNTSxTQUFTQyx5Q0FBMkMsRUFBRSwyQkFBMkI7SUFFdkYsSUFBTUc7bUJBQWUsNEVBQU9DLFVBQVVDO2dCQUU1QkMsT0FDQUMsS0FDQUMsVUFLQ0M7Ozs7Ozs7Ozs7d0JBUERILFFBQVEsSUFBSUksZ0JBQWdCTCxRQUFRTSxRQUFRO3dCQUM1Q0osTUFBTSxhQUFtQixPQUFORDt3QkFDUjs7NEJBQU1NLE1BQU1MOzs7d0JBQXZCQyxXQUFXO3dCQUNqQixJQUFJLENBQUNBLFNBQVNLLEVBQUUsRUFBRTs0QkFDaEIsTUFBTSxJQUFJQyxNQUFNO3dCQUNsQjt3QkFDTzs7NEJBQU1OLFNBQVNPLElBQUk7Ozt3QkFBMUI7OzRCQUFPOzs7d0JBQ0FOO3dCQUNQTyxRQUFRUCxLQUFLLENBQUNBO3dCQUNkLE1BQU1BOzs7Ozs7O1FBRVY7d0JBYk1OLGFBQXNCQyxVQUFVQzs7OztJQWV0Q2IsZ0RBQVNBLENBQUM7UUFDUixJQUFNeUI7dUJBQVk7b0JBRVJDLFNBQ0FDLGNBRUFYLFVBQ0FZLE1BSUNYOzs7Ozs7Ozs7OzRCQVJEUyxVQUFVLHdCQUF3QixpQkFBaUI7NEJBQ25EQyxlQUFlLHlCQUF5QixzQkFBc0I7NEJBRW5EOztnQ0FBTVAsTUFBTSxxQkFBNkNPLE9BQXhCRCxTQUFRLGtCQUE2QixPQUFiQzs7OzRCQUFwRVgsV0FBVzs0QkFDSjs7Z0NBQU1BLFNBQVNPLElBQUk7Ozs0QkFBMUJLLE9BQU87NEJBRWJ4QixnQkFBZ0J3QixLQUFLQyxjQUFjOzRCQUNuQ3ZCLGFBQWFzQixLQUFLRSxXQUFXOzs7Ozs7NEJBQ3RCYjs0QkFDUE8sUUFBUVAsS0FBSyxDQUFDLHdCQUF3QkE7Ozs7Ozs7Ozs7O1lBRTFDOzRCQWJNUTs7OztRQWdCTkE7SUFDRixHQUFHLEVBQUU7SUFFTEQsUUFBUU8sR0FBRyxDQUFDLGNBQWMxQjtJQUMxQm1CLFFBQVFPLEdBQUcsQ0FBQyxpQkFBaUI1QjtJQUU3QixxQkFDRSw4REFBQzZCOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIL0IsOEJBQ0MsOERBQUNnQzswQkFBS0MsS0FBS0MsU0FBUyxDQUFDbEMsY0FBYyxNQUFNOzs7Ozs7MEJBRzNDLDhEQUFDK0I7MEJBQUc7Ozs7OztZQUNIN0IsMkJBQ0MsOERBQUM4QjswQkFBS0MsS0FBS0MsU0FBUyxDQUFDaEMsV0FBVyxNQUFNOzs7Ozs7Ozs7Ozs7QUFJOUM7R0F6RE1IO0tBQUFBO0FBMkROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01hcENvbXBvbmVudC5qc3g/YTBhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTWFwQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbZGlzdGFuY2VEYXRhLCBzZXREaXN0YW5jZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyb2Fkc0RhdGEsIHNldFJvYWRzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQVBJX0tFWTsgLy8gVXNlIGVudmlyb25tZW50IHZhcmlhYmxlXG5cbiAgY29uc3QgZmV0Y2hBcGlEYXRhID0gYXN5bmMgKGVuZHBvaW50LCBwYXJhbXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IHVybCA9IGAvYXBpL21hcHM/JHtxdWVyeX1gO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbnMgPSAnNDAuNzEyNzc2LC03NC4wMDU5NzQnOyAvLyBFeGFtcGxlIG9yaWdpblxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbnMgPSAnMzQuMDUyMjM1LC0xMTguMjQzNjgzJzsgLy8gRXhhbXBsZSBkZXN0aW5hdGlvblxuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9tYXBzP29yaWdpbnM9JHtvcmlnaW5zfSZkZXN0aW5hdGlvbnM9JHtkZXN0aW5hdGlvbnN9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIFxuICAgICAgICBzZXREaXN0YW5jZURhdGEoZGF0YS5kaXN0YW5jZU1hdHJpeCk7XG4gICAgICAgIHNldFJvYWRzRGF0YShkYXRhLnNuYXBUb1JvYWRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKFwicm9hZHMgZGF0YVwiLCByb2Fkc0RhdGEpO1xuICBjb25zb2xlLmxvZyhcImRpc3RhbmNlIERhdGFcIiwgZGlzdGFuY2VEYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TWFwIERhdGE8L2gxPlxuICAgICAgPGgyPkRpc3RhbmNlIE1hdHJpeDwvaDI+XG4gICAgICB7ZGlzdGFuY2VEYXRhICYmIChcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZGlzdGFuY2VEYXRhLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICl9XG5cbiAgICAgIDxoMj5TbmFwIHRvIFJvYWRzPC9oMj5cbiAgICAgIHtyb2Fkc0RhdGEgJiYgKFxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShyb2Fkc0RhdGEsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFwQ29tcG9uZW50IiwiZGlzdGFuY2VEYXRhIiwic2V0RGlzdGFuY2VEYXRhIiwicm9hZHNEYXRhIiwic2V0Um9hZHNEYXRhIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0FQSV9LRVkiLCJmZXRjaEFwaURhdGEiLCJlbmRwb2ludCIsInBhcmFtcyIsInF1ZXJ5IiwidXJsIiwicmVzcG9uc2UiLCJlcnJvciIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsImNvbnNvbGUiLCJmZXRjaERhdGEiLCJvcmlnaW5zIiwiZGVzdGluYXRpb25zIiwiZGF0YSIsImRpc3RhbmNlTWF0cml4Iiwic25hcFRvUm9hZHMiLCJsb2ciLCJkaXYiLCJoMSIsImgyIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MapComponent.jsx\n"));

/***/ })

});