import Card from "@/components/Card";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OurValuesSection`.
 */
export type OurValuesSectionProps =
  SliceComponentProps<Content.OurValuesSectionSlice>;

/**
 * Component for "OurValuesSection" Slices.
 */
const OurValuesSection = async ({ slice }: OurValuesSectionProps): Promise<JSX.Element> => {
  const client = createClient();
  const values = await Promise.all(
    slice.items.map((item) => {
      if(isFilled.contentRelationship(item.value) && item.value.uid)
        return client.getByUID("value", item.value.uid);
    })
  );

  function getPlaceholderImage(index: number): string
  {
    if(index % 3 === 0)
      return "/experience.jpg";
    else if(index % 3 === 1)
      return "/innovation.jpg";
    return "/integrity.jpg";
  }

  return (
    <section className="px-8 md:px-16 pt-20 pb-20">
      <h2 className="text-primary text-3xl text-center font-bold">Valorile noastre</h2>
      <div className="mt-2 flex flex-col gap-10 md:flex-row">
      {
        values.map((item, index) => (
          <Card
            key={index}
            image={item?.data.image.url ?? getPlaceholderImage(index)}
            title={item?.data.title}
            content={item?.data.content}
          />
        ))
      }
      </div>
    </section>
  );
};

export default OurValuesSection;
