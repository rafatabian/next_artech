"use client";

import styles from "./ContactForm.module.css";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function Contact() {
  const searchParams = useSearchParams();
  const formRef = useRef();
  const [confirmation, setConfirmation] = useState(false);
  const [emailData, setEmailData] = useState({
    tip_solicitare: "",
    planul: "",
    descriere: "",
    day:"",
    time:"",
    nume: "",
    telefon: "",
    email: "",
    client_provider: "",
  });

// check who brings the client
useEffect(() => {
  if (searchParams.toString().length === 0) return;
  const ref = searchParams.get("ref");
  const isC = searchParams.has("c");
  const isF = searchParams.has("f");

  if (ref === "c" || isC) {
    setEmailData(prev => ({ ...prev, client_provider: "Claudiu" }));
  } else if (ref === "f" || isF) {
    setEmailData(prev => ({ ...prev, client_provider: "Fabian" }));
  }
}, [searchParams]);

// log email data whenever it changes
useEffect(() => {
  console.log("UPDATED emailData:", emailData);
}, [emailData]);

// add bot blockers

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .send("service_vztopwc", "template_lylcs4q", emailData, {
        publicKey: "3EZTg7KvgmPiXOfnr",
      })
      .then(
        () => console.log("SUCCESS!"),
        (error) => console.log("FAILED...", error.text)
      );

    setConfirmation(true);
  };

  return (
    <>
     {confirmation ? (
        <div className={styles.contact_confirmation}>
          <img src="/images/navbar_white_logo.webp" alt="logo" />
          <h1>Thank you for your time!</h1>
          <h2>We’ll call you at your scheduled time.</h2>
        </div>
      ) :
      <form onSubmit={sendEmail} ref={formRef} className={styles.form}>

        <div className={styles.contact_desctiption}>
          <label htmlFor="description" className={styles.visually_hidden}>Give us some details</label>
          <textarea
            id="description"
            placeholder="Describe your project, needs, or questions"
            onChange={(e) =>
              setEmailData({ ...emailData, descriere: e.target.value })
            }
            value={emailData.descriere}
            required
          />
        </div>
 
      <div className={styles.contact_date_time_container}>
         <input
        type="date"
        name="day"
        className={styles.input_date_time}
        required
        value={emailData.day}
        onChange={(e) =>
          setEmailData({ ...emailData, day: e.target.value })
        }
      />

      <input
        type="time"
        name="time"
        className={styles.input_date_time}
        required
        value={emailData.time}
        onChange={(e) =>
          setEmailData({ ...emailData, time: e.target.value })
        }
      />
      </div>

        <div>
          <div>
            <label htmlFor="name" className={styles.visually_hidden}>First and Last Name:</label>
            <input
              id="name"
              type="text"
              className={styles.input}
              placeholder="First and Last Name"
              required
              onChange={(e) =>
                setEmailData({ ...emailData, nume: e.target.value })
              }
              value={emailData.nume}
            />
          </div>
          <div>
            <label htmlFor="phone" className={styles.visually_hidden}>Phone number:</label>
            <input
              id="phone"
              type="tel"
               className={styles.input}
              placeholder="Phone number"
              required
              onChange={(e) =>
                setEmailData({ ...emailData, telefon: e.target.value })
              }
              value={emailData.telefon}
            />
          </div>

          <label htmlFor="privacy" className={styles.contact_privacy_label}>
            <input type="checkbox" id="privacy" required defaultChecked={false} />
            <span>
              I agree to the
              <Link href="/terms"> Terms of use </Link>
              and I acknowledge the <Link href="/privacy">Privacy Policy</Link>
            </span>
          </label>
        </div>

        <button type="submit" className={styles.contact_button}>Book my free call</button>
      </form>
}

    </>
  );
}