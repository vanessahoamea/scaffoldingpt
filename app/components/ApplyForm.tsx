"use client";

import { ChangeEvent, useState } from "react";

export default function ApplyForm()
{
    const [values, setValues] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        comments: ""
    });

    function handleForm(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
    {
        setValues((values) => {
            return { ...values, [e.target.name]: e.target.value };
        });
    }

    async function sendApplication(): Promise<void>
    {
        // validate form fields
        if(!values.name.trim() || !values.surname.trim())
        {
            alert("Vă rugăm să specificați numele dvs. complet.");
            return;
        }
        if(!values.phone.trim() && !values.email.trim())
        {
            alert("Vă rugăm să furnizați cel puțin o metodă de contact (adresă de e-mail sau număr de telefon).");
            return;
        }

        // send application
        fetch("/api/apply", { method: "POST", body: JSON.stringify(values) })
        .then((res) => {
            if(!res.ok)
                throw new Error("Aplicația dvs. nu a putut fi trimisă. Vă rugăm să încercați din nou mai târziu.");
            return res.json();
        })
        .then((_) => {
            alert("Aplicația dvs. a fost trimisă cu succes. :)");
            setValues((_) => ({
                name: "",
                surname: "",
                phone: "",
                email: "",
                comments: ""
            }));
        })
        .catch((err) => alert(err));
    }

    return (
        <form className="my-2 flex flex-col items-center">
            <div className="flex flex-col md:flex-row md:gap-2 w-full" role="group">
                <input
                    className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                    type="text"
                    name="name"
                    placeholder="Prenume"
                    value={values.name}
                    onChange={handleForm}
                />
                <input
                    className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                    type="text"
                    name="surname"
                    placeholder="Nume"
                    value={values.surname}
                    onChange={handleForm}
                />
            </div>
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
            <textarea
                className="w-full border border-gray-500 rounded-sm resize-none mb-3 p-2"
                rows={3}
                name="comments"
                placeholder="Comentarii"
                value={values.comments}
                onChange={handleForm}
            />
            <button 
                type="button"
                className="px-5 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded"
                onClick={sendApplication}
            >
                Aplică
            </button>
        </form>
    );
}