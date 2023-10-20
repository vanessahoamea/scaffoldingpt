interface AboutData
{
    id: number,
    title: string,
    content: string
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

export type { AboutData, ImageData, ServiceData };