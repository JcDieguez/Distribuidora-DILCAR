import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/catalogo.module.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useState } from 'react';


const productos = [
  {
    id: 1,
    nombre: "Combo Stanley Azul",
    descripcion: "Descripción del producto 1",
    imagen: "/images/combostanleyazul.jpeg",
    precio: 10.99,
    categoria: "mate"
  },
  {
    id: 2,
    nombre: "Linterna Boton Rojo",
    descripcion: "Descripción del producto 2",
    imagen: "/images/linterna-botonrojo.jpeg",
    precio: 15.99,
    categoria: "linternas"
  },
  {
    id: 3,
    nombre: "Linterna Minera",
    descripcion: "Descripción del producto 3",
    imagen: "/images/linternaminera.jpeg",
    precio: 20.99,
    categoria: "linternas"
  },
  {
    id: 4,
    nombre: "Combo Stanley Blanco",
    descripcion: "Descripción del producto 4",
    imagen: "/images/combostanleyblanco.jpeg",
    precio: 10.99,
    categoria: "mate"
  },
  {
    id: 5,
    nombre: "Linterna",
    descripcion: "Descripción del producto 5",
    imagen: "/images/asd1.jpeg",
    precio: 15.99,
    categoria: "linternas"
  },
  {
    id: 6,
    nombre: "Mate Stanley Negro",
    descripcion: "Descripción del producto 6",
    imagen: "/images/asd2.jpeg",
    precio: 20.99,
    categoria: "categoria3"
  },
  {
    id: 7,
    nombre: "Combo Stanley Blanco v2",
    descripcion: "Descripción del producto 7",
    imagen: "/images/asd3.jpeg",
    precio: 15.99,
    categoria: "categoria3"
  },
  {
    id: 8,
    nombre: "Pava Electrica",
    descripcion: "Descripción del producto 8",
    imagen: "/images/asd4.jpeg",
    precio: 20.99,
    categoria: "categoria3"
  },
  {
    id: 9,
    nombre: "Reflector Chico",
    descripcion: "Descripción del producto 9",
    imagen: "/images/asd5.jpeg",
    precio: 15.99,
    categoria: "linternas"
  },
  {
    id: 10,
    nombre: "Linterna De Mano",
    descripcion: "Descripción del producto 10",
    imagen: "/images/asd6.jpeg",
    precio: 20.99,
    categoria: "linternas"
    
  }
];

export default function Catalogo() {
  const [filteredProducts, setFilteredProducts] = useState(productos);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilter = (categoria) => {
    const filtered = productos.filter((producto) => producto.categoria === categoria);
    setFilteredProducts(filtered);
    setSelectedCategory(categoria);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo | Distribuidora DILCAR</title>
        <link rel="icon" href="/dilcar-logo.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.heading}>Catálogo de productos</h1>
        <p className={styles.description}>Aquí puedes ver todos nuestros productos disponibles.</p>
        <div className={styles.filters}>
          <button className={`${styles.filterButton} ${selectedCategory === "mate" ? styles.active : ""}`} onClick={() => handleFilter("mate")}>Mate</button>
          <button className={`${styles.filterButton} ${!selectedCategory ? styles.active : ""}`} onClick={() => {setFilteredProducts(productos); setSelectedCategory(null)}}>Mostrar todos</button>
          <button className={`${styles.filterButton} ${selectedCategory === "linternas" ? styles.active : ""}`} onClick={() => handleFilter("linternas")}>Linternas</button>
        </div>
        <div className={styles.productos}>
          {filteredProducts.map(producto => (
            <div key={producto.id} className={styles.producto}>
              <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
              <h3 className={styles.nombre}>{producto.nombre}</h3>
              <p className={styles.descripcion}>{producto.descripcion}</p>
              <p className={styles.precio}>${producto.precio}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}