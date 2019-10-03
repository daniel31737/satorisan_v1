import React from 'react';
import { Link } from 'react-router-dom';

export default class SubMenuFooter extends React.Component {
    
    render() {
        return (
            <li>
                <Link to={this.props.subMenuFooter.path}>{this.props.subMenuFooter.name}</Link>
            </li>
        )
    }
}