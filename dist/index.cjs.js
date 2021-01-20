'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@reactivers/hooks');
var antd = require('antd');
var reactColor = require('react-color');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

  var size = hooks.takeIf(_size, {
    width: _size,
    height: _size,
    borderRadius: '50%'
  }, {});
  var placeholder = hooks.coalasce(_placheholder, "P");
  var fontSize = hooks.takeIf(isNaN(_size / 2), 24, _size / 2);
  var displayImage = hooks.takeIf(loaded, undefined, 'none');
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
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: src
  }, /*#__PURE__*/React__default['default'].createElement("img", _extends({
    onLoad: onLoad,
    src: src,
    alt: alt,
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.roundedImage), style), {}, {
      display: displayImage
    })
  }, rest))), /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
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

var Button = function Button(props) {
  var style = props.style,
      icon = props.icon,
      title = props.title,
      _className = props.className,
      _iconSize = props.iconSize,
      _onClick = props.onClick,
      _htmlType = props.htmlType,
      children = props.children;
  var iconSize = hooks.coalasce(_iconSize, 32);
  var htmlType = hooks.coalasce(_htmlType, "button");
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
      width: hooks.takeIf(iconButton, iconSize),
      minWidth: hooks.takeIf(iconButton, iconSize),
      height: hooks.takeIf(iconButton, iconSize),
      minHeight: hooks.takeIf(iconButton, iconSize),
      borderRadius: hooks.takeIf(iconButton, "50%")
    }, style || {}),
    type: htmlType,
    onClick: onClick,
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: icon
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      marginRight: hooks.takeIf(!iconButton, 8),
      fontSize: hooks.takeIf(iconButton, 18, 12),
      width: hooks.takeIf(iconButton, "100%", 12),
      height: hooks.takeIf(iconButton, "100%", 12)
    }, appStyles.center)
  }, icon)), /*#__PURE__*/React__default['default'].createElement("div", null, children || title));
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
  return /*#__PURE__*/React__default['default'].createElement(antd.Popover, {
    content: /*#__PURE__*/React__default['default'].createElement(reactColor.SwatchesPicker, {
      onChange: onChange
    }),
    title: title || "Renk"
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: children
  }, children), /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
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
  }))));
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
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
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
  var borderBottom = hooks.takeIf(lastItem, '1px solid #eee');
  var titleContainerClassName = hooks.takeIf(onTitleClick, "clickable", "");
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
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: avatar
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginRight: hooks.takeIf(!!title || !!titleRenderer, 8, 0)
    }
  }, avatar)), /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      width: '100%',
      padding: 4
    }, titleContainerStyle || {}),
    onClick: onTitleClick,
    className: titleContainerClassName
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: titleRenderer
  }, titleRenderer), /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: title
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0,
      color: hooks.takeIf(selected, "#1890ff")
    }, titleStyle || {})
  }, title)), /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: subtitle
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      margin: 0,
      fontSize: 10,
      color: 'black'
    }, subtitleStyle || {})
  }, subtitle)), /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: subtitleRenderer
  }, subtitleRenderer)), /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: description
  }, description)), children);
};

var OverflowImages = function OverflowImages(props) {
  var images = props.images,
      _maxCount = props.maxCount,
      size = props.size;
  var maxCount = _maxCount || 3;
  var overflowItemsCount = images.length - maxCount;
  var count = hooks.takeIf(overflowItemsCount > 0, "+".concat(overflowItemsCount));
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.center), {}, {
      flexDirection: 'column',
      marginRight: 8
    })
  }, /*#__PURE__*/React__default['default'].createElement(antd.Badge, {
    count: count
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, appStyles.center)
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Mapper, {
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
      marginLeft: hooks.takeIf(index, -32),
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
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
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
  })), /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
    condition: children
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.card), cardStyle || {})
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({}, childrenContainerStyle || {})
  }, children))));
};

var Option = antd.Select.Option;
var QueryAutoComplete = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
      onChange = props.onChange,
      getOptions = props.getOptions,
      valueKey = props.valueKey,
      labelKey = props.labelKey,
      _minLength = props.minLength,
      cache = props.cache,
      rest = _objectWithoutProperties(props, ["value", "onChange", "getOptions", "valueKey", "labelKey", "minLength", "cache"]);

  var minLength = _minLength === undefined ? 3 : _minLength;

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      response = _useState4[0],
      setResponse = _useState4[1];

  var _useApi = hooks.useApi({
    initialValue: []
  }),
      fetched = _useApi.fetched,
      fetching = _useApi.fetching,
      load = _useApi.load;

  var _useLocalStorage = hooks.useLocalStorage("caches", "{}", true),
      getCache = _useLocalStorage.getItem,
      setCache = _useLocalStorage.setItem;

  var searchStringLength = (search || "").length;
  var shouldSearch = searchStringLength >= minLength;
  React.useEffect(function () {
    if (!search) {
      setSearch(value);
    }
  }, [value, search, setSearch]);
  React.useEffect(function () {
    if (shouldSearch) {
      var apiOptions = getOptions(search);

      if (cache) {
        var oldCaches = getCache();
        var cacheValues = JSON.parse(oldCaches || "{}");
        var cacheKey = JSON.stringify(apiOptions);
        var existCache = cacheValues[cacheKey];

        if (existCache) {
          setResponse(existCache);
        } else {
          load(_objectSpread2(_objectSpread2({}, apiOptions), {}, {
            onSuccess: function onSuccess(response) {
              setCache(JSON.stringify(_objectSpread2(_objectSpread2({}, cacheValues), {}, _defineProperty({}, cacheKey, response))));
              setResponse(response);
            }
          }));
        }
      } else {
        load(_objectSpread2(_objectSpread2({}, apiOptions), {}, {
          onSuccess: setResponse
        }));
      }
    }
  }, [shouldSearch, searchStringLength, getOptions, cache, search]);

  var onSelect = function onSelect(e, option) {
    onChange(e);
  };

  var getACOptions = function getACOptions() {
    return (response || []).map(function (i) {
      return {
        value: i[valueKey],
        label: i[labelKey]
      };
    });
  };

  var options = getACOptions();
  return /*#__PURE__*/React__default['default'].createElement(antd.Select, _extends({}, rest, {
    options: options,
    showSearch: true,
    value: value,
    loading: fetching,
    onSelect: onSelect,
    ref: ref,
    onSearch: setSearch,
    optionFilterProp: "label",
    defaultActiveFirstOption: true,
    notFoundContent: fetched && !options.length ? "Bulunamadı" : null
  }), options.map(function (option, index) {
    return /*#__PURE__*/React__default['default'].createElement(Option, {
      key: index,
      value: option.value
    }, option.label);
  }));
});

