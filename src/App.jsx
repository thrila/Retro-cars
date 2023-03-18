
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Detail from './pages/details/Details'
import FourZeroFour from './pages/404/404'

function App() {


  return (
    <div className='container'>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:symbol' element={<Detail />} />
      <Route path='*' element={<FourZeroFour />} />
    </Routes>
    </div>
  )
}

export default App
