import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Records from './pages/Records'
import Questions from './pages/Questions'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/records' element={<Records />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
