import React from 'react';
import { Container } from "react-bootstrap";

//Vista de datos de error de ruta
export default function NotFound () {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
    </Container>
  );
};


