import React, {useCallback, useEffect, useState} from 'react';
import Show from "../Show";
import {Col} from "../Grid";
import {createPortal} from 'react-dom';
import {takeIf} from '@reactivers/hooks'
import appStyles from "../../utils/styles";

const ModalRenderer = props => {
    const {title, children, footer} = props;
    return (
        <>
            <div style={{borderBottom: '1px solid #eee'}}>
                <div style={{margin: 0, padding: 16, fontSize: "1.2em", fontWeight: 500}}>{title}</div>
            </div>
            <div style={{padding: 16}}>
                {children}
            </div>
            <Show condition={footer}>
                <div style={{borderTop: '1px solid #eee'}}>
                    {footer}
                </div>
            </Show>
        </>
    )
}

const Overlay = props => {
    const {visible: _visible, onClick: _onClick, children} = props;
    const [visible, setVisible] = useState(_visible);

    useEffect(() => {
        setTimeout(() => {
            setVisible(_visible)
        }, 1)
    }, [_visible])

    const onClick = useCallback((e) => {
        setVisible(false)
        setTimeout(() => {
            _onClick(e)
        }, 400)
    }, [_onClick])

    if (!_visible) return null;

    return (
        <div onClick={onClick}
             style={{
                 position: 'fixed',
                 zIndex: 1,
                 backgroundColor: 'rgba(0,0,0,0.5)',
                 inset: 0,
                 width: '100%',
                 height: '100%',
                 transition: "0.4s",
                 opacity: takeIf(visible, 1, 0),
                 display: takeIf(visible, 'block', 'none'),
                 overflow: 'auto',
                 pointerEvents: takeIf(visible, "initial", "none"),
                 ...appStyles.center,
             }}>
            <Col onClick={e => e.stopPropagation()}
                 xs={10} sm={10} md={8} lg={8} xl={6}
                 style={{
                     backgroundColor: 'white',
                     position: 'absolute',
                     width: takeIf(visible, "100%", "0%"),
                     overflow: 'auto',
                     transition: '0.4s',
                     maxHeight: takeIf(visible, "90%", "0%"),
                 }}>
                {children}
            </Col>
        </div>
    )
}

const Modal = props => {
    const {visible, destroyOnClose, onClose, ...rest} = props;
    return createPortal(
        <Overlay onClick={onClose}
                 visible={visible}>
            <ModalRenderer {...rest} />
        </Overlay>, document.body)
}

export default Modal;
