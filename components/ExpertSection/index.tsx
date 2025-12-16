import React from "react";
import Image from "next/image";
import styles from "./ExpertSection.module.css";

export default function ExpertSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Image Container with Trust Elements */}
                    <div className={styles.imageContainer}>
                        <div className={styles.decorCircleTopLeft}></div>
                        <div className={styles.decorCircleBottomRight}></div>
                        {/* Using Image component */}
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/lydia-photo.webp"
                                fill
                                alt="lydia-photo"
                                className="object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        {/* Floating Trust Badge */}
                        <div className={styles.trustBadge}>
                            <p className={styles.trustBadgeQuote} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                                &quot;Healing is your birthright.&quot;
                            </p>
                            <p className={styles.trustBadgeAuthor}>
                                - Lydia Binil
                            </p>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className={styles.textContent}>
                        <span className={styles.eyebrow}>
                            Meet Your Guide
                        </span>
                        <h2 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                            I&apos;m Lydia Binil.
                        </h2>
                        <h3 className={styles.subheading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 400, fontStyle: "italic" }}>
                            Founder of T3 Institute & Trauma Specialist
                        </h3>

                        <p className={styles.paragraph}>
                            I created the <strong>Trauma to Triumph™</strong> methodology
                            because I saw too many brilliant women stuck in cycles of success on
                            the outside, but survival on the inside.
                        </p>
                        <p className={styles.paragraph}>
                            My approach combines clinical neuroscience with deep compassion. I
                            don&apos;t believe in &quot;fixing&quot; you because you aren&apos;t broken. I believe in
                            revealing the version of you that existed before the world told you
                            who to be.
                        </p>

                        <div className={styles.credentialsGrid}>
                            <div className={styles.credentialItem}>
                                <i className="fas fa-check-circle"></i>
                                <span className={styles.credentialText}>
                                    Certified Practitioner
                                </span>
                            </div>
                            <div className={styles.credentialItem}>
                                <i className="fas fa-check-circle"></i>
                                <span className={styles.credentialText}>
                                    44+ Years Research Based
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
