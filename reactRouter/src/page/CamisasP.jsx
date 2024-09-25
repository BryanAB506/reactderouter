import React from 'react'
import '../styles/Camisas1.css'
import Camisas from '../components/Camisas';
import Header from './Header';

export default function CamisasP() {
  return (
    <div>
        <Header/>

        <div id='camisas'>
        <Camisas/>
        </div>
    </div>
  )
}
