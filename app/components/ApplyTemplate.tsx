interface ApplyTemplateProps
{
    name: string,
    surname: string,
    phone: string,
    email: string
};
export default function ApplyTemplate(props: ApplyTemplateProps)
{
    return (
        <>
            <h1>Testing Resend with Next.js</h1>
            <p>Nume: {props.name} {props.surname}</p>
            <p>Număr de telefon: {props.phone}</p>
            <p>Adresă de e-mail: {props.email}</p>
        </>
    );
}