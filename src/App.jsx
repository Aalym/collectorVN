import { useState } from "react";
import useGame from "./GameLogic";
import Scene from "./components/Scene";
import MainMenu from "./components/MainMenu";
import SaveLoadMenu from "./UI/SaveLoadMenuUI";


const scenes = {
  start: { name: "Арина", text: "Текст...", choices: [{ text: "Choice", next: "end" }] },
  end: { name: "", text: "Конец.", choices: [] },
};

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [scene, setScene] = useState("start");
  const current = scenes[scene];

  const handleStart = () => {
    setShowMenu(false);
    setScene("start");
  };

  const handleLoad = () => {
    // Add load logic here
    alert("Загрузка пока не реализована");
  };

  const handleExit = () => {
    window.close();
  };

  if (showMenu) {
    return (
      <MainMenu
        onStart={handleStart}
        onLoad={handleLoad}
        onExit={handleExit}
      />
    );
  }

  return (
    <div style={{ position: "relative", height: "100vh", backgroundColor: "#000" }}>
      <div className="dialogue-box">
        {current.name && <div className="dialogue-name">{current.name}</div>}
        <div className="dialogue-text">{current.text}</div>
      </div>

      <div className="choice-container">
        {current.choices.length > 0 ? (
          current.choices.map((choice, i) => (
            <button
              key={i}
              className="choice-btn"
              onClick={() => setScene(choice.next)}
            >
              {choice.text}
            </button>
          ))
        ) : (
          <button className="choice-btn" onClick={() => setScene("start")}>
            Играть снова
          </button>
        )}
      </div>
    </div>
  );
}

  

export default App;