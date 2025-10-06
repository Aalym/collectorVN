import { useState } from "react";
import scenes from "/src/data/scenes.js";



export function loadGame() {
  const data = localStorage.getItem("vn_save");
  if (data) {
    try {
      return JSON.parse(data).scene;
    } catch {
      return null;
    }
  }
  return null;
}

export function saveGame(scene) {
  localStorage.setItem("vn_save", JSON.stringify({ scene }));
}

export function loadGameFromSlot(slot) {
  const saves = JSON.parse(localStorage.getItem('vn_saves') || '[]');
  return saves[slot] || null; // ✅ возвращаем весь объект
}

export function getAllSaves() {
  return JSON.parse(localStorage.getItem('vn_saves') || '[]');
}

export function clearAllSaves() {
  localStorage.removeItem('vn_saves');
}

export function saveGameToSlot(scene, slot, playerState = {}) {
  const saves = getAllSaves();
  saves[slot] = {
    id: scene,
    name: scene,
    playerState, // 🟢 сохраняем состояние игрока
    timestamp: Date.now(),
  };
  localStorage.setItem("vn_saves", JSON.stringify(saves));
}
