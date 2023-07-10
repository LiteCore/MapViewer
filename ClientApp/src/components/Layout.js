import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavPanel } from './NavPanel';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavPanel />
                <Container>
                    {this.props.children}
                </Container>
            </div >
        );
    }
}
