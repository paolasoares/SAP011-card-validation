//valida Cartão de crédito com o algoritmo luhn.
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
                }    if ((digit *= 2) > 0) digit -= 9;
            }
            soma += digit;
            par = !par;
        }
        return soma % 10 === 0;
    },

    //deixa visivel somente os últimos digitos
    maskify(numCartao){
        const ultimosDigit = 4;
        return "#".repeat(numCartao.length - ultimosDigit) + numCartao.slice(-ultimosDigit);
     }
};


export default validator;
