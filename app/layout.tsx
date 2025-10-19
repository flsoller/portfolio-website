import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Florian Soller - Senior Software Developer",
  description: "Senior Software Developer specializing in backend development on AWS. Focused on serverless architectures, AI/LLM integration, API design, and PostgreSQL databases.",
  icons: {
    icon: '/vercel.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flsoller.dev',
    siteName: 'Florian Soller',
    title: 'Florian Soller - Senior Software Developer',
    description: 'Senior Software Developer specializing in backend development on AWS. Focused on serverless architectures, AI/LLM integration, API design, and PostgreSQL databases.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florian Soller - Senior Software Developer',
    description: 'Senior Software Developer specializing in backend development on AWS.',
  },
  metadataBase: new URL('https://flsoller.dev'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main style={{ flex: 1 }}>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
