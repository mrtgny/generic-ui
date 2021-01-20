import React, {useCallback, useMemo, useState} from 'react';
import Textfield from "../Textfield";
import Button from "../Button";
import appStyles from "../../utils/styles";
import {takeIf} from "@reactivers/hooks";

const TextListField = props => {
    const {
        value: _value,
        onChange: _onChange,
        listContainerStyle,
        descriptionKey: _descriptionKey,
        valuesRenderer,
        textfieldContainerClassName,
        checkButton,
        label,
        checkIcon,
        valueTransformer
    } = props;
    const descriptionKey = useMemo(() => _descriptionKey || "name", [_descriptionKey]);
    const [value, setValue] = useState({});
    const values = useMemo(() => _value || [], [_value]);

    const onSave = useCallback((e) => {
        if (e) e.preventDefault()
        const newValue = valueTransformer ? valueTransformer(value) : value
        if (!newValue[descriptionKey]) return;

        if (newValue.index !== undefined) {
            const {index} = newValue;
            delete newValue.index;
            values[index] = newValue;
            _onChange([...values])
        } else {
            _onChange([...values, newValue])
        }

        setValue({})
    }, [value, valueTransformer, values, _onChange, descriptionKey])

    const onClear = useCallback((index => {
        values.splice(index, 1)
        _onChange([...values])
    }), [values, _onChange])

    const commitChange = useCallback((index, _newValue) => {
        values[index] = valueTransformer ? valueTransformer(_newValue) : _newValue
        _onChange([...values])
    }, [values, valueTransformer, _onChange])


    const suffix = takeIf(checkButton, checkButton({disabled: !value[descriptionKey], onClick: onSave}), <Button
        icon={checkIcon}
        type="primary"
        disabled={!value[descriptionKey]}
        onClick={onSave}
    />)

    return (
        <>
            <div style={{...appStyles.grid, ...(listContainerStyle || {})}}>
                {values.map((item, index) => valuesRenderer({
                    item,
                    index,
                    onClear,
                    setValue,
                    onSave,
                    onChange: commitChange
                }))}
            </div>
            <div style={{...appStyles.row, marginTop: 8}}>
                <Textfield value={value[descriptionKey]}
                           containerClassName={textfieldContainerClassName}
                           label={label}
                           onChange={e => setValue({...value, [descriptionKey]: e.target.value})}
                           onPressEnter={onSave}
                           onBlur={onSave}
                           suffix={suffix}
                />
            </div>
        </>
    )
}

export default TextListField;
