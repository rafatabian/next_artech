import styles from './BrandIssue.module.css';

const BrandIssue = () => {
  const data = [
    {
      before: "My brand feels unclear and forgettable",
      after: "A distinctive brand that captures attention instantly",
    },
    {
      before: "I struggle to communicate my value clearly",
      after: "Messaging that connects deeply with my ideal clients",
    },
    {
      before: "I’m unsure how to apply my branding consistently",
      after: "Ready-to-use templates that simplify every touchpoint",
    },
    {
      before: "My business blends into a crowded market",
      after: "A unique brand identity that sets you apart confidently",
    },
  ];

  return (
    <section className={styles.brand_issue_section}>
      <div className={styles.brand_issue_container}>
        <h2 className={styles.brand_issue_heading}>From Brand Uncertainty to Clear Impact</h2>

        <div className={styles.brand_issue_grid}>
          {data.map((item, index) => (
            <div key={index} className={styles.brand_issue_card} tabIndex={0} aria-label={`Before: ${item.before}, After: ${item.after}`}>
              <h3 className={`${styles.brand_issue_label} ${styles.before}`}>Before</h3>
              <p className={styles.brand_issue_text}>{item.before}</p>
              <h3 className={`${styles.brand_issue_label} ${styles.after}`}>After</h3>
              <p className={styles.brand_issue_text}>{item.after}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default BrandIssue