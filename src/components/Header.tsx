"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { asset } from "@/lib/site";
export default function Header() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return (
    <header className="site-header">
      <a
        className="brand"
        href="https://rawdataclub.com"
        aria-label="Raw Data Club"
      >
        <img
          src={asset("rdc-monogram-light.png")}
          alt=""
          width={42}
          height={42}
        />
        <span>RAW DATA CLUB</span>
      </a>
      <span className="header-subject">PRODUCT READ / THESAINT</span>
      <motion.button
        whileHover={reduced ? {} : { y: -2 }}
        whileTap={reduced ? {} : { scale: 0.98 }}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="read-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "FECHAR" : "ÍNDICE"}{" "}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="read-menu"
            aria-label="Índice da leitura"
            className="read-menu"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {[
              ["#proporcoes", "01 / Proporções"],
              ["#collab", "02 / Collab"],
              ["#brasil", "03 / Brasil"],
              ["#fora", "04 / Lá fora"],
              ["#ftx", "05 / FTX 14"],
              ["#perguntas", "06 / Próximas perguntas"],
            ].map(([href, label]) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
