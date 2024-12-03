import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
        <>
            <nav>
                <div className='nav-content'>
                    <div className='nav-content-1'>
                        <h1>LOGO</h1>
                    </div>
                    <div className='nav-content-2'>
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Product</a>
                            </li>
                            <li>
                                <a href="">Service</a>
                            </li>
                            <li>
                                <a href="">Cotact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-content-3'>
                        <button></button>
                    </div>
                </div>


            </nav>
        </>
    )
}
