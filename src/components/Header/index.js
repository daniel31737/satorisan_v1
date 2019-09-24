import React, { Component } from 'react';
import './style.scss';
import SkipContent from './components/SkipContent';
import LogoContainer from './components/LogoContainer';
import SkipLinks from './components/SkipLinks';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div id="white-overlay"></div>
                <div className="header-container">
                    <SkipContent />
                    <LogoContainer />
                    <SkipLinks />
                </div>
            </div>
        )
    }
}
