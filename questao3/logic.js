const LIST_ID = "list";
const NUMBER_INPUT_ID = 'number_imput'
const TABLE_ID = 'table'

const list = document.getElementById(LIST_ID);
const number_input = document.getElementById(NUMBER_INPUT_ID);
const table =  document.getElementById(TABLE_ID);

list.addEventListener("click", function(e){
    if(e.target && e.target.nodeName == "LI") {
        window.alert(e.target.innerHTML);
    }
})

table.addEventListener("click", function(e){
    if(e.target && e.target.nodeName == "TD") {
        window.alert(e.target.innerHTML);
    }
})


function OlaMundo() {
    window.alert("Olá, mundo!")
}

function parOuImpar(){
    const number = Number(number_input.value)

    if(number%2 == 0){
        window.alert("É par")
    } else {
        window.alert("É impar")
    }
}