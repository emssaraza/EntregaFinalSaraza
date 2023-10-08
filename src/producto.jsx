import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarritoContext from "./CarritoContext";
import { getProductById } from "./api";

export const Producto = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const { agregarItem } = useContext(CarritoContext);

  useEffect(() => {
    getProductById(productId).then((product) => setProducto(product));
  }, [productId]);

  if (!producto) return "Cargando ...";

  return (
    <div>
      <h2>Información de producto</h2>
      <div style={{ border: "1px solid gray", padding: "16px" }}>
        <div>Nombre: {producto.title}</div>
        <img
          src={producto.image}
          style={{ maxWidth: "150px" }}
          alt={productId.title}
        />
        <div>{producto.description}</div>
        <div>${producto.price}</div>
      </div>
      <button onClick={() => agregarItem(producto)}>Agregar al carro</button>
    </div>
  );
};
