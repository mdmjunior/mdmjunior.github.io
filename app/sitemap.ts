import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { sitemapRoutes } from '@/data/routes'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split('T')[0]

  return sitemapRoutes.map((route) => ({
    url: route.href === '/' ? siteMetadata.siteUrl : `${siteMetadata.siteUrl}${route.href}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}
