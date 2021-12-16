import { User } from '../../entities/User'
import { IMessageProvider } from '../../providers/IMessageProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateReviewDateRequestDTO } from './CreateReviewDateDTO'

export class CreateReviewDateUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private messageProvider: IMessageProvider
    ){

    }
    async execute(data: ICreateReviewDateRequestDTO) {
        const reviewDateAlreadyExists = await this.usersRepository.findByReviewDate(data.reviewDate)
        if (reviewDateAlreadyExists) {
            throw new Error ('This review date has already been set.')
        }

        const user = new User(data)
        await this.usersRepository.save(user)

        await this.messageProvider.sendMessage({
            to: {
                name: data.name,
                phone: data.phone
            },
            from: {
                name: 'Equipe de Revisão do seu carro',
                phone: 5531995871750
            },
            body: 'O seu carro de modelo: ' + data.modelCar + ' e com a placa: ' + data.licensePlate + 
            ', teve o agendamento de revisão marcado para a data: ' + data.reviewDate + ' com sucesso!'
        })
        
    }
}