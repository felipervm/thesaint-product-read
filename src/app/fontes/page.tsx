import type { Metadata } from "next";
import { asset, basePath } from "@/lib/site";
export const metadata: Metadata = {
  title: "Fontes da leitura THESAINT — Raw Data Club",
  robots: { index: false, follow: true },
};
const groups = [
  {
    id: "modelagens",
    title: "[01] THESAINT / modelagens",
    fact: "O guia oficial separa Oversized, Wide Boxy, Boxy, Unique, Comfort e Baby Tee. As quatro primeiras têm descrições e fotografias próprias usadas no seletor.",
    links: [["Guia oficial", "https://thesaint.com.br/pages/modelagens"]],
    limit:
      "As fotografias não estão em escala comum. A leitura não mede reconhecimento do consumidor nem escolhe o fit principal.",
  },
  {
    id: "collab",
    title: "[02–03] Wide Boxy / própria e collab",
    fact: "Portal Sphere e Big Overhead Kick Tsubasa usam o nome Wide Boxy. O PDP Tsubasa também usa oversized e descreve um caimento alongado.",
    links: [
      [
        "Wide Boxy Portal Sphere",
        "https://thesaint.com.br/products/t-shirt-wide-boxy-portal-sphere",
      ],
      [
        "Wide Boxy Tsubasa",
        "https://thesaint.com.br/products/t-shirt-wide-boxy-big-overhead-kick-tsubasa-1",
      ],
    ],
    limit:
      "A recorrência do nome é fato. Não foi demonstrado molde ou tabela idêntica. A continuidade de linguagem é uma interpretação.",
  },
  {
    id: "pace",
    title: "[04] PACE / Cotton Code",
    fact: "O produto Vintage Black atual informa algodão de 340 GSM, modelagem box, ombros levemente deslocados, cabo de aço removível e snap de alumínio.",
    links: [
      [
        "Cotton Code Vintage Black",
        "https://pacecompany.com.br/products/tee-cotton-code-vintage-black",
      ],
    ],
    limit:
      "Os links Óxido/Portal do research pack estavam indisponíveis. Esta peça substitui esses exemplos; não foram mantidos os 250 GSM antigos nem a afirmação jurídica de marca registrada.",
  },
  {
    id: "carnan",
    title: "[05–06] Carnan / ASICS",
    fact: "Tech Pack é nomeada boxy Carnan; Path II, regular Carnan. O nome da construção continua explícito dentro da parceria.",
    links: [
      [
        "Tech Pack",
        "https://www.carnan.com.br/products/carnan-x-asics-tech-pack-t-shirt-1",
      ],
      [
        "Path II",
        "https://www.carnan.com.br/products/carnan-x-asics-path-ii-t-shirt-1",
      ],
    ],
    limit:
      "As tabelas publicadas nos dois PDPs consultados coincidem. Não inferimos diferenças numéricas; o argumento é sobre nomenclatura, não medição.",
  },
  {
    id: "kith",
    title: "[07] Kith / LAX e Jones",
    fact: "LAX aparece como Fit: Standard e 180 GSM nesta edição; Jones como Fit: Boxy e 230 GSM.",
    links: [
      ["LAX Tee", "https://kith.com/products/khma030214-7066"],
      ["Jones Tee", "https://eu.kith.com/products/khma030215-001"],
    ],
    limit:
      "A gramatura pertence às peças consultadas, não a todas as versões dessas famílias. Não comprova reconhecimento pelo consumidor.",
  },
  {
    id: "palace",
    title: "[08] Palace / arquivo",
    fact: "O arquivo oficial nomeia Gigantic T-Shirt, Large Up T-Shirt e Uni Heavy T-Shirt. A foto usada é da Gigantic, Spring 2023.",
    links: [
      [
        "Gigantic / Spring 2023",
        "https://palaceskateboards.com/ranges/spring-2023/products/gigantic-t-shirt",
      ],
      [
        "Large Up / Autumn 2021",
        "https://palaceskateboards.com/ranges/autumn-2021/products/large-up-t-shirt",
      ],
      [
        "Uni Heavy / Summer 2026",
        "https://palaceskateboards.com/ranges/summer-2026/products/uni-heavy-t-shirt",
      ],
    ],
    limit:
      "É referência de linguagem de produto no arquivo. Não representa estoque atual ou prova de um sistema formal de fits.",
  },
  {
    id: "noah",
    title: "[09] Noah / Boxy Fit Rugby",
    fact: "A descrição apresenta algodão 8 oz, listras construídas no tecido, gola e punhos canelados, aberturas laterais e um bordado pequeno.",
    links: [["Boxy Fit Rugby", "https://noahny.com/products/boxy-fit-rugby"]],
    limit:
      "A ideia de dar protagonismo à construção é uma leitura visual. Não foi medido o que consumidores reconhecem.",
  },
  {
    id: "ftx",
    title: "[10] Reebok × THESAINT / FTX 14",
    fact: "A coleção oficial identifica a FTX 14. A SneakersBR, em 28 de maio de 2026, descreve uma silhueta nova criada na parceria, com napa, camurça, nylon e cadarço largo.",
    links: [
      [
        "Coleção oficial Reebok × THESAINT",
        "https://thesaint.com.br/collections/reebok",
      ],
      [
        "SneakersBR / 28 maio 2026",
        "https://sneakersbr.co/a-thesaint-colaborou-com-a-reebok/",
      ],
    ],
    limit:
      "O desenvolvimento da silhueta é atribuído à publicação, sem acesso ao processo interno. Foto: SneakersBR / divulgação. A pergunta sobre linguagem futura permanece aberta.",
  },
];
export default function Sources() {
  return (
    <main className="sources-page">
      <a className="source" href={basePath + "/"}>
        ← VOLTAR À LEITURA
      </a>
      <h1>
        THESAINT
        <br />
        <em>fontes da leitura.</em>
      </h1>
      <p>
        Consulta em 16 de outubro de 2026. Pesquisa pública dirigida, sem censo
        de catálogo ou dados internos. Fatos de produto sustentam interpretações
        e perguntas, não um diagnóstico definitivo.
      </p>
      <p style={{ marginTop: 20 }}>
        BAW foi retirada desta versão por escolha do autor após os links não
        poderem ser revalidados. Todas as imagens da leitura são reais; o
        monograma RDC foi preservado.
      </p>
      {groups.map((group) => (
        <section id={group.id} key={group.id}>
          <h2>{group.title}</h2>
          <article>
            <h3>O que a fonte mostra</h3>
            <p>{group.fact}</p>
            {group.links.map(([label, url]) => (
              <div key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {label} ↗
                </a>
              </div>
            ))}
            <p className="limit">Limite / {group.limit}</p>
          </article>
        </section>
      ))}
      <section>
        <h2>Procedência das imagens</h2>
        <p>
          O registro inclui marca, produto, página, URL original, data e fato
          usado para cada imagem.
        </p>
        <a className="source" href={asset("sources.md")}>
          REGISTRO COMPLETO ↗
        </a>
        <br />
        <a className="source" href={asset("sources.json")}>
          DADOS DE PROCEDÊNCIA / JSON ↗
        </a>
      </section>
    </main>
  );
}
