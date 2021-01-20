'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('moment');
require('moment/locale/tr');
require('react-router-dom');
var history$1 = require('history');
var reactColor = require('react-color');
var Tooltip = require('rc-tooltip');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var mainColor = "#002171";
var successColor = "green";
var dangerColor = "#EF5350";
var appURLs = {
  HTTP_REST_SERVER: {
    development: "http://localhost:8080/api",
    production: "http://localhost:8080/api"
  },
  WS_REST_SERVER: {
    development: "ws://localhost:8080/ws",
    production: "ws://localhost:8080/ws"
  }
};
var APP_NAMES = {
  WS_REST_SERVER: "WS_REST_SERVER",
  HTTP_REST_SERVER: "HTTP_REST_SERVER"
};
var getAppURLs = function getAppURLs() {
  return appURLs;
};
var getAppNames = function getAppNames() {
  return APP_NAMES;
};

var getAppURL = function getAppURL(appname) {
  var NODE_ENV = process.env.NODE_ENV;
  var appURLs = getAppURLs() || {};
  return appURLs[appname][NODE_ENV];
};

var getMainColor = function getMainColor() {
  return mainColor;
};
var getSuccessColor = function getSuccessColor() {
  return successColor;
};
var getDangerColor = function getDangerColor() {
  return dangerColor;
};
var constants = {
  mainColor: getMainColor(),
  successColor: getSuccessColor(),
  mainDangerColor: getDangerColor(),
  REST_SERVER: getAppURL(getAppNames().HTTP_REST_SERVER),
  WS_SERVER: getAppURL(getAppNames().WS_REST_SERVER)
};

var trTRLocales = {
  Stores: function Stores() {
    return "Mağazalar";
  },
  Home: function Home() {
    return "Ana Sayfa";
  },
  Purchases: function Purchases() {
    return "Satın Alımlar";
  },
  Sales: function Sales() {
    return "Satışlar";
  },
  Profile: function Profile() {
    return "Profil";
  },
  Menu: function Menu() {
    return "Menü";
  },
  Search: function Search() {
    return "Ara";
  },
  Payment: function Payment() {
    return "Ödeme";
  },
  Orders: function Orders() {
    return "Siparişler";
  },
  Tables: function Tables() {
    return "Masalar";
  }
};
var languageKeys = ["tr"];

var exportLocales = function exportLocales(languageKeys, languages) {
  var exp = {};
  languageKeys.forEach(function (i) {
    exp[i] = languages;
  });
  return exp;
};

var TRLocales = exportLocales(languageKeys, trTRLocales);

var enUSLocales = {
  Stores: function Stores() {
    return "Stores";
  },
  Home: function Home() {
    return "Home";
  }
};
var languageKeys$1 = ["en", "en-us"];

var exportLocales$1 = function exportLocales(languageKeys, languages) {
  var exp = {};
  languageKeys.forEach(function (i) {
    exp[i] = languages;
  });
  return exp;
};

var ENLocales = exportLocales$1(languageKeys$1, enUSLocales);

var AllLocales = _objectSpread2$1(_objectSpread2$1({}, TRLocales), ENLocales);
var hashCode = function hashCode(str) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return hash;
};
var generatedColorFromString = function generatedColorFromString(_i) {
  var i = hashCode(_i);
  var c = (i & 0x00FFFFFF).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
};
var changeColor = function changeColor(color, amt) {
  var usePound = false;
  var col = color + "";

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  var b = (num >> 8 & 0x00FF) + amt;

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  var g = (num & 0x0000FF) + amt;

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
};
var takeIf = function takeIf(condition, value) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  if (condition) {
    return value;
  } else {
    return defaultValue;
  }
};
var isNullOrUndefined = function isNullOrUndefined(item) {
  return item === null || item === undefined;
};
var coalasce = function coalasce(first, second) {
  if (isNullOrUndefined(first)) return second;
  return first;
};
var monthsNumberArray = Array(12).fill(0).map(function (_, index) {
  return index % 12 + 1;
});

