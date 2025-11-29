import styles from "./WebIntro.module.css"
import Link from "next/link"
import Image from "next/image"

const WebIntro = () => {
  return (
   <div className={styles.web_intro}>
        <div>
          <h1>Imagine a website that works while you sleep, converting visitors 24/7</h1>
          <h2>Build with SEO, AI and performance in mind</h2>
          <div className={styles.web_intro_btn_container}>
            <Link href="/plans">Plans</Link>
            <Link href="/contact">Get started</Link>
          </div>
        </div>
        
        <div>
          <Image width={550} height={380} src="/images/websites/web_intro.webp" alt="websites intro image" priority/>
        </div>
      </div>
  )
}

export default WebIntro