import styles from "./MarkeWhyUs.module.css"
import Image from "next/image"

const MarkeWhyUs = () => {
  return (
    <div className={styles.marke_story_background}>
      <div className={styles.marke_story_container}>
        <div className={styles.marke_story_image}>
          <Image width={456} height={300} src="/images/marketing/marke_why_us.jpg" alt="man choosing based on subconcious thinking" />
        </div>
        <div className={styles.marke_story_text}>
          <h1>Why us?</h1>
          <p>Because we’re a team of specialists with decades of proven experience in marketing. Every campaign we run is built to deliver measurable growth. We make sure your marketing performs. And since we work exclusively with sustainable brands, we know exactly how to attract conscious customers and turn them into repeat buyers.Turning a one-time buyer into a regular is where your business truly grows.</p>
        </div>
        
      </div>
    </div>
  )
}

export default MarkeWhyUs