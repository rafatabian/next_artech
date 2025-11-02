import './globals.css';
import { ContextProvider } from '@/context/Context';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CtaBtn from '@/components/ClientComponents/NavCtaBtn/NavCtaBtn';
import dynamic from 'next/dynamic';

const VideoComp = dynamic(() => import("../components/VideoComp/VideoComp"))

//metadata
export const metadata = {
  title: {
    default: "Artech Agency | Marketing, Websites, Branding, SEO London",
  },
  description: "Full-service web design, branding, and marketing agency in London helping startups and small businesses grow online.",
  metadataBase: new URL("https://artech-agency.co"),
  openGraph: {
    siteName: "Artech Agency",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head />
      <body>
        <ContextProvider>
          <Navbar />
         <CtaBtn />
          <VideoComp />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ContextProvider>
      </body>
    </html>
  );
}
