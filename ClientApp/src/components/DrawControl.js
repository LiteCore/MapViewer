import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { useControl } from 'react-map-gl';
import { useEffect } from 'react';

export function DrawControl(props) {
    var draw;

    useEffect(() => {
        fetch('api/Home/GetAllFeatures')
            .then(response => response.json())
            .then(result => {
                result.forEach(feature => {
                    draw.add(feature);
                })
            })
    }, [draw])
    useControl(
        () => {
            draw = new MapboxDraw(props);
            return draw;
        },
        ({ map }) => {
            map.on('draw.create', props.onCreate);
            map.on('draw.update', props.onUpdate);
            map.on('draw.delete', props.onDelete);
        },
        ({ map }) => {
            map.off('draw.create', props.onCreate);
            map.off('draw.update', props.onUpdate);
            map.off('draw.delete', props.onDelete);
        },
        {
            position: props.position
        }
    );

    return null;
}
DrawControl.defaultProps = {
    onCreate: () => { },
    onUpdate: () => { },
    onDelete: () => { }
};