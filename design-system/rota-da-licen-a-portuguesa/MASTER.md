# Ganhe em euros morando no Brasil

## Direção

Sistema editorial para médicos brasileiros, com foco em valorização profissional, remuneração em euros e possibilidades de atuação em outros mercados. A promessa principal recebe destaque na abertura, na oferta e no fechamento. A explicação do método pertence ao workshop.

## Paleta

| Papel | Valor |
| --- | --- |
| Ink | `#011A3A` |
| Atlantic | `#0D526F` |
| Atlantic deep | `#000A23` |
| Brand blue | `#004D6D` |
| Gold | `#C59D5F` |
| Gold dark | `#8C6939` |
| Paper | `#F8F8F8` |
| Paper warm | `#EBE9E5` |
| White | `#FFFFFF` |
| Muted ink | `#4F5E70` |
| Border | `#D9D6CE` |
| Focus | `#0061E2` |

O azul profundo sustenta contraste e autoridade. O dourado destaca a promessa, os preços e os CTAs. A paleta segue a identidade oficial da Em Portugal Consultoria.

## Tipografia

- Títulos: `Fraunces`, com fallback para Georgia e serif.
- Corpo e interface: `Manrope`, com fallback para Arial e sans-serif.
- Hero entre 29 e 64 px conforme a largura e o comprimento do título.
- Títulos de seção entre 30 e 48 px.
- Corpo entre 16 e 19 px, linha entre 1.55 e 1.75.
- Valores e números usam algarismos tabulares.

## Geometria

- Container máximo: 1180 px.
- Leitura longa: 680 px.
- Ritmo de seção: 88 a 136 px no desktop, 68 a 92 px no mobile.
- Cantos: 18 px em superfícies, 999 px em chips e CTAs.
- Bordas finas, selos circulares e cards de benefícios.
- Profundidade suave, sem glassmorphism.

## Imagens

- Usar apenas retratos oficiais fornecidos pela cliente e logos reais.
- Retrato principal em enquadramento vertical, com corte sóbrio e fundo preservado.
- Não usar bancos de imagens de médicos, bandeiras heroicas genéricas ou cenas que insinuem resultados.

## Composição

- Hero assimétrico: copy à esquerda e retrato integrado a um painel documental à direita.
- As órbitas representam a ampliação dos mercados ao redor da carreira médica e permanecem como único efeito contínuo.
- Seções alternam fundo claro, faixa profunda, composição editorial em duas colunas e cards conectados.
- Textos densos ficam em coluna de leitura; listas ganham numeração ou ícones lineares sem reescrita.

## Movimento

- Propósitos: hierarquia, explicação, continuidade e feedback.
- Entrada da hero com opacidade e deslocamento curto em 600 ms usando `cubic-bezier(0.23, 1, 0.32, 1)`.
- Entrada de seções com opacidade e deslocamento curto em 600 ms usando `cubic-bezier(0.77, 0, 0.175, 1)`.
- Órbitas com rotação linear, pausadas fora da tela.
- Botões respondem ao pressionar em 160 ms.
- Hovers somente em ponteiros finos.
- Em `prefers-reduced-motion`, remover deslocamentos, traçado progressivo e movimentos contínuos; manter apenas fades curtos quando úteis.

## Acessibilidade

- Contraste mínimo de 4.5:1 em texto normal e 3:1 em elementos grandes.
- Foco visível de 3 px em todos os controles.
- Alvos de toque com pelo menos 44 px.
- Estrutura semântica, skip link e hierarquia de títulos coerente.
- Conteúdo essencial legível sem depender da animação.

## Regras de conversão

- Um CTA primário por momento, com rótulo literal da copy.
- Enquanto o checkout não existir, CTAs apontam para a seção de investimento da própria página.
- Uma única instância de cronômetro junto aos lotes. Sem prazo oficial, preservar o vencimento de quatro dias por visitante no armazenamento do projeto.
- Mostrar comparação transparente de três lotes conforme as regras do projeto.
- Não introduzir depoimentos, promessas ou fatos que não estejam na copy final.
