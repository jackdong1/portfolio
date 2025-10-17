import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jack Dong - Full Stack Software Developer Portfolio",
  description: "Jack Dong, Full Stack Software Developer in Vancouver, Canada, specializing in scalable backend systems, AI-driven web apps, and cloud infrastructure.",
  keywords: ["Jack Dong", "Full Stack Developer", "Vancouver", "Software Engineer", "Node.js", "React", "AWS", "AI Development"],
  authors: [{ name: "Jack Dong" }],
  openGraph: {
    title: "Jack Dong - Full Stack Software Developer Portfolio",
    description: "Explore Jack Dong's portfolio showcasing scalable backend systems, AI-driven web apps, and cloud infrastructure projects.",
    url: "https://jackdong1.github.io/portfolio/",
    images: [{ url: "https://jackdong1.github.io/portfolio/images/hero-1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/js/all.min.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
