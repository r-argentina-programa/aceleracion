import {Expose} from "class-transformer";

@Expose()
export class Salary {
    constructor(public id: number | null, public name: string, public yearlySalary: number) {
    }
    get monthlySalary(): number {
        const MONTHS_IN_YEAR = 12;
        return this.yearlySalary / MONTHS_IN_YEAR;
    }
}
