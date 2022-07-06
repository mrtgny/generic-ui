import { isNullOrUndefined } from '@reactivers/use-utils';
import Form, { Field as FField, useForm } from "rc-field-form";

const Field = props => {
    const { style, name, children } = props;

    return (
        <div style={{ width: '100%', margin: '16px 0', ...(style || {}) }}>
            <FieldOrChildren name={name} parentProps={props}>
                {children}
            </FieldOrChildren>
        </div>
    )
}

const FieldOrChildren = props => {
    const { name, parentProps, children } = props;
    if (isNullOrUndefined(name)) {
        return children
    }
    return <FField {...parentProps} />
}

export { Form, Field, useForm };

