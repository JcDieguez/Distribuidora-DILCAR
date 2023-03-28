import styles from '../styles/productos.module.css';

const Producto = ({ producto }) => {
  return (
    <div className={styles.producto}>
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
    </div>
  );
};

export default Producto;
