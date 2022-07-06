'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');
var useUtils = require('@reactivers/use-utils');
var reactColor = require('react-color');
var rcFieldForm = require('rc-field-form');
var reactFlexboxGrid = require('react-flexbox-grid');
var reactDom = require('react-dom');
require('rc-notification/assets/index.css');
var Notification = require('rc-notification');
var UUpload = require('rc-upload');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
var rcFieldForm__default = /*#__PURE__*/_interopDefaultLegacy(rcFieldForm);
var Notification__default = /*#__PURE__*/_interopDefaultLegacy(Notification);
var UUpload__default = /*#__PURE__*/_interopDefaultLegacy(UUpload);

const Badge = props => {
  const {
    title,
    children
  } = props;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      borderRadius: 10,
      backgroundColor: '#eee'
    }
  }, title), children);
};

const appStyles = {
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
  paddingHorizontal: value => ({
    paddingLeft: value,
    paddingRight: value
  }),
  paddingVertical: value => ({
    paddingTop: value,
    paddingBottom: value
  }),
  marginHorizontal: value => ({
    marginLeft: value,
    marginRight: value
  }),
  marginVertical: value => ({
    marginTop: value,
    marginBottom: value
  }),
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
  rounded: size => ({
    width: size,
    height: size,
    borderRadius: size * 2
  }),
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

const Show = props => {
  const {
    condition,
    willUnmount,
    children
  } = props;
  React$1.useEffect(() => {
    return willUnmount;
  }, [willUnmount]);
  if (condition) return children;
  return null;
};

const Button = props => {
  const {
    style,
    icon,
    title,
    className: _className,
    iconSize: _iconSize,
    onClick: _onClick,
    htmlType: _htmlType,
    children
  } = props;
  const iconSize = useUtils.coalasce(_iconSize, 32);
  const htmlType = useUtils.coalasce(_htmlType, "button");
  const iconButton = !children && !title;
  let className = `no-select `;
  const onClick = React$1.useCallback(e => {
    if (htmlType !== 'submit') e.preventDefault();
    if (_onClick) _onClick(e);
  }, [htmlType, _onClick]);
  if (_className) className += ` ${_className || ""}`;
  return /*#__PURE__*/React.createElement("button", {
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      width: useUtils.takeIf(iconButton, iconSize),
      minWidth: useUtils.takeIf(iconButton, iconSize),
      height: useUtils.takeIf(iconButton, iconSize),
      minHeight: useUtils.takeIf(iconButton, iconSize),
      borderRadius: useUtils.takeIf(iconButton, "50%"),
      ...(style || {})
    },
    type: htmlType,
    onClick: onClick,
    className: className
  }, /*#__PURE__*/React.createElement(Show, {
    condition: icon
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginRight: useUtils.takeIf(!iconButton, 8),
      fontSize: useUtils.takeIf(iconButton, 18, 12),
      width: useUtils.takeIf(iconButton, "100%", 12),
      height: useUtils.takeIf(iconButton, "100%", 12),
      ...appStyles.center
    }
  }, icon)), /*#__PURE__*/React.createElement("div", null, children || title));
};

