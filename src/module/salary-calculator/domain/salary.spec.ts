import {Salary} from "./salary";

describe("Salary module", () => {
    it("should get the monthly salary", () => {
        const salary = new Salary(1, "Fabricio", 12000);
        expect(salary.monthlySalary).toEqual(1000);
    })
})
