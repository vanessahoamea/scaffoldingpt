import ApplyTemplate from "@/app/_components/ApplyTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request)
{
    const body = await request.json();

    if(
        !body.name.trim() || !body.surname.trim() || 
        !body.phone.trim() || !body.email.trim() || 
        !body.comments.trim()
    )
        throw new Error("Please fill in all the required fields.");

    try {
        const data = await resend.emails.send({
            from: "contact@scaffoldingpt.ro",
            to: "scaffoldingpt@gmail.ro",
            subject: `[ANGAJĂRI] ${body.subject}`,
            react: ApplyTemplate(body)
        });

        return NextResponse.json({ data });
    }
    catch(error) {
        return NextResponse.json({ error });
    }
}