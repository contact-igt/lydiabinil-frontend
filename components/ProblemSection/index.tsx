import React from "react";
import styles from "./ProblemSection.module.css";

export default function ProblemSection() {
    return (
        <section className={styles.section} id="problem">
            <div className={styles.containerCenter}>
                <h2 className={styles.heading}  style={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 700,
                        }}>
                    You&rsquo;ve Carried It All —
                    <br />
                    <span className={styles.headingGold}>
                        Alone, <span>Quietly</span>, and For Too Long.
                    </span>
                </h2>
                <p className={styles.description}>
                    You&apos;ve built everything from strength — but not from safety. You are the
                    one who holds it all together, even when your heart feels unseen.
                </p>
            </div>

            <div className={styles.containerWide}>
                <div className={styles.grid}>
                    {/* Card 1 */}
                    <div className={`${styles.card} ${styles.cardBorderSage}`}>
                        <div className={`${styles.iconCircle} ${styles.iconCircleSage}`}>
                            <i className="fas fa-heart-broken"></i>
                        </div>
                        <h3 className={styles.cardTitle} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                            The Guilt
                        </h3>
                        <p className={styles.cardText}>
                            Of never feeling like you are &quot;enough,&quot; no matter how much you do.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className={`${styles.card} ${styles.cardBorderGold}`}>
                        <div className={`${styles.iconCircle} ${styles.iconCircleGold}`}>
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3 className={styles.cardTitle} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                            The Fear
                        </h3>
                        <p className={styles.cardText}>
                            That peace means loss, or that letting your guard down is
                            dangerous.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className={`${styles.card} ${styles.cardBorderSage}`}>
                        <div className={`${styles.iconCircle} ${styles.iconCircleSage}`}>
                            <i className="fas fa-battery-empty"></i>
                        </div>
                        <h3 className={styles.cardTitle} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                            The Burden
                        </h3>
                        <p className={styles.cardText}>
                            The invisible weight of always achieving, proving, and fixing for
                            others.
                        </p>
                    </div>
                    {/* Card 4 */}
                    <div className={`${styles.card} ${styles.cardBorderGold}`}>
                        <div className={`${styles.iconCircle} ${styles.iconCircleGold}`}>
                            <i className="fas fa-mask"></i>
                        </div>
                        <h3 className={styles.cardTitle} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                            The Mask
                        </h3>
                        <p className={styles.cardText}>
                            Smiling on the outside while a quiet chaos runs through your mind.
                        </p>
                    </div>
                </div>

                <div className={styles.quoteSection}>
                    <p className={styles.quote} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 500, fontStyle: "italic" }}>
                        &quot;You&apos;re not broken — you&apos;re simply wired by old trauma that&apos;s ready
                        to be rewritten.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
