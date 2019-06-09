webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/DataTable/ColumnHeader/ColumnHeader.js":
/*!***********************************************************!*\
  !*** ./components/DataTable/ColumnHeader/ColumnHeader.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColumnHeader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColumnHeader.scss */ "./components/DataTable/ColumnHeader/ColumnHeader.scss");
/* harmony import */ var _ColumnHeader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ColumnHeader_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");




function ColumnHeader(_ref) {
  var title = _ref.title,
      sortable = _ref.sortable,
      sortableState = _ref.sortableState;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(sortableState),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      sort = _React$useState2[0],
      setSort = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "data-table__col-header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "col-header__title"
  }, title, "\xA0\xA0"), sortable ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], {
    className:  true ? "active" : undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronDown"], {
    className:  true ? "" : undefined
  })) : null));
}

/***/ })

})
//# sourceMappingURL=index.js.424200df6566ed064145.hot-update.js.map