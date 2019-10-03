import React, { Component } from 'react';
import './style.scss';

export default class Button extends Component {
    
    render() {
        return (
            <a className="button" href={this.props.path} style={{ padding: this.props.padding }}>{this.props.value}</a>
        )
    }
}
