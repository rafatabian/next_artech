"use client";

import styles from "./VideoComp.module.css"
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VideoLayout({ children }) {
  const videoRef = useRef(null);
  const pathname = usePathname()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // speed
    }
  }, []);

  return (
    <>
    {pathname === "/websites" || pathname === "/help" || pathname === "/contact" ? null : 
    <div className={styles.layout}>
      <video
        ref={videoRef}
        className={styles.background_video}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/videos/preload_video_img.webp"
        aria-hidden="true"
      >
        <source src="/videos/artech_main_video.mp4" type="video/mp4" />
      </video>

      <div className={styles.layout_content}>
        {children}
      </div>
    </div>
    }
    </>
    
  );
}