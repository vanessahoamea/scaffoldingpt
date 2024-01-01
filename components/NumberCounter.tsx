"use client";

import { useEffect, useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { KeyTextField, NumberField } from "@prismicio/client";

interface NumberCounterProps
{
    count: NumberField | undefined,
    text: KeyTextField | undefined,
    icon: IconDefinition,
    unit?: KeyTextField | undefined
};
export default function NumberCounter(props: NumberCounterProps)
{
    const [value, setValue] = useState(0);

    useEffect(() => {
        let duration = Math.floor(2000 / (props.count ?? 1));
        let interval: NodeJS.Timeout;

        if(value < (props.count ?? 1))
        {
            interval = setInterval(() => {
                setValue((value) => value + 1);
            }, duration);
        }
      
        return () => clearInterval(interval);
    }, [value]);

    return (
        <div className="bg-gray-300 w-full h-36 lg:w-36 p-4 flex flex-col justify-around items-center gap-1 rounded-sm">
            <FontAwesomeIcon icon={props.icon} className="text-3xl text-primary" />
            <span data-value={props.count} className="text-center text-3xl font-semibold">{value}{props.unit}</span>
            <span className="text-center text-sm">{props.text}</span>
        </div>
    );
}