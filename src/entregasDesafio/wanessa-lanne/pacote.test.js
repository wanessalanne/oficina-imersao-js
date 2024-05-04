const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("calcularPacote", () => {
  test("Deve retornar pacote quando o total de horas for até 50hr", () => {
    const totalDeHorasPorProjeto = 49;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });

  test("Deve retornar pacote quando o total de horas for igual a  50hr", () => {
    const totalDeHorasPorProjeto = 50;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });

  test("Deve retornar pacote quando o total de horas for até 100hr", () => {
    const totalDeHorasPorProjeto = 99;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_intermediario");
  });

  test("Deve retornar pacote quando o total de horas for igual a  100hr", () => {
    const totalDeHorasPorProjeto = 100;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_intermediario");
  });

  test("Deve retornar pacote quando o total de horas até 200hrs", () => {
    const totalDeHorasPorProjeto = 199;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_premium");
  });

  test("Deve retornar pacote quando o total de horas for igual a 200hrs", () => {
    const totalDeHorasPorProjeto = 200;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_premium");
  });
});
