import styles from "./MainMenu.module.css";
import { AudioManager } from "/src/audioManager.js";


export default function MainMenu({ onStart, onLoad, onExit, onToggleMute, isMuted,  }) {
  return (
    <div className={styles.mainMenuBg}>
      <h1 className={styles.mainMenuTitle}>Collector VN</h1>
      <div className={styles.mainMenuButtons}>
        <button
          onClick={onStart}
          className={styles.mainMenuBtn}
        >
          Начать игру
        </button>
        <button
          onClick={onLoad}
          className={styles.mainMenuBtn}
        >
          Загрузить игру
        </button>
        <button
          onClick={onExit}
          className={styles.mainMenuBtn}
        >
          Выйти
        </button>
        <button
          onClick={() => {
            const muted = AudioManager.toggleMute();
            (muted ? "🔇 Музыка выключена" : "🔊 Музыка включена");
            }}
            className={styles.mainMenuBtn}
        >
            {AudioManager.getMuted() ? "🔇 Включить музыку" : "🔊 Выключить музыку"}
        </button>
      </div>
    </div>
  );
}
