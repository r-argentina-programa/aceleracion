import {Module} from '@nestjs/common';
import {SalaryModule} from "./module/salary-calculator/salary.module";
import {SharedModule} from "./module/shared/shared.module";
import 'reflect-metadata';

@Module({
    imports: [SharedModule, SalaryModule],
    controllers: [],
    providers: [],
    exports: [SalaryModule]
})
export class AppModule {
}
