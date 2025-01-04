import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoDB";
import ContactMessage from "@/models/ContactMessage";

export async function POST(request: Request) {
    try {
        await connectDB();

        const body = await request.json();
        const { name, email, subject, message } = body;

        if(!name || !email || !subject || !message) {
            return NextResponse.json(
                { status: false, message: "All feilds are required." },
                { status: 400 }
            );
        }

        const contactMessage = new ContactMessage({ name, email, subject, message });
        await contactMessage.save();

        return NextResponse.json(
            { status: true, message: "Message saved." },
            { status: 201 }
        );

    } catch (error) {
        console.error("POST ERROR: ", error);
        return NextResponse.json(
            { status: false, message: "Failed to save message." },
            { status: 500 }
        );
    }
}