import React, { Component } from 'react';
import './style.scss';

export default class Button extends Component {
    render() {
        const infoButton = this.props;
        return (
            <a className="button" href={infoButton.path} style={{ padding: infoButton.padding }}>{infoButton.value}</a>
        )
    }
}
