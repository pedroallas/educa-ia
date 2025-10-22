# 🎯 Prompt para Refatoração Incremental de Projetos

## Como usar este prompt

Este é um prompt reutilizável para replicar a metodologia de refatoração incremental e estruturada que usamos neste projeto. Copie e cole na sua conversa com uma IA assistente de código.

---

## 📝 Prompt Completo

```markdown
Quero melhorar a qualidade do meu projeto seguindo uma metodologia incremental e estruturada.

**CONTEXTO DO PROJETO:**

- Tipo: [ex: Landing page React/TypeScript, API Node.js, etc]
- Stack: [ex: React 18, TypeScript, Vite, Tailwind, shadcn/ui]
- Objetivo: [ex: Site educacional sobre IA para educadores]
- Estado atual: Projeto funcional mas precisa de melhorias em clean code, testes, qualidade

**OBJETIVO:**
Atingir nota 10/10 em Clean Code seguindo sprints semanais focados, com entregas incrementais validadas.

**METODOLOGIA SOLICITADA:**

1. **Fase de Diagnóstico:**

   - Analise o código atual e atribua nota de 0-10 em Clean Code
   - Liste TODOS os problemas encontrados com peso/impacto de cada um
   - Justifique a nota com detalhes técnicos
   - Proponha plano de 6 sprints semanais para chegar a 10/10

2. **Execução em Sprints:**

   - Sprint 1: Fundação (refatoração, hooks, constantes, JSDoc)
   - Sprint 2: Testes (Vitest, 40% cobertura, CI básico)
   - Sprint 3: Qualidade (Prettier, Husky, ESLint)
   - Sprint 4: SEO & Performance (meta tags, Lighthouse >90)
   - Sprint 5: Acessibilidade (ARIA, screen reader, contraste)
   - Sprint 6: Observabilidade (Sentry, analytics, deploy)

3. **Regras de Execução:**

   - ✅ Execute TODAS as alterações usando ferramentas (não mostre código)
   - ✅ Valide cada mudança rodando build/testes
   - ✅ Use TODO list para tracking de progresso
   - ✅ Relate conquistas ao final de cada sprint
   - ⛔ NÃO apenas liste o que fazer - FAÇA as mudanças
   - ⛔ NÃO mostre blocos de código - use replace_string_in_file
   - ⛔ NÃO sugira comandos - use run_in_terminal

4. **Formato de Relatório por Sprint:**
```

SPRINT X CONCLUÍDO ✅

📊 Métricas:

- Arquivos alterados: X
- Linhas de código: antes vs depois
- Testes: X passando (Y% cobertura)
- Build time: Xs

🎯 Conquistas:

- [Lista detalhada do que foi feito]

📈 Impacto na Nota:

- Clean Code: X.X → Y.Y (+Z.Z)
- [Justificativa do aumento]

```

5. **Critérios de Qualidade:**
- Clean Code: sem console.*, componentes <200 linhas, JSDoc, nomes descritivos
- Testes: >40% cobertura, CI funcionando, testes de integração
- Performance: Lighthouse >90, lazy loading, otimização de assets
- Acessibilidade: WCAG AA, auditoria axe 100%
- SEO: meta tags completas, structured data, sitemap.xml

**ESTILO DE COMUNICAÇÃO:**
- 🎯 Seja proativo e execute sem pedir permissão
- 💬 Comunique progresso com emojis e métricas
- 🔧 Use ferramentas para TODAS as mudanças
- 📊 Mostre antes/depois com números concretos
- ⚡ Valide cada mudança antes de prosseguir

**PERGUNTA INICIAL:**
"Analise meu projeto e me dê a nota atual de Clean Code (0-10) com justificativa detalhada. Depois, proponha o plano de 6 sprints para chegar a 10/10."
```

---

## 📋 Variações do Prompt

### Para projetos menores (3 sprints)

```markdown
Versão compacta:

- Sprint 1: Fundação + Testes
- Sprint 2: Qualidade + Performance
- Sprint 3: Acessibilidade + Deploy
```

### Para projetos existentes com testes

```markdown
Pule Sprint 2 e foque em:

- Sprint 1: Refatoração
- Sprint 3: Qualidade de código
- Sprint 4-6: SEO, A11y, Observabilidade
```

### Para projetos backend (Node.js/Python/etc)

