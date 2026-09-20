import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://omnikart.in';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin-dashboard/', '/checkout/success/', '/account/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
