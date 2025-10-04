import { Inter } from 'next/font/google';
import { NavigationComp as Navigation } from '../components/NavigationComp';
import ThreeBackground from '../components/ThreeBackground';
import { metadata } from '../data/metadata';
import './globals.css';

export { metadata };

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <body className={`${inter.className} min-h-full`}>
                <div id="portal-root"></div>
                <ThreeBackground />
                <div className="relative min-h-screen">
                    <div className="sticky top-0 z-50 px-10 pt-2">
                        <Navigation />
                    </div>
                    <div className="relative z-10">
                        <main>{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
