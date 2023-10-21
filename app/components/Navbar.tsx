import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar()
{
    return (
        <header className="bg-white mx-auto">
            <nav className="px-8 py-3 flex justify-between items-center">
                <Link href="/">
                    <img src="/logo.png" alt="Site logo" className="w-20" />
                </Link>

                <div className="hidden md:flex items-center gap-5">
                    <Link className="web-menu-link" href="/">Acasă</Link>
                    <Link className="web-menu-link" href="/about">Despre noi</Link>
                    <Link className="web-menu-link" href="/services">Servicii</Link>
                    <Link className="web-menu-link" href="/hiring">Angajări</Link>
                    <Link className="web-menu-link" href="/contact">Contact</Link>
                    <div>
                        <a
                            title="Facebook"
                            className="social-media-link"
                            href="https://www.facebook.com/scaffolding.professionalteam"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a
                            title="WhatsApp"
                            className="social-media-link"
                            href="https://wa.me/40766453808"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faWhatsappSquare} />
                        </a>
                    </div>
                </div>

                <div className="md:hidden">
                    <HamburgerMenu />
                </div>
            </nav>

            <nav className="mobile-menu hidden md:hidden">
                <Link href="/">Acasă</Link>
                <Link href="/about">Despre noi</Link>
                <Link href="/services">Servicii</Link>
                <Link href="/hiring">Angajări</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}