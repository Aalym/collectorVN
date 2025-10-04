// App.jsx
import { useState } from "react";

// Данные новеллы
const scenes = {
  start: {
    text: "Вы просыпаетесь в тёмной комнате. Что будете делать?",
    choices: [
      { text: "Осмотреться", next: "look" },
      { text: "Крикнуть", next: "shout" },
    ],
  },
  look: {
    text: "Вы видите дверь и тусклый свет из щели. Что дальше?",
    choices: [
      { text: "Открыть дверь", next: "door" },
      { text: "Вернуться назад", next: "start" },
    ],
  },
  shout: {
    text: "Ваш крик эхом отразился от стен. Никто не ответил...",
    choices: [
      { text: "Осмотреться", next: "look" },
      { text: "Сесть и ждать", next: "end" },
    ],
  },
  door: {
    text: "Вы открываете дверь и выходите наружу. Свобода!",
    choices: [],
  },
  end: {
    text: "Вы сидите в темноте, пока время не теряет смысл...",
    choices: [],
  },
};

export default function App() {
  const [scene, setScene] = useState("start");

  const current = scenes[scene];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="max-w-xl bg-gray-800 p-6 rounded-2xl shadow-lg">
        <p className="text-lg mb-6">{current.text}</p>
        <div className="flex flex-col gap-3">
          {current.choices.length > 0 ? (
            current.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => setScene(choice.next)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
              >
                {choice.text}
              </button>
            ))
          ) : (
            <button
              onClick={() => setScene("start")}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
            >
              Играть снова
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
