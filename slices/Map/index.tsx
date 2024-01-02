import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Map`.
 */
export type MapProps = SliceComponentProps<Content.MapSlice>;

/**
 * Component for "Map" Slices.
 */
const Map = ({ slice }: MapProps): JSX.Element => {
  return (
    <iframe
      className="w-full h-96"
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:${slice.primary.place_id}&zoom=15&key=${process.env.GOOGLE_MAPS_API_KEY}`}
    />
  );
};

export default Map;
