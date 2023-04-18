const FIRST_NUMBER_ID = "first_number";
const SECOND_NUMBER_ID = "second_number";
const SOMAR_RES_ID = "soma_res";
const COMPARAR_RES_ID = "comparar_res";

const first_number = document.getElementById(FIRST_NUMBER_ID);
const second_number = document.getElementById(SECOND_NUMBER_ID);
const somar_res_element = document.getElementById(SOMAR_RES_ID);
const comparar_res_element = document.getElementById(COMPARAR_RES_ID);

function Somar(a, b) {
  return a + b;
}

function BotaoSomar() {
  fN = Number(first_number.value);
  sN = Number(second_number.value);
  somar_res_element.innerHTML = 'A resposta da soma é: ' + Somar(fN, sN);
}

function Comparar(a, b) {
  if (a > b) return 1;
  if (b > a) return -1;
  if (b == a) return 0;
}

function botaoComparar() {
    fN = Number(first_number.value);
    sN = Number(second_number.value);
    const resposta = Comparar(fN,sN)
    if(resposta == 1) {
        comparar_res_element.innerHTML = "Primeiro número é maior"
        comparar_res_element.classList = "red"
    }
    if(resposta == -1) {
        comparar_res_element.innerHTML = "Segundo número é maior"
        comparar_res_element.classList = "green"
    }
    if(resposta == 0) {
        comparar_res_element.innerHTML = "Ambos são iguais"
        comparar_res_element.classList = "yellow"
    }
    
}