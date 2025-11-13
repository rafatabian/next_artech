import styles from "./MarkeGurarantee.module.css"
import Image from "next/image"


const MarkeStory = () => {
  return (
    <div className={styles.marke_story_background}>
      <div className={styles.marke_story_container}>
        <div className={styles.marke_story_image}>
          <Image width={510} height={340} src="/images/marketing/marke_guarantee.jpg" alt="Marketing Story" />
        </div>
        <div className={styles.marke_story_text}>
          <h1>Our Risk-Free Guarantee</h1>
          <p>We believe results should speak louder than promises.That’s why if our marketing doesn’t deliver measurable growth, we’ll personally cover one full month of your ad spend no excuses, no fine print.You get performance, or you don’t pay for it. Because your growth isn’t a gamble it’s our commitment.</p>
        </div>
        
      </div>
    </div>
  )
}

export default MarkeStory