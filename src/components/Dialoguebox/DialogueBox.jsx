import React, { useEffect, useState } from "react";
import styles from "../Dialoguebox/DialogueBox.module.css";

export default function DialogueBar({ name, text }) {
  const [key, setKey] = useState(0);

  // Каждый раз, когда текст меняется — обновляем ключ
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [text]);

  return (
    <div className={styles.DialogueBox}>
      {name && <div className={styles.dialogueName}>{name}</div>}
      <div className={styles.dialogueText}>
        {/* 👇 key заставляет React пересоздать элемент, перезапуская анимацию */}
        <span key={key} className={styles.textReveal}>
          {text}
        </span>
      </div>
    </div>
  );
}
