"use client";

import Image from "next/image";
import SlideTabs from "./SlideTabs";
import "./SlideTabsExample.css";
import AlAyawedLogo from "@/assets/Logo.png";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";

export const SlideTabsExample = () => {
    return (
        <div className="slide-tabs-container">
            <div className="logo">
                <Image
                    src={AlAyawedLogo}
                    alt="Bait Al Ayawed Logo"
                    width={155}
                    priority
                />
            </div>
            <SlideTabs />
            <div style={{ position: "relative" }}>
                <AnimatedButton
                    backgroundColor={"#e68d27"}
                    className="animated-button"
                >
                    <p>Contact Us</p>
                </AnimatedButton>
            </div>
        </div>
    );
};

export default SlideTabsExample;
