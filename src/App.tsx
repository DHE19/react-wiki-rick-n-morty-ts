import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Episodes from './pages/Episodes'
import Location from './pages/Location'



function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar/>  
      </div>

      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/episodes' element ={<Episodes/>}/>
        <Route path='/location' element ={<Location/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
