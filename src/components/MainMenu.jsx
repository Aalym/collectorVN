export default function MainMenu({ onStart }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl mb-8">Collector VN</h1>
      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded text-lg"
      >
        Начать игру
      </button>
    </div>
  );
}
