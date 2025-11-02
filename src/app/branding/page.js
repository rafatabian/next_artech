
// metadata
export const metadata = {
  title: "Branding Agency | Brand Strategy, Identity & Logos",
  description: "Craft memorable brands that attract customers. We do brand strategy, identity systems, messaging and creative that converts.",
  keywords: ["brand identity design london startup", "logo design agency london for small business", "branding strategy services london uk"],
  openGraph: {
    title: "ARTECH | Get more customers and grow",
    description: "Craft memorable brands that attract customers. We do brand strategy, identity systems, messaging and creative that converts.",
    url: "artech-agency.co/branding",
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

import BrandIntro from "../../components/BrandComponents/BrandIntro/BrandIntro"
import BrandIssue from "../../components/BrandComponents/BrandIssue/BrandIssue"
import BrandSteps from "../../components/BrandComponents/BrandSteps/BrandSteps"
import BrandLogos from "../../components/BrandComponents/BrandLogos/BrandLogos"
import BrandRebranding from "../../components/BrandComponents/BrandRebranding/BrandRebranding"
import BrandMotivational from "../../components/BrandComponents/BrandMotivational/BrandMotivational"
import BrandStory from "../../components/BrandComponents/BrandStory/BrandStory"
import BrandServices from "../../components/BrandComponents/BrandServices/BrandServices"
import MovingSection from "../../components/Navbar/MovingSection/MovingSection"

export default function HomeBranding() {

  const props = {
    firstSet: [
      { image: "/images/moving_section_icons/branding/img1.webp", name: "Mention" },
      { image: "/images/moving_section_icons/branding/img2.webp", name: "Adobe indesign logo"  },
      { image: "/images/moving_section_icons/branding/img3.webp", name: "Hootsuite" },
      { image: "/images/moving_section_icons/branding/img4.webp", name: "Adobe Photoshop"  },
      { image: "/images/moving_section_icons/branding/img5.webp", name: "Adobe Firefly" },
      { image: "/images/moving_section_icons/branding/img6.webp", name: "Frontify" },
      { image: "/images/moving_section_icons/branding/img7.webp", name: "Adobe Premiere Pro" },
      { image: "/images/moving_section_icons/branding/img8.webp", name: "Sketch" },
      { image: "/images/moving_section_icons/branding/img9.webp", name: "Figma" },
      { image: "/images/moving_section_icons/branding/img10.webp", name: "Brandwatch" },
      { image: "/images/moving_section_icons/branding/img11.webp", name: "Canva" },
      { image: "/images/moving_section_icons/branding/img12.webp", name: "Brandfolder" },
    ],
    themeColor: "light"
  };

  return (
    <>
    <BrandIntro />
      <BrandIssue />

      <BrandServices />
      <BrandSteps />
      <BrandRebranding />
      <BrandLogos />
      <BrandStory />
      <MovingSection props={props} />
      <BrandMotivational />
    </>
      
  );
}