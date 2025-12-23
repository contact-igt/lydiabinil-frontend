// "use client";

// import { motion } from "framer-motion";
// import styles from "./Hero.module.css";
// import { useForm, Controller } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useRouter } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";

// // Mandatory first 5 fields schema
// export const schema = z.object({
//     name: z.string().trim().min(2, "Name is required").regex(/^[A-Za-z ]+$/, "Name must contain only letters"),
//     email: z.string().trim().regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email address"),
//     phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Invalid phone number"),
//     date: z.string().nonempty({ message: "Select your date" }),
//     time: z.string().nonempty({ message: "Select your time" }),
// });

// // Optional 4 fields schema
// export const optionalSchema = z.object({
//     reason: z.string().optional(),
//     pattern: z.string().optional(),
//     readiness: z.string().optional(),
//     prework: z.enum(["Yes", "No"]).optional(),
// });

// const Hero = ({ ref }: any) => {
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
//     const [showOptionalFields, setShowOptionalFields] = useState(false);
//     const [sessionId, setSessionId] = useState("");

//     const today = new Date();
//     const twoweeklate = new Date();
//     twoweeklate.setDate(today.getDate() + 14);

//     const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
//         resolver: zodResolver(schema),
//         defaultValues: { date: "", time: "" },
//     });

//     const { register: registerOptional, handleSubmit: handleOptionalSubmit, reset: resetOptional } = useForm({
//         resolver: zodResolver(optionalSchema),
//     });

//     const getUTM = (key: string) => {
//         if (typeof window === "undefined") return "";
//         try { return localStorage.getItem(key) || ""; } catch { return ""; }
//     };

//     const handleGoogleSheetForm = async (formData: any, retries = 3, delay = 1500) => {
//         try {
//             const res = await fetch("https://script.google.com/macros/s/AKfycbzUFd887-sIHedykW991nI6SvSN9H4aGRDASwoRaJ3zTq1etUxEOTOjoNL0QzHt1sA/exec", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/x-www-form-urlencoded" },
//                 body: formData.toString(),
//             });
//             if (res.ok) return true;
//             else throw new Error("Sheet responded with non-OK");
//         } catch (err) {
//             if (retries <= 1) return false;
//             await new Promise((resolve) => setTimeout(resolve, delay));
//             return handleGoogleSheetForm(formData, retries - 1, delay);
//         }
//     };

//     // const onSubmit = async (data: any) => {
//     //     setIsLoading(true);
//     //     try {
//     //         const id = uuidv4();
//     //         setSessionId(id);
//     //         localStorage.setItem("session_id", id);

//     //         let ip = "";
//     //         try {
//     //             const ipResponse = await fetch("https://api.ipify.org?format=json");
//     //             const ipData = await ipResponse.json();
//     //             ip = ipData.ip;
//     //         }
//     //         catch { }

//     //         const formData = {
//     //             session_id: id,
//     //             name: data.name,
//     //             email: data.email,
//     //             phone: `+91${data.phone}`,
//     //             date: data.date,
//     //             time: data.time,
//     //             ip_address: ip,
//     //             utm_source: getUTM("utm_source"),
//     //             utm_medium: getUTM("utm_medium"),
//     //             utm_campaign: getUTM("utm_campaign"),
//     //             utm_term: getUTM("utm_term"),
//     //             utm_content: getUTM("utm_content"),
//     //         };

//     //         const params = new URLSearchParams();
//     //         (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
//     //             params.append(key, formData[key] != null ? String(formData[key]) : "");
//     //         });

//     //         const success = await handleGoogleSheetForm(params);

//     //         if (success) {
//     //             reset();
//     //             setShowOptionalFields(true);
//     //         } else alert("Something went wrong. Please try again.");
//     //     } catch (err) {
//     //         console.error(err);
//     //     } finally {
//     //         setIsLoading(false);
//     //     }
//     // };


//     const onSubmit = async (data: any) => {
//         setIsLoading(true);
//         try {
//             const id = uuidv4();
//             setSessionId(id);
//             localStorage.setItem("session_id", id);

//             let ip = "";
//             try {
//                 const ipResponse = await fetch("https://api.ipify.org?format=json");
//                 const ipData = await ipResponse.json();
//                 ip = ipData.ip;
//             } catch { }

