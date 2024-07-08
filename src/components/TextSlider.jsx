"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

import styles from "@/components/css/textSlider.module.css";
import Button from "@/components/Button";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

const slides = [
    {
        alt: "A delicious, juicy burger",
        title: "FAST FRESH FLAVORFUL DISHES",
        link: "/",
        header: "It's Quick & Amusing!",
    },
    {
        alt: "A delicious, spicy curry",
        title: "EXOTIC SPICE BLISS FOOD",
        link: "/",
        header: "A Symphony of Flavors!",
    },
    {
        alt: "Steamed dumplings",
        title: "STEAMY & SAVORY ARABIC DELIGHTS",
        link: "/",
        header: "Little Bundles of Joy!",
    },
];

export default function TextSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevImageIndex(currentImageIndex);
            setCurrentImageIndex((prevIndex) =>
                prevIndex < slides.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <div className={styles.slideshow}>
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
                            className={
                                index === currentImageIndex ? styles.active : ""
                            }
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
