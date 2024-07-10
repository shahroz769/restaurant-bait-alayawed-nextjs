import styles from "@/components/css/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import barlowCondensed from "@/barlowCondened";
import AlAyawedLogo from "@/assets/Logo.png";
import NavbarMenu from "@/components/NavbarMenu";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import classes from "@/app/page.module.css";

export default function Navbar() {
    return (
        <header className={styles.navHeader}>
            <nav className={`${barlowCondensed.className} ${styles.nav}`}>
                <div className={styles.navLogo}>
                    <Image
                        className={styles.Img}
                        src={AlAyawedLogo}
                        alt="Bait Al Ayawed Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        quality={75}
                        priority
                    />
                </div>
                <div className={styles.navLinksContainer}>
                    <Link className={styles.navLinks} href="/">
                        HOME
                    </Link>
                    <NavbarMenu />
                    <Link className={styles.navLinks} href="/catering">
                        CATERING
                    </Link>
                    <Link className={styles.navLinks} href="/about-us">
                        ABOUT US
                    </Link>
                    <Link className={styles.navLinks} href="/blog">
                        BLOG
                    </Link>
                </div>
                <div style={{position:"relative"}}>
                    <AnimatedButton
                        backgroundColor={"#e68d27"}
                        className={classes.button}
                    >
                        <p>CONTACT US</p>
                    </AnimatedButton>
                </div>
            </nav>
        </header>
    );
}
