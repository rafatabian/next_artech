import styles from "./MarkeMotivational.module.css"
import Link from "next/link";
import Image from "next/image";

const MarkeMotivational = () => {
  return (
    <div className={styles.marke_motivational_background}>
      <div className={styles.marke_motivational}>
        <Image
        width={400} height={266}
          src="/images/marketing/marke_motiviational.webp"
          alt="starting project"
        />
        <div className={styles.marke_motiovational_text}>
          <h1>Let’s Grow Your Business Together</h1>
          <h2>You’ve seen what we do and how we do it. Now it’s your turn.</h2>
          <Link href="/contact" aria-label="contact">Get in touch</Link>
        </div>
      </div>
    </div>
  );
};

export default MarkeMotivational;