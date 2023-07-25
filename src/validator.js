// const validator = {
//     isValid(numCartao) {
//         //remove espaço em branco e verifica a entrada é uma string numérica válida
//         numCartao = numCartao.replace(/\s/g, '');
//         if (!/^\d+$/.test(numCartao)) {
//             return false;
//         }
//         //Implementação do algoritmo de Luhn
//         let soma = 0;
//         let par = false;
//         for (let i = numCartao.length - 1; i >= 0; i--) {
//             let digit = parseInt(numCartao.charAt(i), 10);
//             if (par) {
//                 if ((digit *= 2) > 0) digit -= 9;
//             }
//             soma += digit;
//             par = !par;
//         }
//         return soma % 10 === 0;
//     },
//     maskify(numCartao){
//         const ultimosDigit = numCartao.slice(-4);
//         const digitOculto = numCartao.slice(0, -4).replace(/./g,'#');
//         return ultimosDigit + digitOculto;
//     }
// };

// export {validator};
