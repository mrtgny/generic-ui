import React from 'react';
import Dialog from "rc-dialog";
import "rc-dialog/assets/index.css"

const Modal = props => {
    const {children, ...rest} = props;
    return (
        <Dialog animation='zoom'
                transitionName='zoom'
                {...rest}>
            {children}
        </Dialog>
    )
}

export default Modal
