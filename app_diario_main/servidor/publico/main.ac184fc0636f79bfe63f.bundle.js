(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/0LD":
/*!**************************!*\
  !*** ./src/view/App.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "pNMO");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "TeQF");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "QWBl");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "5DmW");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "27RR");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "tkto");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise */ "5s+n");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "FZtP");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _model_pesquisa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../model/pesquisa */ "lq03");
/* harmony import */ var _MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MostraEntrada.jsx */ "gpr2");
/* harmony import */ var _Data_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Data.jsx */ "HKFe");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-google-login */ "3HZZ");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_15__);












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var estadoInicial = {
  clientId: undefined,
  data: undefined,
  entradaDiario: undefined,
  diario: undefined,
  viewAtual: 'login',
  cssBotao: 'button is-dark',
  pesquisando: false,
  logado: false,
  userToken: undefined
};

function useModelo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(estadoInicial),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_useState, 2),
      estado = _useState2[0],
      setEstado = _useState2[1];

  function onDeslogado() {
    setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
      clientId: estado.clientId
    }));
  }

  function onLogado(res) {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      entradaDiario: undefined,
      pesquisando: false,
      logado: true,
      userToken: res.tokenId
    }));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    function deuErro(erro) {
      setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
        nomeBotao: erro.message,
        cssBotao: 'button is-black',
        pesquisando: false
      }));
    }

    window.fetch('/chave').then(function (resposta) {
      return resposta.json();
    }).then(function (googleKey) {
      return setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
        clientId: googleKey
      }));
    }).catch(function (erro) {
      return deuErro(erro);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    function onDiarioCarregado(diario) {
      setEstado(_objectSpread(_objectSpread({}, estado), {}, {
        diario: diario
      }));
    }

    if (estado.logado) {
      Object(_model_pesquisa__WEBPACK_IMPORTED_MODULE_12__["carregaDados"])(estado.userToken).then(function (diario) {
        return onDiarioCarregado(diario);
      });
    }
  }, [estado.logado]);

  function onDataInvalida() {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      pesquisando: false
    }));
  }

  function onDataValida(novaData) {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      data: novaData,
      pesquisando: false,
      logado: estado.logado
    }));
  }

  function onPesquisando() {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      pesquisando: true,
      cssBotao: 'button is-dark is-loading'
    }));
  }

  function alteraEntrada(ev) {
    var novaEntrada = ev.target.value;
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      entradaTexto: novaEntrada
    }));
  }

  function mostraAreaTexto() {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      cssEntradaTexto: 'box',
      viewAtual: 'modo edição'
    }));
  }

  function onAdicionaEntrada() {
    Object(_model_pesquisa__WEBPACK_IMPORTED_MODULE_12__["adiciona"])(estado.userToken, estado.data, estado.entradaTexto, estado.diario);
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      viewAtual: 'cadastro sucesso'
    }));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    function onEntradaEncontrada(entrada) {
      setEstado(function (estado) {
        return _objectSpread(_objectSpread({}, estado), {}, {
          entradaDiario: entrada,
          cssBotao: 'button is-dark',
          pesquisando: false,
          viewAtual: 'entrada'
        });
      });
    }

    function onSemEntrada() {
      setEstado(function (estado) {
        return _objectSpread(_objectSpread({}, estado), {}, {
          entradaDiario: undefined,
          cssBotao: 'button is-dark',
          pesquisando: false,
          viewAtual: 'sem entrada'
        });
      });
    }

    if (estado.pesquisando) {
      var entrada = Object(_model_pesquisa__WEBPACK_IMPORTED_MODULE_12__["pesquisa"])(estado.diario, estado.data); // console.log(estado.tokenId)

      if (entrada) onEntradaEncontrada(entrada);else onSemEntrada();
    }
  }, [estado.pesquisando]);
  return [estado, {
    onDataInvalida: onDataInvalida,
    onDataValida: onDataValida,
    onPesquisando: onPesquisando,
    onLogado: onLogado,
    onDeslogado: onDeslogado,
    onAdicionaEntrada: onAdicionaEntrada,
    mostraAreaTexto: mostraAreaTexto,
    alteraEntrada: alteraEntrada
  }];
}

function App() {
  var _useModelo = useModelo(),
      _useModelo2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_useModelo, 2),
      estado = _useModelo2[0],
      _useModelo2$ = _useModelo2[1],
      onDataValida = _useModelo2$.onDataValida,
      onDataInvalida = _useModelo2$.onDataInvalida,
      onPesquisando = _useModelo2$.onPesquisando,
      onLogado = _useModelo2$.onLogado,
      onDeslogado = _useModelo2$.onDeslogado,
      onAdicionaEntrada = _useModelo2$.onAdicionaEntrada,
      mostraAreaTexto = _useModelo2$.mostraAreaTexto,
      alteraEntrada = _useModelo2$.alteraEntrada;

  var oEntrada;
  var area;
  var logoutBtn;

  if (estado.viewAtual === 'entrada') {
    console.log('modo entrada');
    oEntrada = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_13__["MostraEntrada"], {
      entrada: estado.entradaDiario
    });
  } else if (estado.viewAtual === 'sem entrada') {
    console.log('modo sem entrada');
    oEntrada = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_13__["MostraSemEntrada"], {
      mostraAreaTexto: mostraAreaTexto
    });
  } else if (estado.viewAtual === 'modo edição') {
    oEntrada = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_13__["MostraEdicao"], {
      onAdicionaEntrada: onAdicionaEntrada,
      alteraEntrada: alteraEntrada,
      data: estado.data
    });
  } else if (estado.viewAtual === 'cadastro sucesso') {
    oEntrada = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_13__["MostraSucesso"], null);
  }

  if (estado.logado) {
    logoutBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLogout"], {
      buttonText: "Logout",
      onLogoutSuccess: onDeslogado
    });
    area = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, logoutBtn, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Data_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onDataValida: onDataValida,
      onDataInvalida: onDataInvalida
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
      className: estado.cssBotao,
      onClick: onPesquisando
    }, "pesquisar"), oEntrada);
  } else if (estado.clientId) {
    area = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_15___default.a, {
      clientId: estado.clientId,
      buttonText: "Login",
      onSuccess: onLogado,
      onFailure: function onFailure(res) {
        return console.log(res);
      },
      cookiePolicy: 'single_host_origin'
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "message-header"
  }, "UFSC - CTC - INE - INE5646 :: App Di\xE1rio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "box"
  }, area)));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "HKFe":
