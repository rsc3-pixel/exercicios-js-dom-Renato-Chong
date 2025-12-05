# Exercícios de JavaScript - Manipulação do DOM

Este repositório contém uma série de exercícios práticos focados na manipulação do Document Object Model (DOM) com JavaScript puro. O objetivo é reforçar conceitos fundamentais de como selecionar, modificar, e interagir com elementos HTML de forma dinâmica.

## 📂 Estrutura do Repositório

Cada exercício está contido em seu próprio diretório (`questao01`, `questao02`, etc.), garantindo que sejam independentes e fáceis de analisar.

```
.
├── questao01/
│   ├── questao01.html
│   └── questao01.js
├── questao02/
│   ├── questao02.html
│   └── questao02.js
├── questao03/
│   ├── questao03.html
│   └── questao03.js
└── questao04/
    ├── questao04.html
    └── questao04.js
```

## 🎯 Exercícios

### 🚀 Questão 01: Manipulação Básica do DOM

- **Objetivo:** Capturar o texto de um campo de entrada (`<input>`) e, ao clicar em um botão, inseri-lo como conteúdo de um cabeçalho (`<h1>`), alterando também a cor do seu texto.
- **Conceitos Praticados:**
  - Seleção de elementos com `document.getElementById()`.
  - Leitura de valor de um input com `element.value`.
  - Modificação de conteúdo com `element.innerText`.
  - Manipulação de estilos CSS via `element.style`.
  - Associação de funções a eventos com o atributo `onclick`.

### 🎨 Questão 02: Evento de Clique e Estilo

- **Objetivo:** Criar uma `<div>` que alterna sua forma entre um círculo e um quadrado a cada clique de um botão. O texto do botão também é atualizado para refletir a próxima ação.
- **Conceitos Praticados:**
  - Leitura e modificação da propriedade `style.borderRadius`.
  - Uso de condicionais (`if/else`) para criar um comportamento de "toggle" (alternância).
  - Atualização dinâmica do texto de um botão.

### 📝 Questão 03: Formulário e Exibição de Dados

- **Objetivo:** Coletar dados de um formulário de cadastro (nome, data de nascimento, endereço) e exibi-los em uma frase formatada em um parágrafo na mesma página.
- **Conceitos Praticados:**
  - Coleta de valores de múltiplos campos de formulário.
  - Uso de **Template Strings** para concatenar strings e variáveis de forma limpa.
  - Formatação de datas com `new Date().toLocaleDateString()`.
  - Prevenção do comportamento padrão de um formulário (`onsubmit="return false;"`).

### ✅ Questão 04: Validação de Formulário

- **Objetivo:** Validar um formulário antes do envio. A validação verifica se campos obrigatórios (Nome e CPF) foram preenchidos e se o CPF está em um formato válido.
- **Conceitos Praticados:**
  - Validação de campos obrigatórios.
  - Uso de **Expressões Regulares (Regex)** com o método `.test()` para validar o formato de dados (CPF).
  - Estrutura condicional aninhada (`if/else if/else`) para múltiplos cenários de validação.
  - Fornecimento de feedback visual e textual ao usuário (mensagens de erro em vermelho e sucesso em verde).

## 🚀 Como Executar

1. Clone este repositório: `git clone <URL_DO_REPOSITORIO>`
2. Navegue até o diretório de uma das questões (ex: `cd questao01`).
3. Abra o arquivo `.html` correspondente em seu navegador de preferência.

---
## 👨‍💻 Autor
Desenvolvido por **Renato Santos Chong** - Aluno de Análise e Desenvolvimento de Sistemas (ADS) - Regular.