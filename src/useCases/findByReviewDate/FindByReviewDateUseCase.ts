import { User } from '../../entities/User'
import { IMessageProvider } from '../../providers/IMessageProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IFindByReviewDateRequestDTO } from './FindByReviewDateDTO'

export class FindByReviewDateUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private messageProvider: IMessageProvider
    ){}
    async execute(data: IFindByReviewDateRequestDTO) {
        const user = new User(data)
        await this.usersRepository.findByReviewDate(data.reviewDate)

        await this.messageProvider.sendMessage({
            to: {
                name: data.name,
                phone: data.phone
            },
            from: {
                name: 'Equipe de Revisão do seu carro',
                phone: 5531995871750
            },
            body: 'Foi encontrado a data: ' + data.reviewDate
        })
    }

}