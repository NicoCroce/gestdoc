import { container } from '@server/utils/Container';
import { UsersService } from './Application';
import { UsersController } from './Infrastructure/Controllers/Users.controller';
import { UsersRepositoryImplementation } from './Infrastructure/UsersRepository.implementation.localDB';
import { asClass } from 'awilix';
import { GetAllUsers, GetUser, RegisterUser } from './Domain';

container.register({
  usersRepository: asClass(UsersRepositoryImplementation),
  usersService: asClass(UsersService),
  usersController: asClass(UsersController),
  _getAllUsers: asClass(GetAllUsers),
  _getUser: asClass(GetUser),
  _registerUser: asClass(RegisterUser),
});

export const usersController =
  container.resolve<UsersController>('usersController');
