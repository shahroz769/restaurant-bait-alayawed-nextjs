import classes from "@/components/css/marqueeBody.module.css";
import Image from "next/image";
import Burger from "@/assets/marquee/burger.png";
import Pizza from "@/assets/marquee/pizza.png";

export default function MarqueeBody() {
    return (
        <ul className={classes.marqueeContent}>
            <li className={classes.burger}>
                <h1 className={classes.text}>POPULAR DISHES</h1>
                <Image
                    className={classes.icon}
                    src={Burger}
                    alt="burger"
                    width={0}
                    height={0}
                    quality={75}
                />
            </li>
            <li className={classes.pizza}>
                <h1 className={classes.text}>DELICIOUS FOOD</h1>
                <Image
                    className={classes.icon}
                    src={Pizza}
                    alt="pizza"
                    width={0}
                    height={0}
                    quality={75}
                />
            </li>
        </ul>
    );
}
