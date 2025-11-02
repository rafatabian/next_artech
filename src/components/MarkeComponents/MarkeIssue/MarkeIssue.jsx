import styles from "./MarkeIssue.module.css";
import Image from "next/image";


const MarkeIssue = () => {
  return (
    <div className={styles.marke_issues_background}>
      <div className={styles.marke_issues}>
        <h1>Common issues</h1>

        <div className={styles.marke_issues_continer}>
          <div>
            <Image width={554} height={371} src="/images/marketing/marke_issue.webp" alt="issues" />
          </div>

          <div>
            <span>No clear strategy</span>
            <span>Marketing campaigns are not optimised</span>
            <span>No testing or data-based improvement</span>
            <span>Ads that look good but don’t sell</span>
            <span>No customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkeIssue;