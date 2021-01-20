import React from "react";
import Tooltip from "rc-tooltip";

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
            <Tooltip overlay={children}>
                {children}
            </Tooltip>
        </div>
    )
}

export default ThreeDot;
