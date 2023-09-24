import React from "react";
import BarraNavegacion from "./BarraNavegacion";
import ContenedorListaItems from "./ContenedorListaItems";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrito from "./Carrito";
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import { Producto } from "./producto";
import { Categoria } from "./categoria";
import { CarritoProvider } from "./CarritoContext";

function App() {
  return (
    <div className="App">
      <CarritoProvider>
        <BrowserRouter>
          <BarraNavegacion />
          <Routes>
            <Route path="/" element={<ContenedorListaItems saludo="¡Bienvenido a nuestra tienda en línea!" />} />
            <Route path="/categoria/:nombreCategoria" element={<Categoria />} />
            <Route path="/producto/:productId" element={<Producto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CarritoProvider>
    </div>
  );
}

export default App;
