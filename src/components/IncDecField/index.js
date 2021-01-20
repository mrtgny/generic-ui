import React from 'react';
import Button from "../Button";
import appStyles from "../../utils/styles";

const IncDecField = props => {
    const {value, onChange, minusIcon, plusIcon, size: _size, style, minusDisabled, plusDisabled, children} = props;
    return (
        <div style={{
            marginVertical: 16,
            ...appStyles.row,
            ...appStyles.spreadHorizontally,
            ...(style || {})
        }}>
            <Button icon={minusIcon}
                    disabled={minusDisabled}
                    type='primary'
                    style={{
                        borderRadius: 10,
                    }}
                    onClick={() => onChange(value - 1)}
            />
            {children}
            <Button icon={plusIcon}
                    disabled={plusDisabled}
                    type='primary'
                    style={{
                        borderRadius: 10,
                    }}
                    onClick={() => onChange(value + 1)}
            />
        </div>
    )
}

export default IncDecField;
