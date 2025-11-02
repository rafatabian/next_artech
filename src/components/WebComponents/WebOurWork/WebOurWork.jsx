import styles from "./WebOurWork.module.css"
import { FiTool } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const WebOurWork = () => {
  return (
    <div className={styles.web_work}>
      <h1>Our work</h1>
      <div className={styles.web_work_cards_conteiner}>
        {/* second card */}
        <div className={styles.web_work_card}>
          <Image width={400} height={400} src="/images/websites/web_our_work_2.webp" alt="project" />
          <h2>E-commerce</h2>
          <p>
            We developed a custom online store where users can quickly search, browse, and discover products without delays. Built for speed and performance, the site loads in under 1s and offers a seamless shopping experience on any device.
          </p>
          <Link href="https://rafatabian.github.io/store" aria-label="link to project">Discover</Link>
        </div>
        {/* third card */}
        <div className={styles.web_work_card}>
          <Image width={400} height={400} src="/images/websites/web_our_work_3.webp" alt="project" />
          <h2>Xplora+</h2>
          <p>
            We created a sleek, fast website for Explora to promote their social app. Clear messaging and smart design helped boost downloads by over 300%.
          </p>
          <Link href="https://rafatabian.github.io/xplora/" aria-label="link to project">Discover</Link>
        </div>
        {/* first card */}
        <div className={styles.web_work_card}>
          <FiTool />
          <h2>AI assistant</h2>
          <p>
            Work in progress...
          </p>
          <Link href="" aria-label="link to project">Discover</Link>
        </div>
      </div>
    </div>
  );
};

export default WebOurWork;