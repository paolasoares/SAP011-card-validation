import validator from "./validator.js";
const form = document.querySelector('#form');
const result = document.querySelector('.resultado');
const dadosFixos = document.querySelector('.dadosFixos');

const dadosDigitados =[];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numCartao = form.numero.value;
    const data = form.data.value;
    const cvc = form.cvc.value;

    if (validator.isValid(numCartao)) {
        const numFormato = validator.maskify(numCartao);

        const msg = `
        Numero: ${numFormato}
        Data: ${data}
        Cvc: ${cvc}
        `;
    
        result.innerText = msg + `Válido` ;

        dadosDigitados.push(numFormato+' - Válido');
        salvaDados();

    } else {
        result.innerText =`Inválido`;
        result.style.color = 'red';
    } 
});

function salvaDados(){
    dadosFixos.innerHTML = "";

    dadosDigitados.forEach((dados) => {
        const div = document.createElement("div");
        div.innerText = dados;
        dadosFixos.appendChild(div);
    })
}
// Inserir o número que desejamos validar. Use apenas caracteres numéricos (dígitos) no cartão para validar [0-9]. - ok
// Constatar se o resultado é válido ou não. - ok
// Ocultar todos os dígitos do número do cartão, excetuando os últimos 4 caracteres. -ok 
// Não deve poder inserir um campo vazio. - ok