var authActions = {
  SET_TOKEN: "set-token",
  UPDATE_AUTH: "update-auth",
  LOGIN: 'login',
  LOGOUT: 'logout',
  SIGNUP: 'signup'
};
var notificationActions = {
  PUSH_IN_APP_NOTIFICATION: 'pushInAppNotification',
  POP_IN_APP_NOTIFICATION: 'popInAppNotification'
};
var modalActions = {
  SHOW_MODAL: 'show-modal',
  HIDE_MODAL: 'hide-modal',
  DELETE_MODAL: "delete-modal"
};
var lodaingActions = {
  INCREASE_LOADING_QUEUE: 'increaseLoadingQueue',
  DECREASE_LOADING_QUEUE: 'decreaseLoadingQueue'
};
var socketActions = {
  ADD_MESSAGE_LISTENER: 'addMessageListener',
  REMOVE_MESSAGE_LISTENER: 'removeMessageListener',
  SET_SOCKET: 'setSocket'
};

var actions = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, authActions), notificationActions), modalActions), lodaingActions), socketActions);

var history = history$1.createBrowserHistory();

var Show = function Show(props) {
  var condition = props.condition,
      willUnmount = props.willUnmount,
      children = props.children;
  React.useEffect(function () {
    return willUnmount;
  }, [willUnmount]);
  if (condition) return children;
  return null;
};

var Mapper = function Mapper(props) {
  var items = props.items,
      map = props.map,
      children = props.children;
  if (children) return (items || []).map(function (item, index) {
    return /*#__PURE__*/React.cloneElement(children, _objectSpread2$1(_objectSpread2$1({}, item), {}, {
      key: index
    }));
  });
  return (items || []).map(map);
};

var appStyles = {
  stretchRow: {
    display: 'flex',
    alignItems: 'stretch',
    flexFlow: 'row wrap'
  },
  defaultShadow: {
    boxShadow: "0 0 5px -2.75px black"
  },
  cardBorderRadius: {
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    flexShrink: 0
  },
  centerInColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column'
  },
  secondaryText: {
    color: '#aaa'
  },
  imageStyle: {
    height: "100%",
    width: '100%',
    borderRadius: 20,
    resizeMode: 'contain'
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  spreadHorizontally: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paddingHorizontal: function paddingHorizontal(value) {
    return {
      paddingLeft: value,
      paddingRight: value
    };
  },
  paddingVertical: function paddingVertical(value) {
    return {
      paddingTop: value,
      paddingBottom: value
    };
  },
  marginHorizontal: function marginHorizontal(value) {
    return {
      marginLeft: value,
      marginRight: value
    };
  },
  marginVertical: function marginVertical(value) {
    return {
      marginTop: value,
      marginBottom: value
    };
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  card: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 'initial'
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  cardSubtitle: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '300'
  },
  rounded: function rounded(size) {
    return {
      width: size,
      height: size,
      borderRadius: size * 2
    };
  },
  roundedImage: {
    width: '100%',
    objectFit: "cover",
    borderRadius: "50%"
  }
};

var Image = function Image(props) {
  var style = props.style,
      className = props.className,
      hidePlaceholder = props.hidePlaceholder,
      src = props.src,
      alt = props.alt,
      _onLoad = props.onLoad,
      _placheholder = props.placeholder,
      _size = props.size,
      rest = _objectWithoutProperties(props, ["style", "className", "hidePlaceholder", "src", "alt", "onLoad", "placeholder", "size"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var size = takeIf(_size, {
    width: _size,
    height: _size,
    borderRadius: '50%'
  }, {});
  var placeholder = coalasce(_placheholder, "P");
  var fontSize = takeIf(isNaN(_size / 2), 24, _size / 2);
  var displayImage = takeIf(loaded, undefined, 'none');
  var onLoad = React.useCallback(function () {
    setLoaded(true);
    if (_onLoad) _onLoad();
  }, [_onLoad]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, size), appStyles.defaultShadow), appStyles.center), {}, {
      backgroundColor: "#eee",
      overflow: "hidden"
    }, style),
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: src
  }, /*#__PURE__*/React__default['default'].createElement("img", _extends({
    onLoad: onLoad,
    src: src,
    alt: alt,
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.roundedImage), style), {}, {
      display: displayImage
    })
  }, rest))), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: !loaded && !hidePlaceholder
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      width: '100%',
      height: '100%'
    }, appStyles.center)
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      margin: 0,
      fontSize: fontSize,
      fontWeight: 'bold',
      padding: 4
    }
  }, placeholder))));
};