const ListItem = props => {
  const {
    style,
    avatar,
    title,
    lastItem,
    titleRenderer,
    description,
    className,
    titleStyle,
    subtitleStyle,
    titleContainerStyle,
    onClick,
    onTitleClick,
    subtitle,
    subtitleRenderer,
    headerContainerStyle,
    avatarContainerStyle,
    selected,
    children
  } = props;
  const borderBottom = useUtils.takeIf(lastItem, '1px solid #eee');
  const titleContainerClassName = useUtils.takeIf(onTitleClick, "clickable", "");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom,
      padding: 4,
      ...(style || {})
    },
    className: className,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: 'center',
      ...(headerContainerStyle || {})
    }
  }, /*#__PURE__*/React.createElement(Show, {
    condition: avatar
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginRight: useUtils.takeIf(!!title || !!titleRenderer, 8, 0),
      ...(avatarContainerStyle || {})
    }
  }, avatar)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      padding: 4,
      ...(titleContainerStyle || {})
    },
    onClick: onTitleClick,
    className: titleContainerClassName
  }, /*#__PURE__*/React.createElement(Show, {
    condition: titleRenderer
  }, titleRenderer), /*#__PURE__*/React.createElement(Show, {
    condition: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 0,
      color: useUtils.takeIf(selected, "#1890ff"),
      ...(titleStyle || {})
    }
  }, title)), /*#__PURE__*/React.createElement(Show, {
    condition: subtitle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 0,
      fontSize: 10,
      color: 'black',
      ...(subtitleStyle || {})
    }
  }, subtitle)), /*#__PURE__*/React.createElement(Show, {
    condition: subtitleRenderer
  }, subtitleRenderer)), /*#__PURE__*/React.createElement(Show, {
    condition: description
  }, description)), children);
};

const Card = props => {
  const {
    style,
    avatar,
    title,
    titleRenderer,
    titleStyle,
    headerStyle,
    titleContainerStyle,
    description,
    onHeaderClick,
    subtitle,
    onTitleClick,
    className,
    cardStyle,
    childrenContainerStyle,
    children
  } = props;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      borderRadius: 10,
      padding: 16,
      ...(style || {})
    },
    className: className
  }, /*#__PURE__*/React__default["default"].createElement(Show, {
    condition: avatar || title || titleRenderer || description || subtitle
  }, /*#__PURE__*/React__default["default"].createElement(ListItem, {
    avatar: avatar,
    title: title,
    titleRenderer: titleRenderer,
    style: {
      margin: 0,
      padding: 0,
      ...(titleContainerStyle || {})
    },
    titleContainerStyle: headerStyle,
    titleStyle: {
      fontSize: 18,
      ...(titleStyle || {})
    },
    description: description,
    subtitle: subtitle,
    onTitleClick: onTitleClick,
    onClick: onHeaderClick
  })), /*#__PURE__*/React__default["default"].createElement(Show, {
    condition: children
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: { ...appStyles.card,
      ...(cardStyle || {})
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: { ...(childrenContainerStyle || {})
    }
  }, children))));
};

const styles = {
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

const Popover = props => {
  const {
    overlay,
    trigger: _trigger,
    alignment: _alignment,
    children
  } = props;
  const trigger = useUtils.coalasce(_trigger, "click");
  const alignment = useUtils.coalasce(_alignment, "bottom");
  const target = React$1.useRef(null);
  const [displayColorPicker, setDisplayColorPicker] = React$1.useState(false);
  const [position, setPosition] = React$1.useState({});
  const showPopover = React$1.useCallback(() => {
    setDisplayColorPicker(true);

    if (target.current) {
      const {
        left,
        top,
        bottom,
        right,
        height
      } = target.current.getBoundingClientRect() || {};

      switch (alignment) {
        case "bottom":
          setPosition({
            left,
            top: bottom
          });
          break;

        case "top":
          setPosition({
            left,
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
  const showPopoverClick = React$1.useCallback(e => {
    if (trigger === "click") showPopover();
  }, [showPopover, trigger]);
  const showPopoverMouseEnter = React$1.useCallback(e => {
    if (trigger === "mouse") showPopover();
  }, [showPopover, trigger]);
  const stopPropagation = React$1.useCallback(e => {
    e.stopPropagation();
  }, []);
  const closePopover = React$1.useCallback(() => {
    setDisplayColorPicker(false);
  }, []);
  const closePopoverClick = React$1.useCallback(() => {
    if (trigger === "click") closePopover();
  }, [target, closePopover]);
  const closePopoverMouseEnter = React$1.useCallback(() => {
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
    style: { ...styles.popover,
      ...position
    },
    onClick: stopPropagation,
    onMouseEnter: stopPropagation
  }, overlay))));
};

const ColorPicker = props => {
  const {
    label,
    value: _value,
    onChange: _onChange,
    title,
    inputClassName,
    colorClassName,
    children
  } = props;
  const onChange = React$1.useCallback(_ref => {
    let {
      hex
    } = _ref;

    _onChange(hex);
  }, [_onChange]);
  return /*#__PURE__*/React__default["default"].createElement(Popover, {
    overlay: /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        backgroundColor: 'white',
        padding: 16
      }
    }, /*#__PURE__*/React__default["default"].createElement("h3", null, title || "Renk"), /*#__PURE__*/React__default["default"].createElement(reactColor.SwatchesPicker, {
      onChange: onChange
    }))
  }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Show, {
    condition: children
  }, children), /*#__PURE__*/React__default["default"].createElement(Show, {
    condition: !children
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: inputClassName
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React__default["default"].createElement("div", {
    className: colorClassName,
    style: {
      backgroundColor: _value,
      height: 32,
      width: '100%'
    }
  })))));
};

