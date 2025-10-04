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

  return { scene, nextScene, goBack, saves, saveToSlot, loadFromSlot };
}
