import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/TradExpress.svg'
import img2 from './images/Group 68.svg'
import img3 from './images/Group 69.svg'

const All = () => {
  return (
    <div>
      <div className='pure'>
        <nav className="navbar navbar-expand-lg navbar-light " id='bbbbb'>
          <div className="container-fluid">
            <Link to='/'><img src={img1} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav" >
                <li className="nav-item">
                  <Link to='/Instant' class="nav-link active text-white" aria-current="page">Instant Buy/Sell</Link>
                </li>
                <li className="nav-item">
                  <Link to='/Learn' class="nav-link active text-white">Learn</Link>
                </li>
                <li className="nav-item">
                  <button className='btn1'>
                  <Link to='/Log' class="nav-link active text-white">Log In</Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button className='btn2'>
                  <Link to='/Start' class="nav-link active text-">Get Started</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='circle1'> </div>
        <div className='circle2'></div>
        <div className='txt'>
          <h1>Buy, sell and manage your crypto on TradExpress</h1>
          <p>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC and XRP </p>
          <button className='btn3'>
            <Link to='/Start' class="nav-link active text-black">Get Started</Link>
          </button>
          <div className='ids'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default All