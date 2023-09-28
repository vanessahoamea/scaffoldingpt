import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Navbar()
{
    return (
        <nav className="bg-gray-100 mx-auto">
            <div className="p-4">
                <div className="px-8 py-4 flex justify-between items-center">
                    <h2 className="font-bold text-primary text-2xl">Scaffolding</h2>

                    <div className="web-menu">
                        <Link className="web-menu-link" href="/">Acasă</Link>
                        <Link className="web-menu-link" href="/about">Despre noi</Link>
                        <Link className="web-menu-link" href="/services">Servicii</Link>
                        <Link className="web-menu-link" href="/contact">Contact</Link>
                        <a 
                            className="social-media-link"
                            href="https://www.facebook.com/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                    </div>

                    <div className="md:hidden">
                        <HamburgerMenu />
                    </div>
                </div>
            </div>

            <div className="mobile-menu md:hidden">
                <Link href="/">Acasă</Link>
                <Link href="/about">Despre noi</Link>
                <Link href="/services">Servicii</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}