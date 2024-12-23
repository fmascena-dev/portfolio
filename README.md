# 🌐 Portfólio Pessoal - Felipe Mascena

*Bem-vindo ao meu portfólio! Este é um projeto pessoal desenvolvido com o objetivo de apresentar minhas habilidades, projetos, e formas de contato. Ele combina um design moderno, animações interativas e uma experiência de navegação fluida, construído com as melhores práticas em desenvolvimento web.*

---

## 🎯 Objetivo

- **Criar uma aplicação web para demonstrar:**
    - *Minhas* **habilidades técnicas** *em desenvolvimento web frontend;*
    - **Projetos realizados**, *com links para repositórios e demonstrações;*
    - **Contato fácil** *para recrutadores ou colaboradores em potencial;*
    - **Design responsivo** *que se adapta a qualquer dispositivo.*

---

## 🛠️ Tecnologias Utilizadas

#### Desenvolvimento
- **React.js**: *Biblioteca para construção de interfaces de usuário;*
- **React Router**: *Gerenciamento de rotas da aplicação;*
- **SCSS (Sass)**: *Pré-processador CSS para estilização eficiente e reutilizável;*
- **React Icons**: *Biblioteca de ícones para enriquecer a interface.*

#### Estilização e Animações
- **SCSS modular**: *Componentização e isolamento de estilos;*
- **Responsividade**: *Adaptação para diferentes tamanhos de tela;*
- **Animações SCSS**: *Interatividade visual com transições, transformações e efeitos hover*
- **Efeitos de blur** e **sombreamento**: *Modernidade e destaque visual;*
- **Design minimalista**: *Foco em clareza e usabilidade.*

---

## 🎨 Design do Projeto

### Cores Principais
- **#444:** *Cor de fundo geral;*
- **#00d9ff:** *Cor de destaque para links, ícones e animações.;*
- **#e8e8e8:** *Cor base para textos.*

### Tipografia
- **Livvic e serif:** *Clareza e legibilidade.*
- *Destaque com tamanhos variáveis para títulos e textos descritivos.*

---

## 🔥 Funcionalidades

### 💻 Página Inicial
- **Apresentação pessoal:** *Foto e introdução.*
- **Descrição interativa:** *Animações de destaque para tecnologias e habilidades.*

### 🛠️ Tecnologias
- **Cartões interativos:** *Apresentam as tecnologias que domino, com animações de hover;*
- **Ícones representativos:** *Criados com* **React Icons**.

### 📂 Projetos
- **Galeria de projetos:** *Lista organizada com:*
  - **Descrição breve;**
  - **Links para repositório GitHub** *e demonstrações online;*
- **Animações hover:** *Destaque visual nos itens de projeto.*

### ✉️ Contato
- **Formulário funcional:** *Campos para nome, e-mail, telefone e mensagem;*
- **Design responsivo:** *Layout ajustado para dispositivos móveis.*

### 🔗 Redes Sociais Fixas
- *Ícones para* **WhatsApp**, **LinkedIn**, **GitHub** e **Email;**
- **Posição fixa** *no canto inferior esquerdo da página;*
- **Animações ao passar o mouse**: *Crescimento, sombreamento e blur para chamar atenção.*

### 👣 Rodapé
- **Texto animado**: *Mensagem de despedida com transição suave;*
- **Links para redes sociais:** *Adicionados no Footer apenas para dispositivo móvel.*

---

## 💾 Estrutura de Arquivos

**A organização modular garante manutenção eficiente e escalabilidade do projeto:**
```
src/
├── assets/ 
│ └── Images/ 
│      └── foto-pessoal.jpg
├── components/ 
│ ├── Contato/ 
│ │  ├── Contato.jsx 
│ │  └── ContatoStyles.scss 
│ ├── Footer/ 
│ │  ├── Footer.jsx 
│ │  └── FooterStyles.scss 
│ ├── Header/ 
│ │  ├── Header.jsx 
│ │  └── Header.module.scss 
│ ├── Home/ 
│ │  ├── Home.jsx 
│ │  └── Home.module.scss 
│ ├── Projetos/ 
│ │  ├── Projetos.jsx 
│ │  └── ProjetosStyles.scss 
│ ├── RedesSociais/ 
│ │  ├── Socials.jsx 
│ │  └── SocialsStyles.scss 
│ ├── Sobre/ 
│ │  ├── Sobre.jsx 
│ │  └── SobreStyles.scss 
│ └── Tecnologias/ 
│    ├── Tecnologias.jsx 
│    └── TecnologiasStyle.scss 
├── App.jsx 
├── Const.jsx 
├── GlobalStyles.scss 
└── main.jsx
```

---

## ⚙️ Como Funciona?

1. **Rotas da Aplicação**
   - `/`: *Página inicial com apresentação pessoal;*
   - `/tecnologias`: *Tecnologias dominadas;*
   - `/projetos`: *Lista de projetos com links;*
   - `/contato`: *Formulário de contato;*
   - `/sobre`: *Página "Sobre mim".*

2. **Animações e Interatividade**
   - **Hover nos ícones sociais**: *Crescimento e sombreamento;*
   - **Destaque de links**: *Efeitos de blur e escala em transições suaves;*
   - **Responsividade**: *Componentes ajustam o layout dinamicamente.*

---

## 🚀 Como Executar o Projeto?

1. **Clone o repositório:**
```
git clone: https://github.com/fmascena-dev/portfolio.git
```

2. **Instale as dependências:**
```
npm install
```

3. **Inicie o projeto:**
```
npm start
```

**Acesse no navegador:** http://localhost:3000

---

## 🧩 Melhorias Futuras
- **Integração com backend** *para envio do formulário;*
- **Dark/Light Mode:** *Alternância entre temas claro e escuro;*
- **Mais animações:** *Efeitos para enriquecer a experiência do usuário.*