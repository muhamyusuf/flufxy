import './globals.css';
import type { Metadata } from 'next';
import { Baloo_2 } from 'next/font/google';
import { ClientProviders } from '@/components/Providers/ClientProviders';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/landing-page/Footer';

const inter = Baloo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'flufxy', template: '%s | flufxy' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar-none`}>
        <ClientProviders>
          <div className="px-2 md:px-8 lg:px-32">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
