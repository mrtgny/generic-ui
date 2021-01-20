import React from "react";
import {changeColor, generatedColorFromString, Show, takeIf} from "@reactivers/hooks";
import Button from "../Button";
import appStyles from "../../utils/styles";

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
        children
    } = props
    const type = _type || "outlined";

    const color = _color || (generatedColor ? generatedColorFromString(description) : "#cccccc")
    const textColor = type === "filled" ? '#ffffff' : (color || "");
    const backgroundColor = type === "filled" ? color : `${changeColor(color, 150)}`
    return (
        <div style={{
            padding: "8px 16px",
            borderRadius: 8,
            backgroundColor,
            maxWidth: 'calc(100% - 16px)',
            ...appStyles.center, ...(style || {})
        }}
             className={`
             ${takeIf(onClick, "clickable", "")}
              ${className || ""}
              `}
             onClick={onClick}>
            <div className={takeIf(onTextClick, "clickable", "")}
                 style={{
                     color: textColor,
                     margin: 0,
                     lineHeight: 1,
                     width: '100%',
                     ...(textStyle || {})
                 }}
                 onClick={onTextClick}>
                {children}
            </div>
            <Show condition={onClear}>
                <Button icon={closeIcon}
                        onClick={onClear}
                        soft
                        style={{color: 'white', marginLeft: 8}}
                />
            </Show>
        </div>
    )
}

export default Tag;
