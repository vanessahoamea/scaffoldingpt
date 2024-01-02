import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import PrimaryButton from "@/components/PrimaryButton";

/**
 * Props for `SiteBanner`.
 */
export type SiteBannerProps = SliceComponentProps<Content.SiteBannerSlice>;

/**
 * Component for "SiteBanner" Slices.
 */
const SiteBanner = ({ slice }: SiteBannerProps): JSX.Element => {
  return (
    <>
    {
      slice.variation === "homeSiteBanner" ? (
        <div className="h-screen relative overflow-hidden bg-primary text-white text-center">
          <img
            src={slice.primary.image.url ?? "/banner.jpg"}
            alt="Site banner"
            className="w-full h-screen object-cover brightness-45 select-none pointer-events-none"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl font-bold">{slice.primary.title}</h1>
            <p className="mt-5">{slice.primary.description}</p>
            <div className="mt-5">
              <PrimaryButton text={slice.primary.button_text} path="/contact" />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-40 relative overflow-hidden bg-primary text-white text-center">
          <img
            src={slice.primary.image.url ?? "/banner.jpg"}
            alt="Site banner"
            className="w-full h-40 object-cover brightness-45 select-none pointer-events-none"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="py-32 text-3xl font-bold">{slice.primary.title}</h1>
          </div>
        </div>
      )
    }
    </>
  );
};

export default SiteBanner;
