"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionItemProps
{
    id: number
    title: string,
    content: string,
    prices: string
};
export default function AccordionItem(props: AccordionItemProps)
{
    const [isOpen, setIsOpen] = useState(false);

    function toggleItem(): void
    {
        setIsOpen((isOpen) => !isOpen);
    }
    
    return (
        <div className="mb-3 last:mb-0">
            <button
                className="w-full bg-gray-200 text-xl text-left text-primary font-semibold focus:outline-none rounded-lg shadow-md p-4 flex justify-between items-center"
                onClick={toggleItem}
            >
                <h3>{props.title}</h3>
                <FontAwesomeIcon icon={isOpen ? faCircleMinus : faCirclePlus} />
            </button>
            <AnimatePresence>
            {
                isOpen &&
                <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        collapsed: { opacity: 0, height: 0 },
                        open: { opacity: 1, height: "auto" }
                    }}
                    transition={{ duration: 0.25 }}
                    className="border-l-2 border-l-primary mx-2 px-4"
                >
                    <h4 className="mt-3 text-primary font-semibold">Descriere</h4>
                    <p>{props.content}</p>

                    <h4 className="mt-3 text-primary font-semibold">Tarife</h4>
                    <p>{props.prices}</p>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    );
}