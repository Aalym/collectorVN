export default function MainMenu({ onStart, onLoad, onExit }) {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', minWidth: '100vw'}}>
      <h1 className="text-4xl mb-8">Collector VN</h1>
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '100%'}}>
        <button
          onClick={onStart}
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded text-lg"
        >
          Начать игру
        </button>
        <button
          onClick={onLoad}
          className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded text-lg"
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
    </div>
  );
}
