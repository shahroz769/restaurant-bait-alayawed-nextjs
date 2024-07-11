"use client";
import { motion } from "framer-motion";
import "./Cursor.css";

const Cursor = ({ position }) => {
    return (
        <motion.li
        style={{listStyleType: "none"}}
            animate={{
                ...position,
            }}
            className="cursor"
        />
    );
};

export default Cursor;
