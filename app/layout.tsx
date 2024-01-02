/* default imports */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

/* fontawesome */
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

/* prismic */
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

/* components */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Scaffolding Professional Team",
    description: "Scaffolding Professional Team se angajează să ofere servicii de înaltă calitate în domeniul schelelor. Misiunea noastră este să fim lideri în inovație și eficiență."
};

export default function RootLayout({ children }: { children: React.ReactNode })
{
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
                <PrismicPreview repositoryName={repositoryName} />
            </body>
        </html>
    );
}