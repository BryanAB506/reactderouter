import React, { useEffect } from 'react'
import '../styles/FormRegister.css'
import postUsers from '../services/PostRegister'
import getUsers from '../services/GetLogin'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



function FormRegister() {

  const [nombre, setNombre]=useState("")
  const [Email,setEmail]=useState("")
  const [Contrasenia, setContraseña]=useState("")
  const Navigate = useNavigate()
  const [usuarioExitente, setUsuarioExistente] = useState([])


  useEffect(()=>{
    const checkUser = async () => {
      try {
        const users = await getUsers()
        setUsuarioExistente(users.map(user => user.email))
      } catch (error) {
        console.log('error al verificar los usuarios:', error);
        
      }
    };
    checkUser();
  },[])



  let handleClick= async (e)=>{
    e.preventDefault();  
    if (!nombre || !Email || !Contrasenia ){
    Swal.fire("no se permiten espacios en blanco");
    return
     }
    if (usuarioExitente.includes(Email)){
       Swal.fire("este usuario ya existe, porfavor dijite uno nuevo");
      return
    }
  
    





    try {
      const newUser ={
        name: nombre,
        email: Email,
        contrasenia: Contrasenia
      }

      Swal.fire("Se a registrado exitosamente").then(() =>{
        Navigate("/")
      });
      await postUsers(newUser);
      

      // setNombre("")
      // setEmail("")
      // setContraseña("")

    } catch (error) {
      Swal.fire("hubo un error al iniciar ");
      
    }
  }




  return (
    <div id='kkk'>
        <div className="container">
          <div className="login-container">
          <h1>𝑅𝑒𝑔𝒾𝓈𝓉𝑒𝓇</h1>
          <form id="loginForm">
            <div className="input-group">
              <label htmlFor="username">𝒰𝓈𝑒𝓇𝓃𝒶𝓂𝑒</label>
              <input type="text" id="TodosInput" name="username" required onChange={(e)=> setNombre(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="Email">𝒢𝓂𝒶𝒾𝓁</label>
                <input type='Email' id='TodosInput' name='Email' required onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="input-group">
              <label htmlFor="password">𝓅𝒶𝓈𝓈𝓌𝑜𝓇𝒹</label>
              <input type="password" id='TodosInput' name="password" required onChange={(e)=> setContraseña(e.target.value)}/>
            </div>
         
            <button id='botonR' onClick={handleClick}>𝑅𝑒𝑔𝒾𝓈𝓉𝑒𝓇</button>
           

          </form>
        </div>
      </div>
    </div>
  )
}

export default FormRegister
