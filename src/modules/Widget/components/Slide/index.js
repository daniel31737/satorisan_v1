import React from 'react'
import './style.scss';
import Button from 'components/Button';

export default function Slide() {
    return (
        <React.Fragment>
            <div className="main-slide">
                <div className="slide-content">
                    <img src="https://satorisan.com/media/wysiwyg/HOME/hero-image-home-01.jpg" alt="background" />
                </div>
                <div className="slide-title">
                    <h2>New Collection</h2>
                    <p><b>Fall-Winter 2019</b></p>
                    <Button path="/" padding="12px 40px" value="New Collection" />
                </div>
            </div>
        </React.Fragment>
    )
}
