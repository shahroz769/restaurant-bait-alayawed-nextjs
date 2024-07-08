import DishContainer from "@/components/DishContainer";
import TodayDeal from "@/components/TodayDeal";
import Marquee from "@/components/Marquee";
import PopularFoodContainer from "@/components/PopularFoodContainer";
import FoodBannerConainer from "@/components/FoodBanner/FoodBannerContainer";
import OrderBannercontainer from "@/components/OrderBanner/OrderBannerContainer";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import AboutOurFood from "@/components/AboutOurFood/AboutOurFood";
import TestimonialContainer from "@/components/Testimonial/TestimonialContainer";
import GsapSlider from "@/components/GsapSlider";

export default function Home() {
    return (
        <>
            <GsapSlider />
            <DishContainer />
            <FoodBannerConainer />
            <TodayDeal />
            <Marquee />
            <PopularFoodContainer />
            <OrderBannercontainer />
            <ChooseUs />
            <AboutOurFood />
            <TestimonialContainer />
        </>
    );
}
