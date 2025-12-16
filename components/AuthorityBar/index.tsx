"use client";

import React, { useEffect, useRef } from "react";
import styles from "./AuthorityBar.module.css";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }: { value: number, suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const spring = useSpring(0, { stiffness: 50, damping: 20 });
    const rounded = useTransform(spring, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return (
        <span ref={ref} className={styles.statNumber} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export default function AuthorityBar() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.grid}>
                    {/* Item 1 */}
                    <div className={styles.statItem}>
                        <img
                            src="/assets/liveimpact.png"
                            alt="Certified MAP Method™"
                            className={styles.methodLogo}
                        />
                        <div className={styles.statNumberWrapper}>
                            <AnimatedCounter value={9000} suffix="+" />
                        </div>
                        <span className={styles.statLabel}>
                            Lives Impacted
                        </span>
                    </div>

                    {/* Item 2 */}
                    <div className={styles.statItem}>
                        <img
                            src="/assets/global.png"
                            alt="Certified MAP Method™"
                            className={styles.methodLogo}
                        />
                        <div className={styles.statNumberWrapper}>
                            <AnimatedCounter value={29} suffix="+" />
                        </div>
                        <span className={styles.statLabel}>
                            Countries Served
                        </span>
                    </div>

                    {/* Item 3 */}
                    <div className={styles.statItem}>
                        <img
                            src="/assets/image.png"
                            alt="Certified MAP Method™"
                            className={styles.methodLogo}
                        />

                        <div className={styles.statNumberWrapper}>
                            <span className={styles.statNumber} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                                Official
                            </span>
                        </div>
                        <span className={styles.statLabel}>
                            Certified MAP Method™
                        </span>
                    </div>

                    {/* Item 4 */}
                    <div className={styles.statItem}>
                        <img
                            src="/assets/confidental.png"
                            alt="Certified MAP Method™"
                            className={styles.methodLogo}
                        />
                        <div className={styles.statNumberWrapper}>
                            <AnimatedCounter value={100} suffix="%" />
                        </div>
                        <span className={styles.statLabel}>
                            Confidential
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}