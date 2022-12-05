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
exports.id = "pages/api/getblogs";
exports.ids = ["pages/api/getblogs"];
exports.modules = {

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "(api)/./pages/api/getblogs.js":
/*!*******************************!*\
  !*** ./pages/api/getblogs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:fs */ \"node:fs\");\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    node_fs__WEBPACK_IMPORTED_MODULE_0__.readFile(`blogdata/${req.query.slug}.json`, (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"No Such Blog Found\"\n            });\n        }\n        res.status(200).json(JSON.parse(data));\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0YmxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQy9DO0FBRWYsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4Q0gsNkNBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRUUsR0FBRyxDQUFDRyxLQUFLLENBQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxHQUFHLEVBQUVDLElBQUksR0FBSztRQUM1RCxJQUFJRCxHQUFHLEVBQUU7WUFDUEosR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLG9CQUFvQjthQUFFLENBQUM7UUFDdkQsQ0FBQztRQUNEUixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZ2gvLi9wYWdlcy9hcGkvZ2V0YmxvZ3MuanM/NzIyNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0ICogYXMgZnMgZnJvbSAnbm9kZTpmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgZnMucmVhZEZpbGUoYGJsb2dkYXRhLyR7cmVxLnF1ZXJ5LnNsdWd9Lmpzb25gLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJObyBTdWNoIEJsb2cgRm91bmRcIiB9KVxuICAgIH1cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGRhdGEpKVxuICB9KVxufVxuIl0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlYWRGaWxlIiwicXVlcnkiLCJzbHVnIiwiZXJyIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getblogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getblogs.js"));
module.exports = __webpack_exports__;

})();