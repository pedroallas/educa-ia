# 📚 A Arte de Criar Prompts Eficazes - E-book Interativo

<div align="center">

**E-book completo e interativo sobre Prompt Engineering para educadores e profissionais**

[![Netlify Status](https://img.shields.io/badge/netlify-ready-00C7B7?logo=netlify)](https://www.netlify.com/)
[![Deploy Status](https://img.shields.io/badge/deploy-ready-brightgreen)](https://github.com/pedroallas/educa-ia)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/tests-66%20passed-success)](https://github.com/pedroallas/educa-ia)

[🚀 Deploy Guide](./DEPLOY_GUIDE.md) | [🐛 Reportar Bug](https://github.com/pedroallas/educa-ia/issues) | [💡 Solicitar Feature](https://github.com/pedroallas/educa-ia/issues)

</div>

---

## 📖 Sobre o Projeto

Portfolio de e-book interativo e moderno desenvolvido com React e TypeScript, focado em ensinar **Prompt Engineering** de forma prática e acessível. O projeto demonstra expertise técnica através de uma interface elegante, componentes reutilizáveis e foi desenvolvido seguindo rigorosos padrões de Clean Code, alcançando score **10/10** através de 6 sprints incrementais.

### ✨ Características Principais

- **🎯 Conteúdo Completo**: 8 seções abrangendo desde fundamentos até técnicas avançadas
- **🎮 Quiz Interativo**: Sistema de avaliação com 5 questões e feedback detalhado
- **🤖 Simulador de Prompts**: Pratique em tempo real com validação inteligente
- **📱 100% Responsivo**: Experiência otimizada para desktop, tablet e mobile
- **♿ Acessibilidade Total**: Conformidade WCAG 2.1 AA com skip links e ARIA completo
- **🎨 Tema Dinâmico**: Dark/Light mode com alto contraste opcional
- **🔊 Text-to-Speech**: Narração de conteúdo integrada via Web Speech API
- **⚡ Performance Otimizada**: Web Vitals monitoring (LCP, INP, CLS, FCP, TTFB)
- **🔍 SEO Avançado**: Meta tags, Open Graph, Twitter Cards, Schema.org

---

## 📋 Conteúdo do E-book

1. **Introdução ao Prompt Engineering** - Conceitos fundamentais e importância
2. **Fundamentos de Prompts Eficazes** - Clareza, contexto e especificidade
3. **Estrutura de Prompts Poderosos** - Framework CTXE (Contexto, Tarefa, eXemplos, Especificações)
4. **Técnicas Avançadas** - Role-Playing, Chain of Thought, Few-Shot Learning
5. **Prompts para Educação** - Templates e aplicações para professores
6. **Templates Práticos** - 4 modelos prontos e adaptáveis
7. **Erros Comuns e Como Evitá-los** - Refinamento progressivo
8. **Conclusão e Próximos Passos** - Continue sua jornada

---

## 🛠️ Tecnologias Utilizadas

### Core

- **React 18.3.1** - Biblioteca UI
- **TypeScript 5.6.2** - Tipagem estática
- **Vite 5.4.19** - Build tool
- **Tailwind CSS 3.4.1** - Estilização

### UI/UX

- **shadcn/ui** - Componentes acessíveis
- **Lucide React** - Ícones
- **Radix UI** - Primitivos de acessibilidade

### Qualidade de Código

- **Vitest** - Testes unitários (66 testes, 100% pass)
- **Testing Library** - Testes de componentes
- **ESLint** - Linting
- **Prettier** - Formatação
- **Husky** - Git hooks
- **lint-staged** - Pre-commit validation

### Performance & Observability

- **web-vitals** - Métricas de performance
- **Error Boundary** - Tratamento de erros
- **Logger** - Sistema de logs estruturado

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ ou Bun
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/pedroallas/educa-ia.git
cd educa-ia
```

2. **Instale as dependências**

```bash
# Com npm
npm install

# Com yarn
yarn install

# Com pnpm
pnpm install

# Com bun
bun install
```

3. **Execute em modo desenvolvimento**

```bash
# Com npm
npm run dev

# Com yarn
yarn dev

# Com pnpm
pnpm dev

# Com bun
bun dev
```

4. **Acesse no navegador**: `http://localhost:8080`

---

## � Scripts Disponíveis

| Script                 | Descrição                          |
| ---------------------- | ---------------------------------- |
| `npm run dev`          | Inicia servidor de desenvolvimento |
| `npm run build`        | Gera build de produção             |
| `npm run preview`      | Preview do build de produção       |
| `npm run test`         | Executa testes em watch mode       |
| `npm run test:run`     | Executa testes uma vez             |
| `npm run lint`         | Verifica problemas com ESLint      |
| `npm run format`       | Formata código com Prettier        |
| `npm run format:check` | Verifica formatação sem alterar    |

---

## 🏗️ Arquitetura

```
src/
├── components/      # Componentes React
│   ├── ui/         # Componentes base (shadcn/ui)
│   └── __tests__/  # Testes de componentes
├── hooks/          # Custom hooks
│   └── __tests__/  # Testes de hooks
├── lib/            # Utilitários e helpers
│   └── __tests__/  # Testes de utilitários
└── pages/          # Páginas da aplicação
```

---

## ✅ Clean Code - Score 10/10

O projeto foi desenvolvido seguindo rigorosos padrões de qualidade através de 6 sprints incrementais:

### Sprint 1: Fundação (7.5 → 8.5)

- ✅ Refatoração de componentes
- ✅ Sistema de logging estruturado
- ✅ Custom hooks reutilizáveis

### Sprint 2: Testes (8.5 → 9.2)

- ✅ 66 testes unitários (100% pass)
- ✅ Cobertura de componentes críticos
- ✅ Vitest + Testing Library

### Sprint 3: Qualidade (9.2 → 9.5)

- ✅ Prettier configurado
- ✅ Husky + lint-staged
- ✅ ESLint (0 erros)

### Sprint 4: SEO & Performance (9.5 → 9.6)

- ✅ Meta tags completas
- ✅ Sitemap.xml e robots.txt
- ✅ Structured Data (Schema.org)

### Sprint 5: Acessibilidade (9.6 → 9.8)

- ✅ WCAG 2.1 AA compliance
- ✅ Skip links e ARIA labels
- ✅ Controles de acessibilidade

### Sprint 6: Observabilidade (9.8 → 10.0)

- ✅ Error Boundary
- ✅ Web Vitals monitoring
- ✅ Documentação completa

### 📊 Métricas Finais

- **Testes**: 66 testes (100% pass), 5.60s execution
- **Build**: 385.80 KB (gzip: 119.39 KB)
- **ESLint**: 0 erros, 7 warnings (shadcn/ui react-refresh)
- **Acessibilidade**: WCAG 2.1 AA compliant
- **Performance**: Web Vitals otimizados (LCP, INP, CLS, FCP, TTFB)

---

## ♿ Acessibilidade

- ✅ Skip Links para navegação rápida
- ✅ ARIA Labels completos em todos os componentes interativos
- ✅ Landmarks semânticos (nav, main, footer)
- ✅ Contraste WCAG AA+ (4.5:1 texto normal, 3:1 texto grande)
- ✅ Suporte completo a teclado (Tab, Enter, Escape, Arrows)
- ✅ Modo alto contraste opcional
- ✅ Text-to-Speech integrado
- ✅ Ajuste de tamanho de fonte
- ✅ Foco visível em todos os elementos interativos

---

## 🚀 Deploy

### Vercel (Recomendado)

1. **Faça push do código para GitHub**

2. **Conecte ao Vercel**
   - Acesse [Vercel](https://vercel.com/)
   - Clique em "New Project"
   - Selecione seu repositório

3. **Configurações de Build** (automáticas):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy Automático**
   - O site será deployado automaticamente a cada push na branch main

### Netlify

1. **Conecte ao Netlify**
   - Acesse [Netlify](https://www.netlify.com/)
   - Clique em "Add new site" → "Import an existing project"
   - Selecione seu repositório

2. **Configurações de Build**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

3. **Deploy Automático**
   - Deploy automático a cada push

### GitHub Pages

```bash
npm run build
# Configure o GitHub Pages para servir da branch gh-pages ou pasta /docs
```

---

## � Performance e SEO

### Otimizações Incluídas

- ✅ **Code Splitting** automático com Vite
- ✅ **Tree Shaking** para bundle otimizado
- ✅ **Lazy Loading** de componentes pesados
- ✅ **Image Optimization** com atributos loading="lazy"
- ✅ **Meta Tags** completas para SEO
- ✅ **Sitemap.xml** e **robots.txt** configurados
- ✅ **Structured Data** (Schema.org) para rich snippets
- ✅ **Web Vitals Monitoring** integrado

### Métricas de Qualidade

- **Build Size**: 385.80 KB (gzip: 119.39 KB)
- **Tests**: 66/66 passing (100%)
- **ESLint**: 0 errors
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Web Vitals optimized

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

### Como Contribuir

1. **Fork** o projeto
2. Crie uma **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Padrões de Commit

Este projeto segue [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `test:` Adição ou correção de testes
- `chore:` Atualização de dependências, etc

---

## � Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Pedro Allas** - Engenheiro de Software e Professor de Matemática

- 🌐 Portfolio: [https://pedroallas.dev](https://portifoliopedroallas.netlify.app)
- 💼 LinkedIn: [Pedro Allas](https://www.linkedin.com/in/pedroallasborges)
- 🐙 GitHub: [@pedroallas](https://github.com/pedroallas)
- 📧 Email: pedroallas@professor.to.gov.br

---

<div align="center">

### 🌟 Se este projeto foi útil, considere dar uma estrela!

<p>Feito por Pedro Allas usando React + TypeScript</p>

<p>
  <a href="#-a-arte-de-criar-prompts-eficazes---e-book-interativo">🔼 Voltar ao topo</a>
</p>

</div>

</div>
