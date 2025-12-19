import React from "react";
import styles from "./ResultsSection.module.css";

export default function ResultsSection() {
    return (
        <section className={styles.section} id="results">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                        When You Heal From the Root, Everything Aligns.
                    </h2>
                    {/* <div className={styles.divider}></div> */}
                </div>

                <div className={styles.grid}>
                    {/* Result 1 */}
                    <div className={styles.resultItem}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.iconCircle}>
                                <i className="fas fa-spa"></i>
                            </span>
                        </div>
                        <div className={styles.resultContent}>
                            <h4 style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                                Peace replaces overthinking
                            </h4>
                            <p>
                                The nervous system finally rests. The constant mental loop quiets
                                down, leaving room for clarity.
                            </p>
                        </div>
                    </div>

                    {/* Result 2 */}
                    <div className={styles.resultItem}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.iconCircle}>
                                <i className="fas fa-hand-holding-heart"></i>
                            </span>
                        </div>
                        <div className={styles.resultContent}>
                            <h4 style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                                Love feels safe
                            </h4>
                            <p>
                                Relationships deepen without self-abandonment. You set boundaries
                                from a place of love, not fear.
                            </p>
                        </div>
                    </div>

                    {/* Result 3 */}
                    <div className={styles.resultItem}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.iconCircle}>
                                <i className="fas fa-chart-line"></i>
                            </span>
                        </div>
                        <div className={styles.resultContent}>
                            <h4 style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                                Success without burnout
                            </h4>
                            <p>
                                Money flows with ease; confidence becomes quiet and unshakable. No
                                more &quot;hustling&quot; for worth.
                            </p>
                        </div>
                    </div>

                    {/* Result 4 */}
                    <div className={styles.resultItem}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.iconCircle}>
                                <i className="fas fa-crown"></i>
                            </span>
                        </div>
                        <div className={styles.resultContent}>
                            <h4 style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                                Sovereignty
                            </h4>
                            <p>
                                Life finally feels like yours. You make choices based on desire,
                                not duty or guilt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
