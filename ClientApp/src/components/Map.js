import React, { useState, useEffect } from 'react';
import { Layer, Map, Source } from 'react-map-gl';
import { DrawControl } from './DrawControl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
//import process from 'dotenv/config'
//import ControlPanel from './ControlPanel';

export default function MapEditor() {
    //const [data, setData] = useState(null);

    

    const onCreate = function (e) {
        SendFeature(e.features[0])
    }
    const onUpdate = function (e) {
        SendFeature(e.features[0])
    }
    const onDelete = function (e) {
        DeleteFeature(e.features[0].id)
    }

    function SendFeature(feature) {
        feature.properties = JSON.stringify(feature.properties);
        fetch('api/Home/SendFeature', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(feature)
        })
    }

    function DeleteFeature(id) {
        fetch('api/Home/DeleteFeature', {
            body: { id: id }
        })
    }

    const layerStyle = {
        id: "tt",
        type: "fill",
        paint: {
            "fill-color": "#00ffff"
        }
    }

    return (
        <div style={{ height: '100%' }}>
            <Map
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                initialViewState={{
                    longitude: 73.366669,
                    latitude: 54.983334,
                    zoom: 14
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle={process.env.REACT_APP_MAPTILER_URL}
            >
                <DrawControl
                    position="top-left"
                    displayControlsDefault={false}
                    controls={{
                        polygon: true,
                        trash: true
                    }}
                    onCreate={onCreate}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
                {/*<Source type="geojson" data={data} >*/}
                {/*    <Layer {...layerStyle} />*/}
                {/*</Source>*/}
            </Map>
        </div>
    )
}