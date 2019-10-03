import React from 'react';
import { Link } from 'react-router-dom';

export default class SubMenu extends React.Component {
    render() {
        return (
            <li>
                <Link to={this.props.subMenu.path}>{this.props.subMenu.name}</Link>
            </li>
        )
    }
}