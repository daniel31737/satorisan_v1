import React, { Component } from 'react';
import './style.scss';

export default class SkipContent extends Component {
    render() {
        return (
            <div id="header-nav" className="skip-content">
                <nav id="nav">
                    <ol className="nav-primary">
                        <li>
                            <a href="/">
                                <i className="icon-menu-3-lines"><ion-icon name="menu"></ion-icon></i>
                            </a>
                            <div className="dropmenu">
                                <p>Brand</p>
                                <ul>
                                    <li><a href="/">About Satorisan</a></li>
                                    <li><a href="/">Sign Up</a></li>
                                    <li><a href="/">My Account</a></li>
                                    <li><a href="/">Contacts Us</a></li>
                                    <li><a href="/">FAQs</a></li>
                                    <li><a href="/">Shipments</a></li>
                                    <li><a href="/">Changes and returns</a></li>
                                    <li><a href="/">Terms of Use</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/men">Men</a>
                            <div className="dropmenu">
                                <p>Shop Men</p>
                                <ul>
                                    <li><a href="/">All</a></li>
                                    <li><a href="/">Casual</a></li>
                                    <li><a href="/">Tate</a></li>
                                    <li><a href="/">Cold</a></li>
                                    <li><a href="/">Rustic</a></li>
                                    <li><a href="/">Kiso</a></li>
                                    <li><a href="/">Venice</a></li>
                                    <li><a href="/">Benirras</a></li>
                                    <li><a href="/">Uwabaki</a></li>
                                    <li><a href="/">Accessories</a></li>
                                    <li><a href="/">Spare parts</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="/women">Women</a></li>
                        <li><a href="/stores">Stores</a></li>
                    </ol>
                </nav>
            </div>
        )
    }
}
