"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Photo from "./Photo";
const details = [
  { name: "Volume", text: "o cadarço largo participa do volume do modelo." },
  {
    name: "Materiais",
    text: "napa, camurça e nylon aparecem na descrição da SneakersBR.",
  },
  {
    name: "Construção",
    text: "a publicação descreve uma silhueta nova, criada dentro da parceria.",
  },
];
export default function Footwear() {
  const [selected, setSelected] = useState(0);
  const reduce = useReducedMotion();
  return (
    <div className="footwear">
      <div className="shoe-image">
        <Photo
          name="ftx"
          alt="FTX 14, Reebok x THESAINT, fotografia real do modelo"
        />
        <span className="photo-caption">REEBOK × THESAINT / FTX 14</span>
      </div>
      <div className="shoe-copy">
        <p className="eyebrow">A PERGUNTA JÁ ATRAVESSOU CATEGORIA.</p>
        <h3>
          e quando
          <br />
          vira tênis?
        </h3>
        <p>
          a FTX 14 foi descrita como uma silhueta nova, criada dentro da
          parceria.
        </p>
        <div className="shoe-tabs" role="group" aria-label="Detalhes da FTX 14">
          {details.map((d, i) => (
            <motion.button
              key={d.name}
              whileHover={reduce ? {} : { y: -2 }}
              aria-pressed={i === selected}
              onClick={() => setSelected(i)}
            >
              {d.name}
            </motion.button>
          ))}
        </div>
        <div className="shoe-note" aria-live="polite">
          {details[selected].text}
        </div>
        <p className="shoe-question">
          oq da FTX 14 é collab
          <br />e oq pode virar linguagem
          <br />
          recorrente da THESAINT?
        </p>
        <a className="source" href="fontes/#ftx">
          THESAINT + SNEAKERSBR [10] ↗
        </a>
      </div>
    </div>
  );
}
