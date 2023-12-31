"use client";

import { useRouter } from "next/navigation";
import type { KeyTextField } from "@prismicio/client";

interface PrimaryButtonProps
{
    text: string | KeyTextField,
    path: string
};
export default function PrimaryButton(props: PrimaryButtonProps)
{
    const router = useRouter();
    
    return (
        <button 
            className="bg-transparent hover:bg-primary py-2 px-4 border-2 border-white hover:border-transparent rounded"
            onClick={() => router.push(props.path)}
        >
            {props.text}
        </button>
    );
}