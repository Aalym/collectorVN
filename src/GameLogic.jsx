import { useState } from "react";
import scenes from "/src/data/scenes.js";

export default function useGame() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const [saves, setSaves] = useState(Array(4).fill(null));

  const scene = scenes[sceneIndex];

  function nextScene(nextIndex) {
    setHistory([...history, sceneIndex]);
    setSceneIndex(nextIndex);
  }

  function goBack() {
    if (history.length > 0) {
      const prev = history.pop();
      setSceneIndex(prev);
      setHistory([...history]);
    }
  }

  function saveToSlot(slot) {
    const newSaves = [...saves];
    newSaves[slot] = { sceneName: scene.text, index: sceneIndex };
    setSaves(newSaves);
    localStorage.setItem("saves", JSON.stringify(newSaves));
  }

  function loadFromSlot(slot) {
    const data = JSON.parse(localStorage.getItem("saves")) || [];
    const save = data[slot];
    if (save) setSceneIndex(save.index);
  }

  function loadGame() {
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

  function saveGame(scene) {
    localStorage.setItem("vn_save", JSON.stringify({ scene }));
  }

  return { scene, nextScene, goBack, saves, saveToSlot, loadFromSlot, loadGame, saveGame };
}

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

export function saveGameToSlot(scene, slot) {
  let saves = JSON.parse(localStorage.getItem('vn_saves') || '[]');
  // Use scene.id and scene.text for display name
  let name = '';
  if (scene.id && scene.text) {
    name = `${scene.id}: ${scene.text.substring(0, 30)}`;
  } else if (scene.text) {
    name = scene.text.substring(0, 30);
  } else if (scene.id) {
    name = scene.id;
  } else {
    name = `Сцена ${slot+1}`;
  }
  saves[slot] = { scene, name };
  localStorage.setItem('vn_saves', JSON.stringify(saves));
}

export function loadGameFromSlot(slot) {
  let saves = JSON.parse(localStorage.getItem('vn_saves') || '[]');
  return saves[slot]?.scene || null;
}

export function getAllSaves() {
  return JSON.parse(localStorage.getItem('vn_saves') || '[]');
}

export function clearAllSaves() {
  localStorage.removeItem('vn_saves');
}
