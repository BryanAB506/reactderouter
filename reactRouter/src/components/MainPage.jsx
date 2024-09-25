import React from 'react'
import '../styles/MainPage.css'
import carrusel1 from '../assets/img/carrusel1.jpg'
import { useNavigate } from 'react-router-dom';
import card2 from '../assets/img/card2.jpg'
import card3 from '../assets/img/card3.jpg'
import card4 from '../assets/img/card4.jpg'
import vestidos5 from '../assets/img/vestidos5.jpg'
import vestidos3 from '../assets/img/vestidos3.jpg'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function FooterPrin() {

    const [show, setShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState({ title: '', description: '', img: '' });
  
    const cerrarCard = () => setShow(false);
    

    const MostrarCard1 = () => {
        setSelectedCard({
            title: 'Trajes de Bailarias de la Escuela de Carrizal',
            description: 'Trasjes inspirados sobre bailarias de ballet para festejar un evento en la Escuela de nuetras Carrizal',
            img: card2
        });
        setShow(true);
    };

    const MostrarCard2 = () => {
        setSelectedCard({
            title: 'Trajes de bailes para la escuela del roble ',
            description: 'Trajes de baile para fentejar el 50 aiversario de la escuela del roble',
            img: carrusel1
        });
        setShow(true);
    };

    const MostrarCard3 = () => {
        setSelectedCard({
            title: 'Tajes para el festejo de navidad',
            description: 'trajes hechos para la escuela del 20 de noviembre para el festival de navidad',
            img: card3
        });
        setShow(true);
    };

    const MostrarCard4 = () => {
        setSelectedCard({
            title: 'trajes para las profesoras del centro infantil',
            description: 'trajes hechos para las profesoras para el centra oinfantil',
            img: card4
        });
        setShow(true);
    }

    const MostrarCard5 = () => {
        setSelectedCard({
            title: 'Vestido de bodas',
            description: 'Vestido de bodas para una persona especial de nuestra familia para festejar su dia',
            img: vestidos5
        });
        setShow(true);
    }

    const MostrarCard6 = () => {
        setSelectedCard({
            title: 'Vestido de 15 años',
            description: 'Vestidos de 15 años conplaciondo a una clienta para su dia tan especial',
            img: vestidos3
        });
        setShow(true);
    }


    return (
        <div>
    <>
                <Modal show={show} onHide={cerrarCard} animation={false}>
                    <Modal.Header closeButton>
                        <img id='modal-img' src={selectedCard.img} alt="" style={{ width: '50%' }} />
                        <Modal.Title>{selectedCard.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{selectedCard.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={cerrarCard}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={cerrarCard}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        <div className='Principal'>
          
                <br />
            <article className="card">
                <div className="card-int">
                    <span className="card__span">Destacadas</span>
                    <div className="img"><img id='card2' src={card2} alt="" /></div>
                    <div className="card-data">
                        <p className="title">Trajes de Bailarias de la Escuela de Carrizal
                        </p><p>Trasjes inspirados sobre bailarias de ballet para festejar un evento en la Escuela de nuetras Carrizal</p>
                        <button  variant="primary"  onClick={MostrarCard1} className="buttonCard">More info</button>
                    </div>
                </div>
            </article>

            <article className="card">
                <div className="card-int">
                    <span className="card__span">Destacadas</span>
                    <div className="img"><img id='card2' src={carrusel1} alt="" /></div>
                    <div className="card-data">
                        <p className="title">Trajes de bailes para la escuela del roble 
                        </p>Trajes de baile para fentejar el 50 aiversario de la escuela del roble<p></p>
                        <button variant="primar" onClick={MostrarCard2} className="buttonCard">More info</button>
                    </div>
                </div>
            </article>

            <article className="card">
                <div className="card-int">
                    <span className="card__span">Destacadas</span>
                    <div className="img"><img id='card2' src={card3} alt="" /></div>
                    <div className="card-data">
                        <p className="title">Tajes para el festejo de navidad
                        </p><p>trajes hechos para la escuela del 20 de noviembre para el festival de navidad</p>
                        <button variant="primar" onClick={MostrarCard3} className="buttonCard">More info</button>
                    </div>
                </div>
            </article>
            

            <article className="card">
                <div className="card-int">
                    <span className="card__span">Destacadas</span>
                    <div className="img"><img id='card2' src={card4} alt="" /></div>
                    <div className="card-data">
                        <p className="title">trajes para las profesoras del centro infantil
                        </p><p>trajes hechos para las profesoras para el centra oinfantil</p>
                        <button variant="primar" onClick={MostrarCard4} className="buttonCard">More info</button>
                    </div>
                </div>
            </article>

            
            <article className="card">
                <div className="card-int">
                    <span className="card__span">Destacadas</span>
                    <div className="img"><img id='card2' src={vestidos5} alt="" /></div>
                    <div className="card-data">
                        <p className="title">Vestido de bodas
                        </p><p>Vestido de bodas para una persona especial de nuestra familia para festejar su dia</p>
                        <button variant="primar" onClick={MostrarCard5} className="buttonCard">More info</button>
                    </div>
                </div>
            </article>

            
            <article className="card">
                <div className="card-int">
                    <span className="card__span">Destacadas</span>
                    <div className="img"><img id='card2' src={vestidos3} alt="" /></div>
                    <div className="card-data">
                        <p className="title">Vestido de 15 años
                        </p><p>Vestidos de 15 años conplaciondo a una clienta para su dia tan especial</p>
                        <button variant="primar" onClick={MostrarCard6} className="buttonCard">More info</button>
                    </div>
                </div>
            </article>

            

        </div>
        </div>

    )
}

export default FooterPrin
