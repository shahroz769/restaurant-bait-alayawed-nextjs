import classes from "@/components/ChooseUs/features.module.css";
import Image from "next/image";

export default function Features({ feature }) {
    return (
        <div className={classes.feature}>
            <div className={classes.featureImg}>
                <Image
                    src={feature.img.src}
                    alt={feature.img.alt}
                    width={0}
                    height={0}
                />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
        </div>
    );
}
