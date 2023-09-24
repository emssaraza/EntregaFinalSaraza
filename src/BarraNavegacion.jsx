import React from "react";
import CarritoWidget from "./CarritoWidget";
import "./BarraNavegacion.css";
import { Link } from "react-router-dom";

const BarraNavegacion = () => {
  return (
    <nav className="barra-navegacion">
      <Link to="/">
        <div>Mi Tienda</div>
      </Link>
      <Link to="/categoria/electronics">Electrónica</Link>
      <Link to="/categoria/jewelery">Joyería</Link>
      <Link to="/categoria/men's clothing">men's clothing</Link>
      <Link to="/categoria/women's clothing">women's clothing</Link>
      <Link to="/carrito">
        <CarritoWidget />
      </Link>
    </nav>
  );
};

export default BarraNavegacion;
