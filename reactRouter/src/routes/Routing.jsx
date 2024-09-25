import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../page/Login'
import Register from '../page/Register'
import Header from '../page/Header';
import Contact from '../page/Contact';
import Main from '../page/Main';
import ProtectedRoute from '../protect';
import Footer from '../page/Footer';
import Carrusel from '../page/Carrusel';
import Vestidos from '../page/Vestidos';
import Admin from '../page/Admin';
import SobreNosotros from '../page/SobreNosotros';
import CamisasP from '../page/CamisasP';
import MañanitasP from '../page/MañanitasP';
import TrajessP from '../page/TrajessP';




export default function Routing() {
  return (
   <Router>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Carrusel" element={<Carrusel />} />
      <Route path="/Vestidos" element={<Vestidos />} />
      <Route path="/Admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
      <Route path="/SobreNosotros" element={<SobreNosotros />} />
      <Route path="/CamisasP" element={<CamisasP />} />
      <Route path="/MañanitasP" element={<MañanitasP />} />
      <Route path="/Trajessp" element={<TrajessP />} />
      <Route path="/CamisasP" element={<CamisasP />} />
    </Routes>
   </Router>


  )
}
