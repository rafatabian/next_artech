import styles from "./page.module.css";
import Question from "../../components/Question/Question"
import Image from "next/image";

// metadata
export const metadata = {
  title: "Help & Resources | Guides, FAQs & Support",
  description: "Support, FAQs and how-to guides for clients. Learn about our onboarding, reporting, billing and technical support.",
  keywords: ["website support services london for clients", "marketing FAQs for small business london agency", "website maintenance help london uk"],
  openGraph: {
    title: "ARTECH | Get more customers and grow",
    description: "Support, FAQs and how-to guides for clients. Learn about our onboarding, reporting, billing and technical support.",
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

export default function Help() {

  // Questions data
  const questionsData = [
    {
      question: "What is branding, and why is it important for your business?",
      answer:
        "Branding is the identity and image of your business, encompassing the logo, design, colors, and communication style. It is crucial because it sets your business apart from competitors, enhances brand recognition and customer loyalty, and communicates your company’s values and mission."
    },
    {
      question: "What does a complete branding package include?",
      answer:
        "A full branding package typically includes: market and competitor analysis, development of visual identity (logo, color palette, typography), design of marketing materials (business cards, brochures, banners), a brand usage guide, and consultancy for implementation."
    },
    {
      question: "What is your logo creation process?",
      answer:
        "Our logo creation process involves: an initial meeting to understand your business and goals, market research and analysis, concept generation and sketches, revisions based on feedback, and finalizing the design in required formats."
    },
    {
      question: "How long does it take to develop a complete brand?",
      answer:
        "The timeline for developing a complete brand can range from 2 to 8 weeks, depending on the project's complexity and the responsiveness of client feedback."
    },
    {
      question: "Can you update or rebrand an existing brand?",
      answer:
        "Yes, we offer rebranding services to update and modernize your existing brand identity, ensuring we preserve the essence of your brand while making significant improvements."
    },
    {
      question: "How do you ensure the brand you create accurately reflects your business?",
      answer:
        "We ensure the brand we create accurately reflects your business through close collaboration, brainstorming sessions, and constant feedback to understand your company’s values, mission, and vision."
    },
    {
      question: "How do you measure the success of a branding project?",
      answer:
        "The success of a branding project is measured by increased brand recognition, positive customer feedback, growth in loyalty and engagement, and ultimately, the impact on sales and market position."
    },
    {
      question: "What support do you offer after completing a branding project?",
      answer:
        "We provide ongoing support after the project’s completion, including consultancy for brand implementation, periodic updates and adjustments, and assistance with any future branding needs."
    },
    {
      question: "What web development platforms do we use?",
      answer:
        "We use a variety of web development platforms, including Javascript, React, Typescript and custom development, tailored to the specific needs and preferences of each client."
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The time required to build a website depends on the project’s complexity, but generally, it ranges from 2 to 12 weeks, from the planning stage to the launch."
    },
    {
      question: "What is the estimated cost of developing a website?",
      answer:
        "The cost of website development varies based on the project’s specifications and requirements. We offer flexible and customized packages to fit your budget and needs. Please contact us for a detailed quote."
    },
    {
      question: "Do you provide graphic design services for websites?",
      answer:
        "Yes, we offer comprehensive graphic design services, including UI/UX design, to ensure your website not only functions well but also looks great and delivers a high-quality user experience."
    },
    {
      question: "Will your website be responsive (optimized for mobile and tablets)?",
      answer:
        "Absolutely! All the websites we develop are fully responsive and optimized to deliver an excellent experience across all devices, including mobile and tablet."
    },
    {
      question: "How do we ensure your website is SEO-friendly?",
      answer:
        "We implement best SEO practices during the development process, including site structure optimization, meta tags, image optimization, and relevant content creation to help your site achieve better search engine visibility."
    },
    {
      question: "Do you offer web hosting and site maintenance services?",
      answer:
        "Yes, we offer web hosting and maintenance services to ensure your website remains updated, secure, and fully functional. These services include regular updates, backups, and technical support."
    },
    {
      question: "What kind of technical support do you provide after the website launch?",
      answer:
        "We provide ongoing technical support to help with any issues or questions related to your website. Our support packages can be customized based on your needs."
    },
    {
      question: "Can we make changes to your website after it’s launched?",
      answer:
        "Yes, we develop websites that allow users to make changes easily through an intuitive admin panel. We also provide training to help you manage your site efficiently."
    },
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We provide a full range of digital marketing services, including SEO, social media marketing, PPC advertising, email marketing, content marketing, and conversion optimization."
    },
    {
      question: "How do you measure the success of marketing campaigns?",
      answer:
        "We measure the success of marketing campaigns through specific KPIs such as website traffic, conversion rates, cost per click, social media engagement, and ROI. We provide detailed reports and analysis to monitor performance and optimize campaigns."
    },
    {
      question: "What marketing strategies do we recommend for your business?",
      answer:
        "The recommended marketing strategies depend on your business goals and target audience. After thorough analysis, we’ll develop a customized strategy that may include SEO, social media marketing, PPC campaigns, and email marketing."
    },
    {
      question: "What are the costs for your marketing services?",
      answer:
        "The cost of our marketing services varies based on the complexity and scale of the campaigns. We offer flexible and personalized packages to fit your budget and needs. Please contact us for a detailed quote."
    },
    {
      question: "Do you offer offline marketing services?",
      answer:
        "Yes, we also provide offline marketing services, including print advertising, marketing events, direct marketing, and PR. We ensure that all campaigns are integrated to provide a complete marketing strategy."
    },
    {
      question: "How can we help grow your business on social media?",
      answer:
        "We offer customized social media marketing strategies that include content creation and management, paid advertising campaigns, community management, and analytics. Our goal is to boost visibility, engagement, and conversions on social platforms."
    },
    {
      question: "What is SEO, and how can it help me?",
      answer:
        "SEO (Search Engine Optimization) is the process of optimizing your website to improve its visibility in search engines. It can help attract organic traffic, improve search rankings, and enhance your business's online visibility and authority."
    },
    {
      question: "Can we manage paid advertising campaigns (PPC) for your business?",
      answer:
        "Yes, we manage PPC campaigns on platforms like Google Ads and Facebook Ads. Our focus is on budget optimization and maximizing ROI through well-defined strategies and precise execution."
    },
    {
      question: "Do you offer email marketing services?",
      answer:
        "Yes, we provide comprehensive email marketing services, from list creation, segmentation, design, and copywriting to automation and analysis. We ensure your messages reach the right audience and generate conversions."
    },
    {
      question: "How do you create and manage content for marketing campaigns?",
      answer:
        "We create relevant and valuable content based on market research and audience analysis. We manage the publishing and distribution of content across various platforms, ensuring it reaches the target audience and contributes to marketing goals."
    }
  ];

  return (
      <div className={styles.help_container}>
        <div className={styles.help_question_title}>
          <h1>Find a question</h1>

          <h2>BRANDING</h2>
          {questionsData.slice(0, 8).map((q, i) => (
            <Question key={i} question={q.question} answer={q.answer} color={i} />
          ))}

          <h2 className={styles.help_title_spacing}>WEB DEVELOPMENT</h2>
          {questionsData.slice(8, 17).map((q, i) => (
            <Question key={i} question={q.question} answer={q.answer} color={i} />
          ))}

          <h2 className={styles.help_title_spacing}>MARKETING</h2>
          {questionsData.slice(17, 27).map((q, i) => (
            <Question key={i} question={q.question} answer={q.answer} color={i} />
          ))}
        </div>

        <div className={styles.help_img_container}>
          <Image
             width={400} height={313}
            src="/images/artech_help_img.webp"
            alt="help"
            className={styles.help_img_appear}
          />
        </div>
      </div>
  );
}