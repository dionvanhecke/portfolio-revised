import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import StructuredData from '@/components/StructuredData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dionvanhecke.dev'),
  title: {
    default: "Dion Van Hecke - Full Stack Developer | Next.js, React, TypeScript",
    template: "%s | Dion Van Hecke"
  },
  description: "Junior Full Stack Developer with 9 years of coding passion. Specializing in Next.js, React, TypeScript, Laravel, and modern web technologies. Building cross-platform apps and scalable web platforms.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer", 
    "TypeScript Developer",
    "Web Development Belgium",
    "Junior Developer",
    "Portfolio",
    "Laravel",
    "NestJS",
    "Tauri",
    "Cross-platform Apps",
    "Dion Van Hecke"
  ],
  authors: [{ name: "Dion Van Hecke", url: "https://dionvanhecke.dev" }],
  creator: "Dion Van Hecke",
  alternates: {
    canonical: "https://dionvanhecke.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dionvanhecke.dev",
    title: "Dion Van Hecke - Full Stack Developer | Next.js, React, TypeScript",
    description: "Junior Full Stack Developer with 9 years of coding passion. Creating modern web experiences with Next.js, React, and TypeScript.",
    siteName: "Dion Van Hecke Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dion Van Hecke - Full Stack Developer",
    description: "Junior Full Stack Developer with 9 years of coding passion. Creating modern web experiences with Next.js, React, and TypeScript.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ overflow: 'auto' }}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
