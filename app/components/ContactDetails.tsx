import { JSX } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactDetailsProps
{
    icon: IconDefinition,
    text: string,
    children: JSX.Element
}
export default function ContactDetails(props: ContactDetailsProps)
{
    return (
        <div className="p-4 bg-gray-200 flex-1 flex flex-col items-center rounded">
            <FontAwesomeIcon icon={props.icon} className="text-3xl text-primary" />
            <h3 className="mt-1 text-xl text-primary font-bold uppercase">{props.text}</h3>
            <div className="h-full mt-2 flex flex-col justify-center">{props.children}</div>
        </div>
    );
}