/*!***************************!*\
  !*** ./src/view/Data.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "rB9j");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "EnZy");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






function useModelo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  function validaData(data) {
    var campos = data.split('-');

    if (campos.length !== 3) {
      return false;
    }

    if (campos[0].length !== 4 || campos[1].length !== 2 || campos[2].length !== 2) {
      return false;
    }

    if (isNaN(parseInt(campos[0], 10)) || parseInt(campos[0], 10) < 1970 || isNaN(parseInt(campos[1], 10)) || isNaN(parseInt(campos[2], 10))) {
      return false;
    }

    return !isNaN(Date.parse(data));
  }

  return [data, {
    setData: setData,
    validaData: validaData
  }];
}

var Data = function Data(props) {
  var _useModelo = useModelo(),
      _useModelo2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useModelo, 2),
      data = _useModelo2[0],
      _useModelo2$ = _useModelo2[1],
      setData = _useModelo2$.setData,
      validaData = _useModelo2$.validaData;

  function alteraData(ev) {
    var novaData = ev.target.value;
    setData(novaData);

    if (validaData(novaData)) {
      props.onDataValida(novaData);
    } else {
      props.onDataInvalida();
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    className: "input",
    type: "text",
    title: "Exemplo: 2019-03-27",
    placeholder: "AAAA-MM-DD",
    value: data,
    onChange: alteraData
  });
};

Data.propTypes = {
  onDataValida: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onDataInvalida: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Data);

/***/ }),

/***/ "KMgT":
/*!******************************!*\
  !*** ./src/model/modelos.js ***!
  \******************************/
/*! exports provided: EntradaDiario, Diario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradaDiario", function() { return EntradaDiario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diario", function() { return Diario; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);



var EntradaDiario = function EntradaDiario(data, conteudo) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EntradaDiario);

  this.conteudo = conteudo;
  this.data = data;
};

var Diario = /*#__PURE__*/function () {
  function Diario() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Diario);

    this.entradas = {};
    this.num_entradas = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(Diario, [{
    key: "addEntrada",
    value: function addEntrada(entrada) {
      this.entradas[entrada.data] = entrada;
      this.num_entradas++;
    }
  }, {
    key: "getEntrada",
    value: function getEntrada(data) {
      if (data in this.entradas) return this.entradas[data];
    }
  }]);

  return Diario;
}();



/***/ }),

/***/ "gpr2":
/*!************************************!*\
  !*** ./src/view/MostraEntrada.jsx ***!
  \************************************/
/*! exports provided: MostraEntrada, MostraSemEntrada, MostraSucesso, MostraEdicao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraEntrada", function() { return MostraEntrada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraSemEntrada", function() { return MostraSemEntrada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraSucesso", function() { return MostraSucesso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraEdicao", function() { return MostraEdicao; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_modelos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/modelos */ "KMgT");




var MostraEntrada = function MostraEntrada(props) {
  var entrada = props.entrada;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card-header-title has-background-primary"
  }, "Di\xE1rio do Dia ", entrada.data)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, entrada.conteudo));
};

var MostraSemEntrada = function MostraSemEntrada(props) {
  var mostraAreaTexto = props.mostraAreaTexto;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card-header-title has-background-warning"
  }, "Sem entrada nesta data.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button is-dark",
    onClick: mostraAreaTexto
  }, "adicionar entrada"));
};

var MostraSucesso = function MostraSucesso() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card-header-title has-background-success"
  }, "Dados registrados com sucesso.")));
};

var MostraEdicao = function MostraEdicao(props) {
  var onAdicionaEntrada = props.onAdicionaEntrada;
  var alteraEntrada = props.alteraEntrada;
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input",
    type: "text",
    title: 'Nova entrada para' + data,
    placeholder: "Fale sobre seu dia",
    onChange: alteraEntrada
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button is-dark",
    onClick: onAdicionaEntrada
  }, "submeter"));
};

MostraEntrada.propTypes = {
  entrada: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_model_modelos__WEBPACK_IMPORTED_MODULE_2__["EntradaDiario"]).isRequired
};
MostraSemEntrada.propTypes = {
  mostraAreaTexto: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
MostraEdicao.propTypes = {
  onAdicionaEntrada: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  alteraEntrada: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};


/***/ }),

/***/ "lq03":
/*!*******************************!*\
  !*** ./src/model/pesquisa.js ***!
  \*******************************/
/*! exports provided: pesquisa, carregaDados, adiciona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pesquisa", function() { return pesquisa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carregaDados", function() { return carregaDados; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adiciona", function() { return adiciona; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "pNMO");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "4Brf");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "0oug");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "pjDv");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "4mDm");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "+2oP");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise */ "5s+n");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "JfAA");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "PKPk");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "3bBZ");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modelos__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modelos */ "KMgT");

















