import React, { Component } from 'react'
import './style.scss';
import Lannguage from 'components/Language';

export default class SkipLinks extends Component {
    
    constructor() {
        super();
        this.state = {
            isShow: false
        }
    }

    showInput = () => {
        this.setState({ isShow: !this.state.isShow })
    }

    render() {
        const { isShow } = this.state;
        return (
            <div className="skip-links">
                <div id="skip-links-wrapper" className="account-cart-wrapper">
                    <div id="header-search">
                        <div className="input-box">
                            <input style={{display: isShow ? 'block' : 'none'}} className="search-input" type="search"></input>
                            <button className="search-button" onClick={this.showInput}>
                                <ion-icon name="search"></ion-icon>
                            </button>
                        </div>
                    </div>
                    <Lannguage />
                    <div className="header-link">
                        <a href="/login">
                            <span>My Account</span>
                        </a>
                    </div>
                    <div className="header-minicart">
                        <a href="/cart">
                            <span><ion-icon name="cart"></ion-icon></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
