import FoodBannerLeft from "@/components/FoodBanner/FoodBannerLeft";
import classes from "@/components/FoodBanner/foodBannerContainer.module.css";
import FoodBannerRight from "@/components/FoodBanner/FoodBannerRight";

export default function FoodBannerConainer() {
    return (
        <div className={classes.foodBannerContainer}>
            <FoodBannerLeft />
            <FoodBannerRight />
        </div>
    );
}
