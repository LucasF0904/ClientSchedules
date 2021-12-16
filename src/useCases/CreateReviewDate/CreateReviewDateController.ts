import { Request, Response} from 'express'
import { CreateReviewDateUseCase } from './CreateReviewDateUseCase';

export class CreateReviewDateController {
    constructor(
        private createReviewDateUseCase: CreateReviewDateUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, phone, reviewDate, modelCar, licensePlate } = request.body

        try{
            await this.createReviewDateUseCase.execute({
                name,
                phone,
                reviewDate,
                modelCar,
                licensePlate
            })
            return response.status(201).send()
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unex[ected error'
            })
        }
    }
}