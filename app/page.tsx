"use client";


import Navbar from "@/components/Navbar";
import AuthorityBar from "@/components/AuthorityBar";
import ProblemSection from "@/components/ProblemSection";
import MethodSection from "@/components/MethodSection";
import ResultsSection from "@/components/ResultsSection";
import TangibleResultsSection from "@/components/TangibleResultsSection";
import ExpertSection from "@/components/ExpertSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Preloader from "@/components/Preloader";
import Calendly from "@/components/Calendly";
import Hero from "@/components/Hero";
import { useRef, useState } from "react";

export default function Home() {

  const [formData, setFormData] = useState<any>(null);
  const calendlyRef = useRef<HTMLDivElement | null>(null);
  const contactFormRef = useRef<HTMLDivElement | null>(null);


  const getFormData = (data: any) => {
    console.log("Received from Hero:", data);
    setFormData(data);

    // Scroll to Calendly
    setTimeout(() => {
      calendlyRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };


  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Preloader />
      <main className="min-h-screen bg-cream-50">
        <Navbar scrollToContactForm={scrollToContactForm} />
        <Hero onSubmitForm={getFormData} currentRef={contactFormRef} scrollToContactForm={scrollToContactForm} />
        <AuthorityBar />
        <ProblemSection />
        <MethodSection />
        <TangibleResultsSection />
        <ResultsSection />
        <div ref={calendlyRef}>
          <Calendly formData={formData} />
        </div>
        <ExpertSection />
        <GallerySection />
        <TestimonialsSection />
        <Footer scrollToContactForm={scrollToContactForm} />
      </main>
    </>
  );
}
