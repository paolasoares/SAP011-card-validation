//import validator from "./validator";
const form = document.querySelector('#form');
const result = document.querySelector('.resultado');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numCartao = form.numero.value;
    const cvc = form.cvc.value;


    if (validator.isValid(numCartao) && validator.isValid(cvc)) {
        document.getElementById('result').innerText = 'Válido'
    } else {
        document.getElementById('result').result.innerText = 'Inválido';
    }
});
    const validator = {
        isValid(numCartao) {
            //remove espaço em branco e verifica a entrada é uma string numérica válida
            numCartao = numCartao.replace(/\s/g, '');
            if (!/^\d+$/.test(numCartao)) {
                return false;
            }
        
        //Implementação do algoritmo de Luhn
        let soma = 0;
        let par = false;
        for (let i = numCartao.length - 1; i >= 0; i--) {
            let digit = parseInt(numCartao.charAt(i), 10);
            if (par) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }   
                    }
            soma += digit;
            par = !par;
        }
        return soma % 10 === 0;
    },
    maskify(numCartao) {
        const ultimosDigit = numCartao.slice(-4);
        const digitOculto = numCartao.slice(0, -4).replace(/./g, '#');
        return ultimosDigit + digitOculto;
    },
    validaCvc(cvc){
        const cvcVali = /^[0-9]{3,4}$/;
        return cvcVali.test(cvc);
    }

};
