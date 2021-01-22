import React, { useEffect, useCallback, useRef, useState, cloneElement, forwardRef, useImperativeHandle, useMemo } from 'react';
import { coalasce, takeIf, isNullOrUndefined, useApi, useHistory, generatedColorFromString, changeColor } from '@reactivers/hooks';
import { SwatchesPicker } from 'react-color';
import { Field as Field$1 } from 'rc-field-form';
export { default as Form, useForm } from 'rc-field-form';
import { Col } from 'react-flexbox-grid';
export { Col, Grid, Row } from 'react-flexbox-grid';
import { createPortal } from 'react-dom';
import 'rc-notification/assets/index.css';
import Notification from 'rc-notification';
import UUpload from 'rc-upload';

var Badge = function Badge(props) {
  var title = props.title,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      borderRadius: 10,
      backgroundColor: '#eee'
    }
  }, title), children);
};

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

var Show = function Show(props) {
  var condition = props.condition,
      willUnmount = props.willUnmount,
      children = props.children;
  useEffect(function () {
    return willUnmount;
  }, [willUnmount]);
  if (condition) return children;
  return null;
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
    backgroundColor: 'white'
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
  },
  threeDot: {
    whiteSpace: 'nowrap',
    width: '100%',
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  toolTip: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: "2px 6px",
    borderRadius: 10
  }
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
  var onClick = useCallback(function (e) {
    if (htmlType !== 'submit') e.preventDefault();
    if (_onClick) _onClick(e);
  }, [htmlType, _onClick]);
  if (_className) className += " ".concat(_className || "");
  return /*#__PURE__*/React.createElement("button", {
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
  }, /*#__PURE__*/React.createElement(Show, {
    condition: icon
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      marginRight: takeIf(!iconButton, 8),
      fontSize: takeIf(iconButton, 18, 12),
      width: takeIf(iconButton, "100%", 12),
      height: takeIf(iconButton, "100%", 12)
    }, appStyles.center)
  }, icon)), /*#__PURE__*/React.createElement("div", null, children || title));
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
      avatarContainerStyle = props.avatarContainerStyle,
      selected = props.selected,
      children = props.children;
  var borderBottom = takeIf(lastItem, '1px solid #eee');
  var titleContainerClassName = takeIf(onTitleClick, "clickable", "");
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      borderBottom: borderBottom,
      padding: 4
    }, style || {}),
    className: className,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      display: "flex",
      alignItems: 'center'
    }, headerContainerStyle || {})
  }, /*#__PURE__*/React.createElement(Show, {
    condition: avatar
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      display: 'flex',
      justifyContent: 'center',
      marginRight: takeIf(!!title || !!titleRenderer, 8, 0)
    }, avatarContainerStyle || {})
  }, avatar)), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      width: '100%',
      padding: 4
    }, titleContainerStyle || {}),
    onClick: onTitleClick,
    className: titleContainerClassName
  }, /*#__PURE__*/React.createElement(Show, {
    condition: titleRenderer
  }, titleRenderer), /*#__PURE__*/React.createElement(Show, {
    condition: title
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      margin: 0,
      color: takeIf(selected, "#1890ff")
    }, titleStyle || {})
  }, title)), /*#__PURE__*/React.createElement(Show, {
    condition: subtitle
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      margin: 0,
      fontSize: 10,
      color: 'black'
    }, subtitleStyle || {})
  }, subtitle)), /*#__PURE__*/React.createElement(Show, {
    condition: subtitleRenderer
  }, subtitleRenderer)), /*#__PURE__*/React.createElement(Show, {
    condition: description
  }, description)), children);
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
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      borderRadius: 10,
      padding: 16
    }, style || {}),
    className: className
  }, /*#__PURE__*/React.createElement(Show, {
    condition: avatar || title || titleRenderer || description || subtitle
  }, /*#__PURE__*/React.createElement(ListItem, {
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
  })), /*#__PURE__*/React.createElement(Show, {
    condition: children
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.card), cardStyle || {})
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({}, childrenContainerStyle || {})
  }, children))));
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
      _trigger = props.trigger,
      _alignment = props.alignment,
      children = props.children;
  var trigger = coalasce(_trigger, "click");
  var alignment = coalasce(_alignment, "bottom");
  var target = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      displayColorPicker = _useState2[0],
      setDisplayColorPicker = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var showPopover = useCallback(function () {
    setDisplayColorPicker(true);

    if (target.current) {
      var _ref = target.current.getBoundingClientRect() || {},
          left = _ref.left,
          top = _ref.top,
          bottom = _ref.bottom,
          right = _ref.right;
          _ref.height;

      switch (alignment) {
        case "bottom":
          setPosition({
            left: left,
            top: bottom
          });
          break;

        case "top":
          setPosition({
            left: left,
            bottom: top
          });
          break;

        case "left":
          setPosition({
            right: left,
            top: top
          });
          break;

        case "right":
          setPosition({
            left: right,
            top: top
          });
          break;
      }
    }
  }, [target]);
  var showPopoverClick = useCallback(function (e) {
    if (trigger === "click") showPopover();
  }, [showPopover, trigger]);
  var showPopoverMouseEnter = useCallback(function (e) {
    if (trigger === "mouse") showPopover();
  }, [showPopover, trigger]);
  var stopPropagation = useCallback(function (e) {
    e.stopPropagation();
  }, []);
  var closePopover = useCallback(function () {
    setDisplayColorPicker(false);
  }, []);
  var closePopoverClick = useCallback(function () {
    if (trigger === "click") closePopover();
  }, [target, closePopover]);
  var closePopoverMouseEnter = useCallback(function () {
    if (trigger === "mouse") closePopover();
  }, [target, closePopover]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    onClick: showPopoverClick,
    onMouseEnter: showPopoverMouseEnter,
    ref: target
  }, children), /*#__PURE__*/React.createElement(Show, {
    condition: displayColorPicker
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.cover,
    onClick: closePopoverClick,
    onMouseEnter: closePopoverMouseEnter
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, styles.popover), position),
    onClick: stopPropagation,
    onMouseEnter: stopPropagation
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
  var onChange = useCallback(function (_ref) {
    var hex = _ref.hex;

    _onChange(hex);
  }, [_onChange]);
  return /*#__PURE__*/React.createElement(Popover, {
    overlay: /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: 'white',
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("h3", null, title || "Renk"), /*#__PURE__*/React.createElement(SwatchesPicker, {
      onChange: onChange
    }))
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Show, {
    condition: children
  }, children), /*#__PURE__*/React.createElement(Show, {
    condition: !children
  }, /*#__PURE__*/React.createElement("div", {
    className: inputClassName
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({}, style || {})
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      width: '100%'
    }, appStyles.centerInColumn)
  }, /*#__PURE__*/React.createElement("div", {
    className: iconClassName,
    style: _objectSpread2(_objectSpread2({}, appStyles.center), appStyles.rounded(size))
  }, icon)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
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

