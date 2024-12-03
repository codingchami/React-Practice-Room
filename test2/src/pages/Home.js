import React from 'react'
import Nav from '../components/Nav'
import Button from '../components/Button.js'

export default function Home(props) {
    return (
        <>
            {/* <Nav age="50" name="Hashini Navodya"></Nav> */}

            {/* <Nav firstName="Nimal" lastName="Jayawikrama" age="40" ></Nav> */}

            <Nav firstName={props.firstName} lastName={props.lastName} age={props.age}></Nav>

            <Button text="Read More"></Button>
            <Button text="Contact"></Button>

            {/* <h1>Home</h1> */}
        </>



    )
}
