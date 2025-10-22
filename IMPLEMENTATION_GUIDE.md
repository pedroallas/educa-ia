# 📋 Guia de Implementação - Melhorias do E-book

Este guia detalha como integrar todos os novos componentes criados no projeto.

## ✅ Componentes Criados

### 1. TableOfContents.tsx

**Localização:** `src/components/TableOfContents.tsx`

**Propósito:** Menu lateral fixo com navegação por âncoras e indicador de seção ativa.

**Como usar:**

```tsx
import { TableOfContents } from "@/components/TableOfContents";

const tocItems = [
  { id: "intro", label: "Introdução", icon: <BookOpen size={16} /> },
  { id: "fundamentos", label: "Fundamentos", icon: <Brain size={16} /> },
  // ... mais itens
];

<TableOfContents items={tocItems} />;
```

### 2. Quiz.tsx

**Localização:** `src/components/Quiz.tsx`

**Propósito:** Quiz interativo com correção automática e feedback.

**Como usar:**

```tsx
import { Quiz, QuizQuestion } from "@/components/Quiz";

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Sua pergunta aqui?",
    options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
    correctAnswer: 1, // índice da resposta correta
    explanation: "Explicação da resposta correta",
  },
  // ... mais questões
];

<Quiz title="Teste seus conhecimentos" questions={questions} />;
```

### 3. PromptSimulator.tsx

**Localização:** `src/components/PromptSimulator.tsx`

**Propósito:** Simulador que analisa prompts e fornece feedback.

**Como usar:**

```tsx
import { PromptSimulator } from "@/components/PromptSimulator";

<PromptSimulator />;
```

### 4. VideoPlayer.tsx

**Localização:** `src/components/VideoPlayer.tsx`

**Propósito:** Player responsivo para vídeos do YouTube.

**Como usar:**

```tsx
import { VideoPlayer } from "@/components/VideoPlayer";

<VideoPlayer
  videoId="dQw4w9WgXcQ" // ID do vídeo do YouTube
  title="Título do Vídeo"
  description="Descrição opcional"
/>;
```

### 5. DownloadSection.tsx

**Localização:** `src/components/DownloadSection.tsx`

**Propósito:** Seção para downloads do e-book em PDF e DOCX.

**Como usar:**

```tsx
import { DownloadSection } from "@/components/DownloadSection";

<DownloadSection />;
```

**⚠️ Importante:** Adicione os arquivos PDF e DOCX na pasta `public` e atualize as URLs no componente:

```typescript
// Linha 18-19 do componente
downloadUrl: "/ebook-prompts-eficazes.pdf", // Substitua com o caminho real
downloadUrl: "/ebook-prompts-eficazes.docx", // Substitua com o caminho real
```

### 6. NextSteps.tsx

**Localização:** `src/components/NextSteps.tsx`

**Propósito:** Links para comunidades e recursos de IA.

**Como usar:**

```tsx
import { NextSteps } from "@/components/NextSteps";

<NextSteps />;
```

### 7. AccessibilityControls.tsx

**Localização:** `src/components/AccessibilityControls.tsx`

**Propósito:** Controles de acessibilidade (alto contraste, fontes, narração).

**Como usar:**

```tsx
import { AccessibilityControls } from "@/components/AccessibilityControls";

<AccessibilityControls />;
```

## 🔧 Integrando no Index.tsx

### Passo 1: Importar os Componentes

```tsx
import { TableOfContents } from "@/components/TableOfContents";
import { Quiz, QuizQuestion } from "@/components/Quiz";
import { PromptSimulator } from "@/components/PromptSimulator";
import { VideoPlayer } from "@/components/VideoPlayer";
import { DownloadSection } from "@/components/DownloadSection";
import { NextSteps } from "@/components/NextSteps";
import { AccessibilityControls } from "@/components/AccessibilityControls";
```

### Passo 2: Definir Dados

