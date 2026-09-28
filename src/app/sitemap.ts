import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mprog.eu';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          de: `${baseUrl}?lang=de`,
          en: `${baseUrl}?lang=en`,
        },
      },
    },
  ];
}
