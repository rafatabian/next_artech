import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import FooterForm from "../ClientComponents/FooterForm/FooterForm";

export default function Footer() {

  return (
    <div className={styles.footer_background}>
      <div className={styles.footer_container}>
        <h1>ARTECH</h1>
        <div className={styles.footer_content}>
          {/* form */}
          <div className={styles.footer_form_column}>
            <FooterForm />
          </div>

          {/* links */}
          <div className={styles.footer_links_column}>
            <Link href="/" aria-label="Home page">HOME</Link>
            <Link href="/websites" aria-label="Websites page">WEBSITES</Link>
            <Link href="/branding" aria-label="Branding page">BRANDING</Link>
            <Link href="/marketing" aria-label="Marketing page">MARKETING</Link>
            <Link href="/plans" aria-label="Plans page">PLANS</Link>
            <Link href="/contact" aria-label="Contact page">CONTACT</Link>
            <Link href="/help" aria-label="Help page">HELP</Link>
          </div>

          {/* last column */}
          <div className={styles.footer_last_column}>
            <a
              href="https://www.facebook.com/profile.php?id=61561101313220"
              aria-label="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://www.instagram.com/artech.agency1?igsh=cDFycG50ZnVlZDFi"
              aria-label="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@artechagency"
              aria-label="tiktok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok /> TikTok
            </a>
            <a href="mailto:business@artech-agency.co" aria-label="send us an email">
              <MdEmail /> business@artech-agency.co
            </a>
            <Link href="/privacy" aria-label="Privacy policy page">Privacy Policy</Link>
            <Link href="/terms" aria-label="Terms and conditions page">Terms and Conditions</Link>
            <p>© 2025 ARTECH. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}