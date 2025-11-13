import styles from "./MarkeMiniPain.module.css"
import Image from "next/image"

const MarkeSteps = () => {
  return (
    <div className={styles.marke_steps_background}>
      <div className={styles.marke_steps_container}>
        <div>
           <h1>Your Hard Work Deserves Recognition</h1>
           <p>You post, but it feels like no one’s listening. Your website looks beautiful, yet sales don’t reflect the effort you’ve put in. Deep down, you know your products deserve more, they just need to be seen by the right people</p>
        </div>
        <Image width="600" height="340" src="/images/marketing/marke_mini_pain_point.jpg" alt="mepty bench, no customers" />
      </div>
    </div>
  )
}

export default MarkeSteps