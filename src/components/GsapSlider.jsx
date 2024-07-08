"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import classes from "@/components/css/gsapSlider.module.css";

import Slide1 from "@/assets/gsapSlider/slide1.avif";
import Slide2 from "@/assets/gsapSlider/slide2.avif";
import Slide3 from "@/assets/gsapSlider/slide3.avif";
import Slide4 from "@/assets/gsapSlider/slide4.avif";
import Slide5 from "@/assets/gsapSlider/slide5.avif";

const images = [Slide1, Slide2, Slide3, Slide4, Slide5];
const totalSlides = images.length - 1;

export default function GsapSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const titleRefs = useRef([]);
    const imgTopContainerRef = useRef(null);
    const firstLoad = useRef(true);

    const updateActiveSlide = (index) => {
        titleRefs.current.forEach((el, i) => {
            if (el) {
                if (i === index) {
                    el.classList.add("active");
                } else {
                    el.classList.remove("active");
                }
            }
        });
    };

    const preloadImage = (imgSrc) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = imgSrc;
            img.onload = resolve;
        });
    };

    const updateImages = (imgNumber) => {
        const imgSrc = images[imgNumber];
        const imgTop = document.createElement("img");
        imgTop.src = imgSrc.src;
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
                x: -200,
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

    const handleSlider = async () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex < totalSlides ? prevIndex + 1 : 0;

            setTimeout(() => {
                updateActiveSlide(newIndex);
            }, 100);
            updateImages(newIndex);

            gsap.to(".slideTitles", {
                x: `-${newIndex * 20}%`,
                duration: 2,
                ease: "power4.out",
            });

            return newIndex;
        });

        // Preload the next image
        const nextIndex = (currentIndex + 1) % images.length;
        await preloadImage(images[nextIndex].src);

        if (firstLoad.current) {
            firstLoad.current = false;
        }
    };

    useEffect(() => {
        const interval = setInterval(handleSlider, 5000);
        updateImages(0);
        updateActiveSlide(0);

        // Preload the first image
        preloadImage(images[0].src).then(() => {
            firstLoad.current = false;
        });

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.slider}>
            <div className={`${classes.slideTitles} slideTitles`}>
                {[
                    "Neo Forge Towers",
                    "Arcadian Complex",
                    "Shadowline Spire",
                    "Echo Nexus Habitat",
                    "Cascade Enclave",
                ].map((title, index) => (
                    <div
                        className={`${classes.title} title`}
                        key={index}
                        ref={(el) => (titleRefs.current[index] = el)}
                    >
                        <h1 style={{ color: "white" }}>{title}</h1>
                    </div>
                ))}
            </div>
            <div className={classes.slideImages}>
                <div
                    className={`${classes.imgTop} imgTop`}
                    ref={imgTopContainerRef}
                ></div>
            </div>
        </div>
    );
}
