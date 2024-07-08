import Link from "next/link";
import classes from "@/components/Footer/footer.module.css";
import pangaiaBold from "@/barlowCondened";

const quickLinks = [
    { href: "#", label: "Services" },
    { href: "#", label: "About Company" },
    { href: "#", label: "Latest News" },
    { href: "#", label: "Team Member" },
    { href: "#", label: "Testimonials" },
];

const accountLinks = [
    { href: "#", label: "My Profile" },
    { href: "#", label: "My Order History" },
    { href: "#", label: "My Wish List" },
    { href: "#", label: "Order Tracking" },
    { href: "#", label: "Shopping Cart" },
];

export default function Footer() {
    return (
        <footer className={`${pangaiaBold.className} ${classes.footer}`}>
            <div className={classes.column}>
                <h2 className={classes.logo}>FOODKING</h2>
                <p className={classes.description}>
                    We believe it has the power to do amazing things.
                </p>
                <p className={classes.inquiry}>
                    Interested in working with us?
                </p>
                <a href="mailto:info@example.com" className={classes.email}>
                    info@example.com
                </a>
            </div>
            <div className={classes.column}>
                <h3 className={classes.heading}>Quick Links</h3>
                <ul className={classes.links}>
                    {quickLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classes.column}>
                <h3 className={classes.heading}>My Account</h3>
                <ul className={classes.links}>
                    {accountLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classes.column}>
                <h3 className={classes.heading}>Address</h3>
                <p>
                    570 8th Ave, New York,
                    <br />
                    10018 United States
                </p>
                <h3 className={`${classes.hoursHead} ${classes.heading}`}>Hours:</h3>
                <p>9.30am – 6.30pm</p>
                <p>Monday To Friday</p>
            </div>
        </footer>
    );
}
