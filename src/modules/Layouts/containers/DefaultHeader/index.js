import React, { Component } from 'react'
import Menu from 'components/Menu';
import SkipLinks from 'components/SkipLinks';
import LogoContainer from 'components/Logo';

export default class DefaultHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu />
                <LogoContainer />
                <SkipLinks />
            </React.Fragment>
        )
    }
}
