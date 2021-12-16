import { Router } from 'express'
import { createReviewDateController } from './useCases/CreateReviewDate'

const router = Router()

router.post("/users", (request, response ) => {
    return createReviewDateController.handle(request, response)
})

export { router }