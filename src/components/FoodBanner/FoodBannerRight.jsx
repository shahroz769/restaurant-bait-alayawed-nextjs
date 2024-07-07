import classes from "@/components/FoodBanner/foodBannerRight.module.css";
import barlowCondensed from "@/barlowCondened";
import Image from "next/image";
import BackgroundImg from "@/assets/foodBanner/left-bg.png";

import FoodImg from "@/assets/foodBanner/right-food.png";

export default function FoodBannerRight() {
    return (
        <div
            className={`${barlowCondensed.className} ${classes.foodBannerRight}`}
        >
            <Image
                className={classes.foodBannerRightBgImg}
                src={BackgroundImg}
                alt="food banner"
                width={0}
                height={0}
            />
            <div className={classes.foodBannerRightBody}>
                <h4>CRISPY, EVERY BITE TASTE</h4>
                <h2>SUPER DELICIOUS</h2>
            </div>
            <div className={classes.foodBannerRightImg}>
                <Image src={FoodImg} alt="food" width={0} height={0} />
            </div>
        </div>
    );
}
