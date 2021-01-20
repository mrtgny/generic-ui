import React from 'react';
import {Show} from "@reactivers/hooks";
import appStyles from "../../utils/styles";

const Header = (props) => {
    const {title, titleRenderer, style, titleStyle, rightContent} = props;

    return (
        <div style={{...appStyles.row, alignItems: 'center', minHeight: 48, ...(style || {})}}>
            <div style={{flex: 1, ...(titleStyle || {})}}>
                <Show condition={titleRenderer}>
                    <div style={{margin: 0, ...appStyles.cardTitle}}>{title}</div>
                </Show>
            </div>
            {rightContent}
        </div>
    )
}

export default Header