function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var URL_BASE = 'https://localhost:3005/diario';

function carregaDados(_x) {
  return _carregaDados.apply(this, arguments);
}

function _carregaDados() {
  _carregaDados = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee(userToken) {
    var entradas, diario, _iterator, _step, entrada;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return acessaEntradas(userToken);

          case 2:
            entradas = _context.sent;
            diario = new _modelos__WEBPACK_IMPORTED_MODULE_16__["Diario"]();
            _iterator = _createForOfIteratorHelper(entradas);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                entrada = _step.value;
                diario.addEntrada(entrada);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _context.abrupt("return", diario);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _carregaDados.apply(this, arguments);
}

function acessaEntradas(_x2) {
  return _acessaEntradas.apply(this, arguments);
}

function _acessaEntradas() {
  _acessaEntradas = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee2(userToken) {
    var u, jsonData, resp, respJSON;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            u = "".concat(URL_BASE, "/busca/");
            jsonData = JSON.stringify({
              token: userToken
            });
            _context2.next = 4;
            return window.fetch(u, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: jsonData
            });

          case 4:
            resp = _context2.sent;

            if (!(resp.ok === false)) {
              _context2.next = 7;
              break;
            }

            throw new Error('Não foi possível acessar dados no servidor.');

          case 7:
            _context2.next = 9;
            return resp.json();

          case 9:
            respJSON = _context2.sent;
            return _context2.abrupt("return", processaRespostaServidor(respJSON));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _acessaEntradas.apply(this, arguments);
}

function processaRespostaServidor(respJSON) {
  var qtdEncontrada = respJSON.length;
  var entradas = qtdEncontrada === 0 ? [] : respJSON; // console.log(entradas)

  return entradas.map(function (entrada) {
    return objToEntrada(entrada);
  });
}

function objToEntrada(entrada) {
  return new _modelos__WEBPACK_IMPORTED_MODULE_16__["EntradaDiario"](entrada.data, entrada.conteudo);
}

function adiciona(_x3, _x4, _x5, _x6) {
  return _adiciona.apply(this, arguments);
}

function _adiciona() {
  _adiciona = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_15___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.mark(function _callee3(userToken, data, entrada, diario) {
    var u, jsonData, resp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_13___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            u = "".concat(URL_BASE, "/adiciona/");
            jsonData = JSON.stringify({
              token: userToken,
              data: data,
              entrada: entrada
            });
            _context3.next = 4;
            return window.fetch(u, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: jsonData
            });

          case 4:
            resp = _context3.sent;

            if (!(resp.ok === false)) {
              _context3.next = 7;
              break;
            }

            throw new Error('Não foi possível acessar dados no servidor.');

          case 7:
            diario.addEntrada(objToEntrada({
              data: data,
              conteudo: entrada
            }));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _adiciona.apply(this, arguments);
}

function pesquisa(diario, data) {
  return diario.getEntrada(data);
}



/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "60Zk");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/App.jsx */ "/0LD");





