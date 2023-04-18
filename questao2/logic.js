const TEXT_INPUT_ID = "text_input";
const TEXT_SHOW_ID = "text_show";

const textInput = document.getElementById(TEXT_INPUT_ID);
const textShow = document.getElementById(TEXT_SHOW_ID);



function textChange() {
textShow.innerHTML = textInput.value
}
