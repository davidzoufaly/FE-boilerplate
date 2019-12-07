webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@apollo/react-components/lib/react-components.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@apollo/react-components/lib/react-components.esm.js ***!
  \***************************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, Mutation, Query, Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return Mutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





function Query(props) {
    var children = props.children, query = props.query, options = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(props, ["children", "query"]);
    var result = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(query, options);
    return children && result ? children(result) : null;
}
(function (Query) {
    Query.propTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
        fetchPolicy: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        notifyOnNetworkStatusChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        onCompleted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        onError: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        pollInterval: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
        query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        ssr: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        partialRefetch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        returnPartialData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
    };
})(Query || (Query = {}));

function Mutation(props) {
    var _a = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(props.mutation, props), runMutation = _a[0], result = _a[1];
    return props.children ? props.children(runMutation, result) : null;
}
(function (Mutation) {
    Mutation.propTypes = {
        mutation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        optimisticResponse: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
        refetchQueries: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object])),
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
        ]),
        awaitRefetchQueries: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
        onCompleted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        onError: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        fetchPolicy: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
    };
})(Mutation || (Mutation = {}));

function Subscription(props) {
    var result = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useSubscription"])(props.subscription, props);
    return props.children && result ? props.children(result) : null;
}
(function (Subscription) {
    Subscription.propTypes = {
        subscription: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        onSubscriptionData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        onSubscriptionComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        shouldResubscribe: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool]),
    };
})(Subscription || (Subscription = {}));


//# sourceMappingURL=react-components.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js ***!
  \*************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, graphql, withApollo, withMutation, withQuery, withSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMutation", function() { return withMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withQuery", function() { return withQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSubscription", function() { return withSubscription; });
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-components */ "./node_modules/@apollo/react-components/lib/react-components.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");








var defaultMapPropsToOptions = function () { return ({}); };
var defaultMapPropsToSkip = function () { return false; };
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function calculateVariablesFromProps(operation, props) {
    var variables = {};
    for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
        var _b = _a[_i], variable = _b.variable, type = _b.type;
        if (!variable.name || !variable.name.value)
            continue;
        var variableName = variable.name.value;
        var variableProp = props[variableName];
        if (typeof variableProp !== 'undefined') {
            variables[variableName] = variableProp;
            continue;
        }
        if (type.kind !== 'NonNullType') {
            variables[variableName] = undefined;
        }
    }
    return variables;
}
var GraphQLBase = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GraphQLBase, _super);
    function GraphQLBase(props) {
        var _this = _super.call(this, props) || this;
        _this.withRef = false;
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
        return _this;
    }
    GraphQLBase.prototype.getWrappedInstance = function () {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(this.withRef, "To access the wrapped instance, you need to specify " +
            "{ withRef: true } in the options");
        return this.wrappedInstance;
    };
    GraphQLBase.prototype.setWrappedInstance = function (ref) {
        this.wrappedInstance = ref;
    };
    return GraphQLBase;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component));

function withQuery(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function') {
        mapPropsToOptions = function () { return options; };
    }
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function') {
        mapPropsToSkip = function () { return skip; };
    }
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip
                    ? Object.create(null)
                    : Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, mapPropsToOptions(props));
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_components__WEBPACK_IMPORTED_MODULE_4__["Query"], Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, query: document }), function (_a) {
                    var _b, _c;
                    var _ = _a.client, data = _a.data, r = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(_a, ["client", "data"]);
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance
                        });
                    }
                    if (shouldSkip) {
                        return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, {})));
                    }
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, childProps)));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(GraphQL, WrappedComponent, {});
    };
}

function withMutation(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.alias, alias = _b === void 0 ? 'Apollo' : _b;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var props = this.props;
                var opts = mapPropsToOptions(props);
                if (operationOptions.withRef) {
                    this.withRef = true;
                    props = Object.assign({}, props, {
                        ref: this.setWrappedInstance
                    });
                }
                if (!opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_components__WEBPACK_IMPORTED_MODULE_4__["Mutation"], Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ ignoreResults: true }, opts, { mutation: document }), function (mutate, _a) {
                    var _b, _c;
                    var data = _a.data, r = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(_a, ["data"]);
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'mutate';
                    var resultName = operationOptions.name
                        ? name + "Result"
                        : 'result';
                    var childProps = (_b = {},
                        _b[name] = mutate,
                        _b[resultName] = result,
                        _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = mutate,
                            _c[resultName] = result,
                            _c.ownProps = props,
                            _c);
                        childProps = operationOptions.props(newResult);
                    }
                    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, childProps));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(GraphQL, WrappedComponent, {});
    };
}

