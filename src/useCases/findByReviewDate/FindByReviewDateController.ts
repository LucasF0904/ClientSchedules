import { Request } from 'express'
import { FindByReviewDateUseCase } from './FindByReviewDateUseCase'

export class FindByReviewDateController {
    constructor(
        private findByReviewDateUseCase: FindByReviewDateUseCase,
    ){}
    async handle(request: Request, response: Response): Promise<Response> {
        const { reviewDate, name, phone, modelCar, licensePlate } = request.body
        try{
            await this.findByReviewDateUseCase.execute({
                name,
                phone,
                reviewDate,
                modelCar,
                licensePlate
            })
            return response.status(201).send()
        }
        catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}