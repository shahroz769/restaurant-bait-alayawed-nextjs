import classes from "@/components/OrderBanner/orderBannerContainer.module.css";
import OrderFood from "./OrderFood";
import Burger from "@/assets/orderFood/burger.png";
import barlowCondensed from "@/barlowCondened";

export default function OrderBannercontainer() {
    return (
        <div
            className={`${barlowCondensed.className} ${classes.orderFoodBanner}`}
        >
            <OrderFood src={Burger} alt="burger" />
            <OrderFood src={Burger} alt="burger" />
        </div>
    );
}
