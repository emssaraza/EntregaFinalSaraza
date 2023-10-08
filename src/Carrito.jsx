import React, { useContext, useState } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import CarritoContext from "./CarritoContext";
import "./carrito.css";
import { createCart } from "./api";

const ItemCarrito = ({ item }) => {
  const { eliminarItem } = useContext(CarritoContext);

  return (
    <div className="item-carrito">
      {item.title}
      <div>
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
  const [cartId, setCartId] = useState(null);
  const onfinalizarCompra = () => {
    createCart(items).then((cartId) => {
      setCartId(cartId);
    });
  };
  return (
    <div>
      <FaShoppingCart className="carrito-icono" /> Carrito de compras
      {items.length ? (
        <div>
          {items.map((item) => (
            <ItemCarrito key={item.id} item={item} />
          ))}
          {cartId ?cartId: <button onClick={onfinalizarCompra}>Finalizar Compra</button>}
        </div>
      ) : (
        <div>No hay items en el carrito</div>
      )}
    </div>
  );
};

export default Carrito;
