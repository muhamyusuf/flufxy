import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/Providers/ThemeProviders';

const inter = Inter({ subsets: ['latin'] });

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-gradient-to-b from-white to-black dark:from-black dark:to-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
