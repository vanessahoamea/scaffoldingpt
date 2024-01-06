import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { PrismicRichText } from "@prismicio/react";
import { renderLink } from "@/utils/helpers";

export default async function Footer()
{
    const client = createClient();
    const settings = await client.getSingle("settings");
    const year = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-900 text-white">
            <main className="px-8 py-4 flex flex-col items-start justify-start gap-8 md:flex-row md:justify-between md:gap-20">
                <section className="basis-2/4">
                    <div className="flex items-center gap-5">
                        <img src={settings.data.site_logo.url ?? "/logo.png"} alt="Company logo" className="w-20" />
                        <p>{settings.data.site_description}</p>
                    </div>
                    <div className="mt-5 flex justify-between items-center gap-1 flex-wrap">
                        <div className="flex">
                            <PrismicNextLink field={settings.data.facebook_link} title="Facebook" className="social-media-link">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </PrismicNextLink>
                            <PrismicNextLink field={settings.data.whatsapp_link} title="WhatsApp" className="social-media-link">
                                <FontAwesomeIcon icon={faWhatsappSquare} />
                            </PrismicNextLink>
                        </div>
                        <img
                            src="/certification.png"
                            alt="Ministry of Labor and Social Protection logo"
                            className="w-48"
                        />
                    </div>
                </section>
                <section className="basis-1/4 space-y-2">
                    <h2 className="text-xl font-bold text-primary">Detalii contact</h2>
                    <ul>
                    {
                        settings.data.contact_information.map((item, index) => (
                            <li key={index} className="flex flex-col">
                                <PrismicRichText field={item.text} components={{
                                    hyperlink: ({ node, children }) => {
                                        const linkData = renderLink(node);
                                        return linkData.type === "internal" ? (
                                            <Link href={linkData.path}>{children}</Link>
                                        ) : (
                                            <a href={linkData.path}>{children}</a>
                                        );
                                    },
                                    paragraph: ({ children }) => <span>{children}</span>
                                }} />
                            </li>
                        ))
                    }
                    </ul>
                </section>
                <section className="basis-1/4 space-y-2">
                    <h2 className="text-xl font-bold text-primary">Legături utile</h2>
                    <ul>
                    {
                        settings.data.footer_links.map((item, index) => (
                            <li key={index}>
                                <PrismicNextLink field={item.link}>{item.text}</PrismicNextLink>
                            </li>
                        ))
                    }
                    </ul>
                </section>
            </main>

            <hr />

            <section className="p-4 text-center flex flex-wrap justify-center items-center">
                <span>&copy; Copyright {year} {settings.data.site_title}.&nbsp;</span>
                <span>Toate drepturile rezervate.</span>
            </section>
        </footer>
    );
}