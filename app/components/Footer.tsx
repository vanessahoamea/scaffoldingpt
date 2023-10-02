import Link from "next/link";

export default function Footer()
{
    return (
        <footer className="mt-20 bg-gray-900 text-white">
            <main className="px-8 py-4 flex flex-col items-start justify-start gap-8 md:flex-row md:justify-between md:gap-20">
                <section className="basis-2/4 flex items-center space-x-5">
                    <img src="/logo.png" alt="Company logo" className="w-20" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias corrupti nisi omnis dolores excepturi a?</p>
                </section>
                <section className="basis-1/4 space-y-2">
                    <h2 className="text-xl font-bold text-primary">Detalii contact</h2>
                    <ul>
                        <li>Iași, România</li>
                        <li><a href="#">+40 (123) 456 789</a></li>
                        <li><a href="#">contact@scaffoldingpt.ro</a></li>
                    </ul>
                </section>
                <section className="basis-1/4 space-y-2">
                    <h2 className="text-xl font-bold text-primary">Legături utile</h2>
                    <ul>
                        <li><Link href="/about">Cine suntem</Link></li>
                        <li><Link href="/services">Servicii oferite</Link></li>
                        <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                    </ul>
                </section>
            </main>

            <hr />

            <p className="p-4 text-center">&copy; Copyright 2023 Scaffolding. All Rights Reserved.</p>
        </footer>
    );
}