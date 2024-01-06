"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface SlidingSectionProps
{
    startPosition: number,
    className?: string,
    children: ReactNode
};
export default function SlidingSection(props: SlidingSectionProps)
{
    return (
        <motion.section
            className={clsx("px-8 sm:px-16 pt-20", props.className)}
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