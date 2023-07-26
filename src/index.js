import validator from "./validator.js";
const form = document.querySelector('#form');
const result = document.querySelector('.resultado');

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
        
        result.innerText = msg + `Válido`
    } else {
        result.innerText = `Inválido`;
    }
});
