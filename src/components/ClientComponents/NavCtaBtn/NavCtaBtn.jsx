"use client"
import styles from './NavCtaBtn.module.css';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

const NavCtaBtn = () => {
  const pathname = usePathname();

  return (
     <>
      {pathname !== "/contact" && (
          <Link href="/contact" className={styles.navbar_call_to_action_btn} aria-label="Get in touch on the contact page">
            Free Strategy<FaArrowRight />
          </Link>
          )}
     </>
         
  )
}

export default NavCtaBtn