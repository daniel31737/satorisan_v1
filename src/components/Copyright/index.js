import React from 'react'
import './style.scss';

const items = {
    payments: [
        {
            src: "https://satorisan.com/media/wysiwyg/HOME/visa-logo-png-2017.png",
            alt: "visa"
        },
        {
            src: "https://satorisan.com/media/wysiwyg/HOME/AXP.png",
            alt: "axp"
        },
        {
            src: "https://satorisan.com/media/wysiwyg/HOME/mc_vrt_opt_pos_73_3x.png",
            alt: "mastercard"
        },
        {
            src: "https://satorisan.com/media/wysiwyg/HOME/PP_logo_h_200x51.png",
            alt: "paypal"
        }
    ],

    socials: [
        {
            path: "https://www.facebook.com",
            icon: "logo-facebook"
        },
        {
            path: "https://www.instagram.com",
            icon: "logo-instagram"
        },
        {
            path: "https://www.twitter.com",
            icon: "logo-twitter"
        }
    ]
}

const showInfoPayment =  () => {

    if(items.payments !== null) {
        const infoPayment = items.payments.map((payment, index) => {
            return (
                <li key={index}>
                    <img src={payment.src} alt={payment.alt} />
                </li>
            )
        })
        return infoPayment;
    }
    return null;
}

const showInfoSocial = () => {

    if(items.socials !== null) {
        const infoSocial = items.socials.map((social, index) => {
            return (
                <li key={index}>
                    <a href={social.path}>
                        <ion-icon name={social.icon}></ion-icon>
                    </a>
                </li>
            )
        })
        return infoSocial;
    }
    return null;
}

export default function Copyright() {
    
    return (
        <div className="footer-end">
            <div className="payment">
                <ul className="payment-logo">
                    {showInfoPayment()}
                </ul>
            </div>
            <div className="social-copyright">
                <div className="social">
                    <ul>
                        {showInfoSocial()}
                    </ul>
                </div>
                <div className="copyright">
                    <label>© 2019 satorisan - all rights reserved</label>
                    <img src="https://satorisan.com/skin/frontend/satorisan/default/images/logo-without-name.svg" alt="satorisan" />
                </div>
            </div>
        </div>
    )
}
