import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer()
{
    const year = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-900 text-white">
            <main className="px-8 py-4 flex flex-col items-start justify-start gap-8 md:flex-row md:justify-between md:gap-20">
                <section className="basis-2/4">
                    <div className="flex items-center gap-5">
                        <img src="/logo.png" alt="Company logo" className="w-20" />
                        <p>Scaffolding Professional Team se angajează să ofere servicii de înaltă calitate în domeniul schelelor. Misiunea noastră este să fim lideri în inovație și eficiență.</p>
                    </div>
                    <div className="flex mt-5">
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
                    <img
                        src="/certification.png"
                        alt="Certificat de Ministerul Muncii și Protecției Sociale"
                        className="w-52 mt-5"
                    />
                </section>
                <section className="basis-1/4 space-y-2">
                    <h2 className="text-xl font-bold text-primary">Detalii contact</h2>
                    <ul>
                        <li>
                            II Nistor C Victor<br />
                            Bogonos, 707281, Iași
                        </li>
                        <li><a href="tel:0742337996">+40 (742) 337 996</a></li>
                        <li><a href="mailto:scaffoldingpt@gmail.com">scaffoldingpt@gmail.com</a></li>
                    </ul>
                </section>
                <section className="basis-1/4 space-y-2">
                    <h2 className="text-xl font-bold text-primary">Legături utile</h2>
                    <ul>
                        <li><Link href="/about">Cine suntem</Link></li>
                        <li><Link href="/services">Servicii oferite</Link></li>
                        <li><Link href="/hiring">Oportunități de angajare</Link></li>
                        <li><Link href="/terms-and-conditions">Termeni și condiții</Link></li>
                        <li><Link href="/privacy-policy">Politica de confidențialitate</Link></li>
                    </ul>
                </section>
            </main>

            <hr />

            <section className="p-4 text-center flex flex-wrap justify-center items-center">
                <span>&copy; Copyright {year} Scaffolding Professional Team.&nbsp;</span>
                <span>All Rights Reserved.</span>
            </section>
        </footer>
    );
}