var Badge = function Badge(props) {
  var title = props.title,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      borderRadius: 10,
      backgroundColor: '#eee'
    }
  }, title), children);
};

var Button = function Button(props) {
  var style = props.style,
      icon = props.icon,
      title = props.title,
      _className = props.className,
      _iconSize = props.iconSize,
      _onClick = props.onClick,
      _htmlType = props.htmlType,
      children = props.children;
  var iconSize = coalasce(_iconSize, 32);
  var htmlType = coalasce(_htmlType, "button");
  var iconButton = !children && !title;
  var className = "no-select ";
  var onClick = React.useCallback(function (e) {
    if (htmlType !== 'submit') e.preventDefault();
    if (_onClick) _onClick(e);
  }, [htmlType, _onClick]);
  if (_className) className += " ".concat(_className || "");
  return /*#__PURE__*/React__default['default'].createElement("button", {
    style: _objectSpread2({
      justifyContent: 'center',
      alignItems: 'center',
      width: takeIf(iconButton, iconSize),
      minWidth: takeIf(iconButton, iconSize),
      height: takeIf(iconButton, iconSize),
      minHeight: takeIf(iconButton, iconSize),
      borderRadius: takeIf(iconButton, "50%")
    }, style || {}),
    type: htmlType,
    onClick: onClick,
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: icon
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      marginRight: takeIf(!iconButton, 8),
      fontSize: takeIf(iconButton, 18, 12),
      width: takeIf(iconButton, "100%", 12),
      height: takeIf(iconButton, "100%", 12)
    }, appStyles.center)
  }, icon)), /*#__PURE__*/React__default['default'].createElement("div", null, children || title));
};

var styles = {
  popover: {
    position: 'absolute',
    zIndex: '2'
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    zIndex: 1
  }
};

var Popover = function Popover(props) {
  var overlay = props.overlay,
      children = props.children;
  var target = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      displayColorPicker = _useState2[0],
      setDisplayColorPicker = _useState2[1];

  var _useState3 = React.useState({
    left: 0,
    top: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var showPopover = React.useCallback(function () {
    setDisplayColorPicker(true);

    if (target.current) {
      var _ref = target.current.getBoundingClientRect() || {},
          left = _ref.left,
          top = _ref.top,
          height = _ref.height;

      setPosition({
        left: left,
        top: top + height
      });
    }
  }, [target]);
  var closePopover = React.useCallback(function () {
    setDisplayColorPicker(false);
  }, []);
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: showPopover,
    ref: target
  }, children), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: displayColorPicker
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: styles.cover,
    onClick: closePopover
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, styles.popover), position)
  }, overlay))));
};

var ColorPicker = function ColorPicker(props) {
  var label = props.label,
      _value = props.value,
      _onChange = props.onChange,
      title = props.title,
      inputClassName = props.inputClassName,
      colorClassName = props.colorClassName,
      children = props.children;
  var onChange = React.useCallback(function (_ref) {
    var hex = _ref.hex;

    _onChange(hex);
  }, [_onChange]);
  return /*#__PURE__*/React__default['default'].createElement(Popover, {
    overlay: /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        backgroundColor: 'white',
        padding: 16
      }
    }, /*#__PURE__*/React__default['default'].createElement("h3", null, title || "Renk"), /*#__PURE__*/React__default['default'].createElement(reactColor.SwatchesPicker, {
      onChange: onChange
    }))
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: children
  }, children), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: !children
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: inputClassName
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React__default['default'].createElement("div", {
    className: colorClassName,
    style: {
      backgroundColor: _value,
      height: 32,
      width: '100%'
    }
  })))));
};

