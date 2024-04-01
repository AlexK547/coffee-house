import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Menu from './components/menu/Menu'

function App() {

  return (
    <BrowserRouter>
      <Link to={'/home'}>Home</Link>
      <div></div>
      <Link to={'/menu'}>Menu</Link>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
