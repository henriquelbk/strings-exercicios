const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
const inicioDaFrase ='Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, '
const finalAlternativo = 'mas não deixe o gato sair"'
const fraseNova = frase.replace('verde', 'rosa').replace('azul', 'laranja')
const frasetpUpperCase = inicioDaFrase + finalAlternativo.toLocaleUpperCase()

console.log(fraseNova.includes('verde'))
console.log(fraseNova.includes('laranja'))
console.log(frasetpUpperCase)