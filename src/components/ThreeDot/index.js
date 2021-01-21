import React from "react";
import Popover from "../Popover";
import appStyles from "../../utils/styles";

const ThreeDot = props => {
    const {title, children} = props;
    return (
        <Popover trigger="mouse"
                 alignment="top"
                 overlay={
                     <div style={appStyles.toolTip}>
                         {title || children}
                     </div>
                 }>
            <div style={appStyles.threeDot}>
                {children}
            </div>
        </Popover>
    )
}

export default ThreeDot;
