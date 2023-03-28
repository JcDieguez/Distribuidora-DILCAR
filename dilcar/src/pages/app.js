import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Inicio from '../components/Inicio'
import Catalogo from '../components/Catalogo'
import Contacto from '../components/Contacto'
import '../styles/globals.css'
import '../assets/css/styles.css';
import Footer from '../components/Footer'



function App() {
  const router = useRouter()

  const renderPage = () => {
    switch (router.pathname) {
      case '/':
        return <Inicio />
      case '/catalogo':
        return <Catalogo />
      case '/contacto':
        return <Contacto />
      default:
        return <div>Página no encontrada</div>
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Distribuidora Dilcar</title>
        <meta name="description" content="Sitio web de Distribuidora Dilcar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Distribuidora Dilcar</h1>
        <nav>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/catalogo">Productos</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <p>¡Descubre nuestras ofertas y promociones especiales!</p>
      </header>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
