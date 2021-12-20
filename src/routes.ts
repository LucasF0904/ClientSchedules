import { Router } from 'express'
import { createReviewDateController } from './useCases/CreateReviewDate'

const router = Router()

router.post("/reviewDate", (request, response ) => {
    return createReviewDateController.handle(request, response)
})

router.post("/findByReviewDate", (request, response ) => {
    return createReviewDateController.handle(request, response)
})


export { router }