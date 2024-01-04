import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { clsx } from "clsx";
import { renderLink } from "@/utils/helpers";

/**
 * Props for `TextSection`.
 */
export type TextSectionProps = SliceComponentProps<Content.TextSectionSlice>;

/**
 * Component for "TextSection" Slices.
 */
const TextSection = ({ slice }: TextSectionProps): JSX.Element => {
  return (
    <section className={clsx("px-8 md:px-16 pt-20", slice.primary.last && "pb-20")}>
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
          list: ({ children }) => <ul className="custom-list mt-2">{children}</ul>,
          oList: ({ children }) => <ol className="custom-list mt-2">{children}</ol>,
          paragraph: ({ children }) => <p className="mt-2">{children}</p>
        }} />
    </section>
  );
};

export default TextSection;
