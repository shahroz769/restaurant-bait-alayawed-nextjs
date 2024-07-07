import classes from "@/components/AboutOurFood/aboutOurFood.module.css";
import barlowCondensed from "@/barlowCondened";
import Burger from "@/assets/aboutOutFood/burger.png";
import Reputaion from "@/assets/aboutOutFood/reputation.png";
import Quality from "@/assets/aboutOutFood/quality.png";
import Image from "next/image";
import Button from "../Button";

export default function AboutOurFood() {
    return (
        <div className={`${barlowCondensed.className} ${classes.aboutOurFood}`}>
            <div className={classes.aboutOurFoodLeft}>
                <div className={classes.aboutOurFoodImg}>
                    <Image src={Burger} alt="Burger" width={0} height={0} />
                </div>
            </div>
            <div className={classes.aboutOurFoodRight}>
                <div className={classes.aboutOurFoodRightHeader}>
                    <h3>ABOUT OUR FOOD</h3>
                    <h1>
                        WHERE QUALITY MEET EXCELLENT <span>SERVICE.</span>
                    </h1>
                </div>
                <p>
                    It's the perfect dining experience where every dish is
                    crafted with fresh, high-quality Experience quick and
                    efficient service that ensures your food is servead fresh
                    It's the dining experience where every dish is crafted with
                    fresh, high-quality ingredients
                </p>
                <div className={classes.ourQualityWrapper}>
                    <div className={classes.ourQuality}>
                        <div>
                            <Image
                                src={Quality}
                                alt="Quality"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div>
                            <h4>SUPER QUALITY FOOD</h4>
                            <p>
                                A team of dreamers and doers build unique
                                interactive music and art
                            </p>
                        </div>
                    </div>
                    <div className={classes.ourQuality}>
                        <div>
                            <Image
                                src={Reputaion}
                                alt="Reputation"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div>
                            <h4>WELL REPUTATION</h4>
                            <p>
                                A team of dreamers and doers build unique
                                interactive music and art
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.aboutOurFoodFooter}>
                    <Button>MORE ABOUT US</Button>
                    <dir className={classes.aboutOurFoodFooterBody}>
                        <p>BRENDON GARREY</p>
                        <p>CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.</p>
                    </dir>
                </div>
            </div>
        </div>
    );
}
