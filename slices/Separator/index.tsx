import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Separator`.
 */
export type SeparatorProps = SliceComponentProps<Content.SeparatorSlice>;

/**
 * Component for "Separator" Slices.
 */
const Separator = ({ slice }: SeparatorProps): JSX.Element => {
  return (
    <hr className="border-hr border-primary w-1/3 mx-auto" />
  );
};

export default Separator;
