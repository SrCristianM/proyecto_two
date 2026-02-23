import './App.css'

import Inicio from './components/pages/Inicio'
import Caracteristicas from './components/pages/Caracteristicas'
import Historia from './components/pages/Historia'
import Cristian from './components/pages/Cristian'
import Layout from './components/layout/Layout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="caracteristicas" element={<Caracteristicas />} />
          <Route path="historia" element={<Historia />} />
          <Route path="Cristian" element={<Cristian />} />
          <Route path="Cristian2" element={<Cristian/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
