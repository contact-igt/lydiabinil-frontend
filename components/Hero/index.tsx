"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";


export const schema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name is required")
        .regex(/^[A-Za-z ]+$/, "Name must contain only letters"),
    email: z
        .string()
        .trim()
        .regex(
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            "Invalid email address"
        )

    // phone: z
    //     .string()
    //     .trim()
    //     .regex(/^[6-9]\d{9}$/, "Invalid phone number"),
});

interface HeroProps {
    onSubmitForm: (data: any) => void;
    currentRef: any;
    scrollToContactForm: () => void;
}


const Hero = ({ onSubmitForm, currentRef, scrollToContactForm }: HeroProps) => {

    const [isformsubmit, setisformsubmit] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        setisformsubmit(true)
        onSubmitForm(data);

    };

    return (
        <section className={styles.heroSection}>
            {/* Gentle Background Graphic */}
            <div className={styles.backgroundGraphic}></div>
            <div className={styles.backgroundBlur}></div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className={styles.badge}>
                            Welcome to your Sanctuary
                        </span>
                        <h1 className={styles.heading}>
                            <span style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                                You&apos;ve Conquered Life&apos;s Battles —{" "}
                            </span>
                            <span className={styles.headingGold} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 400, fontStyle: "italic" }}>
                                Now, It&apos;s Time to Heal From the Root.
                            </span>
                        </h1>
                        <p className={styles.description}>
                            You&apos;ve achieved everything you were told would bring peace. But when
                            the world quiets down, a deeper ache remains. It&apos;s time to rewrite
                            your story without reliving the pain.
                        </p>
                        <div className={styles.buttonGroup}>
                            <a
                                className={styles.primaryButton}
                                onClick={scrollToContactForm}

                            >
                                Begin Your Trauma to Triumph™ Journey
                            </a>
                            <a
                                className={styles.secondaryButton}
                                onClick={scrollToContactForm}

                            >
                                <i className="fas fa-play-circle"></i> Watch
                                Diagnostic Video
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Form */}
                    <motion.div
                        className={styles.formWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        {/* Decorative background element */}
                        <div className={styles.formDecoration}></div>

                        {/* Form Container */}
                        <div className={styles.formContainer} ref={currentRef}>
                            <div className={styles.formHeader}>
                                <h3 className={styles.formTitle} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                                    Book Your Free Call
                                </h3>
                                <p className={styles.formSubtitle}>
                                    Uncover the root cause of your struggle in 15 minutes.
                                </p>
                            </div>

                            <form
                                className={styles.form}
                                suppressHydrationWarning
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Full Name
                                    </label>
                                    <div className={styles.inputWrapper}>
                                        <i className="fas fa-user"></i>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="Your Name"
                                            {...register("name")}
                                            disabled={isformsubmit}

                                        />
                                    </div>
                                    {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name.message}</p>}

                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Email Address
                                    </label>
                                    <div className={styles.inputWrapper}>
                                        <i className="fas fa-envelope"></i>
                                        <input
                                            type="email"
                                            className={styles.input}
                                            placeholder="email@address.com"
                                            {...register("email")}
                                            disabled={isformsubmit}
                                        />
                                    </div>
                                    {errors.email && <p style={{ color: "red", fontSize: "12px" }}> {errors.email.message}</p>}

                                </div>
                                {/* <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Phone Number
                                    </label>
                                    <div className={styles.inputWrapper}>
                                        <i className="fas fa-phone "></i>
                                        <input
                                            type="tel"
                                            className={styles.input}
                                            placeholder="+1 (555) 000-0000"
                                            {...register("phone")}
                                            disabled={isformsubmit}

                                        />
                                    </div>
                                    {errors.phone && <p style={{ color: "red", fontSize: "12px" }}>{errors.phone.message}</p>}

                                </div> */}

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                >
                                    Secure My Spot{" "}
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                                <p className={styles.formFooter}>
                                    <i className="fas fa-lock"></i> Your
                                    information is 100% confidential.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;