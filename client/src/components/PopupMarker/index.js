import React from 'react';
import { Marker, Popup} from 'react-leaflet';

const PopupMarker = (props) => {
    return (
        <Marker position={props.position}>
            <Popup>{props.children}</Popup>
        </Marker>
    )
}

export default PopupMarker;
