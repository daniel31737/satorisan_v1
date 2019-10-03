import React from 'react'
import Menu from 'components/Menu';
import SkipLinks from 'components/SkipLinks';
import LogoContainer from 'components/Logo';

export default function DefaultHeader() {
    return (
        <React.Fragment>
            <Menu />
            <LogoContainer />
            <SkipLinks />
        </React.Fragment>
    )
}
