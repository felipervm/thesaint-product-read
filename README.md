# THESAINT × Raw Data Club

Leitura editorial independente de proporção, construção e código de marca. Base: research pack fornecido pelo usuário, com revalidação de fontes em 16/10/2026.

## Stack

Next.js 16.4.2, React 19.3.1, TypeScript estrito, Tailwind CSS 4, GSAP + ScrollTrigger e Framer Motion. Exportação estática, sem API, banco, servidor de produção ou dependência de imagens remotas.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm run preview
```

Dev: http://127.0.0.1:3000/thesaint-product-read/ . Preview do build: http://127.0.0.1:4173/thesaint-product-read/ .

## GitHub Pages

O build exporta `out/`, com `basePath: /thesaint-product-read` e `trailingSlash`. O workflow `.github/workflows/pages.yml` compila, verifica tipos e publica o artefato via GitHub Actions. Em Settings → Pages, o repositório deve usar **GitHub Actions** como fonte. O push não garante que essa configuração administrativa já esteja ativa.

URL prevista: https://felipervm.github.io/thesaint-product-read/

Para hospedar na raiz de outro domínio, configure `NEXT_PUBLIC_BASE_PATH` como string vazia antes do build e atualize `siteUrl` em `src/lib/site.ts`. A aplicação não usa SSR, Server Actions nem o otimizador de imagens que exigiria servidor.

## Arquitetura

- `src/app/page.tsx`: conteúdo e HTML estático para SEO.
- `src/components/`: seletor de fits, comparação de collab, detalhes da FTX, navegação e camada de movimento.
- `src/app/fontes/`: fatos, fontes e limites das interpretações.
- `public/images/`: imagens WebP locais em 480, 960 e 1440px; tamanhos selecionados por `picture/srcset`.
- `sources.md`, `public/sources.json`: procedência e correções do research pack.

## Movimento e acesso

Rolagem nativa. GSAP/ScrollTrigger carrega no cliente depois da renderização inicial. Framer Motion atua no seletor e em controles. `prefers-reduced-motion` desativa movimento; conteúdo e fotos iniciais são renderizados em HTML. Controles têm estado acessível, toque e teclado. Nenhum texto crítico depende de hover.

## Correções de evidência

- BAW retirada a pedido do usuário após falha na revalidação.
- PACE: o produto atual tem 340 GSM; não foram repetidos os 250 GSM dos links antigos indisponíveis.
- THESAINT/Tsubasa: mesmo nome de fit não comprova molde ou medidas iguais.
- Carnan/ASICS: nomenclaturas diferentes foram verificadas; tabelas consultadas coincidem, portanto não se afirma diferença numérica.
- Palace: fotografia identificada como arquivo Spring 2023.
- FTX 14: relato de desenvolvimento atribuído à SneakersBR; fotografia creditada como divulgação.

Fotografias pertencem às respectivas marcas/publicação. Nenhum produto ou imagem de produto foi gerado por IA. O logo RDC é o arquivo original, sem redesenho.
