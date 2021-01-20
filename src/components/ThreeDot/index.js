import React from "react";
import {Tooltip} from "antd";

const ThreeDot = props => {
    const {children} = props;
    return (
        <div style={{
            display: 'inline-block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%'
        }}>
            <Tooltip title={children}>
                {children}
            </Tooltip>
        </div>
    )
}

export default ThreeDot;
