let nome1 = prompt("Digite o nome da pessoa 1")
let sobrenome1 = prompt("Digite o sobrenome da pessoa 1")
let idade1 = Number(prompt("Digite a idade da pessoa 1"))
let nacionalidade1 = prompt("Digite o pais de origem da pessoa 1")

let nome2 = prompt("Digite o nome da pessoa 2")
let sobrenome2 = prompt("Digite o sobrenome da pessoa 2")
let idade2 = Number(prompt("Digite a idade da pessoa 2"))
let nacionalidade2 = prompt("Digite o pais de origem da pessoa2")


let dadosPessoa1 = { 
    nome1 : nome1,
    sobrenome1:sobrenome1,
    idade1:idade1, 
    nacionalidade1:nacionalidade1,
}

let dadosPessoa2 = { 
    nome2 : nome2,
    sobrenome2:sobrenome2,
    idade2:idade2, 
    nacionalidade2:nacionalidade2
}

if(dadosPessoa1.idade1>dadosPessoa2.idade2){
    console.log(`${dadosPessoa1.nome1} é mais velho que ${dadosPessoa2.nome2}`)
} else if(dadosPessoa1.idade1<dadosPessoa2.idade2){
    console.log(`${dadosPessoa1.nome1} é mais novo que ${dadosPessoa2.nome2}`)
}else{
    console.log(`${dadosPessoa1.nome1} y ${dadosPessoa2.nome2} eles tem a misma idade`)
}

if(dadosPessoa1.nacionalidade1===dadosPessoa2.nacionalidade2){
    console.log(`${dadosPessoa1.nome1} e ${dadosPessoa2.nome2} eles são do mismo pais ${dadosPessoa2.nacionalidade2} `)
}else{
    console.log(`Eles são de diferentes paises, ${dadosPessoa1.nome1} é do pais ${dadosPessoa1.nacionalidade1} e ${dadosPessoa2.nome2} é do pais ${dadosPessoa2.nacionalidade2}  `)
}

console.table(dados)