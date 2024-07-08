"use client";
import { useEffect, useState } from "react";
import classes from "@/components/Testimonial/testimonialContainer.module.css";
import barlowCondensed from "@/barlowCondened";
import Quote from "@/assets/testimonial/quote.jpg";
import corn from "@/assets/testimonial/corn.jpg";
import FastFood from "@/assets/testimonial/fast-food.jpg";
import HermanMiller from "@/assets/testimonial/t1.jpg";
import EmilyJohnson from "@/assets/testimonial/t2.jpg";
import MichaelDavis from "@/assets/testimonial/t3.jpg";
import DavidWilson from "@/assets/testimonial/t4.png";
import SarahThompson from "@/assets/testimonial/t5.png";
import Image from "next/image";

const testimonials = [
    {
        name: "Herman Miller",
        text: "The food at this restaurant is absolutely delicious! I highly recommend trying their signature dishes.",
        img: { src: HermanMiller, alt: "Herman Miller" },
    },
    {
        name: "Emily Johnson",
        text: "I had a wonderful dining experience at this restaurant. The ambiance was great and the staff was very friendly.",
        img: { src: EmilyJohnson, alt: "Emily Johnson" },
    },
    {
        name: "Michael Davis",
        text: "The service at this restaurant is top-notch. The waitstaff is attentive and the food is always served promptly.",
        img: { src: MichaelDavis, alt: "Michael Davis" },
    },
    {
        name: "Sarah Thompson",
        text: "I've been to many restaurants, but this one stands out. The flavors in their dishes are unique and truly delightful.",
        img: { src: SarahThompson, alt: "Sarah Thompson" },
    },
    {
        name: "David Wilson",
        text: "If you're looking for a place with great food and a cozy atmosphere, this restaurant is the perfect choice.",
        img: { src: DavidWilson, alt: "David Wilson" },
    },
];

export default function TestimonialContainer() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentSlideIndex((prevIndex) =>
                    prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0,
                );
                setFade(true);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentTestimonial = testimonials[currentSlideIndex];

    return (
        <div
            className={`${barlowCondensed.className} ${classes.testimonialContainer}`}
        >
            <Image
                className={classes.fastFood}
                src={FastFood}
                alt="Fast Food"
                width={0}
                height={0}
            />
            <Image
                className={classes.corn}
                src={corn}
                alt="Corn"
                width={0}
                height={0}
            />
            <div className={classes.quoteImg}>
                <Image src={Quote} alt="Quote" width={75} height={75} />
            </div>
            <div
                className={`${classes.testimonial} ${
                    fade ? classes.fadeIn : classes.fadeOut
                }`}
            >
                <h3>{currentTestimonial.text.toUpperCase()}</h3>
                <p>{currentTestimonial.name.toUpperCase()}</p>
            </div>
            <div className={classes.testimonialImgContainer}>
                {testimonials.map((testimonial, index) => (
                    <div
                        onClick={() => {
                            setCurrentSlideIndex(index);
                        }}
                        className={`${classes.testimonialImg} ${
                            index === currentSlideIndex
                                ? classes.active
                                : classes.inactive
                        }`}
                        key={index}
                    >
                        <Image
                            src={testimonial.img.src}
                            alt={testimonial.img.alt}
                            width={75}
                            height={75}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
