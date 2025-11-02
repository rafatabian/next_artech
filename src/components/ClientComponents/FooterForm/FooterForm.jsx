"use client"
import styles from "./FooterForm.module.css"
import { useState } from "react";
import emailjs from "@emailjs/browser";

const FooterForm = () => {

    const initialEmailData = {
    tip_solicitare: "/",
    planul: "/",
    descriere: "",
    nume: "",
    telefon: "/",
    email: "",
  };

  const [emailData, setEmailData] = useState(initialEmailData);

    // function for sending emails
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_bxwwj7b", "template_85xbllk", emailData, {
        publicKey: "zRB_M2l24GAb2ixBd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Reset the form state to clear the inputs
          setEmailData(initialEmailData);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className={styles.footer_form}>
              <div>
                <label htmlFor="name" className={styles.label_in_footer}>Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) =>
                    setEmailData({ ...emailData, nume: e.target.value })
                  }
                  value={emailData.nume}
                />
              </div>

              <div>
                <label htmlFor="email" className={styles.label_in_footer}>Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) =>
                    setEmailData({ ...emailData, email: e.target.value })
                  }
                  value={emailData.email}
                />
              </div>

              <div>
                <label htmlFor="description" className={styles.label_in_footer}>Message</label>
                <textarea
                  id="description"
                  placeholder="Message"
                  onChange={(e) =>
                    setEmailData({ ...emailData, descriere: e.target.value })
                  }
                  value={emailData.descriere}
                  required
                />
              </div>

              <button type="submit" aria-label="Send Form">Send</button>
            </form>
  )
}

export default FooterForm