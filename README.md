# Website Estático: Crie Ambientes Interativos em Metaverso

## 📚 Sobre

Layout HTML/CSS/JS simples e estático para o curso "Crie Ambientes Interativos em Metaverso" ministrado pelo Prof. Romero Tori e Leonardo Iglesias.

**Características:**
- ✅ Sem backend ou banco de dados
- ✅ Sem gamificação ou sistema de pontos
- ✅ Apenas apresentação de conteúdo
- ✅ Interações básicas (modais, accordions)
- ✅ Totalmente responsivo
- ✅ Tema escuro profissional

---

## 📁 Estrutura de Arquivos

```
metaverso_simples/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos do site
├── js/
│   └── script.js       # Interações JavaScript
├── images/             # Imagens dos módulos
│   ├── modulo1_explorar.jpeg
│   ├── modulo2_capturar.jpg
│   ├── modulo3_curar.jpg
│   ├── modulo4_expor.jpeg
│   └── modulo5_colaborar.png
└── README.md           # Este arquivo
```

---

## 🚀 Como Usar

### Opção 1: Abrir Localmente

1. Baixe todos os arquivos
2. Mantenha a estrutura de pastas
3. Abra o arquivo `index.html` em qualquer navegador moderno

### Opção 2: Hospedar Online

Você pode hospedar este site gratuitamente em:

**GitHub Pages:**
1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings → Pages
4. Selecione a branch main e salve
5. Seu site estará em `https://seuusuario.github.io/nome-do-repo`

**Netlify:**
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto
3. Pronto! Seu site estará online

**Vercel:**
1. Acesse [vercel.com](https://vercel.com)
2. Importe o projeto
3. Deploy automático

---

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --bg-primary: #0a0b14;        /* Fundo principal */
    --bg-secondary: #12131f;      /* Fundo secundário */
    --bg-card: #1a1b2e;           /* Fundo dos cards */
    --text-primary: #e8eaed;      /* Texto principal */
    --text-secondary: #9ca3af;    /* Texto secundário */
    --accent-blue: #3b82f6;       /* Azul de destaque */
    --accent-purple: #8b5cf6;     /* Roxo de destaque */
    /* ... */
}
```

### Conteúdo

Edite o conteúdo dos módulos em `js/script.js`:

```javascript
const modulesContent = {
    1: {
        title: "Módulo 1: Explorar",
        icon: "🔍",
        content: `...` // Seu conteúdo HTML aqui
    },
    // ...
};
```

### Imagens

Substitua as imagens na pasta `images/` mantendo os mesmos nomes de arquivo.

---

## 📋 Módulos do Curso

1. **Explorar** (30 min) - Visita a exposição imersiva no FrameVR
2. **Capturar** (60 min) - Captura 3D com Luma AI
3. **Curar e Recriar** (45 min) - Sketchfab e edição de texturas
4. **Expor** (90 min) - Criação de exposição no FrameVR
5. **Colaborar** (60 min) - Projeto colaborativo

**Total:** 285 minutos

---

## ✨ Funcionalidades

### Implementadas

- ✅ Página inicial com vídeo introdutório
- ✅ Texto expansível ("Ler mais")
- ✅ Grid de cards dos módulos
- ✅ Modal com conteúdo detalhado de cada módulo
- ✅ Animações de entrada suaves
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Tema escuro profissional
- ✅ Smooth scroll
- ✅ Fechar modal com ESC

### Não Implementadas (por escolha)

- ❌ Sistema de login/autenticação
- ❌ Banco de dados
- ❌ Gamificação (pontos, badges)
- ❌ Progresso do usuário
- ❌ Analytics

---

## 🌐 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile (iOS Safari, Chrome Android)

---

## 📝 Licença

Este material é de uso educacional para a Univesp.

**Instrutores:**
- Prof. Romero Tori
- Leonardo Iglesias

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript Vanilla (ES6+)
- Intersection Observer API
- YouTube Embed API

---

## 💡 Dicas

1. **Performance:** As imagens já estão otimizadas, mas você pode comprimi-las ainda mais usando [TinyPNG](https://tinypng.com)

2. **SEO:** Adicione meta tags no `<head>` do HTML:
```html
<meta name="description" content="Curso de criação de ambientes imersivos em metaverso">
<meta name="keywords" content="metaverso, realidade virtual, educação, 3D">
```

3. **Analytics:** Se quiser adicionar Google Analytics, insira o código antes do `</head>`

4. **Favicon:** Adicione um favicon:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

---

**Criado por:** Manus AI  
**Data:** Dezembro 2024  
**Versão:** 1.0