var FadeAnimation = function FadeAnimation(props) {
  var style = props.style,
      _type = props.type,
      _duration = props.duration,
      _delay = props.delay,
      onAnimationComplete = props.onAnimationComplete,
      children = props.children;
  var duration = _duration || 100;
  var delay = _delay || 0;
  var type = _type || "in";

  var _useState = useState(type === "in" ? 0 : 1),
      _useState2 = _slicedToArray(_useState, 2),
      opacity = _useState2[0],
      setOpacity = _useState2[1];

  var toValue = type === "in" ? 1 : 0;
  useEffect(function () {
    if (opacity === toValue && onAnimationComplete) {
      setTimeout(function () {
        onAnimationComplete();
      }, duration + delay);
    }
  }, [opacity]);
  useEffect(function () {
    if (type === "in") {
      setOpacity(toValue);
    } else {
      setOpacity(toValue);
    }
  }, [type]);
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      opacity: opacity,
      transition: "".concat(duration),
      transitionDelay: delay
    }, style || {})
  }, children);
};

var Field = function Field(props) {
  var style = props.style,
      name = props.name,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      width: '100%',
      margin: '16px 0'
    }, style || {})
  }, /*#__PURE__*/React.createElement(FieldOrChildren, {
    name: name,
    parentProps: props
  }, children));
};

