"use client";

import { Dispatch, KeyboardEvent, MouseEvent, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ImageData
{
    id: number,
    url: string,
    description: string
};
interface ModalProps
{
    image: ImageData,
    changeImage: (e: KeyboardEvent) => void,
    setSelectedImage: Dispatch<SetStateAction<ImageData | null>>
};
export default function Modal(props: ModalProps)
{
    function closeModal(e: MouseEvent)
    {
        const target = e.target as HTMLElement;

        if(target.tagName === "IMG" || target.tagName === "FIGCAPTION")
            return;
        props.setSelectedImage(null);
    }

    return (
        <div
            className="w-full h-full fixed left-0 top-0 z-10 overflow-hidden bg-black bg-opacity-70"
            role="dialog"
            aria-modal={true}
            onClick={closeModal}
            onKeyDown={props.changeImage}
        >
            <button
                className="absolute top-0 right-0 mr-8 mt-4 text-3xl text-white text-right"
                aria-label="Închide"
                onClick={closeModal}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <figure>
                <img
                    src={props.image.url}
                    alt={props.image.description}
                    className="max-h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <figcaption className="absolute bottom-0 w-full p-2 bg-black bg-opacity-70 text-white text-center font-semibold">
                    {props.image.description}
                </figcaption>
            </figure>
        </div>
    );
}