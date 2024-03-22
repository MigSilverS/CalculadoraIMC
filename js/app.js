let btn = document.getElementById("btn")
let resultado = document.getElementById("resultado")

let arrPessoa = []


function cadastrar() {

    

    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let categoria = document.getElementById("categoria").value
    //--------------------------------------------------------
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    //--------------------------------------------------------
    
    let imc = calculaImc(peso, altura)
    let resultadoimc = categoriaImc(imc)
    

    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        categoria: categoria, 
        altura: altura,
        peso: peso,
        imc: calculaImc(peso, altura),
        categoriaImc: categoriaImc(calculaImc(peso, altura))
    }

    arrPessoa.push(pessoa)

    imprimir()

    console.log(arrPessoa)

    

    //console.log(nome, sobrenome, categoria);

}



function calculaImc(peso, altura) {
    return (peso / Math.pow(altura, 2))
    
}

function categoriaImc(imc){
    if(imc <= 18.5) {
        resultadoimc = "Abaixo do normal";
    }else if(imc <= 24.9) {
        resultadoimc = "Normal";
    }else if(imc <= 29.9) {
        resultadoimc = "Sobrepeso";
    }else if(imc <= 34.9) {
        resultadoimc = "Obesidade Grau I";
    }else if(imc <= 39.0) {
        resultadoimc = "Obesidade Grau II";
    }else {
        resultadoimc = "Obesidade Grau III";
    }

    return resultadoimc;
}

function imprimir(){

    resultado.innerHTML = ''

    for(let i = 0; i < arrPessoa.length; i++)
    resultado.innerHTML += `
    <tr>
    <td>${arrPessoa[i].nome} ${arrPessoa[i].sobrenome} </td>
    <td>${arrPessoa[i].categoria}</td>
    <td>${arrPessoa[i].altura}</td>
    <td>${arrPessoa[i].peso}</td>
    <td>${arrPessoa[i].imc.toFixed(2)}</td>
    <td>${resultadoimc}</td>
    </tr>`
}



btn.addEventListener('click', cadastrar)