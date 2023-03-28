import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h3>Contacto</h3>
          <p>info@dilcar.com</p>
          <p>Pergamino, Buenos Aires</p>
        </div>
        <div className={styles.social}>
          <h3>Redes sociales</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className={styles.about}>
          <h3>Acerca de DILCAR</h3>
          <p>Somos una empresa dedicada a la distribución de productos de calidad a precios competitivos.</p>
        </div>
      </div>
      <div className={styles.copy}>
        <p>© 2023 DILCAR Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
