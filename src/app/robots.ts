import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.mprog.eu/sitemap.xml',
    host: 'https://www.mprog.eu',
  };
}
