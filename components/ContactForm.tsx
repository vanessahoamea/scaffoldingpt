"use client";

import { useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import type { ContactInputs } from "@/utils/types";

interface ContactFormProps
{
    showToast: (type: "success" | "error", message: string) => void
};
export default function ContactForm(props: ContactFormProps)
{
    const formId = useId();
    const { register, handleSubmit, formState, reset } = useForm<ContactInputs>();
    const { errors, isSubmitting, isSubmitSuccessful } = formState;

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful, reset]);

    function sendMessage(data: ContactInputs): void
    {
        fetch("/api/email", { method: "POST", body: JSON.stringify(data) })
        .then((res) => {
            if(!res.ok)
                throw new Error();
            return res.json();
        })
        .then((_) => props.showToast("success", "Mesajul dvs. a fost trimis cu succes."))
        .catch((_) => props.showToast("error", "Mesajul dvs. nu a putut fi trimis. Vă rugăm să încercați din nou mai târziu."));
    };

    function alertError(): void
    {
        if(errors.name)
            props.showToast("error", "Vă rugăm să specificați numele dvs.");
        else if(errors.phone || errors.email)
            props.showToast("error", "Vă rugăm să furnizați cel puțin o metodă de contact (adresă de e-mail sau număr de telefon).");
        else
            props.showToast("error", "Vă rugăm să îi adăugați mesajului un subiect.");
    }
    
    return (
        <form
            className="mt-2 flex flex-col items-center basis-1/2"
            onSubmit={handleSubmit(sendMessage, alertError)}
        >
            <label htmlFor={`name-${formId}`}>Nume</label>
            <input
                type="text"
                placeholder="Nume"
                id={`name-${formId}`}
                {...register("name", { required: true, pattern: /^(?!\s*$).+/ })}
                aria-invalid={!!errors.name}
            />

            <div className="flex flex-col md:flex-row md:gap-2 w-full" role="group">
                <label htmlFor={`phone-${formId}`}>Număr de telefon</label>
                <input
                    type="tel"
                    placeholder="Număr de telefon"
                    id={`phone-${formId}`}
                    {...register("phone", {
                        validate: (value, formValues) => /^(?!\s*$).+/.test(value) || /^(?!\s*$).+/.test(formValues.email)
                    })}
                    aria-invalid={!!errors.phone}
                />

                <label htmlFor={`email-${formId}`}>Adresă de e-mail</label>
                <input
                    type="email"
                    placeholder="Adresă de e-mail"
                    id={`email-${formId}`}
                    {...register("email", {
                        validate: (value, formValues) => /^(?!\s*$).+/.test(value) || /^(?!\s*$).+/.test(formValues.phone) 
                    })}
                    aria-invalid={!!errors.email}
                />
            </div>

            <div className="flex flex-col md:flex-row md:gap-2 w-full" role="group">
                <label htmlFor={`height-${formId}`}>Înălțime lucrare</label>
                <input
                    type="text"
                    placeholder="Înălțime lucrare"
                    id={`height-${formId}`}
                    {...register("height")}
                />

                <label htmlFor={`place-${formId}`}>Localizare lucrare</label>
                <input
                    type="text"
                    placeholder="Localizare lucrare"
                    id={`place-${formId}`}
                    {...register("place")}
                />
            </div>

            <label htmlFor={`subject-${formId}`}>Subiect</label>
            <input
                type="text"
                placeholder="Subiect"
                id={`subject-${formId}`}
                {...register("subject", { required: true, pattern: /^(?!\s*$).+/ })}
                aria-invalid={!!errors.subject}
            />

            <label htmlFor={`message-${formId}`}>Mesaj</label>
            <textarea
                rows={5}
                placeholder="Mesaj"
                id={`message-${formId}`}
                {...register("message")}
            />

            <button disabled={isSubmitting}>Trimite</button>
        </form>
    );
}