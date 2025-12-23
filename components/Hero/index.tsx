"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { useForm, Controller } from "react-hook-form"; // ✅ Controller added
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

export const schema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name is required")
        .regex(/^[A-Za-z ]+$/, "Name must contain only letters"),

    email: z
        .string()
        .trim()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email address"),

    phone: z
        .string()
        .trim()
        .regex(/^[6-9]\d{9}$/, "Invalid phone number"),

    date: z.string().nonempty({ message: "Select your date" }),

    time: z.string().nonempty({ message: "Select your time" }),
});



const Hero = ({ ref }: any) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const today = new Date();
    const twoweeklate = new Date();
    twoweeklate.setDate(today.getDate() + 14);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            date: "",
            time: "",
        },
    });

    const onSubmit = async (data: any) => {


        try {
            setIsLoading(true);
            let ip = "";
            try {
                const ipResponse = await fetch("https://api.ipify.org?format=json");
                const ipData = await ipResponse.json();
                ip = ipData.ip;
            } catch {
                ip = "";
            }
            // const ipResponse = await fetch("https://api.ipify.org?format=json");
            // const ipData = await ipResponse.json();
            const formData = {
                name: data?.name,
                email: data?.email,
                phone: `+91${data?.phone}`,
                date: data?.date,
                time: data?.time,
                ip_address: ip,
                utm_source: localStorage.getItem("utm_source"),
                utm_medium: localStorage.getItem("utm_medium"),
                utm_campaign: localStorage.getItem("utm_campaign"),
                utm_term: localStorage.getItem("utm_term"),
                utm_content: localStorage.getItem("utm_content"),
            };
            const params = new URLSearchParams();

            (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
                const value = formData[key];
                params.append(key, value != null ? String(value) : "");
            });
            await handleGoogleSheetForm(params);
            reset();

            window.location.href = "/thank-you";
            // router.replace("/thank-you");

            setIsLoading(false);

        } catch (error) {
            console.error("Error submitting form:", error);
            reset();

        } finally {
            setIsLoading(false);
            reset();

        }
    };

    const handleGoogleSheetForm = async (formData: any, retries = 3, delay = 1500) => {
        try {
            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbzxZfjHFmouj_VzQQ7zaZ_02IwmNRDjx1YvoIcBzXGx2zJOdxtaMMiETuqyKWSsawgg/exec",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: formData.toString(),
                }
            );
            console.log(res);
            const text = await res.text();
            console.log("Google Sheet Response:", text);

            if (res.ok) {
                return true;
            } else {
                throw new Error("Sheet responded with non-OK");
            }
        } catch (err) {
            console.error(
                `Google Sheet attempt failed. Retries left: ${retries}`,
                err
            );

            if (retries <= 1) {
                console.error("Google Sheet failed permanently!");
                return false;
            }

            await new Promise((resolve) => setTimeout(resolve, delay));
            return handleGoogleSheetForm(formData, retries - 1, delay);
        }
    };

    return (
        <section className={styles.heroSection}>
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
                            {/* Welcome to your Sanctuary */}
                            Begin your trauma to triumph Journey
                        </span>

                        <h1 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                            You&apos;re Not Weak, You&apos;re Carrying Too Much

                        </h1>

                        <h4 className={styles.headingGold} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 400, fontStyle: "italic" }}>
                            What you&apos;re feeling isn&apos;t random or imagined.
                        </h4>
                        <p className={styles.description}>

                            The hurt you feel and the pain that lingers can seem like a personal flaw.
                            But it’s not weakness, it’s your body asking for care.
                        </p>

                        <p className={styles.description}>
                            It often shows up as anxiety, low mood, or constant stress that makes moving forward feel harder than it should.
                            If this feels familiar, you’re in the right place.
                        </p>
                        {/* <div className={styles.buttonGroup}>
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
                        </div> */}
                    </motion.div>

                    <motion.div
                        className={styles.formWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        {/* Decorative background element */}
                        <div className={styles.formDecoration}></div>
                        <div ref={ref} className={styles.formContainer}>
                            <form
                                className={styles.form}
                                suppressHydrationWarning
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                {/* NAME */}
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Full Name</label>
                                    <div className={styles.inputWrapper}>
                                        <i className="fas fa-user"></i>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            placeholder="Your Name"
                                            {...register("name")}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    {errors.name && (
                                        <p style={{ color: "red", fontSize: "12px" }}>
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email Address</label>
                                    <div className={styles.inputWrapper}>
                                        <i className="fas fa-envelope"></i>
                                        <input
                                            type="email"
                                            className={styles.input}
                                            placeholder="email@address.com"
                                            {...register("email")}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p style={{ color: "red", fontSize: "12px" }}>
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* PHONE */}
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Whatsapp Number</label>
                                    <div className={styles.inputWrapper}>
                                        <i className="fas fa-phone"></i>
                                        <input
                                            type="tel"
                                            className={styles.input}
                                            placeholder="+91 XXXXX XXXXX"
                                            {...register("phone")}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p style={{ color: "red", fontSize: "12px" }}>
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Select date</label>

                                    <Controller
                                        name="date"
                                        control={control}
                                        render={({ field }) => (
                                            <DatePicker
                                                selected={field.value ? new Date(field.value) : null}
                                                onChange={(date: Date | null) =>
                                                    field.onChange(
                                                        date
                                                            ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
                                                            : ""
                                                    )
                                                }
                                                minDate={today}
                                                maxDate={twoweeklate}
                                                placeholderText="Select a date"
                                                dateFormat="MM/dd/yyyy"
                                                className={styles.input2}
                                                disabled={isLoading}
                                            />
                                        )}
                                    />

                                    {errors.date && (
                                        <p style={{ color: "red", fontSize: "12px" }}>
                                            {errors.date.message}
                                        </p>
                                    )}
                                </div>

                                {/* TIME */}
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Select Time</label>
                                    <select
                                        className={styles.input2}
                                        {...register("time")}
                                        disabled={isLoading}
                                    >
                                        <option value="">Select time</option>
                                        <option value="10.00 AM - 12.00 PM">
                                            10.00 AM - 12.00 PM
                                        </option>
                                        <option value="02.00 PM - 04.00 PM">
                                            02.00 PM - 04.00 PM
                                        </option>
                                        <option value="04.00 PM - 06.00 PM">
                                            04.00 PM - 06.00 PM
                                        </option>
                                        <option value="06.00 PM - 08.00 PM">
                                            06.00 PM - 08.00 PM
                                        </option>
                                    </select>

                                    {errors.time && (
                                        <p style={{ color: "red", fontSize: "12px" }}>
                                            {errors.time.message}
                                        </p>
                                    )}
                                </div>

                                <button disabled={isLoading} type="submit" className={styles.submitButton}>
                                    {/* {isLoading ? "Submitting..." : "Secure My Spot"} <i className="fas fa-arrow-right"></i> */}


                                    {
                                        isLoading ? (<div className={styles.loader}></div>) : (<>
                                            Secure My spot <i className="fas fa-arrow-right"></i>
                                        </>)
                                    }
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
