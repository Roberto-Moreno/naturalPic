//Importación de Context para el uso global de estados.
import React, { useContext } from 'react';
import Context from "../Context/Context"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/css/galeria.css";
//import Heart from "./Heart";

export default function Home() {

    //Desestructuración global de datos.
    const {nuevaMatriz} = useContext(Context);

    //Impresión de galería de imágenes favoritas, las cuales corresponden a los registros con estado distinto de cero. 
    const imprimirFavoritos = () => {

        const arreglo = nuevaMatriz.map((producto) => (
            producto.estado !== 0 ?
                < Col md="auto" key={producto.id} >
                    <div className='caja'>
                        <img className='img w-100 shadow-1-strong rounded mb-4' src={producto.tiny} alt="foto" />
                        <div className='texto_blanco px-2'>{producto.alt}</div>
                    </div>
                </Col > : null
        ))
        return arreglo;

    }

    return (
        <div>
            <Container fluid >
                <Row className="justify-content-md-center">
                    {imprimirFavoritos()}
                </Row>
            </Container>
        </div>

    );
}
