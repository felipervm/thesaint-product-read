"use client";
import { useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Photo from "./Photo";
const fits = [
  {
    name: "Oversized",
    image: "fit-oversized",
    copy: "ombros caídos, mangas mais longas e uma construção estruturada.",
  },
  {
    name: "Wide Boxy",
    image: "fit-wide-boxy",
    copy: "silhueta quadrada, mangas largas e uma presença mais robusta.",
  },
  {
    name: "Boxy",
    image: "fit-boxy",
    copy: "corte reto e quadrado, levemente amplo, com ombros alinhados.",
  },
  {
    name: "Unique",
    image: "fit-unique",
    copy: "mais ajustada na cintura, com a parte inferior mais solta.",
  },
];
export default function FitExplorer() {
  const [selected, setSelected] = useState(1);
  const reduce = useReducedMotion();
  function keys(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if ((e.key === "ArrowRight" || e.key === "ArrowDown")) next = (index + 1) % fits.length;
    else if ((e.key === "ArrowLeft" || e.key === "ArrowUp"))
      next = (index + fits.length - 1) % fits.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = fits.length - 1;
    else return;
    e.preventDefault();
    setSelected(next);
    document.getElementById(`fit-tab-${next}`)?.focus();
  }
  return (
    <div className="fit-explorer">
      <div className="fit-visual">
        <motion.div
          key={selected}
          initial={reduce ? false : { opacity: 0.45, scale: 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          <Photo
            name={fits[selected].image}
            alt={`Modelagem ${fits[selected].name}, foto oficial THESAINT`}
            sizes="(max-width:700px) 88vw, 44vw"
          />
        </motion.div>
        <span className="fit-visual-caption">
          THESAINT / {fits[selected].name.toUpperCase()}
        </span>
      </div>
      <div className="fit-controls">
        <p className="eyebrow">UM VOCABULÁRIO, NÃO UM FIT SÓ.</p>
        <div
          role="tablist"
          aria-label="Modelagens THESAINT"
          aria-orientation="vertical"
        >
          {fits.map((fit, index) => (
            <button
              key={fit.name}
              id={`fit-tab-${index}`}
              role="tab"
              aria-controls="fit-description"
              aria-selected={selected === index}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setSelected(index);
              }}
              onKeyDown={(e) => keys(e, index)}
            >
              <span>{fit.name}</span>
              <span aria-hidden="true">{selected === index ? "↗" : "+"}</span>
            </button>
          ))}
        </div>
        <div
          className="fit-description"
          id="fit-description"
          role="tabpanel"
          aria-labelledby={`fit-tab-${selected}`}
          tabIndex={0}
        >
          <p>{fits[selected].copy}</p>
          <a className="source" href="fontes/#modelagens">
            DESCRIÇÃO OFICIAL [01] ↗
          </a>
        </div>
        <p className="micro">
          hover, toque ou teclado / fotos em escalas distintas.
          <br />
          Comfort e Baby Tee também fazem parte do vocabulário oficial.
        </p>
      </div>
    </div>
  );
}

