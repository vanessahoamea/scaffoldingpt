import Tabs from "@/components/Tabs";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutTabs`.
 */
export type AboutTabsProps = SliceComponentProps<Content.AboutTabsSlice>;

/**
 * Component for "AboutTabs" Slices.
 */
const AboutTabs = async ({ slice }: AboutTabsProps): Promise<JSX.Element> => {
  const client = createClient();
  const tabs = await Promise.all(
    slice.items.map((item) => {
      if(isFilled.contentRelationship(item.tab) && item.tab.uid)
        return client.getByUID("tab", item.tab.uid);
    })
  );

  return (
    <section className="px-8 md:px-16 pt-20 pb-20">
      <h2 className="text-primary text-3xl text-center font-bold">Scaffolding Professional Team</h2>
      <div className="mt-2">
        <Tabs data={tabs.map((item) => ({
          title: item?.data.title,
          content: item?.data.content
        }))} />
      </div>
    </section>
  );
};

export default AboutTabs;
