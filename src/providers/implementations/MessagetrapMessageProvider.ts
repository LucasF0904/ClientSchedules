import { IMessage, IMessageProvider } from '../IMessageProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MessagetrapMessageProvider implements IMessageProvider{
    private transporter

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '7aad44030706b9',
                pass: 'ef05a81203a007'
            }
        })
    }

    async sendMessage(message: IMessage): Promise<void> {
        await this.transporter.sendMessage({
            to: {
                name: message.to.name,
                address: message.to.phone
            },
            from: {
                name: message.from.name,
                address: message.from.phone
            },
            html: message.body
        })
    }
}