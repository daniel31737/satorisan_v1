import React, { Component } from 'react';
import Feedback from 'components/Feedback';
import MenuFooter from 'components/MenuFooter';
import Copyright from 'components/Copyright';
import './style.scss';

export default class DefaultFooter extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    <Feedback />
                    <MenuFooter />
                    <Copyright />
                </div>
            </div>
        )
    }
}
