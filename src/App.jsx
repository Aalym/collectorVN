import { saveGameToSlot, loadGameFromSlot, getAllSaves, clearAllSaves, loadGame, saveGame } from "./GameLogic";
import Scene from "./components/Scene";
import MainMenu from "./components/MainMenu/MainMenu";
import SaveLoadMenu from "./UI/SaveLoadMenuUI";
import scenes from "./data/scenes";
import TestCollector from "../src/assets/chars/Test_collector.png";
import DialogueBar from "./components/Dialoguebox/DialogueBox";
import CharacterBox from "./components/character-1/CharacterBox";
import GameUI from "./UI/GameUI";
import { useEffect, useRef, useState } from "react";
import { AudioManager } from "./audioManager";
import menuMusicFile from "/src/assets/audio/menu.ogg";



function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [scene, setScene] = useState("start");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [saves, setSaves] = useState(getAllSaves());
  const current = scenes[scene];
  const [isMuted, setIsMuted] = useState(AudioManager.getMuted ? AudioManager.getMuted() : false);
  const [showEnding, setShowEnding] = useState(false);

  const toggleMute = () => {
    // AudioManager.toggleMute() должен возвращать новое состояние (true/false)
    const muted = AudioManager.toggleMute ? AudioManager.toggleMute() : !isMuted;
    setIsMuted(muted);
  };

  // если у тебя есть эффект, который слушает isMuted
  useEffect(() => {
    if (showMenu) {
      AudioManager.fadeOutAndPlayNew(menuMusicFile);
    } else if (current?.music === "none") {
      AudioManager.stopMusic();
    } else if (current?.music) {
      AudioManager.fadeOutAndPlayNew(current.music);
    }
    }, [scene, showMenu, current]);

      const handleBackToMenu = () => {
  AudioManager.stopMusic(); // 🆕 останавливаем текущую музыку
  setShowMenu(true);
  setShowLoadModal(false);
  setShowSaveModal(false);
  setScene("mainmenu"); // 👈 важно, чтобы реально вернуло к сцене меню
  setShowEnding(false); // 👈 если есть состояние окончания — убираем
};  

  if (current && current.end) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${current.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "40px 80px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "20px" }}>{current.text}</h1>
        <button className="choice-btn" onClick={handleBackToMenu}>
          Вернуться в меню
        </button>
      </div>
    </div>
  );
}


  const handleStart = () => {
    AudioManager.stopMusic(); // выключаем музыку меню
    setShowMenu(false);
    setScene("start");
  };
  const handleLoad = () => {
    setShowLoadModal(true);
  };

  const handleExit = () => {
    window.close();
  };

  const handleSave = () => {
    setShowSaveModal(true);
  };

  const handleSaveSlot = (slot) => {
    saveGameToSlot(scene, slot);
    setSaves(getAllSaves());
    setShowSaveModal(false);
  };

  const handleLoadSlot = (slot) => {
    const loadedScene = loadGameFromSlot(slot);
    if (loadedScene) {
      AudioManager.stopMusic(); // 🆕 останавливаем музыку меню
      setScene(loadedScene.id || loadedScene);
      setShowMenu(false);
      setShowLoadModal(false);
    }
  };

  const handleClearSaves = () => {
    clearAllSaves();
    setSaves(getAllSaves());
  };

  if (showMenu) {
    return (
      <>
        <MainMenu
          onStart={handleStart}
          onLoad={() => setShowLoadModal(true)}
          onExit={handleExit}
          onToggleMute={toggleMute}
          isMuted={isMuted}
        />
        {showLoadModal && (
          <div style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.7)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100}}>
            <div style={{background:'#222', padding:32, borderRadius:16, minWidth:300}}>
              <h2 style={{color:'#fff', marginBottom:16}}>Загрузить сохранение</h2>
              {[0,1,2,3].map(slot => (
                <button key={slot} style={{margin:'8px', width:'100%'}} className="choice-btn" onClick={() => handleLoadSlot(slot)}>
                  {saves[slot]?.name ? `Слот ${slot+1}: ${saves[slot].name}` : `Слот ${slot+1}: (пусто)`}
                </button>
              ))}
              <button style={{marginTop:16, width:'100%'}} className="choice-btn" onClick={()=>setShowLoadModal(false)}>Отмена</button>
              <button style={{marginTop:8, width:'100%'}} className="choice-btn" onClick={handleClearSaves}>Очистить все сохранения</button>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div style={{ position: "relative", height: "100vh", backgroundColor: "#000" }}>
        <GameUI
          onBackToMenu={handleBackToMenu}
          onSave={handleSave}
          onLoad={() => setShowLoadModal(true)}
        />
        <div style={{
          position: "relative",
          height: "100vh",
          backgroundImage: `url(${current.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000",
          transition: "background-image 0.5s ease-in-out",
        }}
      >

          {current.char && (
            <CharacterBox src={current.char} alt={current.name || "Персонаж"} />
          )}
          <DialogueBar name={current.name} text={current.text} />
        </div>
          <div>
            {/* Центр — обычные варианты выбора */}
            <div className="choice-container">
              {current.choices
                ?.filter((c) => c.type === "normal")
                .map((choice, i) => (
                  <button
                    key={i}
                    className="choice-btn"
                    onClick={() => setScene(choice.next)}
                  >
                    {choice.text}
                  </button>
                ))}
            </div>

            {/* Слева — кнопка "Назад" */}
            {current.choices
              ?.filter((c) => c.type === "back")
              .map((choice, i) => (
                <button
                  key={i}
                  className="back-btn"
                  onClick={() => setScene(choice.next)}
                >
                  {choice.text}
                </button>
              ))}
          </div>

          {/* Справа — кнопка "Продолжить" */}
          {current.choices
            ?.filter((c) => c.type === "next")
            .map((choice, i) => (
              <button
                key={i}
                className="continue-btn"
                onClick={() => setScene(choice.next)}
              >
                {choice.text}
              </button>
            ))}
          </div>
      {showSaveModal && (
        <div style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.7)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100}}>
          <div style={{background:'#222', padding:32, borderRadius:16, minWidth:300}}>
            <h2 style={{color:'#fff', marginBottom:16}}>Сохранить в слот</h2>
            {[0,1,2,3].map(slot => (
              <button key={slot} style={{margin:'8px', width:'100%'}} className="choice-btn" onClick={() => handleSaveSlot(slot)}>
                {saves[slot]?.name ? `Слот ${slot+1}: ${saves[slot].name}` : `Слот ${slot+1}: (пусто)`}
              </button>
            ))}
            <button style={{marginTop:16, width:'100%'}} className="choice-btn" onClick={()=>setShowSaveModal(false)}>Отмена</button>
            <button style={{marginTop:8, width:'100%'}} className="choice-btn" onClick={handleClearSaves}>Очистить все сохранения</button>
          </div>
        </div>
      )}
      {showLoadModal && (
        <div style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.7)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100}}>
          <div style={{background:'#222', padding:32, borderRadius:16, minWidth:300}}>
            <h2 style={{color:'#fff', marginBottom:16}}>Загрузить сохранение</h2>
            {[0,1,2,3].map(slot => (
              <button key={slot} style={{margin:'8px', width:'100%'}} className="choice-btn" onClick={() => handleLoadSlot(slot)}>
                {saves[slot]?.name ? `Слот ${slot+1}: ${saves[slot].name}` : `Слот ${slot+1}: (пусто)`}
              </button>
            ))}
            <button style={{marginTop:16, width:'100%'}} className="choice-btn" onClick={()=>setShowLoadModal(false)}>Отмена</button>
            <button style={{marginTop:8, width:'100%'}} className="choice-btn" onClick={handleClearSaves}>Очистить все сохранения</button>
          </div>
        </div>
      )}

      {showEnding && (
        <EndingScreen
          background={current.bg}
          text={current.text}
          onBackToMenu={() => {
          setShowEnding(false);
          handleBackToMenu();
        }}
      />
    )}
  </>
  );
}


  

export default App;
