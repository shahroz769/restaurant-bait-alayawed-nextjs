"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import classes from "@/components/css/gsapSlider.module.css";

const images = [
    "https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434391/baitalayawed/mezhghedsydnjkmcgxjd.jpg",
    "https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434391/baitalayawed/xpipiicr0w4pnjjdlu9q.jpg",
    "https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434391/baitalayawed/umwr9kby5vf5lrlbo9fc.jpg",
    "https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434391/baitalayawed/hu8mn2zroaxchron2g3p.jpg",
    "https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434390/baitalayawed/dqomyzmsxzgvr8erfbbs.jpg",
];
const totalSlides = images.length - 1;

export default function GsapSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const imgTopContainerRef = useRef(null);
    const sliderRef = useRef(null);

    const updateImages = (imgNumber) => {
        const imgSrc = images[imgNumber];
        const imgTop = document.createElement("img");
        imgTop.src = imgSrc;
        imgTop.style.position = "absolute";
        imgTop.setAttribute("fetchpriority", "high");
        const imgTopContainer = imgTopContainerRef.current;
        imgTopContainer.appendChild(imgTop);

        const tl = gsap.timeline();

        tl.fromTo(
            imgTop,
            {
                clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
                transform: "scale(2)",
                x: -1000,
            },
            {
                clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
                transform: "scale(1)",
                x: 0,
                duration: 2,
                ease: "power4.out",
            }
        );

        tl.call(trimExcessImages);
    };

    const trimExcessImages = () => {
        const imgTopContainer = imgTopContainerRef.current;
        const images = Array.from(imgTopContainer.querySelectorAll("img"));
        const excessCount = images.length - 5;
        if (excessCount > 0) {
            images
                .slice(0, excessCount)
                .forEach((image) => imgTopContainer.removeChild(image));
        }
    };

    const handleSlider = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex < totalSlides ? prevIndex + 1 : 0;
            updateImages(newIndex);
            return newIndex;
        });
    };

    useEffect(() => {
        let interval;

        const startSlider = () => {
            interval = setInterval(handleSlider, 5000);
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
    }, [isVisible]);

    useEffect(() => {
        updateImages(0);
    }, []);

    return (
        <div className={classes.slider} ref={sliderRef}>
            <div className={classes.slideImages}>
                <div
                    className={`${classes.imgTop} imgTop`}
                    ref={imgTopContainerRef}
                ></div>
            </div>
        </div>
    );
}