var FieldOrChildren = function FieldOrChildren(props) {
  var name = props.name,
      parentProps = props.parentProps,
      children = props.children;

  if (isNullOrUndefined(name)) {
    return children;
  }

  return /*#__PURE__*/React.createElement(Field$1, parentProps);
};

var Header = function Header(props) {
  var title = props.title,
      titleRenderer = props.titleRenderer,
      style = props.style,
      titleStyle = props.titleStyle,
      rightContent = props.rightContent;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center',
      minHeight: 48
    }, style || {})
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      flex: 1
    }, titleStyle || {})
  }, /*#__PURE__*/React.createElement(Show, {
    condition: titleRenderer
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      margin: 0
    }, appStyles.cardTitle)
  }, title))), rightContent);
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

  var _useState = useState(false),
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
  var onLoad = useCallback(function () {
    setLoaded(true);
    if (_onLoad) _onLoad();
  }, [_onLoad]);
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, size), appStyles.defaultShadow), appStyles.center), {}, {
      backgroundColor: "#eee",
      overflow: "hidden"
    }, style),
    className: className
  }, /*#__PURE__*/React.createElement(Show, {
    condition: src
  }, /*#__PURE__*/React.createElement("img", _extends({
    onLoad: onLoad,
    src: src,
    alt: alt,
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.roundedImage), style), {}, {
      display: displayImage
    })
  }, rest))), /*#__PURE__*/React.createElement(Show, {
    condition: !loaded && !hidePlaceholder
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      width: '100%',
      height: '100%'
    }, appStyles.center)
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: fontSize,
      fontWeight: 'bold',
      padding: 4
    }
  }, placeholder))));
};

