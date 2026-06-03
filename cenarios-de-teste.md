# 📋 Plano e Cenários de Teste (Exemplo Prático)

**Sistema Analisado:** Tela de Login e Autenticação de Usuário
**Objetivo:** Garantir que o fluxo de acesso seja seguro, funcional e trate erros de entrada de forma clara.

---

### 🟢 Cenário 1: Login com Sucesso (Cenário Positivo)
* **Dado que:** O usuário está na tela de login.
* **Quando:** Insere um e-mail válido e a senha correta cadastrada.
* **E:** Clica no botão "Entrar".
* **Então:** O sistema deve autenticar o usuário e redirecioná-lo para a página inicial com sucesso.

### 🔴 Cenário 2: Tentativa de Login com Senha Incorreta (Cenário Negativo)
* **Dado que:** O usuário insere um e-mail cadastrado válido.
* **Quando:** Insere uma senha incorreta.
* **E:** Clica no botão "Entrar".
* **Então:** O sistema NÃO deve permitir o acesso e deve exibir a mensagem: *"E-mail ou senha inválidos"*.

### 🟡 Cenário 3: Validação de Segurança (Campos Vazios)
* **Dado que:** O usuário deixa os campos de e-mail e senha em branco.
* **Quando:** Clica no botão "Entrar".
* **Então:** O sistema deve impedir o envio dos dados e destacar os campos em vermelho com a mensagem: *"Campo obrigatório"*.
