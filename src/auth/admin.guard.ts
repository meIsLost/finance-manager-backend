/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';

import { UsersService } from './../users/users.service';
import { Role } from 'src/users/Roles/roles';

//Used with JWT guard to allow only admin access to endpoint.
@Injectable()
export class AdminGuard implements CanActivate {
  constructor(@Inject(UsersService) private usersService: UsersService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId: number = request.user.id;

    const user = await this.usersService.findUserById(userId);

    // console.log("user in admin guard", user);

    // This returns true if there is a user and
    // the user is an admin
    return user && user.role === Role.Admin;
  }
}
