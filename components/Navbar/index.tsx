"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface handleform {
    scrollToContactForm: () => void;
}


export default function Navbar({ scrollToContactForm }: handleform) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const showCTA = pathname !== "/thank-you";
    const isHome = pathname === "/";
    const getLink = (hash: string) => (isHome ? hash : `/${hash}`);
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.navContent}>
                    {/* Logo */}
                    <Link
                        href="/"
                        className={styles.logo}
                        style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 700 }}
                    >
                        {/* Lydia<span className={styles.logoAccent}>Binil</span> */}
                        <Image width={100} height={60} src="/assets/logo.png" alt="logo" className="mt-2" style={{ objectFit: "contain" }} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className={styles.desktopMenu}>
                        <Link
                            href={getLink("#")}
                            className={styles.navLink}
                        >
                            Home
                        </Link>
                        <Link
                            href={getLink("#problem")}
                            className={styles.navLink}
                        >
                            The Journey
                        </Link>
                        <Link
                            href={getLink("#method")}
                            className={styles.navLink}
                        >
                            The Method
                        </Link>
                        <Link
                            href={getLink("#innerpeace")}
                            className={styles.navLink}
                        >
                            Inner Peace
                        </Link>
                        <Link
                            href={getLink("#results")}
                            className={styles.navLink}
                        >
                            Results
                        </Link>
                        {showCTA && <Link
                             href={getLink("#")}
                            className={styles.ctaButton}
                            onClick={scrollToContactForm}
                        >
                            Book Diagnostic Call
                        </Link>}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        id="mobile-menu-btn"
                        className={styles.mobileMenuButton}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                    </button>
                </div>
            </div>
            {/* Mobile Menu Panel */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className={styles.mobileMenu}
                >
                    <div className={styles.mobileMenuContent}>
                        <Link
                           href={getLink("#")}
                            className={styles.mobileNavLink}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href={getLink("#problem")}
                            className={styles.mobileNavLink}
                            onClick={() => setIsOpen(false)}
                        >
                            The Journey
                        </Link>
                        <Link
                            href={getLink("#method")}
                            className={styles.mobileNavLink}
                            onClick={() => setIsOpen(false)}
                        >
                            The Method
                        </Link>
                        <Link
                            href={getLink("#innerpeace")}
                            className={styles.mobileNavLink}
                            onClick={() => setIsOpen(false)}
                        >
                            Inner Peace
                        </Link>
                        <Link
                            href={getLink("#results")}
                            className={styles.mobileNavLink}
                            onClick={() => setIsOpen(false)}
                        >
                            Results
                        </Link>
                        {showCTA && <Link
                            href="#"
                            className={styles.mobileCtaButton}
                            onClick={() => { scrollToContactForm(); setIsOpen(false) }}
                        >
                            Book Call
                        </Link>}
                    </div>
                </div>
            )}
        </nav>
    );
}
