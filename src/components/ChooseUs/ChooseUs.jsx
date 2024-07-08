import classes from "@/components/ChooseUs/ChooseUs.module.css";
import FoodQuality from "@/assets/chooseUs/quality.png";
import FastDelivery from "@/assets/chooseUs/delivery.png";
import Bg from "@/assets/chooseUs/bg.png";
import Recipe from "@/assets/chooseUs/cooking.svg";
import Features from "./Features";
import Image from "next/image";
import barlowCondensed from "@/barlowCondened";

const features = [
    {
        img: { src: FoodQuality, alt: "Food Quality" },
        title: "SUPER QUALITY FOOD",
        body: "We use only the best Fingredients to create our delicious food items",
    },
    {
        img: { src: Recipe, alt: "Recipe" },
        title: "ORIGINAL RECIPES",
        body: "Discover our collection of original recipes created by our talented chefs",
    },
    {
        img: { src: FastDelivery, alt: "Fast Delivery" },
        title: "FAST DELIVERY",
        body: "Enjoy quick and reliable delivery straight to your doorstep",
    },
    {
        img: { src: FoodQuality, alt: "Fresh Food" },
        title: "FRESH FOOD",
        body: "Indulge in our wide selection of fresh and delicious food options",
    },
];

export default function ChooseUs() {
    return (
        <div
            className={`${barlowCondensed.className} ${classes.ChooseUsContainer}`}
        >
            <Image
                className={classes.chooseUsBg}
                src={Bg}
                alt="background"
                width={0}
                height={0}
            />
            {features.map((feature, index) => (
                <Features feature={feature} key={index} />
            ))}
        </div>
    );
}
