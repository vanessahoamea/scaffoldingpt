import path from "path";
import fsPromises from "fs/promises";
import AccordionItem from "../components/AccordionItem";

interface ServiceData
{
    id: number,
    title: string,
    content: string,
    prices: string
};
export default async function Services()
{
    const { data } = await getData();

    return (
        <main>
            <div className="h-40 relative overflow-hidden text-white text-center">
                <img
                    src="/banner.jpg"
                    alt="Site banner"
                    className="w-full h-40 object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="py-32 text-center text-3xl font-bold">Servicii</h1>
                </div>
            </div>

            <section className="px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Servicii și produse</h2>
                <p className="mt-2">La Scaffolding Professional Team, suntem dedicați să vă oferim o gamă completă de servicii și produse în domeniul schelelor pentru a satisface nevoile diferite ale clienților noștri. Indiferent de nevoile dvs., suntem aici pentru a vă ajuta să vă atingeți obiectivele de construcție într-un mod sigur și eficient. Prețurile noastre variază în funcție de tipul de serviciu sau produs și de durata închirierii. Iată câteva dintre serviciile noastre comune și prețurile lor orientative:</p>
                <div className="my-4">
                {
                    data.map((service: ServiceData) => (
                        <AccordionItem key={service.id} {...service} />
                    ))
                }
                </div>
                <p className="mt-2">Ne propunem să oferim cele mai competitive prețuri din industrie și suntem bucuroși să discutăm cu dvs. pentru a vă oferi o ofertă personalizată care să se potrivească nevoilor dvs. Pentru informații detaliate despre tarife sau pentru a primi o ofertă personalizată, vă rugăm să ne contactați. Suntem aici pentru a vă ajuta cu fiecare etapă a proiectului dvs. de construcție.</p>
            </section>

            <section className="px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl font-bold">Portofoliul nostru</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facere tempora doloremque minima consectetur quo nisi veniam pariatur, facilis atque iusto, nam, incidunt totam iure earum dicta blanditiis? Aperiam a libero tempore eaque assumenda molestiae omnis earum. Dolore, consectetur earum.</p>
            </section>
        </main>
    );
}

async function getData(): Promise<{ data: ServiceData[] }>
{
    const filePath = path.join(process.cwd(), "data/services.json");
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return objectData;
}