let numero = parseFloat(prompt("Insira um número:"));

if (isNaN(numero)) {
    alert("Erro: você não digitou um número válido");
}else {
    if (numero > 0) {
        alert("O número é positivo!")
    }else{
        alert("Seu número não é positivo!")
    }
}