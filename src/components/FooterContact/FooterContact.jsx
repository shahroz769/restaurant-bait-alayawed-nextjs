import Image from "next/image";
import classes from "@/components/FooterContact/footerContact.module.css";
import Button from "@/components/Button";
import pangaiaBold from "@/barlowCondened";
import Phone from "@/assets/footerContact/phone.png";

export default function FooterContact() {
    return (
        <div className={`${pangaiaBold.className} ${classes.footerContact}`}>
            <div className={classes.footerContactBody}>
                <h3>CRISPY, EVERY BITE TASTE</h3>
                <h1>NEED BOOKING?</h1>
                <h1>RESERVE YOUR TABLE?</h1>
                <div className={classes.footerContactBodyPhone}>
                    <div className={classes.footerContactBodyPhoneImg}>
                        <Image
                            src={Phone}
                            alt="Contact"
                            width={60}
                            height={0}
                        />
                    </div>
                    <div>
                        <h3>24/7 SUPPORT CENTER</h3>
                        <h2>+1718-904-4450</h2>
                    </div>
                </div>
            </div>
            <div className={classes.contactCard}>
                <h2>CREATE A RESERVATION</h2>
                <input type="number" placeholder="No of Person" />
                <input type="number" placeholder="Phone Number" />
                <input type="date" placeholder="Phone Number" />
                <Button>BOOK NOW</Button>
            </div>
        </div>
    );
}
