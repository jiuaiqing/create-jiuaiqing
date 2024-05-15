import { IsNotEmpty } from "class-validator";

export default class DeleteDto {

    @IsNotEmpty({ message:'用户名不能为空' })
    name:string;

}