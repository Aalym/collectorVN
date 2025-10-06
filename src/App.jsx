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
import EndingScreen from "./components/EndingScreen/EndingScreen";
import HotspotLayer from "./components/HotspotLayer";




function App() {
  const [playerState, setPlayerState] = useState({hasFlashlight: false,});
  const [showMenu, setShowMenu] = useState(true);
  const [scene, setScene] = useState("start");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [saves, setSaves] = useState(getAllSaves());
  const current = scenes[scene] || { bg: "", name: "", text: "", choices: [] };
  const [isMuted, setIsMuted] = useState(AudioManager.getMuted ? AudioManager.getMuted() : false);
  const [showEnding, setShowEnding] = useState(false);

  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const toggleMute = () => {
    
    const muted = AudioManager.toggleMute ? AudioManager.toggleMute() : !isMuted;
    setIsMuted(muted);
  };

  
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
  AudioManager.stopMusic(); 
  setShowMenu(true);
  setShowLoadModal(false);
  setShowSaveModal(false);
  setScene("start"); 
  setShowEnding(false); 
  setPlayerState({ hasFlashlight: false }); 

};  



useEffect(() => {
  if (!current) return;

  
  if (current.ending) {
    setShowEnding(true);
    return;
  }

  setShowEnding(false);
}, [current]);


  const handleStart = () => {
    AudioManager.stopMusic(); 
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
    saveGameToSlot(scene, slot, playerState);
    setSaves(getAllSaves());
    setShowSaveModal(false);
  };

  const handleLoadSlot = (slot) => {
    const loadedData = loadGameFromSlot(slot);
    if (loadedData && loadedData.id) {
      AudioManager.stopMusic();
      setScene(loadedData.id); 
      if (loadedData.playerState) {
        setPlayerState(loadedData.playerState);
      }
      setShowMenu(false);
      setShowLoadModal(false);
    } else {
      console.warn("⚠️ Пустой или битый слот:", loadedData);
    }
  };


  const handlePickupItem = (item) => {
    setPlayerState((prev) => ({
      ...prev,
      [item]: true,
    }));
  };


  const handleClearSaves = () => {
    clearAllSaves();
    setSaves(getAllSaves());
  };

  if (showEnding && current.bg && current.text) {
  return (
    <EndingScreen
      background={current.bg}
      text={current.text}
      onBackToMenu={handleBackToMenu}
    />
  );
}

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
          backgroundImage: current?.bg ? `url(${current.bg})` : "none",
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
            
            <div className="choice-container">
              {current.choices
                ?.filter((c) => c.type === "normal")
                .filter((c) => !c.requiredItem || playerState[c.requiredItem]) 
                .map((choice, i) => (
                  <button
                    key={i}
                    className="choice-btn"
                    onClick={() => {
                      
                      if (choice.giveItem) handlePickupItem(choice.giveItem);
                      
                      setScene(choice.next);
                    }}
                  >
                    {choice.text} 
                  </button>
                ))}
            </div>

            
            {current.hotspots && (
              <HotspotLayer
                hotspots={current.hotspots}
                onHotspotActivate={(nextScene) => setScene(nextScene)}
                onHoldChange={(holding) => setIsHolding(holding)}
                onProgressChange={(value) => setProgress(value)}
                onCursorMove={(pos) => setCursorPos(pos)}
              />
            )}
            {isHolding && (
              <div
                style={{
                  position: "fixed",
                  left: cursorPos.x - 25,
                  top: cursorPos.y - 25,
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  border: "3px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `conic-gradient(#fff ${progress * 3.6}deg, transparent 0deg)`,
                  }}
                />
              </div>
            )}


            
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
