import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <div className="h-72 sm:h-64 relative overflow-hidden bg-primary text-white text-center">
      <Image
        src={slice.primary.image.url ?? "/cta.jpg"}
        width={0}
        height={288}
        alt=""
        className="w-full sm:h-64 object-cover brightness-45 select-none pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="w-screen px-8 text-xl md:text-3xl font-bold">{slice.primary.title}</h1>
        <p className="mt-2 px-8 sm:px-16">{slice.primary.description}</p>
        <div className="mt-5">
            <PrimaryButton text={slice.primary.button_text} path="/contact" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
