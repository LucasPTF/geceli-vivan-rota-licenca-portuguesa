# Rota da Licença Portuguesa

## Direção

Sistema editorial inspirado em um dossiê de habilitação profissional, não em turismo ou imigração. A narrativa visual acompanha uma rota objetiva de quatro marcos: reconhecimento acadêmico, inscrição profissional, estrutura de atuação e próxima ação.

## Paleta

| Papel | Valor |
| --- | --- |
| Ink | `#10272A` |
| Atlantic | `#0D4E4C` |
| Atlantic deep | `#073634` |
| Portugal green | `#0B6B48` |
| Gold | `#C9A45E` |
| Gold dark | `#8A672E` |
| Paper | `#F7F2E8` |
| Paper warm | `#EFE7D8` |
| White | `#FFFEFA` |
| Muted ink | `#526361` |
| Border | `#D8CDBB` |
| Focus | `#1B7D78` |

O dourado é um detalhe documental, nunca a cor de grandes superfícies ou texto corrido. O verde profundo sustenta contraste e autoridade. O papel quente evita o visual clínico genérico.

## Tipografia

- Títulos: `Fraunces`, com fallback para Georgia e serif.
- Corpo e interface: `Manrope`, com fallback para Arial e sans-serif.
- Hero entre 42 e 72 px conforme a largura e o comprimento do título.
- Títulos de seção entre 34 e 58 px.
- Corpo entre 16 e 19 px, linha entre 1.55 e 1.75.
- Valores e números usam algarismos tabulares.

## Geometria

- Container máximo: 1180 px.
- Leitura longa: 680 px.
- Ritmo de seção: 88 a 136 px no desktop, 68 a 92 px no mobile.
- Cantos: 18 px em superfícies, 999 px em chips e CTAs.
- Bordas finas, linhas de rota, selos circulares e blocos que lembram fichas de um dossiê.
- Profundidade suave, sem glassmorphism.

## Imagens

- Usar apenas retratos oficiais fornecidos pela cliente e logos reais.
- Retrato principal em enquadramento vertical, com corte sóbrio e fundo preservado.
- Não usar bancos de imagens de médicos, bandeiras heroicas genéricas ou cenas que insinuem resultados.

## Composição

- Hero assimétrico: copy à esquerda e retrato integrado a um painel documental à direita.
- A rota de quatro marcos é o artefato central da página e o único efeito visual marcante.
- Seções alternam fundo claro, faixa profunda, composição editorial em duas colunas e cards conectados.
- Textos densos ficam em coluna de leitura; listas ganham numeração ou ícones lineares sem reescrita.

## Movimento

- Propósitos: hierarquia, explicação, continuidade e feedback.
- Entrada da hero com opacidade e deslocamento curto em 600 ms usando `cubic-bezier(0.23, 1, 0.32, 1)`.
- Revelações de seção com clip-path em 600 ms usando `cubic-bezier(0.77, 0, 0.175, 1)`, disparadas uma vez.
- Linha da rota cresce por `transform: scaleX()` ou `scaleY()`, sem alterar layout.
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
- Não mostrar cronômetro sem data oficial.
- Mostrar comparação transparente de três lotes conforme as regras do projeto.
- Não introduzir depoimentos, promessas ou fatos que não estejam na copy final.
