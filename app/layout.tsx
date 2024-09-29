import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import {
  Space_Grotesk,
  IBM_Plex_Serif,
  Inter,
  Space_Mono,
  Press_Start_2P,
  Alegreya
} from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});
const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-serif',
  display: 'swap'
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap'
});
const pressStart = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap'
});
const alegreya = Alegreya({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-alegreya',
  display: 'swap'
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Purdue Hackers Site 2024",
  description: "New site!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${ibmPlexSerif.variable} ${inter.variable} ${spaceMono.variable} ${pressStart.variable} ${alegreya.variable} font-main antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
