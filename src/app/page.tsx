import Header from "@/components/Header";
import MotionLayer from "@/components/MotionLayer";
import Photo from "@/components/Photo";
import SectionLabel from "@/components/SectionLabel";
import FitExplorer from "@/components/FitExplorer";
import CollabCompare from "@/components/CollabCompare";
import Footwear from "@/components/Footwear";
import { asset, siteUrl } from "@/lib/site";
const questions = [
  ["PROPORÇÃO", "qual proporção\nsempre volta?"],
  ["COLLAB", "qual fit carrega\na parceria?"],
  ["CONSTRUÇÃO", "oq vira core\ne oq é experimento?"],
  ["CATEGORIA", "oq consegue\natravessar categoria?"],
  ["IDENTIDADE", "onde o X ainda\né necessário?"],
];
const globalStories = [
  {
    brand: "KITH",
    image: "kith",
    caption: "LAX / STANDARD",
    title: "um vocabulário,\nnão um fit só.",
    text: "LAX e Jones são nomeadas como Standard e Boxy. duas famílias, dois jeitos de ocupar o corpo.",
    anchor: "kith",
  },
  {
    brand: "PALACE",
    image: "palace",
    caption: "GIGANTIC / ARQUIVO SPRING 2023",
    title: "o shape começa\nno nome.",
    text: "Gigantic, Large Up e Heavy põem escala e peso na linguagem do produto. aqui, são referências de arquivo.",
    anchor: "palace",
  },
  {
    brand: "NOAH",
    image: "noah",
    caption: "BOXY FIT RUGBY",
    title: "construção fala alto.\no logo pode falar baixo.",
    text: "proporção, listras construídas no tecido e acabamento dividem o espaço com um bordado discreto.",
    anchor: "noah",
  },
];
export default function Home() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Talvez o código da THESAINT não seja só o X.",
    description: "Uma leitura independente de proporção, construção e produto.",
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    author: { "@type": "Person", name: "Felipe Rocha" },
    publisher: {
      "@type": "Organization",
      name: "Raw Data Club",
      url: "https://rawdataclub.com",
    },
    mainEntityOfPage: siteUrl + "/",
    image: siteUrl + "/og.jpg",
    inLanguage: "pt-BR",
  };
  return (
    <>
      <a className="skip" href="#leitura">
        pular para a leitura
      </a>
      <Header />
      <main id="leitura">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-visual" data-hero-photo>
            <Photo
              name="hero"
              alt="Wide Boxy THESAINT no corpo, foto oficial da marca"
              priority
              sizes="(max-width:700px) 100vw, 60vw"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">
              RAW DATA CLUB / THESAINT
              <br />
              PRODUCT READ / OCT. 2026
            </p>
            <h1 id="hero-title">
              TALVEZ O CÓDIGO
              <br />
              DA THESAINT
              <br />
              NÃO SEJA SÓ <em>O X.</em>
            </h1>
            <p className="hero-sub">
              pode estar também no jeito
              <br />
              que a peça ocupa o corpo.
            </p>
          </div>
          <div className="hero-bottom">
            <span>01 OBSERVAÇÃO / 06 PERGUNTAS</span>
            <a href="#proporcoes">
              UM OLHAR MAIS PERTO <span aria-hidden="true">↓</span>
            </a>
            <span>FOTO / THESAINT</span>
          </div>
        </section>
        <section className="shell fit-section" id="proporcoes">
          <SectionLabel
            number="01"
            title="O QUE ME CHAMOU ATENÇÃO"
            aside="PROPORÇÃO / CONSTRUÇÃO / REPETIÇÃO"
          />
          <div className="section-intro">
            <h2 data-reveal>
              vcs já não têm
              <br />
              só <em>“oversized”.</em>
            </h2>
            <p>
              fui olhar a marca mais a fundo e uma coisa me chamou atenção:
              Oversized, Wide Boxy, Boxy, Unique...
              <br />
              <br />
              já existe um vocabulário de proporções aí.
            </p>
          </div>
          <FitExplorer />
          <p className="fit-outro" data-reveal>
            talvez isso já seja mais que modelagem.
            <br />
            <strong>talvez seja parte da linguagem da marca.</strong>
          </p>
        </section>
        <section className="shell collab-section" id="collab">
          <SectionLabel
            number="02"
            title="ISSO CONTINUA QUANDO ENTRA COLLAB"
            aside="PRODUTO PRÓPRIO ↔ CAPTAIN TSUBASA"
          />
          <CollabCompare />
        </section>
        <section className="shell brazil-section" id="brasil">
          <SectionLabel
            number="03"
            title="NO BRASIL, DOIS CAMINHOS"
            aside="MESMA PERGUNTA, OUTRAS CONSTRUÇÕES"
          />
          <h2 data-reveal>
            como a peça
            <br />
            <em>ganha memória.</em>
          </h2>
          <div className="brazil-stories">
            <article className="story">
              <Photo
                name="pace"
                alt="Cotton Code Vintage Black da PACE, foto oficial no corpo"
                sizes="(max-width:700px) 88vw, 44vw"
              />
              <div className="story-copy">
                <p className="eyebrow">PACE / COTTON CODE</p>
                <h3>
                  fit não
                  <br />
                  trabalha sozinho.
                </h3>
                <p>
                  na Cotton Code atual, modelagem box, algodão de 340 GSM e
                  detalhe metálico removível fazem parte da mesma construção.
                </p>
                <p className="story-read">
                  a proporção pode ganhar força com material e detalhe.
                </p>
                <a className="source" href="fontes/#pace">
                  A PEÇA E A FONTE [04] ↗
                </a>
              </div>
            </article>
            <article className="story carnan-story">
              <Photo
                name="carnan"
                alt="Carnan x ASICS Tech Pack T-shirt, fotografia oficial"
                sizes="(max-width:700px) 88vw, 44vw"
              />
              <div className="story-copy">
                <p className="eyebrow">CARNAN / ASICS</p>
                <h3>
                  a collab muda.
                  <br />o fit ainda tem dono.
                </h3>
                <p>
                  nas fichas da parceria, Path II é regular Carnan; Tech Pack é
                  boxy Carnan. a construção continua sendo nomeada pela marca.
                </p>
                <p className="story-read">
                  o que interessa aqui é o vocabulário que permanece.
                </p>
                <a className="source" href="fontes/#carnan">
                  AS DUAS FICHAS [05–06] ↗
                </a>
              </div>
            </article>
          </div>
        </section>
        <section className="shell global-section" id="fora">
          <SectionLabel
            number="04"
            title="LÁ FORA"
            aside="REFERÊNCIAS / OUTROS CONTEXTOS"
          />
          <div className="global-intro">
            <h2 data-reveal>
              logo identifica.
              <br />
              <em>proporção também.</em>
            </h2>
            <p>
              não é escolher um único fit.
              <br />é fazer alguns deles carregarem significado.
            </p>
          </div>
          <div className="global-grid grid md:grid-cols-3">
            {globalStories.map((s) => (
              <article key={s.brand}>
                <Photo
                  name={s.image}
                  alt={`${s.brand}: ${s.caption}, fotografia oficial`}
                  sizes="(max-width:700px) 42vw, 28vw"
                />
                <p className="eyebrow">
                  {s.brand} <span>{s.caption}</span>
                </p>
                <h3>
                  {s.title.split("\n").map((l, i) => (
                    <span key={i}>
                      {l}
                      <br />
                    </span>
                  ))}
                </h3>
                <p>{s.text}</p>
                <a className="source" href={`fontes/#${s.anchor}`}>
                  VER FONTE ↗
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="shell ftx-section" id="ftx">
          <SectionLabel
            number="05"
            title="A FTX 14 MUDA A ESCALA DA PERGUNTA"
            aside="FOOTWEAR / REEBOK × THESAINT"
          />
          <Footwear />
        </section>
        <section className="shell question-section" id="perguntas">
          <SectionLabel
            number="06"
            title="O QUE ISSO PODE ABRIR"
            aside="A LEITURA TERMINA. A PERGUNTA CONTINUA."
          />
          <div className="question-intro">
            <p className="eyebrow">UM CAMINHO POSSÍVEL</p>
            <h2 data-reveal>
              talvez não seja
              <br />
              usar <em>mais o X.</em>
            </h2>
            <p>
              talvez seja deixar mais coisas parecerem
              <br />
              THESAINT sem precisar dele.
            </p>
          </div>
          <div className="question-list">
            {questions.map(([label, q], i) => (
              <article data-question key={label}>
                <span className="eyebrow">
                  0{i + 1} / {label}
                </span>
                <h3>
                  {q.split("\n").map((l, j) => (
                    <span key={j}>
                      {l}
                      <br />
                    </span>
                  ))}
                </h3>
                <span className="question-plus" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
          <p className="central-thought" data-reveal>
            quando a silhueta continua reconhecível mesmo sem o logo, ela deixa
            de ser só fit e começa a virar <em>código de marca.</em>
          </p>
          <div className="rdc-end">
            <div className="rdc-brand">
              <img
                src={asset("rdc-monogram-light.png")}
                alt="Monograma oficial Raw Data Club"
                width={65}
                height={65}
              />
              <div>
                RAW DATA CLUB
                <br />
                <span>FELIPE ROCHA / UMA LEITURA DE FORA</span>
              </div>
            </div>
            <div>
              <p>
                eu criei a RDC pra fazer esse tipo de leitura. olhar produto,
                catálogo, preço, histórico e mercado pra encontrar perguntas que
                podem mudar uma decisão de marca.
              </p>
              <p>
                isso aqui é só um recorte. se fizer sentido pra vcs, dá pra
                aprofundar em produto, categoria, collabs e referências
                específicas da THESAINT.
              </p>
              <a className="rdc-link" href="https://rawdataclub.com">
                VER RAW DATA CLUB <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>RAW DATA CLUB / THESAINT</span>
        <p>
          leitura independente / fontes públicas / 16 out. 2026
          <br />
          fotos das respectivas marcas. FTX 14: SneakersBR / divulgação.
        </p>
        <a href="fontes/">FONTES DA LEITURA ↗</a>
        <a href="#leitura">VOLTAR AO TOPO ↑</a>
      </footer>
      <MotionLayer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
