import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { renderLink } from "@/utils/helpers";

/**
 * Props for `RequestOfferSection`.
 */
export type RequestOfferSectionProps =
  SliceComponentProps<Content.RequestOfferSectionSlice>;

/**
 * Component for "RequestOfferSection" Slices.
 */
const RequestOfferSection = ({
  slice,
}: RequestOfferSectionProps): JSX.Element => {
  return (
    <section className="px-8 md:px-16 pt-20 pb-20 flex flex-col gap-5 md:flex-row md:gap-12">
      <div className="basis-1/2">
        <h2 className="text-primary text-3xl font-bold">{slice.primary.title}</h2>
        <PrismicRichText field={slice.primary.content} components={{
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
      </div>
      <ContactForm />
    </section>
  );
};

export default RequestOfferSection;
