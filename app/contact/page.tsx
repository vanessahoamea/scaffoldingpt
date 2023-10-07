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
                    alt="Site banner"
                    className="w-full h-40 object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="py-32 text-center text-3xl font-bold">Contact</h1>
                </div>
            </div>

            <section className="px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Luați legătura cu noi</h2>
                <div className="my-2 flex flex-col gap-1 md:flex-row">
                    <ContactDetails icon={faLocationDot} text="Sediu">
                        <>
                            <p>II Nistor C Victor</p>
                            <p>Bogonos, 707281, Iași</p>
                        </>
                    </ContactDetails>
                    <ContactDetails icon={faEnvelope} text="E-mail">
                        scaffoldingpt@gmail.com
                    </ContactDetails>
                    <ContactDetails icon={faPhone} text="Telefon">
                        <>
                            <p>Mobil: +40 (742) 337 996</p>
                            <p>WhatsApp: +40 (766) 453 808</p>
                        </>
                    </ContactDetails>
                </div>
            </section>

            <section className="px-16 pt-20 pb-20 flex flex-col gap-5 md:flex-row md:gap-12">
                <div className="basis-1/2">
                    <h2 className="text-primary text-3xl font-bold">Trimiteți-ne un mesaj</h2>
                    <p className="my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt quam vitae similique in nam nostrum nobis, velit sunt quas culpa error fuga facere fugiat!</p>
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