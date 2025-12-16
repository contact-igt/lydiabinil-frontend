import React from "react";
import styles from "./Footer.module.css";


interface handleform {
    scrollToContactForm: () => void;
}

export default function Footer({ scrollToContactForm }: handleform) {
    return (
        <>
            <section className={styles.ctaSection} id="contact">
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaHeading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                        It’s Time to Stop Carrying<br />What Was Never Yours to Hold
                    </h2>
                    <p className={styles.ctaDescription}>
                        You’ve survived the hardest chapters. Now it’s time to rise — beyond
                        survival, into sovereignty.
                    </p>
                    <button className={styles.ctaButton} suppressHydrationWarning onClick={scrollToContactForm}>
                        Book Your Free Diagnostic Call
                    </button>
                    <p className={styles.confidentialText}>
                        Your information is 100% confidential.
                    </p>
                </div>
            </section>

            <footer className={styles.footer}>
                <p className={styles.footerText}>
                    &copy; 2025 Lydia Binil. All Rights Reserved.
                </p>
            </footer>
        </>
    );
}
