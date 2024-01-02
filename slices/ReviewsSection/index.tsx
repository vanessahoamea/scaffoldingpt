import ReviewSwiper from "@/components/ReviewSwiper";
import SlidingSection from "@/components/SlidingSection";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ReviewsSection`.
 */
export type ReviewsSectionProps =
  SliceComponentProps<Content.ReviewsSectionSlice>;

/**
 * Component for "ReviewsSection" Slices.
 */
const ReviewsSection = async ({ slice }: ReviewsSectionProps): Promise<JSX.Element> => {
  const client = createClient();
  const reviews = await Promise.all(
    slice.items.map((item) => {
      if(isFilled.contentRelationship(item.review) && item.review.uid)
        return client.getByUID("review", item.review.uid);
    })
  );

  return (
    <SlidingSection startPosition={-250} className="pb-20">
      <h2 className="text-primary text-3xl font-bold">Ce spun clienții noștri</h2>
      <div className="mt-2">
        <ReviewSwiper data={reviews.map((item) => ({
          name: item?.data.name,
          job_title: item?.data.job_title,
          rating: item?.data.rating,
          content: item?.data.content
        }))} />
      </div>
    </SlidingSection>
  );
};

export default ReviewsSection;
