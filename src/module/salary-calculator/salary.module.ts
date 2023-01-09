import {Module} from '@nestjs/common';
import {SalaryController} from './interface/salary.controller';
import {SalaryService} from "./application/salary.service";
import {SalaryRepository} from "./infrastructure/salary.repository";

@Module({
    imports: [],
    controllers: [SalaryController],
    providers: [SalaryService, SalaryRepository],
})
export class SalaryModule {
}
