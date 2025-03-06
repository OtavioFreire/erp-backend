import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const knex = require('../config/database.config');

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  
  async validateUser(login: string, password: string): Promise<any> {
    
    const user = await knex('users').where({ login }).first();

    if (login === user.login && password === user.password) {
      return { userId: 1, login };
    }
    return null;
  }

  async login(user: any) {
    const payload = { login: user.login, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}