"use client";

import styles from "./ContactForm.module.css";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy-load reCAPTCHA only when needed
const LazyReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
  loading: () => <p>Loading verification...</p>,
});

export default function Contact() {
  const formRef = useRef();
  const [confirmation, setConfirmation] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loadCaptcha, setLoadCaptcha] = useState(false);
  const [emailData, setEmailData] = useState({
    tip_solicitare: "",
    planul: "",
    descriere: "",
    nume: "",
    telefon: "",
    email: "",
  });

  // 🧠 Load reCAPTCHA only when user interacts with the form
  useEffect(() => {
    const handleScroll = () => {
      const formTop = formRef.current?.getBoundingClientRect().top || 0;
      if (formTop < window.innerHeight) {
        setLoadCaptcha(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectChange = (e) =>
    setEmailData({ ...emailData, tip_solicitare: e.target.value });

  const onChange = (value) => setCaptchaValue(value);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please confirm you're not a bot.");
      return;
    }

    emailjs
      .send("service_bxwwj7b", "template_85xbllk", emailData, {
        publicKey: "zRB_M2l24GAb2ixBd",
      })
      .then(
        () => console.log("SUCCESS!"),
        (error) => console.log("FAILED...", error.text)
      );

    setConfirmation(true);
  };

  return (
    <>
      <form onSubmit={sendEmail} ref={formRef}>
        <div>
          <label htmlFor="options">Your request is related to:</label>
          <select
            id="options"
            onChange={handleSelectChange}
            value={emailData.tip_solicitare}
            required
          >
            <option value="">Select the reason for your request</option>
            <option value="Branding">Branding</option>
            <option value="Websites">Websites</option>
            <option value="Marketing">Marketing</option>
            <option value="Pachete">Plans</option>
            <option value="Altceva">Other</option>
          </select>
        </div>

        <div className={styles.contact_desctiption}>
          <label htmlFor="description">Give us some details</label>
          <textarea
            id="description"
            onChange={(e) =>
              setEmailData({ ...emailData, descriere: e.target.value })
            }
            value={emailData.descriere}
            required
          />
        </div>

        <div>
          <h2>Personal Information</h2>
          <div>
            <label htmlFor="name">First and Last Name:</label>
            <input
              id="name"
              type="text"
              placeholder="First and Last Name"
              required
              onChange={(e) =>
                setEmailData({ ...emailData, nume: e.target.value })
              }
              value={emailData.nume}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone number:</label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone number"
              required
              onChange={(e) =>
                setEmailData({ ...emailData, telefon: e.target.value })
              }
              value={emailData.telefon}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) =>
                setEmailData({ ...emailData, email: e.target.value })
              }
              value={emailData.email}
            />
          </div>

          <span className={styles.reCaptcha}>
            {loadCaptcha && (
              <LazyReCAPTCHA
                sitekey="6Lerc1krAAAAAFFsnPwl5woNWd0N2DNg29mepHKF"
                onChange={onChange}
              />
            )}
          </span>

          <label htmlFor="privacy" className={styles.contact_privacy_label}>
            <input type="checkbox" id="privacy" required defaultChecked={false} />
            <span>
              I agree to the
              <Link href="/terms"> Terms of use </Link>
              and I acknowledge the <Link href="/privacy">Privacy Policy</Link>
            </span>
          </label>
          <p>
            By pressing the 'Submit Form' button, you confirm that your
            information are accurate and complete.
          </p>
        </div>

        <button type="submit">Submit Form</button>
      </form>

      {confirmation && (
        <div className={styles.contact_confirmation}>
          <img src="/images/navbar_white_logo.webp" alt="logo" />
          <h1>Thank you for your time!</h1>
          <h2>We will be back asap</h2>
        </div>
      )}
    </>
  );
}