import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Distribuidora DILCAR</title>
        <link rel="icon" href="/dilcar-logo.ico" />
      </Head>
        <NavBar />
      <main className={styles.main}>
        <h1 className={styles.heading}>Bienvenidos a la Distribuidora DILCAR</h1>
        <p className={styles.description}>En nuestra tienda, la iluminacion es solo el comienzo</p>

        <Link href="/catalogo" className={styles.cta}>
          Ver catálogo
        </Link>
      </main>
      <Footer />
    </div>
  );
}

