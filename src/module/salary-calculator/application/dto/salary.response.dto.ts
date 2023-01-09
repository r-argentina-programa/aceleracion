import 'reflect-metadata';
import {Salary} from "../../domain/salary";
import {Expose, Transform} from "class-transformer";
export class SalaryResponseDto {
    public id: number | null
    public name: string
    public yearlySalary: number
    public monthlySalary: number
    constructor(salary: Partial<Salary>) {
        Object.assign(this, salary);
        this.monthlySalary = salary.monthlySalary as number;
    }
}
