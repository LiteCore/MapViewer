import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavPanel } from './NavPanel';
import { Footer } from './Footer';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavPanel />
                <div className="height-90 container">
                    {this.props.children}
                </div>
                <Footer/>
            </div >
        );
    }
}
