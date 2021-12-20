import { MessagetrapMessageProvider } from '../../providers/implementations/MessagetrapMessageProvider'
import { PostgresReviewDateRepository } from '../../repositories/implementations/PostgresReviewDateRepository'
import { FindByReviewDateUseCase } from './FindByReviewDateUseCase'
import { FindByReviewDateController } from './FindByReviewDateController'

const messagetrapMessageProvider = new MessagetrapMessageProvider()
const postgresReviewDateRepository = new PostgresReviewDateRepository()

const findByReviewDateUseCase = new FindByReviewDateUseCase(postgresReviewDateRepository, messagetrapMessageProvider)
const findByReviewDateController = new FindByReviewDateController(findByReviewDateUseCase)

export { findByReviewDateUseCase, findByReviewDateController}