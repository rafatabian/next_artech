import styles from "./MarkeUnforgettable.module.css"
import Image from "next/image"

const MarkeUnforgettable = () => {
  return (
     <div className={styles.marke_story_background}>
      <div className={styles.marke_story_container}>
        <div className={styles.marke_story_image}>
          <Image width={580} height={450} src="/images/marketing/marke_unforgettable.png" alt="Marketing Story" />
        </div>
        <div className={styles.marke_story_text}>
          <h1>From Invisible to Unforgettable</h1>
          <p>Most sustainable stores we meet have incredible products and a genuine mission behind them. Yet even when everything feels perfect, hardly anyone notices you. Your posts don’t get the engagement they deserve, your website traffic stalls, and sales grow slower than your effort. It’s never been about luck, it’s about being seen, at the right time, by the right people. When your story is told with clarity and shown to the right audience, everything changes. People notice. They ask questions, visit your store, and buy. Soon, your brand becomes seen, trusted, and remembered. Marketing isn’t guesswork, it’s storytelling with purpose and precision. It’s how we turn your values, products, and mission into messages that connect, resonate, and drive action.</p>
        </div>
      </div>
    </div>
  )
}

export default MarkeUnforgettable