import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/contacto.module.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Contacto() {
  return (
    <div>
      <Head>
        <title>Contacto | Distribuidora DILCAR</title>
        <link rel="icon" href="/dilcar-logo.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <div className={styles["form-container"]}>
          <h1 className={styles["form-container__heading"]}>Pedidos</h1>
          <p className={styles["form-container__description"]}>Realiza tu pedido de productos y te contactaremos a la brevedad para coordinar la entrega.</p>
          <form className={styles["form-group"]}>
            <div className={styles["form-group__item"]}>
              <label htmlFor="nombre">Nombre completo:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Ej: Juan Perez" required />
            </div>
            <div className={styles["form-group__item"]}>
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" placeholder="Ej: juanperez@gmail.com" required />
            </div>
            <div className={styles["form-group__item"]}>
              <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" id="telefono" name="telefono" placeholder="Ej: +54 9 11 1234-5678" required />
            </div>
            <div className={styles["form-group__item"]}>
              <label htmlFor="producto">Producto(s) que desea solicitar:</label>
              <textarea id="producto" name="producto" rows="4" placeholder="Ej: 10 unidades de Product A, 5 unidades de Product B" required></textarea>
            </div>
            <div className={styles["form-group__item"]}>
              <label htmlFor="cantidad">Cantidad total de productos:</label>
              <input type="number" id="cantidad" name="cantidad" min="1" placeholder="Ej: 15" required />
            </div>
            <div className={styles["form-group__item"]}>
              <label htmlFor="mensaje">Mensaje adicional:</label>
              <textarea id="mensaje" name="mensaje" rows="4" placeholder="Ej: Necesito que el pedido se entregue antes del 10 de abril." required></textarea>
            </div>
            <div className={styles["form-group__submit"]}>
              <button className={styles.btn} type="submit">Enviar pedido</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
