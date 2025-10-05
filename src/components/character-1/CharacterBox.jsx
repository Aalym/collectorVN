import React from "react";
import styles from "../character-1/CharacterBox.module.css";

export default function CharacterBox({ src, alt }) {
  return (
    <div className={styles.characterBox}>
      <img src={src} alt={alt} style={{maxWidth:"320px",maxHeight:"320px"}} />
    </div>
  );
}
