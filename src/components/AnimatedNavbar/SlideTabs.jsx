"use client";

import { useState } from "react";
import Tab from "./Tab";
import Cursor from "./Cursor";
import "./SlideTabs.css";

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="slide-tabs"
        >
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Dine-in Menu</Tab>
            <Tab setPosition={setPosition}>Catering Menu</Tab>
            <Tab setPosition={setPosition}>Blog</Tab>
            <Tab setPosition={setPosition}>About Us</Tab>

            <Cursor position={position} />
        </ul>
    );
};

export default SlideTabs;
