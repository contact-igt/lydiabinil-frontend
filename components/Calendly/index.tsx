"use client"
import { InlineWidget } from "react-calendly";
import styles from "./calendly.module.css"


interface CalendlyProps {
    formData: any;
}

const Calendly = ({ formData }: CalendlyProps) => {

    if (!formData) {
        return null
    }


    return (

        <>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                            Book Your Trauma to Triumph™ Diagnostic Call
                        </h2>
                    </div>
                    <InlineWidget
                        url="https://calendly.com/thrive-lydiabinil/trauma-diagnostic-call"
                        prefill={{
                            name: formData.name,
                            email: formData.email,
                        }}
                    />
                </div>

            </section>


        </>



    );
}


export default Calendly;