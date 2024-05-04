const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcularHorasDeProjeto', () => {
  test('Deve ser calculada a soma das horas necessárias para concluir o projeto.', () => {
     const funcionalidades = [
          'setup',
          'construcao_1_pagina',
          'formulario'
     ]
     const result = calcularHorasDeProjeto(funcionalidades);
     expect(result).toEqual(32);
  });
});