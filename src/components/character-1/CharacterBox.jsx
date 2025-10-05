import React from "react";
import styles from "../character-1/CharacterBox.module.css";

export default function CharacterBox({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.character}
      draggable="false"
    />
  );
}

