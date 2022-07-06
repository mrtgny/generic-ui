import { coalasce } from "@reactivers/use-utils";
import { useCallback } from 'react';
import Mapper from "../Mapper";
import Show from "../Show";

const Selectfield = props => {
    const {
        className,
        label,
        items,
        value,
        descriptionKey: _descriptionKey,
        valueKey: _valueKey,
        onChange: _onChange,
        selectFieldClassName: _selectFieldClassName
    } = props
    let selectFieldClassName = "select-field "
    if (_selectFieldClassName) selectFieldClassName += _selectFieldClassName

    const valueKey = coalasce(_valueKey, "value")
    const descriptionKey = coalasce(_descriptionKey, "title")

    const onChange = useCallback((e) => {
        const selectedValueKey = e.target.value;
        const [selectedValue] = items.filter(i => i[valueKey] === selectedValueKey);
        _onChange(selectedValue);
    }, [_onChange, items, valueKey])

    return (
        <div className={className}>
            <Show condition={label}>
                <p style={{ fontWeight: 'bold' }}>{label}</p>
            </Show>
            <select name={label}
                value={value || ""}
                onChange={onChange}
                className={selectFieldClassName}>
                <Mapper items={items}>
                    <SelectfieldOption valueKey={valueKey}
                        descriptionKey={descriptionKey}
                        value={value}
                    />
                </Mapper>
            </select>
        </div>
    )
}

const SelectfieldOption = props => {
    const { valueKey, value: _value, descriptionKey, ...rest } = props;
    const value = rest[valueKey];
    const description = rest[descriptionKey];
    return (
        <option value={value}
            selected={value === _value}
            className='select-field-option'
        >
            {description}
        </option>
    )
}

export default Selectfield;