```tsx
const Index = () => {
  // Itens do Table of Contents
  const tocItems = [
    { id: "intro", label: "Introdução", icon: <BookOpen size={16} /> },
    { id: "fundamentos", label: "Fundamentos", icon: <Brain size={16} /> },
    { id: "estrutura", label: "Estrutura", icon: <Code size={16} /> },
    { id: "tecnicas", label: "Técnicas", icon: <Lightbulb size={16} /> },
    { id: "quiz", label: "Quiz Interativo", icon: <CheckCircle2 size={16} /> },
    { id: "simulador", label: "Simulador", icon: <Sparkles size={16} /> },
    { id: "educacao", label: "Para Educadores", icon: <Users size={16} /> },
    { id: "templates", label: "Templates", icon: <Target size={16} /> },
    { id: "downloads", label: "Downloads", icon: <BookOpen size={16} /> },
    { id: "proximos-passos", label: "Próximos Passos", icon: <TrendingUp size={16} /> },
  ];

  // Questões do Quiz
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Qual é o principal objetivo do Prompt Engineering?",
      options: [
        "Fazer perguntas aleatórias para IA",
        "Criar instruções estratégicas para obter respostas precisas",
        "Programar modelos de IA do zero",
        "Apenas testar modelos"
      ],
      correctAnswer: 1,
      explanation: "Prompt Engineering é sobre criar instruções estratégicas..."
    },
    // ... mais questões
  ];

  return (
    // ... JSX
  );
};
```

### Passo 3: Estrutura do JSX

```tsx
return (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />

    {/* Componentes de navegação e acessibilidade */}
    <TableOfContents items={tocItems} />
    <AccessibilityControls />

    {/* Container principal com margem para TOC */}
    <div className="md:mr-72">

      {/* Seções de conteúdo existentes */}
      <ContentSection id="intro" ...>
        {/* Conteúdo da introdução */}
      </ContentSection>

      <ContentSection id="fundamentos" ...>
        {/* Conteúdo dos fundamentos */}
      </ContentSection>

      {/* Seção do Quiz */}
      <ContentSection id="quiz" title="Teste Seus Conhecimentos">
        <Quiz title="Quiz de Prompt Engineering" questions={quizQuestions} />
      </ContentSection>

      {/* Seção do Simulador */}
      <ContentSection id="simulador" title="Pratique Agora">
        <PromptSimulator />
      </ContentSection>

      {/* Seção de Vídeo (opcional) */}
      <ContentSection id="video-tutorial" title="Tutorial em Vídeo">
        <VideoPlayer
          videoId="SEU_VIDEO_ID"
          title="Como Criar Prompts Eficazes"
          description="Tutorial completo em vídeo"
        />
      </ContentSection>

      {/* Seção de Downloads */}
      <ContentSection id="downloads" title="Baixe o E-book">
        <DownloadSection />
      </ContentSection>

      {/* Seção de Próximos Passos */}
      <ContentSection id="proximos-passos" title="Próximos Passos">
        <NextSteps />
      </ContentSection>

    </div>

    <Footer />
  </div>
);
```

## 🎨 CSS Customizado (index.css)

O arquivo `src/index.css` já foi atualizado com:

✅ Modo alto contraste
✅ Tamanhos de fonte para acessibilidade
✅ Variáveis CSS responsivas

## 📱 Responsividade

Todos os componentes são responsivos por padrão. Principais breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚠️ Pontos de Atenção

### 1. Arquivos de Download

Você precisa adicionar os arquivos PDF e DOCX do e-book na pasta `public` e atualizar as URLs em `DownloadSection.tsx`.

### 2. Vídeos do YouTube

Para adicionar vídeos, você precisa do ID do vídeo do YouTube (a parte após `v=` na URL).

Exemplo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
ID: `dQw4w9WgXcQ`

### 3. Sistema de Comentários (Não Implementado)

O sistema de comentários não foi implementado pois requer:

- Backend ou serviço de terceiros (Disqus, Utterances, etc.)
- Autenticação de usuários
- Banco de dados

**Opções recomendadas:**

- **Utterances**: Usa GitHub Issues (gratuito, fácil)
- **Disqus**: Plataforma completa (freemium)
- **Giscus**: Usa GitHub Discussions (gratuito)

## 🚀 Próximos Passos

1. **Teste os componentes individualmente**

   ```bash
   npm run dev
   ```

2. **Integre gradualmente no Index.tsx**

   - Comece com TableOfContents e AccessibilityControls
   - Adicione Quiz e Simulator
   - Finalize com Downloads e NextSteps

3. **Personalize o conteúdo**

   - Ajuste textos e descrições
   - Adicione mais questões ao quiz
   - Inclua vídeos relevantes

4. **Adicione arquivos de download**

   - Gere PDF do e-book
   - Crie versão DOCX
   - Atualize URLs no componente

5. **Teste em diferentes dispositivos**
   - Mobile
   - Tablet
   - Desktop
   - Diferentes navegadores

## 📞 Suporte

Se tiver dúvidas sobre a implementação:

1. Consulte a documentação inline nos componentes
2. Veja o README.md principal
3. Abra uma issue no GitHub
4. Entre em contato: pedroallas@professor.to.gov.br

---

**Boa implementação! 🚀**
