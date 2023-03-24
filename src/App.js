import "./styles.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

//Importación de los Hooks que serán utilizados.
import Context from "./Context/Context";
import { useState, useEffect } from 'react';

//Importación de las vistas.
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";

export default function App() {

  //Creación de variables de estados
  const [productos, setProductos] = useState([]);
  const [nuevaMatriz, setNuevaMatriz] = useState([]);

  //Consumo de Json para almacenar datos en productos
  const fetchData = async () => {
    const response = await fetch('./fotos.json')
    const { photos } = await response.json();
    setProductos(photos);
  };

  //Llamado para consumir el Json
  useEffect(() => {
    fetchData();
  }, []);

  //Generación de nueva Matriz con datos del Json y otros datos:
  //id: id para identificar cada foto.
  //tiny: Dirección de la foto en formato tiny.
  //estado: Para determinar el estado del botón like y determinar si se debe ver en favoritos.
  //Alt: Texto con detalles de cada foto.

  useEffect(() => {
    const nueva = productos.map((producto, index) => ({
      id: index,
      tiny: producto.src.tiny,
      estado: 0,
      alt: producto.alt
    }));
    setNuevaMatriz(nueva);
  }, [productos]);


  //Selección de constantes a ser enviadas a través de los componentes. 
  const globalState = { nuevaMatriz, setNuevaMatriz };

  // Para el deploy 
  //<BrowserRouter basename='/natural_pic'>
  console.log(nuevaMatriz)
  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
