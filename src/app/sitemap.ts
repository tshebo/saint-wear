import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://saintwear.co.za',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://saintwear.co.za/business',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: 'https://saintwear.co.za/collections',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: 'https://saintwear.co.za/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://saintwear.co.za/portfolio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://saintwear.co.za/lookbook',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
