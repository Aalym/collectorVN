import React from "react";

export default function CharacterBox({ src, alt }) {
  return (
    <div className="character-box">
      <img src={src} alt={alt} style={{maxWidth:"320px",maxHeight:"320px"}} />
    </div>
  );
}
