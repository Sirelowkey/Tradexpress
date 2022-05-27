import React from 'react'
import img7 from './images/Icon awesome-apple.svg'
import img8 from './images/Group 53.svg'
const Ready = () => {
  return (
    <div className='ppp'>
        <h6>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</h6>
        <h2>Create your account for free and start trading today!</h2>
        <button className='btn5'>Get Started</button>
        <div className='bbb'>
            <button className='bttnn1'>
                <img src={img7} alt="" />
                <div>
                    <p>Download on the</p>
                    <h6>App Store</h6>
                </div>
            </button>
            <button className='bttnn2'>
                <img src={img8} alt="" />
                <div>
                    <p>Get on</p>
                    <h6>Google Play</h6>
                </div>
            </button>
        </div>
    </div>
  )
}

export default Ready