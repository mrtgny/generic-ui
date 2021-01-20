import React, {useCallback, useRef, useState} from 'react';
import {Show} from "@reactivers/hooks";

const styles = {
    popover: {
        position: 'absolute',
        zIndex: '2',
    },
    cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        zIndex: 1
    },
}

const Popover = props => {
    const {overlay, children} = props;
    const target = useRef(null);
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [position, setPosition] = useState({
        left: 0, top: 0
    })

    const showPopover = useCallback(() => {
        setDisplayColorPicker(true)
        if (target.current) {
            const {left, top, height} = target.current.getBoundingClientRect() || {};
            setPosition({
                left,
                top: top + height
            })
        }

    }, [target])

    const closePopover = useCallback(() => {
        setDisplayColorPicker(false)
    }, [])

    return (
        <div>
            <div onClick={showPopover} ref={target}>
                {children}
            </div>
            <Show condition={displayColorPicker}>
                <div style={styles.cover} onClick={closePopover}>
                    <div style={{...styles.popover, ...position}}>
                        {overlay}
                    </div>
                </div>
            </Show>
        </div>
    )
}
export default Popover
