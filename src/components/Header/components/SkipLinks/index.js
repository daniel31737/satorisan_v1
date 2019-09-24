import React, { Component } from 'react'
import './style.scss';

export default class SkipLinks extends Component {
    render() {
        return (
            <div className="skip-links">
                <div className="account-cart-wrapper">
                    <div className="header-minicart">
                        <a href="/cart">
                            <span><ion-icon name="cart"></ion-icon></span>
                        </a>
                    </div>
                    <a href="/login" className="header-link">
                        <span>My Account</span>
                    </a>
                    <div className="store-language-container">
                    </div>
                    <div id="header-search" className="skip-content">
                        <form>
                            <div className="input-box">
                                <label>Search</label>
                                <input type="search" id="search"></input>
                                <button type="submit" className="search-button"><ion-icon name="search"></ion-icon></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
