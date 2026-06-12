function calcularLavoura() {
    // Todos os itens que temos na nossa tabela
    const itens = ['semente', 'adubo', 'fertilizante', 'mecanizacao'];
    let custoTotalGeral = 0;

    // Repetição para calcular cada linha (Quantidade x Valor)
    itens.forEach(item => {
        // Pega o que o usuário digitou ou considera Zero se estiver vazio
        const quantidade = parseFloat(document.getElementById(`qtd_${item}`).value) || 0;
        const valorUnitario = parseFloat(document.getElementById(`val_${item}`).value) || 0;
        
        // Multiplica
        const subtotal = quantidade * valorUnitario;
        
        // Coloca o subtotal do item na coluna da frente formatado em Reais
        document.getElementById(`total_${item}`).innerText = formatarMoeda(subtotal);
        
        // Guarda na memória do Custo Geral Total
        custoTotalGeral += subtotal;
    });

    // Atualiza o quadradão final amarelo com a soma completa
    document.getElementById('custo_total_geral').innerText = formatarMoeda(custoTotalGeral);
}

// Uma funçãozinha para formatar os números bonitos com R$ e vírgulas
function formatarMoeda(valor) {
    return "R$ " + valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

// Garante que logo que a página abra tudo fique formatado em R$ 0,00
window.onload = function() {
    calcularLavoura();
};