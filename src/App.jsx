import { saveGameToSlot, loadGameFromSlot, getAllSaves, clearAllSaves } from "./GameLogic";
import { useState } from "react";
import { loadGame, saveGame } from "./GameLogic";
import Scene from "./components/Scene";
import MainMenu from "./components/MainMenu/MainMenu";
import SaveLoadMenu from "./UI/SaveLoadMenuUI";
import scenes from "./data/scenes";
import TestCollector from "../src/assets/chars/Test_collector.png";
import DialogueBar from "./components/Dialoguebox/DialogueBox";
import CharacterBox from "./components/character-1/CharacterBox";
import GameUI from "./UI/GameUI";
import { useEffect, useRef } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [scene, setScene] = useState("start");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [saves, setSaves] = useState(getAllSaves());
  const current = scenes[scene];

  // --- АУДИО ---
  const audioRef = useRef(null);
  const currentMusicRef = useRef(null);

  useEffect(() => {
    // 🎵 Если мы в главном меню — выключаем музыку полностью
    if (showMenu) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        currentMusicRef.current = null;
      }
      return; // ничего больше не делаем
    }

    if (!current) return;
    const newMusic = current.music;

    // 🔇 Если сцена не задаёт музыку — просто оставляем текущую
    if (!newMusic) return;

    // 🔕 Если в сцене явно указано "none" — выключаем звук
    if (newMusic === "none") {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        currentMusicRef.current = null;
      }
      return;
    }

    // 🟢 Если музыка не изменилась — ничего не делаем
    if (currentMusicRef.current === newMusic) return;

    // 🔄 Если другая — плавно сменим
    const fadeOutAndPlayNew = async () => {
      if (audioRef.current) {
        for (let i = 0.5; i >= 0; i -= 0.1) {
          audioRef.current.volume = i;
          await new Promise((r) => setTimeout(r, 100));
        }
        audioRef.current.pause();
      }

      const newAudio = new Audio(newMusic);
      newAudio.loop = true;
      newAudio.volume = 0.5;

      const playPromise = newAudio.play();
      if (playPromise) {
        playPromise.catch(() => {
          console.log("⏸️ Автовоспроизведение заблокировано, ждём клика пользователя");
          const resume = () => {
            newAudio.play();
            document.removeEventListener("click", resume);
          };
          document.addEventListener("click", resume);
        });
      }

      audioRef.current = newAudio;
      currentMusicRef.current = newMusic;
    };

    fadeOutAndPlayNew();
  }, [scene, showMenu]);

  const handleStart = () => {
    setShowMenu(false);
    setScene("start");
  };

  const handleLoad = () => {
    setShowLoadModal(true);
  };

  const handleExit = () => {
    window.close();
  };

  const handleBackToMenu = () => {
    setShowMenu(true);
    setShowLoadModal(false);
    setShowSaveModal(false);
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

          <CharacterBox src={TestCollector} alt="Персонаж" />
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
    </>
  );
}

  

export default App;
