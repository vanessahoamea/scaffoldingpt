interface EmailTemplateProps
{
    name: string,
    phone: string,
    email: string,
    subject: string
    message: string
};
export default function EmailTemplate(props: EmailTemplateProps)
{    
    return (
        <>
            <h1>Testing Resend with Next.js</h1>
            <p>Nume: {props.name}</p>
            <p>Număr de telefon: {props.phone}</p>
            <p>Adresă de e-mail: {props.email}</p>
            <p>Subiect: {props.subject}</p>
            <p>Mesaj: {props.message}</p>
        </>
    );
}