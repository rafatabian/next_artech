import styles from "./PlansMotivational.module.css"
import Link from "next/link";
import Image from "next/image";

const PlansMotivational = () => {
  return (
    <div className={styles.plans_motivational_background}>
      <div className={styles.plans_motivational}>
        <Image
        width={470} height={315}
          src="/images/plans/plans_motivational.webp"
          alt="starting project"
        />
        <div className={styles.plans_motiovational_text}>
          <h1>Ready to Take Your Business to the Next Level?</h1>
          <h2>
            Choose a plan that fits your goals or if you're unsure, schedule a
            free consultation and we'll guide you through the best option for
            your business.
          </h2>
          <Link href="/contact" aria-label="contact">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlansMotivational;