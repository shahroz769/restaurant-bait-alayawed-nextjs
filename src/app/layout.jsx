import "./globals.css";
import { ZCOOL_XiaoWei } from "next/font/google";
import Navbar from "@/components/Navbar";

const zxcoolXiaowei = ZCOOL_XiaoWei({
    weight: "400",
    subsets: ["latin"],
});

export const metadata = {
    title: "Bait Al-Ayawed",
    description: "Bahrain Restaurant",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="preload"
                    href="https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434391/baitalayawed/mezhghedsydnjkmcgxjd.jpg"
                    as="image"
                />
                <link
                    rel="preload"
                    href="https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434391/baitalayawed/xpipiicr0w4pnjjdlu9q.jpg"
                    as="image"
                />
                <link
                    rel="preload"
                    href="https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434391/baitalayawed/umwr9kby5vf5lrlbo9fc.jpg"
                    as="image"
                />
                <link
                    rel="preload"
                    href="https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434391/baitalayawed/hu8mn2zroaxchron2g3p.jpg"
                    as="image"
                />
                <link
                    rel="preload"
                    href="https://res.cloudinary.com/doigzeztt/image/upload/f_avif,q_25/v1720434390/baitalayawed/dqomyzmsxzgvr8erfbbs.jpg"
                    as="image"
                />
            </head>
            <body className={zxcoolXiaowei.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
