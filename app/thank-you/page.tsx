"use client";
import Navbar from "@/components/Navbar";
import ThankYouPage from "@/components/Thankyou";

export default function ThankYou() {
    // Empty function since there's no contact form on thank you page
    const scrollToContactForm = () => { };

    return (
        <>
            <Navbar scrollToContactForm={scrollToContactForm} />
            <ThankYouPage />
        </>
    );
}
