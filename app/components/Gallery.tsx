"use client";

import { KeyboardEvent, useState } from "react";
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

    function changeImage(e: KeyboardEvent): void
    {
        let newIndex = 0;

        switch(e.key)
        {
            case "ArrowLeft":
                newIndex = selectedImage!.id - 1 >= 0 ? selectedImage!.id - 1 : props.data.length - 1;
                setSelectedImage(props.data[newIndex]);
                break;
            case "ArrowRight":
                newIndex = selectedImage!.id + 1 < props.data.length ? selectedImage!.id + 1 : 0;
                setSelectedImage(props.data[newIndex]);
                break;
            default:
                break;
        }
    }

    return (
        <div className="flex flex-wrap gap-1">
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
        {
            selectedImage &&
            <Modal
                image={selectedImage}
                changeImage={changeImage}
                setSelectedImage={setSelectedImage}
            />
        }
        </div>
    );
}