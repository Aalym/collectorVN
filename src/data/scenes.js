const scenes = {
    start: {
        id: "start", // scene name/id
        text: "Добро пожаловать в игру!",
        bg: "/src/assets/bg/room.jpg",
        choices: [
            { text: "Продолжить", next: "scene2" },
        ],
    },
    scene2: {
        id: "street", // custom scene name/id
        text: "Это вторая сцена.",
        bg: "/src/assets/bg/street.jpg",
        choices: [
            { text: "Назад", next: "start" },
            { text: "Вперёд", next: "scene3" },
        ],
    },
    scene3: {
        id: "park", // custom scene name/id
        text: "Это третья сцена.",
        bg: "/src/assets/bg/park.jpg",
        choices: [
            { text: "Назад", next: "start" },
        ],
    },
    // Add more scenes with unique id
};

export default scenes;