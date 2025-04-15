let numero = parseFloat(prompt("Insira um número:"));

if (isNaN(numero)) {
    alert("Erro: você não digitou um número válido");
} else {
    if (numero%2 == 0) {
        alert("O número é par!")
    }else{
        alert("O número é impar!")
    }
    
        
}