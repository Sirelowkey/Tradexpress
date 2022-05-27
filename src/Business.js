import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/TradExpress.svg'

const Business = () => {
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
  
  
        <div className='welcome'>
          <h2>Welcome!</h2>
          <div className='btnss'>
            <button className='bttns2'>
              <Link to='/Individual' className='linkk'>Individual</Link>
            </button>
            <button className='bttn'>
              <Link to='/Business' className='linkk'>Business</Link>
            </button>
          </div>
  
          <div className='ten'>
            <input class="form-control" id='foorm' type="text" placeholder="Username" aria-label="default input example"/>
            <input class="form-control" id='foorm' type="text" placeholder="Business Name" aria-label="default input example"/>
            <input class="form-control" id='foorm' type="text" placeholder="Email" aria-label="default input example"/>
            <input class="form-control" id='foorm' type="text" placeholder="Phone Number" aria-label="default input example"/>
            <input class="form-control" id='foorm' type="text" placeholder="Referral Code (optional)" aria-label="default input example"/>
          </div>
  
          <div className='tan'>
            <p>By clicking the Sign up button below, you agree to the TradExpress <a href="">terms and agreement</a></p>
          </div>
  
          <div>
            <button className='sup'>Sign Up</button>
          </div>
  
          <div className='ndd'>
            <p>Already have an account? <Link to='/Log'>click here</Link></p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Business