import styles from "./MarkeSolution.module.css"
import Link from "next/link"
import Image from "next/image"

const Markesolution = () => {
  return (
  <div className={styles.marke_solubion_background}>
    <div className={styles.marke_solution_container}>
      <h1>Our Solutions</h1>
      {/* first solution */}
      <div className={styles.marke_solution}>
      <Image width={220} height={146} src="/images/marketing/marke_chess.webp" alt="solution" />
      <h2>Custom Strategy That Converts</h2>
      <p>We build a custom marketing plan based on your goals, step by step. Each action has a clear purpose and is designed to deliver measurable results.</p>
      </div>
      {/* second solution */}
      <div className={styles.marke_solution}>
      <Image width={220} height={146} src="/images/marketing/marke_people.webp" alt="solution" />
      <h2>Target the Right People</h2>
      <p>Trying to appeal to everyone means your message connects with no one. Poor targeting is one of the biggest reasons marketing fails.</p>
      </div>
      {/* third solution */}
      <div className={styles.marke_solution}>
      <Image width={220} height={146} src="/images/marketing/marke_coins.webp" alt="solution" />
      <h2>Smarter Budget, Better Results</h2>
      <p>We use A/B testing and monitor real-time results to constantly improve performance. Your budget works harder and smarter.</p>
      </div>
      {/* fourth solution */}
      <div className={styles.marke_solution}>
      <Image width={220} height={146} src="/images/marketing/marke_ladder.webp" alt="solution" />
      <h2>Ads That Sell</h2>
      <p>We create ads that sell, not just look pretty. Sharp copy, effective design, and smart targeting lead to real results.</p>
      </div>
      <div className={styles.marke_solution_button}>
         <Link href="/contact" >Contact Us</Link>
      </div>
      
  </div>
  </div>
  )
}

export default Markesolution