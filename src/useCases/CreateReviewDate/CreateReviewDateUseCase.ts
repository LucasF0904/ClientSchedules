import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateReviewDateRequestDTO } from './CreateReviewDateDTO'

export class CreateReviewDateUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){

    }
    async execute(data: ICreateReviewDateRequestDTO) {
        const reviewDateAlreadyExists = await this.usersRepository.findByReviewDate(data.reviewDate)
        if (reviewDateAlreadyExists) {
            throw new Error ('This review date has already been set.')
        }

        const user = new User(data)
        await this.usersRepository.save(user)
        
    }
}