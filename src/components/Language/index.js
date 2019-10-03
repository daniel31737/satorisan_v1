import React, { Component } from 'react';
import './style.scss';
import axios from 'axios';

export default class Lannguage extends Component {

    constructor() {
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(res => {
                const countries = res.data;
                this.setState({ countries })
            })
            .catch(error => {
                return error
            })
    }

    render() {
        const element = this.state.countries.map((items, index) => {
            return (
                <option key={index} value={items.name}>{items.name}</option>
            )
        })
        return (
            <span className="store-language-container">
                <div className="current-language">
                    <div className="icon-country"><ion-icon name="logo-vimeo"></ion-icon></div>
                    <span>vi</span>
                </div>
                <div className="store-selector">
                    <div className="selector-container">
                        <div className="country">
                            <label>Country</label>
                            <select>
                                {element}
                            </select>
                        </div>
                        <div className="language">
                            <label>Language</label>
                            <select>
                                <option value="vn">Vietnamese</option>
                                <option value="eng">English</option>
                                <option value="fr">France</option>
                            </select>
                        </div>
                        <button type="button">Confirm</button>
                    </div>
                </div>
            </span>
        )
    }
}
