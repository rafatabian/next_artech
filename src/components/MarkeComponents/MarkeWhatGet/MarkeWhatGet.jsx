import styles from "./MarkeWhatGet.module.css"
import Image from "next/image"

const Markesolution = () => {
  return (
  <div className={styles.marke_solubion_background}>
    <div className={styles.marke_solution_container}>
      <h1>What You’ll Get Real Growth, Delivered.</h1>

      {/* first solution */}
      <div className={styles.marke_solution}>
      <Image width={260} height={160} src="/images/marketing/marke_first_img.png" alt="solution" />
      <h2>More customers</h2>
      <p>Turn clicks into customers with data-driven campaigns that attract qualified enquiries and online orders. Track your progress with clear weekly growth reports  before and after, visible and measurable.</p>
      </div>
      {/* second solution */}
      <div className={styles.marke_solution}>
      <Image width={275} height={160} src="/images/marketing/marke_second_img.png" alt="solution" />
      <h2>Socials That Sell</h2>
      <p>Five platforms. Thirty premium posts and reels designed to tell your brand story, grow followers, and drive engagement that converts.</p>
      </div>
      {/* third solution */}
      <div className={styles.marke_solution}>
      <Image width={310} height={160} src="/images/marketing/marke_third_img_png.png" alt="solution" />
      <h2>Google accelerator</h2>
      <p>High-performance ads, SEO optimisation, and Google Maps ranking so your store appears first when customers are ready to buy.</p>
      </div>
      {/* fourth solution */}
      <div className={styles.marke_solution}>
      <Image width={290} height={160} src="/images/marketing/marke_forth.png" alt="solution" />
      <h2>Free Mentoring</h2>
      <p>Included with every campaign: personal guidance from our specialists. We’ll define your audience, reveal your unique selling points, and teach you the exact strategies behind your results.</p>
      </div>
       {/* fifth solution */}
      <div className={styles.marke_solution}>
      <Image width={215} height={160} src="/images/marketing/marke_fifth.png" alt="solution" />
      <h2>Free Blog</h2>
      <p>A tailored product blog with on-page SEO  crafted to turn searches into store visits and readers into repeat buyers.</p>
      </div>
      
  </div>
  </div>
  )
}

export default Markesolution