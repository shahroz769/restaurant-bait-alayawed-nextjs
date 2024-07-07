import classes from "@/components/OrderBanner/orderFood.module.css";
import Button from "@/components/Button";
import Image from "next/image";
import BgImg from "@/assets/orderFood/bg.png";

export default function OrderFood({ src, alt }) {
    return (
        <div className={classes.orderFood}>
            <Image className={classes.orderFoodBgImg} src={BgImg} alt="background" width={0} height={0} />
            <div>
                <h1>TODAY SPECIAL</h1>
                <h2>
                    BEEF <span>BURGER</span>
                </h2>
                <Button backgroundColor="var(--clr-green)">ORDER NOW</Button>
            </div>
            <div className={classes.orderFoodImg}>
                <Image src={src} alt={alt} width={0} height={0} />
            </div>
        </div>
    );
}
