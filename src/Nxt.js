import React from 'react'
import img5 from './images/Group 28.svg'
import img6 from './images/Group 52.svg'
const Nxt = () => {
    return (
      <div className='nxt'>
          <h1>Buy and Sell Cryptocurrency in 3 simple steps</h1>
          <div className="container">
              <div className="row">
                  <div className="col">
                      <button className='num'>1</button>
                  <h3>Create a free Account</h3>
                  <p>Sign up for your free TradExpress wallet on web,IOS or Android and follow oue easy process to set up your profile.</p>
                  </div>
                  <div className="col">
                  <img src={img5} alt="" />
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col">
                  <img src={img6} alt="" />
                  </div>
                  <div className="col">
                      <button className='num'>2</button>
                  <h3>Deposit</h3>
                  <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col">
                      <button className='num'>3</button>
                  <h3>Buy/Sell Crypto</h3>
                  <p>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.</p>
                  </div>
                  <div className="col">
                  <img src={img5} alt="" />
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Nxt