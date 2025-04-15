let valorCompra = parseFloat(prompt("Insira o valor da sua compra:"));

const valorDesconto = valorCompra * 0.1

if (isNaN(valorCompra) || valorCompra<=0) {
    alert("Erro: você não digitou um número válido");
} else {
    
    if (valorCompra >= 100) {
        alert(`O valor do seu desconto é de ${valorDesconto}`);
        alert(`O valor da sua compra é de ${valorCompra - valorDesconto}`)
    }else{
        alert(`O valor da sua compra é de ${valorCompra}`);
    }
}