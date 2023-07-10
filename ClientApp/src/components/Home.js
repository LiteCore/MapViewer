import React from 'react';
export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>
                    here should be some text about this shit, but i am too lazy for it
                </p>
                <p>
                    Component description:
                </p>
                <ul>
                    <li>Map:
                        <p>
                            Leaflet map for creating geometry and write to DB
                        </p>
                    </li>
                    <li>Editor:
                        <p>
                            Editor for created geometry metadata.
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}