var elem = document.createElement('div');
document.body.appendChild(elem);
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_view_App_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), elem);

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L0RhdGEuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9tb2RlbG9zLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L01vc3RyYUVudHJhZGEuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9wZXNxdWlzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZXN0YWRvSW5pY2lhbCIsImNsaWVudElkIiwidW5kZWZpbmVkIiwiZGF0YSIsImVudHJhZGFEaWFyaW8iLCJkaWFyaW8iLCJ2aWV3QXR1YWwiLCJjc3NCb3RhbyIsInBlc3F1aXNhbmRvIiwibG9nYWRvIiwidXNlclRva2VuIiwidXNlTW9kZWxvIiwidXNlU3RhdGUiLCJlc3RhZG8iLCJzZXRFc3RhZG8iLCJvbkRlc2xvZ2FkbyIsIm9uTG9nYWRvIiwicmVzIiwidG9rZW5JZCIsInVzZUVmZmVjdCIsImRldUVycm8iLCJlcnJvIiwibm9tZUJvdGFvIiwibWVzc2FnZSIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhIiwianNvbiIsImdvb2dsZUtleSIsImNhdGNoIiwib25EaWFyaW9DYXJyZWdhZG8iLCJjYXJyZWdhRGFkb3MiLCJvbkRhdGFJbnZhbGlkYSIsIm9uRGF0YVZhbGlkYSIsIm5vdmFEYXRhIiwib25QZXNxdWlzYW5kbyIsImFsdGVyYUVudHJhZGEiLCJldiIsIm5vdmFFbnRyYWRhIiwidGFyZ2V0IiwidmFsdWUiLCJlbnRyYWRhVGV4dG8iLCJtb3N0cmFBcmVhVGV4dG8iLCJjc3NFbnRyYWRhVGV4dG8iLCJvbkFkaWNpb25hRW50cmFkYSIsImFkaWNpb25hIiwib25FbnRyYWRhRW5jb250cmFkYSIsImVudHJhZGEiLCJvblNlbUVudHJhZGEiLCJwZXNxdWlzYSIsIkFwcCIsIm9FbnRyYWRhIiwiYXJlYSIsImxvZ291dEJ0biIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwidmFsaWRhRGF0YSIsImNhbXBvcyIsInNwbGl0IiwibGVuZ3RoIiwiaXNOYU4iLCJwYXJzZUludCIsIkRhdGUiLCJwYXJzZSIsIkRhdGEiLCJwcm9wcyIsImFsdGVyYURhdGEiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIkVudHJhZGFEaWFyaW8iLCJjb250ZXVkbyIsIkRpYXJpbyIsImVudHJhZGFzIiwibnVtX2VudHJhZGFzIiwiTW9zdHJhRW50cmFkYSIsIk1vc3RyYVNlbUVudHJhZGEiLCJNb3N0cmFTdWNlc3NvIiwiTW9zdHJhRWRpY2FvIiwiaW5zdGFuY2VPZiIsInN0cmluZyIsIlVSTF9CQVNFIiwiYWNlc3NhRW50cmFkYXMiLCJhZGRFbnRyYWRhIiwidSIsImpzb25EYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXNwIiwib2siLCJFcnJvciIsInJlc3BKU09OIiwicHJvY2Vzc2FSZXNwb3N0YVNlcnZpZG9yIiwicXRkRW5jb250cmFkYSIsIm1hcCIsIm9ialRvRW50cmFkYSIsImdldEVudHJhZGEiLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyxVQUFRLEVBQUNDLFNBRFc7QUFFcEJDLE1BQUksRUFBRUQsU0FGYztBQUdwQkUsZUFBYSxFQUFFRixTQUhLO0FBSXBCRyxRQUFNLEVBQUVILFNBSlk7QUFLcEJJLFdBQVMsRUFBRSxPQUxTO0FBTXBCQyxVQUFRLEVBQUUsZ0JBTlU7QUFPcEJDLGFBQVcsRUFBRSxLQVBPO0FBUXBCQyxRQUFNLEVBQUUsS0FSWTtBQVNwQkMs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QjtBQUVqQ0Msa0JBQUksRUFBRU47QUFGMkIsYUFBaEIsQ0FIckI7O0FBQUE7QUFHUU8sZ0JBSFI7O0FBQUEsa0JBTU1BLElBQUksQ0FBQ0MsRUFBTCxLQUFZLEtBTmxCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQU9VLElBQUlDLEtBQUosQ0FBVSw2Q0FBVixDQVBWOztBQUFBO0FBU0U1RixrQkFBTSxDQUFDaUYsVUFBUCxDQUFrQmdCLFlBQVksQ0FBQztBQUFDbkcsa0JBQUksRUFBRUEsSUFBUDtBQUFhdUUsc0JBQVEsRUFBRTFCO0FBQXZCLGFBQUQsQ0FBOUI7O0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVlBLFNBQVNFLFFBQVQsQ0FBbUI3QyxNQUFuQixFQUEyQkYsSUFBM0IsRUFBaUM7QUFDL0IsU0FBT0UsTUFBTSxDQUFDa0csVUFBUCxDQUFrQnBHLElBQWxCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUN2REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNcUcsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUVBRCxRQUFRLENBQUNYLElBQVQsQ0FBY2EsV0FBZCxDQUEwQkgsSUFBMUI7QUFDQUksZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyxxREFBRCxPQUFoQixFQUF5QkwsSUFBekIsRSIsImZpbGUiOiJtYWluLmFjMTg0ZmMwNjM2Zjc5YmZlNjNmLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7cGVzcXVpc2EsIGNhcnJlZ2FEYWRvcywgYWRpY2lvbmF9IGZyb20gJy4uL21vZGVsL3Blc3F1aXNhJ1xuaW1wb3J0IHtNb3N0cmFFbnRyYWRhLCBNb3N0cmFTZW1FbnRyYWRhLCBNb3N0cmFTdWNlc3NvLCBNb3N0cmFFZGljYW99IGZyb20gJy4vTW9zdHJhRW50cmFkYS5qc3gnXG5pbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEuanN4J1xuaW1wb3J0IEdvb2dsZUxvZ2luLCB7IEdvb2dsZUxvZ291dCB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbidcblxuY29uc3QgZXN0YWRvSW5pY2lhbCA9IHtcbiAgY2xpZW50SWQ6dW5kZWZpbmVkLFxuICBkYXRhOiB1bmRlZmluZWQsXG4gIGVudHJhZGFEaWFyaW86IHVuZGVmaW5lZCxcbiAgZGlhcmlvOiB1bmRlZmluZWQsXG4gIHZpZXdBdHVhbDogJ2xvZ2luJyxcbiAgY3NzQm90YW86ICdidXR0b24gaXMtZGFyaycsXG4gIHBlc3F1aXNhbmRvOiBmYWxzZSxcbiAgbG9nYWRvOiBmYWxzZSxcbiAgdXNlclRva2VuOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gdXNlTW9kZWxvKCkge1xuXG4gIGNvbnN0IFtlc3RhZG8sIHNldEVzdGFkb10gPSB1c2VTdGF0ZShlc3RhZG9JbmljaWFsKVxuXG4gIGZ1bmN0aW9uIG9uRGVzbG9nYWRvKCl7XG4gICAgc2V0RXN0YWRvKHsuLi5lc3RhZG9JbmljaWFsLCBjbGllbnRJZDogZXN0YWRvLmNsaWVudElkfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTG9nYWRvKHJlcyl7XG4gICAgc2V0RXN0YWRvKHsuLi5lc3RhZG8sIGVudHJhZGFEaWFyaW86IHVuZGVmaW5lZCwgXG4gICAgICBwZXNxdWlzYW5kbzogZmFsc2UsICBsb2dhZG86IHRydWUsIHVzZXJUb2tlbjpyZXMudG9rZW5JZH0pICBcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZGV1RXJybyhlcnJvKSB7XG4gICAgICBzZXRFc3RhZG8oey4uLmVzdGFkb0luaWNpYWwsIG5vbWVCb3RhbzogZXJyby5tZXNzYWdlLCBjc3NCb3RhbzogJ2J1dHRvbiBpcy1ibGFjaycsIHBlc3F1aXNhbmRvOiBmYWxzZX0pXG4gICAgfVxuICAgIFxuICAgIHdpbmRvdy5mZXRjaCgnL2NoYXZlJylcbiAgICAgIC50aGVuKHJlc3Bvc3RhID0+IHJlc3Bvc3RhLmpzb24oKSlcbiAgICAgIC50aGVuKGdvb2dsZUtleSA9PiBzZXRFc3RhZG8oey4uLmVzdGFkb0luaWNpYWwsIGNsaWVudElkOiBnb29nbGVLZXl9KSlcbiAgICAgIC5jYXRjaChlcnJvID0+IGRldUVycm8oZXJybykpXG4gIH0sIFtdKVxuXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZnVuY3Rpb24gb25EaWFyaW9DYXJyZWdhZG8oZGlhcmlvKXtcbiAgICAgIHNldEVzdGFkbyh7Li4uZXN0YWRvLCBkaWFyaW86IGRpYXJpb30pXG4gICAgfVxuICAgIGlmKGVzdGFkby5sb2dhZG8pe1xuICAgICAgY2FycmVnYURhZG9zKGVzdGFkby51c2VyVG9rZW4pXG4gICAgICAgIC50aGVuKGRpYXJpbyA9PiBvbkRpYXJpb0NhcnJlZ2FkbyhkaWFyaW8pKVxuICAgIH1cbiAgfSwgW2VzdGFkby5sb2dhZG9dKVxuXG4gIGZ1bmN0aW9uIG9uRGF0YUludmFsaWRhICgpIHtcbiAgICBzZXRFc3RhZG8oey4uLmVzdGFkbywgcGVzcXVpc2FuZG86IGZhbHNlfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRGF0YVZhbGlkYSAobm92YURhdGEpIHtcbiAgICBzZXRFc3RhZG8oey4uLmVzdGFkbywgZGF0YTogbm92YURhdGEsIFxuICAgICAgcGVzcXVpc2FuZG86IGZhbHNlLCAgbG9nYWRvOiBlc3RhZG8ubG9nYWRvfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGVzcXVpc2FuZG8oKSB7XG4gICAgc2V0RXN0YWRvKHsuLi5lc3RhZG8sIHBlc3F1aXNhbmRvOiB0cnVlLFxuICAgICAgY3NzQm90YW86ICdidXR0b24gaXMtZGFyayBpcy1sb2FkaW5nJ30pXG4gIH1cbiAgZnVuY3Rpb24gYWx0ZXJhRW50cmFkYSAoZXYpIHtcbiAgICBjb25zdCBub3ZhRW50cmFkYSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIHNldEVzdGFkbyh7Li4uZXN0YWRvLCBlbnRyYWRhVGV4dG86IG5vdmFFbnRyYWRhfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vc3RyYUFyZWFUZXh0bygpe1xuICAgIHNldEVzdGFkbyh7Li4uZXN0YWRvLCAgIGNzc0VudHJhZGFUZXh0bzogJ2JveCcsIHZpZXdBdHVhbDogJ21vZG8gZWRpw6fDo28nfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQWRpY2lvbmFFbnRyYWRhKCl7XG4gICAgYWRpY2lvbmEoZXN0YWRvLnVzZXJUb2tlbiwgZXN0YWRvLmRhdGEsIGVzdGFkby5lbnRyYWRhVGV4dG8sIGVzdGFkby5kaWFyaW8pXG4gICAgc2V0RXN0YWRvKHsuLi5lc3RhZG8sIHZpZXdBdHVhbDogJ2NhZGFzdHJvIHN1Y2Vzc28nfSlcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9uRW50cmFkYUVuY29udHJhZGEgKGVudHJhZGEpIHtcbiAgICAgIHNldEVzdGFkbyhlc3RhZG8gPT4gKHsuLi5lc3RhZG8sIGVudHJhZGFEaWFyaW86IGVudHJhZGEsIGNzc0JvdGFvOiAnYnV0dG9uIGlzLWRhcmsnLCBwZXNxdWlzYW5kbzogZmFsc2UsIHZpZXdBdHVhbDogJ2VudHJhZGEnfSkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TZW1FbnRyYWRhKCl7XG4gICAgICBzZXRFc3RhZG8oZXN0YWRvID0+ICh7Li4uZXN0YWRvLCBlbnRyYWRhRGlhcmlvOiB1bmRlZmluZWQsIGNzc0JvdGFvOiAnYnV0dG9uIGlzLWRhcmsnLCBcbiAgICAgICAgcGVzcXVpc2FuZG86IGZhbHNlLCB2aWV3QXR1YWw6ICdzZW0gZW50cmFkYSd9KSlcbiAgICB9XG4gIFxuICAgIGlmIChlc3RhZG8ucGVzcXVpc2FuZG8pIHtcbiAgICAgIGxldCBlbnRyYWRhID0gcGVzcXVpc2EoZXN0YWRvLmRpYXJpbywgZXN0YWRvLmRhdGEpXG4gICAgICAvLyBjb25zb2xlLmxvZyhlc3RhZG8udG9rZW5JZClcbiAgICAgIGlmKGVudHJhZGEpXG4gICAgICAgIG9uRW50cmFkYUVuY29udHJhZGEoZW50cmFkYSlcbiAgICAgIGVsc2VcbiAgICAgICAgb25TZW1FbnRyYWRhKClcbiAgICB9XG4gIH0sIFtlc3RhZG8ucGVzcXVpc2FuZG9dKVxuXG5cblxuICBcbiAgcmV0dXJuIFsgZXN0YWRvLCAge29uRGF0YUludmFsaWRhLCBvbkRhdGFWYWxpZGEsIG9uUGVzcXVpc2FuZG8sIG9uTG9nYWRvLCBvbkRlc2xvZ2Fkbywgb25BZGljaW9uYUVudHJhZGEsIG1vc3RyYUFyZWFUZXh0bywgYWx0ZXJhRW50cmFkYX0gXVxufVxuXG5cbmZ1bmN0aW9uIEFwcCAoKSB7XG4gIGNvbnN0IFsgZXN0YWRvLCAge29uRGF0YVZhbGlkYSwgb25EYXRhSW52YWxpZGEsIG9uUGVzcXVpc2FuZG8sIG9uTG9nYWRvLCBvbkRlc2xvZ2Fkbywgb25BZGljaW9uYUVudHJhZGEsIG1vc3RyYUFyZWFUZXh0bywgYWx0ZXJhRW50cmFkYX0gXSA9IHVzZU1vZGVsbygpXG5cblxuICBsZXQgb0VudHJhZGFcbiAgbGV0IGFyZWFcbiAgbGV0IGxvZ291dEJ0blxuXG5cbiAgaWYgKGVzdGFkby52aWV3QXR1YWwgPT09ICdlbnRyYWRhJykge1xuICAgIGNvbnNvbGUubG9nKCdtb2RvIGVudHJhZGEnKVxuICAgIG9FbnRyYWRhID0gPE1vc3RyYUVudHJhZGEgZW50cmFkYT17ZXN0YWRvLmVudHJhZGFEaWFyaW99IC8+XG4gIH1cbiAgZWxzZSBpZiAoZXN0YWRvLnZpZXdBdHVhbCA9PT0gJ3NlbSBlbnRyYWRhJyl7XG4gICAgY29uc29sZS5sb2coJ21vZG8gc2VtIGVudHJhZGEnKVxuXG4gICAgb0VudHJhZGEgPSA8TW9zdHJhU2VtRW50cmFkYSBtb3N0cmFBcmVhVGV4dG89e21vc3RyYUFyZWFUZXh0b30gLz5cbiAgfVxuICBlbHNlIGlmIChlc3RhZG8udmlld0F0dWFsID09PSAnbW9kbyBlZGnDp8OjbycpXG4gIHtcbiAgICBvRW50cmFkYSA9IDxNb3N0cmFFZGljYW8gb25BZGljaW9uYUVudHJhZGE9e29uQWRpY2lvbmFFbnRyYWRhfSBcbiAgICAgIGFsdGVyYUVudHJhZGE9e2FsdGVyYUVudHJhZGF9IFxuICAgICAgZGF0YT17ZXN0YWRvLmRhdGF9IC8+XG4gIH1cbiAgZWxzZSBpZiAoZXN0YWRvLnZpZXdBdHVhbCA9PT0gJ2NhZGFzdHJvIHN1Y2Vzc28nKXtcbiAgICBvRW50cmFkYSA9IDxNb3N0cmFTdWNlc3NvIC8+XG4gIH1cblxuICBpZiAoZXN0YWRvLmxvZ2Fkbyl7XG4gICAgbG9nb3V0QnRuID0gPEdvb2dsZUxvZ291dFxuICAgICAgYnV0dG9uVGV4dD1cIkxvZ291dFwiXG4gICAgICBvbkxvZ291dFN1Y2Nlc3M9e29uRGVzbG9nYWRvfVxuICAgIC8+XG4gICAgYXJlYSA9IDw+XG4gICAgICB7bG9nb3V0QnRufVxuICAgICAgPERhdGEgb25EYXRhVmFsaWRhPXtvbkRhdGFWYWxpZGF9IG9uRGF0YUludmFsaWRhPXtvbkRhdGFJbnZhbGlkYX0vPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2VzdGFkby5jc3NCb3Rhb31cbiAgICAgICAgb25DbGljaz17b25QZXNxdWlzYW5kb30+XG4gICAgICAgICAgICBwZXNxdWlzYXJcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge29FbnRyYWRhfVxuICAgIDwvPlxuICB9XG4gIGVsc2UgaWYgKGVzdGFkby5jbGllbnRJZCl7XG4gICAgYXJlYSA9IDxHb29nbGVMb2dpblxuICAgICAgY2xpZW50SWQ9e2VzdGFkby5jbGllbnRJZH1cbiAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXG4gICAgICBvblN1Y2Nlc3M9e29uTG9nYWRvfVxuICAgICAgb25GYWlsdXJlPXtyZXMgPT4gY29uc29sZS5sb2cocmVzKX1cbiAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XG4gICAgLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBpcy1mbHVpZCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWhlYWRlcic+XG4gICAgICAgICAgICBVRlNDIC0gQ1RDIC0gSU5FIC0gSU5FNTY0NiA6OiBBcHAgRGnDoXJpb1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XG4gICAgICAgICAge2FyZWF9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5mdW5jdGlvbiB1c2VNb2RlbG8oKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCcnKVxuXG5cbiAgZnVuY3Rpb24gdmFsaWRhRGF0YSAoZGF0YSkge1xuICAgIGNvbnN0IGNhbXBvcyA9IGRhdGEuc3BsaXQoJy0nKVxuICAgIGlmIChjYW1wb3MubGVuZ3RoICE9PSAzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKGNhbXBvc1swXS5sZW5ndGggIT09IDQgfHxcbiAgICAgICAgICBjYW1wb3NbMV0ubGVuZ3RoICE9PSAyIHx8XG4gICAgICAgICAgY2FtcG9zWzJdLmxlbmd0aCAhPT0gMikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGlzTmFOKHBhcnNlSW50KGNhbXBvc1swXSwgMTApKSB8fFxuICAgICAgICAgIHBhcnNlSW50KGNhbXBvc1swXSwgMTApIDwgMTk3MCB8fFxuICAgICAgICAgIGlzTmFOKHBhcnNlSW50KGNhbXBvc1sxXSwgMTApKSB8fFxuICAgICAgICAgIGlzTmFOKHBhcnNlSW50KGNhbXBvc1syXSwgMTApKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuICFpc05hTihEYXRlLnBhcnNlKGRhdGEpKVxuICB9XG5cbiAgcmV0dXJuIFtkYXRhLCB7c2V0RGF0YSwgdmFsaWRhRGF0YX1dXG59XG5cblxuY29uc3QgRGF0YSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbZGF0YSwge3NldERhdGEsIHZhbGlkYURhdGF9XSA9IHVzZU1vZGVsbygpXG5cbiAgZnVuY3Rpb24gYWx0ZXJhRGF0YSAoZXYpIHtcbiAgICBjb25zdCBub3ZhRGF0YSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIHNldERhdGEobm92YURhdGEpXG4gICAgaWYgKHZhbGlkYURhdGEobm92YURhdGEpKSB7XG4gICAgICBwcm9wcy5vbkRhdGFWYWxpZGEobm92YURhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLm9uRGF0YUludmFsaWRhKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0J1xuICAgICAgdHlwZT0ndGV4dCdcbiAgICAgIHRpdGxlPSdFeGVtcGxvOiAyMDE5LTAzLTI3J1xuICAgICAgcGxhY2Vob2xkZXI9J0FBQUEtTU0tREQnXG4gICAgICB2YWx1ZT17ZGF0YX1cbiAgICAgIG9uQ2hhbmdlPXthbHRlcmFEYXRhfS8+XG4gIClcbn1cblxuRGF0YS5wcm9wVHlwZXMgPSB7XG4gIG9uRGF0YVZhbGlkYTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25EYXRhSW52YWxpZGE6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVxuIiwiXG5jbGFzcyBFbnRyYWRhRGlhcmlve1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgY29udGV1ZG8pe1xuICAgIHRoaXMuY29udGV1ZG8gPSBjb250ZXVkb1xuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgfVxufVxuXG5jbGFzcyBEaWFyaW97XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5lbnRyYWRhcyA9IHt9XG4gICAgdGhpcy5udW1fZW50cmFkYXMgPSAwXG4gIH1cblxuICBhZGRFbnRyYWRhKGVudHJhZGEpe1xuICAgIHRoaXMuZW50cmFkYXNbZW50cmFkYS5kYXRhXSA9IGVudHJhZGFcbiAgICB0aGlzLm51bV9lbnRyYWRhcysrXG4gIH1cblxuICBnZXRFbnRyYWRhKGRhdGEpe1xuICAgIGlmIChkYXRhIGluIHRoaXMuZW50cmFkYXMpXG4gICAgICByZXR1cm4gdGhpcy5lbnRyYWRhc1tkYXRhXVxuICB9XG59XG5cbmV4cG9ydCB7RW50cmFkYURpYXJpbywgRGlhcmlvfSIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgRW50cmFkYURpYXJpbyB9IGZyb20gJy4uL21vZGVsL21vZGVsb3MnXG5cbmNvbnN0IE1vc3RyYUVudHJhZGEgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZW50cmFkYSA9IHByb3BzLmVudHJhZGFcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J2NhcmQtaGVhZGVyJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJkLWhlYWRlci10aXRsZSBoYXMtYmFja2dyb3VuZC1wcmltYXJ5Jz5cbiAgICAgICAgICBEacOhcmlvIGRvIERpYSB7ZW50cmFkYS5kYXRhfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGVudCc+XG4gICAgICAgIHtlbnRyYWRhLmNvbnRldWRvfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTW9zdHJhU2VtRW50cmFkYSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBtb3N0cmFBcmVhVGV4dG8gPSBwcm9wcy5tb3N0cmFBcmVhVGV4dG9cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J2NhcmQtaGVhZGVyJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXJkLWhlYWRlci10aXRsZSBoYXMtYmFja2dyb3VuZC13YXJuaW5nJz5cbiAgICAgICAgICBTZW0gZW50cmFkYSBuZXN0YSBkYXRhLiBcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24gaXMtZGFyaydcbiAgICAgICAgb25DbGljaz17bW9zdHJhQXJlYVRleHRvfT5cbiAgICAgICAgICAgICAgYWRpY2lvbmFyIGVudHJhZGFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY29uc3QgTW9zdHJhU3VjZXNzbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcic+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZC1oZWFkZXItdGl0bGUgaGFzLWJhY2tncm91bmQtc3VjY2Vzcyc+XG4gICAgICAgICAgRGFkb3MgcmVnaXN0cmFkb3MgY29tIHN1Y2Vzc28uIFxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2gxPlxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNb3N0cmFFZGljYW8gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgb25BZGljaW9uYUVudHJhZGEgPSBwcm9wcy5vbkFkaWNpb25hRW50cmFkYVxuICBjb25zdCBhbHRlcmFFbnRyYWRhID0gcHJvcHMuYWx0ZXJhRW50cmFkYVxuICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dCdcbiAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgdGl0bGU9eydOb3ZhIGVudHJhZGEgcGFyYScgKyBkYXRhfVxuICAgICAgICBwbGFjZWhvbGRlcj0nRmFsZSBzb2JyZSBzZXUgZGlhJ1xuICAgICAgICBvbkNoYW5nZT17YWx0ZXJhRW50cmFkYX0vPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbiBpcy1kYXJrJ1xuICAgICAgICBvbkNsaWNrPXtvbkFkaWNpb25hRW50cmFkYX0+XG4gICAgICAgIHN1Ym1ldGVyXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Nb3N0cmFFbnRyYWRhLnByb3BUeXBlcyA9IHtcbiAgZW50cmFkYTogUHJvcFR5cGVzLmluc3RhbmNlT2YoRW50cmFkYURpYXJpbykuaXNSZXF1aXJlZFxufVxuXG5Nb3N0cmFTZW1FbnRyYWRhLnByb3BUeXBlcyA9IHtcbiAgbW9zdHJhQXJlYVRleHRvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbk1vc3RyYUVkaWNhby5wcm9wVHlwZXMgPSB7XG4gIG9uQWRpY2lvbmFFbnRyYWRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhbHRlcmFFbnRyYWRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IHtNb3N0cmFFbnRyYWRhLCBNb3N0cmFTZW1FbnRyYWRhLCBNb3N0cmFTdWNlc3NvLCBNb3N0cmFFZGljYW99XG4iLCJpbXBvcnQgeyBFbnRyYWRhRGlhcmlvLCBEaWFyaW8gfSBmcm9tICcuL21vZGVsb3MnXG5cbmNvbnN0IFVSTF9CQVNFID0gJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDUvZGlhcmlvJ1xuXG5hc3luYyBmdW5jdGlvbiBjYXJyZWdhRGFkb3MgKHVzZXJUb2tlbikge1xuICBjb25zdCBlbnRyYWRhcyA9IGF3YWl0IGFjZXNzYUVudHJhZGFzKHVzZXJUb2tlbilcbiAgY29uc3QgZGlhcmlvID0gbmV3IERpYXJpbygpXG4gIGZvcihsZXQgZW50cmFkYSBvZiBlbnRyYWRhcyl7XG4gICAgZGlhcmlvLmFkZEVudHJhZGEoZW50cmFkYSlcbiAgfVxuICByZXR1cm4gZGlhcmlvXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFjZXNzYUVudHJhZGFzICggdXNlclRva2VuKSB7XG4gIGNvbnN0IHUgPSBgJHtVUkxfQkFTRX0vYnVzY2EvYFxuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHt0b2tlbjogdXNlclRva2VufSlcbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1LCB7IG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICBib2R5OiBqc29uRGF0YX0pXG4gICAgXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuJylcbiAgfVxuICBjb25zdCByZXNwSlNPTiA9IGF3YWl0IHJlc3AuanNvbigpXG4gIC8vIGNvbnNvbGUubG9nKHJlc3BKU09OKVxuICAvLyBjb25zb2xlLmxvZyh1c2VyVG9rZW4pXG4gIHJldHVybiBwcm9jZXNzYVJlc3Bvc3RhU2Vydmlkb3IocmVzcEpTT04pXG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NhUmVzcG9zdGFTZXJ2aWRvciAocmVzcEpTT04pIHtcbiAgY29uc3QgcXRkRW5jb250cmFkYSA9IHJlc3BKU09OLmxlbmd0aFxuICBjb25zdCBlbnRyYWRhcyA9XG4gICAgcXRkRW5jb250cmFkYSA9PT0gMCA/IFtdIDogcmVzcEpTT05cbiAgLy8gY29uc29sZS5sb2coZW50cmFkYXMpXG4gIHJldHVybiBlbnRyYWRhcy5tYXAoZW50cmFkYSA9PiBvYmpUb0VudHJhZGEoZW50cmFkYSkpXG59XG5cbmZ1bmN0aW9uIG9ialRvRW50cmFkYSAoZW50cmFkYSkge1xuICByZXR1cm4gbmV3IEVudHJhZGFEaWFyaW8oIGVudHJhZGEuZGF0YSwgZW50cmFkYS5jb250ZXVkbylcbn1cblxuYXN5bmMgZnVuY3Rpb24gYWRpY2lvbmEgKCB1c2VyVG9rZW4sIGRhdGEsIGVudHJhZGEsIGRpYXJpbykge1xuICBjb25zdCB1ID0gYCR7VVJMX0JBU0V9L2FkaWNpb25hL2BcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7dG9rZW46IHVzZXJUb2tlbiwgZGF0YTogZGF0YSwgZW50cmFkYTogZW50cmFkYX0pXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2godSwgeyBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgYm9keToganNvbkRhdGF9KVxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLicpXG4gIH1cbiAgZGlhcmlvLmFkZEVudHJhZGEob2JqVG9FbnRyYWRhKHtkYXRhOiBkYXRhLCBjb250ZXVkbzogZW50cmFkYX0pKVxufVxuXG5mdW5jdGlvbiBwZXNxdWlzYSAoZGlhcmlvLCBkYXRhKSB7XG4gIHJldHVybiBkaWFyaW8uZ2V0RW50cmFkYShkYXRhKVxufVxuXG5cbmV4cG9ydCB7cGVzcXVpc2EsIGNhcnJlZ2FEYWRvcywgYWRpY2lvbmF9XG4iLCJpbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBBcHAgZnJvbSAnLi92aWV3L0FwcC5qc3gnXG5pbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzJ1xuXG5jb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKVxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGVsZW0pIl0sInNvdXJjZVJvb3QiOiIifQ==