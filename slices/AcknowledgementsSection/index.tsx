import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
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
    <section className="px-8 md:px-16 pt-20 pb-20">
      <h2 className="text-primary text-3xl text-center font-bold">{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.content} components={{
        hyperlink: ({ node, children }) => {
          const linkData = renderLink(node);
          return linkData.type === "internal" ? (
            <Link href={linkData.path} className="font-bold text-primary">{children}</Link>
          ) : (
            <a href={linkData.path} className="font-bold text-primary">{children}</a>
          );
        },
        paragraph: ({ children }) => <p className="mt-2 text-center">{children}</p>
      }} />
    </section>
  );
};

export default TextSection;
