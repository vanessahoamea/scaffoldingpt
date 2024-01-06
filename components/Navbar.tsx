import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

export default async function Navbar()
{
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <header className="bg-white mx-auto">
            <nav className="px-8 py-3 flex justify-between items-center">
                <Link href="/">
                    <Image
                        src={settings.data.site_logo.url ?? "/logo.png"}
                        width={80}
                        height={80}
                        alt="Site logo"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-5">
                    {
                        settings.data.header_links.map((item, index) => (
                            <PrismicNextLink key={index} field={item.link} className="web-menu-link">{item.text}</PrismicNextLink>
                        ))
                    }
                    <div role="group">
                        <PrismicNextLink field={settings.data.facebook_link} title="Facebook" className="social-media-link">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </PrismicNextLink>
                        <PrismicNextLink field={settings.data.whatsapp_link} title="WhatsApp" className="social-media-link">
                            <FontAwesomeIcon icon={faWhatsappSquare} />
                        </PrismicNextLink>
                    </div>
                </div>

                <div className="md:hidden">
                    <HamburgerMenu />
                </div>
            </nav>

            <nav className="mobile-menu hidden md:hidden">
            {
                settings.data.header_links.map((item, index) => (
                    <PrismicNextLink key={index} field={item.link}>{item.text}</PrismicNextLink>
                ))
            }
            </nav>
        </header>
    );
}