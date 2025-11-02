import styles from "./BrandStory.module.css"
import Link from "next/link"
import Image from "next/image"

const BrandStory = () => {
  return (
    <div className={styles.brand_story_background}>
      <div className={styles.brand_story_container}>
        <div className={styles.brand_story_image}>
          <Image width={456} height={683} src="/images/branding/brand_story.webp" alt="Marketing Story" />
        </div>
        <div className={styles.brand_story_text}>
          <h1>Real Impact</h1>
          <h2>Discover how our branding transformed a small business into a recognized name</h2>
          <h3>A True Transformation</h3>
          <p>One of our clients had an amazing service, but their brand lacked a clear identity. We worked closely with them to create a visual style, voice, and presence that resonated with their audience.</p>
          <p>The outcome? Their brand became instantly recognizable, their customer trust grew, and they started attracting higher-value clients within just weeks.</p>
          <Link href="/contact" className={styles.brand_story_button}>Free consultatioon</Link>
        </div>
        
      </div>
    </div>
  )
}

export default BrandStory