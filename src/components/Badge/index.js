import React from 'react'

const Badge = props => {
    const {title, children} = props;
    return (
        <div style={{position: 'relative'}}>
            <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                borderRadius: 10,
                backgroundColor: '#eee'
            }}>{title}</div>
            {children}
        </div>
    )
}

export default Badge
