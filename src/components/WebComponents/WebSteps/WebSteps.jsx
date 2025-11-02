import styles from "./WebSteps.module.css"

const WebSteps = () => {
  return (
    <div className={styles.web_steps_background} alt="background image">
      <div className={styles.web_steps}>
        <h1>Step-by-step process</h1>

        {/* first banner */}
        <div className={styles.web_step_banner}>
          <div className={styles.number_conteiner}>
            <h3 aria-hidden="true">1</h3>
          </div>
          <div className={styles.web_step_texts}>
            <h2>Planning and Strategy</h2>
            <p>
              We start by understanding your website’s purpose whether it’s to sell, showcase, or inform. Together, we define the structure, key content, pages, and functionality your audience expects. We also help you choose the right hosting setup for your needs.
            </p>
          </div>
        </div>

        {/* second banner */}
        <div className={styles.web_step_banner}>
          <div className={styles.number_conteiner}>
            <h3 aria-hidden="true">2</h3>
          </div>
          <div className={styles.web_step_texts}>
            <h2>Design and Colors</h2>
            <p>
              We create a design that feels right for your brand and easy for your visitors. From colors and fonts to layout and logo, everything is thoughtfully combined to deliver a great user experience and a professional look.
            </p>
          </div>
        </div>

        {/* third banner */}
        <div className={styles.web_step_banner}>
          <div className={styles.number_conteiner}>
            <h3 aria-hidden="true">3</h3>
          </div>
          <div className={styles.web_step_texts}>
            <h2>Development</h2>
            <p>
              We write clean, efficient code and fully optimise your site for speed, SEO, and performance. After launch, we run extra testing to make sure everything works perfectly and continues to support your growth.
            </p>
          </div>
        </div>

        <a href="/contact" aria-label="Go to contact page">Contact us</a>
      </div>
    </div>
  );
};

export default WebSteps;