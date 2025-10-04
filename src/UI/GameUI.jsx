export function GameUI({ onBack, onToggleMenu }) {
  return (
    <div className="fixed bottom-2 left-2 flex gap-2">
      <button
        onClick={onBack}
        className="bg-gray-700 hover:bg-gray-500 px-3 py-1 rounded"
      >
        ⬅️ Назад
      </button>
      <button
        onClick={onToggleMenu}
        className="bg-yellow-600 hover:bg-yellow-500 px-3 py-1 rounded"
      >
        💾 Меню
      </button>
    </div>
  );
}
