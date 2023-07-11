import React from 'react';
import { Nav } from 'rsuite';
import { Link } from 'react-router-dom';

const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
        {children}
    </Link>
));

export class NavPanel extends React.Component {
    render() {
        return (
            <div className="container-fluid nav-panel text-center">
                <div className="row">
                    <div className="col text-start m-2 ms-4">
                        <h3 className="">ProjectMap</h3>
                    </div>
                    <div className="col text-end m-2">
                        <Nav>
                            <Nav.Item className="me-1" href="/" as={NavLink}>Home</Nav.Item>
                            <Nav.Item className="me-1" href="/Map" as={NavLink}>Map</Nav.Item>
                            <Nav.Item className="me-1" href="/Editor" as={NavLink}>Editor</Nav.Item>
                        </Nav>
                    </div>
                </div>
            </div>
        )
    }
}