function withSubscription(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c, shouldResubscribe = operationOptions.shouldResubscribe;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function')
        mapPropsToSkip = function () { return skip; };
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GraphQL, _super);
            function GraphQL(props) {
                var _this = _super.call(this, props) || this;
                _this.state = { resubscribe: false };
                return _this;
            }
            GraphQL.prototype.componentDidUpate = function (prevProps) {
                if (shouldResubscribe) {
                    this.setState({
                        resubscribe: shouldResubscribe(prevProps, this.props)
                    });
                }
            };
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip
                    ? Object.create(null)
                    : mapPropsToOptions(props);
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_components__WEBPACK_IMPORTED_MODULE_4__["Subscription"], Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, subscription: document, shouldResubscribe: this.state.resubscribe }), function (_a) {
                    var _b, _c;
                    var data = _a.data, r = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(_a, ["data"]);
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance
                        });
                    }
                    if (shouldSkip) {
                        return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, {})));
                    }
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, childProps)));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(GraphQL, WrappedComponent, {});
    };
}

function graphql(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    switch (Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document).type) {
        case _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation:
            return withMutation(document, operationOptions);
        case _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Subscription:
            return withSubscription(document, operationOptions);
        case _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Query:
        default:
            return withQuery(document, operationOptions);
    }
}

function getDisplayName$1(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function withApollo(WrappedComponent, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var withDisplayName = "withApollo(" + getDisplayName$1(WrappedComponent) + ")";
    var WithApollo = (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WithApollo, _super);
        function WithApollo(props) {
            var _this = _super.call(this, props) || this;
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            return _this;
        }
        WithApollo.prototype.getWrappedInstance = function () {
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(operationOptions.withRef, "To access the wrapped instance, you need to specify " +
                "{ withRef: true } in the options");
            return this.wrappedInstance;
        };
        WithApollo.prototype.setWrappedInstance = function (ref) {
            this.wrappedInstance = ref;
        };
        WithApollo.prototype.render = function () {
            var _this = this;
            return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"], null, function (client) {
                var props = Object.assign({}, _this.props, {
                    client: client,
                    ref: operationOptions.withRef
                        ? _this.setWrappedInstance
                        : undefined
                });
                return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props));
            }));
        };
        WithApollo.displayName = withDisplayName;
        WithApollo.WrappedComponent = WrappedComponent;
        return WithApollo;
    }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component));
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(WithApollo, WrappedComponent, {});
}


//# sourceMappingURL=react-hoc.esm.js.map


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
false,

/***/ "./node_modules/core-js/library/fn/promise.js":
false,

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_for-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_html.js":
false,

/***/ "./node_modules/core-js/library/modules/_invoke.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
false,

/***/ "./node_modules/core-js/library/modules/_iterators.js":
false,

/***/ "./node_modules/core-js/library/modules/_microtask.js":
false,

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
false,

/***/ "./node_modules/core-js/library/modules/_perform.js":
false,

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-species.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
false,

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-at.js":
false,

/***/ "./node_modules/core-js/library/modules/_task.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
false,

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
false,

/***/ "./node_modules/react-apollo/lib/react-apollo.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-apollo/lib/react-apollo.esm.js ***!
  \***********************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, Mutation, Query, Subscription, graphql, withApollo, withMutation, withQuery, withSubscription, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription, getDataFromTree, getMarkupFromTree, renderToStringWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-components */ "./node_modules/@apollo/react-components/lib/react-components.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return _apollo_react_components__WEBPACK_IMPORTED_MODULE_1__["Mutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _apollo_react_components__WEBPACK_IMPORTED_MODULE_1__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _apollo_react_components__WEBPACK_IMPORTED_MODULE_1__["Subscription"]; });

/* harmony import */ var _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hoc */ "./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["graphql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["withApollo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMutation", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["withMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withQuery", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["withQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSubscription", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["withSubscription"]; });

/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useSubscription"]; });

/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-ssr */ "./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_4__["getDataFromTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_4__["getMarkupFromTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_4__["renderToStringWithData"]; });






//# sourceMappingURL=react-apollo.esm.js.map


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.country, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
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
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
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
    }, errors.firstName) : null, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      type: "text",
      name: "lastName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
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
    }, "Cookies:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "cookies",
      type: "checkbox",
      value: "chocolate chip",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "cookies",
      type: "checkbox",
      value: "snickerdoodle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
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
    }, "Yogurt:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "yogurt",
      type: "radio",
      value: "peach",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "yogurt",
      type: "radio",
      value: "apple",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
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
    }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(values, null, 2)));
  }));
};

Index.getInitialProps = function (ctx) {
  var apolloClient = ctx.apolloClient;
  var COUNTRY_INFO = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

  __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_6__["Query"], {
    query: COUNTRY_INFO,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, function (_ref3) {
    var loading = _ref3.loading,
        error = _ref3.error,
        data = _ref3.data;
    if (loading) return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Loading...");
    if (error) return console.log(error);
    return data.country.name;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.11d5b1a1f27dc5e874d6.hot-update.js.map