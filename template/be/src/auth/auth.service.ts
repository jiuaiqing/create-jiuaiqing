import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import RegisterDto from './dto/register.dto'
import AddDto from './dto/add.dto'
import DeleteDto from '@/auth/dto/delete.dto'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }
    async register(dto: RegisterDto) {
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password: dto.password,
                role: dto.role
            }
        })
        return "注册成功"
    }
    async add(dto: AddDto){
            return {
                 code: 200,
                massage: "添加成功",
            }
        }
    async delete (dto: DeleteDto){
                return {
                    code:200,
                    massage:"删除成功",
                }
            }
    }


