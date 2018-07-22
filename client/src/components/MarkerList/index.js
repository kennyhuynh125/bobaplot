import React from 'react';
import PopupMarker from '../PopupMarker';

const MarkerList = (props) => {
    const items = props.markers.map(({key, ...props}) => (
        <PopupMarker key={key} {...props} />
    ))
    return <div>{items}</div>
}

export default MarkerList;
