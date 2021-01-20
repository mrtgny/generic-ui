import React from 'react';
import {Show} from "@reactivers/hooks";
import ListItem from "../ListItem";
import appStyles from "../../utils/styles";

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
    return (
        <div style={{...(style || {}), borderRadius: 10}} className={className}>
            <Show condition={avatar || title || titleRenderer || description || subtitle}>
                <ListItem
                    avatar={avatar}
                    title={title}
                    titleRenderer={titleRenderer}
                    style={{marginBottom: 4, ...(titleContainerStyle || {})}}
                    titleContainerStyle={headerStyle}
                    titleStyle={{fontSize: 18, ...(titleStyle || {})}}
                    description={description}
                    subtitle={subtitle}
                    onTitleClick={onTitleClick}
                    onClick={onHeaderClick}
                />
            </Show>
            <Show condition={children}>
                <div style={{...appStyles.card, ...(cardStyle || {})}}>
                    <div style={{...(childrenContainerStyle || {})}}>
                        {children}
                    </div>
                </div>
            </Show>
        </div>
    )
}

export default Card
