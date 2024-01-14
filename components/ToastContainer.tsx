"use client";

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
    return (
        <div className="fixed z-10 top-0 right-0 mt-3 mx-3 xs:ml-0">
            <AnimatePresence>
                {props.toast && <Toast {...props.toast} close={props.close} />}
            </AnimatePresence>
        </div>
    );
}