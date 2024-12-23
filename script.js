function adicionarCaractere(caractere) {
  const display = document.querySelector(".display");
  display.value += caractere;
}

function calcular() {
  const display = document.querySelector(".display");
  display.value = eval(display.value);
}

function limparDisplay() {
  const display = document.querySelector(".display");
  display.value = "";
}

function inverterNumero() {
  const display = document.querySelector(".display");
  display.value = display.value * -1;
}
