"use client";

import { useEffect } from "react";

export default function ClientEffects() {
    useEffect(() => {
        document.body.classList.add("page-loaded");

        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.body.classList.add("scrolled");
            } else {
                document.body.classList.remove("scrolled");
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        const revealElements = document.querySelectorAll(
            ".section, .skill-card, .project-card, .timeline-item, .education-card, .education-highlight"
        );

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
            }
        );

        revealElements.forEach((element) => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });

        const sections = document.querySelectorAll(
            "main section[id]"
        );

        const navLinks = document.querySelectorAll(
            "#nav-menu a"
        );

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navLinks.forEach((link) => {
                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${entry.target.id}`
                            ) {
                                link.classList.add("active");
                            }
                        });
                    }
                });
            },
            {
                rootMargin: "-30% 0px -60% 0px",
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            revealObserver.disconnect();
            sectionObserver.disconnect();
        };
    }, []);

    return null;
}