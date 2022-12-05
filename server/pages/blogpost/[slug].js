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
exports.id = "pages/blogpost/[slug]";
exports.ids = ["pages/blogpost/[slug]"];
exports.modules = {

/***/ "./styles/Blogpost.module.css":
/*!************************************!*\
  !*** ./styles/Blogpost.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Blogpost_main__HNvPb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQmxvZ3Bvc3QubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZ2gvLi9zdHlsZXMvQmxvZ3Bvc3QubW9kdWxlLmNzcz80Y2RiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJCbG9ncG9zdF9tYWluX19ITnZQYlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Blogpost.module.css\n");

/***/ }),

/***/ "./pages/blogpost/[slug].js":
/*!**********************************!*\
  !*** ./pages/blogpost/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Blogpost_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Blogpost.module.css */ \"./styles/Blogpost.module.css\");\n/* harmony import */ var _styles_Blogpost_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Blogpost_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Slug = (props)=>{\n    function createMarkup(c) {\n        return {\n            __html: c\n        };\n    }\n    const { 0: blog , 1: setblog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.myBlog);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Blogpost_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: blog && blog.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sayan\\\\Desktop\\\\temp\\\\usghMongoDB\\\\pages\\\\blogpost\\\\[slug].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: blog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: createMarkup(blog.content)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sayan\\\\Desktop\\\\temp\\\\usghMongoDB\\\\pages\\\\blogpost\\\\[slug].js\",\n                    lineNumber: 15,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sayan\\\\Desktop\\\\temp\\\\usghMongoDB\\\\pages\\\\blogpost\\\\[slug].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sayan\\\\Desktop\\\\temp\\\\usghMongoDB\\\\pages\\\\blogpost\\\\[slug].js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getServerSideProps(context) {\n    const { slug  } = context.query;\n    let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);\n    let myBlog = await data.json();\n    return {\n        props: {\n            myBlog\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtEO0FBQ1g7QUFDYztBQUVyRCxNQUFNSyxJQUFJLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQ3RCLFNBQVNDLFlBQVksQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3ZCLE9BQU87WUFBRUMsTUFBTSxFQUFFRCxDQUFDO1NBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsTUFBTSxLQUFDRSxJQUFJLE1BQUVDLE9BQU8sTUFBSVQsK0NBQVEsQ0FBQ0ksS0FBSyxDQUFDTSxNQUFNLENBQUM7SUFFOUMscUJBQ0UsOERBQUNDLE1BQUk7UUFBQ0MsU0FBUyxFQUFFVix5RUFBVzs7MEJBQzFCLDhEQUFDVyxJQUFFOzBCQUFFTCxJQUFJLElBQUlBLElBQUksQ0FBQ00sS0FBSzs7Ozs7eUJBQU07MEJBRTdCLDhEQUFDQyxLQUFHOzBCQUFFUCxJQUFJLGtCQUFJLDhEQUFDTyxLQUFHO29CQUFDQyx1QkFBdUIsRUFBRVgsWUFBWSxDQUFDRyxJQUFJLENBQUNTLE9BQU8sQ0FBQzs7Ozs7NkJBQVE7Ozs7O3lCQUFPOzs7Ozs7aUJBQ2hGLENBQ1I7QUFDSCxDQUFDO0FBQ00sZUFBZUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUVoRCxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHRCxPQUFPLENBQUNFLEtBQUs7SUFFOUIsSUFBSUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLHdDQUF3QyxFQUFFSCxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQUlWLE1BQU0sR0FBRyxNQUFNWSxJQUFJLENBQUNFLElBQUksRUFBRTtJQUM5QixPQUFPO1FBQ0xwQixLQUFLLEVBQUU7WUFBRU0sTUFBTTtTQUFFO0tBQ2xCO0FBQ0gsQ0FBQztBQUVELGlFQUFlUCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNnaC8uL3BhZ2VzL2Jsb2dwb3N0L1tzbHVnXS5qcz9iODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9CbG9ncG9zdC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgU2x1ZyA9IChwcm9wcykgPT4ge1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZU1hcmt1cChjKSB7XHJcbiAgICByZXR1cm4geyBfX2h0bWw6IGMgfTtcclxuICB9XHJcbiAgY29uc3QgW2Jsb2csIHNldGJsb2ddID0gdXNlU3RhdGUocHJvcHMubXlCbG9nKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8aDE+e2Jsb2cgJiYgYmxvZy50aXRsZX08L2gxPlxyXG5cclxuICAgICAgPGRpdj57YmxvZyAmJiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAoYmxvZy5jb250ZW50KX0+PC9kaXY+fTwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgY29uc3QgeyBzbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldGJsb2dzP3NsdWc9JHtzbHVnfWApXHJcbiAgbGV0IG15QmxvZyA9IGF3YWl0IGRhdGEuanNvbigpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IG15QmxvZyB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsdWciXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN0eWxlcyIsIlNsdWciLCJwcm9wcyIsImNyZWF0ZU1hcmt1cCIsImMiLCJfX2h0bWwiLCJibG9nIiwic2V0YmxvZyIsIm15QmxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwiZGl2IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJjb250ZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNsdWciLCJxdWVyeSIsImRhdGEiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogpost/[slug].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blogpost/[slug].js"));
module.exports = __webpack_exports__;

})();