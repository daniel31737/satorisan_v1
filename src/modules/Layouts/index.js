import React, { Component } from 'react';
import DefaultHeader from 'modules/Layouts/containers/DefaultHeader';
import DefaultFooter from 'modules/Layouts/containers/DefaultFooter';
import Widget from 'modules/Widget';
import './style.scss';

export default class Layouts extends Component {

    constructor() {
        super();
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                this.setState({ scrolled: true })
            } else {
                this.setState({ scrolled: false })
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <React.Fragment>
                <div id="header" className={this.state.scrolled ? "header-container-fixed" : "header-container"}>
                    <div id="white-overlay"></div>
                    <div className="header-wrapper">
                        <DefaultHeader />
                    </div>
                </div>
                <Widget />
                <DefaultFooter />
            </React.Fragment>
        )
    }
}