var IncDecField = function IncDecField(props) {
  var value = props.value,
      onChange = props.onChange,
      minusIcon = props.minusIcon,
      plusIcon = props.plusIcon;
      props.size;
      var style = props.style,
      minusDisabled = props.minusDisabled,
      plusDisabled = props.plusDisabled,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2({
      marginVertical: 16
    }, appStyles.row), appStyles.spreadHorizontally), style || {})
  }, /*#__PURE__*/React.createElement(Button, {
    icon: minusIcon,
    disabled: minusDisabled,
    type: "primary",
    style: {
      borderRadius: 10
    },
    onClick: function onClick() {
      return onChange(value - 1);
    }
  }), children, /*#__PURE__*/React.createElement(Button, {
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

var Mapper = function Mapper(props) {
  var items = props.items,
      map = props.map,
      children = props.children;
  if (children) return (items || []).map(function (item, index) {
    return /*#__PURE__*/cloneElement(children, _objectSpread2(_objectSpread2({}, item), {}, {
      key: index
    }));
  });
  return (items || []).map(map);
};

var InfiniteScrollView = /*#__PURE__*/forwardRef(function (props, ref) {
  var style = props.style,
      endpoint = props.endpoint,
      _apiOptions = props.apiOptions,
      shimmer = props.shimmer,
      onDataChange = props.onDataChange,
      render = props.render,
      _pageSize = props.pageSize,
      empty = props.empty,
      reload = props.reload,
      filterOptions = props.filterOptions,
      onReload = props.onReload,
      loadingRenderer = props.loadingRenderer;
  var apiOptions = _apiOptions || {};
  var method = apiOptions.method,
      params = apiOptions.params,
      apiOptionsOnSuccess = apiOptions.onSuccess;
  var pageSize = _pageSize || 5;

  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      filter = _useState6[0];
      _useState6[1];

  var reloaderRef = useRef(null);

  var updateDataByIndex = function updateDataByIndex(index, item) {
    setData(function (oldData) {
      oldData[index] = item;
      return oldData;
    });
  };

  useImperativeHandle(ref, function () {
    return {
      updateDataByIndex: updateDataByIndex
    };
  });
  var containerView = useRef(null);

  var onSuccess = function onSuccess(response) {
    if (apiOptionsOnSuccess) {
      apiOptionsOnSuccess(response);
    }

    setData(function (oldData) {
      var newData = response.data.currentPage === 1 ? response.data.results || [] : [].concat(_toConsumableArray(oldData), _toConsumableArray(response.data.results || []));
      if (onDataChange) onDataChange(newData);
      return newData;
    });
  };

  var _useApi = useApi({
    onSuccess: onSuccess
  }),
      fetched = _useApi.fetched,
      firstTimeFetched = _useApi.firstTimeFetched,
      apiLoad = _useApi.load,
      response = _useApi.response;

  var _ref = response.data || {},
      pageCount = _ref.pageCount;

  var hasNextPage = (page || 1) < (pageCount || 2);
  var load = useCallback(function () {
    var hasNextPage = (page || 1) <= (pageCount || 2);
    if (!hasNextPage) return;

    var _endpoint = "".concat(endpoint, "/").concat(page, "/").concat(pageSize);

    var _method = method || (filterOptions ? "POST" : "GET");

    var _params = params || (filterOptions ? filter : undefined);

    apiLoad({
      endpoint: _endpoint,
      method: _method,
      params: _params
    });
  }, [page, pageCount, endpoint, pageSize, method, params, filterOptions, apiLoad, filter]);
  var nextPage = useCallback(function () {
    if (fetched && hasNextPage) {
      setPage(function (oldPage) {
        return oldPage + 1;
      });
    }
  }, [fetched, hasNextPage]);
  var onRefresh = useCallback(function () {
    if (page === 1) {
      load();
    } else {
      setPage(1);
    }
  }, [load, page]);
  var shouldFetchNextPage = useCallback(function () {
    if (!reloaderRef.current) return false;
    var reloaderRects = reloaderRef.current.getClientRects();
    var reloaderOffsetY = reloaderRects[0].top;
    var shouldFetch = reloaderOffsetY - 20 <= window.innerHeight;
    return shouldFetch;
  }, [reloaderRef]);
  var onScroll = useCallback(function (event) {
    if (shouldFetchNextPage()) {
      nextPage();
    }
  }, [shouldFetchNextPage, nextPage]);
  useEffect(function () {
    if (shouldFetchNextPage()) nextPage();
  }, [shouldFetchNextPage, nextPage]);
  useEffect(function () {
    load();
  }, [load]);
  useEffect(function () {
    var appLayout = document.getElementsByTagName("body")[0];
    appLayout.onscroll = onScroll;
  }, [onScroll]);
  useEffect(function () {
    if (reload) {
      onRefresh();
      onReload();
    }
  }, [onRefresh, onReload, reload]);

  if (!firstTimeFetched) {
    return shimmer ? /*#__PURE__*/React.createElement(props.shimmer, null) : /*#__PURE__*/React.createElement(props.loadingRenderer, null);
  }

  var hasData = !!data.length;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      padding: 16
    }, style || {}),
    ref: containerView
  }, /*#__PURE__*/React.createElement(Show, {
    condition: hasData
  }, /*#__PURE__*/React.createElement(Mapper, {
    items: data,
    map: function map(item, index) {
      return render(item, index, {
        page: page,
        pageSize: pageSize
      });
    }
  }), /*#__PURE__*/React.createElement(Show, {
    condition: hasNextPage
  }, /*#__PURE__*/React.createElement("div", {
    ref: reloaderRef
  }, /*#__PURE__*/React.createElement(Show, {
    condition: shimmer
  }, /*#__PURE__*/React.createElement(props.shimmer, null)), /*#__PURE__*/React.createElement(Show, {
    condition: loadingRenderer
  }, /*#__PURE__*/React.createElement(props.loadingRenderer, {
    style: {
      marginTop: 16
    }
  }))))), /*#__PURE__*/React.createElement(Show, {
    condition: !hasData
  }, empty));
});

