import { MessagetrapMessageProvider } from '../../providers/implementations/MessagetrapMessageProvider'
import { PostgresReviewDateRepository } from '../../repositories/implementations/PostgresReviewDateRepository'
import { CreateReviewDateUseCase } from './CreateReviewDateUseCase'
import { CreateReviewDateController } from './CreateReviewDateController'


const messagetrapMessageProvider = new MessagetrapMessageProvider()
const postgresReviewDateRepository = new PostgresReviewDateRepository()

const createReviewDateUseCase = new CreateReviewDateUseCase( postgresReviewDateRepository, messagetrapMessageProvider )

const createReviewDateController = new CreateReviewDateController( createReviewDateUseCase)

export { createReviewDateUseCase, createReviewDateController}