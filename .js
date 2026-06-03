/**
 * SISTEMA DE INSPEÇÃO DE QUALIDADE E ANÁLISE DE DESVIOS
 * Objetivo: Validar parâmetros técnicos e automatizar a identificação de não-conformidades.
 */

function inspecionarParametro(valorMedido, limiteMaximo, nomeParametro) {
    // Cenário de Teste 1: Validação de Segurança (Dados inválidos)
    if (typeof valorMedido !== 'number' || typeof limiteMaximo !== 'number') {
        return `ERRO [${nomeParametro}]: Entrada inválida. Ambas as medições precisam ser numéricas.`;
    }

    // Cenário de Teste 2: Identificação de Desvio (Fora do padrão)
    if (valorMedido > limiteMaximo) {
        return `ALERTA DE NÃO-CONFORMIDADE [${nomeParametro}]: O valor medido (${valorMedido}) ultrapassou o limite máximo permitido (${limiteMaximo}).`;
    }

    // Cenário de Teste 3: Processo Conforme (Sucesso)
    return `SUCESSO [${nomeParametro}]: Medição de ${valorMedido} está totalmente dentro dos padrões estabelecidos.`;
}

// ==========================================
// EXECUTANDO OS CENÁRIOS DE TESTE (MOCK)
// ==========================================
console.log("--- INICIANDO ROTINA DE INSPEÇÃO DE QUALIDADE --- \n");

// Teste 1: Cenário com desvio técnico detectado
let testeTemperatura = inspecionarParametro(650, 600, "Temperatura");
console.log(testeTemperatura);

// Teste 2: Cenário totalmente aprovado e conforme
let testeDimensao = inspecionarParametro(45, 50, "Dimensional Pino");
console.log(testeDimensao);

// Teste 3: Cenário de erro de digitação no sistema (Tratamento de exceção)
let testeFalhaDados = inspecionarParametro("quarenta", 50, "Dimensional Eixo");
console.log(testeFalhaDados);

console.log("\n--- INSPEÇÃO FINALIZADA ---");
