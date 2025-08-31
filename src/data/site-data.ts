import { IconType } from 'react-icons';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export interface ProjectData {
    name: string;
    title: string;
    location: string;
    email: string;
    profileImage: string;
    about: string[];
    fileUrl: string;
    author: string;
}

export interface SiteData {
    project: ProjectData;
    socialLinks: SocialLink[];
}

export interface Viewport {
    width: string;
    initialScale: number;
    maximumScale: number;
    viewportFit?: 'auto' | 'contain' | 'cover';
}

export interface ImageMetadata {
    url: string;
    width: number;
    height: number;
    alt: string;
    type?: string;
}

export interface VideoMetadata {
    url: string;
    width: number;
    height: number;
    type: string;
    thumbnailUrl?: string;
    duration?: number;
}

export interface ArticleMetadata {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
    expirationTime?: string;
}

export interface AppleWebAppMetadata {
    title?: string;
    statusBarStyle?: 'default' | 'black' | 'black-translucent';
    capable?: boolean;
    startupImage?: string | ImageMetadata[];
}

// Create the site data with proper typing
const siteData: SiteData = {
    project: {
        name: 'IRS Calculator',
        title: 'Inner Restlessnes Scaling Score Calculator | IRS Calculator',
        location: 'Colombo, Sri Lanka',
        email: 'w.k.d.kavishka@gmail.com',
        profileImage: '/images/profile.webp',
        about: [
            'A web application that calculates the Inner Restlessness Scaling Score (IRSS). The IRSS is a measure of inner restlessness, which is a psychological state where one feels restless and agitated.',
            '',
            'The application allows users to input their responses to various questions and calculates the score based on their responses. The score is then mapped to a verbal description of their inner restlessness.',
            '',
            'The application is built using Next.js, Tailwind CSS, and TypeScript. It also utilizes the emailjs library for sending user feedback.',
        ],
        fileUrl: '/resume.pdf',
        author: 'W.K.D.Kavishka',
    },

    socialLinks: [
        {
            name: 'GitHub',
            url: 'https://github.com/wkdkavishka',
            icon: FaGithub,
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/wkdkavishka',
            icon: FaLinkedin,
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/W.K.D.Kavishka',
            icon: FaFacebook,
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/94757676968',
            icon: FaWhatsapp,
        },
    ],
};

export default siteData;
