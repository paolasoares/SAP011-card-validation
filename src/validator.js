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
            const digit = parseInt(numCartao.charAt(i), 10);
            //dobra o valor do digito se ele estiver em uma posição par.
            if (par) {
                let dobro = digit * 2;
                //Se o result for maior ou igual a 10, sibtrei por 9;
                if (dobro >= 10) {
                    dobro -= 9;
                }
                soma += dobro;
            } else {
                soma += digit;
            }
            par = !par;
        }
        return soma % 10 === 0;
    },

    //deixa visivel somente os últimos digitos
    maskify(numCartao) {
        const ultimosDigit = 4;
        return "#".repeat(numCartao.length - ultimosDigit) + numCartao.slice(-ultimosDigit);
    },

};
export default validator;
