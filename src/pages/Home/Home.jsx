import React from 'react'
import Stocklist from '../../components/Stocklist'
import Autocomplete from '../../components/Autocomplete'
import trade from '../../assets/trade.png'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
     <div className='text-center'>
      <img src={trade} alt="stock" width={250} height={150} />
     </div>
      <Autocomplete />
      <Stocklist />
      <Footer />
    </div>
  )
}

export default Home