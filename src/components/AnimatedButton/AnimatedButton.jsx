"use client";
import React from "react";
import { useEffect, useRef } from "react";
import classes from "@/components/AnimatedButton/animatedButton.module.css";
import gsap from "gsap";

export default function index({
    children,
    backgroundColor = "#455CE9",
    ...attributes
}) {
    const circle = useRef(null);
    let timeline = useRef(null);
    let timeoutId = null;
    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(
                circle.current,
                {
                    width: "250px",
                    height: "250px",
                    duration: 0.5,
                    ease: "power3.in",
                },
                "enter"
            )
            .to(
                circle.current,
                {
                    width: "0%",
                    height: "0%",
                    duration: 0.3,
                },
                "exit"
            );
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current.tweenFromTo("enter", "exit");
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current.play();
        }, 300);
    };

    return (
        <div
            className={classes.Button}
            style={{ overflow: "hidden" }}
            onMouseEnter={() => {
                manageMouseEnter();
            }}
            onMouseLeave={() => {
                manageMouseLeave();
            }}
            {...attributes}
        >
            {children}
            <div
                ref={circle}
                style={{ backgroundColor }}
                className={classes.circle}
            ></div>
        </div>
    );
}
