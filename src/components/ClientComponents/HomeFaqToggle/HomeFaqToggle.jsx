"use client";
import styles from "./HomeFaqToggle.module.css";
import { useState } from "react";

export default function HomeFaqToggle({ data }) {
  const [show, setShow] = useState(null);

  const handleQuestion = (index) => {
    setShow(show === index ? null : index);
  };

  return (
    <div className={styles.faq_container}>
      {data.map((item, index) => (
        <div key={index} className={styles.home_faq_question} onClick={() => handleQuestion(index)}>
          <h2>{item.question}</h2>
          <p
            className={`${styles.answer} ${
              show === index ? styles.visible : styles.hidden
            }`}
          >
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}