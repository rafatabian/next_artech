import styles from "./Home_blogs.module.css"
import Link from "next/link"
import Image from "next/image"


const HomeBlogs = () => {

  return (
    <div className={styles.blog_container_background}>
      <div className={styles.blog_container}>
        <h1 className={styles.blog_title}>Expert Tips & Business Insights</h1>
        <p className={styles.blog_description}>Explore our latest articles</p>

        <div className={styles.blog_grid}>
          <Link href="https://rafatabian.github.io/artech-design-blog/" className={styles.blog_card} aria-label="Blog about Web design trends">
            <h2 className={styles.blog_card_title}>Web Design Trends</h2>
            <Image width={100} height={100} src="/images/blogs/vlog_title_img.webp" alt="Design that reflects Web Design trends" className={styles.blog_image}/>
          </Link>

          <Link href="https://rafatabian.github.io/artech-branding-blog/#text" className={styles.blog_card} aria-label="Blog about the power of branding">
            <h2 className={styles.blog_card_title}>Power of Branding</h2>
            <Image width={100} height={100} src="/images/blogs/artech_cola_blog (1).webp" alt="Coca cola design for Branding Blog" className={styles.blog_image}/>
          </Link>

          <Link href="https://rafatabian.github.io/artech-logos-blog/" className={styles.blog_card} aria-label="Blog about logo degign">
            <h2 className={styles.blog_card_title}>Logo Design Insights</h2>
            <Image width={100} height={100} src="/images/blogs/artech_logo_blog.webp" alt="Lamborghini logo for Logos Blog" className={styles.blog_image}/>
          </Link>

          <Link href="https://rafatabian.github.io/artech-AI-blog/" className={styles.blog_card} aria-label="Blog about Artificial Intelligance and Websites">
            <h2 className={styles.blog_card_title}>AI in Websites</h2>
            <Image width={100} height={100} src="/images/blogs/AI_main.webp" alt="Artificial Intelligence in AI Websties Blog" className={styles.blog_image}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBlogs
