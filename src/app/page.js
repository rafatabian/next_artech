import styles from "./page.module.css";
import Link from "next/link";
import dynamic from "next/dynamic"

// metadata
export const metadata = {
  title: "Top Web Design & Digital Marketing Agency | Artech-Agency",
  description: "We build websites, brands & marketing that drive customers to your business. Get a free audit & custom growth plan today.",
 keywords: ["website design agency london for small business", "digital marketing agency london small business", "branding agency london startup business", "marketing strategy for startups"],
  openGraph: {
    title: "ARTECH | Get more customers and grow",
    description: "We build websites, brands & marketing that drive customers to your business. Get a free audit & custom growth plan today.",
    url: "artech-agency.co",
    siteName: "artech-agency",
    images: [
      {
        url: "/images/social_media_img.png",
        width: 1200,
        height: 630,
        alt: "Webstie",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
       index: true, 
       follow: true, 
       "max-snippet": -1,
       "max-image-preview": "large", 
       "max-video-preview": -1
    }
  }
};


// Lazy-loaded components using Next.js dynamic import
const HomePachete = dynamic(() =>
  import("../components/HomeComponents/HomePachete/HomePachete")
);
const HomeBlogs = dynamic(() =>
  import("../components/HomeComponents/HomeBlogs/HomeBlogs")
);
const HomeWeCare = dynamic(() =>
  import("../components/HomeComponents/Home_we_care/Home_we_care")
);
const HomeOurServices = dynamic(() =>
  import("../components/HomeComponents/Home_our_services/Home_our_services")
);
const HomeReviews = dynamic(() =>
  import("../components/HomeComponents/Home_reviews/Home_reviews")
);
const HomeSteps = dynamic(() =>
  import("../components/HomeComponents/Home_steps/Home_steps")
);
const HomeFaq = dynamic(() =>
  import("../components/HomeComponents/Home_faq/Home_faq")
);

export default function Home() {

  return (
  <main className={styles.home_container}>
    {/* Hero Section */}
    <section
      className={styles.home_new_container}
      aria-label="ARTECH Digital Agency Introduction"
    >
      <div className={styles.home_intro_img}>
        <div className={styles.home_new_presentation}>
          <header className={styles.home_intro_text}>
            <div className={styles.home_new_title}>
              <h1>ARTECH</h1>
              <h2>Marketing · Websites · Branding</h2>
            </div>

            <p>
              Get more clients, boost your visibility, and grow your business.
              We’re a results-driven digital agency specializing in marketing,
              websites, and branding that help you achieve your goals.
            </p>

            <nav className={styles.home_new_btns_container} aria-label="Primary call-to-actions">
              <Link
                href="/plans"
                aria-label="See our best value plans for Marketing, Websites, and Branding"
              >
                Plans
              </Link>
              <Link
                href="/contact"
                aria-label="Book a free strategy session to make your business stand out"
              >
                Free Strategy
              </Link>
            </nav>
          </header>
        </div>
      </div>
    </section>

    {/* Content Sections */}
    <HomeWeCare />
    <HomeOurServices />
    <HomeReviews />
    <HomeSteps />
    <HomePachete />
    <HomeBlogs />
    <HomeFaq />

    {/* Future placeholders */}
    <section className={styles.home_websites} aria-hidden="true" />
    <section className={styles.home_branding} aria-hidden="true" />
  </main>
);
}

