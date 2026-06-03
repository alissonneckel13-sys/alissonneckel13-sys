/**
 * SISTEMA DE VALIDAÇÃO DE ENTRADAS E STATUS (EXEMPLO DE LÓGICA E TESTES)
 * Objetivo: Analisar se os dados informados são válidos e automatizar a tomada de decisão.
 */

// 1. Função que simula a validação de um indicador ou entrada de sistema
function avaliarStatusItem(valorMedido, limiteMaximo) {
    // Cenário de Teste 1: Validação de tipo de dado (Segurança do sistema)
    if (typeof valorMedido !== 'number' || typeof limiteMaximo !== 'number') {
        return "ERRO: As entradas devem ser valores numéricos.";
    }

    // Cenário de Teste 2: Valor acima do esperado (Gera alerta de desvio)
    if (valorMedido > limiteMaximo) {
        return `ALERTA: Valor medido (${valorMedido}) está ACIMA do limite máximo permitido (${limiteMaximo}).`;
    }

    // Cenário de Teste 3: Valor dentro do esperado (Conforme)
    return `SUCESSO: Valor medido (${valorMedido}) está dentro do padrão (Limite: ${limiteMaximo}).`;
}

// ==========================================
// EXECUÇÃO DOS CENÁRIOS DE TESTE (MOCK)
// ==========================================

console.log("--- INICIANDO EXECUTOR DE LOGICA --- \n");

// Caso 1: Testando uma situação de Sucesso (Valores normais)
let resultado1 = avaliarStatusItem(150, 200);
console.log("Teste 1 (Dentro do limite):", resultado1);

// Caso 2: Testando uma situação de Alerta (Desvio/Não-conformidade)
let resultado2 = avaliarStatusItem(250, 200);
console.log("Teste 2 (Acima do limite):", resultado2);

// Caso 3: Testando a resiliência do código (Entrada de dados inválida por erro do usuário)
let resultado3 = avaliarStatusItem("duzentos", 200);
console.log("Teste 3 (Tratamento de erro):", resultado3);

console.log("\n--- EXECUÇÃO CONCLUÍDA COM SUCESSO ---");
