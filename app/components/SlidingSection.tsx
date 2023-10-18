"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlidingSectionProps
{
    startPosition: number,
    isLast: boolean,
    children: ReactNode
};
export default function SlidingSection(props: SlidingSectionProps)
{
    const classes = ["px-8", "sm:px-16", "pt-20"];
    if(props.isLast)
        classes.push("pb-20");

    return (
        <motion.section
            className={classes.join(" ")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, x: props.startPosition },
                visible: { opacity: 1, x: 0, transition: { duration: 1 } }
            }}
        >
            {props.children}
        </motion.section>
    );
}