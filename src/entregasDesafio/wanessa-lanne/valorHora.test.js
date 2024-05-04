const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('calcularValorPorHora', () => {
    test ('Deve retornar o valor arredondado considerando o valor recebido no mês', () => {
        const valorPorMes = 2000;
        const result = calcularValorPorHora(valorPorMes);
        expect(result).toEqual(12);
    });
});