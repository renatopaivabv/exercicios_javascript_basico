function somaDeGauss(numeroMaximo) {
  let soma = 0;
  for (let i = 1; i <= numeroMaximo; i++) {
    soma += i;
  }
  return soma;
}

let total = somaDeGauss(4);

console.log(total);
