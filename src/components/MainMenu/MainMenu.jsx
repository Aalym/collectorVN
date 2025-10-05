import styles from "./MainMenu.module.css";

export default function MainMenu({ onStart, onLoad, onExit }) {
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
      </div>
    </div>
  );
}
