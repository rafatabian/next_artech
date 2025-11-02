import styles from "./Home_faq.module.css"
import Link from "next/link"
import HomeFaqToggle from "../../ClientComponents/HomeFaqToggle/HomeFaqToggle"

const Home_faq = () => {

  const questionsData = [
    {
      question: "How long does it take?",
      answer:
        "Custom websites can take 1 to 4 weeks for simpler projects and up to 2–3 months for more advanced ones. Branding services like logos, colors, and business cards usually take 2–5 days. Marketing campaigns (ads, content, analytics) start within a few days and are ongoing based on your goals. We always provide a clear timeline before starting and we stick to it."
    },
    {
      question: "What if I don’t like the first version?",
      answer:
        "No worries your satisfaction matters. We include unlimited revisions during the project to make sure you’re 100% happy with the result. You’ll be involved in every step so we build something that truly fits your business."   
    },
    {
      question: "Do I own my website after it’s done?",
      answer:
        "Absolutely. Everything we create for you, website, logo, branding, marketing materials is 100% yours. You’ll have full access and control, with no hidden fees or limitations."
    },
    {
      question: "Can I get updates later?",
      answer:
        "Yes, we offer ongoing updates even after the project is complete. Whether it’s a small tweak, a new section, or content changes — we’re here to keep things up to date as your business grows."
    }
  ]

  return (
    <div className={styles.home_faq_background}>
      <h1 className={styles.faq_title}>Frequently asked questions</h1>

      <div className={styles.home_faq_container}>
         <HomeFaqToggle data={questionsData}/>
      </div>
       
      <div className={styles.home_faq_contact}>
        <p>Still not sure?</p>
        <Link href="/contact" aria-label="Contact page">Contact us</Link>
      </div>
    </div>
  )
}

export default Home_faq