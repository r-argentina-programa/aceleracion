import {Injectable} from '@nestjs/common';
import {PrismaProvider} from '../../shared/infrastructure/prisma-provider.service';
import {plainToInstance} from 'class-transformer';
import {Salary} from '../domain/salary';
import {Prisma as PrismaClient} from '@prisma/client';

@Injectable()
export class SalaryRepository {
    constructor(private prisma: PrismaProvider) {
    }

    public async findAll(): Promise<Salary[]> {
        return (await this.prisma.salary.findMany()).map((salary) => {
            return plainToInstance(Salary, salary);
        });
    }

    public async create(salary: Salary): Promise<Salary> {
        const savedSalary = await this.prisma.salary.create({
            data: {
                name: salary.name,
                yearlySalary: salary.yearlySalary
            } as PrismaClient.SalaryCreateInput
        });
        return plainToInstance(Salary, savedSalary);
    }
}
