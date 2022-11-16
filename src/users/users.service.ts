import { Injectable } from '@nestjs/common';
import { uid } from 'uid';

import {
  CreateUserInput,
  DeleteUserInput,
  GetUserArgs,
  GetUsersArgs,
  UpdateUserInput,
} from './dto';
import { User } from './models';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public createUser(createUserData: CreateUserInput): User {
    const userId = uid(16);
    const user: User = {
      userId,
      ...createUserData,
    };
    this.users.push(user);
    return user;
  }

  public updateUser(updateUserData: UpdateUserInput): User {
    const user = this.users.find(
      (user) => user.userId === updateUserData.userId,
    );
    Object.assign(user, updateUserData);
    return user;
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.userId === getUserArgs.userId);
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  }

  public deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user.userId === deleteUserData.userId,
    );
    const user = this.users[userIndex];
    this.users.splice(userIndex);
    return user;
  }
}
