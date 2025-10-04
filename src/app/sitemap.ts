import { MetadataRoute } from 'next';
import siteData from '@/data/site-data';

// This is needed for static export
// This tells Next.js to treat this route as static
export const dynamic = 'force-static';

// This function generates the sitemap
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteData.project.siteUrl;
    const currentDate = new Date();

    // Define all routes with their configurations
    const routes = [
        {
            path: '',
            priority: 1.0,
            changeFrequency: 'monthly' as const,
            images: [siteData.project.profileImage],
        },
        {
            path: 'irs',
            priority: 0.8,
            changeFrequency: 'monthly' as const,
            images: [siteData.project.profileImage],
        },
    ];

    // Generate sitemap entries
    return routes.map(({ path, priority, changeFrequency }) => ({
        url: `${baseUrl}${path ? `/${path}` : ''}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
    }));
}
