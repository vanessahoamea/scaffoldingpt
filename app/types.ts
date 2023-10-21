interface AboutData
{
    id: number,
    title: string,
    content: string
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
    id: number,
    url: string,
    description: string
};

interface ServiceData
{
    id: number,
    title: string,
    content: string,
    prices: string
};

export type { AboutData, ApplyInputs, ContactInputs, ImageData, ServiceData };