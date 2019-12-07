webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");




var _jsxFileName = "/Users/davidzoufaly/code/online/on-fe/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    {\n      country(code: \"CZ\") {\n        name\n        native\n        emoji\n        currency\n        languages {\n          code\n          name\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // const MyRadio ({label, ...props}) => {
//     const [field, meta] = useField(props)
//     return (
//         <FormControlLabel control={<Radio />} label={label} />
//     )
// }
// string.min(limit: number | Ref, message?: string | function): Schema

yup__WEBPACK_IMPORTED_MODULE_6__["setLocale"]({
  string: {
    max: "Je to dlouhý"
  }
});
var schema = yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
  firstName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().required().max(10)
});

var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, props.country, __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      firstName: "",
      lastName: "",
      isTall: false,
      cookies: [],
      yogurt: ""
    },
    onSubmit: function onSubmit(data, _ref) {
      var setSubmitting = _ref.setSubmitting,
          resetForm = _ref.resetForm;
      setSubmitting(true);
      console.log("submit: ", data);
      setSubmitting(false);
      resetForm();
    },
    validationSchema: schema,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, function (_ref2) {
    var errors = _ref2.errors,
        touched = _ref2.touched,
        values = _ref2.values,
        setSubmitting = _ref2.setSubmitting;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "text",
      name: "firstName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), errors.firstName && touched.firstName ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, errors.firstName) : null, __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      type: "text",
      name: "lastName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "isTall",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Cookies:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "cookies",
      type: "checkbox",
      value: "chocolate chip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "cookies",
      type: "checkbox",
      value: "snickerdoodle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "cookies",
      type: "checkbox",
      value: "sugar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Yogurt:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "yogurt",
      type: "radio",
      value: "peach",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "yogurt",
      type: "radio",
      value: "apple",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      name: "yogurt",
      type: "radio",
      value: "strawberry",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      disabled: !!!setSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Submit"), __jsx("pre", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(values, null, 2)));
  }));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var apolloClient, COUNTRY_INFO, _useQuery, loading, error, data, country;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apolloClient = ctx.apolloClient;
            COUNTRY_INFO = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject());
            _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(COUNTRY_INFO), loading = _useQuery.loading, error = _useQuery.error, data = _useQuery.data;

            if (!loading) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", __jsx("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: this
            }, "Loading..."));

          case 5:
            if (!error) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", console.log(error));

          case 7:
            _context.next = 9;
            return data.country.name;

          case 9:
            country = _context.sent;
            return _context.abrupt("return", {
              country: country
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.43a7cf8d3ddc711caefc.hot-update.js.map