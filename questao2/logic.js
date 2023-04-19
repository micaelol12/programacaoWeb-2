const TEXT_INPUT_ID = "text_input";
const TEXT_SHOW_ID = "text_show";
const TEXT_COUNT = "num_caracteres"

const textInput = document.getElementById(TEXT_INPUT_ID);
const textShow = document.getElementById(TEXT_SHOW_ID);
const textCount = document.getElementById(TEXT_COUNT);


function textChange() {
textShow.innerHTML = textInput.value
}

function ContarCaracteres() {
    textCount.innerHTML = 'O tamanho atual do campo é de: ' + textInput.value.length
}