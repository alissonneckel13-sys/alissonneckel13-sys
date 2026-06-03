/**
 * EXERCÍCIO DE LÓGICA: AUTOMAÇÃO DE CONTAGEM EM LOTE
 * Objetivo: Praticar laços de repetição (Loops) e incremento.
 */

function inspecionarLote(quantidadeItens) {
    console.log(`Iniciando a verificação do lote com ${quantidadeItens} unidades...`);

    // Laço de repetição FOR (Executa o bloco até atingir a quantidade de itens)
    for (let i = 1; i <= quantidadeItens; i++) {
        console.log(`> Item número ${i} processado e verificado.`);
    }

    return `Sucesso: Todos os ${quantidadeItens} itens do lote foram processados com sucesso!`;
}

console.log("--- INICIANDO LOOP DE AUTOMAÇÃO ---");
let statusFinal = inspecionarLote(5); // Altere o número 5 para testar lotes maiores
console.log(statusFinal);
