import '../styles/FormLogin.css'
import { useEffect, useState } from 'react'
import getUsers from '../services/GetLogin'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'


export default function FormLogin() {
  
  const [nombre, setNombre]=useState("")
  const [Email,setEmail]=useState("")
  const [Contrasenia, setContrasenia]=useState("")
  const [users, setusers]=useState([])
  const [error, setError]=useState("")
  const Navigate = useNavigate()
   
  useEffect(() =>{
    const usuarios = async () => {
      try {
        const userdate = await getUsers()
        setusers(userdate);
        

      } catch (error) {
        Swal.fire("inicio denegado. Vuelva a intentarlo");
      }

    }
    usuarios();
  },
  [])

 let handleClick = (e) => {
  e.preventDefault();

  const user = users.find(user => user.email === Email && user.contrasenia === Contrasenia);

  if (user) {
    if (Email.includes('@admin')) {
      Swal.fire("Admin Validado Exitosamente"); 
      localStorage.setItem("admin", true);
      Navigate("/Admin");
    } else {
      localStorage.setItem("usuario", true);
      Swal.fire("Se ha registrado exitosamente"); // Mostramos el modal
      Navigate("/Main"); // Redirigimos de inmediato
    }
  } else {
    Swal.fire("Inicio denegado, por favor verifique sus credenciales.");
  }
}


  return (
    <div className='fondo' id="kkk">
      
      <div className="container" >
        <div className="login-container">
          <h1 className='TituLogin'>𝐿𝑜𝑔𝒾𝓃</h1>
          
          <form id="loginForm">
            <div className="input-group">
              <label htmlFor="username">𝒰𝓈𝑒𝓇𝓃𝒶𝓂𝑒</label>
              <input type="text" className="TodosInput" name="username" value={nombre} required onChange={(e)=> setNombre(e.target.value)} />
            </div>
            <div className="input-group">
                <label className='labelTodo' htmlFor="Email">𝒢𝓂𝒶𝒾𝓁</label>
                <input type='Email'className='TodosInput' name='Email' value={Email} required onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="input-group">
              <label htmlFor="password">𝓅𝒶𝓈𝓈𝓌𝑜𝓇𝒹</label>
              <input type="password" className='TodosInput' name="password" value={Contrasenia} required onChange={(e)=> setContrasenia(e.target.value)}/>
            </div>

            <div>{error}</div>
            <button className='botonP' onClick={handleClick}>𝐼𝓃𝒾𝒸𝒾𝒶𝓇</button> 
            <br />
            <Link to="/Register">Si no tienes nincuna cuenta, Registrate aqui: 𝑅𝑒𝑔𝒾𝓈𝓉𝑒𝓇</Link>
          </form>
        </div>
      </div>

    </div>
  )
}








