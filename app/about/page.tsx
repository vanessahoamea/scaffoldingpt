import Card from "../components/Card"

export default function About()
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
                    <h1 className="py-32 text-3xl font-bold">Despre noi</h1>
                </div>
            </div>
            
            <div className="px-16 pt-20 pb-20" role="group">
                <section className="mb-10">
                    <h2 className="text-primary text-3xl font-bold">Istoria noastră</h2>
                    <p className="mt-2">Scaffolding Professional Team a fost fondată în 2018 de către Victor Nistor, un specialist în domeniul schelelor cu o experiență remarcabilă. Cu o carieră de peste 30 de ani în industria de construcții, inclusiv 20 de ani de experiență lucrând pe proiecte complexe în Grecia, Victor a acumulat cunoștințe și expertiză care l-au făcut un adevărat profesionist în acest domeniu.</p>
                </section>

                <section className="mt-10 mb-10">
                    <h2 className="text-primary text-3xl font-bold">Misiunea noastră</h2>
                    <p className="mt-2">Misiunea noastră la Scaffolding Professional Team este să oferim servicii de înaltă calitate în industria de schele, utilizând cele mai bune practici dobândite de-a lungul decadelor de experiență. Ne străduim să fim lideri în acest domeniu, aducând inovație și eficiență în fiecare proiect pe care îl abordăm.</p>
                </section>

                <section className="mt-10">
                    <h2 className="text-primary text-3xl font-bold">Echipa noastră</h2>
                    <p className="mt-2">Echipa de conducere a Scaffolding Professional Team este condusă de Victor Nistor, fondatorul și președintele companiei, care aduce o vastă experiență internațională în domeniul schelelor. Alături de el, avem o echipă talentată de specialiști și tehnicieni experimentați, pregătiți să abordeze cele mai complexe proiecte.</p>
                </section>
            </div>

            <hr className="border-hr border-primary w-1/3 mx-auto" />

            <section className="px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl font-bold">Valorile noastre</h2>
                <div className="mt-2 flex flex-col gap-10 md:flex-row">
                    <Card
                        image="/experience.jpg"
                        title="Experiență"
                        content="Cu peste 30 de ani de experiență în spate, suntem mândri să aducem o expertiză de neegalat în fiecare proiect."
                    />
                    <Card
                        image="/innovation.jpg"
                        title="Inovație"
                        content="Suntem dedicați aducerii de soluții inovatoare în industria schelelor pentru a face fiecare proiect mai sigur și mai eficient."
                    />
                    <Card
                        image="/integrity.jpg"
                        title="Integritate"
                        content="Ne bazăm relațiile cu clienții pe încredere și respect, și ne asigurăm că fiecare promisiune este respectată."
                    />
                </div>
            </section>

            <hr className="border-hr border-primary w-1/3 mx-auto" />

            <section className="px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl font-bold">Recunoașteri</h2>
                <p className="mt-2">Suntem mândri de munca noastră și suntem bucuroși că am obținut recunoaștere pentru excelența noastră în industrie. Colaborarea noastră cu clienții precum <b>IRI CRIS SRL</b>, <b>ART EST CONSTRUCT SRL</b>, și implicarea în proiecte notabile precum <b>SUN Residence</b> din Iași și Comat Iași sunt doar câteva exemple ale eforturilor noastre recunoscute în domeniu.</p>
                <p className="mt-2">La Scaffolding Professional Team, ne angajăm să oferim cele mai bune servicii în industria schelelor și suntem entuziasmați să continuăm această călătorie împreună cu clienții noștri și partenerii de afaceri.</p>
            </section>
        </main>
    );
}