import styles from "@/components/css/button.module.css";
import barlowCondensed from "@/barlowCondened";

export default function Button({ children, backgroundColor, color }) {
    return (
        <button
            className={`${barlowCondensed.className} ${styles.button}`}
            style={{
                backgroundColor: backgroundColor
                    ? backgroundColor
                    : "var(--clr-black)",
                color: color ? color : "var(--clr-full-white)",
            }}
        >
            {children || "Click Here"}
        </button>
    );
}
