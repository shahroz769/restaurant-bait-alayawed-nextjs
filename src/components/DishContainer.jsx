import EmblaCarousel from "@/components/EmblaCarousal";
import dishes from "@/dishes";
import classes from "@/components/css/dishContainer.module.css";
import SectionHeader from "./SectionHeader";

const OPTIONS = { align: "start", loop: true };
const DISHES = dishes;

export default function DishContainer() {
    return (
        <div className={classes.dishContainer}>
            <SectionHeader sub="OUR MENU" main="Our Delicious Foods" />
            <EmblaCarousel dishes={DISHES} options={OPTIONS} />
        </div>
    );
}
