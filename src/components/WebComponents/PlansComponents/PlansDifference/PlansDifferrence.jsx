import styles from "./PlansDifference.module.css"
import Link from "next/link"
import Image from "next/image"


const PlansDifferrence = () => {
  return (
    <div className={styles.plans_solubion_background}>
    <div className={styles.plans_solution_container}>
      <h1>What makes us different</h1>
      {/* first solution */}
      <div className={styles.plans_solution}>
      <Image width={220} height={146} src="/images/plans/plans_puzzle.webp" alt="solution" />
      <h2>Everything You Need, All in One</h2>
      <p>Branding, websites, marketing done for you in one place. No juggling agencies, no stress. Just a smooth, all-in-one experience.</p>
      </div>
      {/* second solution */}
      <div className={styles.plans_solution}>
      <Image width={220} height={146} src="/images/plans/plans_tag.webp" alt="solution" />
      <h2>Transparent Pricing</h2>
      <p>What you see is what you pay, no hidden fees, no surprises. On average, our packages cost <b>30% less</b> than typical UK agencies offering similar services.</p>
      </div>
      {/* third solution */}
      <div className={styles.plans_solution}>
      <Image width={220} height={146} src="/images/plans/plans_time.webp" alt="solution" />
      <h2>Fast, Reliable Delivery</h2>
      <p>Our team works with speed and precision, aiming for quick delivery timelines and providing weekly progress updates, so you’re always in the loop.</p>
      </div>
      {/* fourth solution */}
      <div className={styles.plans_solution}>
      <Image width={220} height={146} src="/images/plans/plans_design.webp" alt="solution" />
      <h2>A Personalised Approach</h2>
      <p>Your business is unique, your project should be too. From design to functionality, we tailor everything for you, ensuring it fits your brand perfectly.</p>
      </div>
      {/* fifth solution */}
      <div className={styles.plans_solution}>
      <Image width={220} height={146} src="/images/plans/plans_support.webp" alt="solution" />
      <h2>Support After Launch</h2>
      <p>Need help after launch? We’ve got you. Free updates and maintenance included in most plans.</p>
      </div>
      {/* sixth solution */}
        <div className={styles.plans_solution}>
      <Image width={220} height={146} src="/images/plans/plans_steps.webp" alt="solution" />
      <h2>Your Success Is Our Priority</h2>
      <p>Our team is focused on high-quality work that drives real outcomes—because when you succeed, we succeed too.</p>
      </div>

      <div className={styles.plans_solution_button}>
         <Link href="/contact">Contact Us</Link>
      </div>
      
  </div>
  </div>
  )
}

export default PlansDifferrence