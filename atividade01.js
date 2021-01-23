function vezesLetraAparece(frase, letra) {
  let total = 0;
  for (var posicao = 0; posicao < frase.length; posicao++) {
    if (frase.charAt(posicao) == letra) {
      total += 1;
    }
  }
  return total;
}

let frase = "Primeiro teste";
let letra = "e";

let totalDeLetras = vezesLetraAparece(frase, letra);

console.log(totalDeLetras);
