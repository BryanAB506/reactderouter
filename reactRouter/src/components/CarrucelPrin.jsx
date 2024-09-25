import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carrusel.css'
import carrusel4 from '../assets/img/carrusel4.jpg'
import carrusel3 from '../assets/img/carrusel3.jpg'
import carrusel6 from '../assets/img/carrusel6.jpg'



function DarkVariantExample() {
  return (
    <Carousel id='carrusel' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrusel3}
          alt="First slide"
        />

        <Carousel.Caption>
          <div id='tituloCarrusel'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrusel4}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div id='tituloCarrusel'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrusel6}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div id='tituloCarrusel'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
