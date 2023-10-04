"use client";

import { motion } from "framer-motion";
import PrimaryButton from "./components/PrimaryButton";

export default function Home()
{
    return (
        <main className="overflow-x-hidden">
            <div className="h-screen relative overflow-hidden text-white text-center">
                <img
                    src="/banner.jpg"
                    alt="Site banner"
                    className="w-full h-screen object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-4xl font-bold">Scaffolding Professional Team</h1>
                    <p className="mt-5">Nu am noi inventat schela, dar suntem maeștrii în folosirea ei.</p>
                    <PrimaryButton text="Contactează-ne" path="/contact" />
                </div>
            </div>
            
            <motion.section
                className="px-16 pt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0, x: -250 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
                }}
            >
                <h2 className="text-primary text-3xl font-bold">Despre noi</h2>
                <p className="my-2">Suntem o echipă dedicată, cu o experiență vastă de peste 30 de ani în industria schelelor. Originea noastră se regăsește în Grecia, unde am acumulat o expertiză solidă, lucrând pe proiecte complexe, inclusiv construcții impresionante și proiecte pe vapoare. Ne-am întors în România dornici să împărtășim cunoștințele noastre internaționale și să le combinăm cu o abordare inovatoare.</p>
            </motion.section>

            <motion.section
                className="px-16 pt-20 pb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0, x: 250 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
                }}
            >
                <h2 className="text-primary text-3xl font-bold">Cu ce ne ocupăm</h2>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit, officiis ipsa aliquid possimus inventore voluptate laborum maxime labore in, soluta illo hic, quis quidem harum fugit. Possimus ex ipsam, placeat necessitatibus error et quas, consequatur beatae ratione voluptatum nostrum, amet delectus. Laboriosam voluptas animi quisquam neque aut quae totam voluptatem nesciunt deleniti temporibus beatae doloremque aspernatur dolor quibusdam natus eveniet recusandae libero, dignissimos pariatur non magnam? Veniam dolore repellat nam nulla assumenda nisi nostrum esse, nemo, aliquam odit aperiam recusandae dolorem dolores itaque impedit quaerat autem aliquid dolorum? Vel, iure consectetur blanditiis natus voluptate maiores neque incidunt totam repellendus.</p>
            </motion.section>
        </main>
    );
}