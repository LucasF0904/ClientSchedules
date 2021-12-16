import { uuid } from 'uuidv4'

export class User {
    public readonly id: string

    public name: string
    public phone: number
    public modelCar: string
    public licensePlate: string
    public reviewDate: Date

    constructor(props: Omit<User, 'id'>, id?: string ){
        Object.assign(this, props)

        if(!id) {
            this.id = uuid() 
        }
    } 
}