import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/catalogo.module.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Catalogo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo | Distribuidora DILCAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.heading}>Catálogo de productos</h1>
        <p className={styles.description}>Aquí puedes ver todos nuestros productos disponibles.</p>
      </main>
      <Footer />
    </div>
  );
}


