interface ImageLoaderProps
{
    src: string,
    width: number,
    quality?: number
};
export default function prismicLoader({ src, width, quality }: ImageLoaderProps)
{
    return `${src}?w=${width}&q=${quality || 100}`;
}