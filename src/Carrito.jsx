import React, { useContext } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import CarritoContext from "./CarritoContext";
import "./carrito.css";

const ItemCarrito = ({ item }) => {
  const { eliminarItem } = useContext(CarritoContext);

  return (
    <div className="item-carrito">
      {item.title}
      <div >
        <span>x {item.quantity} </span>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => eliminarItem(item.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

const Carrito = () => {
  const { items } = useContext(CarritoContext);
  return (
    <div>
      <FaShoppingCart className="carrito-icono" /> Carrito de compras
      {items.length ? (
        <div>
          {items.map((item) => (
            <ItemCarrito key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div>No hay items en el carrito</div>
      )}
    </div>
  );
};

export default Carrito;
