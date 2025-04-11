import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import knex, { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';



@Injectable()
export class AuthService {
  constructor(@InjectModel() private readonly knex: Knex, private jwtService: JwtService) {}
  
  async validateUser(login: string, password: string): Promise<any> {
    
    const user = await this.knex('users').where({ login }).first();

    if (login === user.login && password === user.password) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { login: user.login, nome: user.nome, sub: user.userId};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}