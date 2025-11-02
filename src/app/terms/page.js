
import styles from "./page.module.css";
import Link from "next/link";

export default function Terms() {


  return (
    <div className={styles.privacy_container}>
      <h1>Artech Terms and Conditions</h1>

      <h2>Introduction</h2>
      <p>
        Welcome to Artech Agency. By using our services, you agree to be bound by the following Terms and Conditions. Please read them carefully before engaging in any business with us.
      </p>

      <h2>Services</h2>
      <p>
        Artech provides website creation, logo design, branding, and marketing services. All services will be agreed upon in writing before the project begins.
      </p>

      <h2>Payment Terms</h2>
      <p>
        An upfront deposit is required before the commencement of any project. The remaining 50% is due upon project completion and before the final delivery of work. Payment can be made via bank transfer or other methods as specified in our invoices.
      </p>

      <h2>Refund Policy</h2>
      <p>
        Refunds will be handled as follows: If the client cancels the project before work begins, the upfront payment will be refunded minus any administrative fees. If the project has already started, no refunds will be issued for the work completed up to that point. Refunds for dissatisfaction with completed work are not guaranteed, but we strive to resolve issues through revisions or alternative solutions.
      </p>

      <h2>Revisions Policy</h2>
      <p>
        Clients are entitled to up to 2 rounds of revisions after the delivery of the initial drafts. Additional revisions will incur an extra charge, which will be communicated beforehand.
      </p>

      <h2>Ownership of Work</h2>
      <p>
        Upon full payment, clients will have ownership rights to the final deliverables. Artech retains the right to showcase completed projects in its portfolio unless otherwise agreed in writing.
      </p>

      <h2>Liability</h2>
      <p>
        Artech will not be held responsible for any indirect, incidental, or consequential damages arising from the use of our services. We are not liable for delays caused by unforeseen circumstances, including but not limited to technical issues or client delays in providing required materials.
      </p>

      <h2>Client Responsibilities</h2>
      <p>
        Clients must provide all necessary information, materials, and feedback promptly to avoid project delays. Any delays in communication or provision of materials may result in project timeline extensions.
      </p>

      <h2>Data Privacy</h2>
      <p>
        We process client data in accordance with our policy. By using our services, you consent to the collection and use of your data as outlined in the{" "}
        <Link href="/privacy" className="privacy_policy_link">
          Privacy Policy
        </Link>.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms and Conditions shall be governed by the laws of the United Kingdom. Any disputes arising from these terms will be resolved in the courts of the United Kingdom.
      </p>
    </div>
  );
}