import styles from "./WebMotivational.module.css"
import Link from "next/link";
import Image from "next/image";

const WebMotivational = () => {
  return (
    <div className={styles.web_motivational_background}>
      <div className={styles.web_motivational}>
        <Image width={450} height={300} src="/images/websites/web_motivational.webp" alt="starting project" />
        <div className={styles.web_motiovational_text}>
          <h1>Let's build a website that works for you</h1>
          <Link href="/contact" aria-label="contact">Let's get started</Link>
        </div>
      </div>
    </div>
  );
};

export default WebMotivational;