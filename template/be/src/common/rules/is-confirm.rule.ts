import { PrismaClient } from '@prisma/client'
import { registerDecorator , ValidationArguments , ValidationOptions } from 'class-validator'

//表字段是否唯一
export function IsConfiemRule(
   validationOptions?: ValidationOptions
) {
   return function (object: Record<string , any>, propertyName: string) {
       registerDecorator({
           name: 'IsConfiemRule',
           target: object.constructor,
           propertyName: propertyName,
           constraints: [],
           options: validationOptions,
           validator: {
               async validate(value: string, args: ValidationArguments) {
                   //TODO
                   return Boolean(value == args.object[`${args.property}_confirm`])
                   //END
               }
           }
       })
   }
}