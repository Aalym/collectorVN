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
import menuMusicFile from "/src/assets/audio/menu.ogg";

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
  const fadeTokenRef = useRef(0); // токен для отмены/сериализации фейдов

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const fadeOutAndPlayNew = async (newMusic) => {
    // Отменяем предыдущие фейды — фиксируем текущий токен
    const myToken = ++fadeTokenRef.current;

    // Плавное затухание текущей (если есть). Берём локальную ссылку.
    const oldAudio = audioRef.current;
    if (oldAudio) {
      // плавно уменьшаем громкость от текущей до 0
      for (let v = oldAudio.volume; v > 0.01; v -= 0.05) {
        if (fadeTokenRef.current !== myToken) return; // кто-то отменил
        oldAudio.volume = Math.max(0, v);
        await sleep(60);
      }
      oldAudio.pause();
      // не затираем audioRef.current сразу — дождёмся успешного запуска нового аудио ниже
    }

    if (fadeTokenRef.current !== myToken) return; // отмена после паузы

    // Если не нужно играть новую музыку — полностью остановим и очистим
    if (!newMusic) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = null;
      currentMusicRef.current = null;
      return;
    }

    // Если уже играет та же музыка — ничего не делаем
    if (currentMusicRef.current === newMusic && audioRef.current) {
      // возможно старый уже играет, просто возвращаемся
      return;
    }

    // Создаём новый аудиоплеер
    const newAudio = new Audio(newMusic);
    newAudio.loop = true;
    newAudio.volume = 0.0;

    // Попытка play (может быть заблокировано браузером)
    try {
      const p = newAudio.play();
      if (p) {
        await p.catch(() => { /* поймали блок автозапуска */ });
      }
    } catch (e) {
      /* ignore */
    }

    // Если токен изменился — отменяем и не ставим этот newAudio в audioRef
    if (fadeTokenRef.current !== myToken) {
      try { newAudio.pause(); } catch (e) {}
      return;
    }

    // Плавное появление громкости
    for (let v = 0; v <= 0.5; v += 0.05) {
      if (fadeTokenRef.current !== myToken) {
        try { newAudio.pause(); } catch (e) {}
        return;
      }
      newAudio.volume = v;
      await sleep(60);
    }

    // Успешно установили новый аудио
    // старый, если остался, уже был поставлен на pause выше
    audioRef.current = newAudio;
    currentMusicRef.current = newMusic;
  };

  // useEffect: реагируем только на showMenu и scene
  useEffect(() => {
    // если в меню — включаем музыку меню
    if (showMenu) {
      fadeOutAndPlayNew(menuMusicFile); // menuMusicFile — импортированный файл
      return;
    }

    // если в игре — смотрим на сцену
    if (!current) return;
    const newMusic = current.music;

    // если явно "none" — выключаем
    if (newMusic === "none") {
      fadeOutAndPlayNew(null);
      return;
    }

    // если нет поля music — не трогаем текущий трек (он продолжит играть)
    if (!newMusic) return;

    // если трек другой — переключаем
    if (currentMusicRef.current !== newMusic) {
      fadeOutAndPlayNew(newMusic);
    }
  }, [scene, showMenu, current]);

  // Останавливаем музыку и отменяем фейды при ручных переходах
  const stopMusicImmediately = () => {
    // инкремент токена — отменит все текущие/запланированные фейды
    fadeTokenRef.current++;
    if (audioRef.current) {
      try { audioRef.current.pause(); } catch (e) {}
    }
    audioRef.current = null;
    currentMusicRef.current = null;
  };

  const handleBackToMenu = () => {
    stopMusicImmediately();
    setShowMenu(true);
    setShowLoadModal(false);
    setShowSaveModal(false);
  };

  const handleStart = () => {
    stopMusicImmediately();
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
