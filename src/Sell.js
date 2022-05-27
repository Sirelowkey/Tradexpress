import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/TradExpress.svg'

const Sell = () => {
  return (
    <div>
      <div className='navv'>
        <nav className="navbar navbar-expand-lg navbar-light ">
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
                  <Link to='/Learn' class="nav-link active text-white" aria-current="page">Learn</Link>
                  </li>
                  <li className="nav-item">
                  <button className='btn1'>
                  <Link to='/Log' class="nav-link active text-white" aria-current="page">Log In</Link>
                  </button>
                  </li>
                  <li className="nav-item">
                  <button className='btn2'>
                  <Link to='/Start' class="nav-link active text-black" aria-current="page">Get Started</Link>
                  </button>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>




      <div className='bform'>
        <h2>Buy/Sell Instantly</h2>
        <div className='bbtn'>
          <button className='bbtn2'>
            <Link to='/Buy' className='linkk'>Buy</Link>
          </button>
          <button className='bbtn1'>
            <Link to='/Sell' className='linkk'>Sell</Link>
          </button>
        </div>
        <div className='curren'>
          <div>
            <h6>Coin to Sell</h6>
            <div class="dropdown">
              <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Etherium(ETH)
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Litecoin (LTC)</a></li>
                <li><a class="dropdown-item" href="#">Cardano (ADA)</a></li>
                <li><a class="dropdown-item" href="#">Stellar (XLM)</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h6>Currency</h6>
            <div>
              <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Nigerian Naira(NGN)
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">U.S. Dollar (USD)</a></li>
                <li><a class="dropdown-item" href="#">European Euro (EUR)</a></li>
                <li><a class="dropdown-item" href="#">British Pound Sterling (GBP)</a></li>
              </ul>
            </div>
          </div>
        </div>
        <h6>Amount</h6>
        <div class="input-group mb-3" id='dropdown'>
          <span class="input-group-text" id="basic-addon1">NGN</span>
          <input type="number" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <button className='ctn'>Continue</button>
      </div>
    </div>
  )
}

export default Sell