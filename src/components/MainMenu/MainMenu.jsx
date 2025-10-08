import styles from "./MainMenu.module.css";
import { AudioManager } from "/src/audioManager.js";
import Title from "/src/components/MainMenu/TitleBg.png";
import mainMenuBg from "/src/components/MainMenu/MainMenuBg.JPG";
import buttonBg from "/src/components/MainMenu/menuButtonBg.PNG";

export default function MainMenu({ onStart, onLoad, onExit, onToggleMute, isMuted }) {
  return (
    <div
      className={styles.mainMenuBg}
      style={{
        backgroundImage: `url(${mainMenuBg})`,
      }}
    >
      <img src={Title} alt="Collector VN Title" className={styles.mainMenuTitle} />
      
      <div className={styles.mainMenuButtons}>
        <button
          onClick={onStart}
          className={styles.mainMenuBtn}
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          Начать игру
        </button>

        <button
          onClick={onLoad}
          className={styles.mainMenuBtn}
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          Загрузить игру
        </button>
        <button
          onClick={() => {
            const muted = AudioManager.toggleMute();
            (muted ? "🔇 Музыка выключена" : "🔊 Музыка включена");
          }}
          className={styles.mainMenuBtn}
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          {AudioManager.getMuted() ? "🔇 Включить музыку" : "🔊 Выключить музыку"}
        </button>
      </div>
    </div>
  );
}
