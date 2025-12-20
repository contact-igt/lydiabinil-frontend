
"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";

export default function ThankYouPage() {
    const [mounted, setMounted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <main className={styles.container}>
            <div className={`${styles.content} ${mounted ? styles.visible : ''} `}>
                <div className={styles.iconWrapper}>
                    <div className={styles.iconCircle}>
                        <svg
                            className={styles.checkIcon}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className={styles.heading}>
                    Thank You!
                </h1>

                {/* Subheading */}
                <p className={styles.subheading}>
                    Your message has been received.
                </p>
                {/* Description */}
                <p className={styles.description}>
                    We appreciate you reaching out. Lydia will review your message and get back to you within 24-48 hours.
                </p>

                {/* Enhanced Video Section */}
                <div className={styles.videoWrapper}>
                    <video
                        ref={videoRef}
                        src="/assets/thankyou_video.mp4"
                        className={styles.video}
                        loop
                        playsInline
                        onClick={handleVideoClick}
                    />
                    {!isPlaying && (
                        <div className={styles.playButtonOverlay} onClick={handlePlayClick}>
                            <div className={styles.playButton}>
                                <svg
                                    className={styles.playIcon}
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <p className={styles.playText}>Click to play</p>
                        </div>
                    )}
                </div>
                {/* Decorative Divider */}
                <div className={styles.divider}>
                    <div className={styles.dividerLine}></div>
                    <div className={styles.dividerIcon}>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <div className={styles.dividerLine}></div>
                </div>

                {/* Call to Action Buttons */}
                <div className={styles.buttonGroup}>
                    <Link href="/" className={styles.primaryButton}>
                        <svg
                            className={styles.arrowIconLeft}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Return to Home
                    </Link>

                    {/* <a href="mailto:info@lydiabinil.com" className={styles.secondaryButton}>
                        Email Us Directly
                    </a> */}
                </div>

                {/* Additional Info */}
                <div className={styles.infoBox}>
                    <p className={styles.infoText}>
                        <strong>What happens next?</strong><br />
                        Lydia personally reviews every message. You'll receive a thoughtful response addressing your specific needs and how her healing approach can support your journey.
                    </p>
                </div>
            </div>
        </main>
    );
}
