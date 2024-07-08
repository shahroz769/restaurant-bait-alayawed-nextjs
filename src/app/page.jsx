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
import TextSlider from "@/components/TextSlider";
import FooterDelivery from "@/components/FooterDelivery/FooterDelivery";
import FooterContact from "@/components/FooterContact/FooterContact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <GsapSlider />
            <TextSlider />
            <DishContainer />
            <FoodBannerConainer />
            <TodayDeal />
            <Marquee />
            <PopularFoodContainer />
            <OrderBannercontainer />
            <ChooseUs />
            <AboutOurFood />
            <TestimonialContainer />
            <FooterDelivery />
            <FooterContact />
            <Footer />
        </>
    );
}
