import React from 'react'
import All from './All'
import Customer from './Customer'
import Data from './Data'
import Footer from './Footer'
import Nxt from './Nxt'
import Ready from './Ready'
import Why from './Why'

const Home = () => {
  return (
    <div>
        <All/>
        <Data/>
        <Why/>
        <Nxt/>
        <Ready/>
        <Customer/>
        <Footer/>
    </div>
  )
}

export default Home