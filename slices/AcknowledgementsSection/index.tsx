import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { renderLink } from "@/utils/helpers";

/**
 * Props for `AcknowledgementsSection`.
 */
export type AcknowledgementsSectionProps =
  SliceComponentProps<Content.AcknowledgementsSectionSlice>;

/**
 * Component for "AcknowledgementsSection" Slices.
 */
const AcknowledgementsSection = ({ slice }: AcknowledgementsSectionProps): JSX.Element => {
  return (
    <section className="px-8 md:px-16 pt-20 pb-20">
      <h2 className="text-primary text-3xl text-center font-bold">{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.content} components={{
        hyperlink: ({ node, children }) => {
          const linkData = renderLink(node);
          return linkData.type === "internal" ? (
            <Link href={linkData.path} className="font-semibold text-primary">{children}</Link>
          ) : (
            <a href={linkData.path} className="font-semibold text-primary">{children}</a>
          );
        },
        paragraph: ({ children }) => <p className="mt-2 text-center">{children}</p>
      }} />
    </section>
  );
};

export default AcknowledgementsSection;
