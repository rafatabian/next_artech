import Link from "next/link";
import styles from "./MarkeGrowthAcce.module.css";
import Image from "next/image";


const MarkeIssue = () => {
  return (
    <div className={styles.marke_issues_background}>

        <div className={styles.marke_issues_continer}>
          <div>
            <Image width={550} height={350} src="/images/marketing/marke_growth_acce.jpg" alt="issues" />
          </div>

          <div>
          <h1>The Growth Accelerator</h1>
          <p>A 30-day marketing system built to attract, convert, and retain customers on autopilot. And yes our results are guaranteed. You only pay for performance, not promises.</p>
          <Link href="/contact" aria-label="contact" >Contact us</Link>
          </div>
      </div>
    </div>
  );
};

export default MarkeIssue;