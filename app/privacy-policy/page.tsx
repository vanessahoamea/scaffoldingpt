export default function PrivacyPolicy()
{
    return (
        <main>
            <div className="h-40 relative overflow-hidden bg-primary text-white text-center">
                <img
                    src="/banner.jpg"
                    alt="Site banner"
                    className="w-full h-40 object-cover brightness-45 select-none pointer-events-none"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="py-32 text-3xl font-bold">Politica de confidențialitate</h1>
                </div>
            </div>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Informații colectate</h2>
                <p className="mt-2">Colectăm informații personale pe care decideți să ni le furnizați în mod direct. Aceste informații pot include, dar nu se limitează la:</p>
                <ul className="custom-list">
                    <li>numele și prenumele dvs.;</li>
                    <li>adresa de e-mail;</li>
                    <li>numărul de telefon;</li>
                    <li>alte informații pe care le furnizați în mesajele sau formularele completate pe site-ul nostru.</li>
                </ul>
            </section>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Scopul colectării datelor</h2>
                <p className="mt-2">Utilizăm datele personale colectate pentru a vă oferi informații și servicii solicitate, pentru a răspunde la întrebări sau pentru a procesa cererile dvs. Datele pot fi folosite și în următoarele scopuri:</p>
                <ul className="custom-list">
                    <li>pentru a vă ține la curent cu noutățile, ofertele speciale și evenimentele noastre;</li>
                    <li>pentru a îmbunătăți și personaliza experiența dumneavoastră pe site-ul nostru;</li>
                    <li>pentru a vă contacta în legătură cu serviciile pe care le solicitați.</li>
                </ul>
            </section>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Protecția datelor</h2>
                <p className="mt-2">Ne angajăm să protejăm datele dvs. personale și să le păstrăm în siguranță. Folosim măsuri tehnice și organizaționale adecvate pentru a proteja datele împotriva accesului neautorizat, a pierderii sau a distrugerii acestora.</p>
            </section>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Divulgarea datelor către terțe părți</h2>
                <p className="mt-2">Nu vindem, nu închiriem și nu comercializăm datele dvs. personale către terțe părți. Cu toate acestea, putem dezvălui datele dvs. personale în următoarele situații:</p>
                <ul className="custom-list">
                    <li>dacă sunteți de acord să le dezvăluiți;</li>
                    <li>atunci când legea o cere sau ne obligă să o facem;</li>
                    <li>în legătură cu un contract sau o tranzacție cu o terță parte care vizează serviciile pe care le furnizăm.</li>
                </ul>
            </section>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Accesul la datele personale</h2>
                <p className="mt-2">Aveți dreptul de a accesa, rectifica sau șterge datele personale pe care le deținem despre dvs. Pentru a exercita aceste drepturi, vă rugăm să ne contactați la adresa <a href="mailto:scaffoldingpt@gmail.com" className="text-primary font-semibold">scaffoldingpt@gmail.com</a>.</p>
            </section>

            <section className="px-8 md:px-16 pt-20">
                <h2 className="text-primary text-3xl font-bold">Actualizări ale Politicii de Confidențialitate</h2>
                <p className="mt-2">Această Politică de Confidențialitate poate fi actualizată periodic pentru a reflecta modificări ale practicilor noastre privind protecția datelor. Orice modificare va fi afișată pe această pagină.</p>
            </section>

            <section className="px-8 md:px-16 pt-20 pb-20">
                <h2 className="text-primary text-3xl font-bold">Contact</h2>
                <p className="mt-2">Dacă aveți întrebări sau preocupări cu privire la Politica noastră de Confidențialitate, vă rugăm să ne contactați la <a href="mailto:scaffoldingpt@gmail.com" className="text-primary font-semibold">scaffoldingpt@gmail.com</a>.</p>
            </section>
        </main>
    );
}