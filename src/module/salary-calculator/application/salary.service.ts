import {Injectable} from '@nestjs/common';
import {SalaryResponseDto} from './dto/salary.response.dto';
import {SalaryRepository} from '../infrastructure/salary.repository';
import {CreateSalaryRequestDto} from './dto/create-salary.request.dto';
import {Salary} from '../domain/salary';

@Injectable()
export class SalaryService {
    constructor(private repository: SalaryRepository) {
    }

    public async getAllSalaries(): Promise<SalaryResponseDto[]> {
        return (await this.repository.findAll()).map((salary) => new SalaryResponseDto(salary));
    }

    public async create(
        salaryRequest: CreateSalaryRequestDto,
    ): Promise<SalaryResponseDto> {
        const salary = new Salary(null, salaryRequest.name, salaryRequest.yearlySalary);
        const savedSalary = await this.repository.create(salary);
        return new SalaryResponseDto(savedSalary);
    }
}
