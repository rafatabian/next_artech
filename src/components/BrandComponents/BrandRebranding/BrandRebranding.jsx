import styles from './BrandRebranding.module.css';
import Image from 'next/image';


const BrandRebranding = () => {
  return (
 <section className={styles.rebranding_section}>
  <div className={styles.rebranding_container}>
    <h2 className={styles.rebranding_title}>Why Rebranding Works</h2>

    <div className={styles.card_comparison}>
      {/* Before Card */}
      <div className={`${styles.card} ${styles.before_card}`}>
        <Image
          width={472} height={270}
          src="/images/branding/brand_first_visit_card.webp"
          alt="Old Business Card"
          className={styles.card_image}
        />
        <h3 className={styles.card_label}>Before</h3>
        <p className={styles.card_description}>Unstructured, low contrast, easy to ignore.</p>
      </div>

      {/* After Card */}
      <div className={`${styles.card} ${styles.after_card}`}>
        <Image
          width={472} height={270}
          src="/images/branding/brand_second_visit_card.webp"
          alt="New Business Card"
          className={styles.card_image}
        />
        <h3 className={styles.card_label}>After</h3>
        <p className={styles.card_description}>Clear hierarchy, bold contrast, instantly memorable.</p>

        <ul className={styles.card_benefits}>
          <li>Strong visual identity</li>
          <li>Designed for clarity and impact</li>
          <li>Consistent with brand values</li>
          <li>Built to stand out and convert</li>
        </ul>
      </div>
    </div>

    {/* CTA */}
    <div className={styles.cta}>
      <a href="#contact" className={styles.cta_button}>
        Start Rebranding
      </a>
    </div>
  </div>
</section>

  )
}

export default BrandRebranding