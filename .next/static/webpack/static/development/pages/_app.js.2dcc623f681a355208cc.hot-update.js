webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _E404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../E404 */ "./components/E404.js");
/* harmony import */ var _Grid_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Grid/Grid */ "./components/Grid/Grid.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_5__);






function Header(_ref) {
  var logo = _ref.logo,
      account = _ref.account,
      user = _ref.user,
      navigation = _ref.navigation,
      page = _ref.page;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    horizontal: 'space-between',
    vertical: 'center',
    wrap: 'nowrap'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    vertical: 'center'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar__logo"
  }, logo.url ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "topbar__logo--img",
    src: logo.url,
    alt: logo.alt
  }) : logo.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "topbar__profile",
    horizontal: 'flex-end',
    vertical: 'center'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile__account"
  }, account.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile__settings"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoMdSettings"], {
    size: "1.5em",
    style: {
      verticalAlign: 'middle'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile__user"
  }, user.name))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar__nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    horizontal: "space-between",
    wrap: "nowrap",
    vertical: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, navigation.map(function (navItem) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: navItem.id,
      className: "nav__item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav__item--title"
    }, navItem.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaCaretDown"], {
      style: {
        verticalAlign: 'middle',
        padding: '2px 4px 4px'
      }
    })), navItem.items.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "nav__item--list"
    }, navItem.items.map(function (navItemItem) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: navItemItem.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: navItemItem.url
      }, navItemItem.name));
    })) : null);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar__favourites"
  }, "Favourites")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, page.name))));
}
/* harmony default export */ __webpack_exports__["default"] = (_E404__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ })

})
//# sourceMappingURL=_app.js.2dcc623f681a355208cc.hot-update.js.map