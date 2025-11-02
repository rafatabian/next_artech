import styles from "./Home_reviews.module.css";
import HomeReviewsBtn from "../../ClientComponents/HomeReviewsBtn/HomeReviewsBtn";
import { IoStar } from "react-icons/io5";

const Home_reviews = () => {
  const reviewsData = [
    {
      image: "/images/home/reviews/george.jpeg",
      name: "George",
      description:
        "I keep getting compliments on how smooth my site looks and works. The ongoing support is amazing too. Thank you guys!",
    },
    {
      image: "/images/home/reviews/corina.jpeg",
      name: "Corina",
      description:
        "I got a full rebrand with a new logo, business card, and some amazing video edits for my social media👌🏻👌🏻👌🏻",
    },
    {
      image: "/images/home/reviews/vinicius.jpeg",
      name: "Vinicius",
      description:
        "Told them my idea and they just made it happen. Domain, branding, everything one less headache for me",
    },
    {
      image: "/images/home/reviews/ahmed.jpeg",
      name: "Ahmed",
      description:
        "They design me a new logo and an amazing website, it honestly looks so professional now",
    },
    {
      image: "/images/home/reviews/sebastian.jpeg",
      name: "Sebi",
      description:
        "Amazing customer service! I'm really happy they explained everything and helped me choose the right service. I'm glad I went with them.",
    },
    {
      image: "/images/home/reviews/maysa.jpeg",
      name: "Maysa",
      description:
        "They’ve been helping me with updates and tweaks to my website whenever I need, super responsive and easy to talk to.",
    },
  ];

  return (
    <section
      className={styles.reviews_background}
      aria-labelledby="reviews-title"
    >
      <header className={styles.reviews_header}>
        <h2 id="reviews-title" className={styles.reviews_title}>
          Trusted by Clients in London and Beyond
        </h2>
        <p className={styles.reviews_subtitle}>
          See how we helped others go from invisible to unforgettable
        </p>

        <div
          className={styles.reviews_stars}
          role="img"
        >
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
      </header>

      <HomeReviewsBtn reviews={reviewsData} />
    </section>
  );
};

export default Home_reviews;