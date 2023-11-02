import Link from "next/link";

export default function TermsAndConditions()
{
    return (
        <main>
            <div className="h-40 relative overflow-hidden bg-primary text-white text-center">
                <img
                    src="/banner.jpg"
                    alt="Site banner"
                    className="w-full h-40 object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="py-32 text-3xl font-bold">Termeni și condiții</h1>
                </div>
            </div>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Utilizarea site-ului</h2>
                <p className="mt-2">Prin accesarea și utilizarea site-ului, sunteți de acord să respectați acești Termeni. Dacă nu sunteți de acord cu acești Termeni, vă rugăm să nu utilizați site-ul nostru.</p>
            </section>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Schimbări ale Termenilor</h2>
                <p className="mt-2">Ne rezervăm dreptul de a modifica acești Termeni în orice moment. Orice modificare va fi afișată pe această pagină. Continuarea utilizării site-ului după publicarea modificărilor reprezintă acceptarea dumneavoastră a acestor modificări.</p>
            </section>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Informații personale</h2>
                <p className="mt-2">Atunci când utilizați site-ul nostru, este posibil să ne furnizați informații personale. Acest lucru este guvernat de Politica noastră de Confidențialitate, disponibilă <Link href="/privacy-policy" className="text-primary font-semibold">aici</Link>.</p>
            </section>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Drepturi de autor</h2>
                <p className="mt-2">Conținutul de pe site, inclusiv dar fără a se limita la text, imagini, logo-uri, grafică și software, este protejat de drepturile de autor și alte legi privind proprietatea intelectuală. Nu aveți permisiunea de a copia, reproduce, distribui sau modifica acest conținut fără acordul nostru scris.</p>
            </section>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Limite de responsabilitate</h2>
                <p className="mt-2">Site-ul nostru este furnizat "așa cum este" și "conform disponibilității". Nu garantăm faptul că site-ul va fi întotdeauna disponibil sau că informațiile furnizate sunt corecte sau complete. Ne declinăm orice responsabilitate pentru prejudicii sau pierderi cauzate de utilizarea site-ului nostru.</p>
            </section>

            <section className="px-8 md:px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl font-bold">Contact</h2>
                <p className="mt-2">Dacă aveți întrebări sau preocupări cu privire la acești Termeni, vă rugăm să ne contactați la <a href="mailto:scaffoldingpt@gmail.com" className="text-primary font-semibold">scaffoldingpt@gmail.com</a>.</p>
            </section>
        </main>
    );
}