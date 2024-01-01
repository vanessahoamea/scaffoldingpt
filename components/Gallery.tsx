"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import Modal from "./Modal";
import type { ImageData } from "@/utils/types";

interface GalleryProps
{
    data: ImageData[]
};
export default function Gallery(props: GalleryProps)
{
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
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
        const newIndex = selectedImage!.id - 1 + direction;

        if(newIndex >= 0 && newIndex < props.data.length)
            setSelectedImage(props.data[newIndex]);
        else if(newIndex < 0)
            setSelectedImage(props.data[props.data.length - 1]);
        else
            setSelectedImage(props.data[0]);
    }

    function changeImageKeydown(e: KeyboardEvent): void
    {
        let newIndex = 0;

        switch(e.key)
        {
            case "ArrowLeft":
                newIndex = selectedImage!.id - 2 >= 0 ? selectedImage!.id - 2 : props.data.length - 1;
                setSelectedImage(props.data[newIndex]);
                break;
            case "ArrowRight":
                newIndex = selectedImage!.id < props.data.length ? selectedImage!.id : 0;
                setSelectedImage(props.data[newIndex]);
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
            props.data.map((image: ImageData) => (
                <div
                    key={image.id}
                    className="gallery-container"
                    tabIndex={0}
                    aria-selected={selectedImage?.id === image.id}
                    onClick={() => setSelectedImage(image)}
                    onKeyDown={(e) => { if(e.key === "Enter") setSelectedImage(image) }}
                >
                    <img
                        src={image.url}
                        alt={image.description}
                        className="w-full aspect-square object-cover transition-[filter] duration-200 ease-in"
                    />
                </div>
            ))
        }
        <Modal
            image={selectedImage}
            changeImageClick={changeImageClick}
            changeImageKeydown={changeImageKeydown}
            setSelectedImage={setSelectedImage}
        />
        </div>
    );
}