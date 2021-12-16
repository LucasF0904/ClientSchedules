import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository'

export class PostgresReviewDateRepository implements IUsersRepository {
    private users: User[] = []
    async findByReviewDate(reviewDate: Date): Promise<User> {
        const user = this.users.find(user => user.reviewDate === reviewDate)

        return user
    }

    async save(user: User): Promise<void> {
        this.users.push(user)
    }
}