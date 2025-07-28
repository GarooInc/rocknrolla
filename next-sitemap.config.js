import PocketBase from 'pocketbase';

/** @type {import('next-sitemap').IConfig} */

const generateSlug = (title, id) => {
  return title
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim().replace(/\s+/g, '-')
    .toLowerCase() + '-' + id;
};


const generateProjectPaths = async () => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const pb = new PocketBase(api);
  pb.autoCancellation(false);

  const projects = await pb.collection('Proyects').getFullList({ sort: '-created' });

  console.log('[DEBUG] Found projects:', projects.length);
  console.log('[DEBUG] First project sample:', projects[0]);

  const locales = ['es', 'en'];
  const paths = [];

  for (const project of projects) {
    for (const locale of locales) {
      const title = project[`title_${locale}`];
      if (!title) {
        console.warn(`[WARN] Missing title for locale ${locale} in project ${project.id}`);
        continue;
      }

      const slug = generateSlug(title, project.id);
      paths.push(`/${locale}/project/${slug}`);
    }
  }

  console.log('[DEBUG] Generated paths:', paths);

  return paths;
};

export default {
  siteUrl: 'https://rocknrolla23.com',
  generateRobotsTxt: true,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
  },
  additionalPaths: async (config) => {
    const staticPaths = [
      '/en/brands',
      '/en/buzz',
      '/en/future',
      '/en/flash',
      '/en/vision',
      '/en/culture',
      '/en/non-negotiable',
      '/en/work',
      '/en/highlights',
      '/en/partners',
      '/en/contact',
      '/es/brands',
      '/es/buzz',
      '/es/future',
      '/es/flash',
      '/es/vision',
      '/es/culture',
      '/es/non-negotiable',
      '/es/work',
      '/es/highlights',
      '/es/partners',
      '/es/contact',
    ];

    const staticTransformed = await Promise.all(
      staticPaths.map((p) => config.transform(config, p))
    );

    const projectPaths = await generateProjectPaths();
    const projectTransformed = await Promise.all(
      projectPaths.map((p) => config.transform(config, p))
    );

    return [...staticTransformed, ...projectTransformed];
  },
};
