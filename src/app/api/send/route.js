import { EmailTemplate } from '@/components/email-template'; 
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) { // This function will be called when the contact form is submitted with a POST request
    // return Response.json({ message: "POST request succeeds"}, { status: 200 }); // this line is to test if the POST request is working

    // Get the request body
    const body = await req.json(); // format: { name: '__', email: '__', subject: '__', message: '__' }
    console.log(body); 
    const { name, email, subject, message } = body; // Destructure the name, email, subject, and message from the request body


    try {
        const { data, error } = await resend.emails.send({
            from: `Connection from Portfolio viewer <info@transtarair.com>`,
            to: ['nguyendanlinh9122000@gmail.com'],
            subject: subject,
            react: EmailTemplate({ name: name, email, message }),
        });

        if (error) {
            console.log(error);
            return Response.json({ error }, { status: 500 });
        }
        return Response.json(data, { status: 200 }); // Return the response from the Resend API, which includes the message ID
    } catch (error) {
        console.log(error);
        return Response.json({ error }, { status: 500 });
    }
}

export async function GET(req, res) {
    return Response.json({ message: 'Hello from the API' });
}

