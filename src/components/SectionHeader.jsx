import classes from "@/components/css/sectionHeader.module.css";
import barlowCondensed from "@/barlowCondened";
import pangaiaBold from "@/pangaiaBold";

export default function SectionHeader({ sub, main }) {
    return (
        <div className={classes.sectionHeader}>
            <h3 className={barlowCondensed.className}>{sub}</h3>
            <h1 className={pangaiaBold.className}>{main}</h1>
        </div>
    );
}