const EmptyResult = props => {
  const {
    icon,
    title,
    style,
    iconClassName,
    size: _size
  } = props;
  const size = _size || 120;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: { ...(style || {})
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      ...appStyles.centerInColumn
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: iconClassName,
    style: { ...appStyles.center,
      ...appStyles.rounded(size)
    }
  }, icon)), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("p", {
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

const FadeAnimation = props => {
  const {
    style,
    type: _type,
    duration: _duration,
    delay: _delay,
    onAnimationComplete,
    children
  } = props;
  const duration = _duration || 100;
  const delay = _delay || 0;
  const type = _type || "in";
  const [opacity, setOpacity] = React$1.useState(type === "in" ? 0 : 1);
  const toValue = type === "in" ? 1 : 0;
  React$1.useEffect(() => {
    if (opacity === toValue && onAnimationComplete) {
      setTimeout(() => {
        onAnimationComplete();
      }, duration + delay);
    }
  }, [opacity]);
  React$1.useEffect(() => {
    if (type === "in") {
      setOpacity(toValue);
    } else {
      setOpacity(toValue);
    }
  }, [type]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      opacity: opacity,
      transition: `${duration}`,
      transitionDelay: delay,
      ...(style || {})
    }
  }, children);
};

const Field = props => {
  const {
    style,
    name,
    children
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      margin: '16px 0',
      ...(style || {})
    }
  }, /*#__PURE__*/React.createElement(FieldOrChildren, {
    name: name,
    parentProps: props
  }, children));
};

const FieldOrChildren = props => {
  const {
    name,
    parentProps,
    children
  } = props;

  if (useUtils.isNullOrUndefined(name)) {
    return children;
  }

  return /*#__PURE__*/React.createElement(rcFieldForm.Field, parentProps);
};

const Header = props => {
  const {
    title,
    titleRenderer,
    style,
    titleStyle,
    rightContent
  } = props;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: { ...appStyles.row,
      alignItems: 'center',
      minHeight: 48,
      ...(style || {})
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      flex: 1,
      ...(titleStyle || {})
    }
  }, /*#__PURE__*/React__default["default"].createElement(Show, {
    condition: titleRenderer
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      margin: 0,
      ...appStyles.cardTitle
    }
  }, title))), rightContent);
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

