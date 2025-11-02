"use client";
import { useState } from "react";
import styles from "./HomeReviewsBtn.module.css";
import { IoStar } from "react-icons/io5";
import Image from "next/image";

const HomeReviewsBtn = ({ reviews }) => {
  const [expanded, setExpanded] = useState(false);


  return (
    <>
      <div className={styles.reviews_container}  aria-labelledby="client-reviews-heading">
        {reviews.map((item, index) => (
          <div
          aria-label={`Review by ${item.name}`}
            key={index}
            className={`${styles.review_card} ${
              !expanded && index >= 3 ? styles.hidden : ""
            }`}
          >
            <Image width={100} height={100} src={item.image} alt={`Photo of ${item.name}`}/>
            <div>
              <IoStar aria-hidden="true" />
              <IoStar aria-hidden="true" />
              <IoStar aria-hidden="true" />
              <IoStar aria-hidden="true" />
              <IoStar aria-hidden="true" />
            </div>
            <p>{item.description}</p>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {!expanded && (
        <button
          className={styles.reviews_btn}
          onClick={() => setExpanded(true)}
          aria-label="Show more reviews"
        >
          Show more
        </button>
      )}
    </>
  );
};

export default HomeReviewsBtn;