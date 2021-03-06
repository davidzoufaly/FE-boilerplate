webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./util/apollo-client.tsx":
/*!********************************!*\
  !*** ./util/apollo-client.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);



var GRAPHQL_URL = 'https://countries.trevorblades.com/graphql';
/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref) {
  var ctx = _ref.ctx,
      headers = _ref.headers,
      initialState = _ref.initialState;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["default"]({
    uri: GRAPHQL_URL,
    fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default.a,
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
}));

/***/ })

})
//# sourceMappingURL=_app.js.7937526132891bcb5831.hot-update.js.map