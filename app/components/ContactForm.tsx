"use client";

import { ChangeEvent, MouseEvent, useState } from "react";

export default function ContactForm()
{
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
    });

    function handleForm(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
    {
        setValues((values) => {
            return { ...values, [e.target.name]: e.target.value };
        });
    }

    function sendMessage(e: MouseEvent): void
    {
        // TODO
    }
    
    return (
        <form className="my-2 flex flex-col items-center basis-1/2">
            <input
                className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                type="text"
                name="name"
                id="name"
                placeholder="Nume"
                value={values.name}
                onChange={handleForm}
            />
            <input
                className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Număr de telefon"
                value={values.phone}
                onChange={handleForm}
            />
            <input
                className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                type="text"
                name="email"
                id="email"
                placeholder="Adresă de e-mail"
                value={values.email}
                onChange={handleForm}
            />
            <input
                className="w-full border border-gray-500 rounded-sm mb-3 p-2"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subiect"
                value={values.subject}
                onChange={handleForm}
            />
            <textarea
                className="w-full border border-gray-500 rounded-sm resize-none mb-3 p-2"
                rows={5}
                name="message"
                id="message"
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