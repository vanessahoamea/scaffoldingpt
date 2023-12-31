import Image from "next/image";
import Link from "next/link";
import SlidingSection from "@/components/SlidingSection";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { renderLink } from "@/utils/helpers";

/**
 * Props for `WhatWeDoSection`.
 */
export type WhatWeDoSectionProps =
  SliceComponentProps<Content.WhatWeDoSectionSlice>;

/**
 * Component for "WhatWeDoSection" Slices.
 */
const WhatWeDoSection = ({ slice }: WhatWeDoSectionProps): JSX.Element => {
  return (
    <SlidingSection startPosition={250} className="grid grid-cols-1 lg:grid-cols-expand-right gap-10 items-center">
      <div>
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
      </div>
      <div className="w-fit mx-auto lg:-order-1 relative double-borders">
        <Image
          src={slice.primary.image.url ?? "/main.png"}
          alt="Informații de contact"
          width={500}
          height={500}
        />
      </div>
    </SlidingSection>
  );
};

export default WhatWeDoSection;
