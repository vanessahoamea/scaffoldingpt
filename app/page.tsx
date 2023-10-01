import PrimaryButton from "./components/PrimaryButton";

export default function Home()
{
    return (
        <main>
            <div className="h-96 relative overflow-hidden text-white text-center">
                <img 
                    src="/banner.jpg"
                    alt="Site banner"
                    className="w-full h-96 object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-3xl font-bold">Lorem, ipsum dolor.</h1>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui molestias nisi error odio tempora iure!</p>
                    <PrimaryButton text="Contactează-ne" path="/contact" />
                </div>
            </div>
            
            <p className="p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit, officiis ipsa aliquid possimus inventore voluptate laborum maxime labore in, soluta illo hic, quis quidem harum fugit. Possimus ex ipsam, placeat necessitatibus error et quas, consequatur beatae ratione voluptatum nostrum, amet delectus. Laboriosam voluptas animi quisquam neque aut quae totam voluptatem nesciunt deleniti temporibus beatae doloremque aspernatur dolor quibusdam natus eveniet recusandae libero, dignissimos pariatur non magnam? Veniam dolore repellat nam nulla assumenda nisi nostrum esse, nemo, aliquam odit aperiam recusandae dolorem dolores itaque impedit quaerat autem aliquid dolorum? Vel, iure consectetur blanditiis natus voluptate maiores neque incidunt totam repellendus.</p>
        </main>
    );
}