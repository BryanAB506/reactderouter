import React from 'react'
import MainPage from "../components/MainPage";
import Footer from './Footer';
import Carrusel from './Carrusel';
import Header from './Header';
import '../styles/MainPage.css'
import NavScrollExample from '../components/HeaderPage';


export default function Main() {
  return (
    <div>
       <Header/>
       <Carrusel/>
       <MainPage/>
       <Footer/>
    </div>
  )
}
