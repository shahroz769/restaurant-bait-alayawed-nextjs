import classes from "@/components/FoodBanner/foodBannerLeft.module.css";
import barlowCondensed from "@/barlowCondened";
import Image from "next/image";
import BackgroundImg from "@/assets/foodBanner/left-bg.png";
import FoodImg from "@/assets/foodBanner/left-food.png";
import OffImg from "@/assets/foodBanner/50percent-off.png";

export default function FoodBannerLeft() {
    return (
        <div
            className={`${barlowCondensed.className} ${classes.foodBannerLeft}`}
        >
            <Image
                className={classes.foodBannerLeftBgImg}
                src={BackgroundImg}
                alt="food banner"
                width={0}
                height={0}
            />
            <div className={classes.foodBannerLeftBody}>
                <h4>CRISPY, EVERY BITE TASTE</h4>
                <h2>SUPER DELICIOUS</h2>
                <Image
                    className={classes.off}
                    src={OffImg}
                    alt="food"
                    width={0}
                    height={0}
                />
            </div>
            <div className={classes.foodBannerLeftImg}>
                <Image src={FoodImg} alt="food" width={0} height={0} />
            </div>
        </div>
    );
}
