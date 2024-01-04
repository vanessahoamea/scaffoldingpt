import { KeyTextField, NumberField, RichTextField } from "@prismicio/client";

interface AboutData
{
    title: KeyTextField | undefined,
    content: KeyTextField | undefined
};

interface ApplyInputs
{
    name: string,
    surname: string,
    phone: string,
    email: string,
    comments: string
}

interface ContactInputs
{
    name: string,
    phone: string,
    email: string,
    height: string,
    place: string,
    subject: string,
    message: string
};

interface ImageData
{
    url: string | null | undefined,
    description: string | null | undefined
};

interface ReviewData
{
    name: KeyTextField | undefined,
    job_title: KeyTextField | undefined,
    rating: NumberField | undefined,
    content: RichTextField | undefined
}

export type { AboutData, ApplyInputs, ContactInputs, ImageData, ReviewData };