const Image = props => {
  const {
    style,
    className,
    hidePlaceholder,
    src,
    alt,
    onLoad: _onLoad,
    placeholder: _placheholder,
    size: _size,
    ...rest
  } = props;
  const [loaded, setLoaded] = React$1.useState(false);
  const size = useUtils.takeIf(_size, {
    width: _size,
    height: _size,
    borderRadius: '50%'
  }, {});
  const placeholder = useUtils.coalasce(_placheholder, "P");
  const fontSize = useUtils.takeIf(isNaN(_size / 2), 24, _size / 2);
  const displayImage = useUtils.takeIf(loaded, undefined, 'none');
  const onLoad = React$1.useCallback(() => {
    setLoaded(true);
    if (_onLoad) _onLoad();
  }, [_onLoad]);
  return /*#__PURE__*/React.createElement("div", {
    style: { ...size,
      ...appStyles.defaultShadow,
      ...appStyles.center,
      backgroundColor: "#eee",
      overflow: "hidden",
      ...style
    },
    className: className
  }, /*#__PURE__*/React.createElement(Show, {
    condition: src
  }, /*#__PURE__*/React.createElement("img", _extends({
    onLoad: onLoad,
    src: src,
    alt: alt,
    style: { ...appStyles.roundedImage,
      ...style,
      display: displayImage
    }
  }, rest))), /*#__PURE__*/React.createElement(Show, {
    condition: !loaded && !hidePlaceholder
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      ...appStyles.center
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize,
      fontWeight: 'bold',
      padding: 4
    }
  }, placeholder))));
};

const IncDecField = props => {
  const {
    value,
    onChange,
    minusIcon,
    plusIcon,
    size: _size,
    style,
    minusDisabled,
    plusDisabled,
    children
  } = props;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      marginVertical: 16,
      ...appStyles.row,
      ...appStyles.spreadHorizontally,
      ...(style || {})
    }
  }, /*#__PURE__*/React__default["default"].createElement(Button, {
    icon: minusIcon,
    disabled: minusDisabled,
    type: "primary",
    style: {
      borderRadius: 10
    },
    onClick: () => onChange(value - 1)
  }), children, /*#__PURE__*/React__default["default"].createElement(Button, {
    icon: plusIcon,
    disabled: plusDisabled,
    type: "primary",
    style: {
      borderRadius: 10
    },
    onClick: () => onChange(value + 1)
  }));
};

const Mapper = props => {
  const {
    items,
    map,
    children
  } = props;
  if (children) return (items || []).map((item, index) => {
    return /*#__PURE__*/React$1.cloneElement(children, { ...item,
      key: index
    });
  });
  return (items || []).map(map);
};

