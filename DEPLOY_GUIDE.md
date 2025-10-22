# 🚀 Guia de Deploy na Netlify

## Pré-requisitos

- Conta no [Netlify](https://www.netlify.com/)
- Repositório GitHub: `https://github.com/pedroallas/educa-ia`
- Build local funcionando (teste com `npm run build`)

---

## 📦 Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Fazer Login na Netlify

1. Acesse [https://app.netlify.com](https://app.netlify.com)
2. Faça login com sua conta GitHub

### Passo 2: Criar Novo Site

1. Clique em **"Add new site"** → **"Import an existing project"**
2. Selecione **"Deploy with GitHub"**
3. Autorize o Netlify a acessar seu GitHub (se necessário)
4. Selecione o repositório: `pedroallas/educa-ia`

### Passo 3: Configurar Build

As configurações já estão no arquivo `netlify.toml`, mas você pode revisar:

```
Build command: npm run build
Publish directory: dist
Node version: 18
```

### Passo 4: Deploy

1. Clique em **"Deploy site"**
2. Aguarde o build completar (2-3 minutos)
3. Seu site estará no ar! 🎉

### Passo 5: Configurar Domínio Personalizado (Opcional)

1. Vá em **"Site settings"** → **"Domain management"**
2. Clique em **"Add custom domain"**
3. Siga as instruções para configurar DNS

Sugestões de domínio:
- `educa-ia.netlify.app` (gratuito)
- Ou conecte seu próprio domínio

---

## 📦 Método 2: Deploy via Netlify CLI

### Instalar Netlify CLI

```bash
npm install -g netlify-cli
```

### Login

```bash
netlify login
```

### Deploy Manual

```bash
# Build
npm run build

# Deploy para preview
netlify deploy

# Deploy para produção
netlify deploy --prod
```

---

## 📦 Método 3: Deploy Drag & Drop

### Via Interface Web

1. Acesse [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Faça build localmente:
   ```bash
   npm run build
   ```
3. Arraste a pasta `dist/` para a área de drop
4. Pronto! Site no ar instantaneamente

---

## ⚙️ Configurações Importantes

### Variáveis de Ambiente (se necessário)

1. Vá em **"Site settings"** → **"Environment variables"**
2. Adicione variáveis se necessário:
   - `NODE_VERSION=18`
   - Outras variáveis de API, etc.

### Build Hooks (Deploy Automático)

O deploy automático já está configurado via GitHub:
- ✅ Push na branch `main` → Deploy automático
- ✅ Pull Request → Deploy preview automático

### Cache e Performance

As configurações de cache já estão no `netlify.toml`:
- ✅ Assets estáticos: cache de 1 ano
- ✅ HTML: sem cache
- ✅ Headers de segurança configurados

---

## 🔍 Verificação Pós-Deploy

### Checklist

- [ ] Site carrega corretamente
- [ ] Navegação entre seções funciona
- [ ] Quiz interativo funciona
- [ ] Simulador de prompts funciona
- [ ] Downloads funcionam
- [ ] Modo dark/light funciona
- [ ] Responsividade em mobile
- [ ] SEO tags presentes (View Source)
- [ ] Sitemap acessível: `/sitemap.xml`
- [ ] Robots.txt acessível: `/robots.txt`

### Ferramentas de Teste

**Performance:**
```
https://pagespeed.web.dev/
```

**SEO:**
```
https://search.google.com/test/rich-results
```

**Acessibilidade:**
```
https://wave.webaim.org/
```

---

## 🔧 Troubleshooting

### Problema: Build Failed

**Solução:**
1. Verifique se o build funciona localmente: `npm run build`
2. Verifique logs no Netlify
3. Confirme que `package.json` tem todas as dependências

### Problema: 404 nas rotas

**Solução:**
- O arquivo `netlify.toml` já configura redirects
- O arquivo `public/_redirects` é backup
- Ambos garantem SPA routing

### Problema: Assets não carregam

**Solução:**
1. Verifique paths no código (devem ser relativos)
2. Confirme que assets estão na pasta `public/`
3. Clear cache da Netlify: **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

---

## 📊 Monitoramento

### Analytics (Opcional)

Habilite Netlify Analytics:
1. **Site settings** → **Analytics**
2. Upgrade para plano com analytics (se desejar)

### Logs

Acesse logs de build e deploy:
1. **Deploys** → Clique no deploy
2. Veja logs detalhados

---

## 🎯 URLs Importantes

Após o deploy, você terá:

- **Site de Produção**: `https://seu-site.netlify.app`
- **Deploy Previews**: Automaticamente para cada PR
- **Sitemap**: `https://seu-site.netlify.app/sitemap.xml`
- **Robots**: `https://seu-site.netlify.app/robots.txt`

---

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça alterações no código
2. Commit e push para GitHub:
   ```bash
   git add .
   git commit -m "feat: nova funcionalidade"
   git push
   ```
3. Netlify fará deploy automático! ✨

---

## 📞 Suporte

**Netlify Docs**: https://docs.netlify.com/
**Netlify Status**: https://www.netlifystatus.com/
**Netlify Community**: https://answers.netlify.com/

---

## ✅ Deploy Checklist Final

- [x] `netlify.toml` criado
- [x] `public/_redirects` criado
- [x] `.nvmrc` criado
- [x] Build testado localmente
- [x] Repositório no GitHub atualizado
- [ ] Site conectado no Netlify
- [ ] Deploy realizado com sucesso
- [ ] Testes pós-deploy realizados
- [ ] Domínio customizado configurado (opcional)

---

<div align="center">

**🚀 Pronto para Deploy!**

Seu projeto está completamente preparado para produção na Netlify.

</div>
