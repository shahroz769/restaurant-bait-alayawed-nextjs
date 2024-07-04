"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "@/components/css/navbarMenu.module.css";

export default function NavbarMenu() {
    const [showMenuDropdown, setShowMenuDropdown] = useState(false);

    return (
        <div
            onMouseEnter={() => setShowMenuDropdown(true)}
            onMouseLeave={() => setShowMenuDropdown(false)}
            className={styles.navMenuDropDownContainer}
        >
            <p className={styles.navMenu}>MENU</p>
            {showMenuDropdown && (
                <div className={styles.navMenuDropDown}>
                    <Link
                        className={styles.navMenuLink}
                        href="/restaurant-menu"
                        onClick={() => setShowMenuDropdown(false)}
                    >
                        RESTAURANT MENU
                    </Link>
                    <Link
                        className={styles.navMenuLink}
                        href="/dine-in-menu"
                        onClick={() => setShowMenuDropdown(false)}
                    >
                        CATERING MENU
                    </Link>
                </div>
            )}
        </div>
    );
}