const InfiniteScrollView = /*#__PURE__*/React$1.forwardRef((props, ref) => {
  const {
    style,
    endpoint,
    apiOptions: _apiOptions,
    shimmer,
    onDataChange,
    render,
    pageSize: _pageSize,
    empty,
    reload,
    filterOptions,
    onReload,
    loadingRenderer
  } = props;
  const apiOptions = _apiOptions || {};
  const {
    method,
    params,
    onSuccess: apiOptionsOnSuccess
  } = apiOptions;
  const pageSize = _pageSize || 5;
  const [page, setPage] = React$1.useState(1);
  const [data, setData] = React$1.useState([]);
  const [filter, setFilter] = React$1.useState({});
  const reloaderRef = React$1.useRef(null);

  const updateDataByIndex = (index, item) => {
    setData(oldData => {
      oldData[index] = item;
      return oldData;
    });
  };

  React$1.useImperativeHandle(ref, () => ({
    updateDataByIndex
  }));
  const containerView = React$1.useRef(null);

  const onSuccess = response => {
    if (apiOptionsOnSuccess) {
      apiOptionsOnSuccess(response);
    }

    setData(oldData => {
      const newData = response.data.currentPage === 1 ? response.data.results || [] : [...oldData, ...(response.data.results || [])];
      if (onDataChange) onDataChange(newData);
      return newData;
    });
  };

  const {
    fetched,
    firstTimeFetched,
    load: apiLoad,
    response
  } = useUtils.useApi({
    onSuccess
  });
  const {
    pageCount
  } = response.data || {};
  const hasNextPage = (page || 1) < (pageCount || 2);
  const load = React$1.useCallback(() => {
    const hasNextPage = (page || 1) <= (pageCount || 2);
    if (!hasNextPage) return;
    const _endpoint = `${endpoint}/${page}/${pageSize}`;

    const _method = method || (filterOptions ? "POST" : "GET");

    const _params = params || (filterOptions ? filter : undefined);

    apiLoad({
      endpoint: _endpoint,
      method: _method,
      params: _params
    });
  }, [page, pageCount, endpoint, pageSize, method, params, filterOptions, apiLoad, filter]);
  const nextPage = React$1.useCallback(() => {
    if (fetched && hasNextPage) {
      setPage(oldPage => oldPage + 1);
    }
  }, [fetched, hasNextPage]);
  const onRefresh = React$1.useCallback(() => {
    if (page === 1) {
      load();
    } else {
      setPage(1);
    }
  }, [load, page]);
  const shouldFetchNextPage = React$1.useCallback(() => {
    if (!reloaderRef.current) return false;
    const reloaderRects = reloaderRef.current.getClientRects();
    const reloaderOffsetY = reloaderRects[0].top;
    const shouldFetch = reloaderOffsetY - 20 <= window.innerHeight;
    return shouldFetch;
  }, [reloaderRef]);
  const onScroll = React$1.useCallback(event => {
    if (shouldFetchNextPage()) {
      nextPage();
    }
  }, [shouldFetchNextPage, nextPage]);
  React$1.useEffect(() => {
    if (shouldFetchNextPage()) nextPage();
  }, [shouldFetchNextPage, nextPage]);
  React$1.useEffect(() => {
    load();
  }, [load]);
  React$1.useEffect(() => {
    const appLayout = document.getElementsByTagName("body")[0];
    appLayout.onscroll = onScroll;
  }, [onScroll]);
  React$1.useEffect(() => {
    if (reload) {
      onRefresh();
      onReload();
    }
  }, [onRefresh, onReload, reload]);

  if (!firstTimeFetched) {
    return shimmer ? /*#__PURE__*/React.createElement(props.shimmer, null) : /*#__PURE__*/React.createElement(props.loadingRenderer, null);
  }

  const hasData = !!data.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      ...(style || {})
    },
    ref: containerView
  }, /*#__PURE__*/React.createElement(Show, {
    condition: hasData
  }, /*#__PURE__*/React.createElement(Mapper, {
    items: data,
    map: (item, index) => render(item, index, {
      page,
      pageSize
    })
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

const ModalRenderer = props => {
  const {
    title,
    children,
    footer
  } = props;
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

const Overlay = props => {
  const {
    visible: _visible,
    onClick: _onClick,
    children
  } = props;
  const [visible, setVisible] = React$1.useState(_visible);
  React$1.useEffect(() => {
    setTimeout(() => {
      setVisible(_visible);
    }, 1);
  }, [_visible]);
  const onClick = React$1.useCallback(e => {
    setVisible(false);
    setTimeout(() => {
      _onClick(e);
    }, 400);
  }, [_onClick]);
  if (!_visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      position: 'fixed',
      zIndex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      inset: 0,
      width: '100%',
      height: '100%',
      transition: "0.4s",
      opacity: useUtils.takeIf(visible, 1, 0),
      display: useUtils.takeIf(visible, 'block', 'none'),
      overflow: 'auto',
      pointerEvents: useUtils.takeIf(visible, "initial", "none"),
      ...appStyles.center
    }
  }, /*#__PURE__*/React.createElement(reactFlexboxGrid.Col, {
    onClick: e => e.stopPropagation(),
    xs: 10,
    sm: 10,
    md: 8,
    lg: 8,
    xl: 6,
    style: {
      backgroundColor: 'white',
      position: 'absolute',
      width: useUtils.takeIf(visible, "100%", "0%"),
      overflow: 'auto',
      transition: '0.4s',
      maxHeight: useUtils.takeIf(visible, "90%", "0%")
    }
  }, children));
};

const Modal = props => {
  const {
    visible,
    destroyOnClose,
    onClose,
    ...rest
  } = props;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React.createElement(Overlay, {
    onClick: onClose,
    visible: visible
  }, /*#__PURE__*/React.createElement(ModalRenderer, rest)), document.body);
};

let notification = null;
Notification__default["default"].newInstance({
  style: {
    right: 32,
    top: 32
  }
}, _notification => {
  notification = _notification;
});
const notificationColors = {
  success: 'green',
  error: 'red',
  warning: 'orange',
  info: 'blue'
};

const NotificationRenderer = props => {
  const {
    type,
    title,
    message,
    icon
  } = props;
  const color = notificationColors[type];
  return /*#__PURE__*/React__default["default"].createElement(ListItem, {
    style: {
      borderLeft: `5px solid ${color}`,
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
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      marginLeft: 28,
      fontSize: 12
    }
  }, message));
};

