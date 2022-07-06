import { coalasce } from "@reactivers/use-utils";
import { useCallback, useRef, useState } from 'react';
import Show from "../Show";

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
    const { overlay, trigger: _trigger, alignment: _alignment, children } = props;
    const trigger = coalasce(_trigger, "click")
    const alignment = coalasce(_alignment, "bottom")
    const target = useRef(null);

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [position, setPosition] = useState({})

    const showPopover = useCallback(() => {
        setDisplayColorPicker(true)
        if (target.current) {
            const { left, top, bottom, right, height } = target.current.getBoundingClientRect() || {};
            switch (alignment) {
                case "bottom":
                    setPosition({
                        left,
                        top: bottom
                    })
                    break;
                case "top":
                    setPosition({
                        left,
                        bottom: top
                    })
                    break;
                case "left":
                    setPosition({
                        right: left,
                        top: top
                    })
                    break;
                case "right":
                    setPosition({
                        left: right,
                        top: top
                    })
                    break;
            }

        }
    }, [target])

    const showPopoverClick = useCallback((e) => {
        if (trigger === "click") showPopover()
    }, [showPopover, trigger])

    const showPopoverMouseEnter = useCallback((e) => {
        if (trigger === "mouse") showPopover()
    }, [showPopover, trigger])

    const stopPropagation = useCallback((e) => {
        e.stopPropagation()
    }, [])

    const closePopover = useCallback(() => {
        setDisplayColorPicker(false)
    }, [])

    const closePopoverClick = useCallback(() => {
        if (trigger === "click") closePopover();
    }, [target, closePopover])

    const closePopoverMouseEnter = useCallback(() => {
        if (trigger === "mouse") closePopover();
    }, [target, closePopover])

    return (
        <div>
            <div onClick={showPopoverClick}
                onMouseEnter={showPopoverMouseEnter}
                ref={target}>
                {children}
            </div>
            <Show condition={displayColorPicker}>
                <div style={styles.cover}
                    onClick={closePopoverClick}
                    onMouseEnter={closePopoverMouseEnter}
                >
                    <div style={{ ...styles.popover, ...position }}
                        onClick={stopPropagation}
                        onMouseEnter={stopPropagation}>
                        {overlay}
                    </div>
                </div>
            </Show>
        </div>
    )
}
export default Popover
