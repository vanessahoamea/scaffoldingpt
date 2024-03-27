import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function TermsAndConditions()
{
    const client = createClient();
    const page = await client.getSingle("terms_and_conditions_page");

    return (
        <main>
            <SliceZone slices={page.data.slices} components={components} />
        </main>
    );
}

export async function generateMetadata(): Promise<Metadata>
{
    const client = createClient();
    const page = await client.getSingle("terms_and_conditions_page");
  
    return {
      title: page.data.meta_title,
      description: page.data.meta_description
    };
}