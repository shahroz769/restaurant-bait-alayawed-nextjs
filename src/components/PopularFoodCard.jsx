import classes from "@/components/css/popularFoodCard.module.css";
import Image from "next/image";
import barlowCondensed from "@/barlowCondened";
import Burger from "@/assets/popularFoodCard/burger.png";

//

export default function PopularFoodCard() {
    return (
        <div className={`${classes.popularFoodCard}`}>
            <div className={classes.popularFoodCardImgContainer}>
                <Image
                    className={classes}
                    src={Burger}
                    alt="burger"
                    width={0}
                    height={0}
                    quality={75}
                />
            </div>
            <div className={classes.popularFoodCardBody}>
                <h1>Burger Thief</h1>
                <p className={barlowCondensed.className}>
                    Spicy Beef Burger with American cheese...
                </p>
                <div
                    className={`${barlowCondensed.className} ${classes.popularFoodCardFooter}`}
                >
                    <p>PKR 800</p>
                    <p>-10%</p>
                </div>
            </div>
        </div>
    );
}
