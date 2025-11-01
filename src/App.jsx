import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Root from './layouts/Root'

function App() {
  return (
    <BrowserRouter>
    <Root>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Root>
    </BrowserRouter>
  )
}

export default App
