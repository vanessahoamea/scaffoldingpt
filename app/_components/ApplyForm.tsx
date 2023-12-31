"use client";

import { useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import type { ApplyInputs } from "../_utils/types";

export default function ApplyForm()
{
    const formId = useId();
    const { register, handleSubmit, formState, reset } = useForm<ApplyInputs>();
    const { errors, isSubmitting, isSubmitSuccessful } = formState;

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful, reset]);

    function sendApplication(data: ApplyInputs): void
    {
        fetch("/api/apply", { method: "POST", body: JSON.stringify(data) })
        .then((res) => {
            if(!res.ok)
                throw new Error();
            return res.json();
        })
        .then((_) => alert("Aplicația dvs. a fost trimisă cu succes. :)"))
        .catch((_) => alert("Aplicația dvs. nu a putut fi trimisă. Vă rugăm să încercați din nou mai târziu."));
    }

    function alertError(): void
    {
        if(errors.name || errors.surname)
            alert("Vă rugăm să specificați numele dvs. complet.");
        else
            alert("Vă rugăm să furnizați cel puțin o metodă de contact (adresă de e-mail sau număr de telefon).");
    }

    return (
        <form
            className="mt-5 flex flex-col items-center"
            onSubmit={handleSubmit(sendApplication, alertError)}
        >
            <div className="flex flex-col md:flex-row md:gap-2 w-full" role="group">
                <label htmlFor={`name-${formId}`}>Nume</label>
                <input
                    type="text"
                    placeholder="Prenume"
                    id={`name-${formId}`}
                    {...register("name", { required: true, pattern: /^(?!\s*$).+/ })}
                    aria-invalid={!!errors.name}
                />
                
                <label htmlFor={`surname-${formId}`}>Prenume</label>
                <input
                    type="text"
                    placeholder="Nume"
                    id={`surname-${formId}`}
                    {...register("surname", { required: true, pattern: /^(?!\s*$).+/ })}
                    aria-invalid={!!errors.surname}
                />
            </div>

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

            <label htmlFor={`comments-${formId}`}>Comentarii</label>
            <textarea
                rows={3}
                placeholder="Comentarii"
                id={`comments-${formId}`}
                {...register("comments")}
                aria-invalid={false}
            />

            <button disabled={isSubmitting}>Aplică</button>
        </form>
    );
}