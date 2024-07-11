"use client";

import { useRef } from "react";
import "./Tab.css";

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="tab"
        >
            {children}
        </li>
    );
};

export default Tab;
