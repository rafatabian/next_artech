import styles from "./WebIssues.module.css"
import Image from "next/image";

const WebIssues = () => {
  return (
    <div className={styles.web_issues_background}>
      <div className={styles.web_issues}>
        <h1>Common issues</h1>

        <div className={styles.web_issues_continer}>
          <div>
            <Image width={554} height={370} src="/images/websites/web_issues.webp" alt="issues" />
          </div>

          <div>
            <span>Slow website</span>
            <span>Leak of clear vision or strategy</span>
            <span>No serach engine optimisation SEO</span>
            <span>Leak of functionality and customisation</span>
            <span>No ungoing support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebIssues;