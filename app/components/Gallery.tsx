"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import Modal from "./Modal";

interface ImageData
{
    id: number,
    url: string,
    description: string
};
interface GalleryProps
{
    data: ImageData[]
};
export default function Gallery(props: GalleryProps)
{
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
    const [lastClicked, setLastClicked] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if(lastClicked === null)
        {
            const div = document.querySelector("div[aria-selected='true']");
            setLastClicked(div as HTMLElement);
        }
        if(selectedImage === null)
        {
            lastClicked?.focus();
            setLastClicked(null);
        }
    }, [selectedImage]);

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