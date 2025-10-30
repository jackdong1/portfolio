import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Jack Dong - Full Stack Software Developer Portfolio",
  description: "Jack Dong, Full Stack Software Developer in Vancouver, Canada, specializing in scalable backend systems, AI-driven web apps, and cloud infrastructure.",
  keywords: ["Jack Dong", "Full Stack Developer", "Vancouver", "Software Engineer", "Node.js", "React", "AWS", "AI Development"],
  authors: [{ name: "Jack Dong" }],
  openGraph: {
    title: "Jack Dong - Full Stack Software Developer Portfolio",
    description: "Explore Jack Dong's portfolio showcasing scalable backend systems, AI-driven web apps, and cloud infrastructure projects.",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}images/hero-1.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Dong - Full Stack Software Developer Portfolio",
    description: "Explore Jack Dong's portfolio showcasing scalable backend systems, AI-driven web apps, and cloud infrastructure projects.",
    images: [`${SITE_URL}images/hero-1.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}