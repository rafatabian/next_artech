import styles from "./WebSolutions.module.css"
import Image from "next/image";

const WebSolutions = () => {
  return (
    <div className={styles.web_solutions_container}>
      <h1>Our solutions</h1>

      {/* first container */}
      <div className={styles.web_solution}>
        <div className={styles.web_solution_text}>
          <h2>Websites that load in under 2s guaranteed</h2>
          <p>
            Our websites load in under 2 seconds and often under 1 second on high-speed connections. Every site is tested with Google’s top performance tools and optimised for speed on all devices.
          </p>
        </div>
        <div>
          <Image width={426} height={350} src="/images/websites/web_solutions_img.webp" alt="solution" />
        </div>
      </div>

      {/* second container */}
      <div className={styles.web_solution_reverse}>
        <div className={styles.web_solution_text_reverse}>
          <h2>SEO Optimisation</h2>
          <p>
            We optimise your website to rank higher on Google and attract free long-term traffic. Speed, structure, and accessibility all impact SEO and we take care of it all so you don’t have to.
          </p>
        </div>
        <div>
          <Image width={426} height={350} src="/images/websites/web_solutions_seo.webp" alt="solution" />
        </div>
      </div>

      {/* third container */}
      <div className={styles.web_solution}>
        <div className={styles.web_solution_text}>
          <h2>Custom design, Unlimited Possibilities</h2>
          <p>
            We design your website around your goals and purpose, whether that’s getting more clients, bookings, or sales. From the color palette and branding to the messaging and structure, everything is crafted to help you stand out.
          </p>
        </div>
        <div>
          <Image width={426} height={350} src="/images/websites/web_colors.webp" alt="solution" />
        </div>
      </div>

      {/* fourth container */}
      <div className={styles.web_solution_reverse}>
        <div className={styles.web_solution_text_reverse}>
          <h2>Ongoing support</h2>
          <p>
            We help you make the right choices from layout and design to structure and content. You’ll always speak to real people, not chatbots, and if you need help after your site is live, we offer ongoing support to keep things running smoothly.
          </p>
        </div>
        <div>
          <Image width={426} height={350} src="/images/websites/web_support.webp" alt="solution" />
        </div>
      </div>

      <a href="/plans">Explore our plans</a>
    </div>
  );
};

export default WebSolutions;