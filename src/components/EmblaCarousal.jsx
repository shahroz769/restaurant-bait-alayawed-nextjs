"use client";
import "./css/embla.css";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import DishCard from "./DishCard";

const EmblaCarousel = ({ dishes, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ delay: 3000 }),
    ]);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {dishes.map((dish, index) => (
                        <DishCard dish={dish} index={index} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
