const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

const manipulaString = (string) => {

const fraseNova = string.replace('verde', 'rosa').replace('azul', 'laranja')
const frasetoUpperCase = fraseNova.toUpperCase()

console.log(string)
console.log(fraseNova)
console.log(fraseNova.includes('verde'))
console.log(fraseNova.includes('laranja'))
console.log(frasetoUpperCase)

}

manipulaString(frase)
