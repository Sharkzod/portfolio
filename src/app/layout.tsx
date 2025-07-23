import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistSans } from 'geist/font/sans';

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
  title: "Portfolio - Godstime",
  description: "Godstime's portfolio showcasing full stack and AI development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/minato.jpg" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
