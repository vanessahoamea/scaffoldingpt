"use client";

import { useId, useState } from "react";
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
    const itemId = useId();
    
    return (
        <div className="mb-3 last:mb-0">
            <button
                id={`accordion-button-${itemId}`}
                className="w-full p-4 bg-gray-200 text-xl text-primary font-semibold rounded-lg shadow-md flex justify-between items-center"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${itemId}`}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
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
                    id={`accordion-content-${itemId}`}
                    className="border-l-2 border-l-primary mx-2 px-4"
                    role="region"
                    aria-hidden={!isOpen}
                    aria-labelledby={`accordion-button-${itemId}`}
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