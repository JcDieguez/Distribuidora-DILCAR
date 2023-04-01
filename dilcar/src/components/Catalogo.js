import styles from '../styles/catalogo.module.css';

const Catalogo = ({ productos }) => {
  return (
    <div className={styles.catalogo}>
      {productos.map((producto) => (
        <div key={producto.id} className={styles.producto}>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
      ))}
    </div>
  );
};

export default Catalogo;
