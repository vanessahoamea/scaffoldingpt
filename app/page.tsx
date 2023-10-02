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
                    <h1 className="text-3xl font-bold">Lorem, ipsum dolor.</h1>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui molestias nisi error odio tempora iure!</p>
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
                <h2 className="text-primary text-3xl font-bold">Despre Scaffolding</h2>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit, officiis ipsa aliquid possimus inventore voluptate laborum maxime labore in, soluta illo hic, quis quidem harum fugit. Possimus ex ipsam, placeat necessitatibus error et quas, consequatur beatae ratione voluptatum nostrum, amet delectus. Laboriosam voluptas animi quisquam neque aut quae totam voluptatem nesciunt deleniti temporibus beatae doloremque aspernatur dolor quibusdam natus eveniet recusandae libero, dignissimos pariatur non magnam? Veniam dolore repellat nam nulla assumenda nisi nostrum esse, nemo, aliquam odit aperiam recusandae dolorem dolores itaque impedit quaerat autem aliquid dolorum? Vel, iure consectetur blanditiis natus voluptate maiores neque incidunt totam repellendus.</p>
            </motion.section>

            <motion.section
                className="px-16 pt-20"
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