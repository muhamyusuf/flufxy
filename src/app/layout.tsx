import './globals.css';
import type { Metadata } from 'next';
import { Baloo_2 } from 'next/font/google';
import { ClientProviders } from '@/components/Providers/ClientProviders';

const inter = Baloo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'flufxy',
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
          <div className="bg-gradient-to-b from-white to-black dark:from-black dark:to-white">
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
