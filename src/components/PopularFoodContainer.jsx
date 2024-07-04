import PopularFoodCardsWrapper from "@/components/PopularFoodCardsWrapper";
import SectionHeader from "@/components/SectionHeader";
import classes from "@/components/css/popularFoodContainer.module.css";

export default function PopularFoodContainer() {
    return (
        <div className={classes.popularFoodContainer}>
            <SectionHeader
                sub="CRISPY, EVERY BITE TASTE"
                main="POPULAR FOOD ITEMS"
            />
            <PopularFoodCardsWrapper />
        </div>
    );
}
