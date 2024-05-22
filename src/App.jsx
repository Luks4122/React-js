import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/NavBar/NavBar'
import { Acerca } from './components/pages/Acerca'
import { Contacto } from './components/pages/Contacto'
import { Servicios } from './components/pages/Servicios'
import { Inicio } from './components/pages/Inicio'





function App() {

  return (  
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/acerca" element={<Acerca />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/servicios" element={<Servicios />}/>
      </Routes>
    </div>
  )
}

export default App
