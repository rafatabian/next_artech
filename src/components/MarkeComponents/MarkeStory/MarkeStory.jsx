import styles from "./MarkeStory.module.css"
import Link from "next/link"
import Image from "next/image"


const MarkeStory = () => {
  return (
    <div className={styles.marke_story_background}>
      <div className={styles.marke_story_container}>
        <div className={styles.marke_story_image}>
          <Image width={456} height={484} src="/images/marketing/marke_story.jpg" alt="Marketing Story" />
        </div>
        <div className={styles.marke_story_text}>
          <h1>Real Results</h1>
          <h2>See how one of our clients skyrocketed their traffic by over 10x</h2>
          <h3>A Real Success Story</h3>
          <p>One of our clients came to us with a great product but barely any traffic. After a consultation, we developed and launched a targeted strategy tailored to their business.</p>
          <p>The results? they started receiving daily visits, new leads, and conversions, all in weeks </p>
          <Link href="/contact" className={styles.marke_story_button}>Free consultatioon</Link>
        </div>
        
      </div>
    </div>
  )
}

export default MarkeStory