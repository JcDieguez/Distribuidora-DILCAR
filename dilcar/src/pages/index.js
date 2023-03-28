import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Distribuidora DILCAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/dilcar-logo.png" alt="DILCAR logo" className={styles.logo} />
        <h1 className={styles.title}>Bienvenido a DILCAR</h1>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/catalogo">Catálogo</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.heading}>Bienvenidos a la Distribuidora DILCAR</h1>
        <p className={styles.description}>Ofrecemos productos de calidad a precios competitivos.</p>

        <Link href="/productos" className={styles.cta}>
          Ver catálogo
        </Link>
      </main>
      <Footer />
    </div>
  );
}

