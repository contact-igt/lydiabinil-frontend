"use client";
import styles from "./TestimonialsSection.module.css";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        skipSnaps: false,
    });
    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    const testimonialData = [
        {
            imgUrl: "/assets/testimonialimg1_V2.jpg",
            text: 'This journey helped me rediscover balance and inner strength. Through gentle practices and compassionate guidance, I felt truly seen and supported. It created a safe space where real healing could finally begin.',
            authorName: "Saniya F"
        },
        {
            imgUrl: "/assets/testimonialimg2_V2.jpg",
            text: 'The sessions brought me incredible peace and clarity. I felt deeply supported, and over time my stress simply melted away. It was a truly transformative experience that touched every part of my life.',
            authorName: "Megha R"
        },
        {
            imgUrl: "/assets/testimonialimg3_V2.jpg",
            text: 'From the very first session, I noticed positive changes. The space felt calming, safe, and deeply nurturing. Every step of the journey was guided with such care and presence that healing felt natural and personal.',
            authorName: "Ramya J"
        },
        {
            imgUrl: "/assets/testimonialimg4.jpg",
            text: 'I released 15 years of emotional pain in just 3 months. Lydia’s method gave me my life back.',
            authorName: "Rafiqa M"
        },
        {
            imgUrl: "/assets/testimonialimg5.jpg",
            text: 'For the first time in decades, I feel free. My relationships, my work, even my body feel different.',
            authorName: "Becky G"
        }, {
            imgUrl: "/assets/testimonialimg6.jpg",
            text: 'Years of buried pain disappeared quickly. Lydia’s method restored my freedom and peace.',
            authorName: "Sonam K"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                    Words from Healed Hearts
                </h2>
                <p className={styles.subheading}>
                    These are not stories of “fixing” — they’re stories of coming home to oneself.
                </p>
                <div className={styles.carouselHeader}>
                    <button className={styles.arrow} onClick={scrollPrev}><i className="fas fa-chevron-left"></i></button>
                    <button className={styles.arrow} onClick={scrollNext}><i className="fas fa-chevron-right"></i></button>
                </div>
                <div className={styles.embla} ref={emblaRef}>
                    <div className={styles.emblaContainer}>
                        {testimonialData.map((testimonial, index) => (
                            <div className={styles.emblaSlide} key={index}>
                                <div className={styles.testimonialCard}>
                                    <i className={styles.quoteIcon + " fas fa-quote-left"}></i>
                                    <p className={styles.testimonialText} style={{ fontWeight: 400, fontStyle: "italic" }}>
                                        “{testimonial.text}”
                                    </p>
                                    <div className={styles.authorSection}>
                                        <div className={styles.authorAvatar}>
                                            <Image src={"/assets/avatar.png"} alt={testimonial?.authorName} fill />
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <p className={styles.authorName}>{testimonial?.authorName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}