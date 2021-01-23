function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
  if (["+", "-"].includes(operacao))
    return eval(`${numero}${operacao}${outroNumero}`);
  else return "Operação inválida";
}

let resultado = calculadoraAdicaoSubtracao(5, 4, "+");

console.log(resultado);
