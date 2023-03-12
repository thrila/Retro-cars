
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Detail from './pages/details/Details'

function App() {


  return (
    <div className='container'>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:symbol' element={<Detail />} />
    </Routes>
    </div>
  )
}

export default App
