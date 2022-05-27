import React from 'react'
import box from './images/Union 1.svg'
import quotes from'./images/Group 8699.svg'
import face from './images/14372108_1118174888267160_1600554326723509758_o.jpg'

const Customer = () => {
  return (
    <div className='oooo'>
        <h2>Customer's Review</h2>
        <div class="container">
            <div class="row">
                <div class="col" id='brrr'>
                    <img src={box} alt="" />
                    <div className='quotes'>
                        <img src={quotes} alt="" />
                        <p>Trading on TradExpress mobile and web platforms has been a smooth experience for me quite easy to navigate.</p>
                    </div>
                </div>
                <div class="col" id='brrr'>
                    <img src={box} alt="" />
                    <div className='quotes'>
                        <img src={quotes} alt="" />
                        <p>They have the best rate compared to other platforms with fast payout.</p>
                    </div>
                </div>
                <div class="col" id='brrr'>
                    <img src={box} alt="" />
                    <div className='quotes'>
                        <img src={quotes} alt="" />
                        <p>Easy to fund and withdraw coins or cash on their platform, i will definitely trade with them again.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row" id='face'>
                <div class="col">
                <img src={face} alt="" />
                <div className='toppp'>
                    <h6>Ireti</h6>
                    <p>USA</p>
                </div>
                </div>
                <div class="col">
                <img src={face} alt="" />
                <div className='toppp'>
                    <h6>Bayo</h6>
                    <p>USA</p>
                </div>
                </div>
                <div class="col">
                <img src={face} alt="" />
                <div className='toppp'>
                    <h6>Olagoke</h6>
                    <p>USA</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customer