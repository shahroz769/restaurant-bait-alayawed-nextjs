import classes from "@/components/css/todayDeal.module.css";
import Button from "./Button";
import Image from "next/image";
import barlowCondensed from "@/barlowCondened";
import SaveUpto from "@/assets/todayDeal/50percent-off-2.png";
import Fries from "@/assets/todayDeal/patato-shape.png";
import Grilled from "@/assets/todayDeal/grilled.png";
import TodaysBestDeal from "@/assets/todayDeal/pizza-text-2.png";
import Spicy from "@/assets/todayDeal/spicy.png";
import Tomato from "@/assets/todayDeal/tomato-shape-2.png";

export default function todayDeal() {
    return (
        <div
            className={`${barlowCondensed.className} ${classes.todayDealContainer}`}
        >
            <Image
                className={classes.fries}
                src={Fries}
                alt="Fries"
                height={0}
                width={0}
                quality={75}
            />
            <Image
                className={classes.saveUpto}
                src={SaveUpto}
                alt="50% off"
                height={0}
                width={0}
                quality={75}
            />
            <Image
                className={classes.tomato}
                src={Tomato}
                alt="tomatto"
                height={0}
                width={0}
                quality={75}
            />
            <div className={classes.todayDealSubContainer}>
                <div className={classes.todayDealLeft}>
                    <h4>SAVE 20%</h4>
                    <h1>
                        TODAY'S <span>ASTACKIN</span> DAY
                    </h1>
                    <h2>
                        GRILLED <span>CHICKEN</span>{" "}
                        <span className={classes.price}>$59,00</span>
                    </h2>
                    <Button backgroundColor="var(--clr-green)">
                        ORDER NOW
                    </Button>
                </div>
                <div className={classes.todayDealRight}>
                    <Image
                        className={classes.todaysBestDeal}
                        src={TodaysBestDeal}
                        alt="Best Deal of the Day"
                        height={0}
                        width={0}
                        quality={75}
                    />
                    <Image
                        className={classes.grilledImage}
                        src={Grilled}
                        alt="Grilled Chicken"
                        height={0}
                        width={0}
                        quality={75}
                    />
                    <Image
                        className={classes.spicyImg}
                        src={Spicy}
                        alt="Spicy Label"
                        height={0}
                        width={0}
                        quality={75}
                    />
                </div>
            </div>
        </div>
    );
}
