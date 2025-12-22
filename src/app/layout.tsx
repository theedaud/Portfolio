import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ahmed Daud — Portfolio",
  description:
    "Portfolio of Ahmed Daud - Senior Product Designer specializing in Healthcare UX, Fintech, and SaaS products.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "Healthcare UX",
    "Fintech Design",
    "SaaS Design",
    "Mobile App Design",
    "Web Design",
  ],
  authors: [{ name: "Ahmed Daud" }],
  creator: "Ahmed Daud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmeddaud.com",
    siteName: "Ahmed Daud Portfolio",
    title: "Ahmed Daud — Senior Product Designer",
    description:
      "Portfolio of Ahmed Daud - Senior Product Designer specializing in Healthcare UX, Fintech, and SaaS products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Daud — Senior Product Designer",
    description:
      "Portfolio of Ahmed Daud - Senior Product Designer specializing in Healthcare UX, Fintech, and SaaS products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${archivo.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

