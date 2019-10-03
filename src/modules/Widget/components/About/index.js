import React, { Component } from 'react';
import './style.scss';
import Button from 'components/Button';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            about: [
                {
                    title: 'Heisei',
                    description: 'A true fit for all',
                    valueButton: 'See the latest',
                    image: 'https://satorisan.com/media/wysiwyg/HOME/Modulos-image-home-Heisei.jpg',
                    alt: 'heisei',
                    float: 'about-content-left'
                },
                {
                    title: 'Kaizen',
                    description: 'Never-ending improvement',
                    valueButton: 'I want to meet them',
                    image: 'https://satorisan.com/media/wysiwyg/HOME/Modulos-image-home-Kaizen-2.jpg',
                    alt: 'kaizen',
                    float: 'about-content-right'
                },
                {
                    title: 'Meraki',
                    description: 'These boots are different boots',
                    valueButton: 'See our models',
                    image: 'https://satorisan.com/media/wysiwyg/HOME/Modulos-image-home-Meraki.jpg',
                    alt: 'meraki',
                    float: 'about-content-left'
                }
            ]
        }
    }
    render() {
        const item = this.state.about.map((value, index) => {
            return (
                <div className={value.float} key={index}>
                    <div className="info-about">
                        <div className="center-div">
                            <h2>{value.title}</h2>
                            <p>{value.description}</p>
                            <Button path="/" padding="14px 50px" value={value.valueButton} />
                        </div>
                    </div>
                    <div className="image-about">
                        <img src={value.image} alt={value.alt} />
                    </div>
                </div>
            )
        })
        return (
            <div className="main-about">
                {item}
            </div>
        )
    }
}
