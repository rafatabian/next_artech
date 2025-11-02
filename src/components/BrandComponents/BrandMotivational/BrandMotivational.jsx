import styles from "../../MarkeComponents/MarkeMotivational/MarkeMotivational.module.css"
import Link from "next/link";
import Image from "next/image";

const BrandMotivational = () => {
  return (
    <div className={styles.marke_motivational_background}>
      <div className={styles.marke_motivational}>
        <Image width={400} height={261} src="/images/branding/brand_motivational.webp" alt="starting project"/>
        <div className={styles.marke_motiovational_text}>
          <h1>Turn Your Vision Into a Brand People Remember</h1>
          <h2>You’ve seen the results we deliver—now it’s time to create yours.</h2>
          <Link href="/contact" aria-label="contact">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default BrandMotivational;