var EmptyResult = function EmptyResult(props) {
  var icon = props.icon,
      title = props.title,
      style = props.style,
      iconClassName = props.iconClassName,
      _size = props.size;
  var size = _size || 120;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      width: '100%'
    }, appStyles.centerInColumn)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: iconClassName,
    style: _objectSpread2(_objectSpread2({}, appStyles.center), appStyles.rounded(size))
  }, icon)), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      textAlign: 'center',
      fontWeight: '100',
      fontSize: 24,
      whiteSpace: 'pre-wrap',
      color: 'black',
      marginTop: 16
    }
  }, title)));
};

var Header = function Header(props) {
  var title = props.title,
      titleRenderer = props.titleRenderer,
      style = props.style,
      titleStyle = props.titleStyle,
      rightContent = props.rightContent;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center',
      minHeight: 48
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      flex: 1
    }, titleStyle || {})
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: titleRenderer
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0
    }, appStyles.cardTitle)
  }, title))), rightContent);
};

var IncDecField = function IncDecField(props) {
  var value = props.value,
      onChange = props.onChange,
      minusIcon = props.minusIcon,
      plusIcon = props.plusIcon,
      _size = props.size,
      style = props.style,
      minusDisabled = props.minusDisabled,
      plusDisabled = props.plusDisabled,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2({
      marginVertical: 16
    }, appStyles.row), appStyles.spreadHorizontally), style || {})
  }, /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: minusIcon,
    disabled: minusDisabled,
    type: "primary",
    style: {
      borderRadius: 10
    },
    onClick: function onClick() {
      return onChange(value - 1);
    }
  }), children, /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: plusIcon,
    disabled: plusDisabled,
    type: "primary",
    style: {
      borderRadius: 10
    },
    onClick: function onClick() {
      return onChange(value + 1);
    }
  }));
};

var ListItem = function ListItem(props) {
  var style = props.style,
      avatar = props.avatar,
      title = props.title,
      lastItem = props.lastItem,
      titleRenderer = props.titleRenderer,
      description = props.description,
      className = props.className,
      titleStyle = props.titleStyle,
      subtitleStyle = props.subtitleStyle,
      titleContainerStyle = props.titleContainerStyle,
      onClick = props.onClick,
      onTitleClick = props.onTitleClick,
      subtitle = props.subtitle,
      subtitleRenderer = props.subtitleRenderer,
      headerContainerStyle = props.headerContainerStyle,
      selected = props.selected,
      children = props.children;
  var borderBottom = takeIf(lastItem, '1px solid #eee');
  var titleContainerClassName = takeIf(onTitleClick, "clickable", "");
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      borderBottom: borderBottom,
      padding: 4
    }, style || {}),
    className: className,
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      display: "flex",
      alignItems: 'center'
    }, headerContainerStyle || {})
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: avatar
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginRight: takeIf(!!title || !!titleRenderer, 8, 0)
    }
  }, avatar)), /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      width: '100%',
      padding: 4
    }, titleContainerStyle || {}),
    onClick: onTitleClick,
    className: titleContainerClassName
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: titleRenderer
  }, titleRenderer), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: title
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0,
      color: takeIf(selected, "#1890ff")
    }, titleStyle || {})
  }, title)), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: subtitle
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0,
      fontSize: 10,
      color: 'black'
    }, subtitleStyle || {})
  }, subtitle)), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: subtitleRenderer
  }, subtitleRenderer)), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: description
  }, description)), children);
};

