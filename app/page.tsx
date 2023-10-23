import { promises as fs } from "fs";
import PrimaryButton from "./components/PrimaryButton";
import SlidingSection from "./components/SlidingSection";
import ReviewSwiper from "./components/ReviewSwiper";
import type { ReviewData } from "./types";

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

            <SlidingSection startPosition={250}>
                <h2 className="text-primary text-3xl font-bold">Cu ce ne ocupăm</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit, officiis ipsa aliquid possimus inventore voluptate laborum maxime labore in, soluta illo hic, quis quidem harum fugit. Possimus ex ipsam, placeat necessitatibus error et quas, consequatur beatae ratione voluptatum nostrum, amet delectus. Laboriosam voluptas animi quisquam neque aut quae totam voluptatem nesciunt deleniti temporibus beatae doloremque aspernatur dolor quibusdam natus eveniet recusandae libero, dignissimos pariatur non magnam? Veniam dolore repellat nam nulla assumenda nisi nostrum esse, nemo, aliquam odit aperiam recusandae dolorem dolores itaque impedit quaerat autem aliquid dolorum? Vel, iure consectetur blanditiis natus voluptate maiores neque incidunt totam repellendus.</p>
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