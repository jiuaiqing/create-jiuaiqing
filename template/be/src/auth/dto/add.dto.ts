import { IsNotEmpty } from "class-validator";


export default class AddDto {
    @IsNotEmpty({ message:'用户名不能为空' })
    username:string;

    @IsNotEmpty({ message:'密码不能为空' })
    password:string

}