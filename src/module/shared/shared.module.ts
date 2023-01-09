
import { Module, Global } from '@nestjs/common';
import {PrismaProvider} from "./infrastructure/prisma-provider.service";

@Global()
@Module({
    controllers: [],
    providers: [PrismaProvider],
    exports: [PrismaProvider],
})
export class SharedModule {}
