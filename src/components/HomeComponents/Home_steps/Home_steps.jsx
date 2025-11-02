import styles from "./Home_steps.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const Home_steps = () => {
  return (
    <div className={styles.home_steps_background}>
      <div className={styles.home_steps_container}>
        <div className={styles.home_steps_titles}>
          <h1>Simple, Clear Process to Get You Online</h1>
          <h2>All-in-One Setup, designed to Make You Stand Out</h2>
        </div>

        <div className={styles.home_steps_step_container}>
          {/* step 1 */}
          <div className={styles.home_steps_step}>
            <h2>1</h2>
            <p>Book a free consultation</p>
          </div>
          <div className={styles.home_steps_step_svg}>
            <FaLongArrowAltRight />
          </div>

          {/* step 2 */}
          <div className={styles.home_steps_step}>
            <h2>2</h2>
            <p>Pick your package</p>
          </div>
          <div className={styles.home_steps_step_svg}>
            <FaLongArrowAltRight />
          </div>

          {/* step 3 */}
          <div className={styles.home_steps_step}>
            <h2>3</h2>
            <p>We create everything for you</p>
          </div>
          <div className={styles.home_steps_step_svg}>
            <FaLongArrowAltRight />
          </div>

          {/* step 4 */}
          <div className={styles.home_steps_step}>
            <h2>4</h2>
            <p>You go live & grow</p>
          </div>
        </div>

        <div>
          <Link href="/contact" className={styles.steps_start} aria-label="Start a project">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home_steps;