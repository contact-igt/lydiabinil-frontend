"use client";
import styles from "./GallerySection.module.css";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

export default function GallerySection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            skipSnaps: false,
        },
        [Autoplay({ delay: 3500, stopOnInteraction: false })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const galleryImages = [
        {
            src: "/assets/galleryimg1.jpg",
            alt: "Serene meditation space with natural lighting"
        },
        {
            src: "/assets/galleryimg2_V2.jpg",
            alt: "Peaceful forest path for healing"
        },
        {
            src: "/assets/galleryimg3.jpg",
            alt: "Cozy healing therapy room"
        },
        {
            src: "/assets/galleryimg4_V2.jpg",
            alt: "Zen garden meditation space"
        },
        {
            src: "/assets/galleryimg5_V2.jpg",
            alt: "Bright yoga studio"
        },
        {
            src: "/assets/galleryimg6.jpg",
            alt: "Bright yoga studio"
        },
         {
            src: "/assets/galleryimg7.jpg",
            alt: "Bright yoga studio"
        },
         {
            src: "/assets/galleryimg8.jpeg",
            alt: "Bright yoga studio"
        },
         {
            src: "/assets/galleryimg9.jpg",
            alt: "Bright yoga studio"
        },
         {
            src: "/assets/galleryimg10.jpg",
            alt: "Bright yoga studio"
        },
         {
            src: "/assets/galleryimg11.jpg",
            alt: "Bright yoga studio"
        },

    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading} style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}>
                    Spaces That Hold Healing
                </h2>
                <p className={styles.subheading}>
                     Gentle environments where safety, presence, and inner transformation naturally unfold.
                </p>

                <div className={styles.carouselWrapper}>
                    <button
                        className={`${styles.arrow} ${styles.arrowLeft}`}
                        onClick={scrollPrev}
                        aria-label="Previous image"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <div className={styles.embla} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {galleryImages.map((image, index) => (
                                <div className={styles.emblaSlide} key={index}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className={styles.image}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`${styles.arrow} ${styles.arrowRight}`}
                        onClick={scrollNext}
                        aria-label="Next image"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
