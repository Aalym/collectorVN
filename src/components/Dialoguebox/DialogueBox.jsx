import React from "react";
import styles from "../Dialoguebox/DialogueBox.module.css";
export default function DialogueBar({ name, text }) {
  return (
    <div className={styles.DialogueBox}>
      {name && <div className={styles.dialogueName}>{name}</div>}
      <div className={styles.dialogueText}>{text}</div>
    </div>
  );
}
