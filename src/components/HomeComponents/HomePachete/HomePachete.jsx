import styles from "./HomePachete.module.css";
import Link from "next/link";
import { FaRocket, FaStar } from "react-icons/fa6";
import { ImArrowUpRight2 } from "react-icons/im";

const HomePachete = () => {
  return (
    <div className={styles.homePachete_background}>
      <div className={styles.homePachete_container}>
        <h1>Plans</h1>
        <h2>All in One Plans, No Hidden Fees</h2>

        <div className={styles.homePachete_cards}>
          <div className={styles.homePachete_first_card}>
            <span>STARTER <ImArrowUpRight2 /></span>
            <span className={styles.homePachetete_text}>- Logo design</span>
            <span className={styles.homePachetete_text}>- Free domain name</span>
            <span className={styles.homePachetete_text}>- One page custom website</span>
            <span className={styles.homePachetete_text}>- Social media setup</span>
          </div>

          <div className={styles.homePachete_second_card}>
            <span>STANDARD <FaRocket /></span>
            <span className={styles.homePachetete_text}>- 2 Custom logos</span>
            <span className={styles.homePachetete_text}>- 3 Pages website</span>
            <span className={styles.homePachetete_text}>- Performance optimisation</span>
            <span className={styles.homePachetete_text}>- Business card design</span>
            <span className={styles.homePachetete_text}>- 2 weeks marketing campaign</span>
            <span className={styles.homePachetete_text}>- 2 weeks content creation</span>
          </div>

          <div className={styles.homePachete_third_card}>
            <span>PRO <FaStar /></span>
            <span className={styles.homePachetete_text}>- 3 Custom Logos</span>
            <span className={styles.homePachetete_text}>- 5 Pages Website</span>
            <span className={styles.homePachetete_text}>- SEO & Performance optimisation</span>
            <span className={styles.homePachetete_text}>- Free maintenance for 4 weeks</span>
            <span className={styles.homePachetete_text}>- 4 weeks marketing campaign</span>
            <span className={styles.homePachetete_text}>- Traffic and performance reports</span>
            <span className={styles.homePachetete_text}>- Content for ads (photo/video)</span>
          </div>
        </div>

        <Link href="/plans" aria-label="See our plans in detail" className={styles.home_plans_btn}>
          Discover Plans
        </Link>
      </div>
    </div>
  );
};

export default HomePachete;