import styles from "./BrandIntro.module.css"
import Link from "next/link"
import Image from "next/image"

const BrandIntro = () => {
  return (
    <div className={styles.marke__intro_background}>
      <div className={styles.marke_intro_container}>
        <div className={styles.brand_intro_img_container}>
           <Image width={551} height={420} src="/images/branding/brandIntroImg.webp" alt="Marketing Intro" className={styles.marke_intro_image} priority/>
        </div>
       
        <div className={styles.marke_intro_text}>
          <h1>Look Like a Brand People Can Trust From Day One</h1>
          <p>Logos, visuals, and business cards that instantly build credibility</p>
          <div className={styles.marke_button_container}>
            <Link href="/contact" className={styles.marke_button}>
              Contact Us
            </Link>
            <Link href="/marketing" className={styles.marke_button}>
              See Plans
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BrandIntro