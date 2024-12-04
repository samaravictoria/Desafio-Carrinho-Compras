function adicionar () {
//recuperar valores: nome do produto, quantidade e valor;  
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value;

        // Alert teste:
            // alert(nomeProduto);
            // alert(valorUnitario);
            // alert(quantidade.value);
  
        
//calcular o preço = sub total; 
    let preco = quantidade.value * valorUnitario; 
    let carrinho = document.getElementById('lista-produtos');  
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span> </section>`;

        // Alert teste:
            // alert(preco); 


//adicionar o produto no carrinho;
//atualizar o total da compra; 
}

function limpar () { 
}