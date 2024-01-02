import ContactDetails from "@/components/ContactDetails";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactUsSection`.
 */
export type ContactUsSectionProps =
  SliceComponentProps<Content.ContactUsSectionSlice>;

/**
 * Component for "ContactUsSection" Slices.
 */
const ContactUsSection = ({ slice }: ContactUsSectionProps): JSX.Element => {
  return (
    <section className="px-8 md:px-16 pt-20">
      <h2 className="text-primary text-3xl font-bold">Luați legătura cu noi</h2>
      <div className="my-2 flex flex-col gap-1 md:flex-row">
        <ContactDetails icon={faLocationDot} text="Sediu">
          <PrismicRichText field={slice.primary.address} components={{
            paragraph: ({ children }) => <p className="text-center">{children}</p>
          }} />
        </ContactDetails>
        <ContactDetails icon={faEnvelope} text="E-mail">
          <PrismicRichText field={slice.primary.email} components={{
            paragraph: ({ children }) => <p className="text-center">{children}</p>
          }} />
        </ContactDetails>
        <ContactDetails icon={faPhone} text="Telefon">
          <PrismicRichText field={slice.primary.phone} components={{
            paragraph: ({ children }) => <p className="text-center">{children}</p>
          }} />
        </ContactDetails>
      </div>
    </section>
  );
};

export default ContactUsSection;
