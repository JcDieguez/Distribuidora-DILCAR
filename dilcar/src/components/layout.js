import NavBar from './NavBar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Distribuidora DILCAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
    </>
  );
}
