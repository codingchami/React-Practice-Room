import React from 'react'
import './Nav.css'

export default function Nav(props) {
    let name = "Sahan Kumara";
    let nameArray =["Nimal","Kamal","LOGO","Sithmi","Hashini"];

    console.log(props.age)


    return (
        <>
            <nav>
                <div class="nav-content">
                    <div class="nav-content-1">
                        <h1>{nameArray[2]}</h1>
                    </div>
                    <div class="nav-content-2">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Service</a>
                            </li>
                            <li>
                                <a href="">Product</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>

                        </ul>

                        {/* <h3>{name}</h3> */}
                        {/* <h4>{props.name}</h4> */}
                        <h3>{props.firstName +" "+props.lastName}</h3>
                    </div>
                </div>
            </nav>
        </>
    )
}
