import { changeColor, generatedColorFromString, takeIf } from "@reactivers/use-utils";
import appStyles from "../../utils/styles";
import Button from "../Button";
import Show from "../Show";

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
                    className={closeButtonClassName}
                    style={{
                        color: 'white',
                        marginLeft: 8,
                        ...(closeButtonStyle || {})
                    }}
                />
            </Show>
        </div>
    )
}

export default Tag;
