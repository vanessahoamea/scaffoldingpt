"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import type { ImageData } from "@/utils/types";

interface GalleryProps
{
    data: ImageData[]
};
export default function Gallery(props: GalleryProps)
{
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [lastClicked, setLastClicked] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // hide background content and remember the last focused element when opening the modal
        if(selectedImage !== null && lastClicked === null)
        {
            const div = document.querySelector<HTMLDivElement>("div[aria-selected='true']");
            setLastClicked(div);
            toggleBackground("hide");
        }
        // make the main content accessible again after closing the modal
        else if(selectedImage === null)
        {
            lastClicked?.focus();
            setLastClicked(null);
            toggleBackground("show")
        }
    }, [selectedImage, lastClicked]);

    function toggleBackground(action: "hide" | "show"): void
    {
        const elements = document.querySelectorAll("header, footer, main > div, main > section > *:not(.portfolio), .gallery-container");

        if(action === "hide")
            elements.forEach((element) => element.setAttribute("aria-hidden", "true"));
        else
            elements.forEach((element) => element.removeAttribute("aria-hidden"));
    }

    function changeImageClick(direction: number): void
    {
        const newIndex = selectedImage! + direction;

        if(newIndex >= 0 && newIndex < props.data.length)
            setSelectedImage(newIndex);
        else if(newIndex < 0)
            setSelectedImage(props.data.length - 1);
        else
            setSelectedImage(0);
    }

    function changeImageKeydown(e: KeyboardEvent): void
    {
        let newIndex = 0;

        switch(e.key)
        {
            case "ArrowLeft":
                newIndex = selectedImage! - 1 >= 0 ? selectedImage! - 1 : props.data.length - 1;
                setSelectedImage(newIndex);
                break;
            case "ArrowRight":
                newIndex = selectedImage! + 1 < props.data.length ? selectedImage! + 1 : 0;
                setSelectedImage(newIndex);
                break;
            case "Escape":
                setSelectedImage(null);
                break;
            default:
                break;
        }
    }

    return (
        <div className="flex justify-center flex-wrap gap-1">
        {
            props.data.map((image: ImageData, index) => (
                <div
                    key={index}
                    className="gallery-container"
                    tabIndex={0}
                    aria-selected={selectedImage === index}
                    onClick={() => setSelectedImage(index)}
                    onKeyDown={(e) => { if(e.key === "Enter") setSelectedImage(index) }}
                >
                    <Image
                        src={image.url ?? ""}
                        alt={image.description ?? ""}
                        width={500}
                        height={500}
                        className="w-full aspect-square object-cover transition-[filter] duration-200 ease-in"
                    />
                </div>
            ))
        }
        <Modal
            image={selectedImage !== null ? props.data[selectedImage] : null}
            changeImageClick={changeImageClick}
            changeImageKeydown={changeImageKeydown}
            setSelectedImage={setSelectedImage}
        />
        </div>
    );
}