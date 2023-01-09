import {Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors} from '@nestjs/common';
import {SalaryService} from "../application/salary.service";
import {SalaryResponseDto} from "../application/dto/salary.response.dto";
import {CreateSalaryRequestDto} from "../application/dto/create-salary.request.dto";
import {plainToInstance} from "class-transformer";
import {Salary} from "../domain/salary";

@Controller('salary')
export class SalaryController {
  constructor(private readonly salaryCalculatorService: SalaryService) {}

  @Get('/')
  async getAll(): Promise<SalaryResponseDto[]> {
    return this.salaryCalculatorService.getAllSalaries();
  }

  @Post('/')
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() createSalaryRequest: CreateSalaryRequestDto): Promise<SalaryResponseDto> {
    return await this.salaryCalculatorService.create(createSalaryRequest);
  }
}
