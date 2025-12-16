import React from "react";
import styles from "./TangibleResultsSection.module.css";

const tangibleResults = [
  {
    icon: "fa-heart",
    title: "Intimate & Family Relationships",
    items: [
      "Feeling emotionally safe with your partner — without self-abandonment",
      "Less reactivity, more understanding in family and extended-family dynamics",
      "Parenting from calm leadership instead of guilt or exhaustion",
      "Clear, loving boundaries that don’t create conflict",
    ],
  },
  {
    icon: "fa-brain",
    title: "Inner Peace & Nervous System Regulation",
    items: [
      "A quieter mind with fewer intrusive thoughts",
      "Emotional triggers losing their charge",
      "Feeling grounded in your body instead of constantly “on edge”",
      "Restful sleep and a deeper sense of ease",
    ],
  },
  {
    icon: "fa-briefcase",
    title: "Business, Career & Leadership",
    items: [
      "Leading without burnout or over-functioning",
      "Making decisions from clarity, not fear",
      "Scaling your business without sacrificing health or family",
      "A grounded confidence that others naturally trust",
    ],
  },
  {
    icon: "fa-coins",
    title: "Success Without Hustle",
    items: [
      "Money no longer tied to self-worth",
      "Less pushing, more aligned action",
      "Confidence that feels stable — not dependent on outcomes",
    ],
  },
  {
    icon: "fa-seedling",
    title: "Health & Vitality",
    items: [
      "Reduced stress-related symptoms",
      "More energy throughout the day",
      "Feeling at home in your body again",
    ],
  },
  {
    icon: "fa-crown",
    title: "Sovereignty",
    items: [
      "Life stops feeling like something you must manage…",
      "and starts feeling like something you choose.",
    ],
  },
];

export default function TangibleResultsSection() {
  return (
    <section className={styles.section} id="innerpeace">
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                   Deep Healing Changes Everything — Without Force.
                </h2>
                <div className={styles.divider}></div>
            </div>

            <div className={styles.grid}>
                {tangibleResults.map((result, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <i className={`fas ${result.icon}`}></i>
                        </div>
                        <h3 className={styles.cardTitle} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                            {result.title}
                        </h3>
                        <ul className={styles.list}>
                            {result.items.map((item, idx) => (
                                <li key={idx} className={styles.listItem}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
