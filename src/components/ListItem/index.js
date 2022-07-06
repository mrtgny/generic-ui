import { takeIf } from "@reactivers/use-utils";
import Show from "../Show";

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

    const borderBottom = takeIf(lastItem, '1px solid #eee');
    const titleContainerClassName = takeIf(onTitleClick, "clickable", "")
    return (
        <div style={{ borderBottom, padding: 4, ...(style || {}) }}
            className={className}
            onClick={onClick}>
            <div style={{ display: "flex", alignItems: 'center', ...(headerContainerStyle || {}) }}>
                <Show condition={avatar}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginRight: takeIf(!!title || !!titleRenderer, 8, 0),
                        ...(avatarContainerStyle || {}),
                    }}>
                        {avatar}
                    </div>
                </Show>
                <div style={{
                    width: '100%',
                    padding: 4,
                    ...(titleContainerStyle || {})
                }}
                    onClick={onTitleClick}
                    className={titleContainerClassName}>
                    <Show condition={titleRenderer}>
                        {titleRenderer}
                    </Show>
                    <Show condition={title}>
                        <div style={{
                            margin: 0,
                            color: takeIf(selected, "#1890ff"),
                            ...(titleStyle || {})
                        }}>{title}</div>
                    </Show>
                    <Show condition={subtitle}>
                        <div style={{
                            margin: 0,
                            fontSize: 10,
                            color: 'black',
                            ...(subtitleStyle || {})
                        }}>{subtitle}</div>
                    </Show>
                    <Show condition={subtitleRenderer}>
                        {subtitleRenderer}
                    </Show>
                </div>
                <Show condition={description}>
                    {description}
                </Show>
            </div>
            {children}
        </div>
    )
}

export default ListItem
