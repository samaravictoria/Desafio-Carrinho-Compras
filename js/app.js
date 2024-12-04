let totalGeral = 0;

function limpar() {
    totalGeral = 0; // Reinicia o total geral
    document.getElementById('lista-produtos').innerHTML = ''; // Limpa o carrinho
    document.getElementById('valor-total').textContent = 'R$ 0.00'; // Reseta o valor total
    document.getElementById('quantidade').value = 0; // Reseta o campo de quantidade
}

function adicionar() {
    // Recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1].trim());
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Validar entradas
    if (!nomeProduto || isNaN(valorUnitario) || isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }

    // Calcular o preço (subtotal)
    let preco = quantidade * valorUnitario;

    // Adicionar produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} 
            <span class="texto-azul">R$ ${preco.toFixed(2)}</span>
        </section>`;

    // Atualizar o total geral
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;

    // Resetar o campo de quantidade
    document.getElementById('quantidade').value = 0;
}