var OverflowImages = function OverflowImages(props) {
  var images = props.images,
      _maxCount = props.maxCount,
      size = props.size;
  var maxCount = _maxCount || 3;
  var overflowItemsCount = images.length - maxCount;
  var count = takeIf(overflowItemsCount > 0, "+".concat(overflowItemsCount));
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.center), {}, {
      flexDirection: 'column',
      marginRight: 8
    })
  }, /*#__PURE__*/React__default['default'].createElement(Badge, {
    title: count
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, appStyles.center)
  }, /*#__PURE__*/React__default['default'].createElement(Mapper, {
    items: images.filter(function (_, index) {
      return index < maxCount;
    })
  }, /*#__PURE__*/React__default['default'].createElement(OverflowImage, {
    size: size
  })))));
};

var OverflowImage = function OverflowImage(props) {
  var src = props.src,
      index = props.index,
      size = props.size;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      border: '1px solid white',
      marginLeft: takeIf(index, -32),
      borderRadius: size
    },
    key: index
  }, /*#__PURE__*/React__default['default'].createElement(Image, {
    src: src,
    key: index,
    size: size
  }));
};

var Card = function Card(props) {
  var style = props.style,
      avatar = props.avatar,
      title = props.title,
      titleRenderer = props.titleRenderer,
      titleStyle = props.titleStyle,
      headerStyle = props.headerStyle,
      titleContainerStyle = props.titleContainerStyle,
      description = props.description,
      onHeaderClick = props.onHeaderClick,
      subtitle = props.subtitle,
      onTitleClick = props.onTitleClick,
      className = props.className,
      cardStyle = props.cardStyle,
      childrenContainerStyle = props.childrenContainerStyle,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      borderRadius: 10,
      padding: 16
    }, style || {}),
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: avatar || title || titleRenderer || description || subtitle
  }, /*#__PURE__*/React__default['default'].createElement(ListItem, {
    avatar: avatar,
    title: title,
    titleRenderer: titleRenderer,
    style: _objectSpread2({
      margin: 0,
      padding: 0
    }, titleContainerStyle || {}),
    titleContainerStyle: headerStyle,
    titleStyle: _objectSpread2({
      fontSize: 18
    }, titleStyle || {}),
    description: description,
    subtitle: subtitle,
    onTitleClick: onTitleClick,
    onClick: onHeaderClick
  })), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: children
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.card), cardStyle || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, childrenContainerStyle || {})
  }, children))));
};

var Rate = function Rate(props) {
  var value = props.value,
      total = props.total,
      _size = props.size,
      style = props.style;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      stars = _useState2[0],
      setStars = _useState2[1];

  var size = _size || 24;
  React.useEffect(function () {
    var _stars = Array(total || 5).fill(0).map(function (i, index) {
      return index < value ? 1 : 0;
    });

    setStars(_stars);
  }, [total, value]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.center), appStyles.grid), style || {})
  }, stars.map(function (i, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      style: {
        margin: 4
      },
      key: index
    }, /*#__PURE__*/React__default['default'].createElement(Show, {
      condition: i
    }, /*#__PURE__*/React__default['default'].createElement(props.filledStarIcon, {
      style: {
        color: 'orange',
        fontSize: size
      }
    })), /*#__PURE__*/React__default['default'].createElement(Show, {
      condition: !i
    }, /*#__PURE__*/React__default['default'].createElement(props.emptyStarIcon, {
      style: {
        color: "orange",
        fontSize: size
      }
    })));
  }));
};

var Section = function Section(props) {
  var title = props.title,
      extra = props.extra,
      className = props.className,
      style = props.style,
      children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className,
    style: _objectSpread2({
      border: '1px solid #ddd',
      borderRadius: 20,
      padding: 16,
      margin: 8,
      height: '100%'
    }, style || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, title ? /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      fontWeight: 'bold',
      fontSize: 18
    }
  }, title) : null, extra), children);
};