var ModalRenderer = function ModalRenderer(props) {
  var title = props.title,
      children = props.children,
      footer = props.footer;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid #eee'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 0,
      padding: 16,
      fontSize: "1.2em",
      fontWeight: 500
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, children), /*#__PURE__*/React.createElement(Show, {
    condition: footer
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #eee'
    }
  }, footer)));
};

var Overlay = function Overlay(props) {
  var _visible = props.visible,
      _onClick = props.onClick,
      children = props.children;

  var _useState = useState(_visible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  useEffect(function () {
    setTimeout(function () {
      setVisible(_visible);
    }, 1);
  }, [_visible]);
  var onClick = useCallback(function (e) {
    setVisible(false);
    setTimeout(function () {
      _onClick(e);
    }, 400);
  }, [_onClick]);
  if (!_visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: _objectSpread2({
      position: 'fixed',
      zIndex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      inset: 0,
      width: '100%',
      height: '100%',
      transition: "0.4s",
      opacity: takeIf(visible, 1, 0),
      display: takeIf(visible, 'block', 'none'),
      overflow: 'auto',
      pointerEvents: takeIf(visible, "initial", "none")
    }, appStyles.center)
  }, /*#__PURE__*/React.createElement(Col, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    xs: 10,
    sm: 10,
    md: 8,
    lg: 8,
    xl: 6,
    style: {
      backgroundColor: 'white',
      position: 'absolute',
      width: takeIf(visible, "100%", "0%"),
      overflow: 'auto',
      transition: '0.4s',
      maxHeight: takeIf(visible, "90%", "0%")
    }
  }, children));
};

var Modal = function Modal(props) {
  var visible = props.visible;
      props.destroyOnClose;
      var onClose = props.onClose,
      rest = _objectWithoutProperties(props, ["visible", "destroyOnClose", "onClose"]);

  return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Overlay, {
    onClick: onClose,
    visible: visible
  }, /*#__PURE__*/React.createElement(ModalRenderer, rest)), document.body);
};

var notification = null;
Notification.newInstance({
  style: {
    right: 32,
    top: 32
  }
}, function (_notification) {
  notification = _notification;
});
var notificationColors = {
  success: 'green',
  error: 'red',
  warning: 'orange',
  info: 'blue'
};

var NotificationRenderer = function NotificationRenderer(props) {
  var type = props.type,
      title = props.title,
      message = props.message,
      icon = props.icon;
  var color = notificationColors[type];
  return /*#__PURE__*/React.createElement(ListItem, {
    style: {
      borderLeft: "5px solid ".concat(color),
      minWidth: 250,
      padding: 8
    },
    avatar: icon,
    avatarContainerStyle: {
      color: notificationColors[type],
      fontSize: 20,
      marginRight: 4
    },
    titleStyle: {
      fontWeight: 'bold'
    },
    title: title
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginLeft: 28,
      fontSize: 12
    }
  }, message));
};

var notificationPusher = function notificationPusher(props) {
  var duration = props.duration,
      title = props.title,
      message = props.message,
      icon = props.icon,
      type = props.type,
      rest = _objectWithoutProperties(props, ["duration", "title", "message", "icon", "type"]);

  notification.notice(_objectSpread2({
    duration: duration || 5,
    content: /*#__PURE__*/React.createElement(NotificationRenderer, {
      title: title,
      message: message,
      type: type,
      icon: icon
    }),
    style: {
      padding: 0
    }
  }, rest));
};

