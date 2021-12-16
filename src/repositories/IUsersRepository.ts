import { User } from '../entities/User'

export interface  IUsersRepository {
    findByReviewDate(reviewDate: Date): Promise<User>
    save(user: User): Promise<void>
}