var Selectfield = function Selectfield(props) {
  var className = props.className,
      label = props.label,
      items = props.items,
      value = props.value,
      _descriptionKey = props.descriptionKey,
      _valueKey = props.valueKey,
      _onChange = props.onChange,
      _selectFieldClassName = props.selectFieldClassName;
  var selectFieldClassName = "select-field ";
  if (_selectFieldClassName) selectFieldClassName += _selectFieldClassName;
  var valueKey = coalasce(_valueKey, "value");
  var descriptionKey = coalasce(_descriptionKey, "title");
  var onChange = React.useCallback(function (e) {
    var selectedValueKey = e.target.value;

    var _items$filter = items.filter(function (i) {
      return i[valueKey] === selectedValueKey;
    }),
        _items$filter2 = _slicedToArray(_items$filter, 1),
        selectedValue = _items$filter2[0];

    _onChange(selectedValue);
  }, [_onChange, items, valueKey]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: label
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    style: {
      fontWeight: 'bold'
    }
  }, label)), /*#__PURE__*/React__default['default'].createElement("select", {
    name: label,
    value: value || "",
    onChange: onChange,
    className: selectFieldClassName
  }, /*#__PURE__*/React__default['default'].createElement(Mapper, {
    items: items
  }, /*#__PURE__*/React__default['default'].createElement(SelectfieldOption, {
    valueKey: valueKey,
    descriptionKey: descriptionKey,
    value: value
  }))));
};

var SelectfieldOption = function SelectfieldOption(props) {
  var valueKey = props.valueKey,
      _value = props.value,
      descriptionKey = props.descriptionKey,
      rest = _objectWithoutProperties(props, ["valueKey", "value", "descriptionKey"]);

  var value = rest[valueKey];
  var description = rest[descriptionKey];
  return /*#__PURE__*/React__default['default'].createElement("option", {
    value: value,
    selected: value === _value,
    className: "select-field-option"
  }, description);
};

var Tag = function Tag(props) {
  var _color = props.color,
      className = props.className,
      description = props.description,
      generatedColor = props.generatedColor,
      _type = props.type,
      textStyle = props.textStyle,
      style = props.style,
      onClick = props.onClick,
      onTextClick = props.onTextClick,
      closeIcon = props.closeIcon,
      onClear = props.onClear,
      closeButtonClassName = props.closeButtonClassName,
      closeButtonStyle = props.closeButtonStyle,
      children = props.children;
  var type = _type || "outlined";
  var color = _color || (generatedColor ? generatedColorFromString(description) : "#cccccc");
  var textColor = type === "filled" ? '#ffffff' : color || "";
  var backgroundColor = type === "filled" ? color : "".concat(changeColor(color, 150));
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({
      padding: "8px 16px",
      borderRadius: 8,
      backgroundColor: backgroundColor,
      maxWidth: 'calc(100% - 16px)'
    }, appStyles.center), style || {}),
    className: "\n             ".concat(takeIf(onClick, "clickable", ""), "\n              ").concat(className || "", "\n              "),
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: takeIf(onTextClick, "clickable", ""),
    style: _objectSpread2({
      color: textColor,
      margin: 0,
      lineHeight: 1,
      width: '100%'
    }, textStyle || {}),
    onClick: onTextClick
  }, children), /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: onClear
  }, /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: closeIcon,
    onClick: onClear,
    className: closeButtonClassName,
    style: _objectSpread2({
      color: 'white',
      marginLeft: 8
    }, closeButtonStyle || {})
  })));
};

