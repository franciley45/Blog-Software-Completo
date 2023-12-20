import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import User from '../../entities/User';

export class UserSeed1703097680421 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const userRepository = dataSource.getRepository(User)

		const userData = {
			name: 'user1',
			email: 'user1@gmail.com',
			password: "12345"
		}

		const userExists = await userRepository.findOneBy({ email: userData.email })

		if (!userExists) {
			const newUser = userRepository.create(userData)
			await userRepository.save(newUser)
		}
    }
}
