import React from 'react'
import './style.scss';
import Slide from './components/Slide';
import Slogan from './components/Slogan';
import About from './components/About';
import Blog from './components/Blog';

export default function Widget() {
    return (
        <div className="main">
            <div className="col-main">
                <Slide />
                <Slogan />
                <About />
                <Blog />
            </div>
        </div>
    )
}
