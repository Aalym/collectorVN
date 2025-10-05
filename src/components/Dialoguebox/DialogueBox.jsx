import React, { useEffect, useState } from "react";
import styles from "../Dialoguebox/DialogueBox.module.css";

export default function DialogueBar({ name, text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setFinished(false);

    let i = 0;
    const speed = 25; // скорость печати
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setFinished(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  const handleClick = () => {
    // по клику показываем весь текст сразу
    if (!finished) {
      setDisplayedText(text);
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
