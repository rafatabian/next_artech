import styles from "./page.module.css";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import dynamic from "next/dynamic";

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
const ContactForm = dynamic(() =>
  import("../../components/ClientComponents/ContactForm/ContactForm")
);

export default function Contact() {


  return (
      <div className={styles.contact_container}>
        <h1 className={styles.container_title}>Contact us</h1>

        <div className={styles.contact_phone_email}>
          <div>
            <RiWhatsappFill />
            <span>
              <a href={`tel:${"+44 7424 177 665"}`}>+44 7424 177 665</a>
            </span>
          </div>
          <div>
            <MdEmail />
            <a href={`mailto:${"business@artech-agency.co"}`}>
              business@artech-agency.co
            </a>
          </div>
        </div>

        <div className={styles.contact_alternative_line}>
          <p>or</p>
        </div>

        <div className={styles.contact_form}>
          <h1>Please fill out the form, and we will get back to you as soon as possible.</h1>
          {/* form */}
         <ContactForm />
        </div>
      </div>
  );
}