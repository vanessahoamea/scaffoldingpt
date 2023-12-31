import { promises as fs } from "fs";
import PrimaryButton from "./_components/PrimaryButton";
import SlidingSection from "./_components/SlidingSection";
import ReviewSwiper from "./_components/ReviewSwiper";
import type { ReviewData } from "./_utils/types";

export default async function Home()
{
    const { data } = await getData();

    return (
        <main className="overflow-x-hidden">
            <div className="h-screen relative overflow-hidden bg-primary text-white text-center">
                <img
                    src="/banner.jpg"
                    alt="Site banner"
                    className="w-full h-screen object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-4xl font-bold">Scaffolding Professional Team</h1>
                    <p className="mt-5">Noi nu am inventat schela, dar suntem maeștrii în folosirea ei.</p>
                    <div className="mt-5">
                        <PrimaryButton text="Contactează-ne" path="/contact" />
                    </div>
                </div>
            </div>
            
            <SlidingSection startPosition={-250}>
                <h2 className="text-primary text-3xl font-bold">Despre noi</h2>
                <p className="mt-2">Suntem o echipă dedicată, cu o experiență vastă de peste 30 de ani în industria schelelor. Originea noastră se regăsește în Grecia, unde am acumulat o expertiză solidă, lucrând pe proiecte complexe, inclusiv construcții impresionante și proiecte pe vapoare. Ne-am întors în România dornici să împărtășim cunoștințele noastre internaționale și să le combinăm cu o abordare inovatoare.</p>
            </SlidingSection>

            <SlidingSection startPosition={250} className="grid grid-cols-1 lg:grid-cols-custom gap-10 items-center">
                <div>
                    <h2 className="text-primary text-3xl font-bold">Cu ce ne ocupăm</h2>
                    <p className="mt-2">Suntem dedicați să vă oferim cele mai bune soluții de schele metalice pentru proiectele dvs. din industria construcțiilor. Ceea ce ne deosebește de ceilalți este pasiunea noastră pentru ceea ce facem și angajamentul nostru față de calitate și satisfacția clientului. De la construcții rezidențiale la proiecte industriale, suntem pregătiți să vă ajutăm.</p>
                    <p className="mt-2">Nu oferim doar produse de calitate superioară; furnizăm și servicii complete de montare și demontare. Echipa noastră de schelari acreditați de Minister este specializată în asigurarea siguranței și stabilității schelelor pe șantierul dvs. De asemenea, deținem acreditare ISCIR până la montarea schelei, ceea ce vă oferă pacea deplină a minții.</p>
                    <p className="mt-2">Înțelegem că fiecare proiect are cerințe specifice. De aceea, adaptăm ofertele noastre pentru a corespunde nevoilor dvs. Cu expertiza noastră, vă putem ajuta să găsiți cea mai eficientă soluție de schelă metalică pentru proiectul dvs.</p>
                </div>
                <div className="main-image">
                    <img
                        src="/main.png"
                        alt="Informații de contact"
                        className="w-[500px]"
                    />
                </div>
            </SlidingSection>

            <SlidingSection startPosition={-250} className="pb-20">
                <h2 className="text-primary text-3xl font-bold">Ce spun clienții noștri</h2>
                <div className="mt-2">
                    <ReviewSwiper data={data} />
                </div>
            </SlidingSection>
        </main>
    );
}

async function getData(): Promise<{ data: ReviewData[] }>
{
    const file = await fs.readFile(process.cwd() + "/data/reviews.json", "utf8");
    const object = JSON.parse(file);

    return object;
}