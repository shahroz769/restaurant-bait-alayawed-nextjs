import classes from "@/components/FooterDelivery/footerDelivery.module.css";
import Image from "next/image";
import Background from "@/assets/footerDelivery/bg.jpg";
import DeliveryMan from "@/assets/footerDelivery/delivery-man.png";
import Button from "../Button";
import pangaiaBold from "@/barlowCondened";

export default function FooterDelivery() {
    return (
        <div className={`${pangaiaBold.className} ${classes.footerDelivery}`}>
            <Image
                className={classes.footerDeliveryBg}
                src={Background}
                alt="Background"
                fill
            />
            <div className={classes.footerDeliveryLeft}>
                <h3>CRISPY, EVERY BITE TASTE</h3>
                <h2>
                    30 MINUTES FAST <span>DELIVERY</span> CHALLAGE
                </h2>
                <Button
                    backgroundColor="var(--clr-white)"
                    color="var(--clr-black)"
                >
                    ORDER NOW
                </Button>
            </div>
            <div className={classes.footerDeliveryRight}>
                <Image
                    src={DeliveryMan}
                    alt="Delivey Man"
                    width={0}
                    height={0}
                />
            </div>
        </div>
    );
}
