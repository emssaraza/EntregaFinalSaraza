import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CarrritoContext from "./CarritoContext";
import "./CarritoWidget.css";

const CarritoWidget = () => {
  const { items } = useContext(CarrritoContext);

  return (
    <div className="carrito-widget">
      <FaShoppingCart className="carrito-icono" />
      <span className="carrito-notificacion">{items.length}</span>
    </div>
  );
};

export default CarritoWidget;
