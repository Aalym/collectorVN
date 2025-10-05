import React from "react";

export default function DialogueBar({ name, text }) {
  return (
    <div className="dialogue-box">
      {name && <div className="dialogue-name">{name}</div>}
      <div className="dialogue-text">{text}</div>
    </div>
  );
}
