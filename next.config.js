module.exports = {
    reactStrictMode: true,
    // Agrega la ruta de la página que acabas de crear:
    async rewrites() {
      return [
        {
          source: '/catalogo',
          destination: '/pages/catalogo.js',
        },
      ]
    },
  }
  