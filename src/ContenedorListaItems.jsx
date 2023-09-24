import React from 'react';
import './ContenedorListaItems.css';

const ContenedorListaItems = ({ saludo }) => {
  return (
    <div className="contenedor-lista-items">
      <p>{saludo}</p>
    </div>
  );
}

export default ContenedorListaItems;
