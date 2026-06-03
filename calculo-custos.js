/**
 * EXERCÍCIO DE LÓGICA: CONTROLE DE CUSTOS OPERACIONAIS
 * Objetivo: Praticar variáveis, operadores matemáticos e estruturas condicionais.
 */

function analisarCustos(faturamento, despesasFixas, despesasVariaveis) {
    let custoTotal = despesasFixas + despesasVariaveis;
    let saldoFinal = faturamento - custoTotal;

    console.log(`Faturamento Total: R$ ${faturamento}`);
    console.log(`Custo Total Operacional: R$ ${custoTotal}`);
    console.log(`Saldo Final: R$ ${saldoFinal}`);

    // Estrutura Condicional (If / Else)
    if (saldoFinal > 0) {
        return "Resultado: Operação Lucrativa (Dentro do esperado).";
    } else if (saldoFinal === 0) {
        return "Resultado: Ponto de Equilíbrio (Sem lucro, mas sem prejuízo).";
    } else {
        return "Resultado: Alerta de Prejuízo (Custos superaram o faturamento).";
    }
}

console.log("--- EXECUTANDO ANÁLISE FINANCEIRA ---");
let resultadoAnalise = analisarCustos(3500, 1200, 800);
console.log(resultadoAnalise);
