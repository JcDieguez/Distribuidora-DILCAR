import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/contacto.module.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Contacto() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacto | Distribuidora DILCAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.heading}>Contáctanos</h1>
        <p className={styles.description}>Ponte en contacto con nosotros para cualquier pregunta o comentario.</p>
      </main>
      <Footer />
    </div>
  );
}