var Option$1 = antd.Select.Option;
var SelectItemsRenderer = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var items = props.items,
      placeHolder = props.placeHolder,
      value = props.value,
      onChange = props.onChange,
      onSearch = props.onSearch,
      defaultSelectFirstValue = props.defaultSelectFirstValue,
      mode = props.mode,
      filterOption = props.filterOption,
      _valueField = props.valueField,
      labelInValue = props.labelInValue,
      _descriptionField = props.descriptionField,
      rest = _objectWithoutProperties(props, ["items", "placeHolder", "value", "onChange", "onSearch", "defaultSelectFirstValue", "mode", "filterOption", "valueField", "labelInValue", "descriptionField"]);

  var valueField = _valueField || 'id';
  var descriptionField = _descriptionField || 'name';
  React.useEffect(function () {
    if (defaultSelectFirstValue) {
      if (items.length && !value) {
        onChange(items[0][valueField]);
      }
    }
  }, [defaultSelectFirstValue, items, valueField, value]);

  var getValue = function getValue() {
    if (labelInValue) {
      if (mode === "multiple") return (value || []).map(function (i) {
        return {
          value: i.value || i[valueField],
          label: i.label || i[descriptionField],
          key: i.key || i[valueField]
        };
      });
      return {
        value: value[valueField],
        label: value[descriptionField]
      };
    }

    return value;
  };

  return /*#__PURE__*/React__default['default'].createElement(antd.Select, _extends({}, rest, {
    mode: mode,
    labelInValue: labelInValue,
    value: getValue(),
    ref: ref,
    showSearch: true,
    placeholder: placeHolder,
    optionFilterProp: "children",
    onChange: onChange,
    onSearch: onSearch
  }), (items || []).map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement(Option$1, {
      key: index,
      value: item[valueField]
    }, item[descriptionField]);
  }));
});

var QuerySelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var url = props.url,
      options = props.options,
      rest = _objectWithoutProperties(props, ["url", "options"]);

  var _useApi = hooks.useApi(),
      fetched = _useApi.fetched,
      load = _useApi.load,
      response = _useApi.response;

  React.useEffect(function () {
    if (url) {
      load(_objectSpread2({
        endpoint: url
      }, options));
    }
  }, [url, load, options]);
  React.useEffect(function () {
    if (fetched && response) {
      setItems(response.data);
    }
  }, [fetched, response]);
  return /*#__PURE__*/React__default['default'].createElement(SelectItemsRenderer, _extends({
    items: items,
    ref: ref
  }, rest));
});

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
    }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
      condition: i
    }, /*#__PURE__*/React__default['default'].createElement(props.filledStarIcon, {
      style: {
        color: 'orange',
        fontSize: size
      }
    })), /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
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
  var valueKey = hooks.coalasce(_valueKey, "value");
  var descriptionKey = hooks.coalasce(_descriptionKey, "title");
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
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
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
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Mapper, {
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
  var color = _color || (generatedColor ? hooks.generatedColorFromString(description) : "#cccccc");
  var textColor = type === "filled" ? '#ffffff' : color || "";
  var backgroundColor = type === "filled" ? color : "".concat(hooks.changeColor(color, 150));
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2(_objectSpread2({
      padding: "8px 16px",
      borderRadius: 8,
      backgroundColor: backgroundColor,
      maxWidth: 'calc(100% - 16px)'
    }, appStyles.center), style || {}),
    className: "\n             ".concat(hooks.takeIf(onClick, "clickable", ""), "\n              ").concat(className || "", "\n              "),
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: hooks.takeIf(onTextClick, "clickable", ""),
    style: _objectSpread2({
      color: textColor,
      margin: 0,
      lineHeight: 1,
      width: '100%'
    }, textStyle || {}),
    onClick: onTextClick
  }, children), /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
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
  }, /*#__PURE__*/React__default['default'].createElement(hooks.Show, {
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
  var suffix = hooks.takeIf(checkButton, checkButton({
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
  }, /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
    title: children
  }, children));
};

exports.Button = Button;
exports.Card = Card;
exports.ColorPicker = ColorPicker;
exports.EmptyResult = EmptyResult;
exports.Header = Header;
exports.Image = Image;
exports.IncDecField = IncDecField;
exports.ListItem = ListItem;
exports.OverflowImages = OverflowImages;
exports.QueryAutoComplete = QueryAutoComplete;
exports.QuerySelect = QuerySelect;
exports.Rate = Rate;
exports.Section = Section;
exports.Selectfield = Selectfield;
exports.Tag = Tag;
exports.TextListField = TextListField;
exports.Textfield = Textfield;
exports.ThreeDot = ThreeDot;
exports.appStyles = appStyles;
