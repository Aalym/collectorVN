import { useState } from "react";
import useGame from "./GameLogic";
import Scene from "./components/Scene";
import MainMenu from "./components/MainMenu";
import SaveLoadMenu from "./UI/SaveLoadMenuUI";

function App() {
  const { scene, nextScene, goBack, saves, saveToSlot, loadFromSlot } = useGame();
  const [started, setStarted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  if (!started)
    return <MainMenu onStart={() => setStarted(true)} />;

  return (
    <div className="relative">
      <Scene scene={scene} nextScene={nextScene} />

      {/* Кнопки управления */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button onClick={() => goBack()} className="bg-gray-700 px-3 py-1 rounded">
          Назад
        </button>
        <button onClick={() => setShowMenu(true)} className="bg-gray-700 px-3 py-1 rounded">
          Сохранить / Загрузить
        </button>
      </div>

      {showMenu && (
        <SaveLoadMenu
          saves={saves}
          saveToSlot={saveToSlot}
          loadFromSlot={loadFromSlot}
          onClose={() => setShowMenu(false)}
        />
      )}
    </div>
  );
}

export default App;
