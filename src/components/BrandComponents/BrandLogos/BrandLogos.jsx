import styles from "./BrandLogos.module.css"
import Link from "next/link"
import Image from "next/image"

const BrandLogos = () => {
  return (
    <div className={styles.brand_logo_background}>
      <h1>Logo creation prosess</h1>
      <div className={styles.brand_logo_container}>
         
         <div className={styles.brand_logo_text}>
            <span>1<p>We learn about your brand, goals, and target audience.</p></span>
          <span>2<p>We sketch and explore creative logo ideas.</p></span>
          <span>3<p>We select the best concept and refine it with your feedback.</p></span>
          <span>4<p>You choose your favorite version for final touches.</p></span>
          <Link href="/contact">Start Creating</Link>
         </div>
         {/* img container */}
         <div className={styles.brand_img_container}>
          <div className={styles.brand_logo_img_container}>
            <Image width={210} height={210} src="/images/branding/brand_logo_logo_1.webp" alt="logo"/>
            <span></span>
          </div>
          <div className={styles.brand_logo_img_container}>
            <Image width={210} height={210} src="/images/branding/brand_logo_logo_2.webp" alt="logo"/>
            <span></span>
          </div>
           <div className={styles.brand_logo_img_container}>
            <Image width={210} height={210} src="/images/branding/brand_logo_logo_3.webp" alt="logo"/>
          </div>
         </div>
      </div>
    </div>
  )
}

export default BrandLogos