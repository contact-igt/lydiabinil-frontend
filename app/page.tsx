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
import { ClientOnly } from "@/components/ClientOnlyWrapper";




export default function Home() {

  const contactFormRef = useRef<HTMLDivElement | null>(null);


  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Preloader />
      <main className="min-h-screen bg-cream-50">
        <Navbar scrollToContactForm={scrollToContactForm} />

        <ClientOnly>
          <Hero ref={contactFormRef} />

        </ClientOnly>

        <AuthorityBar />
        <GallerySection />
        <ProblemSection />
        <MethodSection />
        <TangibleResultsSection />
        <ResultsSection />
        {/* <div ref={calendlyRef}>
          <Calendly formData={formData} />
        </div> */}
        <ExpertSection />
        <TestimonialsSection />
        <Footer scrollToContactForm={scrollToContactForm} />
      </main>
    </>
  );
}
