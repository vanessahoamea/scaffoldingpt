"use client";

import { ChangeEvent, useState } from "react";

export default function ContactForm()
{
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        height: "",
        place: "",
        subject: "",
        message: ""
    });

    function handleForm(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
    {
        setValues((values) => {
            return { ...values, [e.target.name]: e.target.value };
        });
    }

    async function sendMessage(): Promise<void>
    {
        // validate form fields
        if(
            !values.name.trim() || !values.subject.trim() || !values.message.trim() || 
            !values.height.trim() || !values.place.trim()
        )
        {
            alert("Vă rugăm să specificați numele dvs., înălțimea și localizarea lucrării dorite, subiectul mesajului, precum și mesajul propriu-zis.");
            return;
        }
        if(!values.phone.trim() && !values.email.trim())
        {
            alert("Vă rugăm să furnizați cel puțin o metodă de contact (adresă de e-mail sau număr de telefon).");
            return;
        }

        // send user's message
        fetch("/api/email", { method: "POST", body: JSON.stringify(values) })
        .then((res) => {
            if(!res.ok)
                throw new Error("Mesajul dvs. nu a putut fi trimis. Vă rugăm să încercați din nou mai târziu.");
            return res.json();
        })
        .then((_) => {
            alert("Mesajul dvs. a fost trimis cu succes. :)");
            setValues((_) => ({
                name: "",
                phone: "",
                email: "",
                height: "",
                place: "",
                subject: "",
                message: ""
            }));
        })
        .catch((err) => alert(err));
    }
    
    return (
        <form className="mt-2 flex flex-col items-center basis-1/2">
            <input
                className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                type="text"
                name="name"
                placeholder="Nume"
                value={values.name}
                onChange={handleForm}
            />
            <div className="flex flex-col md:flex-row md:gap-2 w-full" role="group">
                <input
                    className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                    type="tel"
                    name="phone"
                    placeholder="Număr de telefon"
                    value={values.phone}
                    onChange={handleForm}
                />
                <input
                    className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                    type="text"
                    name="email"
                    placeholder="Adresă de e-mail"
                    value={values.email}
                    onChange={handleForm}
                />
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 w-full" role="group">
                <input
                    className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                    type="tel"
                    name="height"
                    placeholder="Înălțime lucrare"
                    value={values.height}
                    onChange={handleForm}
                />
                <input
                    className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                    type="text"
                    name="place"
                    placeholder="Localizare lucrare"
                    value={values.place}
                    onChange={handleForm}
                />
            </div>
            <input
                className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                type="text"
                name="subject"
                placeholder="Subiect"
                value={values.subject}
                onChange={handleForm}
            />
            <textarea
                className="w-full border border-gray-500 rounded-sm resize-none mb-3 p-2"
                rows={5}
                name="message"
                placeholder="Mesaj"
                value={values.message}
                onChange={handleForm}
            />
            <button 
                type="button"
                className="px-5 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded"
                onClick={sendMessage}
            >
                Trimite
            </button>
        </form>
    );
}