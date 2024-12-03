import React from 'react'
import Nav from '../componenets/Nav.js';
import './About.css';

import background from '../images/image1.jpeg'

export default function About() {
    return (
        <>
            <div className='slide'>
                <Nav>

                </Nav>
                <div className='slide-bg'>
                    <img src={background} alt="" />
                </div>
            </div>

        </>
    )
}
