"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Toast from "@/components/Toast";
import { AnimatePresence } from "framer-motion";
import type { ToastData } from "@/utils/types";

interface ToastContainerProps
{
    toast: ToastData | null,
    close: () => void
}
export default function ToastContainer(props: ToastContainerProps)
{
    const ref = useRef<HTMLElement>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.getElementById("toast-section")!;
        setMounted(true);
    }, []);

    return (
        <>
        {
            mounted
            ? createPortal(
                <AnimatePresence>
                    {props.toast && <Toast {...props.toast} close={props.close} />}
                </AnimatePresence>,
                document.getElementById("toast-section")!
            )
            : null
        }
        </>
    );
}