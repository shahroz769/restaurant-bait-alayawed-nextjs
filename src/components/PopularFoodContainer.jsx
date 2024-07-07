import PopularFoodCardsWrapper from "@/components/PopularFoodCardsWrapper";
import SectionHeader from "@/components/SectionHeader";
import classes from "@/components/css/popularFoodContainer.module.css";
import Button from "./Button";

export default function PopularFoodContainer() {
    return (
        <div className={classes.popularFoodContainer}>
            <SectionHeader
                sub="CRISPY, EVERY BITE TASTE"
                main="POPULAR FOOD ITEMS"
            />
            <PopularFoodCardsWrapper />
            <Button backgroundColor="var(--clr-green)">VIEW MORE</Button>
        </div>
    );
}
