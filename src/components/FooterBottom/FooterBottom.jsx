import classes from "@/components/FooterBottom/footerBottom.module.css";
import Image from "next/image";
import Cards from "@/assets/footerBottom/card.png";
import pangaiaMedium from "@/pangaiaMedium";

export default function FooterBottom() {
    return (
        <div className={classes.footerBottomContainer}>
            <div className={classes.footerBottom}>
                <p className={pangaiaMedium.className}>
                    © Copyright 2024 Foodking . All Rights Reserved.
                </p>
                <Image src={Cards} alt="Cards" width={0} height={0} />
            </div>
        </div>
    );
}
