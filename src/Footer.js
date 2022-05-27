import React from 'react'
import twitter from './images/Icon awesome-twitter.svg'
import telegram from './images/Icon awesome-telegram.svg'
import whatsapp from './images/Icon ionic-logo-whatsapp.svg'
import facebook from './images/Icon awesome-facebook.svg'
import circle from './images/Group 77.svg'


const Footer = () => {
    return (
      <div className='footer'>
          <ul>
              <li>
                  <h6>Products</h6>
                  <p>Bitcoin</p>
                  <p>Alt</p>
                  <p>Fiat</p>
                  <p>Refill</p>
                  <p>P2P</p>
              </li>
              <li className='items'>
                  <h6>Learn</h6>
                  <p>Blog</p>
                  <p>Help Center</p>
              </li>
              <li className='items'>
                  <h6>Contact</h6>
                  <p>hello@tradeexpress.com</p>
                  <p>support@tradeexpress.com</p>
                  <div>
                      <img src={twitter} alt="" />
                      <img src={telegram} alt="" />
                      <img src={whatsapp} alt="" />
                      <img src={facebook} alt="" />
                  </div>
              </li>
              <li className='items'>
                  <h6>Company</h6>
                  <p>About Us</p>
                  <p>Careers</p>
                  <p>Rates</p>
                  <p>Mobile</p>
              </li>
              <li className='items'>
                  <h6>Legal</h6>
                  <p>Privacy Policy</p>
                  <p>Anti-Money Laundering</p>
                  <p>Terms and Conditions</p>
              </li>
          </ul>
          <div className='ftxt'>
              <p><img src={circle} alt="" />2021 TradExpress Technologies All Rights Reserved</p>
          </div>
      </div>
    )
  }
  
  export default Footer