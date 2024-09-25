import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminPage.css';
import postArticulos from '../services/PostAdmin';
import getarticulos from '../services/GetAdmin';
import updateArticulo from '../services/UpdateAdmin';
import deletearticulos from '../services/DeleteAdmin';




function AdminPage() {
  debugger



  const [select, setselect] = useState("");
  const [Img, setImg] = useState("");
  const [Descrip, setdescrip] = useState("");
  const [products, setArticulos] = useState([]);
  const [editID, setEditID] = useState(null); 

  // Función que carga los productos
  const load_product = useCallback(() => {
    const fetchProducts = async () => {
      try {
        const response = await getarticulos();
        setArticulos(response);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => load_product(), [load_product]);

  // Función para agregar un artículo
  let botonArticulos = async (e) => {
    e.preventDefault();
    try {
      const articulos = {
        select,
        Img,
        Descrip,
      };

      await postArticulos(articulos);
      load_product(); // Refresca la lista de productos después de agregar uno nuevo
    } catch (error) {
      console.error("Error posting article", error);
    }
  };

  const navigate = useNavigate();


  function cerrarSesion() {
    localStorage.removeItem('admin');
    navigate('/');
  }


  const convertirAvase64 = (event, setImgFunc) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgFunc(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para eliminar un artículo
  const handleEliminar = async (id) => {
    try {
      await deletearticulos(id);
      load_product(); 
    } catch (error) {
      console.error("Error deleting article", error);
    }
  };

  // Función para manejar la edición de un artículo
  const handleEditar = (id) => {
    setEditID(id); // Establece el ID del artículo que se está editando
  };

  // Función para guardar los cambios de un artículo editado
  const handleGuardarEdicion = async (id, updatedProduct) => {
    try {
      await updateArticulo(id, updatedProduct); // Actualiza el artículo en la base de datos
      setEditID(null); // Sale del modo de edición
      load_product(); // Refresca la lista de productos
    } catch (error) {
      console.error("Error updating article", error);
    }
  }; // Función que crea dinámicamente las cartas con los inputs de edición


  const categorias = ["Vestidos", "Casisas", "Mañanitas", "Trajes"]

  
  const createCard = (product) => {
    const isEditing = editID === product.id;
    
    return (
      <div key={product.id}>
        <article className="card">
          <div className="card-int">
            {isEditing ? (
              <>
                <label>Tipo</label>
                <select
                  value={product.select}
                  onChange={(e) => {
                    product.select = e.target.value;
                    setArticulos([...products]);
                  }}
                >
                  <option value="vestidos">vestidos</option>
                  <option value="Mañanitas">mañanitas</option>
                  <option value="camisas">camisas</option>
                  <option value="trajes">trajes</option>
                </select>

                <label>Imagen</label>
                <input
                  type="file"
                  onChange={(e) => convertirAvase64(e, (img) => {
                    product.Img = img;
                    setArticulos([...products]);
                  })}
                />
                {product.Img && <img src={product.Img} alt="Producto" style={{ width: '100px' }} />}

                <label>Descripción</label>
                <input
                  type="text"
                  value={product.Descrip}
                  onChange={(e) => {
                    product.Descrip = e.target.value;
                    setArticulos([...products]);
                  }}
                />

                <button onClick={() => handleGuardarEdicion(product.id, product)}>
                  Guardar Cambios
                </button>
              </>
            ) : (
              <>
                <span className="card__span">{product.select}</span>
                <div className="img">
                  <img id='card2' src={product.Img} alt="Producto" />
                </div>
                <div className="card-data">
                  <p className="title">{product.Descrip}</p>
                  <button className="buttonCard" onClick={() => handleEditar(product.id)}>Editar</button>
                  <button className="buttonCard" onClick={() => handleEliminar(product.id)}>Eliminar</button>
                </div>
              </>
            )}
          </div>
        </article>
      </div>
    );
  };

  return (
    <div>
      <div className='tituloP'>
        <h1>𝓐𝓻𝓽𝓲𝓬𝓾𝓵𝓸𝓼</h1>
      </div>
      <br />

      <div className='articulos'>
        <label className='labelAr' htmlFor="">Tipo</label>
        <select name="" className='select' onChange={(e) => setselect(e.target.value)}>
          <option value="vestidos">vestidos</option>
          <option value="Mañanitas">mañanitas</option>
          <option value="camisas">camisas</option>
          <option value="trajes">trajes</option>
        </select>

        <label className='labelAr' htmlFor="">Imagenes</label>
        <input className='inputAr' type="file" onChange={(e) => convertirAvase64(e, setImg)} />

        <label className='labelAr' htmlFor="">Descripción</label>
        <input className='inputAr' type="text" onChange={(e) => setdescrip(e.target.value)} />

        <button className='botonAr' onClick={botonArticulos}>Agregar</button>
      </div>

      <button onClick={cerrarSesion}>Cerrar Sesión</button>

      <div className='TituCard'>
        <h1>Artículos para Mostrar</h1>
        {products.map(createCard)}
      </div>

      <br />
    </div>
  );
}

export default AdminPage;
