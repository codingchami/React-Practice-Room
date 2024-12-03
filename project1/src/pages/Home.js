// function Home (){
//     return(
//         <div>
//        <h1>Home</h1>
//      <div/>
//     )
     
// }

// export default Home;

import React from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div>
        <Nav></Nav>
      <h1>Home</h1>
      <Footer></Footer>
    </div>
  )
}
