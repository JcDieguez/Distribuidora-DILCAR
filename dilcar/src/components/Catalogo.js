import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';

export default function Catalogo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo - Distribuidora DILCAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/dilcar-logo.png" alt="DILCAR logo" className={styles.logo} />
        <h1 className={styles.title}>Catálogo</h1>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/catalogo">Catálogo</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.heading}>Nuestro Catálogo</h1>
        <p className={styles.description}>Aquí encontrarás nuestros productos.</p>

        {/* Aquí puedes agregar el contenido específico del catálogo */}
      </main>
    </div>
  );
}

