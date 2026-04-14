import type { Metadata } from 'next';
import type { ReactNode } from 'react';
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}