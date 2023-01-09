export class Programa{
  calcularSalarioMensual(salarioAnual: number): number{
    const SUELDOS_ANUALES = 12;
    return salarioAnual / SUELDOS_ANUALES;
  }

}
