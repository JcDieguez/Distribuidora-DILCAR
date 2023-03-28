import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/catalogo">
            Catálogo
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