const notificationPusher = props => {
  const {
    duration,
    title,
    message,
    icon,
    type,
    ...rest
  } = props;
  notification.notice({
    duration: duration || 5,
    content: /*#__PURE__*/React__default["default"].createElement(NotificationRenderer, {
      title: title,
      message: message,
      type: type,
      icon: icon
    }),
    style: {
      padding: 0
    },
    ...rest
  });
};

notification.success = props => {
  notificationPusher({ ...props,
    type: "success"
  });
};

notification.error = props => {
  notificationPusher({ ...props,
    type: "error"
  });
};

notification.warning = props => {
  notificationPusher({ ...props,
    type: "warning"
  });
};

notification.info = props => {
  notificationPusher({ ...props,
    type: "info"
  });
};

var notification$1 = notification;

const OverflowImages = props => {
  const {
    images,
    maxCount: _maxCount,
    size
  } = props;
  const maxCount = _maxCount || 3;
  const overflowItemsCount = images.length - maxCount;
  const count = useUtils.takeIf(overflowItemsCount > 0, `+${overflowItemsCount}`);
  return /*#__PURE__*/React.createElement("div", {
    style: { ...appStyles.center,
      flexDirection: 'column',
      marginRight: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    title: count
  }, /*#__PURE__*/React.createElement("div", {
    style: { ...appStyles.center
    }
  }, /*#__PURE__*/React.createElement(Mapper, {
    items: images.filter((_, index) => index < maxCount)
  }, /*#__PURE__*/React.createElement(OverflowImage, {
    size: size
  })))));
};

const OverflowImage = props => {
  const {
    src,
    index,
    size
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid white',
      marginLeft: useUtils.takeIf(index, -32),
      borderRadius: size
    },
    key: index
  }, /*#__PURE__*/React.createElement(Image, {
    src: src,
    key: index,
    size: size
  }));
};

const Rate = props => {
  const {
    value,
    total,
    size: _size,
    style
  } = props;
  const [stars, setStars] = React$1.useState([]);
  const size = _size || 24;
  React$1.useEffect(() => {
    const _stars = Array(total || 5).fill(0).map((i, index) => index < value ? 1 : 0);

    setStars(_stars);
  }, [total, value]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: { ...appStyles.center,
      ...appStyles.grid,
      ...(style || {})
    }
  }, stars.map((i, index) => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        margin: 4
      },
      key: index
    }, /*#__PURE__*/React__default["default"].createElement(Show, {
      condition: i
    }, /*#__PURE__*/React__default["default"].createElement(props.filledStarIcon, {
      style: {
        color: 'orange',
        fontSize: size
      }
    })), /*#__PURE__*/React__default["default"].createElement(Show, {
      condition: !i
    }, /*#__PURE__*/React__default["default"].createElement(props.emptyStarIcon, {
      style: {
        color: "orange",
        fontSize: size
      }
    })));
  }));
};

const Section = props => {
  const {
    title,
    extra,
    className,
    style,
    children
  } = props;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    style: {
      border: '1px solid #ddd',
      borderRadius: 20,
      padding: 16,
      margin: 8,
      height: '100%',
      ...(style || {})
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, title ? /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      fontWeight: 'bold',
      fontSize: 18
    }
  }, title) : null, extra), children);
};

