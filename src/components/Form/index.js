import React from 'react';
import Form, {Field as FField, useForm} from "rc-field-form";
import Show from "../Show";

const Field = props => {
    const {style, name, children} = props;
    return (
        <div style={{width: '100%', margin: '16px 0', ...(style || {})}}>
            <Show condition={name}>
                <FField {...props}/>
            </Show>
            <Show condition={!name}>
                {children}
            </Show>
        </div>
    )
}

export {Form, Field, useForm};
