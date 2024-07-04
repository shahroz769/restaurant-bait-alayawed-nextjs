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
            <body className={zxcoolXiaowei.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