var Textfield = function Textfield(props) {
  var containerClassName = props.containerClassName,
      className = props.className,
      label = props.label,
      prefix = props.prefix,
      suffix = props.suffix,
      value = props.value,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onPressEnter = props.onPressEnter,
      rest = _objectWithoutProperties(props, ["containerClassName", "className", "label", "prefix", "suffix", "value", "onChange", "onBlur", "onPressEnter"]);

  var input = React.useRef(null);
  var focusInput = React.useCallback(function () {
    if (input.current) input.current.focus();
  }, [input]);
  var onKeyPress = React.useCallback(function (e) {
    if (["enter", "Enter"].indexOf(e.key) > -1) if (onPressEnter) onPressEnter(e);
  }, [onPressEnter]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: containerClassName,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React__default['default'].createElement(Show, {
    condition: label
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "no-select",
    style: {
      fontWeight: 500
    },
    onClick: focusInput
  }, label)), /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center'
    })
  }, prefix, /*#__PURE__*/React__default['default'].createElement("input", _extends({
    className: "".concat(className || "", " input"),
    style: {
      width: '100%'
    },
    value: value || "",
    ref: input,
    onChange: onChange,
    onBlur: onBlur,
    onKeyPress: onKeyPress
  }, rest)), suffix));
};

var TextListField = function TextListField(props) {
  var _value = props.value,
      _onChange = props.onChange,
      listContainerStyle = props.listContainerStyle,
      _descriptionKey = props.descriptionKey,
      valuesRenderer = props.valuesRenderer,
      textfieldContainerClassName = props.textfieldContainerClassName,
      checkButton = props.checkButton,
      label = props.label,
      checkIcon = props.checkIcon,
      valueTransformer = props.valueTransformer;
  var descriptionKey = React.useMemo(function () {
    return _descriptionKey || "name";
  }, [_descriptionKey]);

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var values = React.useMemo(function () {
    return _value || [];
  }, [_value]);
  var onSave = React.useCallback(function (e) {
    if (e) e.preventDefault();
    var newValue = valueTransformer ? valueTransformer(value) : value;
    if (!newValue[descriptionKey]) return;

    if (newValue.index !== undefined) {
      var index = newValue.index;
      delete newValue.index;
      values[index] = newValue;

      _onChange(_toConsumableArray(values));
    } else {
      _onChange([].concat(_toConsumableArray(values), [newValue]));
    }

    setValue({});
  }, [value, valueTransformer, values, _onChange, descriptionKey]);
  var onClear = React.useCallback(function (index) {
    values.splice(index, 1);

    _onChange(_toConsumableArray(values));
  }, [values, _onChange]);
  var commitChange = React.useCallback(function (index, _newValue) {
    values[index] = valueTransformer ? valueTransformer(_newValue) : _newValue;

    _onChange(_toConsumableArray(values));
  }, [values, valueTransformer, _onChange]);
  var suffix = takeIf(checkButton, checkButton({
    disabled: !value[descriptionKey],
    onClick: onSave
  }), /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: checkIcon,
    type: "primary",
    disabled: !value[descriptionKey],
    onClick: onSave
  }));
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.grid), listContainerStyle || {})
  }, values.map(function (item, index) {
    return valuesRenderer({
      item: item,
      index: index,
      onClear: onClear,
      setValue: setValue,
      onSave: onSave,
      onChange: commitChange
    });
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      marginTop: 8
    })
  }, /*#__PURE__*/React__default['default'].createElement(Textfield, {
    value: value[descriptionKey],
    containerClassName: textfieldContainerClassName,
    label: label,
    onChange: function onChange(e) {
      return setValue(_objectSpread2(_objectSpread2({}, value), {}, _defineProperty({}, descriptionKey, e.target.value)));
    },
    onPressEnter: onSave,
    onBlur: onSave,
    suffix: suffix
  })));
};

var ThreeDot = function ThreeDot(props) {
  var children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'inline-block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%'
    }
  }, /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    overlay: children
  }, children));
};

exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.ColorPicker = ColorPicker;
exports.EmptyResult = EmptyResult;
exports.Header = Header;
exports.Image = Image;
exports.IncDecField = IncDecField;
exports.ListItem = ListItem;
exports.OverflowImages = OverflowImages;
exports.Rate = Rate;
exports.Section = Section;
exports.Selectfield = Selectfield;
exports.Tag = Tag;
exports.TextListField = TextListField;
exports.Textfield = Textfield;
exports.ThreeDot = ThreeDot;
exports.appStyles = appStyles;
