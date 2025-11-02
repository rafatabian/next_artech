
import styles from "./page.module.css";

// metadata
export const metadata = {
  title: "Website Design Services | Custom & Conversion-Focused",
  description: "Custom fast websites built to convert. Ecommerce, lead-gen & SEO-ready sites — handcrafted for B2B businesses. View portfolio & pricing.",
  keywords: ["affordable website design company london", "custom website design london for small business", "ecommerce website design london uk small business", "personalized website for medium business"],
  openGraph: {
    title: "ARTECH | Get more customers and grow",
    description: "Custom websites built to convert. Ecommerce, lead-gen & SEO-ready sites — handcrafted for B2B businesses. View portfolio & pricing.",
    url: "artech-agency.co/websites",
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

// Components
import WebIntro from "../../components/WebComponents/WebIntro/WebIntro.jsx";
import WebIssues from "../../components/WebComponents/WebIssues/WebIssues.jsx";
import WebSolutions from "../../components/WebComponents/WebSolutions/WebSolutions.jsx";
import WebSteps from "../../components/WebComponents/WebSteps/WebSteps.jsx";
import WebOurWork from "../../components/WebComponents/WebOurWork/WebOurWork.jsx";
import WebMotivational from "../../components/WebComponents/WebMotivational/WebMotivational.jsx";
import MovingSection from "../../components/Navbar/MovingSection/MovingSection.jsx"

export default function HomeWebsites() {

  const props = {
    firstSet: [
      { image: "/images/moving_section_icons/websites/img1.png", name: "Css" },
      { image: "/images/moving_section_icons/websites/img2.png", name: "Motion" },
      { image: "/images/moving_section_icons/websites/img3.png", name: "React.js" },
      { image: "/images/moving_section_icons/websites/img4.png", name: "Bootstrap" },
      { image: "/images/moving_section_icons/websites/img5.png", name: "Javascript" },
      { image: "/images/moving_section_icons/websites/img13.png", name: "MySQL" },
      { image: "/images/moving_section_icons/websites/img7.png", name: "Vite" },
      { image: "/images/moving_section_icons/websites/img8.png", name: "Npm" },
      { image: "/images/moving_section_icons/websites/img9.png", name: "Tailwind" },
      { image: "/images/moving_section_icons/websites/img10.png", name: "Node.js" },
      { image: "/images/moving_section_icons/websites/img11.png", name: "Html" },
      { image: "/images/moving_section_icons/websites/img12.png", name: "Mongo DB" },
    ],
     themeColor: "dark"
  };

  return (
      <div className={styles.web_container}>
        {/* First section */}
        <WebIntro />

        {/* Second section */}
        <WebIssues />

        {/* Third section */}
        <WebSolutions />

        {/* Fourth section */}
        <WebSteps />

        {/* Fifth section */}
        <WebOurWork />

        {/* Sixth section */}
        <MovingSection props={props} />

        {/* Final section */}
        <WebMotivational />
      </div>
  );
}