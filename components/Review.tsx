import { PrismicRichText } from "@prismicio/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import type { KeyTextField, NumberField, RichTextField } from "@prismicio/client";

interface ReviewProps
{
    name: KeyTextField | undefined,
    job_title: KeyTextField | undefined,
    rating: NumberField | undefined,
    content: RichTextField | undefined
};
export default function Review(props: ReviewProps)
{
    return (
        <div className="bg-white border shadow-md rounded-lg p-4 text-center">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl text-primary font-semibold">{props.name}</h3>
                <p className="text-gray-500 italic">{props.job_title}</p>
            </div>

            <div className="mt-4" role="img" aria-label={`${props.rating ?? 5} stele`}>
            {
                [...Array(props.rating ?? 5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-xl text-yellow-400" />
                ))
            }
            </div>

            <PrismicRichText field={props.content} components={{
                paragraph: ({ children }) => (
                    <p className="mt-4">{children}</p>
                )
            }} />
        </div>
    );
}