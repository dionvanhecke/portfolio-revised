import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dion Van Hecke - Full Stack Developer Portfolio",
  description: "Junior Full Stack Developer with 9 years of coding passion. Specializing in Next.js, React, TypeScript, and modern web technologies. Available for exciting opportunities.",
  keywords: "Full Stack Developer, Next.js, React, TypeScript, Web Development, Belgium, Junior Developer, Portfolio",
  authors: [{ name: "Dion Van Hecke" }],
  creator: "Dion Van Hecke",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dionvanhecke.dev",
    title: "Dion Van Hecke - Full Stack Developer",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
