import React, {forwardRef, useEffect} from 'react'
import {Select} from 'antd'

const {Option} = Select

const SelectItemsRenderer = forwardRef((props, ref) => {
    const {items, placeHolder, value, onChange, onSearch, defaultSelectFirstValue, mode, filterOption, valueField: _valueField, labelInValue, descriptionField: _descriptionField, ...rest} = props;
    const valueField = _valueField || 'id';
    const descriptionField = _descriptionField || 'name';

    useEffect(() => {
        if (defaultSelectFirstValue) {
            if (items.length && !value) {
                onChange(items[0][valueField])
            }
        }
    }, [defaultSelectFirstValue, items, valueField, value])

    const getValue = () => {
        if (labelInValue) {
            if (mode === "multiple")
                return (value || []).map(i => ({
                    value: i.value || i[valueField],
                    label: i.label || i[descriptionField],
                    key: i.key || i[valueField]
                }))
            return {value: value[valueField], label: value[descriptionField]}
        }
        return value;
    }

    return (
        <Select
            {...rest}
            mode={mode}
            labelInValue={labelInValue}
            value={getValue()}
            ref={ref}
            showSearch
            placeholder={placeHolder}
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
        >
            {
                (items || []).map((item, index) => <Option key={index}
                                                           value={item[valueField]}>
                    {item[descriptionField]}
                </Option>)
            }
        </Select>
    );
});

export default SelectItemsRenderer
