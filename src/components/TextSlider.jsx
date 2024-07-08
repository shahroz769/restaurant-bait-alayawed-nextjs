"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import pangaiaMedium from "@/pangaiaMedium";
import styles from "@/components/css/textSlider.module.css";
import Button from "@/components/Button";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

const slides = [
    {
        alt: "A delicious, juicy burger",
        title: "Fast Fresh Flavorful Dishes Delights",
        link: "/",
        header: "It's Quick & Amusing!",
    },
    {
        alt: "A delicious, spicy curry",
        title: "Exotic Spice Bliss Fast Food Delights",
        link: "/",
        header: "A Symphony of Flavors!",
    },
    {
        alt: "Steamed dumplings",
        title: "Steamy & Savory Arabic Delights",
        link: "/",
        header: "Little Bundles of Joy!",
    },
];

export default function TextSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        let interval;

        const startSlider = () => {
            interval = setInterval(() => {
                setPrevImageIndex(currentImageIndex);
                setCurrentImageIndex((prevIndex) =>
                    prevIndex < slides.length - 1 ? prevIndex + 1 : 0
                );
            }, 5000);
        };

        const stopSlider = () => {
            clearInterval(interval);
        };

        const handleVisibilityChange = () => {
            if (document.hidden || !isVisible) {
                stopSlider();
            } else {
                startSlider();
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(sliderRef.current);

        document.addEventListener("visibilitychange", handleVisibilityChange);

        if (isVisible) {
            startSlider();
        }

        return () => {
            stopSlider();
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            observer.disconnect();
        };
    }, [isVisible, currentImageIndex]);

    return (
        <div className={styles.slideshow} ref={sliderRef}>
            <div className={styles.sliderBody}>
                {slides.map((slide, index) => (
                    <React.Fragment key={index}>
                        <h3
                            className={`${greatVibes.className} ${
                                index === currentImageIndex ? styles.active : ""
                            }`}
                        >
                            {slide.header}
                        </h3>
                        <h1
                            className={`${pangaiaMedium.className} ${
                                index === currentImageIndex ? styles.active : ""
                            }`}
                        >
                            {slide.title}
                        </h1>
                        <Link
                            href={slide.link}
                            className={`${styles.btn} ${
                                index === currentImageIndex ? styles.active : ""
                            }`}
                        >
                            <Button
                                backgroundColor="var(--clr-white)"
                                color="var(--clr-black)"
                            >
                                ORDER NOW
                            </Button>
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
