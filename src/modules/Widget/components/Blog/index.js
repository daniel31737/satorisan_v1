import React from 'react';
import './style.scss';

const imageBlog = [
    {
        id: 1,
        imageSrc: "https://scontent.cdninstagram.com/vp/dbbb72c9faab5c1d76f179fa1f5aaa10/5E31A7E6/t51.2885-15/sh0.08/e35/p640x640/69750772_2417668608311333_6311532258529157835_n.jpg?_nc_ht=scontent.cdninstagram.com",
        alt: "1"
    },
    {
        id: 2,
        imageSrc: "https://scontent.cdninstagram.com/vp/d83d1e85d6fcbab89e8a32a0fd22cfff/5E1A7FE2/t51.2885-15/sh0.08/e35/p640x640/70333880_402578263738016_658469161348112096_n.jpg?_nc_ht=scontent.cdninstagram.com",
        alt: "2"
    },
    {
        id: 3,
        imageSrc: "https://scontent.cdninstagram.com/vp/30a4b0f7c75d4d43e4644a3cc0a22247/5E1B5424/t51.2885-15/sh0.08/e35/p640x640/70992638_432400574077696_1365745383165526632_n.jpg?_nc_ht=scontent.cdninstagram.com",
        alt: "3"
    },
    {
        id: 4,
        imageSrc: "https://scontent.cdninstagram.com/vp/4cf0092fef4e540ff744a0da5bdb1a2f/5E20E53F/t51.2885-15/sh0.08/e35/p640x640/71043825_222654028720363_6249179486331821877_n.jpg?_nc_ht=scontent.cdninstagram.com",
        alt: "4"
    },
    {
        id: 5,
        imageSrc: "https://scontent.cdninstagram.com/vp/8363386e6c205b50d84167756c470fad/5E296D89/t51.2885-15/sh0.08/e35/p640x640/70128247_155906035504705_429581267076833720_n.jpg?_nc_ht=scontent.cdninstagram.com",
        alt: "5"
    },
    {
        id: 6,
        imageSrc: "https://scontent.cdninstagram.com/vp/09997068c685a531cb886a267bd9dace/5E1F408B/t51.2885-15/sh0.08/e35/p640x640/69972217_398921111005916_2535086694696848823_n.jpg?_nc_ht=scontent.cdninstagram.com",
        alt: "6"
    },
    {
        id: 7,
        imageSrc: "https://scontent.cdninstagram.com/vp/3baf0ff4213e0fae04c72eefca46037f/5E305EC4/t51.2885-15/sh0.08/e35/p640x640/70192420_365131777701977_1299869856560676615_n.jpg?_nc_ht=scontent.cdninstagram.com",
        alt: "7"
    },
    {
        id: 8,
        imageSrc: "https://scontent.cdninstagram.com/vp/46b1752f8e9301cb45235da58ef545f7/5D979900/t51.2885-15/sh0.08/e35/s640x640/69499460_736428793473851_8409445682402037788_n.jpg?_nc_ht=scontent.cdninstagram.com",
        alt: "8"
    }
]

const imageItem = (imageBlog) => {
    const itemImage = imageBlog.map((value, index) => {
        return (
            <div className="blog-item">
                <a href="/" key={index}>
                    <img src={value.imageSrc} alt={value.alt} />
                </a>
            </div>
        )
    })
    return itemImage;
}

export default function Blog() {
    return (
        <div className="main-blog">
            <h2>#satorisan</h2>
            <div className="blog-wrapper">
                {imageItem(imageBlog)}
            </div>
            <div className="blog-end">&nbsp;</div>
        </div>
    )
}
