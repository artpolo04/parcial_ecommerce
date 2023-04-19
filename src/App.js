import React, { useEffect, useState } from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import ProductosLista from "./componentes/ProductosLista";
import Carrito from "./componentes/Carrito";


function App() {
  const [productos, setProductos] = useState([]) /* Set es la funcion y productos es la variable en la que se guarda la data*/

  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const { data } = require('../src/data/productos')
    setProductos(data)
  }, [])

  return (
    <div className="App">
      <Header cantidad={carrito.length} />
      <div className="container">
        <ProductosLista datos={productos} carrito={carrito} setCarrito={setCarrito} />
        <Carrito carrito={carrito} setCarrito={setCarrito} />
      </div>
    </div>
  );
}

export default App;
