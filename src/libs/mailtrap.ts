import { MailtrapClient } from "mailtrap";
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config()

export const sendEmail = async (to: string, subject: string, body: string) => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "d6ea48e85afae0",
            pass: "3e75c45a852885"
        }
    });

    let message = {
        from: { name: 'Teste', email: 'Testador@gmail.com'},
        to,
        subject,
        text: body
    }

    transport.sendMail(message, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
    });
}