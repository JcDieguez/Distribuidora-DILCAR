import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/NavBar'; // Importa el componente Navbar aquí
import Producto from '../components/Producto';
import styles from '../styles/productos.module.css';


const categorias = [
  'Iluminación interior',
  'Iluminación exterior',
  'Camping',
  'Mate',
];

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() => {
    // Aquí debes obtener los productos de tu base de datos
    // y asignarlos a la variable productos usando setProductos
  }, []);

  const filtrarProductosPorCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  let productosFiltrados = productos;
  if (categoriaSeleccionada !== '') {
    productosFiltrados = productos.filter(
      (producto) => producto.categoria === categoriaSeleccionada
    );
  }

  return (
    <div>
      <Head>
        <title>Productos - Distribuidora DILCAR</title>
      </Head>
      <Navbar /> {/* Incluye el componente Navbar aquí */}
      <h1>Productos</h1>
      <div className={styles.filtros}>
        <span>Filtrar por categoría:</span>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={categoria === categoriaSeleccionada ? styles.seleccionado : ''}
            onClick={() => filtrarProductosPorCategoria(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
      <div className={styles.productos}>
        {productosFiltrados.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
