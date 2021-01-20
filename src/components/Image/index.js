import React, {useCallback, useState} from 'react';
import {Show, takeIf} from "@reactivers/hooks";
import appStyles from '../../utils/styles'

const Image = props => {
    const {
        style,
        className,
        hidePlaceholder,
        src,
        alt,
        onLoad: _onLoad,
        placeholder: _placheholder,
        size: _size,
        ...rest
    } = props;

    const [loaded, setLoaded] = useState(false);

    const size = takeIf(_size, {width: _size, height: _size, borderRadius: '50%'}, {});
    const placeholder = takeIf(_placheholder, "P");
    const fontSize = takeIf(isNaN(_size / 2), 24, _size / 2);
    const displayImage = takeIf(loaded, undefined, 'none');

    const onLoad = useCallback(() => {
        setLoaded(true)
        if (_onLoad)
            _onLoad()
    }, [_onLoad])

    return (
        <div style={{
            ...size,
            ...appStyles.defaultShadow,
            ...appStyles.center,
            backgroundColor: "#eee",
            overflow: "hidden",
            ...style,
        }} className={className}>
            <Show condition={src}>
                <img
                    onLoad={onLoad}
                    src={src}
                    alt={alt}
                    style={{
                        ...appStyles.roundedImage,
                        ...style,
                        display: displayImage
                    }}
                    {...rest}
                />
            </Show>
            <Show condition={!loaded && !hidePlaceholder}>
                <div style={{width: '100%', height: '100%', ...appStyles.center}}>
                    <p style={{margin: 0, fontSize, fontWeight: 'bold', padding: 4}}>{placeholder}</p>
                </div>
            </Show>
        </div>
    )
}

export default Image;
