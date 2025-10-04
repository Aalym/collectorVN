const scenes = {
    start: {
        id: "start",
        text: "Добро пожаловать в игру!",
        bg: "/src/assets/bg/room.jpg",
        choices: [
        { text: "Продолжить", next: "scene2" },
        ],
    },

    scene2: {
        id: "scene2",
        text: "Это вторая сцена.",
        bg: "/src/assets/bg/street.jpg",
        choices: [
        { text: "Назад", next: "start" },
        ],
    },
};

export default scenes;
