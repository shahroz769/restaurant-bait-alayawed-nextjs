import BeefRuti from "@/assets/dishes/beef-ruti.png";
import Burger from "@/assets/dishes/big-burger.png";
import DeliciousBurger from "@/assets/dishes/delicious-burger.png";
import Chicken from "@/assets/dishes/chiken.png";
import FrenchFries from "@/assets/dishes/french-fry.png";
import GrilledChicken from "@/assets/dishes/grilled.png";
import GrilledChicken2 from "@/assets/dishes/grilled-2.png";
import Pasta from "@/assets/dishes/pasta.png";
import Ruti from "@/assets/dishes/ruti.png";

const dishes = [
    {
        category: "BURGER",
        href: "/dine-in-menu/burger",
        image: { src: Burger, alt: "Big Burger" },
        qty: 5,
    },
    {
        category: "BURGER",
        href: "/dine-in-menu/burger",
        image: { src: DeliciousBurger, alt: "Delicious Burger" },
        qty: 3,
    },
    {
        category: "CHICKEN",
        href: "/dine-in-menu/chicken",
        image: { src: Chicken, alt: "Chicken" },
        qty: 7,
    },
    {
        category: "CHICKEN",
        href: "/dine-in-menu/chicken",
        image: { src: GrilledChicken, alt: "Grilled Chicken" },
        qty: 4,
    },
    {
        category: "CHICKEN",
        href: "/dine-in-menu/chicken",
        image: { src: GrilledChicken2, alt: "Grilled Chicken 2" },
        qty: 2,
    },
    {
        category: "SIDE",
        href: "/dine-in-menu/side",
        image: { src: FrenchFries, alt: "French Fries" },
        qty: 10,
    },
    {
        category: "PASTA",
        href: "/dine-in-menu/pasta",
        image: { src: Pasta, alt: "Pasta" },
        qty: 6,
    },
    {
        category: "RUTI",
        href: "/dine-in-menu/ruti",
        image: { src: Ruti, alt: "Ruti" },
        qty: 8,
    },
    {
        category: "RUTI",
        href: "/dine-in-menu/ruti",
        image: { src: BeefRuti, alt: "Beef Ruti" },
        qty: 5,
    },
];

export default dishes;
