function adicionar () {
//recuperar valores: nome do produto, quantidade e valor;  
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade');

        // Alert teste:
        alert(nomeProduto);
        alert(valorUnitario);
        alert(quantidade.value);
  
        
//calcular o preço = sub total; 
    let preco = quantidade.value * valorUnitario; 

        // Alert teste:
            alert(preco); 


//adicionar o produto no carrinho;
//atualizar o total da compra; 
}

function limpar () { 
}