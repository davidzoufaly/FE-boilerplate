webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");


var _jsxFileName = "/Users/davidzoufaly/code/online/on-fe/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    {\n      country(code: \"CZ\") {\n        name\n        native\n        emoji\n        currency\n        languages {\n          code\n          name\n        }\n      }\n    }\n  "]);

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

yup__WEBPACK_IMPORTED_MODULE_4__["setLocale"]({
  string: {
    max: "Je to dlouhý"
  }
});
var schema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  firstName: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required().max(10)
});

var Index = function Index(props) {
  console.log(props.country);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
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
      lineNumber: 33
    },
    __self: this
  }, function (_ref2) {
    var errors = _ref2.errors,
        touched = _ref2.touched,
        values = _ref2.values,
        setSubmitting = _ref2.setSubmitting;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      type: "text",
      name: "firstName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), errors.firstName && touched.firstName ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, errors.firstName) : null, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      type: "text",
      name: "lastName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "isTall",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Cookies:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "cookies",
      type: "checkbox",
      value: "chocolate chip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "cookies",
      type: "checkbox",
      value: "snickerdoodle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "cookies",
      type: "checkbox",
      value: "sugar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Yogurt:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "yogurt",
      type: "radio",
      value: "peach",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "yogurt",
      type: "radio",
      value: "apple",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "yogurt",
      type: "radio",
      value: "strawberry",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      disabled: !!!setSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Submit"), __jsx("pre", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(values, null, 2)));
  }));
};

Index.getInitialProps = function () {
  var COUNTRY_INFO = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

  var country = __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_6__["Query"], {
    query: COUNTRY_INFO,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, function (_ref3) {
    var loading = _ref3.loading,
        error = _ref3.error,
        data = _ref3.data;
    return data.country.name;
  });

  console.log(country);
  return {
    country: country
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.bc607de61d354537472e.hot-update.js.map