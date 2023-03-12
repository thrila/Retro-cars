import React from 'react'
import Stocklist from '../../components/Stocklist'
import Autocomplete from '../../components/Autocomplete'

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <Stocklist />
      <Autocomplete />
    </div>
  )
}

export default Home