//             const formData = {
//                 session_id: id,
//                 name: data.name,
//                 email: data.email,
//                 phone: `+91${data.phone}`,
//                 date: data.date,
//                 time: data.time,
//                 ip_address: ip,
//                 utm_source: getUTM("utm_source"),
//                 utm_medium: getUTM("utm_medium"),
//                 utm_campaign: getUTM("utm_campaign"),
//                 utm_term: getUTM("utm_term"),
//                 utm_content: getUTM("utm_content"),
//             };

//             const params = new URLSearchParams();
//             (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
//                 params.append(key, formData[key] != null ? String(formData[key]) : "");
//             });

//             const success = await handleGoogleSheetForm(params);

//             if (success) {
//                 reset(); // clear first form
//                 setShowOptionalFields(true); // show optional fields ONLY after first form success
//             } else {
//                 setShowOptionalFields(false); // ensure optional fields stay hidden
//                 alert("Something went wrong. Please try again.");
//             }
//         } catch (err) {
//             console.error(err);
//             setShowOptionalFields(false); // ensure optional fields stay hidden
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const onOptionalSubmitHandler = async (data: any) => {
//         setIsLoading(true);
//         try {
//             const session_id = localStorage.getItem("session_id");
//             if (!session_id) { alert("Session expired. Please submit the first form again."); return; }

//             const formData = {
//                 session_id,
//                 reason: data.reason || "",
//                 pattern: data.pattern || "",
//                 readiness: data.readiness || "",
//                 prework: data.prework || "",
//             };

//             const params = new URLSearchParams();
//             (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
//                 params.append(key, formData[key] != null ? String(formData[key]) : "");
//             });

//             const success = await handleGoogleSheetForm(params);
//             if (success) {
//                 resetOptional();
//                 setShowOptionalFields(false);
//                 window.location.href = "/thank-you";
//             } else alert("Something went wrong. Please try again.");
//         } catch (err) {
//             console.error(err);
//         } finally { setIsLoading(false); }
//     };

//     return (
//         <section className={styles.heroSection}>
//             <div className={styles.backgroundGraphic}></div>
//             <div className={styles.backgroundBlur}></div>
//             <div className={styles.container}>
//                 <div className={styles.grid}>
//                     <motion.div className={styles.textContent} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>

//                         <span className={styles.badge}> {/* Welcome to your Sanctuary */} Begin your trauma to triumph Journey </span>
//                         <h1 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}> You&apos;re Not Weak, You&apos;re Carrying Too Much </h1> <h4 className={styles.headingGold} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 400, fontStyle: "italic" }}> What you&apos;re feeling isn&apos;t random or imagined. </h4> <p className={styles.description}> The hurt you feel and the pain that lingers can seem like a personal flaw. But it’s not weakness, it’s your body asking for care. </p> <p className={styles.description}> It often shows up as anxiety, low mood, or constant stress that makes moving forward feel harder than it should. If this feels familiar, you’re in the right place. </p>
//                     </motion.div>

//                     <motion.div className={styles.formWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
//                         <div className={styles.formDecoration}></div>
//                         <div ref={ref} className={styles.formContainer}>
//                             {/* FIRST FORM */}
//                             <form className={styles.form} suppressHydrationWarning onSubmit={handleSubmit(onSubmit)}>
//                                 <div className={styles.formGroup}>
//                                     <label className={styles.label}>Full Name</label>
//                                     <div className={styles.inputWrapper}> <i className="fas fa-user"></i>
//                                         <input type="text" className={styles.input} placeholder="Your Name" {...register("name")} disabled={isLoading} />
//                                     </div>
//                                     {errors.name && (<p style={{ color: "red", fontSize: "12px" }}> {errors.name.message} </p>)}
//                                 </div>
//                                 <div className={styles.formGroup}>
//                                     <label className={styles.label}>Email Address</label>
//                                     <div className={styles.inputWrapper}> <i className="fas fa-envelope"></i>
//                                         <input type="email" className={styles.input} placeholder="email@address.com" {...register("email")} disabled={isLoading} />
//                                     </div>
//                                     {errors.email && (<p style={{ color: "red", fontSize: "12px" }}> {errors.email.message} </p>)}
//                                 </div>

//                                 <div className={styles.formGroup}>
//                                     <label className={styles.label}>Whatsapp Number</label>
//                                     <div className={styles.inputWrapper}> <i className="fas fa-phone"></i>
//                                         <input type="tel" className={styles.input} placeholder="+91 XXXXX XXXXX" {...register("phone")} disabled={isLoading} />
//                                     </div>
//                                     {errors.phone && (<p style={{ color: "red", fontSize: "12px" }}> {errors.phone.message} </p>)}
//                                 </div>
//                                 <div className={styles.formGroup}>
//                                     <label className={styles.label}>Select date</label>
//                                     <Controller
//                                         name="date"
//                                         control={control}
//                                         render={({ field }) => (
//                                             <DatePicker
//                                                 selected={field.value ? new Date(field.value) : null}
//                                                 onChange={(date: Date | null) =>
//                                                     field.onChange(
//                                                         date
//                                                             ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
//                                                                 date.getDate()
//                                                             ).padStart(2, "0")}`
//                                                             : ""
//                                                     )
//                                                 }
//                                                 minDate={today}
//                                                 maxDate={twoweeklate}
//                                                 placeholderText="Select a date"
//                                                 dateFormat="MM/dd/yyyy"
//                                                 className={styles.input2}
//                                                 disabled={isLoading}
//                                             />
//                                         )}
//                                     />

//                                     {errors.date && (<p style={{ color: "red", fontSize: "12px" }}> {errors.date.message} </p>)}
//                                 </div>
//                                 <div className={styles.formGroup}> <label className={styles.label}>Select Time</label>
//                                     <select className={styles.input2} {...register("time")} disabled={isLoading} >
//                                         <option value="">Select time</option> <option value="10.00 AM - 12.00 PM"> 10.00 AM - 12.00 PM </option> <option value="02.00 PM - 04.00 PM"> 02.00 PM - 04.00 PM </option> <option value="04.00 PM - 06.00 PM"> 04.00 PM - 06.00 PM </option> <option value="06.00 PM - 08.00 PM"> 06.00 PM - 08.00 PM </option> </select>
//                                     {errors.time && (<p style={{ color: "red", fontSize: "12px" }}> {errors.time.message} </p>)}
//                                 </div>
//                                 <button type="submit" className={styles.submitButton} disabled={isLoading}>
//                                     {isLoading ? <div className={styles.loader}></div> : <>Secure My Spot <i className="fas fa-arrow-right"></i></>}
//                                 </button>
//                             </form>

//                             {/* OPTIONAL FIELDS FORM */}
//                             {showOptionalFields && (
//                                 <form className={styles.form} onSubmit={handleOptionalSubmit(onOptionalSubmitHandler)}>

//                                     <div className={styles.formGroup}>
//                                         <label className={styles.label}>What made you feel called to book this call today? *</label>
//                                         <textarea {...registerOptional("reason")} className={styles.input}></textarea>
//                                     </div>

//                                     <div className={styles.formGroup}>
//                                         <label className={styles.label}>What’s one recurring pattern, emotion, or block you’re ready to release for good? *</label>
//                                         <textarea {...registerOptional("pattern")} className={styles.input}></textarea>
//                                     </div>

//                                     <div className={styles.formGroup}>
//                                         <label className={styles.label}>On a scale of 1–10, how ready are you to finally let this go? *</label>
//                                         <input type="number" min={1} max={10} {...registerOptional("readiness")} className={styles.input} />
//                                     </div>

//                                     <div className={styles.formGroup}>
//                                         <label className={styles.label}>Are you willing to complete a short 10-minute pre-work audio before the call? *</label>
//                                         <select {...registerOptional("prework")} className={styles.input}>
//                                             <option value="">Select</option>
//                                             <option value="Yes">Yes</option>
//                                             <option value="No">No</option>
//                                         </select>
//                                     </div>
//                                     <button type="submit" className={styles.submitButton} disabled={isLoading}>
//                                         {isLoading ? <div className={styles.loader}></div> : <>Submit Optional Info</>}
//                                     </button>
//                                 </form>
//                             )}
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;










"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

// Mandatory first 5 fields schema
export const schema = z.object({
    name: z.string().trim().min(2, "Name is required").regex(/^[A-Za-z ]+$/, "Name must contain only letters"),
    email: z.string().trim().regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email address"),
    phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Invalid phone number"),
    date: z.string().nonempty({ message: "Select your date" }),
    time: z.string().nonempty({ message: "Select your time" }),
});

// Optional 4 fields schema
export const optionalSchema = z.object({
    reason: z.string().nonempty({ message: "This field is required" }),
    pattern: z.string().nonempty({ message: "This field is required" }),
    readiness: z.string().nonempty({ message: "This field is required" }),
    prework: z.enum(["Yes", "No"]).refine(val => val === "Yes" || val === "No", {
        message: "Select your prework"
    })
});

const Hero = ({ ref }: any) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showOptionalFields, setShowOptionalFields] = useState(false);
    const [firstFormSubmitted, setFirstFormSubmitted] = useState(false);
    const [sessionId, setSessionId] = useState("");

    const today = new Date();
    const twoweeklate = new Date();
    twoweeklate.setDate(today.getDate() + 14);

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: { date: "", time: "" },
    });
    const {
        register: registerOptional,
        handleSubmit: handleOptionalSubmit,
        reset: resetOptional,
        formState: { errors: optionalErrors }
    } = useForm({
        resolver: zodResolver(optionalSchema),
    });


    const getUTM = (key: string) => {
        if (typeof window === "undefined") return "";
        try { return localStorage.getItem(key) || ""; } catch { return ""; }
    };

    const handleGoogleSheetForm = async (formData: any, retries = 3, delay = 1500) => {
        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbzUFd887-sIHedykW991nI6SvSN9H4aGRDASwoRaJ3zTq1etUxEOTOjoNL0QzHt1sA/exec", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formData.toString(),
            });
            if (res.ok) return true;
            else throw new Error("Sheet responded with non-OK");
        } catch (err) {
            if (retries <= 1) return false;
            await new Promise((resolve) => setTimeout(resolve, delay));
            return handleGoogleSheetForm(formData, retries - 1, delay);
        }
    };

    // First form submit
    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            const id = uuidv4();
            setSessionId(id);
            localStorage.setItem("session_id", id);

            let ip = "";
            try {
                const ipResponse = await fetch("https://api.ipify.org?format=json");
                const ipData = await ipResponse.json();
                ip = ipData.ip;
            } catch { }

            const formData = {
                session_id: id,
                name: data.name,
                email: data.email,
                phone: `+91${data.phone}`,
                date: data.date,
                time: data.time,
                ip_address: ip,
                utm_source: getUTM("utm_source"),
                utm_medium: getUTM("utm_medium"),
                utm_campaign: getUTM("utm_campaign"),
                utm_term: getUTM("utm_term"),
                utm_content: getUTM("utm_content"),
            };

            const params = new URLSearchParams();
            (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
                params.append(key, formData[key] != null ? String(formData[key]) : "");
            });

            const success = await handleGoogleSheetForm(params);

            if (success) {
                reset();
                setFirstFormSubmitted(true);  // hide first form
                setShowOptionalFields(true);  // show optional form
            } else alert("Something went wrong. Please try again.");
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    // Optional form submit
    const onOptionalSubmitHandler = async (data: any) => {
        setIsLoading(true);
        try {
            const session_id = localStorage.getItem("session_id");
            if (!session_id) { alert("Session expired. Please submit the first form again."); return; }

            const formData = {
                session_id,
                reason: data.reason || "",
                pattern: data.pattern || "",
                readiness: data.readiness || "",
                prework: data.prework || "",
            };

            const params = new URLSearchParams();
            (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
                params.append(key, formData[key] != null ? String(formData[key]) : "");
            });

            const success = await handleGoogleSheetForm(params);
            if (success) {
                resetOptional();
                setShowOptionalFields(false);
                window.location.href = "/thank-you";
            } else alert("Something went wrong. Please try again.");
        } catch (err) {
            console.error(err);
        } finally { setIsLoading(false); }
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundGraphic}></div>
            <div className={styles.backgroundBlur}></div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div className={styles.textContent} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                        <span className={styles.badge}>Begin your trauma to triumph Journey</span>
                        <h1 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>You&apos;re Not Weak, You&apos;re Carrying Too Much</h1>
                        <h4 className={styles.headingGold} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 400, fontStyle: "italic" }}>What you&apos;re feeling isn&apos;t random or imagined.</h4>
                        <p className={styles.description}>The hurt you feel and the pain that lingers can seem like a personal flaw. But it’s not weakness, it’s your body asking for care.</p>
                        <p className={styles.description}>It often shows up as anxiety, low mood, or constant stress that makes moving forward feel harder than it should. If this feels familiar, you’re in the right place.</p>
                    </motion.div>

                    {
                        !firstFormSubmitted && (
                            <motion.div className={styles.formWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                                <div className={styles.formDecoration}></div>
                                <div ref={ref} className={styles.formContainer}>

                                    <form
                                        className={styles.form}
                                        suppressHydrationWarning
                                        method="post"
                                        action="https://script.google.com/macros/s/AKfycbzUFd887-sIHedykW991nI6SvSN9H4aGRDASwoRaJ3zTq1etUxEOTOjoNL0QzHt1sA/exec"
                                        onSubmit={handleSubmit(onSubmit)


                                        }>
                                        {/* Name */}
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Full Name</label>
                                            <div className={styles.inputWrapper}><i className="fas fa-user"></i>
                                                <input type="text" className={styles.input} placeholder="Your Name" {...register("name")} disabled={isLoading} />
                                            </div>
                                            {errors.name && (<p style={{ color: "red", fontSize: "12px" }}>{errors.name.message}</p>)}
                                        </div>

                                        {/* Email */}
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Email Address</label>
                                            <div className={styles.inputWrapper}><i className="fas fa-envelope"></i>
                                                <input type="email" className={styles.input} placeholder="email@address.com" {...register("email")} disabled={isLoading} />
                                            </div>
                                            {errors.email && (<p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>)}
                                        </div>

                                        {/* Phone */}
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Whatsapp Number</label>
                                            <div className={styles.inputWrapper}><i className="fas fa-phone"></i>
                                                <input type="tel" className={styles.input} placeholder="+91 XXXXX XXXXX" {...register("phone")} disabled={isLoading} />
                                            </div>
                                            {errors.phone && (<p style={{ color: "red", fontSize: "12px" }}>{errors.phone.message}</p>)}
                                        </div>

                                        {/* Date */}
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
                                            {errors.date && (<p style={{ color: "red", fontSize: "12px" }}>{errors.date.message}</p>)}
                                        </div>

                                        {/* Time */}
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Select Time</label>
                                            <select className={styles.input2} {...register("time")} disabled={isLoading}>
                                                <option value="">Select time</option>
                                                <option value="10.00 AM - 12.00 PM">10.00 AM - 12.00 PM</option>
                                                <option value="02.00 PM - 04.00 PM">02.00 PM - 04.00 PM</option>
                                                <option value="04.00 PM - 06.00 PM">04.00 PM - 06.00 PM</option>
                                                <option value="06.00 PM - 08.00 PM">06.00 PM - 08.00 PM</option>
                                            </select>
                                            {errors.time && (<p style={{ color: "red", fontSize: "12px" }}>{errors.time.message}</p>)}
                                        </div>

                                        <button type="submit" className={styles.submitButton} disabled={isLoading}>
                                            {isLoading ? <div className={styles.loader}></div> : <>Secure My Spot <i className="fas fa-arrow-right"></i></>}
                                        </button>
                                    </form>

                                </div>
                            </motion.div>

                        )
                    }

                    {
                        showOptionalFields && (

                            <motion.div className={styles.formWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
                                <div className={styles.formDecoration}></div>
                                <div ref={ref} className={styles.formContainer}>
                                    {showOptionalFields && (
                                        <form className={styles.form}
                                            onSubmit={handleOptionalSubmit(onOptionalSubmitHandler)}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>What made you feel called to book this call today?</label>
                                                <textarea {...registerOptional("reason")} className={styles.input}></textarea>
                                                {optionalErrors.reason && (
                                                    <p style={{ color: "red", fontSize: "12px" }}>{optionalErrors.reason.message}</p>
                                                )}

                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>What’s one recurring pattern, emotion, or block you’re ready to release for good?</label>
                                                <textarea {...registerOptional("pattern")} className={styles.input}></textarea>
                                                {optionalErrors.pattern && (
                                                    <p style={{ color: "red", fontSize: "12px" }}>{optionalErrors.pattern.message}</p>
                                                )}
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>On a scale of 1–10, how ready are you to finally let this go?</label>
                                                <input type="number" min={1} max={10} {...registerOptional("readiness")} className={styles.input} />
                                                {optionalErrors.readiness && (
                                                    <p style={{ color: "red", fontSize: "12px" }}>{optionalErrors.readiness.message}</p>
                                                )}
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Are you willing to complete a short 10-minute pre-work audio before the call?</label>
                                                <select {...registerOptional("prework")} className={styles.input}>
                                                    <option value="">Select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                                {optionalErrors.prework && (
                                                    <p style={{ color: "red", fontSize: "12px" }}>{optionalErrors.prework.message}</p>
                                                )}
                                            </div>

                                            <button type="submit" className={styles.submitButton} disabled={isLoading}>
                                                {isLoading ? <div className={styles.loader}></div> : <>Submit Optional Info</>}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>

                        )

                    }


                </div>
            </div>
        </section>
    );
};

export default Hero;