notification.success = function (props) {
  notificationPusher(_objectSpread2(_objectSpread2({}, props), {}, {
    type: "success"
  }));
};

notification.error = function (props) {
  notificationPusher(_objectSpread2(_objectSpread2({}, props), {}, {
    type: "error"
  }));
};

notification.warning = function (props) {
  notificationPusher(_objectSpread2(_objectSpread2({}, props), {}, {
    type: "warning"
  }));
};

notification.info = function (props) {
  notificationPusher(_objectSpread2(_objectSpread2({}, props), {}, {
    type: "info"
  }));
};

var notification$1 = notification;

var OverflowImages = function OverflowImages(props) {
  var images = props.images,
      _maxCount = props.maxCount,
      size = props.size;
  var maxCount = _maxCount || 3;
  var overflowItemsCount = images.length - maxCount;
  var count = takeIf(overflowItemsCount > 0, "+".concat(overflowItemsCount));
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.center), {}, {
      flexDirection: 'column',
      marginRight: 8
    })
  }, /*#__PURE__*/React.createElement(Badge, {
    title: count
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({}, appStyles.center)
  }, /*#__PURE__*/React.createElement(Mapper, {
    items: images.filter(function (_, index) {
      return index < maxCount;
    })
  }, /*#__PURE__*/React.createElement(OverflowImage, {
    size: size
  })))));
};

var OverflowImage = function OverflowImage(props) {
  var src = props.src,
      index = props.index,
      size = props.size;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid white',
      marginLeft: takeIf(index, -32),
      borderRadius: size
    },
    key: index
  }, /*#__PURE__*/React.createElement(Image, {
    src: src,
    key: index,
    size: size
  }));
};

var Rate = function Rate(props) {
  var value = props.value,
      total = props.total,
      _size = props.size,
      style = props.style;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      stars = _useState2[0],
      setStars = _useState2[1];

  var size = _size || 24;
  useEffect(function () {
    var _stars = Array(total || 5).fill(0).map(function (i, index) {
      return index < value ? 1 : 0;
    });

    setStars(_stars);
  }, [total, value]);
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appStyles.center), appStyles.grid), style || {})
  }, stars.map(function (i, index) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 4
      },
      key: index
    }, /*#__PURE__*/React.createElement(Show, {
      condition: i
    }, /*#__PURE__*/React.createElement(props.filledStarIcon, {
      style: {
        color: 'orange',
        fontSize: size
      }
    })), /*#__PURE__*/React.createElement(Show, {
      condition: !i
    }, /*#__PURE__*/React.createElement(props.emptyStarIcon, {
      style: {
        color: "orange",
        fontSize: size
      }
    })));
  }));
};

var Redirect = function Redirect(props) {
  var mode = props.mode,
      _redirectURL = props.redirectURL;
  var history = useHistory();
  var redirectURL = _redirectURL || "/";
  useEffect(function () {
    if (mode === "replace") {
      window.location.href = redirectURL;
    } else {
      history.push(redirectURL);
    }
  }, [mode, history, redirectURL]);
  return null;
};

