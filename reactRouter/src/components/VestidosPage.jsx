import React, { useEffect, useState } from 'react'
import '../styles/vestidos.css'
import { FaArrowDown } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import getarticulos from '../services/GetAdmin';


function VestidosPage() {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setSelectedProduct(product); // Guarda el producto en el estado
        setShow(true);
    }

   const [productos, setProductos] = useState([])


   async function datosProductos() {
    const datos = await getarticulos()
    setProductos(datos)
   }

   useEffect(()=>{
    datosProductos()
   },[])

   const filtrarVestidos = productos.filter((categorias) => categorias.select === 'vestidos')

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct?.Descrip}</Modal.Title> {/* Mostrar el título del producto */}
          </Modal.Header>
          <Modal.Body>  
            <img src={selectedProduct?.Img} alt={selectedProduct?.Descrip} style={{ width: '50%' }} /> {/* Mostrar la imagen */}
            <p>Descripción: {selectedProduct?.Descrip}</p> {/* Muestra la descripcion */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <div className='navCamisas'>
        <h1>𝐸𝓈𝓉𝒶𝓈 𝓈𝑜𝓃 𝒶𝓁𝑔𝓊𝓃𝒶𝓈 𝒹𝑒 𝓃𝓊𝑒𝓈𝓉𝓇𝒶𝓈 𝒸𝓇𝑒𝒶𝒸𝒾𝑜𝓃𝑒𝓈</h1>
        <FaArrowDown className='flecha'/>
      </div>

      <div>
        {
          filtrarVestidos.map((filtrar, index) => {
            return (
              <article className="card" key={index}>
                <div className="card-int">
                  <span className="card__span">Category</span>
                  <div className="img"><img id='card2' src={filtrar.Img} alt="" /></div>
                  <div className="card-data">
                    <p className="title">{filtrar.Descrip}</p>
                    <button variant="primary" onClick={() => handleShow(filtrar)} className="buttonCard">More info</button> {/* Pasar el producto al hacer clic */}
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default VestidosPage
