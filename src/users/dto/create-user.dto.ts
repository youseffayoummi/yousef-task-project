import { IsNotEmpty } from "class-validator";
import { Gender } from "src/shared/enums/gender.enum";

export class CreateUserDto { 
    
    id: number;

    @IsNotEmpty()
    username: string;
    
    email: string;
    
    password: string;

    gender: Gender;

    birthday: string;

    city: string;

    

}
