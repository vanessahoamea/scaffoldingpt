import Link from "next/link";
import NumberCounter from "@/components/NumberCounter";
import SlidingSection from "@/components/SlidingSection";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { faCalendarDays, faSquareCheck, faLandmark } from "@fortawesome/free-solid-svg-icons";
import { renderLink } from "@/utils/helpers";

/**
 * Props for `AboutUsSection`.
 */
export type AboutUsSectionProps =
  SliceComponentProps<Content.AboutUsSectionSlice>;

/**
 * Component for "AboutUsSection" Slices.
 */
const AboutUsSection = async ({ slice }: AboutUsSectionProps): Promise<JSX.Element> => {
  const client = createClient();
  const counters = await Promise.all(
    slice.items.map((item) => {
      if(isFilled.contentRelationship(item.counter) && item.counter.uid)
        return client.getByUID("counter", item.counter.uid);
    })
  );

  return (
    <SlidingSection startPosition={-250} className="grid grid-cols-1 lg:grid-cols-expand-left gap-10 items-center">
      <div>
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
          paragraph: ({ children }) => (
            <p className="mt-2">{children}</p>
          )
        }} />
      </div>
      <div className="flex justify-center">
        <div className="flex gap-1 relative bg-white double-borders">
        {
          counters.map((item, index) => (
            <NumberCounter
              key={index}
              count={item?.data.count}
              text={item?.data.text}
              icon={(index % 3 === 0) ? faCalendarDays : (index % 3 === 1) ? faSquareCheck : faLandmark}
              unit={item?.data.unit}
            />
          ))
        }
        </div>
      </div>
    </SlidingSection>
  );
};

export default AboutUsSection;
