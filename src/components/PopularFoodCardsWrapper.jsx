import classes from "@/components/css/popularFoodCardsWrapper.module.css";
import PopularFoodCard from "@/components/popularFoodCard";

export default function PopularFoodCardsWrapper() {
    return (
        <div className={classes.popularFoodCardsWrapper}>
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
            <PopularFoodCard />
        </div>
    );
}
