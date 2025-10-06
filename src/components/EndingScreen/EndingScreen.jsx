import React from "react";
import styles from "./EndingScreen.module.css";

export default function EndingScreen({ text, onBackToMenu }) {
  return (
    <div className={styles.endingScreen}>
      <div className={styles.textBox}>
        <p>{text}</p>
        <button className={styles.menuButton} onClick={onBackToMenu}>
          Вернуться в меню
        </button>
      </div>
    </div>
  );
}
