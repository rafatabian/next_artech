import styles from "./MarkeIntro.module.css"
import Link from "next/link"
import Image from "next/image"



const MarkeIntro = () => {
  return (
    <div className={styles.marke__intro_background}>
      <div className={styles.marke_intro_container}>
        <Image width={550} height={400} src="/images/marketing/marke_intro_two.jpg" alt="Marketing Intro" className="marke_intro_image" priority/>
        <div className={styles.marke_intro_text}>
          <h1>Get more customers from week 1 </h1>
          <p>Performance marketing for businesses in the UK, 30-day campaigns that turn attention into visits, enquiries and sales. Risk-free: we cover one month of ad spend if you don’t see measurable results.</p>
          <div className={styles.marke_button_container}>
            <Link href="/contact" className="marke_button">
              Contact Us
            </Link>
            <Link href="/plans" className={styles.marke_button}>
              See Plans
            </Link>
        </div>
        <p>Certified Google Ads<Image width={29} height={29} src="/images/marketing/google_logo.png" alt="google logo"/>and Meta Ads<Image width={40} height={40} src="/images/marketing/meta_logo.png" alt="meta logo"/> professionals</p>
        <span><Image width={30} height={30} src="/images/marketing/gdpr_logo.png" alt="gdpr logo"/>GDPR compliant</span>
      </div>
    </div>
    </div>
    
  )
}

export default MarkeIntro