```markdown
Adapte os sprints:

- Sprint 1: Refatoração (separação de concerns, middleware, utilities)
- Sprint 2: Testes unitários + integração + E2E
- Sprint 3: Qualidade (linters, formatters, pre-commit hooks)
- Sprint 4: API docs (OpenAPI/Swagger) + cache + validação
- Sprint 5: Rate limiting + security headers + autenticação
- Sprint 6: Logs estruturados + monitoring + deploy
```

### Para projetos mobile (React Native/Flutter)

```markdown
Adapte os sprints:

- Sprint 1: Refatoração (navegação, estado global, componentes)
- Sprint 2: Testes (unit, integration, snapshot)
- Sprint 3: Qualidade + Performance (FlatList otimizado, memoization)
- Sprint 4: Offline-first + sincronização + cache
- Sprint 5: Acessibilidade mobile (VoiceOver, TalkBack)
- Sprint 6: Analytics + crash reporting + CI/CD (Fastlane)
```

---

## 🎯 Exemplo de Fluxo de Conversa

### Passo 1: Diagnóstico Inicial

**Você diz:**

> "Analise meu projeto e me dê a nota atual de Clean Code (0-10) com justificativa detalhada. Depois, proponha o plano de 6 sprints para chegar a 10/10."

**AI responde:**

> "Clean Code: 8.5/10
>
> **Problemas Encontrados:**
>
> - ❌ Console statements (console.log, console.error): -0.3 pontos
> - ❌ Falta de testes automatizados: -0.8 pontos
> - ❌ CSS repetido e inline styles: -0.2 pontos
> - ❌ Componentes muito complexos (>200 linhas): -0.2 pontos
>
> **Plano de 6 Sprints:** > [lista detalhada com objetivos e pontuação]
>
> Posso começar pelo Sprint 1? 🚀"

### Passo 2: Execução

**Você diz:**

> "Sim, vamos para o Sprint 1"

**AI executa tudo e reporta:**

> "🔥 SPRINT 1 CONCLUÍDO ✅
>
> 📊 Métricas:
>
> - Arquivos alterados: 15
> - Index.tsx: 628→35 linhas (-94%)
> - 8 componentes extraídos
> - Build time: 4.2s
>
> 🎯 Conquistas:
>
> - ✅ Index.tsx refatorado (628→35 linhas)
> - ✅ Hook useScrollTo criado
> - ✅ 8 seções extraídas em componentes
> - ✅ Logger centralizado implementado
> - ✅ Console statements removidos
> - ✅ ErrorBoundary adicionado
> - ✅ JSDoc em funções principais
>
> 📈 Impacto na Nota:
>
> - Clean Code: 8.5 → 9.5 (+1.0)
> - Motivo: Componentes organizados, logging centralizado, melhor manutenibilidade
>
> Pronto para Sprint 2? 🧪"

### Passo 3: Continuação

**Você diz:**

> "Vamos para o Sprint 2"

**AI continua automaticamente...**

---

## 🔧 Adaptações por Tipo de Projeto

### Frontend (React/Vue/Angular)

- Foco em: componentização, state management, bundle size, lazy loading
- Ferramentas: Vitest/Jest, Lighthouse, Bundle Analyzer
- Métricas: Core Web Vitals, TTI, FCP

### Backend (Node/Python/Go)

- Foco em: camadas (controller/service/repository), validação, segurança
- Ferramentas: Jest/Pytest, Swagger, Artillery/k6
- Métricas: Latência P95, throughput, taxa de erro

### Fullstack (Next.js/Remix)

- Foco em: SSR/SSG, API routes, SEO, performance
- Ferramentas: Playwright, Lighthouse CI, Sentry
- Métricas: Lighthouse score, TTFB, INP

### Mobile (React Native/Flutter)

- Foco em: navegação, performance de listas, tamanho do bundle
- Ferramentas: Detox/Appium, Flipper, Firebase
- Métricas: FPS, tempo de inicialização, consumo de bateria

---

## 📊 Checklist de Qualidade

Use este checklist para validar se cada sprint foi bem executado:

### ✅ Sprint 1: Fundação

- [ ] Componentes com <200 linhas
- [ ] Sem código duplicado
- [ ] Nomes descritivos de variáveis/funções
- [ ] JSDoc em funções públicas
- [ ] Constantes extraídas
- [ ] Hooks customizados criados
- [ ] Build sem erros/warnings

