import classes from "@/components/css/dishCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import barlowCondensed from "@/barlowCondened";
function DishCard({ dish, index }) {
    const [hoveredDishCard, setHoveredDishCard] = useState(false);
    return (
        <div
            className={classes.embla__slide}
            onMouseEnter={() => setHoveredDishCard(index)}
            onMouseLeave={() => setHoveredDishCard(false)}
        >
            <Link href={dish.href}>
                <div className={classes.embla__slide__body}>
                    <Image
                        src={dish.image.src}
                        alt={dish.image.alt}
                        width={0}
                        height={150}
                        placeholder="blur"
                    />
                    <div className={classes.emblaDishLine}></div>
                    <h2
                        className={classes.emblaDishName}
                        style={{
                            color:
                                hoveredDishCard === index
                                    ? "#D12525"
                                    : "var(--clr-black)",
                        }}
                    >
                        {dish.category}
                    </h2>
                    <p
                        className={`${barlowCondensed.className} ${classes.emblaDishQty}`}
                    >
                        {dish.qty} PRODUCTS
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default DishCard;
