import { promises as fs } from "fs";
import Card from "../components/Card"
import Tabs from "../components/Tabs";
import PrimaryButton from "../components/PrimaryButton";

interface AboutData
{
    id: number,
    title: string,
    content: string
};
export default async function About()
{
    const { data } = await getData();

    return (
        <main>
            <div className="h-40 relative overflow-hidden text-white text-center">
                <img
                    src="/banner.jpg"
                    alt=""
                    className="w-full h-40 object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="py-32 text-3xl font-bold">Despre noi</h1>
                </div>
            </div>
            
            <section className="px-8 md:px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl text-center font-bold">Scaffolding Professional Team</h2>
                <div className="mt-2">
                    <Tabs data={data} />
                </div>
            </section>

            <hr className="border-hr border-primary w-1/3 mx-auto" />

            <section className="px-8 md:px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl text-center font-bold">Valorile noastre</h2>
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

            <section className="px-8 md:px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl text-center font-bold">Recunoașteri</h2>
                <p className="mt-2 text-center">Suntem mândri de munca noastră și suntem bucuroși că am obținut recunoaștere pentru excelența noastră în industrie. Colaborarea noastră cu clienții precum <b>IRI CRIS SRL</b>, <b>ART EST CONSTRUCT SRL</b>, și implicarea în proiecte notabile precum <b>SUN Residence</b> din Iași și Comat Iași sunt doar câteva exemple ale eforturilor noastre recunoscute în domeniu.</p>
                <p className="mt-2 text-center">La Scaffolding Professional Team, ne angajăm să oferim cele mai bune servicii în industria schelelor și suntem entuziasmați să continuăm această călătorie împreună cu clienții noștri și partenerii de afaceri.</p>
            </section>

            <div className="h-72 sm:h-64 relative overflow-hidden text-white text-center">
                <img
                    src="/cta.jpg"
                    alt=""
                    className="w-full h-72 sm:h-64 object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="w-screen px-8 text-xl md:text-3xl font-bold">Oferim cele mai bune servicii din industrie.</h1>
                    <p className="mt-2 px-8 sm:px-16">Colaborați cu noi pentru a primi cel mai înalt nivel de suport și calitate. Succesul dvs. este prioritatea noastră.</p>
                    <div className="mt-5">
                        <PrimaryButton text="Cere o ofertă" path="/contact" />
                    </div>
                </div>
            </div>
        </main>
    );
}

async function getData(): Promise<{ data: AboutData[] }>
{
    const file = await fs.readFile(process.cwd() + "/data/about.json", "utf8");
    const object = JSON.parse(file);

    return object;
}