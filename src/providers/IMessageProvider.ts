interface IAddres {
    phone: number
    name: string
}

export interface IMessage {
    to: IAddres
    from: IAddres
    body: string
}

export interface IMessageProvider {
    sendMessage(message: IMessage): Promise<void>
}