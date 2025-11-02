import "../../../app/globals.css";
import styles from "./Home_our_services.module.css";
import Link from "next/link";
import { MdWeb } from "react-icons/md";
import { FaAudioDescription, FaTag, FaBoxesStacked } from "react-icons/fa6";

export default function Home_our_services() {
  return (
  <section
    className={styles.home_our_services_background}
    aria-labelledby="our-services-title"
  >
    <div className={styles.home_our_services_container}>
      <header
        className={styles.home_our_services_title_container}
        id="our-services-title"
      >
        <h2>Explore all Artech has to offer</h2>
        <p>Tailored Services to Elevate Your Business</p>
      </header>

      <div
        className={styles.home_our_services_cards_container}
      >

        <article className={styles.home_our_services_card}>
          <h3>Marketing</h3>
          <FaAudioDescription aria-hidden="true" />
          <Link
            href="/marketing"
            className={styles.link}
            aria-label="Explore our digital marketing strategies"
          >
            Explore
          </Link>
        </article>

         <article className={styles.home_our_services_card}>
          <h3>Websites</h3>
          <MdWeb aria-hidden="true" />
          <Link
            href="/websites"
            className={styles.link}
            aria-label="Explore our website creation services"
          >
            Explore
          </Link>
        </article> 

        <article className={styles.home_our_services_card}>
          <h3>Branding</h3>
          <FaTag aria-hidden="true" />
          <Link
            href="/branding"
            className={styles.link}
            aria-label="Explore our branding services"
          >
            Explore
          </Link>
        </article>

        <article className={styles.home_our_services_card}>
          <h3>All in One</h3>
          <FaBoxesStacked aria-hidden="true" />
          <Link
            href="/plans"
            className={styles.link}
            aria-label="Explore our all-in-one plans for marketing, websites, and branding"
          >
            Explore
          </Link>
        </article>
      </div>
    </div>
  </section>
);
}