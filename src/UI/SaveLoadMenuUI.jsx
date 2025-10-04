export default function SaveLoadMenu({ saves, saveToSlot, loadFromSlot, onClose }) {
  return (
    <div className="absolute inset-0 bg-black/80 text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Сохранения</h2>

      <div className="grid grid-cols-2 gap-4">
        {saves.map((save, i) => (
          <div key={i} className="bg-gray-700 p-3 rounded-lg w-40 h-20">
            <p>Слот {i + 1}</p>
            {save ? (
              <p className="text-sm">{save.sceneName}</p>
            ) : (
              <p className="text-sm text-gray-400">Пусто</p>
            )}
            <div className="flex justify-between mt-2">
              <button onClick={() => saveToSlot(i)} className="text-xs bg-green-600 px-2 py-1 rounded">
                Сохранить
              </button>
              <button onClick={() => loadFromSlot(i)} className="text-xs bg-blue-600 px-2 py-1 rounded">
                Загрузить
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={onClose} className="mt-6 bg-red-600 px-4 py-2 rounded">
        Назад
      </button>
    </div>
  );
}
