"use client";

import { useRouter } from "next/navigation";

interface PrimaryButtonProps {
    text: string,
    path: string
};
export default function PrimaryButton(props: PrimaryButtonProps)
{
    const router = useRouter();
    
    return (
        <button 
            className="mt-5 bg-transparent hover:bg-primary py-2 px-4 border-2 border-white hover:border-transparent rounded"
            onClick={() => router.push(props.path)}
        >
            {props.text}
        </button>
    );
}