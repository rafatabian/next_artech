"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  // Make nav dark on certain pages
  useEffect(() => {
    setDark(pathname === "/websites");
  }, [pathname]);

  return (
    <header
      className={`${styles.navbar_background} ${
        dark ? styles.navbar_background_dark : ""
      }`}
    >
      <nav
        className={`${styles.navbar_container} ${
          dark ? styles.navbar_dark : ""
        }`}
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className={styles.navbar_logo}
          aria-label="Go to Artech homepage"
        >
          <Image
            width={150}
            height={45}
            src={
              dark
                ? "/images/navbar_dark_logo.webp"
                : "/images/navbar_white_logo.webp"
            }
            alt="Artech logo"
            // priority
          />
          <Image
            width={150}
            height={45}
            src="/images/artech_logo.webp"
            alt="Artech logo"
            // priority
          />
        </Link>

        {/* Mobile menu toggle buttons */}
        {!showMenu ? (
          <button
            className={styles.navbar_menu_icon}
            aria-label="Open navigation menu"
            aria-expanded={showMenu}
            aria-controls="primary-menu"
            onClick={() => setShowMenu(true)}
          >
            <FiMenu aria-hidden="true" />
          </button>
        ) : (
          <button
            className={styles.navbar_close_icon}
            aria-label="Close navigation menu"
            aria-expanded={showMenu}
            aria-controls="primary-menu"
            onClick={() => setShowMenu(false)}
          >
            <IoClose aria-hidden="true" />
          </button>
        )}

        {/* Navigation links */}
        <div
          id="primary-menu"
          className={`${styles.navbar_buttons} ${
            showMenu ? styles.show_menu_icon_clicked : ""
          }`}
          role="menubar"
        >
          <Link
            href="/"
            onClick={() => setShowMenu(false)}
            aria-current={pathname === "/" ? "page" : undefined}
            aria-label="Home page"
            role="menuitem"
          >
            HOME
          </Link>
          <Link
            href="/marketing"
            onClick={() => setShowMenu(false)}
            aria-current={pathname === "/marketing" ? "page" : undefined}
            aria-label="Marketing page"
            role="menuitem"
          >
            MARKETING
          </Link>
          <Link
            href="/websites"
            onClick={() => setShowMenu(false)}
            aria-current={pathname === "/websites" ? "page" : undefined}
            aria-label="Websites page"
            role="menuitem"
          >
            WEBSITES
          </Link>
          <Link
            href="/branding"
            onClick={() => setShowMenu(false)}
            aria-current={pathname === "/branding" ? "page" : undefined}
            aria-label="Branding page"
            role="menuitem"
          >
            BRANDING
          </Link>
          <Link
            href="/plans"
            onClick={() => setShowMenu(false)}
            aria-current={pathname === "/plans" ? "page" : undefined}
            aria-label="Plans page"
            role="menuitem"
          >
            PLANS
          </Link>
          <Link
            href="/help"
            onClick={() => setShowMenu(false)}
            aria-current={pathname === "/help" ? "page" : undefined}
            aria-label="Help page"
            role="menuitem"
          >
            HELP
          </Link>
          <Link
            href="/contact"
            onClick={() => setShowMenu(false)}
            aria-current={pathname === "/contact" ? "page" : undefined}
            aria-label="Contact page"
            role="menuitem"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
}