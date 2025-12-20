import React from "react";
import styles from "./MethodSection.module.css";

export default function MethodSection() {
    return (
        <section className={styles.section} id="method">
            {/* Decoration */}
            <div className={styles.decoration}>
                <i className="fas fa-fingerprint"></i>
            </div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div>
                        <h2 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                            The MAP Method™ Where Science Meets Compassion
                        </h2>
                        <p className={styles.description}>
                            Developed from 44+ years of research, we work directly with the{" "}
                            <span className={styles.highlight}>superconscious mind</span>
                            . Unlike traditional therapy, we do not require you to relive
                            painful memories.
                        </p>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <div className={styles.iconCircle}>
                                    <i className="fas fa-brain"></i>
                                </div>
                                <div className={styles.featureContent}>
                                    <h4 className={styles.featureTitle}>
                                        Neuroscience-backed
                                    </h4>
                                    <p className={styles.featureDescription}>
                                        Gently dissolves pain and resistance at the neural level.
                                    </p>
                                </div>
                            </li>
                            <li className={styles.featureItem}>
                                <div className={styles.iconCircle}>
                                    <i className="fas fa-feather-alt"></i>
                                </div>
                                <div className={styles.featureContent}>
                                    <h4 className={styles.featureTitle}>
                                        Fast & Safe
                                    </h4>
                                    <p className={styles.featureDescription}>
                                        Healing becomes effortless and permanent, without the tears.
                                    </p>
                                </div>
                            </li>
                            <li className={styles.featureItem}>
                                <div className={styles.iconCircle}>
                                    <i className="fas fa-tree"></i>
                                </div>
                                <div className={styles.featureContent}>
                                    <h4 className={styles.featureTitle}>
                                        Root Cause
                                    </h4>
                                    <p className={styles.featureDescription}>
                                        We reprogram the subconscious blocks that keep you in survival
                                        mode.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Abstract "Brain/Flow" Visual */}
                    <div className={styles.shiftBox}>
                        <h3 className={styles.shiftTitle} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 400 }}>The Shift</h3>
                        <div className={styles.shiftHeader}>
                            <span>Survival Mode</span>
                            <i className="fas fa-arrow-right"></i>
                            <span>Sovereignty</span>
                        </div>
                        <div className={styles.shiftSteps}>
                            <div className={styles.stepBefore}>
                                <p>Before</p>
                                <p>Anxiety, Overthinking, &quot;Not Enough&quot;</p>
                            </div>
                            <div className={styles.arrowDown}>
                                <i className="fas fa-arrow-down"></i>
                            </div>
                            <div className={styles.stepProcess}>
                                <p>The Process</p>
                                <p>Subconscious Rewiring & Release</p>
                            </div>
                            <div className={styles.arrowDown}>
                                <i className="fas fa-arrow-down"></i>
                            </div>
                            <div className={styles.stepAfter}>
                                <p>After</p>
                                <p>Peace, Presence, Power</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
