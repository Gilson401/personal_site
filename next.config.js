/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    /* config options here */
    trailingSlash: true,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/blog': { page: '/blog' },
          '/contato': { page: '/contato' },
          '/links': { page: '/links' },
          '/portfolio': { page: '/portfolio' },
          '/testes': { page: '/testes' }
        }
      },
  }
  
  module.exports = nextConfig