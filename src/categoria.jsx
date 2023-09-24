import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const Categoria = () => {
    const { nombreCategoria } =  useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos([])
        fetch(`https://fakestoreapi.com/products/category/${nombreCategoria}`)
            .then(res => res.json())
            .then(productos => setProductos(productos))
    }, [nombreCategoria])

    return (
        <div>
            <h2>Productos por categoría</h2>
            <div style={{display: 'flex', gap: "24px", flexWrap: 'wrap'}}>
                {productos.map((producto) => (
                    <div key={producto.id} style={{border: "1px solid gray", maxWidth: "200px", padding: "16px"}}>
                        <div style={{fontWeight: 'bold'}}>{producto.title}</div>
                        <img src={producto.image} style={{maxWidth: "150px"}} alt={producto.title} />
                        <div>${producto.price}</div>
                        <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}