import React, {useEffect, useState} from 'react';
import appStyles from "../../utils/styles";
import Show from "../Show";

const Rate = props => {
    const {value, total, size: _size, style} = props;
    const [stars, setStars] = useState([])
    const size = _size || 24

    useEffect(() => {
        const _stars = Array(total || 5).fill(0).map((i, index) => index < value ? 1 : 0);
        setStars(_stars)
    }, [total, value]);

    return (
        <div style={{...appStyles.center, ...appStyles.grid, ...(style || {})}}>
            {stars.map((i, index) => {
                return (
                    <div style={{margin: 4}} key={index}>
                        <Show condition={i}>
                            <props.filledStarIcon style={{color: 'orange', fontSize: size}}/>
                        </Show>
                        <Show condition={!i}>
                            <props.emptyStarIcon style={{color: "orange", fontSize: size}}/>
                        </Show>
                    </div>
                )
            })}
        </div>
    )
}

export default Rate
