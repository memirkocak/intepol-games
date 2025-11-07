import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Root from './layouts/Root'
import Game from './pages/Game'

function App() {
  return (
    <BrowserRouter>
    <Root>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/game' element={<Game />}></Route>
      </Routes>
    </Root>
    </BrowserRouter>
  )
}

export default App
