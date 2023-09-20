'use client';

import { NextUIProviders } from './NextUIProvider';
import { ThemeProvider } from './ThemeProviders';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NextUIProviders>{children}</NextUIProviders>
      </ThemeProvider>
    </>
  );
}
