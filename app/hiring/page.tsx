export default function Hiring()
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
                    <h1 className="py-32 text-center text-3xl font-bold">Oportunități de angajare</h1>
                </div>
            </div>

            <section className="px-16 pt-20">
                <h2 className="text-primary text-5xl text-center font-bold">Echipa Noastră Caută Talente Noi!</h2>
                <p className="my-2 text-center">Sunteți pasionat de construcții și doriți să vă alăturați unei echipe profesioniste în domeniul schelelor? Scaffolding Professional Team este în căutarea de schelari dornici să facă parte din echipa noastră dinamică și să învețe de la cei mai buni. Indiferent dacă sunteți cu sau fără experiență, vă oferim oportunitatea de a vă dezvolta cariera într-un mediu înalt calificat.</p>
            </section>

            <div className="hiring flex flex-col md:flex-row md:gap-5 md:px-16 md:pt-20">
                <section className="basis-1/2 px-16 pt-20 md:p-0">
                    <h2 className="text-primary text-3xl font-bold">Ce oferim</h2>
                    <ul className="my-2 md:mb-0">
                        <li>Oportunitatea de a lucra cu o echipă cu peste 30 de ani de experiență în industria schelelor.</li>
                        <li>Formare și mentorat pentru cei fără experiență, pentru a vă dezvolta abilitățile.</li>
                        <li>Proiecte variate și provocări constante pentru a vă menține angajați și implicați.</li>
                        <li>Mediu de lucru sigur și echipament de protecție de înaltă calitate.</li>
                        <li>Șansa de a contribui la proiecte de construcție impresionante.</li>
                    </ul>
                </section>

                <section className="basis-1/2 px-16 pt-20 md:p-0">
                    <h2 className="text-primary text-3xl font-bold">Cerințe</h2>
                    <ul className="my-2 md:mb-0">
                        <li>Dedicare și dorință de a învăța.</li>
                        <li>Abilitatea de a lucra în echipă și de a urma instrucțiunile cu atenție.</li>
                        <li>Atitudine pozitivă și pasiune pentru industria construcțiilor.</li>
                    </ul>
                </section>
            </div>

            <section className="px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl font-bold">Vino în echipa noastră</h2>
                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corrupti iusto obcaecati quas officia, suscipit quia earum ad saepe! Vel amet quasi nulla corporis consectetur nobis tempore doloribus voluptatem doloremque.</p>
            </section>
        </main>
    );
}