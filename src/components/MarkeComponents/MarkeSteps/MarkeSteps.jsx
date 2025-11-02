import styles from "./MarkeSteps.module.css"
import Link from "next/link"


const MarkeSteps = () => {
  return (
    <div className={styles.marke_steps_background}>
      <div className={styles.marke_steps_container}>
            <h1>From 0 to hero</h1>
            <div className={styles.merke_steps_content}>
              {/* fisrt step */}
              <div className={styles.marke_steps_step}>
                <h2>Step 1</h2>
                <p>Define goals and strategy</p>
              </div>
              {/* second step */}
              <div className={styles.marke_steps_step}>
                <h2>Step 2</h2>
                <p>Launch targeted campaigns</p>
              </div>
              {/* third step */}
              <div className={styles.marke_steps_step}>
                <h2>Step 3</h2>
                <p>Track, improve, scale</p>
              </div>
              </div>  
              <Link href="/contact" className={styles.marke_steps_button}>Start today</Link>
      </div>
    </div>
  )
}

export default MarkeSteps