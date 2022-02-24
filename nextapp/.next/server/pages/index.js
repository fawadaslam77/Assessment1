"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass HomePage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    render() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Welcome to First Assessment!\"\n                }, void 0, false, {\n                    fileName: \"/Users/mobilelive/Documents/Assignments/nextapp/pages/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 18\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>this.apiCall()\n                    ,\n                    children: \" click\"\n                }, void 0, false, {\n                    fileName: \"/Users/mobilelive/Documents/Assignments/nextapp/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Response of the Api?\"\n                }, void 0, false, {\n                    fileName: \"/Users/mobilelive/Documents/Assignments/nextapp/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mobilelive/Documents/Assignments/nextapp/pages/index.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this));\n    }\n    constructor(...args){\n        super(...args);\n        this.apiCall = async ()=>{\n            const res = await fetch('http://localhost:3100/blogs');\n            const json = await res.json();\n            alert(json.data.response);\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO01BRW5CQyxRQUFRLFNBQVNELHdEQUFlO0lBVWhDRyxNQUFNLEdBQUcsQ0FBQztRQUdSLE1BQU0sNkVBQ0RDLENBQUc7OzRGQUFFQSxDQUFHOzhCQUFDLENBQTRCOzs7Ozs7NEZBQ3JDQyxDQUFNO29CQUFDQyxPQUFPLE1BQU8sSUFBSSxDQUFDQyxPQUFPOzs4QkFBSSxDQUFNOzs7Ozs7NEZBRTNDQyxDQUFFOzhCQUFDLENBQW9COzs7Ozs7Ozs7Ozs7SUFJOUIsQ0FBQzs7O1FBckJQLElBdUJHLENBcEJHRCxPQUFPLGFBQWUsQ0FBQztZQUN2QixLQUFLLENBQUNFLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE2QjtZQUNyRCxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0UsSUFBSTtZQUM1QkMsS0FBSyxDQUFDRCxJQUFJLENBQUNFLElBQUksQ0FBQ0MsUUFBUTtRQUN6QixDQUFDOzs7QUFrQkgsaUVBQWViLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YXBwLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuICAgXG4gXG4gICAgICBhcGlDYWxsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzEwMC9ibG9ncycpXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICBhbGVydChqc29uLmRhdGEucmVzcG9uc2UpXG4gICAgfVxuICAgICAgXG5cbiAgICAgIHJlbmRlciAoKXtcbiAgICAgIFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PjxkaXY+V2VsY29tZSB0byBGaXJzdCBBc3Nlc3NtZW50ITwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHRoaXMuYXBpQ2FsbCgpfT4gY2xpY2s8L2J1dHRvbj5cbiAgICBcbiAgICAgICAgICAgIDxoMT5SZXNwb25zZSBvZiB0aGUgQXBpPzwvaDE+XG4gICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgIH1cbiAgICBcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJIb21lUGFnZSIsIkNvbXBvbmVudCIsInJlbmRlciIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhcGlDYWxsIiwiaDEiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJhbGVydCIsImRhdGEiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();