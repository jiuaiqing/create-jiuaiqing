import { Controller, Body, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import  RegisterDto  from './dto/register.dto'
import  AddDto  from './dto/add.dto'
import DeleteDto from './dto/delete.dto'

@Controller()
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }

    @Post('register')//接口
    register/*函数*/(@Body() dto: RegisterDto) {
        return this.AuthService.register(dto)//调用逻辑函数
    }

    @Post('add')
    add(@Body() dto: AddDto) {
        return this.AuthService.add(dto)
    }

    @Post('delete')
    delete(@Body() dto: DeleteDto) {
        return this.AuthService.delete(dto)
    }
}