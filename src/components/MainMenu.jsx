export default function MainMenu({ onStart, onLoad, onExit }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl mb-8">Collector VN</h1>
      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded text-lg mb-4"
      >
        Начать игру
      </button>
      <button
        onClick={onLoad}
        className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded text-lg mb-4"
      >
        Загрузить игру
      </button>
      <button
        onClick={onExit}
        className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded text-lg"
      >
        Выйти
      </button>
    </div>
  );
}
