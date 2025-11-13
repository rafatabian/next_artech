import styles from "./MarkeMotivational.module.css"
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";


const MarkeMotivational = () => {
  return (
    <div className={styles.marke_motivational_background}>
      {/* offer */}
      <div className={styles.marke_motivational_offer}>
        <div>
            <p><FaCalendarAlt /> We only take on 5 new clients each month</p>
        </div>
      </div>
      <div className={styles.marke_motivational}>
        <Image
        width={400} height={266}
          src="/images/marketing/marke_motivational.png"
          alt="starting project"
        />
        <div className={styles.marke_motiovational_text}>
          <h1>Book Your Free Growth Strategy Session</h1>
          <h2>Claim your spot now and start seeing measurable growth from week one.</h2>
          <Link href="/contact" aria-label="contact">Get in touch</Link>
        </div>
      </div>
    </div>
  );
};

export default MarkeMotivational;