import React from 'react';
import Map from 'react-map-gl/maplibre';
export class MapEditor extends React.Component {
    render() {
        return (
            <div>
                <Map
                    initialViewState={{
                        longitude: -122.4,
                        latitude: 37.8,
                        zoom: 14
                    }}
                    style={{ width: '100%', height: '100%' }}
                    mapStyle="https://api.maptiler.com/maps/basic-v2-dark/style.json?key=YhIvc4qfFYwztR7fIzod"
                />
            </div>
        )
    }
}