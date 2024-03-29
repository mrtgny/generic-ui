import React from 'react';
import {takeIf} from "@reactivers/hooks";
import Mapper from "../Mapper";
import appStyles from "../../utils/styles";
import Image from "../Image";
import Badge from "../Badge";

const OverflowImages = props => {
    const {images, maxCount: _maxCount, size} = props;
    const maxCount = _maxCount || 3;
    const overflowItemsCount = images.length - maxCount;
    const count = takeIf(overflowItemsCount > 0, `+${overflowItemsCount}`)
    return (
        <div style={{...appStyles.center, flexDirection: 'column', marginRight: 8}}>
            <Badge title={count}>
                <div style={{...appStyles.center}}>
                    <Mapper items={images.filter((_, index) => index < maxCount)}>
                        <OverflowImage size={size}/>
                    </Mapper>
                </div>
            </Badge>
        </div>
    )
}

const OverflowImage = props => {
    const {src, index, size} = props;
    return (
        <div style={{
            border: '1px solid white',
            marginLeft: takeIf(index, -32),
            borderRadius: size
        }} key={index}>
            <Image src={src} key={index} size={size}/>
        </div>
    )
}

export default OverflowImages;
