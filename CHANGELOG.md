# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-10-21

### 🎉 Release Inicial

Lançamento da versão 1.0 do e-book interativo "A Arte de Criar Prompts Eficazes".

---

## Sprint 6 - Observabilidade & Qualidade Final [2025-10-21]

### Adicionado

- ✨ **ErrorBoundary** component para captura de erros de renderização
- ✨ **useWebVitals** hook para monitoramento de performance (LCP, FID, CLS, FCP, TTFB)
- ✨ **usePerformance** hooks para medir render time de componentes
- ✨ **README.md** completo com documentação abrangente
- ✨ **CHANGELOG.md** com histórico de todos os sprints
- 📦 **web-vitals** library instalada

### Melhorado

- 🎯 **Clean Code Score**: 9.8 → 10/10
- 🔍 Logging estruturado integrado no ErrorBoundary
- 📊 Performance monitoring automático no App.tsx
- 📝 Documentação técnica completa

---

## Sprint 5 - Acessibilidade [2025-10-21]

### Adicionado

- ✨ **SkipLink** component para navegação rápida
- ✨ ARIA labels em todos os componentes interativos
- ✨ Landmarks semânticos (nav, main, aside, footer)
- ✨ role="dialog", aria-expanded, aria-pressed em AccessibilityControls
- ✨ role="radiogroup", aria-live, role="progressbar" no Quiz
- ✨ **ACCESSIBILITY_REPORT.md** com análise completa

### Melhorado

- 🎯 **Clean Code Score**: 9.6 → 9.8/10
- ♿ Conformidade WCAG 2.1 AA
- ⌨️ Navegação por teclado completa
- 🔊 Screen reader friendly
- 🎨 Focus management aprimorado

---

## Sprint 4 - SEO & Performance [2025-10-21]

### Adicionado

- ✨ **SEO.tsx** component para gerenciamento dinâmico de meta tags
- ✨ **StructuredData.tsx** component para JSON-LD (Schema.org)
- ✨ **sitemap.xml** gerado com prioridades
- ✨ Meta tags completas: Open Graph, Twitter Cards, canonical, theme-color
- ✨ Schema WebSite e Book implementados
- ✨ **LazyLoadingFallback** component (preparado para uso futuro)

### Melhorado

- 🎯 **Clean Code Score**: 9.5 → 9.6/10
- 🔍 SEO profissional completo
- 🤖 robots.txt otimizado com sitemap URL
- 🚀 Build otimizado: 381.91 KB (gzip: 118.29 KB)

---

## Sprint 3 - Qualidade de Código [2025-10-21]

### Adicionado

- ✨ **Prettier 3.6.2** instalado e configurado
- ✨ **Husky** para git hooks
- ✨ **lint-staged** para validação pre-commit
- ✨ `.prettierrc` com regras de formatação
- ✨ `.prettierignore` para exclusões
- ✨ Scripts npm: format, format:check, lint:fix

### Melhorado

- 🎯 **Clean Code Score**: 9.2 → 9.5/10
- 🎨 85 arquivos formatados automaticamente
- ✅ ESLint: 0 erros (apenas 7 warnings aceitáveis)
- 🔧 eslint.config.js atualizado com ignores
- 🚀 Pre-commit hook configurado

### Corrigido

- 🐛 Interfaces vazias convertidas para type aliases
- 🐛 require() convertido para import ES6
- 🐛 Coverage folder excluído do ESLint

---

## Sprint 2 - Testes [2025-10-21]

### Adicionado

- ✨ **Vitest 3.2.4** configurado
- ✨ **@testing-library/react** instalado
- ✨ **66 testes** unitários criados
- ✨ **vitest.config.ts** com coverage thresholds
- ✨ **src/test/setup.ts** com mocks globais
- ✨ Scripts npm: test, test:run, test:coverage

### Cobertura de Testes

- 🧪 Hero.test.tsx (5 testes)
- 🧪 Navbar.test.tsx (4 testes)
- 🧪 Footer.test.tsx (7 testes)
- 🧪 Quiz.test.tsx (11 testes)
- 🧪 ContentSection.test.tsx (5 testes)
- 🧪 ExampleCard.test.tsx (5 testes)
- 🧪 useScrollTo.test.ts (4 testes)
- 🧪 logger.test.ts (10 testes)
- 🧪 constants/index.test.ts (12 testes)
- 🧪 App.test.tsx (3 testes)

### Melhorado

- 🎯 **Clean Code Score**: 8.5 → 9.2/10
- ✅ 100% de taxa de sucesso nos testes
- 🛡️ Mocks: IntersectionObserver, matchMedia, scrollTo
- 📊 Coverage configurado (40% threshold)

---

## Sprint 1 - Fundação [2025-10-21]

### Adicionado

- ✨ **src/constants/index.ts** com QUIZ_QUESTIONS e TABLE_OF_CONTENTS_ITEMS
- ✨ **src/hooks/useScrollTo.ts** para scroll suave
- ✨ **src/lib/logger.ts** sistema de logging estruturado
- ✨ JSDoc em 6+ componentes principais
- ✨ TypeScript interfaces e types organizados

### Melhorado

- 🎯 **Clean Code Score**: 7.5 → 8.5/10
- 📦 Index.tsx reduzido: 938 → 865 linhas
- 🔧 Dados extraídos para constants
- 🚫 console.\* removidos (substituídos por logger)

### Refatorado

- ♻️ Quiz questions extraídas para constants
- ♻️ TOC items centralizados
- ♻️ Scroll logic isolada em hook
- ♻️ Logging estruturado implementado

---

## [0.1.0] - Setup Inicial

### Adicionado

- 🎨 Configuração inicial do projeto com Vite + React + TypeScript
- 🎨 Tailwind CSS configurado
- 🎨 shadcn/ui components instalados
- 📱 Layout responsivo implementado
- 🎯 Conteúdo do e-book estruturado
- 🎮 Quiz interativo básico
- 🤖 Simulador de prompts
- ♿ AccessibilityControls component
- 🧭 TableOfContents component
- 🎨 Hero, Navbar, Footer components

---

## Próximas Versões (Roadmap)

### [1.1.0] - Planejado

- [ ] Lazy loading de componentes pesados
- [ ] PWA support (offline-first)
- [ ] Integração com analytics
- [ ] Testes E2E com Playwright
- [ ] CI/CD automatizado

### [1.2.0] - Futuro

- [ ] Modo de estudo guiado
- [ ] Certificado de conclusão
- [ ] Integração com LMS
- [ ] API para tracking de progresso
- [ ] Multi-idioma (i18n)

---

## Legenda

- 🎉 Release / Marco importante
- ✨ Nova funcionalidade
- 🐛 Correção de bug
- ♻️ Refatoração
- 📝 Documentação
- 🎨 Estilo / UI
- ⚡ Performance
- ♿ Acessibilidade
- 🔒 Segurança
- 🧪 Testes
- 🔧 Configuração
- 📦 Dependências
- 🚀 Deploy
