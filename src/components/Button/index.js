import { coalasce, takeIf } from "@reactivers/use-utils";
import { useCallback } from 'react';
import appStyles from "../../utils/styles";
import Show from "../Show";

const Button = props => {
    const {
        style,
        icon,
        title,
        className: _className,
        iconSize: _iconSize,
        onClick: _onClick,
        htmlType: _htmlType,
        children,
    } = props;

    const iconSize = coalasce(_iconSize, 32);
    const htmlType = coalasce(_htmlType, "button");
    const iconButton = !children && !title;

    let className = `no-select `

    const onClick = useCallback((e) => {
        if (htmlType !== 'submit') e.preventDefault()
        if (_onClick) _onClick(e);
    }, [htmlType, _onClick])

    if (_className) className += ` ${_className || ""}`

    return (
        <button style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: takeIf(iconButton, iconSize),
            minWidth: takeIf(iconButton, iconSize),
            height: takeIf(iconButton, iconSize),
            minHeight: takeIf(iconButton, iconSize),
            borderRadius: takeIf(iconButton, "50%"),
            ...(style || {}),
        }}
            type={htmlType}
            onClick={onClick}
            className={className}>
            <Show condition={icon}>
                <div style={{
                    marginRight: takeIf(!iconButton, 8),
                    fontSize: takeIf(iconButton, 18, 12),
                    width: takeIf(iconButton, "100%", 12),
                    height: takeIf(iconButton, "100%", 12),
                    ...appStyles.center,
                }}>
                    {icon}
                </div>
            </Show>
            <div>
                {children || title}
            </div>
        </button>
    )
}

export default Button;
