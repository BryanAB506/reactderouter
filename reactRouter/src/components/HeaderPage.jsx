
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/HeaderPage.css';
import logoS from '../assets/img/logoS.jpg';
import { Link } from "react-router-dom";



function NavScrollExample() {

  const [usuarios, setUsuarios] = useState([])
  const [tablaUsuarios, setTablasUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState("")

  const peticionGet=async()=>{
    await axios.get("http://localhost:3001/articulos")
    .then(response=>{
      setUsuarios(response.data); 
      setTablasUsuarios(response.data);        
    }).catch(error=>{
      console.log(error);
      
    })
  }

  



   // Detecta lo que se agregue en la barra de busqueda
   const botonBuscar = e => {
    const terminoBusqueda = e.target.value;
    setBusqueda(terminoBusqueda);

    // Redirige a las páginas 
    switch (terminoBusqueda.toLowerCase()) {
      case "vestidos":
        navigate("/Vestidos");
        break;
      case "camisas":
        navigate("/CamisasP");
        break;
      case "mañanitas":
        navigate("/MañanitasP");
        break;
      case "trajes":
        navigate("/TrajessP");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    peticionGet();
  }, [])





  


  const navigate = useNavigate();  // Llamar useNavigate en el cuerpo del componente

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    switch(selectedOption) {
      case "vestidos":
        navigate("/Vestidos");
        break;
      case "camisas":
        navigate("/CamisasP");
        break;
      case "mañanitas":
        navigate("/MañanitasP");
        break;
      case "trajes":
        navigate("/TrajessP");
        break;
      default:
        break;
    }
  };


  return (
    <div className='navbarG'>
      <nav className="navbar">
        <div className="navbar-container">
          <img id='logoEm' src={logoS} alt="" />
          <a href="#home" className="navbar-logo">𝓣𝓾𝓒𝓸𝓶𝓹𝓪ñ𝓲𝓪</a>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/Main" className='navbar-link'>𝓘𝓷𝓲𝓬𝓲𝓸</Link>
            </li>
            <li className="navbar-item">
              <select name="tipos" id="tiposRo" onChange={handleSelectChange}>
                <option value="">𝓢𝓮𝓻𝓿𝓲𝓬𝓲𝓸𝓼</option>
                <option value="vestidos">Vestidos</option>
                <option value="camisas">Camisas</option>
                <option value="mañanitas">Mañanitas</option>
                <option value="trajes">Trajes</option>
              </select>
            </li>
            <li className="navbar-item">
              <Link to="/SobreNosotros" className='navbar-link'>𝓢𝓸𝓫𝓻𝓮𝓝𝓸𝓼𝓸𝓽𝓻𝓸𝓼</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Contact" className='navbar-link'>𝓒𝓸𝓷𝓽𝓪𝓬𝓽𝓸</Link>
            </li>
          </ul>
          <div className="input-container">
            <input onChange={botonBuscar} value={busqueda} type="text" name="text" className="input" placeholder="search..." />
            <span className="icon">
              <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavScrollExample;
