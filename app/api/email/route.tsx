import EmailTemplate from "@/app/_components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request)
{
    const body = await request.json();

    if(
        !body.name.trim() || !body.phone.trim() || !body.email.trim() || 
        !body.height.trim() || !body.place.trim() || 
        !body.subject.trim() || !body.message.trim()
    )
        throw new Error("Please fill in all the required fields.");

    try {
        const data = await resend.emails.send({
            from: "contact@scaffoldingpt.ro",
            to: "scaffoldingpt@gmail.ro",
            subject: `[CONTACT] ${body.subject}`,
            react: EmailTemplate(body)
        });

        return NextResponse.json({ data });
    }
    catch(error) {
        return NextResponse.json({ error });
    }
}