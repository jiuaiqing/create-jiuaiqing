import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma.service';


@Global() // 全局模块
@Module({
   providers: [PrismaService],
   exports: [PrismaService]
})

export class PrismaModule{}