/**
 * SISTEMA DE VALIDAÇÃO DE CONFORMIDADE DE PROCESSO
 * Desenvolvido por: Alisson Neckel
 * Objetivo: Validar parâmetros técnicos e tratar erros de entrada (Input)
 */

// Função que simula a inspeção de um parâmetro técnico (ex: Temperatura de Processo)
function inspecionarParametro(valorMedido, limiteMinimo, limiteMaximo) {
    
    // Tratamento de Erros (Garantindo que os inputs sejam números)
    if (typeof valorMedido !== 'number' || typeof limiteMinimo !== 'number' || typeof limiteMaximo !== 'number') {
        return "❌ ERRO OPERACIONAL: Os valores inseridos precisam ser numéricos (Input Inválido).";
    }

    // Estrutura Condicional para tomada de decisão automatizada
    if (valorMedido < limiteMinimo) {
        return `⚠️ REPROVADO (Falha/Desvio): Valor medido (${valorMedido}) está ABAIXO do limite mínimo permitido (${limiteMinimo}).`;
    } 
    else if (valorMedido > limiteMaximo) {
        return `⚠️ REPROVADO (Falha/Desvio): Valor medido (${valorMedido}) está ACIMA do limite máximo permitido (${limiteMaximo}).`;
    } 
    else {
        return `✅ APROVADO (Conformidade): Valor medido (${valorMedido}) está dentro das tolerâncias especificadas (${limiteMinimo} a ${limiteMaximo}).`;
    }
}

// === CENÁRIOS DE TESTE EXECUTADOS NO TERMINAL ===

console.log("--- Executando Inspeções no Terminal --- \n");

// Cenário 1: Produto em Conformidade
const resultado1 = inspecionarParametro(180, 150, 200);
console.log("Cenário 1:", resultado1);

// Cenário 2: Produto com Falha/Desvio (Limite estourado para cima)
const resultado2 = inspecionarParametro(220, 150, 200);
console.log("Cenário 2:", resultado2);

// Cenário 3: Erro de digitação no sistema (Tratamento de tipo de dado)
const resultado3 = inspecionarParametro("cento e oitenta", 150, 200);
console.log("Cenário 3:", resultado3);
