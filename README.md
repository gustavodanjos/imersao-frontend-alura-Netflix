<div align="center">

# Imersão Front-End Alura — Netflix Clone

**Repositório do projeto prático desenvolvido durante a Imersão Front-End na Era da IA da Alura**

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semântico-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Responsivo-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![Git](https://img.shields.io/badge/Git-Fluxo%20Profissional-F05032?logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-PRs%20%26%20Reviews-181717?logo=github&logoColor=white)](https://github.com/)

</div>

---

## 📋 Índice

- [Sobre o Repositório](#-sobre-o-repositório)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Padrões de Projeto](#-padrões-de-projeto)
- [Autor](#-autor)

---

## 📖 Sobre o Repositório

Repositório criado para armazenar o projeto desenvolvido durante a **Imersão Front-End da Alura na Era da IA**. O foco principal foi o desenvolvimento de um clone da interface da Netflix utilizando HTML, CSS e JavaScript (Vanilla), auxiliado ativamente por Inteligência Artificial para estruturação, refatoração, criação de componentes e lógicas dinâmicas.

Ao longo do projeto, foram trabalhadas competências como:

- **Uso crítico de ferramentas de IA** - Pair programming com IA para construção de lógicas e componentes HTML/CSS/JS.
- **Estruturação de Layouts** - Criação de interfaces responsivas e dinâmicas com Flexbox e variáveis CSS.
- **Componentização com Vanilla JS** - Renderização de carrosséis e cards de filmes utilizando módulos ES6.
- **Gerenciamento de Estado** - Utilização do `localStorage` para manter o perfil logado e persistir informações entre páginas.
- **Fluxo profissional com Git e GitHub** - Criação de commits semânticos, Pull Requests atômicos e organização de histórico de repositório.

---

## 📁 Estrutura do Projeto

```text
imersao-frontend-alura-Netflix/
├── assets/                     # Recursos globais e da tela inicial
│   ├── css/
│   │   └── styles.css          # Estilos principais e Dark/Light mode
│   ├── img/
│   │   └── perfil-[1-4].png    # Avatares de usuários
│   └── js/
│       └── main.js             # Lógica de seleção de conta e troca de tema
│
├── catalogo/                   # Módulo do Catálogo de Filmes
│   ├── catalogo.css            # Estilos específicos das prateleiras e UI
│   ├── catalogo.html           # Página principal do catálogo interativo
│   └── js/
│       ├── components/
│       │   ├── Card.js         # Componente isolado de capa de filme
│       │   └── Carousel.js     # Componente isolado do carrossel
│       ├── data.js             # Mock de dados com categorias e URLs de vídeos
│       ├── main.js             # Lógica do catálogo e algoritmo de embaralhamento
│       └── utils.js            # Funções utilitárias auxiliares
│
├── index.html                  # Página inicial ("Quem está assistindo?")
└── README.md                   # Documentação do projeto
```
## Evidência da Imersão:

> <img width="1908" height="841" alt="netlura2" src="https://github.com/user-attachments/assets/fd0d5c91-b96b-4c79-93ec-2cadd1810d30" />


---

## ✨ Funcionalidades Implementadas

- **Seleção de Perfis:** Mock de "login" onde o usuário escolhe quem está assistindo, com os dados persistidos via `localStorage`.
- **Tema Dinâmico (Dark/Light Mode):** Um *toggle switch* fluído para alterar dinamicamente as variáveis de cor da página inicial.
- **Catálogo Exclusivo por Usuário:** A ordem das categorias e dos filmes é embaralhada de forma determinística (*seeded random shuffle*) baseada no nome do perfil ativo, simulando algoritmos de recomendação personalizados.
- **Carrosséis de Filmes:** Navegação lateral suave escondendo a barra de rolagem (UI moderna).
- **Proteção de Rota (Route Guard):** Redirecionamento automático caso um visitante tente acessar diretamente a URL do catálogo (`catalogo.html`) sem ter selecionado um perfil antes.

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Um navegador web moderno (Google Chrome, Firefox, Edge).
- (Opcional) Extensão como o **Live Server** no VSCode para rodar com auto-reload e evitar bloqueios de CORS ao importar módulos JS.

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/gustavodanjos/imersao-frontend-alura.git
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd imersao-frontend-alura/atividade-aula1
   ```

3. **Inicie a aplicação:**
   Abra o arquivo `index.html` no seu navegador ou inicie a página com o Live Server.

4. **Validação:**
   Na tela "Quem está assistindo?", selecione qualquer usuário para ser redirecionado e testar a geração do catálogo dinâmico.

---

## 📏 Padrões de Projeto

### Commits Semânticos

O versionamento deste projeto seguiu a convenção [Conventional Commits](https://www.conventionalcommits.org/), garantindo um histórico limpo e rastreável:

| Prefixo     | Uso                                |
| ----------- | ---------------------------------- |
| `feat:`     | Nova funcionalidade                |
| `fix:`      | Correção de bug                    |
| `docs:`     | Alteração em documentação          |
| `style:`    | Formatação e ajustes visuais de UI |
| `refactor:` | Refatoração estrutural de código   |
| `chore:`    | Manutenções e tarefas gerais       |

### Boas Práticas (Clean Code)

- **JS Modular (ESM):** Uso de `import`/`export` separando lógicas de UI (`components`), dados (`data.js`) e funções limpas.
- **CSS Responsivo:** Uso primário de Medias Queries (`@media`) e dimensionamento utilizando variáveis nativas (`var()`).
- **Acessibilidade:** Navegação com teclado tratada através de botões e links customizados, além de contrastes visuais.

---

## 👤 Autor

<div align="center">

**Gustavo Fernandes dos Anjos**

[![GitHub](https://img.shields.io/badge/GitHub-gustavodanjos-181717?logo=github&logoColor=white)](https://github.com/gustavodanjos)

📍 Alegrete/RS

_Desenvolvido com IA durante a Imersão Front-End da Alura_

</div>