const Selectfield = props => {
  const {
    className,
    label,
    items,
    value,
    descriptionKey: _descriptionKey,
    valueKey: _valueKey,
    onChange: _onChange,
    selectFieldClassName: _selectFieldClassName
  } = props;
  let selectFieldClassName = "select-field ";
  if (_selectFieldClassName) selectFieldClassName += _selectFieldClassName;
  const valueKey = useUtils.coalasce(_valueKey, "value");
  const descriptionKey = useUtils.coalasce(_descriptionKey, "title");
  const onChange = React$1.useCallback(e => {
    const selectedValueKey = e.target.value;
    const [selectedValue] = items.filter(i => i[valueKey] === selectedValueKey);

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

const SelectfieldOption = props => {
  const {
    valueKey,
    value: _value,
    descriptionKey,
    ...rest
  } = props;
  const value = rest[valueKey];
  const description = rest[descriptionKey];
  return /*#__PURE__*/React.createElement("option", {
    value: value,
    selected: value === _value,
    className: "select-field-option"
  }, description);
};

const Tag = props => {
  const {
    color: _color,
    className,
    description,
    generatedColor,
    type: _type,
    textStyle,
    style,
    onClick,
    onTextClick,
    closeIcon,
    onClear,
    closeButtonClassName,
    closeButtonStyle,
    children
  } = props;
  const type = _type || "outlined";
  const color = _color || (generatedColor ? useUtils.generatedColorFromString(description) : "#cccccc");
  const textColor = type === "filled" ? '#ffffff' : color || "";
  const backgroundColor = type === "filled" ? color : `${useUtils.changeColor(color, 150)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px",
      borderRadius: 8,
      backgroundColor,
      maxWidth: 'calc(100% - 16px)',
      ...appStyles.center,
      ...(style || {})
    },
    className: `
             ${useUtils.takeIf(onClick, "clickable", "")}
              ${className || ""}
              `,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: useUtils.takeIf(onTextClick, "clickable", ""),
    style: {
      color: textColor,
      margin: 0,
      lineHeight: 1,
      width: '100%',
      ...(textStyle || {})
    },
    onClick: onTextClick
  }, children), /*#__PURE__*/React.createElement(Show, {
    condition: onClear
  }, /*#__PURE__*/React.createElement(Button, {
    icon: closeIcon,
    onClick: onClear,
    className: closeButtonClassName,
    style: {
      color: 'white',
      marginLeft: 8,
      ...(closeButtonStyle || {})
    }
  })));
};

const Textfield = props => {
  const {
    containerClassName,
    className,
    label,
    prefix,
    suffix,
    value,
    onChange,
    onBlur,
    onPressEnter,
    ...rest
  } = props;
  const input = React$1.useRef(null);
  const focusInput = React$1.useCallback(() => {
    if (input.current) input.current.focus();
  }, [input]);
  const onKeyPress = React$1.useCallback(e => {
    if (["enter", "Enter"].indexOf(e.key) > -1) if (onPressEnter) onPressEnter(e);
  }, [onPressEnter]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: containerClassName,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Show, {
    condition: label
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "no-select",
    style: {
      fontWeight: 500
    },
    onClick: focusInput
  }, label)), /*#__PURE__*/React__default["default"].createElement("div", {
    style: { ...appStyles.row,
      alignItems: 'center'
    }
  }, prefix, /*#__PURE__*/React__default["default"].createElement("input", _extends({
    className: `${className || ""} input`,
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

const TextListField = props => {
  const {
    value: _value,
    onChange: _onChange,
    listContainerStyle,
    descriptionKey: _descriptionKey,
    valuesRenderer,
    textfieldContainerClassName,
    checkButton,
    label,
    checkIcon,
    valueTransformer
  } = props;
  const descriptionKey = React$1.useMemo(() => _descriptionKey || "name", [_descriptionKey]);
  const [value, setValue] = React$1.useState({});
  const values = React$1.useMemo(() => _value || [], [_value]);
  const onSave = React$1.useCallback(e => {
    if (e) e.preventDefault();
    const newValue = valueTransformer ? valueTransformer(value) : value;
    if (!newValue[descriptionKey]) return;

    if (newValue.index !== undefined) {
      const {
        index
      } = newValue;
      delete newValue.index;
      values[index] = newValue;

      _onChange([...values]);
    } else {
      _onChange([...values, newValue]);
    }

    setValue({});
  }, [value, valueTransformer, values, _onChange, descriptionKey]);
  const onClear = React$1.useCallback(index => {
    values.splice(index, 1);

    _onChange([...values]);
  }, [values, _onChange]);
  const commitChange = React$1.useCallback((index, _newValue) => {
    values[index] = valueTransformer ? valueTransformer(_newValue) : _newValue;

    _onChange([...values]);
  }, [values, valueTransformer, _onChange]);
  const suffix = useUtils.takeIf(checkButton, checkButton({
    disabled: !value[descriptionKey],
    onClick: onSave
  }), /*#__PURE__*/React.createElement(Button, {
    icon: checkIcon,
    type: "primary",
    disabled: !value[descriptionKey],
    onClick: onSave
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: { ...appStyles.grid,
      ...(listContainerStyle || {})
    }
  }, values.map((item, index) => valuesRenderer({
    item,
    index,
    onClear,
    setValue,
    onSave,
    onChange: commitChange
  }))), /*#__PURE__*/React.createElement("div", {
    style: { ...appStyles.row,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Textfield, {
    value: value[descriptionKey],
    containerClassName: textfieldContainerClassName,
    label: label,
    onChange: e => setValue({ ...value,
      [descriptionKey]: e.target.value
    }),
    onPressEnter: onSave,
    onBlur: onSave,
    suffix: suffix
  })));
};

const ThreeDot = props => {
  const {
    title,
    children
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(Popover, {
    trigger: "mouse",
    alignment: "top",
    overlay: /*#__PURE__*/React__default["default"].createElement("div", {
      style: appStyles.toolTip
    }, title || children)
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: appStyles.threeDot
  }, children));
};

const Upload = props => {
  const {
    style,
    ...rest
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(UUpload__default["default"], _extends({
    style: {
      outline: 'none',
      ...(style || {})
    }
  }, rest));
};

Object.defineProperty(exports, 'Form', {
    enumerable: true,
    get: function () { return rcFieldForm__default["default"]; }
});
Object.defineProperty(exports, 'useForm', {
    enumerable: true,
    get: function () { return rcFieldForm.useForm; }
});
Object.defineProperty(exports, 'Col', {
    enumerable: true,
    get: function () { return reactFlexboxGrid.Col; }
});
Object.defineProperty(exports, 'Grid', {
    enumerable: true,
    get: function () { return reactFlexboxGrid.Grid; }
});
Object.defineProperty(exports, 'Row', {
    enumerable: true,
    get: function () { return reactFlexboxGrid.Row; }
});
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.ColorPicker = ColorPicker;
exports.EmptyResult = EmptyResult;
exports.FadeAnimation = FadeAnimation;
exports.Field = Field;
exports.Header = Header;
exports.Image = Image;
exports.IncDecField = IncDecField;
exports.InfiniteScroll = InfiniteScrollView;
exports.ListItem = ListItem;
exports.Mapper = Mapper;
exports.Modal = Modal;
exports.OverflowImages = OverflowImages;
exports.Popover = Popover;
exports.Rate = Rate;
exports.Section = Section;
exports.Selectfield = Selectfield;
exports.Show = Show;
exports.Tag = Tag;
exports.TextListField = TextListField;
exports.Textfield = Textfield;
exports.ThreeDot = ThreeDot;
exports.Upload = Upload;
exports.appStyles = appStyles;
exports.notification = notification$1;
exports.notificationPusher = notificationPusher;
