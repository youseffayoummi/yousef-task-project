import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UsersService {
  users: User[]=[];
  async create(createUserDto: CreateUserDto) { 
    let length= this.users.length
    
    const user = new User({...createUserDto, id: length++});
    this.users.push(user);


    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id : number) {
    return this.users.find((user)=> user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id===id);
    user.updateOne(updateUserDto)
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
