import React, {useCallback} from 'react';
import {SwatchesPicker} from "react-color";
import {Show} from "@reactivers/hooks";
import Popover from "../Popover";

const ColorPicker = props => {
    const {
        label,
        value: _value,
        onChange: _onChange,
        title,
        inputClassName,
        colorClassName,
        children,
    } = props;

    const onChange = useCallback(({hex}) => {
        _onChange(hex)
    }, [_onChange])

    return (
        <Popover overlay={
            <div style={{backgroundColor: 'white', padding: 16}}>
                <h3>{title || "Renk"}</h3>
                <SwatchesPicker onChange={onChange}/>
            </div>
        }>
            <>
                <Show condition={children}>
                    {children}
                </Show>
                <Show condition={!children}>
                    <div className={inputClassName}>
                        <p style={{fontWeight: 500}}>{label}</p>
                        <div className={colorClassName} style={{backgroundColor: _value, height: 32, width: '100%'}}/>
                    </div>
                </Show>
            </>
        </Popover>
    )
}


export default ColorPicker;
