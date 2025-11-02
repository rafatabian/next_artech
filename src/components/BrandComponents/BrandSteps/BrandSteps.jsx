import styles from "./BrandSteps.module.css";

const BrandSteps = () => {
  return (
    <div className={styles.brand_steps_background}>
      <div className={styles.brand_steps}>
        <h1>Step-by-step process</h1>

        {/* first banner */}
        <div className={styles.brand_step_banner}>
          <div className={styles.brand_number_container}>
            <h3 className={styles.brand_big_numbers} aria-hidden="true">1</h3>
          </div>
          <div className={styles.brand_step_texts}>
            <h2>Build Your Brand Core</h2>
            <p>
              Before we design anything, we define everything. We start by
              uncovering your brand’s essence who you are, what makes you
              different, and how you should be perceived. From audience
              targeting to mission, vision, and brand personality, we lay the
              foundation that sets your brand apart and ensures it’s built to
              last.
            </p>
          </div>
        </div>

        {/* second banner */}
        <div className={styles.brand_step_banner}>
          <div className={styles.brand_number_container}>
            <h4 className={styles.brand_big_numbers} aria-hidden="true">2</h4>
          </div>
          <div className={styles.brand_step_texts}>
            <h2>Apply It Everywhere</h2>
            <p>
              Now that your brand is ready, we help you show it off
              consistently, across every touchpoint. From business cards to
              social media and packaging, we design everything your business
              needs to look professional, cohesive, and instantly recognizable,
              both online and offline.
            </p>
          </div>
        </div>

        {/* third banner */}
        <div className={styles.brand_step_banner}>
          <div className={styles.brand_number_container}>
            <h5 className={styles.brand_big_numbers} aria-hidden="true">3</h5>
          </div>
          <div className={styles.brand_step_texts}>
            <h2>Development</h2>
            <p>
              We write clean, efficient code and fully optimise your site for
              speed, SEO, and performance. After launch, we run extra testing
              to make sure everything works perfectly and continues to support
              your growth.
            </p>
          </div>
        </div>

        <a href="/contact" className={styles.brand_start_link} aria-label="Go to contact page" >Contact us</a>
      </div>
    </div>
  );
};

export default BrandSteps;