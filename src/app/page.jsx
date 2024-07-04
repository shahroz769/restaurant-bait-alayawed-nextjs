import styles from "./page.module.css";
import ImageSlideshow from "@/components/ImageSlider";
import DishContainer from "@/components/DishContainer";
import TodayDeal from "@/components/TodayDeal";
import Marquee from "@/components/Marquee";
import PopularFoodContainer from "@/components/PopularFoodContainer";

export default function Home() {
    return (
        <>
            <ImageSlideshow />
            <DishContainer />
            <TodayDeal />
            <Marquee />
            <PopularFoodContainer />
        </>
    );
}
