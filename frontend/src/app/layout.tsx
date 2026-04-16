import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adrien Mizero | Software Engineer',
  description:
    'Portfolio of Adrien Mizero, a software engineer building secure, scalable web applications with Django, React, and modern frontend tooling.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const storedTheme = window.localStorage.getItem('theme');
              const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : preferredTheme;
              document.documentElement.dataset.theme = theme;
              document.documentElement.style.colorScheme = theme;
            } catch (error) {}
          })();`}
        </Script>
        {children}
      </body>
    </html>
  );
}