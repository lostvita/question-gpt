import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Question from './pages/Question'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question' element={<Question />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
