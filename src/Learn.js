import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/TradExpress.svg'

const Learn = () => {
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
                      <Link to='/Instant'>Instant Buy/Sell</Link>
                      </li>
                      <li className="nav-item">
                      <Link to='/Learn'>Learn</Link>
                      </li>
                      <li className="nav-item">
                      <button className='btn1'>
                      <Link to='/Log'>Log In</Link>
                      </button>
                      </li>
                      <li className="nav-item">
                      <button className='btn2'>
                      <Link to='/Start'>Get Started</Link>
                      </button>
                      </li>
                  </ul>
                  </div>
              </div>
              </nav>
          </div>
      </div>
    )
  }
  
  export default Learn