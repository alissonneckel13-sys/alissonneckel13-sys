# 🐛 Relatório de Não-Conformidade (Bug Report)

**ID do Bug:** BUG-001  
**Título:** Sistema aceita caracteres especiais inválidos no campo de telefone  
**Gravidade:** Média  
**Prioridade:** Alta  

### 📝 Descrição:
Ao realizar testes exploratórios na página de cadastro de perfil, identificou-se que o sistema permite o salvamento do formulário contendo letras e símbolos especiais no campo destinado ao número de telefone, gerando uma inconsistência de dados no banco.

### 🚀 Passos para Reproduzir o Erro:
1. Acesse a página de "Editar Perfil".
2. Vá até o campo "Telefone".
3. Digite o texto: `(54) 99999-AAAA#`
4. Clique em "Salvar Alterações".

### 📊 Resultado Esperado:
O sistema deve aplicar uma máscara de validação, impedir o salvamento e exibir um alerta informando que o campo aceita apenas números.

### ❌ Resultado Atual:
O sistema salva as alterações com sucesso e armazena os caracteres inválidos no perfil do usuário.
