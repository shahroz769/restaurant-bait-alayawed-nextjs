import classes from "@/components/css/marquee.module.css";
import barlowCondensed from "@/barlowCondened";
import MarqueeBody from "./MarqueeBody";

export default function Marquee() {
    return (
        <div
            className={`${barlowCondensed.className} ${classes.marqueeContainer}`}
        >
            <div className={classes.marquee}>
                <MarqueeBody />
                <MarqueeBody />
                <MarqueeBody />
                <MarqueeBody />
            </div>
        </div>
    );
}
