//Importación de Context para el uso global de estados.
import React, { useContext } from 'react';
import Context from "../Context/Context"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/css/galeria.css";

//Importación de imágenes utilizadas para la generación de botón like.
import blanco from "../assets/img/corazon_blanco.png";
import rojo from "../assets/img/corazon_rojo.png";


export default function Home() {

  //Desestructuración global de datos.
  const { nuevaMatriz, setNuevaMatriz } = useContext(Context);

  //Función que permite aumentar canbiar el estado de likes cada vez que la imagen o el like es presionado.
  const presionarboton = (id, cant) => {
    let nuevo;
    if (cant===0) nuevo=1;
    else nuevo=0; 
    const nuevosDatos = nuevaMatriz.map((dato) =>
      dato.id === id ? { ...dato, estado: nuevo } : dato
    );
    setNuevaMatriz(nuevosDatos);
    console.log('Botón Presionado con id: ', id,'estado: ', (nuevo));
  }

  //Impresión de galería de imágenes a través de matriz de datos con sus respectivos datos asociados.
  const imprimir = () => {
    const arreglo=
      nuevaMatriz.map((producto) => (
        <Col className='col-sm-auto text-center' key={producto.id}>
          <div className='caja'>
            <img className='img w-100 shadow-1-strong rounded mb-4' onClick={() => presionarboton(producto.id, producto.estado)} src={producto.tiny} alt="foto" />
            <div className='heart px-2'><img onClick={() => presionarboton(producto.id, producto.estado)} 
            src={producto.estado === 0 ? blanco: rojo} alt="foto"/></div>
            <div className='texto_blanco px-2'>{producto.alt}</div>
          </div>
        </Col>
      ));
    return arreglo;
  }
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center" >
          {imprimir()}
        </Row>
      </Container>
    </div>

  );
}
