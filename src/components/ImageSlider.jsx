"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

import burgerImg from "@/assets/slider01.jpg";
import curryImg from "@/assets/slider02.jpg";
import dumplingsImg from "@/assets/slider03.jpg";
import styles from "@/components/css/imageSlider.module.css";
import Button from "@/components/Button";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

const slides = [
    {
        image: burgerImg,
        alt: "A delicious, juicy burger",
        title: "FAST FRESH FLAVORFUL",
        link: "/restaurant-menu/juicy-burger",
        header: "It's Quick & Amusing!",
    },
    {
        image: curryImg,
        alt: "A delicious, spicy curry",
        title: "EXOTIC SPICE BLISS",
        link: "/restaurant-menu/spicy-curry",
        header: "A Symphony of Flavors!",
    },
    {
        image: dumplingsImg,
        alt: "Steamed dumplings",
        title: "STEAMY & SAVORY",
        link: "/restaurant-menu/steamed-dumplings",
        header: "Little Bundles of Joy!",
    },
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < slides.length - 1 ? prevIndex + 1 : 0,
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slideshow}>
            <div className={styles.imageSlider}>
                {slides.map((slide, index) => (
                    <Image
                        key={index}
                        src={slide.image}
                        className={
                            index === currentImageIndex ? styles.active : ""
                        }
                        alt={slide.alt}
                        priority
                    />
                ))}
            </div>
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