var Section = function Section(props) {
  var title = props.title,
      extra = props.extra,
      className = props.className,
      style = props.style,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: _objectSpread2({
      border: '1px solid #ddd',
      borderRadius: 20,
      padding: 16,
      margin: 8,
      height: '100%'
    }, style || {})
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
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
  var onChange = useCallback(function (e) {
    var selectedValueKey = e.target.value;

    var _items$filter = items.filter(function (i) {
      return i[valueKey] === selectedValueKey;
    }),
        _items$filter2 = _slicedToArray(_items$filter, 1),
        selectedValue = _items$filter2[0];

    _onChange(selectedValue);
  }, [_onChange, items, valueKey]);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(Show, {
    condition: label
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 'bold'
    }
  }, label)), /*#__PURE__*/React.createElement("select", {
    name: label,
    value: value || "",
    onChange: onChange,
    className: selectFieldClassName
  }, /*#__PURE__*/React.createElement(Mapper, {
    items: items
  }, /*#__PURE__*/React.createElement(SelectfieldOption, {
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
  return /*#__PURE__*/React.createElement("option", {
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
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({
      padding: "8px 16px",
      borderRadius: 8,
      backgroundColor: backgroundColor,
      maxWidth: 'calc(100% - 16px)'
    }, appStyles.center), style || {}),
    className: "\n             ".concat(takeIf(onClick, "clickable", ""), "\n              ").concat(className || "", "\n              "),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: takeIf(onTextClick, "clickable", ""),
    style: _objectSpread2({
      color: textColor,
      margin: 0,
      lineHeight: 1,
      width: '100%'
    }, textStyle || {}),
    onClick: onTextClick
  }, children), /*#__PURE__*/React.createElement(Show, {
    condition: onClear
  }, /*#__PURE__*/React.createElement(Button, {
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

  var input = useRef(null);
  var focusInput = useCallback(function () {
    if (input.current) input.current.focus();
  }, [input]);
  var onKeyPress = useCallback(function (e) {
    if (["enter", "Enter"].indexOf(e.key) > -1) if (onPressEnter) onPressEnter(e);
  }, [onPressEnter]);
  return /*#__PURE__*/React.createElement("div", {
    className: containerClassName,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Show, {
    condition: label
  }, /*#__PURE__*/React.createElement("p", {
    className: "no-select",
    style: {
      fontWeight: 500
    },
    onClick: focusInput
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      alignItems: 'center'
    })
  }, prefix, /*#__PURE__*/React.createElement("input", _extends({
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
  var descriptionKey = useMemo(function () {
    return _descriptionKey || "name";
  }, [_descriptionKey]);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var values = useMemo(function () {
    return _value || [];
  }, [_value]);
  var onSave = useCallback(function (e) {
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
  var onClear = useCallback(function (index) {
    values.splice(index, 1);

    _onChange(_toConsumableArray(values));
  }, [values, _onChange]);
  var commitChange = useCallback(function (index, _newValue) {
    values[index] = valueTransformer ? valueTransformer(_newValue) : _newValue;

    _onChange(_toConsumableArray(values));
  }, [values, valueTransformer, _onChange]);
  var suffix = takeIf(checkButton, checkButton({
    disabled: !value[descriptionKey],
    onClick: onSave
  }), /*#__PURE__*/React.createElement(Button, {
    icon: checkIcon,
    type: "primary",
    disabled: !value[descriptionKey],
    onClick: onSave
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, appStyles.row), {}, {
      marginTop: 8
    })
  }, /*#__PURE__*/React.createElement(Textfield, {
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
  var title = props.title,
      children = props.children;
  return /*#__PURE__*/React.createElement(Popover, {
    trigger: "mouse",
    alignment: "top",
    overlay: /*#__PURE__*/React.createElement("div", {
      style: appStyles.toolTip
    }, title || children)
  }, /*#__PURE__*/React.createElement("div", {
    style: appStyles.threeDot
  }, children));
};

var Upload = function Upload(props) {
  var style = props.style,
      rest = _objectWithoutProperties(props, ["style"]);

  return /*#__PURE__*/React.createElement(UUpload, _extends({
    style: _objectSpread2({
      outline: 'none'
    }, style || {})
  }, rest));
};

export { Badge, Button, Card, ColorPicker, EmptyResult, FadeAnimation, Field, Header, Image, IncDecField, InfiniteScrollView as InfiniteScroll, ListItem, Mapper, Modal, OverflowImages, Popover, Rate, Redirect, Section, Selectfield, Show, Tag, TextListField, Textfield, ThreeDot, Upload, appStyles, notification$1 as notification, notificationPusher };
