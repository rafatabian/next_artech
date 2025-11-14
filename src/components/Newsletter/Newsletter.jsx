"use client";
import styles from "./Newsletter.module.css"
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFilePdf } from "react-icons/fa6";

export default function EmailSignup() {
  const [emailData, setEmailData] = useState({ email: "" });
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  // Simple bot honeypot
  const [botField, setBotField] = useState("");

  // Email regex validator
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    // Bot protection
    if (botField.length > 0) {
      setConfirmation("Bot detected.");
      return;
    }

    // Empty field
    if (!emailData.email.trim()) {
      setConfirmation("Please enter your email.");
      return;
    }

    // Invalid email
    if (!isValidEmail(emailData.email)) {
      setConfirmation("Please enter a valid email address.");
      return;
    }

    // Everything ok — send email
    sendEmail();
  };

  const sendEmail = async () => {
    try {
      setLoading(true);
      setConfirmation("");

      await emailjs.send(
        "service_vztopwc",
        "template_qocrcqn",
        emailData,
        { publicKey: "3EZTg7KvgmPiXOfnr" }
      );

      setConfirmation("Subscribed!");
      setEmailData({ email: "" });
    } catch (error) {
      setConfirmation("Error sending email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.newsletter_background}>
    <div className={styles.newsletter_content_container}>
        <div>
       <h2>
      Subscribe to get a free PDF with top marketing tips to sell & grow
      </h2>
      {/* Honeypot field (hidden from users, robots fill it) */}
      <input
        type="text"
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        style={{ display: "none" }}
      />
      <div className={styles.newsletter_input_and_btn}>
        <input
        type="email"
        placeholder="Enter your email"
        value={emailData.email}
        onChange={(e) =>
          setEmailData({ ...emailData, email: e.target.value })
        }
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Subscribe"}
      </button>
      </div>
      
            <div className={styles.newsletter_confirmation}>
         {confirmation && (
        <p>
          {confirmation}
        </p>
        )}
        </div>
        </div>
        
    <div className={styles.newsletter_icon_conteiner}>
        <FaFilePdf />
    </div>
    </div>
    </div>
  );
}