import styles from "./PlansIntro.module.css"
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";
import { IoMegaphone } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { FaRulerCombined } from "react-icons/fa6";

const PlansIntro = ({  }) => {

  return (
    <div className={styles.plans__intro_background}>
      <div className={styles.plans_intro_container}>
        <div className={styles.plans_icons_conteiner}>
            <IoMegaphone />
            <MdOutlineWeb />
            <FaPencilAlt />
            <FaRulerCombined />
        </div>
        <div className={styles.plans_intro_text}>
          <h1>Branding + Website + Marketing a complete solution</h1>
          <p>Bringing every service together to accelerate your business success</p>
          <div className={styles.plans_button_container}>
            <Link href="/contact" className={styles.plans_button}>
              Contact Us
            </Link>
            <Link href="/contact"  className={styles.plans_button}>
              Free Strategy
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PlansIntro