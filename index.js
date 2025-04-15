let numero = parseFloat(prompt("Insira um número:"));

if (isNaN(numero)) {
    alert("Erro: você não digitou um número válido");
} else {
    if (numero%5 == 0) {
        alert("O número é múltiplo de 5!");
    }else{
        alert("O número não é múltiplo de 5!");
    }
    
        
}