let idade = parseFloat(prompt("Insira sua idade:"));

if (isNaN(idade) || idade<0) {
    alert("Erro: você não digitou um número válido");
} else {
    if (idade>=18) {
        alert("Você é maior de idade!")
    }else{
        alert("Você é menor de idade!")
    }
    
        
}