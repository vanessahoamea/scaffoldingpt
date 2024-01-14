"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

interface ToastProps
{
    type: "success" | "error"
    message: string,
    close: () => void
};
export default function Toast(props: ToastProps)
{
    return (
        <motion.output
            key="toast"
            className={clsx("flex justify-between items-center gap-4 w-full xs:w-[360px] min-h-[50px] p-3 text-white rounded-md shadow-md", props.type === "success" ? "bg-green-500" : "bg-red-500")}
            initial="hidden"
            whileInView="visible"
            exit="closed"
            variants={{
                hidden: { x: "100%" },
                visible: { x: 0, transition: { duration: 0.3 } },
                closed: { x: "100%", transition: { duration: 0.3} }
            }}
        >
            <p role="status">{props.message}</p>
            <button aria-label="Închide" onClick={() => props.close()}>
                <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
        </motion.output>
    );
}