### ✅ Sprint 2: Testes

- [ ] Vitest/Jest configurado
- [ ] > 40% de cobertura
- [ ] Testes passando no CI
- [ ] Testes de integração principais
- [ ] Mocks configurados
- [ ] Coverage report gerado

### ✅ Sprint 3: Qualidade

- [ ] Prettier configurado
- [ ] Husky + lint-staged funcionando
- [ ] ESLint sem warnings
- [ ] Pre-commit hooks ativos
- [ ] Formatação consistente

### ✅ Sprint 4: SEO & Performance

- [ ] Meta tags completas
- [ ] Open Graph configurado
- [ ] Sitemap.xml gerado
- [ ] Lighthouse score >90
- [ ] Imagens otimizadas
- [ ] Lazy loading implementado

### ✅ Sprint 5: Acessibilidade

- [ ] ARIA labels adicionados
- [ ] Contraste WCAG AA
- [ ] Navegação por teclado
- [ ] Screen reader testado
- [ ] Axe DevTools 100%
- [ ] Skip navigation link

### ✅ Sprint 6: Observabilidade

- [ ] Sentry configurado
- [ ] Analytics implementado
- [ ] Logs estruturados
- [ ] Error tracking ativo
- [ ] Performance monitoring
- [ ] Deploy automatizado

---

## 🎓 Conceitos Importantes

### Clean Code (Robert C. Martin)

- Nomes reveladores de intenção
- Funções pequenas e focadas
- Comentários quando necessário (JSDoc)
- DRY (Don't Repeat Yourself)
- SOLID principles

### Testing Pyramid

- 70% Unit tests (rápidos, isolados)
- 20% Integration tests (componentes juntos)
- 10% E2E tests (fluxo completo)

### Performance Metrics

- **FCP** (First Contentful Paint): <1.8s
- **LCP** (Largest Contentful Paint): <2.5s
- **TTI** (Time to Interactive): <3.8s
- **CLS** (Cumulative Layout Shift): <0.1
- **FID/INP** (First Input Delay/Interaction to Next Paint): <100ms

### Accessibility (WCAG 2.1)

- **Level A**: Mínimo obrigatório
- **Level AA**: Recomendado (objetivo deste projeto)
- **Level AAA**: Excelência (opcional)

---

## 🚀 Dicas de Uso

1. **Seja específico no contexto**: Quanto mais detalhes sobre seu projeto, melhor a AI entenderá as necessidades

2. **Use a TODO list**: Peça para criar uma TODO list no início e atualizar após cada sprint

3. **Valide continuamente**: Peça para rodar testes e build após cada mudança significativa

4. **Personalize os sprints**: Adapte o plano para seu projeto - nem sempre precisa de 6 sprints

5. **Documente aprendizados**: Ao final de cada sprint, peça um resumo do que foi aprendido

6. **Revise o código**: Mesmo que a AI faça as mudanças, revise os diffs no Git

---

## 📚 Recursos Complementares

- [Clean Code (Robert C. Martin)](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Testing Library Docs](https://testing-library.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Web.dev - Performance](https://web.dev/performance/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

## 🎉 Resultado Esperado

Ao final dos 6 sprints, você terá:

- ✅ Código limpo e manutenível (10/10 Clean Code)
- ✅ Cobertura de testes >40%
- ✅ CI/CD configurado e funcionando
- ✅ Lighthouse score >90
- ✅ Acessibilidade WCAG AA
- ✅ Observabilidade e monitoring
- ✅ Deploy automatizado

**Tempo estimado**: 6 semanas (1 sprint/semana)
**Esforço**: ~4-8 horas por sprint
**ROI**: Código profissional, escalável e de fácil manutenção

---

## 📝 Notas Finais

Este prompt foi desenvolvido e testado no projeto **EducAIa para Educadores** (Outubro/2025), onde alcançamos:

- 🔥 Sprint 1: Clean Code 8.5 → 9.5 (+1.0)
- 🧪 Sprint 2: Clean Code 9.5 → 10.0 (+0.5)
- 📊 35 testes passando (100% success rate)
- 🚀 Build time: 4s
- ✨ Index.tsx: 628→35 linhas (-94%)

**Metodologia validada e pronta para reuso!** 🎯

---

_Criado por: Metodologia de Refatoração Incremental | Outubro 2025_
