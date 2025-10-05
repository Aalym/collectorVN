
import React from "react";
import styles from "./GameUI.module.css";
import { AudioManager } from "D:/Project/collectorVN/src/audioManager.js";
export default function GameUI({ onBackToMenu, onSave, onLoad }) {
	return (
		<div style={{ position: 'absolute', top: 30, right: 20, zIndex: 10, display: 'flex', flexDirection: 'column', gap: '24px' }}>
			<button className={styles.gameuibtn} onClick={onBackToMenu}>В главное меню</button>
			<button className={styles.gameuibtn} onClick={onSave}>Сохранить</button>
			<button className={styles.gameuibtn} onClick={onLoad}>Загрузить сохранение</button>
		</div>
	);
}

