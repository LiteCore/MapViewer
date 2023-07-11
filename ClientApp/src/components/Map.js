import React from 'react';
import Map from 'react-map-gl';
import DrawControl from './DrawControl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
//import process from 'dotenv/config'
//import ControlPanel from './ControlPanel';

export class MapEditor extends React.Component {
    
    render() {
        const onUpdate = function () {

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
                    mapStyle="https://api.maptiler.com/maps/basic-v2-dark/style.json?key=YhIvc4qfFYwztR7fIzod"
                >
                    <DrawControl
                        position="top-left"
                        displayControlsDefault={false}
                        controls={{
                            polygon: true,
                            trash: true
                        }}
                    />
                </Map>
            </div>
        )
    }
}