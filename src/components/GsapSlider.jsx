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
    const imgTopContainerRef = useRef(null);
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
        const interval = setInterval(handleSlider, 5000);
        updateImages(0);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={classes.slider}>
            <div className={classes.slideImages}>
                <div
                    className={`${classes.imgTop} imgTop`}
                    ref={imgTopContainerRef}
                ></div>
            </div>
        </div>
    );
}
