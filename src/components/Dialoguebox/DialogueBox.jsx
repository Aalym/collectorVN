import React, { useEffect, useState, useRef } from "react";
import styles from "../Dialoguebox/DialogueBox.module.css";

export default function DialogueBar({ name, text }) {
  const safeText = text || "";
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef(null); // 🔹 сохраняем интервал сюда

  useEffect(() => {
    setDisplayedText("");
    setFinished(false);

    let i = 0;
    const speed = 25; // скорость печати
    intervalRef.current = setInterval(() => {
      i++;
      setDisplayedText((text || "").slice(0, i));
      if (i >= text.length) {
        clearInterval(intervalRef.current);
        setFinished(true);
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [text]);

  const handleClick = () => {
    if (!finished) {
      clearInterval(intervalRef.current); // 🔹 остановить печать
      setDisplayedText(text); // 🔹 показать весь текст
      setFinished(true);
    }
  };

  return (
    <div className={styles.DialogueBox} onClick={handleClick}>
      {name && <div className={styles.dialogueName}>{name}</div>}
      <div className={styles.dialogueText}>
        {displayedText.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
