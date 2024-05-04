const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

describe('calcularValorTotalProjeto', () => {
    test('Deve calcular o valor total de um projeto válido', () => {
      const funcionalidades = ['setup', 'responsividade'];
      const valorHora = 50;
      const totalValue = calcularValorTotalProjeto(funcionalidades, valorHora);
      expect(totalValue).toBe(1320);
    });  

})