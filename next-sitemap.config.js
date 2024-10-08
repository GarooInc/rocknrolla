/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://rocknrolla23.com',
    generateRobotsTxt: true, // Genera automáticamente el robots.txt
    exclude: ['/admin/*'], // Páginas que deseas excluir
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin'],
        },
      ],
    },
    additionalPaths: async (config) => [
      await config.transform(config, '/en/brands'),
      await config.transform(config, '/en/buzz'),
    await config.transform(config, '/en/future'),
    await config.transform(config, '/en/flash'),
    await config.transform(config, '/en/vision'),
    await config.transform(config, '/en/culture'),
    await config.transform(config, '/en/non-negotiable'),
    await config.transform(config, '/en/work'),
    await config.transform(config, '/en/highlights'),
    await config.transform(config, '/en/partners'),
    await config.transform(config, '/en/contact'),
    await config.transform(config, '/es/brands'),
    await config.transform(config, '/es/buzz'),
    await config.transform(config, '/es/future'),
    await config.transform(config, '/es/flash'),
    await config.transform(config, '/es/vision'),
    await config.transform(config, '/es/culture'),
    await config.transform(config, '/es/non-negotiable'),
    await config.transform(config, '/es/work'),
    await config.transform(config, '/es/highlights'),
    await config.transform(config, '/es/partners'),
    await config.transform(config, '/es/contact'),
    
    ],
  };
  