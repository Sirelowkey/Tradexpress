import React, { useEffect, useState} from 'react'

const Data = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.coinlore.net/api/tickers/?start=100&limit=5')
          .then(response => response.json())
          .then(json => setData(json.data))
      }, [])
  return (
    <div className='data'>
        {data.map((x)=>{
            const{id, symbol, percent_change_24h, market_cap_usd} = x
            return(
                <div className='text' key={id}>
                    <ul className='dataa'>
                        <li className='lione'>
                        <h3 className='sym'>{symbol}/NGN-</h3>
                        </li>
                        <li className='litwo'>
                        <h3 className='change'>{percent_change_24h}</h3>
                        <h3 className='xxt'>{market_cap_usd} NGN</h3>
                        </li>
                    </ul>
                </div>
            )
        })}
    </div>
  )
}

export default Data

