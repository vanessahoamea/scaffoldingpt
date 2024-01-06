import Image from "next/image";
import type { KeyTextField } from "@prismicio/client";

interface CardProps
{
    image: string,
    title: KeyTextField | undefined,
    content: KeyTextField | undefined
};
export default function Card(props: CardProps)
{
    return (
        <div className="basis-1/3 text-center">
            <Image
                src={props.image}
                alt=""
                width={640}
                height={360}
                className="aspect-video object-cover"
            />
            <h3 className="text-primary text-xl font-semibold mt-2">{props.title}</h3>
            <p className="mt-2">{props.content}</p>
        </div>
    );
}