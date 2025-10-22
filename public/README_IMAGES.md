# 🖼️ Imagens Públicas

## Arquivos na pasta `public/`

### ✅ Imagens Disponíveis

- **`favicon.ico`** - Ícone do site (16x16, 32x32, 48x48)
- **`foto.svg`** - Foto/avatar SVG
- **`placeholder.svg`** - Imagem placeholder para conteúdo
- **`Logo Padevs School.svg`** - Logo da Padevs School

### ⚠️ Imagem Pendente

- **`og-image.png`** - Imagem para Open Graph (redes sociais)
  - **Tamanho recomendado**: 1200x630px
  - **Formato**: PNG ou JPG
  - **Uso**: Facebook, Twitter, LinkedIn, WhatsApp
  - **Localização**: `public/og-image.png`

## Como criar a og-image.png

### Opção 1: Design Manual

Crie uma imagem 1200x630px com:

- Título do projeto: "A Arte de Criar Prompts Eficazes"
- Subtítulo: "E-book Interativo sobre Prompt Engineering"
- Elementos visuais relacionados a IA/Educação
- Cores do projeto (primárias do Tailwind)

### Opção 2: Ferramentas Online

**Canva** (https://www.canva.com/)

- Template: "Facebook Post"
- Dimensões: 1200 x 630 px

**Figma** (https://www.figma.com/)

- Crie artboard 1200x630px
- Exporte como PNG

**OG Image Generator**

- https://og-image.vercel.app/
- https://www.bannerbear.com/tools/open-graph-preview/

### Opção 3: Usar Placeholder Temporário

Enquanto não criar a imagem personalizada, você pode:

1. Criar um placeholder simples com fundo colorido
2. Usar um screenshot da página principal
3. Usar o logo em alta resolução

## Após criar a imagem

1. Salve como `og-image.png` na pasta `public/`
2. Adicione ao git:
   ```bash
   git add public/og-image.png
   git commit -m "feat: add Open Graph image for social media sharing"
   git push
   ```

## Testar a imagem

**Facebook Debugger:**
https://developers.facebook.com/tools/debug/

**Twitter Card Validator:**
https://cards-dev.twitter.com/validator

**LinkedIn Post Inspector:**
https://www.linkedin.com/post-inspector/

---

**Nota**: A imagem og-image.png é referenciada em:

- `src/pages/Index.tsx` (linha 122)
- `index.html` (linhas 33 e 45)

Até que a imagem seja adicionada, as redes sociais podem usar o favicon ou não mostrar preview de imagem.
