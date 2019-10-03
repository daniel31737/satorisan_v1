import React from 'react';
import './style.scss';
import Button from 'components/Button';

const abouts = [
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

const infoAbout = (abouts) => {
    
    if (abouts !== null) {
        let about = abouts.map((item, index) => {
            return (
                <div className={item.float} key={index}>
                    <div className="info-about">
                        <div className="center-div">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <Button path="/" padding="14px 50px" value={item.valueButton} />
                        </div>
                    </div>
                    <div className="image-about">
                        <img src={item.image} alt={item.alt} />
                    </div>
                </div>
            )
        })
        return about;
    }
    return null;
}

export default function About() {
    
    return (
        <div className="main-about">
            {infoAbout(abouts)}
        </div>
    )
}
