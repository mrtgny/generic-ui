import React from 'react';
import UUpload from 'rc-upload'

const Upload = props => {
    const {style, ...rest} = props;
    return (
        <UUpload style={{
            outline: 'none',
            ...(style || {})
        }} {...rest} />
    )
}

export default Upload;
