import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function Hiring()
{
    const client = createClient();
    const page = await client.getSingle("hiring_page");
    
    return (
        <main>
            <SliceZone slices={page.data.slices} components={components} />
        </main>
    );
}