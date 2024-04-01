import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Menu from './components/menu/Menu'
import NotFound from './components/404NotFound'


function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Link to={'/'}>Home</Link>
      <div></div>
      <Link to={'/menu'}>Menu</Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
