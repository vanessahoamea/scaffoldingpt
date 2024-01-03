import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { renderLink } from "@/utils/helpers";

/**
 * Props for `JobDetailsSection`.
 */
export type JobDetailsSectionProps =
  SliceComponentProps<Content.JobDetailsSectionSlice>;

/**
 * Component for "JobDetailsSection" Slices.
 */
const JobDetailsSection = ({ slice }: JobDetailsSectionProps): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 md:px-16 md:pt-20" role="group">
      <section className="basis-1/2 px-8 pt-20 md:p-0">
        <h2 className="text-primary text-3xl font-bold">{slice.primary.job_description_title}</h2>
        <PrismicRichText field={slice.primary.job_description_content} components={{
          hyperlink: ({ node, children }) => {
            const linkData = renderLink(node);
            return linkData.type === "internal" ? (
              <Link href={linkData.path} className="font-bold text-primary">{children}</Link>
            ) : (
              <a href={linkData.path} className="font-bold text-primary">{children}</a>
            );
          },
          list: ({ children }) => <ul className="custom-list mt-2">{children}</ul>,
          oList: ({ children }) => <ol className="custom-list mt-2">{children}</ol>,
          paragraph: ({ children }) => <p className="mt-2">{children}</p>
        }} />
      </section>

      <section className="basis-1/2 px-8 pt-20 md:p-0">
        <h2 className="text-primary text-3xl font-bold">{slice.primary.job_requirements_title}</h2>
        <PrismicRichText field={slice.primary.job_requirements_content} components={{
          hyperlink: ({ node, children }) => {
            const linkData = renderLink(node);
            return linkData.type === "internal" ? (
              <Link href={linkData.path} className="font-bold text-primary">{children}</Link>
            ) : (
              <a href={linkData.path} className="font-bold text-primary">{children}</a>
            );
          },
          list: ({ children }) => <ul className="custom-list mt-2">{children}</ul>,
          oList: ({ children }) => <ol className="custom-list mt-2">{children}</ol>,
          paragraph: ({ children }) => <p className="mt-2">{children}</p>
        }} />
      </section>
    </div>
  );
};

export default JobDetailsSection;
