import Link from "next/link";
import AccordionItem from "@/components/AccordionItem";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { renderLink } from "@/utils/helpers";

/**
 * Props for `ServicesAndProductsSection`.
 */
export type ServicesAndProductsSectionProps =
  SliceComponentProps<Content.ServicesAndProductsSectionSlice>;

/**
 * Component for "ServicesAndProductsSection" Slices.
 */
const ServicesAndProductsSection = async ({ slice }: ServicesAndProductsSectionProps): Promise<JSX.Element> => {
  const client = createClient();
  const services = await Promise.all(
    slice.items.map((item) =>
    {
      if(isFilled.contentRelationship(item.service) && item.service.uid)
        return client.getByUID("service", item.service.uid);
    })
  );

  return (
    <section className="px-8 md:px-16 pt-20">
      <h2 className="text-primary text-3xl font-bold">{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.top_content} components={{
        hyperlink: ({ node, children }) => {
          const linkData = renderLink(node);
          return linkData.type === "internal" ? (
            <Link href={linkData.path} className="font-bold text-primary">{children}</Link>
          ) : (
            <a href={linkData.path} className="font-bold text-primary">{children}</a>
          );
        },
        paragraph: ({ children }) => <p className="mt-2">{children}</p>
      }} />
      <div className="my-4">
        {
          services.map((item, index) => (
            <AccordionItem
              key={index}
              title={item?.data.title}
              content={item?.data.content}
              prices={item?.data.prices}
            />
          ))
        }
      </div>
      <PrismicRichText field={slice.primary.bottom_content} components={{
        hyperlink: ({ node, children }) => {
          const linkData = renderLink(node);
          return linkData.type === "internal" ? (
            <Link href={linkData.path} className="font-bold text-primary">{children}</Link>
          ) : (
            <a href={linkData.path} className="font-bold text-primary">{children}</a>
          );
        },
        paragraph: ({ children }) => <p className="mt-2">{children}</p>
      }} />
    </section>
  );
};

export default ServicesAndProductsSection;
