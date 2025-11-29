import styles from "./page.module.css";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import dynamic from "next/dynamic";
import { FaCalendarAlt } from "react-icons/fa";

// metadata
export const metadata = {
  title: "Contact Artech | Book a Free Website & Marketing Audit",
  description: "Ready to grow? Contact us to book a free audit—website, branding or marketing. Quick response for B2B businesses.",
  keywords: ["book free website audit london agency", "get a marketing quote london web agency", "contact branding expert london small business"],
  openGraph: {
    title: "ARTECH | Get more customers and grow",
    description: "Ready to grow? Contact us to book a free audit—website, branding or marketing. Quick response for B2B businesses.",
    url: "/images/social_media_img.png",
    siteName: "My Awesome Site",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Awesome Site OG image",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
       index: false, 
       follow: false, 
       "max-snippet": -1,
       "max-image-preview": "large", 
       "max-video-preview": -1
    }
  }
};

// dynamic import
const ContactIntro = dynamic(() =>
  import("../../components/ContactComponents/ContactIntro/ContactIntro")
);
const ContactFaq = dynamic(() =>
  import("../../components/HomeComponents/Home_faq/Home_faq.jsx")
);

export default function Contact() {


  return (
      <div className={styles.contact_container}>
          <ContactIntro />

        {/* or */}
        <div className={styles.contact_alternative_line}>
          <p>or</p>
        </div>

        {/* alternative contact */}
        <div className={styles.contact_phone_email}>
          <div>
            <RiWhatsappFill />
            <span>
              <a href="https://wa.me/447424177665"
                 target="_blank"
                 rel="noopener noreferrer"
                 >+44 7424 177 665</a>
            </span>
          </div>
          <div>
            <MdEmail />
            <a href={`mailto:${"business@artech-agency.co"}`}>
              business@artech-agency.co
            </a>
          </div>
            <div className={styles.contact_note}>
          <p><FaCalendarAlt /> We only take on 5 new clients each month</p>
        </div>
        </div>
        
        <ContactFaq />
      </div>
  );
}