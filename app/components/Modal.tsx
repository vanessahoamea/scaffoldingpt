"use client";

import { Dispatch, KeyboardEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";

interface ImageData
{
    id: number,
    url: string,
    description: string
};
interface ModalProps
{
    image: ImageData | null,
    changeImageClick: (direction: number) => void,
    changeImageKeydown: (e: KeyboardEvent) => void,
    setSelectedImage: Dispatch<SetStateAction<ImageData | null>>
};
export default function Modal(props: ModalProps)
{
    const [focusedElement, setFocusedElement] = useState(-1);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // switch focus to the modal when the component mounts
        if(props.image !== null && focusedElement === -1)
            modalRef.current!.focus();
        // remove focus from the modal when it unmounts
        else if(props.image === null)
            setFocusedElement(-1);
    }, [props.image]);

    function handleKeydown(e: KeyboardEvent): void
    {
        const focusable = modalRef.current?.querySelectorAll("button") ?? [];
        let newIndex = 0;

        switch(e.key)
        {
            case "Tab":
                e.preventDefault();
                if(!e.shiftKey)
                    newIndex = focusedElement + 1 < focusable.length ? focusedElement + 1 : 0;
                else
                    newIndex = focusedElement - 1 >= 0 ? focusedElement - 1 : focusable.length - 1;
                setFocusedElement(newIndex);
                focusable[newIndex]?.focus();
                break;
            default:
                props.changeImageKeydown(e);
        }
    }

    if(props.image === null)
        return <></>;
    
    return (
        <div
            className="w-full h-full fixed left-0 top-0 z-10 overflow-hidden bg-black bg-opacity-70"
            ref={modalRef}
            role="dialog"
            tabIndex={0}
            aria-modal={true}
            onKeyDown={handleKeydown}
        >
            <button
                className="absolute top-0 right-0 mr-8 mt-4 px-2 py-0.5 text-right"
                aria-label="Închide"
                onClick={() => props.setSelectedImage(null)}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <button
                className="absolute top-1/2 left-0 -translate-y-1/2 mx-8 p-4"
                aria-label="Înapoi"
                onClick={() => props.changeImageClick(-1)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                className="absolute top-1/2 right-0 -translate-y-1/2 mx-8 p-4"
                aria-label="Înainte"
                onClick={() => props.changeImageClick(1)}
            >
                <FontAwesomeIcon icon={faChevronRight} />
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