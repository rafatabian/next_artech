import "./page.module.css";

// metadata
export const metadata = {
  title: "Plans & Pricing | Web + Marketing Packages",
  description: "Transparent pricing for web design, SEO and marketing packages. Pick a plan, start getting customers — monthly or one-off projects.",
  keywords: ["web design and marketing packages london small business", "website maintenance plans london uk", "digital marketing packages london startups"],
  openGraph: {
    title: "ARTECH | Get more customers and grow",
    description: "Transparent pricing for web design, SEO and marketing packages. Pick a plan, start getting customers — monthly or one-off projects.",
    url: "artech-agency.co/plans",
    siteName: "artech-agency",
    images: [
      {
        url: "/images/social_media_img.png",
        width: 1200,
        height: 630,
        alt: "Webstie",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
       index: true, 
       follow: true, 
       "max-snippet": -1,
       "max-image-preview": "large", 
       "max-video-preview": -1
    }
  }
};

// Lazy-loaded components using Next.js dynamic imports
import PlansIntro from "../../components/WebComponents/PlansComponents/PlansIntro/PlansIntro"
import PlansDifference from "../../components/WebComponents/PlansComponents/PlansDifference/PlansDifferrence"
import PlansPlans from "../../components/WebComponents/PlansComponents/PlansPlans/PlansPlans"
import PlansMotivational from "../../components/WebComponents/PlansComponents/PlansMotivational/PlansMotivational"

export default function Pachete() {

  return (
      <div className="plans_main_continer">
        <PlansIntro  />
        <PlansDifference />
        <PlansPlans  />
        <PlansMotivational />
      </div>
  );
}