module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'https://rabbitmx.com', 'https://staging-landing.rabbitmx.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/abastecimiento',
        destination: '/abastecimiento-presencial',
        permanent: true,
      },
      {
        source: '/catalogo-rabbit.pdf',
        destination: '/',
        permanent: true,
      },
      {
        source: '/legal/terms-and-conditions-traditional',
        destination: '/terminos-y-condiciones',
        permanent: true,
      },
      {
        source: '/legal/cookies-policy',
        destination: '/politica-de-cookies',
        permanent: true,
      },
      {
        source: '/legal/warning',
        destination: '/terminos-y-condiciones ',
        permanent: true,
      },
      {
        source: '/legal/privacy-policy',
        destination: '/aviso-de-privacidad',
        permanent: true,
      },
      {
        source: '/legal/terms-and-conditions',
        destination: '/terminos-y-condiciones',
        permanent: true,
      }
    ]
  }
}