import React from 'react'
import SobreNosotrosP from '../components/SobreNosotrosP';
import Header from './Header';
import Footer from './Footer';
import Mapa from '../components/Location';

export default function SobreNosotros() {
  return (
    <div>

      <Header/>
      <SobreNosotrosP/>
      <br />
      <br />
      <Mapa/>
      <Footer/>

    </div>
  )
}
