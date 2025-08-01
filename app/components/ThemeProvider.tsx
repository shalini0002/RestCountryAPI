'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function ThemeProviderComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
