import ContactForm from "../components/ContactForm";

export default function Contact()
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
                    <h1 className="py-32 text-center text-3xl font-bold">Contact</h1>
                </div>
            </div>

            <section className="px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Luați legătura cu noi</h2>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit, officiis ipsa aliquid possimus inventore voluptate laborum maxime labore in, soluta illo hic, quis quidem harum fugit. Possimus ex ipsam, placeat necessitatibus error et quas, consequatur beatae ratione voluptatum nostrum, amet delectus. Laboriosam voluptas animi quisquam neque aut quae totam voluptatem nesciunt deleniti temporibus beatae doloremque aspernatur dolor quibusdam natus eveniet recusandae libero, dignissimos pariatur non magnam? Veniam dolore repellat nam nulla assumenda nisi nostrum esse, nemo, aliquam odit aperiam recusandae dolorem dolores itaque impedit quaerat autem aliquid dolorum? Vel, iure consectetur blanditiis natus voluptate maiores neque incidunt totam repellendus.</p>
            </section>

            <section className="px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl font-bold">Trimiteți-ne un mesaj</h2>
                <div className="my-2 flex flex-col gap-5 md:flex-row">
                    <p className="basis-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt quam vitae similique in nam nostrum nobis, velit sunt quas culpa error fuga facere fugiat!</p>
                    <ContactForm />
                </div>
            </section>

            <iframe
                className="w-full h-96"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJkZ3YcWLlykARiipG1MFMNs4&zoom=15&key=${process.env.GOOGLE_MAPS_API_KEY}`}
            />
        </main>
    );
}