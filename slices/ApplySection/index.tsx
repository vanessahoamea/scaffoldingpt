import Link from "next/link";
import ApplyForm from "@/components/ApplyForm";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { renderLink } from "@/utils/helpers";

/**
 * Props for `ApplySection`.
 */
export type ApplySectionProps = SliceComponentProps<Content.ApplySectionSlice>;

/**
 * Component for "ApplySection" Slices.
 */
const ApplySection = ({ slice }: ApplySectionProps): JSX.Element => {
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
      <ApplyForm />
    </section>
  );
};

export default ApplySection;
