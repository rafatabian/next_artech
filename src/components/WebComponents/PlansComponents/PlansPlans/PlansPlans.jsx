import styles from "./PlansPlans.module.css"
import Link from "next/link";
import { FaPalette, FaEarthAmericas, FaArrowUpRightDots } from "react-icons/fa6";
import Image from "next/image";



const PlanCard = ({ title, details, delivery, upfront, img }) => (
  <div className={styles.plans_pannel_option}>
    <Image width={366} height={240} src={img} alt="plans intro" />

    <div className={styles.plans_pannele_title_container}>
      <h2>{title}</h2>
    </div>

    {/* Branding */}
    <div className={styles.plans_branding_list}>
      <h3><FaPalette/> Branding</h3>
      <ul>
        {details.branding.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Websites */}
    <div className={styles.plans_websites_list}>
      <h3><FaEarthAmericas/>Websites</h3>
      <ul>
        {details.websites.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Marketing */}
    <div className={styles.plans_marketing_list}>
      <h3><FaArrowUpRightDots/>Marketing</h3>
      <ul>
        {details.marketing.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    <div className={styles.plans_pannel_option_details}>
      <p>{delivery}</p>
      {/* <p>{price}</p> */}
      {upfront && <p>{upfront}</p>}
    </div>

    <Link href="/contact">
      Get Started
    </Link>
  </div>
);

const PlansPlans = ({ sectionRef }) => {


  const starterDetails = {
  branding: ["Logo design"],
  websites: ["One page custom website", "Domain and hosting"],
  marketing: ["Meta accounts setup", "2 Advertising posts"],
};

const standardDetails = {
  branding: ["2 custom logos", "Business card design"],
  websites: ["3 pages website","Performance optimisation","Domain and hosting"],
  marketing: [ "Social media setup","2 weeks marketing campaign", "5 advertising posts"],
};

const proDetails = {
  branding: ["3 custom logos", "Business card design", "Banner/poster design"],
  websites: ["Advanced website","SEO optimisation","Performance optimisation","Domain and hosting","Website traffic reports"],
  marketing: ["All accounts setup","4 weeks marketing campaign","12 advertising posts","Competitor research","Performance monitoring"],
};
  return (
    <div className={styles.plans_backgound} ref={sectionRef}>
         <h1 className={styles.sr_only}>Our Plans</h1>
    <div className={styles.plans_card_container}>
        <PlanCard
  title="STARTER"
  details={starterDetails}
  delivery="Fast delivery: 3-7 days"
  // price="Starting from: £799"
  img="/images/plans/plans_runner.webp"
/>

<PlanCard
  title="STANDARD"
  details={standardDetails}
  delivery="Delivery: 1-2 weeks"
  // price="Price: from £1999"
  upfront="50% upfront payment"
  img="/images/plans/plans_climber.webp"
/>

<PlanCard
  title="PRO"
  details={proDetails}
  delivery="Delivery time: 2-3 weeks"
  // price="Price: £3500"
  upfront="30% upfront payment"
  img="/images/plans/plans_rocket.webp"
/>
        </div>
            </div>
  )
}

export default PlansPlans