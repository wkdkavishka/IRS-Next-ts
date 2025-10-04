import type { Metadata, Viewport } from 'next';
import siteData from './site-data';

// Site Configuration
const baseUrl = siteData.project.siteUrl;
const siteName = siteData.project.name;
const description =
    'Calculate your Inner Restlessness Scaling Score (IRSS) with our easy-to-use calculator. Understand and measure your inner restlessness level.';

// Viewport Configuration
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
    ],
    colorScheme: 'light dark',
};

// Metadata Configuration
export const metadata: Metadata = {
    // Basic Metadata
    title: {
        default: siteName,
        template: `%s | ${siteName}`,
    },
    description,
    metadataBase: new URL(baseUrl),

    // SEO & Indexing
    keywords: [
        'IRS Calculator',
        'Inner Restlessness Scale',
        'IRSS',
        'Mental Health Assessment',
        'Psychological Wellbeing',
        'Restlessness Test',
        'Mental Health Calculator',
        'Anxiety Assessment',
        'wkdkavishka',
        'W.K.D.Kavishka',
        'Dumindu Kavishka',
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Application
    applicationName: siteName,
    generator: 'Next.js',
    referrer: 'strict-origin-when-cross-origin',
    category: 'Health & Wellness',

    // Authorship
    authors: [
        {
            name: 'W.K.D.Kavishka',
            url: 'https://github.com/wkdkavishka',
        },
    ],
    creator: 'W.K.D.Kavishka',
    publisher: 'W.K.D.Kavishka',

    // Icons & PWA
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/images/meta/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/images/meta/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [{ url: '/images/meta/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
        other: [
            {
                rel: 'mask-icon',
                url: '/images/meta/safari-pinned-tab.svg',
                color: '#5bbad5',
            },
        ],
    },

    // Format Detection
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
        date: true,
        url: true,
    },

    // PWA
    manifest: '/site.webmanifest',
    appleWebApp: {
        title: siteName,
        statusBarStyle: 'default',
        capable: true,
    },

    // OpenGraph
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        siteName,
        title: siteName,
        description,
        images: [
            {
                url: `${baseUrl}/images/meta/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: `${siteName} - ${description.substring(0, 100)}...`,
                type: 'image/jpeg',
            },
        ],
    },

    // Twitter
    twitter: {
        card: 'summary_large_image',
        title: siteName,
        description,
        images: [
            {
                url: `${baseUrl}/images/meta/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: `${siteName} - ${description.substring(0, 100)}...`,
            },
        ],
        creator: '@wkdkavishka',
        site: '@wkdkavishka',
    },

    // Additional
    alternates: {
        canonical: baseUrl,
        languages: {
            'en-US': baseUrl,
        },
    },

    // Verification (replace with your actual verification codes)
    verification: {
        google: 'YOUR_GOOGLE_VERIFICATION_CODE',
        yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
        yahoo: 'YOUR_YAHOO_VERIFICATION_CODE',
        other: {
            me: ['mailto:contact@example.com', 'https://twitter.com/wkdkavishka'],
        },
    },

    // Other
    other: {
        'msapplication-TileColor': '#4a90e2',
        'msapplication-config': '/browserconfig.xml',
        'theme-color': '#4a90e2',
    },
};
