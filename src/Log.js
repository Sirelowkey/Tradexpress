import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/TradExpress.svg'

const Log = () => {
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
                  <Link to='/Instant' class="nav-link active text-white mt-0 me-0 me-lg-4" aria-current="page">Instant Buy/Sell</Link>
                  </li>
                  <li className="nav-item">
                  <Link to='/Learn' class="nav-link active text-white mt-0 me-0 me-lg-4" aria-current="page">Learn</Link>
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

      <div className='logg'>
        <h2>Welcome Back!</h2>
        <div>
          <input class="form-control" id='foormm' type="text" placeholder="Username" aria-label="default input example"/>
          <input class="form-control" id='foormm' type="text" placeholder="Password" aria-label="default input example"/>
        </div>

        <div>
          <div class="form-check" id='hhhh'>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" id='rem' for="flexCheckDefault">
              Remember Password
            </label>
            <a href="">Forgot Password?</a>
          </div>

          <div>
            <button className='sup'>Log In</button>
          </div>

          <div className='ndd'>
            <p>New User ? <Link to='/Start' className='kkkk'>click here</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Log