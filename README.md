# Tipos de Testes de Software

Este documento apresenta os principais tipos de testes utilizados no desenvolvimento de software. Cada tipo tem um objetivo específico e contribui para a qualidade do produto final.

## 🧪 Testes Manuais
Testes executados sem o uso de ferramentas automatizadas. O QA simula o comportamento do usuário para validar as funcionalidades.

### Exemplos:
- Teste de Login
- Teste de fluxo de compra
- Validação de mensagens de erro

## ⚙️ Testes Automatizados
Testes executados por scripts/programas. Garantem maior repetibilidade, velocidade e cobertura de testes.

### Ferramentas:
- Cypress
- Selenium
- Playwright

## 📦 Teste de Caixa-Preta
Foca na funcionalidade do sistema, sem considerar a estrutura interna do código.

### Objetivo:
Verificar se a aplicação está se comportando conforme o esperado a partir das entradas fornecidas.

## ⚙️ Teste de Caixa-Branca
Baseado na estrutura interna do sistema. O testador conhece o código e cria testes baseados em fluxos internos.

### Exemplo:
Cobertura de todas as condições e laços do código.

## 🔄 Teste de Regressão
Verifica se funcionalidades que já funcionavam corretamente continuam funcionando após uma alteração no código.

## 🔗 Teste de Integração
Valida a comunicação entre diferentes módulos do sistema (por exemplo, frontend e backend, ou API e banco de dados).

## 🧩 Teste Funcional
Foca no que o sistema **faz** (requisitos funcionais).

### Exemplo:
- O botão de login leva o usuário à página inicial.

## 📉 Teste Não Funcional
Avalia **como** o sistema se comporta, incluindo desempenho, usabilidade e segurança.

### Exemplos:
- Teste de performance (load/stress)
- Teste de segurança
- Teste de compatibilidade

---

## ✅ Resumo Visual

| Tipo de Teste        | Foco                      | Executado por      |
|----------------------|---------------------------|--------------------|
| Manual               | Funcionalidade geral      | Testador/QA        |
| Automatizado         | Repetição + Velocidade    | Scripts/Ferramentas|
| Caixa-Preta          | Entrada e saída           | QA sem ver o código|
| Caixa-Branca         | Fluxos internos do sistema| QA com acesso ao código |
| Regressão            | Pós-mudança de código     | Manual ou automático|
| Integração           | Comunicação entre módulos | Manual/Automático  |

---

## 📚 Referências

- [Tipos de testes - Atlassian](https://www.atlassian.com/br/continuous-delivery/software-testing/types-of-software-testing)
- [Testes de Software - Canal QA Sampaio](https://www.youtube.com/@qasampaio)
- [Cypress Documentation](https://docs.cypress.io/)

