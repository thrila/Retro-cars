import React from 'react'
import Stocklist from '../../components/Stocklist'
import Autocomplete from '../../components/Autocomplete'
import trade from '../../assets/trade.png'

const Home = () => {
  return (
    <div>
     <div className='text-center'>
      <img src={trade} alt="stock" width={250} height={150} />
     </div>
      <Autocomplete />
      <Stocklist />
      
    </div>
  )
}

export default Home