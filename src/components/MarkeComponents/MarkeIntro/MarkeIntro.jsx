import "./MarkeIntro.css"
import Link from "next/link"
import Image from "next/image"

const MarkeIntro = () => {
  return (
    <div className="marke__intro_background">
      <div className="marke_intro_container">
        <Image width={500} height={380} src="/images/marketing/marke_intro.webp" alt="Marketing Intro" className="marke_intro_image" priority/>
        <div className="marke_intro_text">
          <h1>Attract the Right Clients With the Right Marketing</h1>
          <p>We help businesses attract qualified leads through tailored, data-driven marketing</p>
          <div className="marke_button_container">
            <Link href="/contact" className="marke_button">
              Contact Us
            </Link>
            <Link href="/marketing" className="marke_button">
              See Plans
            </Link>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default MarkeIntro