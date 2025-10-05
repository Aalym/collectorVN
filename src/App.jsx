import { saveGameToSlot, loadGameFromSlot, getAllSaves, clearAllSaves } from "./GameLogic";
import { useState } from "react";
import { loadGame, saveGame } from "./GameLogic";
import Scene from "./components/Scene";
import MainMenu from "./components/MainMenu";
import SaveLoadMenu from "./UI/SaveLoadMenuUI";
import scenes from "./data/scenes";
import TestCollector from "../src/assets/chars/Test_collector.png";


function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [scene, setScene] = useState("start");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [saves, setSaves] = useState(getAllSaves());
  const current = scenes[scene];

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
        <button 
          className="choice-btn" 
          onClick={handleBackToMenu} 
          style={{position: 'absolute', top: 20, right: 20, zIndex: 10}}
        >
          В главное меню
        </button>
        <button
          className="choice-btn"
          onClick={handleSave}
          style={{position: 'absolute', top: 80, right: 20, zIndex: 10}}
        >
          Сохранить
        </button>
        <button
          className="choice-btn"
          onClick={() => setShowLoadModal(true)}
          style={{position: 'absolute', top: 140, right: 20, zIndex: 10}}
        >
          Загрузить сохранение
        </button>
        <div className="dialogue-box" style={{
  height: "175px",
  background: "rgba(30,30,30,0.85)",
  marginBottom: "2px",
  display: "flex",
  alignItems: "flex-end",
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0
}}>
  <div
    className="character-box"
    style={{
      paddingTop: "21px",
      width: "1920px",
      height: "1080px",
      marginRight: "124px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "-240px"
    }}
  >
    {<img src="../src/assets/chars/Test_collector.png" alt="Персонаж" style={{maxWidth:"1066px",maxHeight:"955px"}} />}
  </div>
  <div style={{ flex: 1 }}>
    {current.name && <div className="dialogue-name">{current.name}</div>}
    <div className="dialogue-text">{current.text}</div>
  </div>
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
            <button className="choice-btn" onClick={() => setScene("start")}>Играть снова</button>
          )}
        </div>
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
