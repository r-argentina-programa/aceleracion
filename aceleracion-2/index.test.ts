// https://jestjs.io/docs/getting-started#using-typescript
// https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/#jest-config-file
// rename jest.config.js to jest.config.cjs

import { Programa } from './index'

describe('Cálculo de salarios', function () {
  it('debería calcular el salario mensual en base a un salario anual correcto', function () {
    const programa = new Programa();
    expect(programa.calcularSalarioMensual(1200)).toStrictEqual(100);
  })
});
