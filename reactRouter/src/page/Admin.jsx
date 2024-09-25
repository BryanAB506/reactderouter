import React from 'react'
import AdminPage from '../components/AdminPage'
import Header from '../page/Header';
import Footer from './Footer';



function Admin() {
  return (
    <div>
      <Header/>
      <AdminPage/> 
      <div ><Footer/></div>
      

    </div>
  )
}

export default Admin
