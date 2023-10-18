import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact()
{
    return (
        <main>
            <div className="h-40 relative overflow-hidden text-white text-center">
                <img
                    src="/banner.jpg"
                    alt=""
                    className="w-full h-40 object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="py-32 text-3xl font-bold">Contact</h1>
                </div>
            </div>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Luați legătura cu noi</h2>
                <div className="my-2 flex flex-col gap-1 md:flex-row">
                    <ContactDetails icon={faLocationDot} text="Sediu">
                        <p className="text-center">
                            II Nistor C Victor<br />
                            Bogonos, 707281, Iași
                        </p>
                    </ContactDetails>
                    <ContactDetails icon={faEnvelope} text="E-mail">
                        <p className="text-center">scaffoldingpt@gmail.com</p>
                    </ContactDetails>
                    <ContactDetails icon={faPhone} text="Telefon">
                        <p className="text-center">
                            Mobil: +40 (742) 337 996<br />
                            WhatsApp: +40 (766) 453 808
                        </p>
                    </ContactDetails>
                </div>
            </section>

            <section className="px-8 md:px-16 pt-20 pb-20 flex flex-col gap-5 md:flex-row md:gap-12">
                <div className="basis-1/2">
                    <h2 className="text-primary text-3xl font-bold">Cereți o ofertă personalizată</h2>
                    <p className="mt-2">Suntem aici pentru a vă ajuta să vă concretizați proiectele de construcție și să vă oferim soluții la înălțime. Indicați înălțimea și localizarea lucrării dorite, iar echipa noastră de specialiști vă va contacta în cel mai scurt timp posibil pentru a discuta detaliile și pentru a vă oferi o ofertă adaptată nevoilor dvs.</p>
                </div>
                <ContactForm />
            </section>

            <iframe
                className="w-full h-96"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJkZ3YcWLlykARiipG1MFMNs4&zoom=15&key=${process.env.GOOGLE_MAPS_API_KEY}`}
            />
        </main>
    );
}