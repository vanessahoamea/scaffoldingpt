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
import { createClient, repositoryName } from "@/prismicio";

/* components */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata>
{
    const client = createClient();
    const settings = await client.getSingle("settings");
   
    return {
      title: settings.data.site_title || "Scaffolding Professional Team",
      description: settings.data.site_description || "Scaffolding Professional Team se angajează să ofere servicii de înaltă calitate în domeniul schelelor. Misiunea noastră este să fim lideri în inovație și eficiență.",
      openGraph: {
        images: [settings.data.site_logo.url ?? "logo.png"]
      }
    }
}  

export default function RootLayout({ children }: { children: React.ReactNode })
{
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
                <div id="toast-section" className="fixed z-10 top-0 right-0 mt-3 mx-3 xs:ml-0"></div>
                <PrismicPreview repositoryName={repositoryName} />
            </body>
        </html>
    );
}