import styles from "./MarkeEducational.module.css"
import { FaUserClock } from "react-icons/fa"

const MarkeEducational = () => {
  return (
    <div className={styles.marke_story_background}>
      <div className={styles.marke_story_container}>
        <div className={styles.marke_story_image}>
         <FaUserClock />
        </div>
        <div className={styles.marke_story_text}>
          <h1>What 95% of Buyers Never See</h1>
          <p>Research shows that 95% of purchase decisions happen subconsciously, before logic even joins the conversation.
             In one famous experiment, shoppers given 24 types of jam felt overwhelmed. Only 4 made a purchase. When offered just 6, over 30 bought instantly.
             The lesson? People don’t choose the “best” option, they choose the clearest one.
             When your message cuts through the noise and speaks to the emotional mind that buys before it thinks, growth becomes effortless.
             That’s why we design marketing that connects first, convinces second, aligning your brand with how people really decide.</p>
        </div>
        
      </div>
    </div>
  )
}

export default MarkeEducational