# Correção do Carrossel do Módulo 2

## Data: 05/12/2025

## Problema Identificado

O carrossel do Módulo 2 não estava navegando quando o usuário clicava nas setas (< >). O Módulo 1 funcionava perfeitamente, mas o Módulo 2 estava completamente travado.

## Causa Raiz

Foram identificados **4 problemas principais** no código JavaScript:

### 1. Ordem Incorreta dos Parâmetros
**Problema:** As funções `moveCarousel` e `goToSlide` tinham a ordem dos parâmetros invertida em relação às chamadas no HTML.

- **HTML chamava:** `moveCarousel(-1, 'module2-tutorial1')` → `(direction, moduleId)`
- **Função esperava:** `moveCarousel(moduleId, direction)` → `(moduleId, direction)`

**Solução:** Invertida a ordem dos parâmetros nas definições das funções para `(direction, moduleId)` e `(index, moduleId)`.

### 2. Função currentSlide Inexistente
**Problema:** Os botões dos indicadores (dots) chamavam `currentSlide(1, 'module2-tutorial1')`, mas essa função não existia no JavaScript.

**Solução:** Criada a função `currentSlide` como alias para `goToSlide`, ajustando o índice (subtrai 1 porque os botões usam índice baseado em 1).

```javascript
function currentSlide(index, moduleId) {
    goToSlide(index - 1, moduleId);
}
```

### 3. IDs Incorretos no Objeto currentSlideIndex
**Problema:** O objeto `currentSlideIndex` tinha chaves diferentes dos IDs usados nos botões:

- **Objeto tinha:** `'modulo1'`, `'modulo2-parte1'`, `'modulo2-parte2'`
- **Botões usavam:** `'module1'`, `'module2-tutorial1'`, `'module2-tutorial2'`

**Solução:** Corrigidas as chaves do objeto para corresponder aos IDs usados no HTML.

```javascript
let currentSlideIndex = {
    module1: 0,
    'module2-tutorial1': 0,
    'module2-tutorial2': 0
};
```

### 4. Lógica de Busca do Carrossel
**Problema:** As funções tentavam buscar o carrossel por ID usando `document.getElementById('carousel-' + moduleId)`, mas os elementos `.tutorial-carousel` não tinham IDs no HTML.

**Solução:** Modificada a lógica para buscar os carrosséis dentro do modal aberto usando `querySelectorAll('.tutorial-carousel')` e identificar qual carrossel usar baseado no `moduleId`:

```javascript
const modal = document.getElementById('module-modal');
const carousels = modal.querySelectorAll('.tutorial-carousel');

let carousel = null;
if (moduleId.includes('tutorial1')) {
    carousel = carousels[0];
} else if (moduleId.includes('tutorial2')) {
    carousel = carousels[1] || carousels[0];
} else {
    carousel = carousels[0];
}
```

## Testes Realizados

### Servidor Local (http://8000-...)
✅ Navegação para frente (seta direita): Slide 1 → 2 → 3  
✅ Navegação para trás (seta esquerda): Slide 3 → 2  
✅ Navegação direta (clique no indicador): Slide 2 → 5  

### GitHub Pages (https://laccademia.github.io/metaverso-univesp/)
✅ Navegação para frente: Slide 1 → 2  
✅ Navegação direta: Slide 2 → 10  
✅ Todas as funcionalidades operacionais  

## Arquivos Modificados

- `/home/ubuntu/metaverso_simples/js/script.js`
  - Função `moveCarousel`: 73 linhas modificadas
  - Função `goToSlide`: adicionada lógica de busca
  - Função `currentSlide`: criada do zero
  - Função `updateCarouselIndicators`: atualizada
  - Objeto `currentSlideIndex`: chaves corrigidas
  - Função `initializeCarousels`: IDs atualizados

## Commit

```
Fix: Corrigir navegação do carrossel do Módulo 2

- Corrigir ordem dos parâmetros das funções moveCarousel e goToSlide
- Adicionar função currentSlide que estava faltando
- Corrigir IDs no objeto currentSlideIndex (module1, module2-tutorial1, module2-tutorial2)
- Adicionar inicialização segura dos índices
- Modificar lógica para encontrar carrosséis no modal ao invés de buscar por ID
- Carrossel agora funciona perfeitamente: navegação frente/trás e clique direto nos indicadores

Commit: 4fd06bd
```

## Status Final

🎉 **PROBLEMA RESOLVIDO COMPLETAMENTE**

O carrossel do Módulo 2 está 100% funcional tanto no servidor local quanto no GitHub Pages. Todas as formas de navegação (setas e indicadores) estão operacionais.

## Próximos Passos

1. Desenvolver Módulo 3 (Curar e Recriar)
2. Desenvolver Módulo 4 (Expor)
3. Desenvolver Módulo 5 (Colaborar)
4. Usar a mesma estrutura funcional do Módulo 1 e 2 para garantir consistência
