import "./page.module.css";

// metadata
export const metadata = {
  title: "Digital Marketing Agency | SEO, PPC Lead Generation & Customers",
  description: "Get more customers: SEO, PPC, social ads & email marketing for B2B. We focus on measurable ROI and scalable lead flow.",
  keywords: ["lead generation agency london for b2b", "digital marketing services london for startups", "seo and ppc services london small business"],
  openGraph: {
    title: "ARTECH | Get more customers and grow",
    description: "SEO, PPC, social ads & email marketing for B2B. We focus on measurable ROI and scalable lead flow.",
    url: "artech-agency.co/marketing",
    siteName: "artech-agency",
    images: [
      {
        url: "/images/social_media_img.png",
        width: 1200,
        height: 630,
        alt: "Website",
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

import MarketingGraph from "../../components/MarkeComponents/MarketingGraph/MarketingGraph.jsx"
import MarkeIntro from "../../components/MarkeComponents/MarkeIntro/MarkeIntro.jsx"
import MarkeIssues from "../../components/MarkeComponents/MarkeIssue/MarkeIssue.jsx"
import MarkeSolution from "../../components/MarkeComponents/MarkeSolution/MarkeSolution.jsx"
import MarkeSteps from "../../components/MarkeComponents/MarkeSteps/MarkeSteps.jsx"
import MarkeStory from "../../components/MarkeComponents/MarkeStory/MarkeStory.jsx"
import MarkeMotivational from "../../components/MarkeComponents/MarkeMotivational/MarkeMotivational.jsx"
import MarkeServices from "../../components/MarkeComponents/MarkeServices/MarkeServices.jsx"



export default function HomeMarketing() {

  return (
      <div className="marketing_container">
        <MarkeIntro />
        <MarkeIssues />
        <MarkeSolution />
        <MarkeSteps />
        <MarkeServices />
        <MarkeStory />
        <MarketingGraph />
        <MarkeMotivational />
      </div>
  );
}