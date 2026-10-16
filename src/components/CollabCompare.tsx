"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Photo from "./Photo";
export default function CollabCompare() {
  const [collab, setCollab] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="collab-compare">
      <div className="collab-photo">
        <Photo
          name="own-wide"
          alt="Wide Boxy Portal Sphere, produto THESAINT"
        />
        <motion.div
          className="collab-overlay"
          initial={false}
          animate={{ opacity: collab ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 0.5 }}
        >
          <Photo
            name="tsubasa"
            alt="Wide Boxy Big Overhead Kick, THESAINT x Captain Tsubasa"
          />
        </motion.div>
        <span className="photo-caption">
          {collab ? "CAPTAIN TSUBASA / WIDE BOXY" : "PORTAL SPHERE / WIDE BOXY"}
        </span>
      </div>
      <div className="collab-copy">
        <div
          className="segmented"
          role="group"
          aria-label="Comparar produto próprio e collab"
        >
          <button aria-pressed={!collab} onClick={() => setCollab(false)}>
            THESAINT
          </button>
          <button aria-pressed={collab} onClick={() => setCollab(true)}>
            × TSUBASA
          </button>
        </div>
        <h3>
          a história muda.
          <br />
          <em>a proporção continua.</em>
        </h3>
        <p>
          no Tsubasa, muda a arte, muda a história.
          <br />a Wide Boxy continua sendo nomeada.
        </p>
        <p className="small-muted">
          é continuidade de linguagem. não é prova de que as duas peças têm
          medidas idênticas.
        </p>
        <a className="source" href="fontes/#collab">
          AS DUAS PEÇAS [02–03] ↗
        </a>
      </div>
    </div>
  );
}
