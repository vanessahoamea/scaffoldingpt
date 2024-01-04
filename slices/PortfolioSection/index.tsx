import Link from "next/link";
import Gallery from "@/components/Gallery";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { renderLink } from "@/utils/helpers";

/**
 * Props for `PortfolioSection`.
 */
export type PortfolioSectionProps =
  SliceComponentProps<Content.PortfolioSectionSlice>;

/**
 * Component for "PortfolioSection" Slices.
 */
const PortfolioSection = async ({ slice }: PortfolioSectionProps): Promise<JSX.Element> => {
  const client = createClient();
  const images = await Promise.all(
    slice.items.map((item) =>
    {
      if(isFilled.contentRelationship(item.image) && item.image.uid)
        return client.getByUID("portfolio_image", item.image.uid);
    })
  );

  return (
    <section className="px-8 md:px-16 pt-20 pb-20">
      <h2 className="text-primary text-3xl font-bold">{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.content} components={{
        hyperlink: ({ node, children }) => {
          const linkData = renderLink(node);
          return linkData.type === "internal" ? (
            <Link href={linkData.path} className="font-semibold text-primary">{children}</Link>
          ) : (
            <a href={linkData.path} className="font-semibold text-primary">{children}</a>
          );
        },
        paragraph: ({ children }) => <p className="mt-2">{children}</p>
      }} />
      <div className="mt-2 portfolio">
        <Gallery data={images.map((item) => ({
          url: item?.data.image.url,
          description: item?.data.image.alt
        }))} />
      </div>
    </section>
  );
};

export default PortfolioSection;
